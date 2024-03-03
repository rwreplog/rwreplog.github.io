$(".nav-link-2").on("click", () => {
  openNavBg();
  openNav();
});

$(".nav-mobile-link-2").on("click", () => {
  openMobileNavBg();
  openMobileNav();
});

function openNav() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("open");
}

function openNavBg() {
  const navBg = document.querySelector(".nav-bg");
  navBg.classList.toggle("open");
}

function openMobileNav() {
  const nav = document.querySelector(".mobile-nav");
  nav.classList.toggle("open");
}

function openMobileNavBg() {
  const navBg = document.querySelector(".mobile-nav-bg");
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
