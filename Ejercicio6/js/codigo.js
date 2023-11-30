var letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

var numDNI = prompt("Introduce sólo los números del DNI");
var letter = prompt("Introduce la letra del DNI");

if (numDNI < 0 || numDNI > 99999999) {
  alert("El número proporcionado no es válido");
} else if (letter == letras[numDNI % 23]) {
  console.log("Coincides con la letra introducida");
} else {
  console.log("No coincide la letra");
}
