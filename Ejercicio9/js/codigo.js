var cadena = prompt("Escribe una palabra")

function infoCadena (cadena) {
  if (cadena === cadena.toUpperCase()) {
      alert("La cadena está formada sólo por mayúsculas.")
  }
  else if (cadena === cadena.toLowerCase()) {
      alert("La cadena está formada sólo por minúsculas.")
  }
  else {
      alert("La cadena es una mezcla de mayúsculas y minúsculas.")
  }
}
infoCadena(cadena);