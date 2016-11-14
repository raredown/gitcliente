function galleta() {
    var usuario =document.getElementById("usuario").value;
    var contenido_cookie="natural";
    //document.cookie = "comida_favorita=arroz; max-age=3600; path=/";
    document.cookie = "comida_favorita="+encodeURIComponent(contenido_cookie);
    micookie=document.cookie;
    alert(micookie);
}
