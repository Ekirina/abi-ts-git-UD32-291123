let number = prompt ("Escoja un número");

function calcular (number) {
  if (number % 2==0){
    alert(number + " es un número par")
  }else{
    alert (number + " es un número impar")
  }
}
calcular(number);