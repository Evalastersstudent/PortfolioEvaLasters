function main() {
      $(function() {
            $(".rslides").responsiveSlides();
      });
      //$("#slider").responsiveSlides({
      //      auto: true,
      //      nav: true,
      //      speed: 500,
      //      pause: false,
      //      namespace: "callbacks",
      //      before: function () {
      //            $('.events').append("<li>before event fired.</li>");
      //      },
      //      after: function () {
      //            $('.events').append("<li>after event fired.</li>");
      //      }
      //});
}

window.onload = function() {
      main();
}


/*

.events {
  list-style: none;
  }

  .callbacks_container {
    width: 75%;
    margin: 0 auto;
    }

.callbacks {
  list-style: none;
  overflow: hidden;
  width: 75%;
  padding: 0;
  margin: 0 auto;
  }

  .callbacks_nav {
    z-index: 3;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    display: block;
    background: #fff;
    width: 13.25%;
    overflow: hidden;
    height: 400px;
    margin: -10% 0% 0% 19.25%;
    opacity: 0;
    filter: alpha(opacity=1);
    }

  .callbacks_nav.next {
    margin-left: 32.5%;
    }

  .callbacks_nav:focus {
    outline: none;
    border: 1px black solid;
    }

  .callbacks_tabs {
    margin-top: 10px;
    text-align: center;
    }

  .callbacks_tabs li {
    display: inline;
    float: none;
    _float: left;
    *float: left;
    margin-right: 5px;
    }

  .callbacks_tabs a {
    overflow: hidden;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    background: #ccc;
    background: rgba(0,0,0, .2);
    display: inline-block;
    _display: block;
    *display: block;
    -webkit-box-shadow: inset 0 0 2px 0 rgba(0,0,0,.3);
    -moz-box-shadow: inset 0 0 2px 0 rgba(0,0,0,.3);
    box-shadow: inset 0 0 2px 0 rgba(0,0,0,.3);
    width: 9px;
    height: 9px;
    }

  .callbacks_here a {
    background: #222;
    background: rgba(0,0,0, .8);
    }
*/
