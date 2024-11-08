// Preloader
jQuery(window).on("load", function () {
  jQuery(".preloader").fadeOut(500);
});

// Back to top
jQuery(function ($) {
  if ($("#backToTop").length) {
    var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $("#backToTop").addClass("show");
        } else {
          $("#backToTop").removeClass("show");
        }
      };
    backToTop();
    $(window).on("scroll", function () {
      backToTop();
    });
    $("#backToTop").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });
  }
});
