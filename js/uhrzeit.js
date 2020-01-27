"use strict";
let myBtn = document.getElementById("myBtn");
myBtn.addEventListener("mouseover", myFunction);
myBtn.addEventListener("click", mySecondFunction);
function myFunction() {
document.getElementById("demo").innerHTML += "Mouse over!<br>";
}
function mySecondFunction() {
document.getElementById("demo").innerHTML += "Clicked!<br>"};