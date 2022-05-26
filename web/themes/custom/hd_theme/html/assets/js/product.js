(function ($, Drupal, once) {
  Drupal.behaviors.productSliderBehavior = {
    attach: function (context, settings) {
      $(".product__images .slider-for .product-slider").once().slick({});
      $(".product__images .slider-nav .product-slider").once().slick({
        asNavFor: ".product__images .slider-for .product-slider",
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        variableWidth: true,
      });
    },
  };

  Drupal.behaviors.productTabsBehavior = {
    attach: function (context, settings) {
      $(function () {
        $(".variation__tabs-nav").on(
          "click",
          "div:not(.field-tab__item_active)",
          function () {
            $(this)
              .addClass("field-tab__item_active")
              .siblings()
              .removeClass("field-tab__item_active")
              .closest("div.tabs")
              .find("div.field-content__item")
              .removeClass("field-content__item_active")
              .eq($(this).index())
              .addClass("field-content__item_active");
          }
        );
      });
    },
  };

  Drupal.behaviors.fancyboxBehavior = {
    attach: function (context, settings) {
      Fancybox.bind(".slider-for .slick-slide img", {
        // Your options go here
      });
    },
  };
})(jQuery, Drupal, once);
