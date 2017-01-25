/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
       // alert(n * factorial(n - 1));
        return n * factorial(n - 1);
    }
}
function factorialDos(n) {
    if (n != 0) {
        return n * factorial(n - 1);
    } 
}
var person = prompt("Please un numero ");
if (isNaN(person)){
    person = prompt("Please un numero ");
}

var result = factorial(person);
document.write(result);
alert(factorialDos(person));