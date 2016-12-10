function main() {
      $(function () {
        // Slideshow 3
        $("#slider3").responsiveSlides({
          manualControls: '#slider3-pager',
          maxwidth: 540
        });

        $("#slider3").responsiveSlides({
          nav: true,
          speed: 1000,
          namespace: "callbacks"
        });
      });
}

window.onload = function() {
      main();
}
