function main() {
      $(function () {
        // Slideshow 3
        $("#slider3").responsiveSlides({
          manualControls: '#slider3-pager',
          maxwidth: 540
        });

        // Slideshow 4
        $("#slider3").responsiveSlides({
          pager: false,
          nav: true,
          speed: 500,
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
