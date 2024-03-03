function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

$(".nav-link-2").on("click", () => {
  openNavBg();
  openNav();
});

function openNav() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("open");
}

function openNavBg() {
  const navBg = document.querySelector(".nav-bg");
  navBg.classList.toggle("open");
}

var loader = {
  showLoader: function () {
    jQuery(".loading-overlay").show();
    jQuery(".loading-overlay-image-container").show();
  },

  hideLoader: function () {
    jQuery(".loading-overlay").fadeOut();
    jQuery(".loading-overlay-image-container").fadeOut();
  },
};
