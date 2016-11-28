function main() {
      var home = document.getElementById("home");
      var over = document.getElementById("over");
      var topverslagen = document.getElementById("topverslagen");
      var contact = document.getElementById("contact");
      var logo = document.getElementById("logo");
      home.onclick = function(){
        home.style.color="deeppink";
      }
      over.onclick = function(){
        home.style.color="white";
      }
      topverslagen.onclick = function(){
        home.style.color="white";
      }
      contact.onclick = function(){
        home.style.color="white";
      }
      logo.onclick = function(){
        home.style.color="deeppink";
      }
}

window.onload = function() {
      main();
}
