/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var arrayUsuario = new Array();
function Usuario(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

}
function guadarUsuario() {
    var usuario = new Usuario(document.getElementById("usuario").value, document.getElementById("apellido").value, document.getElementById("edad").value);
    arrayUsuario.push(usuario);
}
function  mostrarUsuario() {
  //  alert("llego");
    var texto=" ";
    var textodos=" ";
    for (var i = 0; i < arrayUsuario.length; i++) {
       colorito="";
        if (arrayUsuario[i].edad>18&&arrayUsuario[i].edad<65){
             colorito="green";
             
        }
        if (arrayUsuario[i].edad>65){
            colorito="red";
        }
       texto = texto+"<p style='color:"+colorito+";'>" + arrayUsuario[i].nombre+" " +arrayUsuario[i].apellido +" "+arrayUsuario[i].edad+  "</p>";
    }
document.getElementById("usuaritos").innerHTML = texto;
}