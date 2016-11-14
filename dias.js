function diasPasado(){
  var fechaNueva= new Date();
  //var diahoy = fechaNueva.getDay();
  //var meshoy= fechaNueva.getMonth();
  //var anohoy= fechaNueva.getYear();
  var valorNueva = fechaNueva.valueOf();
  //var dia = prompt ('introduce tu dia');
  //var mes = prompt ('introduce tu mes');
  //var ano = prompt ('introduce tu ano');
  //var fechaNacimiento = new Date(ano, mes, dia);
  //var valorVieja = fechaNacimiento.valueOf();
  //var valorFechaTermino=(valorNueva-valorVieja)*(100*60*60*24);

  var x = "Total Height: " + screen.height;
  alert(x);
  //document.write(valorFechaTermino);
}
function interacioncilla() {
  //  var miventana= new Window();
    var myventana = window.open("", "Nuevo titulo ", "width=500,height=500");

}
function crearventana(cantidad) {
    var myventana = window.open("",cantidad,"width=500,height=500");
    myventana.document.write("<html><head></head> <script> function cerrarVentana(){window.close() } </script> <body><h1>"+"cantidad"+"</h1>  <input type='button' value='Click me' onclick='cerrarVentana()'>  </body><footer></footer></html>");

}
function abrirventana() {
  var cantidad = prompt ('introduce un numero');
  for (var i = 0; i < cantidad; i++) {
    var myventanita = window.open("",i,"width=500,height=500");
    myventanita.document.write("<html><head></head> <script> function cerrarVentana(){window.close() } </script> <body><h1>"+i+"</h1>  <input type='button' value='Click me' onclick='cerrarVentana()'>  </body><footer></footer></html>");
  }
}
