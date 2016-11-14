function darlecolor(color) {
  document.body.style.backgroundColor = color;

}
function datos() {
  var usuario =document.getElementById("usuario").value;
  var apellido =document.getElementById("apellido").value;
  alert("Su usuario es "+ usuario);
  alert("Su apellido es "+apellido);

}
function changeFunc() {
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    //alert(selectedValue);
      document.body.style.backgroundColor = selectedValue;
  }
