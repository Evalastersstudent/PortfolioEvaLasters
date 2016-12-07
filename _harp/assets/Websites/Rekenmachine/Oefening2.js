function main() {
      var knop = document.getElementsByTagName("button");
      var bereken = document.getElementById("bereken");
      var wissen = document.getElementById("wissen");
      var teller = 0;
      while (teller < knop.length) {
            knop[teller].onclick = function buttonLezen() {
                  document.getElementById("tekstkader").value+=this.innerHTML;
            }
            teller = teller + 1;
      }
      wissen.onclick = function tekstkaderLezen() {
            document.getElementById("tekstkader").value = "";
      }
      bereken.onclick = function uitkomst() {
            var uitkomst = eval(document.getElementById("tekstkader").value);
            document.getElementById("tekstkader").value = uitkomst;
      }
}

window.onload=function() {
      main();
}
