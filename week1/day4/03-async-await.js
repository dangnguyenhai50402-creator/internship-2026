async function getUser(id) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
  
    } catch (error) {
      console.log("Lỗi:", error);
      throw error; // đẩy lên UI xử lý
    }
  }
  
  // xử lý khi click search
  async function handleSearch() {
    const input = document.getElementById("search");
    const resultDiv = document.getElementById("result");
  
    const id = input.value;
  
    // validate input
    if (!id) {
      resultDiv.innerHTML = "Vui lòng nhập ID";
      return;
    }
  
    resultDiv.innerHTML = "Đang tải...";
  
    try {
      const user = await getUser(id);
  
      resultDiv.innerHTML = `
        <p><b>Tên:</b> ${user.name}</p>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Công ty:</b> ${user.company.name}</p>
      `;
  
    } catch (error) {
      resultDiv.innerHTML = ` Không tìm thấy user (ID: ${id})`;
    }
  }
  // có thể update enter để tìm, áp dụng debounce vào search