/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var person = prompt("Please palabra");
function palindromo(cadena) {
 
  var resultado = "La cadena \""+cadena+"\" \n";
  var cadenaOriginal = cadena.toLowerCase();
  var letrasEspacios = cadenaOriginal.split("");
  var cadenaSinEspacios = "";
  
  for(i in letrasEspacios) {
    if(letrasEspacios[i] != " ") {
      cadenaSinEspacios += letrasEspacios[i];
    }
  }
 
  var letras = cadenaSinEspacios.split("");
  var letrasReves = cadenaSinEspacios.split("").reverse();

  var iguales = true;
  for(i in letras) {
    if(letras[i] == letrasReves[i]) {
 
    }
    else {

      iguales = false;
    }
  }
 
  if(iguales) {
    resultado += " es un palíndromo";
  }
  else {
    resultado += " no es un palíndromo";
  }
 
  return resultado;
}
// alert(palindromo(person));
