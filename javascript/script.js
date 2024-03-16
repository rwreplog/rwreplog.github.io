const nav = document.querySelector("nav");
const navBg = document.querySelector(".nav-bg");
const mobNav = document.querySelector(".mobile-nav");
const mobNavBg = document.querySelector(".mobile-nav-bg");

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
  nav.classList.toggle("open");
}

function openNavBg() {
  navBg.classList.toggle("open");
}

function openMobileNav() {
  mobNav.classList.toggle("open");
}

function openMobileNavBg() {
  mobNavBg.classList.toggle("open");
}

function openDisplayView() {
  if (nav.classList.contains("open") || mobNav.classList.contains("open")) {
    $(".display").css("display", "flex").toggle().fadeIn(2000);
    navIcon.open();
  } else {
    $(".display").fadeOut();
    navIcon.close();
  }
}

var navIcon = {
  open: () => {
    $(".nav-icon").animate(
      { deg: 405 },
      {
        duration: 800,
        step: function (now) {
          $(this).css({ transform: "rotate(" + now + "deg)" });
        },
      }
    );
  },

  close: () => {
    $(".nav-icon").animate(
      { deg: -270 },
      {
        duration: 800,
        step: function (now) {
          $(this).css({ transform: "rotate(" + now + "deg)" });
        },
      }
    );
  },
};

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
