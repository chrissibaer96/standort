"use strict";
document.getElementById('meinButton').addEventListener('click', zeigMirDieZeit);
function zeigMirDieZeit() {
let datum = Date();
document.getElementById("demo").innerHTML = datum;
}