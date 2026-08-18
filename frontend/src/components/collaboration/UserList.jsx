import { FiUserPlus } from "react-icons/fi";
import UserAvatar from "./UserAvatar";
import "./UserList.css";

const USERS = [
  { id: 1, name: "Alex",      color: "#00d46a", status: "online",  isYou: true,  statusLabel: "Typing…" },
  { id: 2, name: "John",      color: "#0099ff", status: "online",  isYou: false, statusLabel: "Online"  },
  { id: 3, name: "Sarah",     color: "#a855f7", status: "online",  isYou: false, statusLabel: "Online"  },
  { id: 4, name: "Mike",      color: "#f97316", status: "idle",    isYou: false, statusLabel: "Idle"    },
  { id: 5, name: "Priya",     color: "#ec4899", status: "offline", isYou: false, statusLabel: "Offline" },
];

function UserList() {
  const onlineCount = USERS.filter((u) => u.status === "online").length;

  return (
    <aside className="user-list" id="user-list-panel">
      {/* Header */}
      <div className="user-list__header">
        <span className="user-list__title">Online Users</span>
        <span className="user-list__count">{onlineCount}</span>
      </div>

      {/* User entries */}
      <div className="user-list__body">
        {USERS.map((user) => (
          <div key={user.id} id={`user-item-${user.id}`} className="user-item">
            <UserAvatar user={user} />
            <div className="user-item__info">
              <div className="user-item__name">{user.name}</div>
              <div
                className={`user-item__status-text user-item__status-text--${user.status}`}
              >
                {user.statusLabel}
              </div>
            </div>
            {user.isYou && (
              <span className="user-item__you-badge">You</span>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="user-list__footer">
        <button className="user-list__invite-btn" id="user-list-invite-btn">
          <FiUserPlus size={13} />
          Invite a Friend
        </button>
      </div>
    </aside>
  );
}

export default UserList;