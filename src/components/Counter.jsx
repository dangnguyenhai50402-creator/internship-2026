"use client";
// ^ Bắt buộc vì component này dùng useState và onClick
// Server Component không thể có state hay event handler

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Counter</h2>
      <p className="count-display">{count}</p>
      <div className="btn-group">
        <button onClick={() => setCount(count - 1)}>−</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default Counter;

// Tại sao count không thay đổi ngay khi gọi setCount(count + 1)?
//
// Mỗi lần render, React "chụp" state thành một snapshot bất biến.
// `count` trong lần render này là hằng số — ví dụ count = 5.
//
// Gọi setCount(count + 1) ba lần liên tiếp trong cùng một handler:
//   setCount(5 + 1) → queue: [6]
//   setCount(5 + 1) → queue: [6]   ← vẫn đọc snapshot cũ, count vẫn là 5
//   setCount(5 + 1) → queue: [6]
// Kết quả: count chỉ thành 6, không phải 8.
//
// Muốn tích lũy đúng → dùng functional update:
//   setCount(prev => prev + 1)
// React truyền giá trị mới nhất vào `prev` mỗi lần gọi.
