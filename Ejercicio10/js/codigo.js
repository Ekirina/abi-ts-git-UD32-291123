var cadena = prompt("Escribe una frase palíndroma")

function infoCadena(str) {
  var re = /[\W_]/g;
  var lowRegCad = str.toLowerCase().replace(re, '');
  var reverseCad = lowRegCad.split('').reverse().join(''); 
  return reverseCad === lowRegCad;
}
alert(infoCadena(cadena));