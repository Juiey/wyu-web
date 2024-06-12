document.addEventListener("DOMContentLoaded", function () {
  var modals = document.querySelectorAll(".modal");
  var buttons = document.querySelectorAll(".button.large");
  var closeButtons = document.querySelectorAll(".close");

  buttons.forEach(function (button) {
    button.onclick = function () {
      var modalId = "myModal" + button.id.match(/\d+$/)[0]; // 获取对应的弹窗ID
      var modal = document.getElementById(modalId);
      modal.style.display = "block";
      setTimeout(function () {
        modal.style.opacity = "1";
        modal.querySelector(".modal-content").style.transform = "translateY(0)";
      }, 10);
    };
  });

  closeButtons.forEach(function (closeButton) {
    closeButton.onclick = function () {
      var modalId = closeButton.getAttribute("data-modal"); // 获取对应的弹窗ID
      var modal = document.getElementById(modalId);
      modal.style.opacity = "0";
      modal.querySelector(".modal-content").style.transform =
        "translateY(-50px)";
      setTimeout(function () {
        modal.style.display = "none";
      }, 400);
    };
  });

  window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
      event.target.style.opacity = "0";
      event.target.querySelector(".modal-content").style.transform =
        "translateY(-50px)";
      setTimeout(function () {
        event.target.style.display = "none";
      }, 400);
    }
  };
});
