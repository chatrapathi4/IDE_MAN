function UserAvatar({ user }) {
  return (
    <div className="user-avatar" title={user.name}>
      <div
        className="user-avatar__circle"
        style={{ background: user.color }}
      >
        {user.name.charAt(0).toUpperCase()}
      </div>
      <span className={`user-avatar__status user-avatar__status--${user.status}`} />
    </div>
  );
}

export default UserAvatar;
