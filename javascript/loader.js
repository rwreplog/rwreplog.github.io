var loader = {
  initialize: function () {
    var html =
      '<div class="loading-overlay"></div>' +
      '<div class="loading-overlay-image-container">' +
      //   '<img src="assets/loading.gif" class="loading-overlay-img"/>' +
      "Loading..." +
      "</div>";

    $("body").append(html);
  },

  showLoader: function () {
    jQuery(".loading-overlay").show();
    jQuery(".loading-overlay-image-container").show();
  },

  hideLoader: function () {
    jQuery(".loading-overlay").fadeOut();
    jQuery(".loading-overlay-image-container").fadeOut();
  },
};
