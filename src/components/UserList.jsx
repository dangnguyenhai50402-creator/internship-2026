// Server Component — chỉ render data tĩnh, không cần 'use client'

import UserCard from "./UserCard";

const USERS = [
  { id: 1, name: "Nguyễn Hải Đăng", email: "dang.nh@comitor.ai" },
  { id: 2, name: "Trần Minh Khoa", email: "khoa.tm@comitor.ai" },
  { id: 3, name: "Lê Thị Hương", email: "huong.lt@comitor.ai" },
  { id: 4, name: "Phạm Quốc Bảo", email: "bao.pq@comitor.ai" },
  { id: 5, name: "Vũ Thanh Lam", email: "lam.vt@comitor.ai" },
];

function UserList() {
  return (
    <div className="user-list">
      {USERS.map((user) => (
        <UserCard key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default UserList;

/*
Tại sao cần prop `key`?
React dùng key để nhận dạng từng phần tử trong danh sách khi reconciliation.
Không có key → React so sánh theo index (vị trí) → thêm/xóa ở đầu danh sách
khiến React patch nhầm toàn bộ phần tử phía sau, state nội bộ bị gán sai.

Key phải:
- Duy nhất trong danh sách (không phải toàn app)
- Ổn định — dùng id từ data, KHÔNG dùng index của .map()
vì index thay đổi khi sort/filter → mất đi lợi ích của key
*/
