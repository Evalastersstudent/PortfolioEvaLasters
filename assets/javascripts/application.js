function main() {
      $(function() {
            $(".rslides").responsiveSlides();
      });
      $(function() {
            $("#slider").responsiveSlides(
                  "timeout": 2000,          // Integer: Time between slide transitions, in milliseconds
                  "pager": true,           // Boolean: Show pager, true or false
                  "nav": false,             // Boolean: Show navigation, true or false
                  "random": false,          // Boolean: Randomize the order of the slides, true or false
                  "pause": false,           // Boolean: Pause on hover, true or false
                  "pauseControls": true,    // Boolean: Pause when hovering controls, true or false
                  "prevText": "Previous",   // String: Text for the "previous" button
                  "nextText": "Next",       // String: Text for the "next" button
                  "maxwidth": "",           // Integer: Max-width of the slideshow, in pixels
                  "navContainer": "",       // Selector: Where auto generated controls should be appended to, default is after the <ul>
                  "manualControls": "",     // Selector: Declare custom pager navigation
                  "namespace": "large-btns",   // String: change the default namespace used
                  "before": $.noop,         // Function: Before callback
                  "after": $.noop           // Function: After callback
            );
      });
}

window.onload = function() {
      main();
}
