(function ($, Drupal, once) {
  Drupal.behaviors.customModuleBlockBehavior = {
    attach: function (context, settings) {
      let banks = settings.hd_custom_module.banks;

      $("#custom-module-block-form", context).on("change", function () {
        let bank = $("#bank", context).val();
        let amount = +$("#amount", context).val();
        let advance = +$("#advance", context).val();
        let months = +$("#months", context).val();

        if (months <= getBank(bank).months) {
          let sum = amount - (amount / 100) * advance;
          let result = (sum + (sum / 100) * getBank(bank).percentage) / months;
          console.log(result);
          $(".result-content").html("<p>" + result + "</p>");
        } else {
          let sum = amount - (amount / 100) * advance;
          let result = (sum + (sum / 100) * 3.5) / months;
          console.log(result);
          $(".result-content").html("<p>" + result + "</p>");
        }

        check("amount", 1000, 10000);
        check("advance", 10, 90);
        check("months", 3, 36);
      });

      function check(id, lessThan, moreThan) {
        $(`#${id}`, context).focus(function () {
          $(`#${id}`, context).removeClass("error");
          $(`.error-${id}`).css("display", "none");
        });
        $(`#${id}`, context).focusout(function () {
          let val = $(`#${id}`, context).val();
          if (val < lessThan || val > moreThan) {
            $(`#${id}`, context).addClass("error");
            $(`.error-${id}`).css("display", "block");
            errorMessage(`${id}`);
          }
        });
      }

      function errorMessage(id) {
        if (id === "amount") {
          $(`.error-${id}`, context).html(
            "Put the value between 1000 and 10000"
          );
        } else if (id === "advance") {
          $(`.error-${id}`, context).html("Put the value between 10 and 90");
        } else if (id === "months") {
          $(`.error-${id}`, context).html("Put the value between 3 and 36");
        } else {
          $(`.error-${id}`, context).html("");
        }
      }

      function getBank(id) {
        let val = banks[id];
        return val;
      }
    },
  };
})(jQuery, Drupal, once);
