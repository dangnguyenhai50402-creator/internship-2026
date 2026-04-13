function debounce(fn, delay){
    // Closure: biến timer tồn tại trong scope của debounce.
    // Hàm được return ra giữ tham chiếu đến timer, fn, delay
    // nên chúng không bị xóa dù debounce() đã chạy xong.
    let timer;

    return function(...args){
        clearTimeout(timer); // hủy timer cũ nếu có
        timer = setTimeout(() => {
            fn(...args); // chỉ gọi fn khi không bị gọi lại trong delay ms
        }, delay);
    }
}

const input = document.querySelector("#search");
const result = document.querySelector("#result");

const debouncedLog = debounce((text) => {
    result.textContent = "Kết quả tìm kiếm: "+ text;
},1000);

input.addEventListener("input", (e) => {
    debouncedLog(e.target.value);
});