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
  function nombre() {
    var dni = prompt ('introduce tu numero');
    var tamano=dni.length;
    alert(tamano);
    var consonante=0;
    var vocales=0;
    var a=0;
    var e=0;
    var ies=0;
    var o=0;
    var u=0;
    dni=dni.toLocaleUpperCase();
    dni=dni.replace("Á","A");
    dni=dni.replace("É","E");
    dni=dni.replace("Ú","U");
    dni=dni.replace("Ó","O");
    dni=dni.replace("Í","I");
    for (var i = 0; i < dni.length; i++) {
      if (dni[i]=="A") {
        a++;
      }
      if (dni[i]=="E") {
        e++;
      }
      if (dni[i]=="I") {
        ies++;
      }
      if (dni[i]=="O") {
        o++;
      }
      if (dni[i]=="U") {
        u++;
      }
      if (dni[i]=="A"||dni[i]=="E"||dni[i]=="O"||dni[i]=="I"||dni[i]=="U") {
        vocales++;
      }else {
        consonante++;
      }
      if (dni[i]==" ") {
        consonante--;
      }
    }
    alert("El numero de a es :"+a);
    alert("El numero de e e:"+e);
    alert("El numero de es i:"+ies);
    alert("El numero de es o:"+o);
    alert("El numero de es u:"+u);

    alert("El numero de consonantes son : "+consonante);
    alert("El numero de vocales son :"+vocales);

  }
  function calculadora() {
    //alert("llego")
    var caracter =""

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
                      document.write(resultado+'<script type="text/javascript">setTimeout(calculadora(), 3000);</script>');
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
