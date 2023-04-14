document.getElementById("btn").addEventListener("mousedown", mostra)
document.getElementById("btn").addEventListener("mouseup", tira)

function mostra() {
 document.getElementById('pass').type = 'text';
}
function tira() {
 document.getElementById('pass').type = 'password';
}

let formulario = document.getElementById('formulario');

formulario.onsubmit = function() {
 let inputs = document.querySelectorAll("input");
 for (let i = 0; i < inputs.length; i++) {
   if (!inputs[i].value) {
     alert("Campo vazio!");
     return false;
   }
 }
 alert("ok");
};