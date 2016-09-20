//Un usuario intoduce un numero el programad determinara si el numero introducido es multiplo 5
//En el csao de que sea multiplo de 5 el programa mostrara en pantalla los 5 numero consecutivo



function multiplo() {
  numercito = prompt ('introduce un numero');
  var numero = parseInt(numercito)
  if (numero%5==0) {
    var resultado = numercito;
    for (var i = 0; i < 6; i++) {
      numero = numero + 5;
      resultado = resultado +" - "+numero ;
    }
    document.write(resultado);
  }else {
    resultado = "";
    for (var i = 0; i <= 10; i++) {
      resultacito = parseInt(numero) * i;
      resultado =resultado + i +" x "+numero+" = "+resultacito+'<br>';
    }
    document.write(resultado)
  }
  }
  function calculadora() {
    //alert("llego")
    var caracter =""
    while(caracter!="x"){
      simbolo = prompt ('introduce un simbolo o x para finalizar');
      switch(simbolo) {
            case "+":
                  numeroUno = prompt ('introduce un numero');
                  numeroDos = prompt ('introduce un numero');
                  resultado = parseInt(numeroUno) + parseInt(numeroDos);
                  alert(resultado);
                break;
            case "-":
                      numeroUno = prompt ('introduce un numero');
                      numeroDos = prompt ('introduce un numero');
                      resultado = parseInt(numeroUno) - parseInt(numeroDos);
                      document.write(resultado);
                  break;
            case "*":
                  numeroUno = prompt ('introduce un numero');
                  numeroDos = prompt ('introduce un numero');
                  resultado = parseInt(numeroUno) * parseInt(numeroDos);
                  document.write(resultado);
              break;
            case "/":
                    numeroUno = prompt ('introduce un numero');
                    numeroDos = prompt ('introduce un numero');
                    resultado = parseInt(numeroUno) / parseInt(numeroDos);
                    document.write(resultado);
              break;
              case "x":
                    caracter="x"
                  break;
            default:
                document.write("simbolo no reconocido");


        }
    }

  }
