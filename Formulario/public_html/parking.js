/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var arrayCoches = new Array();

function Coche(marca,modelo,matricula,combustible) {
    this.marca = marca;
    this.modelo = modelo;
    this.matricula= matricula;
    this.combustible = combustible;
}

function guardarCoche(){
    var porNombre=document.getElementsByName("combustible");
    var resultado= "niguno";
     for(var i=0;i<porNombre.length;i++)
        {
            if(porNombre[i].checked)
                resultado=porNombre[i].value;
        }
    var marca = document.getElementById("marca").value;
    var cochecito= new Coche(marca,document.getElementById("modelo").value,document.getElementById("matricula").value,resultado);
    if(arrayCoches.length<11){
        arrayCoches.push(cochecito);
    }else{
        alert("parking lleno");
    }
}
function mostrarCoche(){
    var texto=" ";
    document.getElementById("cochecito").innerHTML = texto;
    texto =" ";
     for (var i = 0; i < arrayCoches.length; i++) {
        // alert(arrayCoches[i]);
         texto =texto + "<p>marca:"+arrayCoches[i].marca+" modelo:"+arrayCoches[i].modelo+"matricula:"+arrayCoches[i].matricula+" combustible:"+arrayCoches[i].combustible+"</p>";
     }
     document.getElementById("cochecito").innerHTML = texto;
}
function borrarCoche(){
    var matricula =prompt("introduce matricula a borrar");
}