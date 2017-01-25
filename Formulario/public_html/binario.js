/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//77
var primera_letra = new Array(0, 1, 0, 0, 1, 1, 0, 1);
//69
var segunda_letra = new Array(0, 1, 0, 0, 0, 1, 0, 1);
//82
var tercera_letra = new Array(0, 1, 0, 1, 0, 0, 1, 0);
//73
var cuarta_letra = new Array(0, 1, 0, 0, 1, 0, 0, 1);
//68
var quinta_letra = new Array(0, 1, 0, 0, 0, 1, 0, 0);
//65
var sexta_letra = new Array(0, 1, 0, 0, 0, 0, 0, 1);
var palabra = new Array(primera_letra, segunda_letra, tercera_letra, cuarta_letra, quinta_letra, sexta_letra);

function valorLetra() {
    var valorFinal=0;
    for (i = 0; i < palabra.length; i++) {
        var finalLetra = 0;
        var multiplicador = 128;
        //var letra=palabra[i].length;
       // alert(palabra[0][4]);
        for (j = 0; j < palabra[i].length; j++) {
            finalLetra = finalLetra + (palabra[i][j] * multiplicador);
           // alert(finalLetra);
            multiplicador = multiplicador / 2;
        }
        alert(finalLetra);
        valorFinal= valorFinal+finalLetra;
        var res = String.fromCharCode(finalLetra);
        alert(res);
    }
    alert(valorFinal);
}
valorLetra();