let ball = document.getElementById("meinBall");
let meinButton = document.getElementById("myBtn");
meinButton.addEventListener("click", verschieben);
function verschieben() {
ball.style.top = 20 + "px";
ball.style.left = 80 + "px";
}