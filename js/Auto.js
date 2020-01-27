"use strict";
class Auto {
constructor(neueFarbe, neuerPreis) {
this.farbe = neueFarbe;
this.preis = neuerPreis;
}
rabattBerechnen(prozentRabatt) {
this.preis = this.preis * (1 - prozentRabatt / 100);
}
ausgeben() {
let ausgabeText = "Farbe: " + this.farbe + "\n";
ausgabeText += "Preis: " + this.preis;
alert(ausgabeText);
}
}
let lambo = new Auto("rot", 200000);
lambo.rabattBerechnen(10);
lambo.ausgeben();