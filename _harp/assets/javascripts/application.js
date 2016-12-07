function main() {
      $(function() {
            $(".rslides").responsiveSlides(
                  auto: true,
                  speed: 250,
                  timeout: 500,
                  pager: true,
                  random: true
            );
      });
}

window.onload = function() {
      main();
}
