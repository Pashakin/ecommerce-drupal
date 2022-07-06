(function ($, Drupal, once) {
  Drupal.behaviors.burgerMenuBehavior = {
    attach: function (context, settings) {
      $(".region-header__burger-menu", context).on("click", function () {
        $(this).toggleClass("region-header__burger-menu_active");
        $(".region-header__navigation-menu").toggleClass(
          "region-header__navigation-menu_active"
        );
      });
    },
  };

  Drupal.behaviors.burgerFilterBehavior = {
    attach: function (context, settings) {
      $(".filter-burger", context).on("click", function () {
        $(this).toggleClass("filter-burger_active");
        $(".region-left-sitebar").toggleClass("region-left-sitebar_active");
      });
    },
  };

  // // The same on JS, but don't work

  // Drupal.behaviors.burgerMenuBehavior = {
  //   attach: function (context, settings) {
  //     const burgerMenu = document.querySelector(".region-header__burger-menu");
  //     const navMenu = document.querySelector(".region-header__navigation-menu");

  //     burgerMenu.addEventListener("click", function () {
  //       burgerMenu.classList.toggle("region-header__burger-menu_active");
  //       navMenu.classList.toggle("region-header__navigation-menu_active");
  //     });
  //   },
  // };

  // Drupal.behaviors.burgerFilterBehavior = {
  //   attach: function (context, settings) {
  //     const burgerFilter = document.querySelector(".filter-burger");
  //     const navFilter = document.querySelector(".region-left-sitebar");

  //     burgerFilter.addEventListener("click", function () {
  //       burgerFilter.classList.toggle("filter-burger_active");
  //       navFilter.classList.toggle("region-left-sitebar_active");
  //     });
  //   },
  // };

  Drupal.behaviors.mostPopularSliderBehavior = {
    attach: function (context, settings) {
      $(".most-popular .view-content", context).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    },
  };
})(jQuery, Drupal, once);
