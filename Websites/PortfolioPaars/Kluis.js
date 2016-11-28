function main() {
			var getal = document.getElementsByClassName("getal");
			var scherm = document.getElementsByTagName("input")[0];
			var clear = document.getElementsByClassName("clear")[0];
			var ga = document.getElementsByClassName("ga")[0];
			var teller = 0;
			while (teller < getal.length) {
						getal[teller].onclick = function() {
									scherm.value += this.getAttribute("data-no");
						}
						teller++;
			}
			clear.onclick = function() {
						scherm.value = "";
			}
			ga.onclick = function() {
						if (scherm.value === "1234") {
									console.log("De code klopt!");
									scherm.value = "Safe unlocked";
									setInterval(function () {
												var main = document.getElementById("main");
												main.className = "";
												var header = document.getElementById("header");
												header.className = "onzichtbaar";
												var body = document.getElementById("body");
												body.style.backgroundColor = "rgba(123,104,238,1)";
												body.style.color = "lawngreen";
									}, 1000);
						} else {
									console.log("Oops! Probeer het nog eens!")
									scherm.value = "";
						}
			}
}

window.onload = function() {
			main();
}



//De geheime code voor deze kluis is 1234
