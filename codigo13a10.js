function ordenarArray(){
var array = [4, 0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5];
array.sort();
var arrayPares=new Array();
var arrayImpares=new Array();
var arrayParesFinal=new Array();
var arrayImparesFinal=new Array();
for (var i = 0; i < array.length; i++) {
  if (array[i]%2==0) {
    arrayPares.push(array[i]);
  }
  else {
    arrayImpares.push(array[i]);
  }
  //document.write(array[i]);
}
arrayParesFinal.push(arrayPares[0]);
for (var i = 1; i < arrayPares.length; i++) {
if (arrayPares[i]!=arrayParesFinal[arrayParesFinal.length-1]) {
  arrayParesFinal.push(arrayPares[i]);
}
}
arrayImparesFinal.push(arrayImpares[0]);
for (var i = 1; i < arrayImpares.length; i++) {
if (arrayImpares[i]!=arrayImparesFinal[arrayImparesFinal.length-1]) {
  arrayImparesFinal.push(arrayImpares[i]);
}
}
//var arrayFinal= arrayPares.concat(arrayImpares);
//document.write(arrayFinal);
//document.write(arrayParesFinal);
var arrayFinal= arrayParesFinal.concat(arrayImparesFinal);
document.write(arrayFinal);
}
function arrayDos() {
  var array = [4, 0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5];
  array.sort();
  array.reverse();
  var arrayPares=new Array();
  var arrayImpares=new Array();
  var arrayParesFinal=new Array();
  var arrayImparesFinal=new Array();
  for (var i = 0; i < array.length; i++) {
    if (array[i]%2==0) {
      arrayPares.push(array[i]);
    }
    else {
      arrayImpares.push(array[i]);
    }
    //document.write(array[i]);
  }
  arrayParesFinal.push(arrayPares[0]);
  for (var i = 1; i < arrayPares.length; i++) {
  if (arrayPares[i]!=arrayParesFinal[arrayParesFinal.length-1]) {
    arrayParesFinal.push(arrayPares[i]);
  }
  }
  arrayImparesFinal.push(arrayImpares[0]);
  for (var i = 1; i < arrayImpares.length; i++) {
  if (arrayImpares[i]!=arrayImparesFinal[arrayImparesFinal.length-1]) {
    arrayImparesFinal.push(arrayImpares[i]);
  }
}
var arrayFinal= arrayParesFinal.concat(arrayImparesFinal);
document.write(arrayFinal);
}
function arrayTres() {
  var array = [4, 0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5];
//  array.indexOf(100);
//  document.write(array.indexOf(100));
  while (array.indexOf(8)!=-1) {
    var posicion =array.indexOf(8)+1;
    array[array.indexOf(8)]=333;
    document.write("Se encuentra el 8 en la posicion "+posicion+"<br>");

  }
  while (array.indexOf(3)!=-1) {
    var posicion =array.indexOf(3)+1;
    array[array.indexOf(3)]=333;
    document.write("Se encuentra el 3 en la posicion "+posicion+"<br>");

  }
}
