console.log("%c!! HELLO !!","color: red; font-size: 30px;");


if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", function() {
    loaded();
  });
} else if (document.attachEvent) {
  document.attachEvent("onreadystatechange", function() {
    loaded();
  });
}
function loaded() {
  setInterval(loop, 300);
}
var x = 0;
var titleText = ["*", "e", "ec", "ecl", "ecli", "eclip", "eclipz", "eclipze", "eclipz", "eclip", "ecli", "ecl", "ec"];
function loop() {
  document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}
