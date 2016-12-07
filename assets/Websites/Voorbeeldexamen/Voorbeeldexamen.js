function main() {
      var foto = document.getElementsByTagName("img");
      var titel = document.getElementsByTagName("h2");
      var kader = document.getElementsByClassName("roep");
      var udaskader = document.getElementById("spanUdas");
      var lijstje = [];
      var lijstje2 = [];
      var lijstje3 = [];
      var lijstje4 = [];
      var i = 0;
      var bool1 = true;
      while (i < foto.length) {
            lijstje.push(foto[i].getAttribute("src"));
            lijstje2.push(titel[i].innerHTML);
            lijstje3.push(kader[i].classList.item(1));
            lijstje4.push(kader[i].classList.item(1));
            i++;
      }
      function wisselen() {
            var a = 0;
            var teller = lijstje.shift();
            var teller2 = lijstje2.shift();
            var teller3 = lijstje3.shift();
            lijstje.push(teller);
            lijstje2.push(teller2);
            lijstje3.push(teller3);
            while(a < lijstje.length){
                  foto[a].setAttribute("src", lijstje[a]);
                  titel[a].innerHTML = lijstje2[a];
                  kader[a].classList.remove(lijstje4[a]);
                  kader[a].classList.add(lijstje3[a]);
                  a++;
            }
            var teller4 = lijstje4.shift();
            lijstje4.push(teller4);
            if (bool1 === true) {
                  udaskader.style.transform = "rotate(0deg)";
                  bool1 = false;
            } else {
                  udaskader.style.transform = "rotate(180deg)";
                  bool1 = true;
            }
      }
      setInterval(wisselen,5000);
}
window.onload = function() {
      main();
}
