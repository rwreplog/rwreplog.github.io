const nav = document.querySelector("nav");
const navBg = document.querySelector(".nav-bg");
const mobNav = document.querySelector(".mobile-nav");
const mobNavBg = document.querySelector(".mobile-nav-bg");
const highlights = document.querySelectorAll(".highlight");

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

const hl1 = document.querySelector("#hl1");
const hl2 = document.querySelector("#hl2");
const hl3 = document.querySelector("#hl3");

const update = ({ x, y }) => {
  const bounds = hl1.getBoundingClientRect();
  const posX = x - bounds.x;
  const posY = y - bounds.y;
  const ratioX = posX / bounds.width;
  const ratioY = posY / bounds.height;

  hl1.style.setProperty("--ratio-x", ratioX);
  hl1.style.setProperty("--ratio-y", ratioY);

  const bounds2 = hl2.getBoundingClientRect();
  const posX2 = x - bounds2.x;
  const posY2 = y - bounds2.y;
  const ratioX2 = posX2 / bounds2.width;
  const ratioY2 = posY2 / bounds2.height;

  hl2.style.setProperty("--ratio-x", ratioX2);
  hl2.style.setProperty("--ratio-y", ratioY2);

  const bounds3 = hl3.getBoundingClientRect();
  const posX3 = x - bounds3.x;
  const posY3 = y - bounds3.y;
  const ratioX3 = posX3 / bounds3.width;
  const ratioY3 = posY3 / bounds3.height;

  hl3.style.setProperty("--ratio-x", ratioX3);
  hl3.style.setProperty("--ratio-y", ratioY3);
};

document.body.addEventListener("pointermove", update);
