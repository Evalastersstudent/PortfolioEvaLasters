function main() {
      $(function () {
        // Slideshow 3
        $("#slider3").responsiveSlides({
          manualControls: '#slider3-pager',
          maxwidth: 540
        });

        $("#slider3").responsiveSlides({
          nav: false,
          namespace: "callbacks",
          before: function () {
            $('.events').append("<li>before event fired.</li>");
          },
          after: function () {
            $('.events').append("<li>after event fired.</li>");
          }
        });
      });
}

window.onload = function() {
      main();
}
