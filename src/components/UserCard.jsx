// Không cần 'use client' — component này chỉ nhận props và render HTML
// Không có state, không có event → có thể là Server Component

// Props name và email là read-only.
// Data chỉ chảy một chiều: parent truyền xuống qua props, UserCard không sửa được.

function UserCard({ name, email }) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .slice(-2)
    .join("")
    .toUpperCase();

  return (
    <div className="user-card">
      <div className="avatar">{initials}</div>
      <div className="user-info">
        <p className="user-name">{name}</p>
        <p className="user-email">{email}</p>
      </div>
    </div>
  );
}

export default UserCard;
