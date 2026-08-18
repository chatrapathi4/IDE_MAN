import { useState, useCallback } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import EditorToolbar from "../components/editor/EditorToolbar";
import CodeEditor from "../components/editor/CodeEditor";
import UserList from "../components/collaboration/UserList";
import ExecutionStatus from "../components/output/ExecutionStatus";
import Console from "../components/output/Console";
import "./EditorPage.css";

/* ---- Default code snippets per language ---- */
const DEFAULT_CODE = {
  python: `# Welcome to CodeSync — Real-time Collaborative Editor
# Write your Python code below and click Run!

def greet(name):
    return f"Hello, {name}! Welcome to CodeSync."

def fibonacci(n):
    """Return the first n Fibonacci numbers."""
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result

if __name__ == "__main__":
    print(greet("World"))
    print("Fibonacci(10):", fibonacci(10))
`,
  javascript: `// Welcome to CodeSync — Real-time Collaborative Editor
// Write your JavaScript code below and click Run!

function greet(name) {
  return \`Hello, \${name}! Welcome to CodeSync.\`;
}

function fibonacci(n) {
  const result = [];
  let [a, b] = [0, 1];
  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }
  return result;
}

console.log(greet("World"));
console.log("Fibonacci(10):", fibonacci(10));
`,
  java: `// Welcome to CodeSync — Real-time Collaborative Editor
import java.util.Arrays;

public class Main {
    public static String greet(String name) {
        return "Hello, " + name + "! Welcome to CodeSync.";
    }

    public static int[] fibonacci(int n) {
        int[] result = new int[n];
        int a = 0, b = 1;
        for (int i = 0; i < n; i++) {
            result[i] = a;
            int temp = a + b;
            a = b;
            b = temp;
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(greet("World"));
        System.out.println("Fibonacci(10): " + Arrays.toString(fibonacci(10)));
    }
}
`,
  cpp: `// Welcome to CodeSync — Real-time Collaborative Editor
#include <iostream>
#include <vector>
#include <string>
using namespace std;

string greet(const string& name) {
    return "Hello, " + name + "! Welcome to CodeSync.";
}

vector<int> fibonacci(int n) {
    vector<int> result;
    int a = 0, b = 1;
    for (int i = 0; i < n; i++) {
        result.push_back(a);
        int temp = a + b;
        a = b;
        b = temp;
    }
    return result;
}

int main() {
    cout << greet("World") << endl;
    cout << "Fibonacci(10): ";
    auto fib = fibonacci(10);
    for (int x : fib) cout << x << " ";
    cout << endl;
    return 0;
}
`,
};

/* ---- Simulated run output per language ---- */
const SIMULATED_OUTPUT = {
  python: [
    { id: 1, type: "system",  text: "docker run python:3.11-slim python main.py" },
    { id: 2, type: "normal",  text: "" },
    { id: 3, type: "normal",  text: "Hello, World! Welcome to CodeSync." },
    { id: 4, type: "normal",  text: "Fibonacci(10): [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]" },
    { id: 5, type: "normal",  text: "" },
    { id: 6, type: "success", text: "✓ Execution completed in 0.12 s  |  Memory: 12.4 MB" },
  ],
  javascript: [
    { id: 1, type: "system",  text: "docker run node:20-slim node solution.js" },
    { id: 2, type: "normal",  text: "" },
    { id: 3, type: "normal",  text: "Hello, World! Welcome to CodeSync." },
    { id: 4, type: "normal",  text: "Fibonacci(10): [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]" },
    { id: 5, type: "normal",  text: "" },
    { id: 6, type: "success", text: "✓ Execution completed in 0.08 s  |  Memory: 28.1 MB" },
  ],
  java: [
    { id: 1, type: "system",  text: "docker run openjdk:21-slim java Main.java" },
    { id: 2, type: "normal",  text: "" },
    { id: 3, type: "normal",  text: "Hello, World! Welcome to CodeSync." },
    { id: 4, type: "normal",  text: "Fibonacci(10): [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]" },
    { id: 5, type: "normal",  text: "" },
    { id: 6, type: "success", text: "✓ Execution completed in 0.45 s  |  Memory: 64.2 MB" },
  ],
  cpp: [
    { id: 1, type: "system",  text: "docker run gcc:13 sh -c 'g++ solution.cpp -o a && ./a'" },
    { id: 2, type: "normal",  text: "" },
    { id: 3, type: "normal",  text: "Hello, World! Welcome to CodeSync." },
    { id: 4, type: "normal",  text: "Fibonacci(10): 0 1 1 2 3 5 8 13 21 34" },
    { id: 5, type: "normal",  text: "" },
    { id: 6, type: "success", text: "✓ Execution completed in 0.04 s  |  Memory: 4.8 MB" },
  ],
};

const STATUS_MAP = {
  python:     { runtime: "0.12 s", memory: "12.4 MB" },
  javascript: { runtime: "0.08 s", memory: "28.1 MB" },
  java:       { runtime: "0.45 s", memory: "64.2 MB" },
  cpp:        { runtime: "0.04 s", memory: "4.8 MB" },
};

function EditorPage() {
  const [language, setLanguage]   = useState("python");
  const [code, setCode]           = useState(DEFAULT_CODE["python"]);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput]       = useState(null);
  const [status, setStatus]       = useState("Ready");
  const [runtime, setRuntime]     = useState("— s");
  const [memory, setMemory]       = useState("— MB");

  /* ---- Language change ---- */
  const handleLanguageChange = useCallback((lang) => {
    setLanguage(lang.id);
    setCode(DEFAULT_CODE[lang.id]);
    setOutput(null);
    setStatus("Ready");
    setRuntime("— s");
    setMemory("— MB");
  }, []);

  /* ---- Run simulation ---- */
  const handleRun = useCallback(() => {
    setIsRunning(true);
    setOutput([{ id: 0, type: "system", text: "Initializing Docker container…" }]);
    setStatus("Running");
    setRuntime("— s");
    setMemory("— MB");

    setTimeout(() => {
      setIsRunning(false);
      setOutput(SIMULATED_OUTPUT[language]);
      setStatus("Completed");
      setRuntime(STATUS_MAP[language].runtime);
      setMemory(STATUS_MAP[language].memory);
    }, 1800);
  }, [language]);

  /* ---- Save ---- */
  const handleSave = useCallback(() => {
    const blob = new Blob([code], { type: "text/plain" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = `main.${language === "cpp" ? "cpp" : language === "java" ? "java" : language === "javascript" ? "js" : "py"}`;
    a.click();
    URL.revokeObjectURL(url);
  }, [code, language]);

  /* ---- Reset ---- */
  const handleReset = useCallback(() => {
    setCode(DEFAULT_CODE[language]);
    setOutput(null);
    setStatus("Ready");
    setRuntime("— s");
    setMemory("— MB");
  }, [language]);

  return (
    <div className="editor-page" id="editor-page">
      <Navbar />

      <div className="editor-page__main">
        {/* Sidebar */}
        <Sidebar />

        {/* Center: Toolbar + Editor + Status + Console */}
        <div className="editor-page__center">
          <EditorToolbar
            language={language}
            onLanguageChange={handleLanguageChange}
            onRun={handleRun}
            onSave={handleSave}
            onReset={handleReset}
            isRunning={isRunning}
          />

          <CodeEditor
            language={language === "cpp" ? "cpp" : language}
            code={code}
            onChange={setCode}
          />

          <ExecutionStatus
            status={status}
            runtime={runtime}
            memory={memory}
            isRunning={isRunning}
          />

          <Console output={output} isRunning={isRunning} />
        </div>

        {/* Right: Collaboration Panel */}
        <div className="editor-page__right">
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default EditorPage;