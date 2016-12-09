function main() {
      $(function() {
            $(".rslides").responsiveSlides();
      });
      $(function() {
            $("#slider").responsiveSlides(
                  "timeout": 2000,          // Integer: Time between slide transitions, in milliseconds
                  "pager": true,           // Boolean: Show pager, true or false
                  "nav": false,             // Boolean: Show navigation, true or false
                  "random": true,          // Boolean: Randomize the order of the slides, true or false
                  "pauseControls": true,    // Boolean: Pause when hovering controls, true or false
                  "namespace": "large-btns",   // String: change the default namespace used
            );
      });
}

window.onload = function() {
      main();
}
