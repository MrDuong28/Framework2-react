// script.js
// Lấy phần tử nút
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Hiển thị nút khi cuộn xuống 20px từ đầu trang
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Cuộn lên đầu trang khi click vào nút
scrollToTopBtn.addEventListener("click", function() {
  document.body.scrollTop = 0; // Đối với Safari
  document.documentElement.scrollTop = 0; // Đối với Chrome, Firefox, IE và Opera
});
