function main() {
      $(function() {
            $(".rslides").responsiveSlides(
                  auto: true,
                  speed: 250,
                  timeout: 500,
                  pager: false,
                  random: false
            );
      });
}

window.onload = function() {
      main();
}
