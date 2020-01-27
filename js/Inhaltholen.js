document.getElementById("meineEingabe").value = "Vorbelegung";
document.getElementById("meinButton").addEventListener('click', holeInhalt);
function holeInhalt() {
let inhalt = document.getElementById("meineEingabe").value;
alert(inhalt);
}