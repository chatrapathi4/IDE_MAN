import { FiActivity, FiClock, FiCpu } from "react-icons/fi";
import "./ExecutionStatus.css";

function ExecutionStatus({ status = "Ready", runtime = "0.00 s", memory = "0 MB", isRunning }) {
  const statusClass = isRunning
    ? "exec-status__value--running"
    : status === "Error"
    ? "exec-status__value--error"
    : "exec-status__value--ready";

  const displayStatus = isRunning ? "Executing…" : status;

  return (
    <div className="exec-status" id="execution-status-bar">
      {/* Status */}
      <div className="exec-status__item">
        <div className="exec-status__icon exec-status__icon--status">
          <FiActivity size={14} />
        </div>
        <div className="exec-status__info">
          <span className="exec-status__label">Status</span>
          <span className={`exec-status__value ${statusClass}`}>
            {displayStatus}
          </span>
        </div>
      </div>

      {/* Runtime */}
      <div className="exec-status__item">
        <div className="exec-status__icon exec-status__icon--time">
          <FiClock size={14} />
        </div>
        <div className="exec-status__info">
          <span className="exec-status__label">Runtime</span>
          <span className="exec-status__value">{runtime}</span>
        </div>
      </div>

      {/* Memory */}
      <div className="exec-status__item">
        <div className="exec-status__icon exec-status__icon--memory">
          <FiCpu size={14} />
        </div>
        <div className="exec-status__info">
          <span className="exec-status__label">Memory</span>
          <span className="exec-status__value">{memory}</span>
        </div>
      </div>
    </div>
  );
}

export default ExecutionStatus;