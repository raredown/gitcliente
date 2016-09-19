//Fichero javascrip
function mensajeDeFuera() {
    var prueba ="codigo";
    alert('Ave Cesar pero de fuera '+prueba);
}
function mensajeTres(texto) {
    alert(texto);
}
function operacion() {
  var numeroUno = 0; numeroDos = 0; resultado = 0;
  numeroUno = prompt ('introduce un numero');
  numeroDos = prompt ('introduce un numero');
  resultado = parseInt(numeroUno) + parseInt(numeroDos);
  alert('el reultado de la suma es: '+resultado)

  numeroUno = prompt ('introduce un numero');
  numeroDos = prompt ('introduce un numero');
  resultado = parseInt(numeroUno) - parseInt(numeroDos);
  alert('el reultado de la resta es: '+resultado)

  numeroUno = prompt ('introduce un numero');
  numeroDos = prompt ('introduce un numero');
  resultado = parseInt(numeroUno) / parseInt(numeroDos);
  alert('el reultado de la division es: '+resultado)

}
