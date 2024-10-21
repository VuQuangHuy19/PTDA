// Script for showing/hiding password
function togglePassword() {
  const passwordInput = document.getElementById("password");
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
}

// Script for handling submenus
document.addEventListener("DOMContentLoaded", function () {
  const destinationsLink = document.getElementById("destinations");
  const destinationsSubmenu = document.getElementById("destinationsSubmenu");
  const closeSubmenu = destinationsSubmenu.querySelector(".close-submenu");

  destinationsLink.addEventListener("click", function (e) {
    e.preventDefault();
    destinationsSubmenu.classList.toggle("active");
  });

  closeSubmenu.addEventListener("click", function () {
    destinationsSubmenu.classList.remove("active");
  });

  // Close submenu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !destinationsSubmenu.contains(e.target) &&
      e.target !== destinationsLink
    ) {
      destinationsSubmenu.classList.remove("active");
    }
  });
});
