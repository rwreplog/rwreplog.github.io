$(".nav-link-2").on("click", () => {
  openNavBg();
  openNav();
  openDisplayView();
});

$(".nav-mobile-link-2").on("click", () => {
  openMobileNavBg();
  openMobileNav();
  openDisplayView();
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

function openDisplayView() {
  if ($(".display").css("display") === "flex") {
    $(".display").fadeOut();
  } else {
    $(".display").css("display", "flex").toggle().fadeIn(2000);
  }
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
