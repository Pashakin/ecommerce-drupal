(function ($, Drupal, once) {
  Drupal.behaviors.indexBehavior = {
    attach: function (context, settings) {
      //code.
    },
  };

  Drupal.behaviors.burgerMenuBehavior = {
    attach: function (context, settings) {
      const burgerMenu = document.querySelector(".region-header__burger-menu");
      const navMenu = document.querySelector(".region-header__navigation-menu");

      burgerMenu.addEventListener("click", function () {
        burgerMenu.classList.toggle("region-header__burger-menu_active");
        navMenu.classList.toggle("region-header__navigation-menu_active");
      });
    },
  };
})(jQuery, Drupal, once);
