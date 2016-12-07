var i = 0;
function main() {
      var barcelona = document.getElementById("reis1");
      var venetie = document.getElementById("reis2");
      var ierland = document.getElementById("reis3");
      var vakanties = [barcelona, venetie, ierland];

      barcelona.style.display = "none";
      venetie.style.display = "none";
      ierland.style.display = "none";

      vakanties[i].style.display = "block";
      if (vakanties[i].getAttribute("data-id") == "special") {
            document.body.style.backgroundColor = "darkkhaki";
            document.getElementById("reis3").style.border = "olivedrab solid 12.5px";
      } else {
            document.body.style.backgroundColor = "lightskyblue";
      };
      i++;
      if (i >= vakanties.length) {
            i = 0;
      }
}

setInterval("main()", 5000);

window.onload = function() {
      main();
}
