function pasapalabra() {
  //var myventana = window.open("",cantidad,"width=500,height=500");
  //myventana.document.write("<html><head></head> <script> function cerrarVentana(){window.close() } </script> <body><h1>"+"cantidad"+"</h1>  <input type='button' value='Click me' onclick='cerrarVentana()'>  </body><footer></footer></html>");
var array = new Array();
for (var i = 0; i <11; i++) {
  var palabres = prompt ('introduce una palabra');
  array.push(palabres);

  }
  alert(array[0]);
  var myventana = window.open("","cantidad","width=500,height=500");
  for (var i = array.length; i > array.length-3; i--) {
  myventana.document.write(array[i-1]);
    myventana.document.write("<br>");
  }
}
