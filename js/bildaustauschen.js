let dasBild = document.getElementById("meinBild");
dasBild.addEventListener("click", bildAendern);
function bildAendern() {
let image = document.getElementById('meinBild');
if (image.src.match("bulbon")) {
image.src = "images/thlogo.png";
} else {
image.src = "images/pic_bulbon.gif";
}
}
