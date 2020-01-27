let fruits, text, fLen, i;
fruits = ["Apfel", "Banane", "Ananas"];
let text = "<ul>";
for (let i=0; i<fLen; i++){
text = text + "<li>" + fruits[i] + "<\li> ";
}
text = text + "</ul>";
document.getElementById("demo").innerHTML = text;


