var vehiculos = [];

function aniadirVehiculo(){
    
    var marca, modelo, matricula, motor;
    
    marca = document.formulario.marca.value;
    modelo = document.formulario.modelo.value;
    matricula = document.formulario.matricula.value;
    motor = document.formulario.motor.value;
    
    if(validar(marca,modelo,matricula)){
        if(vehiculos.length < 12){
            vehiculos.push(new Vehiculo(marca,modelo,matricula,motor));
            alert("El coche ha sido añadido correctamente");
        }else{
            alert("El parking ha llegado al límite de su capacidad (12 vehículos)");
        }
    }else{
        alert("Hay algún campo incorrecto");
    }
    return false;
}

function validar(marca,modelo,matricula){
   var bandera = true;
    if(marca == "" || !isNaN(marca)){
        bandera = false;
        document.formulario.marca.focus();
    }else if(modelo == "" || !isNaN(modelo)){
        bandera = false;
        document.formulario.modelo.focus();
    }else if(matricula == "" || !isNaN(matricula) || !/^\d{4}\s[A-Z]{3}$/.test(matricula)){
        bandera = false;
        document.formulario.matricula.focus();        
    }
    return bandera;
    
}

function mostrarVehiculo(){
    var insertar = document.getElementById("mostrar");
    var cadena;
    if(vehiculos.length > 0){
        cadena = "<h2>VEHÍCULOS EN EL PARKING</h2>";
        cadena += "<table border='1'><tr><th>Marca</th><th>Modelo</th><th>Matrícula</th><th>Motor</th></tr>";
        for(var i = 0; i < vehiculos.length; i++){
            cadena+="<tr><td>" +vehiculos[i].marca +"</td><td>" +vehiculos[i].modelo
                    +"</td><td>" +vehiculos[i].matricula +"</td><td>" +vehiculos[i].motor +"</td></tr>";
        }
        cadena += "</table>";
        insertar.innerHTML = cadena;
    }else{
        insertar.innerHTML = "<h2>No hay vehículos en el parking </h2>";
    }
}

function eliminarVehiculos(){
    var bandera = false;
    var matricula = document.formulario.matricula.value;
    if(/^\d{4}\s[A-Z]{3}$/.test(matricula)){
        for(var i = 0; i  < vehiculos.length; i++){
            if(matricula == vehiculos[i].matricula){
                //Eliminamos el vehículo que sea
                for(var j = i; j < vehiculos.length -1 ; j++){
                    vehiculos[j] = vehiculos[j+1];
                }
                //Reducimos en uno la longitud del array vehículos
                vehiculos.length = vehiculos.length -1;
                bandera = true;
            }
        }
        
    }
    
    if(bandera){
        alert("El vehículo con matrícula " +matricula +" ha salido eliminado correctamente");
    }else{
        alert("No se ha encontrado el vehículo con matrícula " +matricula);
    }
}
function enviar(){
	var formulario = document.getElementById("myform");	
	var dato = formulario[0];
 
	if (dato.value=="enviar"){
		alert("Enviando el formulario");
		//formulario.submit();
		return false;
	} else {
		alert("No se envía el formulario");
		return false;
	}
}

function Vehiculo(marca, modelo, matricula, motor){
   
    var marca, modelo, matricula, motor;
    
    this.marca = marca;
    this.modelo = modelo;
    this.matricula = matricula;
    this.motor = motor;    
}
