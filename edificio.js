
function Edificio(calle,numero,codigo,plantas) {
  this.calle=calle;
  this.numero=numero;
  this.codigo=codigo;
  this.plantas=plantas;

}

function Puerta(propietario) {
  this.propietario = propietario;
}
Puerta.prototype.modificarPropetario= function(nombre){
    this.propietario = nombre;
}
function Plantas(puertas) {
  this.puertas=puertas;
}
Plantas.prototype.modificarPuertas(puertas){
  this.puertas=puertas;
}
Edificio.prototype.agregarPlantas= function(piso,puertas){
//  alert("añadido tantas plantas"+plantas);
  //var  total= this.plantas + plantas;
  //alert(puertas);
  


};
Edificio.prototype.agregarDueno= function(nombre,plantas,puerta){
  this.plantas[puerta].modificarPropetario(nombre);
}
Edificio.prototype.modificarNumero= function(numero){
  this.numero=numero;

}
Edificio.prototype.modificarCodigo= function(codigo){
  this.codigo=codigo;

}
Edificio.prototype.modificarCalle= function(calle){
  this.calle=calle;

}
Edificio.prototype.imprimirNumero= function(){
  alert("Su numero es"+this.numero);

}
Edificio.prototype.imprimirCodigo= function(){
  alert("Su codigo es "+this.codigo);

}
Edificio.prototype.imprimirCalle= function(){
  alert("Su calle es "+this.calle);

}
var plantitas = new Array();
var edificio1= new Edificio("america",47,33,plantitas);
var edificio2= new Edificio("america",47,33,10);
//edificio1.agregarPlantas(3,5);
edificio1.imprimirNumero();
edificio1.modificarNumero(33);
edificio1.imprimirNumero();
//edificio1.agregarDueno("pepe",);
