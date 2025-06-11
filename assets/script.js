// script.js
document.addEventListener("DOMContentLoaded", function () {
  // 為每個按鈕加上點擊事件
  document.querySelectorAll(".link-button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const url = btn.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank");
      }
    });
  });
});
