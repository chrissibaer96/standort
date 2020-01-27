"use strict";
class Person {
constructor(neuerVorname, neuerNachname) {
this.Vorname = neuerVorname;
this.Nachname = neuerNachname;
}


ausgeben() {
let ausgabeText = "Vorname: " + this.Vorname + "\n";
ausgabeText += "Nachname: " + this.Nachname;
alert(ausgabeText);
}
}
let Fritz = new Person("Fritz", "Kalkbrenner");

Fritz.ausgeben();