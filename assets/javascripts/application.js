function main() {
      $(function () {
        // Slideshow 3
        $("#slider3").responsiveSlides({
          manualControls: '#slider3-pager',
          maxwidth: 540
        });

        $("#slider3").responsiveSlides({
          nav: true
        });
      });
}

window.onload = function() {
      main();
}
