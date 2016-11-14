function Equipo(nombre,ano,categoria,puntos) {
  this.nombre = nombre;
  this.ano = ano;
  this.categoria = categoria;
  this.puntos = puntos ;
}
var equipos = new Array();

var equipo1 = new Equipo("madrid","1993",1,77);
var equipo2 = new Equipo("barsa","1877",1,33);
var equipo3 = new Equipo("betis","1900",1,32);
var equipo4 = new Equipo("sevilla","1800",1,35);
var equipo5 = new Equipo("aletico","1870",1,36);
var equipo6 = new Equipo("extremadura","1333",3,99);
var equipo7 = new Equipo("merida","1600",3,23);
var equipo8 = new Equipo("villanonvense","1876",3,45);

equipos.push(equipo1);
equipos.push(equipo2);
equipos.push(equipo3);
equipos.push(equipo4);
equipos.push(equipo5);
equipos.push(equipo6);
equipos.push(equipo7);
equipos.push(equipo8);
var primera = new Array();
var tercera = new Array();

for (var i = 0; i < equipos.length; i++) {
  if (equipos[i].categoria==1) {
    primera.push(equipos[i]);
  }
  if (equipos[i].categoria==3) {
    tercera.push(equipos[i]);
  }
}

primera.sort(function (a, b) {
  if (a.puntos < b.puntos) {
    return 1;
  }
  if (a.puntos > b.puntos) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
document.write("<table><tr><td><strong>Equipo</strong></td><td><strong>Puntos</strong></td></tr>");
for (var i = 0; i < primera.length; i++) {
  //alert(primera[i].nombre);
  document.write("<tr><td>"+primera[i].nombre+"</td><td>"+primera[i].puntos+"</td></tr>");
}
document.write("</table>");
tercera.sort(function (a, b) {
  if (a.puntos < b.puntos) {
    return 1;
  }
  if (a.puntos > b.puntos) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
document.write("<table><tr><td><strong>Equipo</strong></td><td><strong>Puntos</strong></td></tr>");
for (var i = 0; i < tercera.length; i++) {
  //alert(tercera[i].nombre);
    document.write("<tr><td>"+tercera[i].nombre+"</td><td>"+tercera[i].puntos+"</td></tr>");
}
document.write("</table>");
