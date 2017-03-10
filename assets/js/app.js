// Vamo a crear variables globales
var usuariosTotales= [];
var email= document.getElementById("input-Email").value;
var password= document.getElementById("input-Password").value;
var campoEmail = document.getElementsByTagName('span');
var campoPassword = document.getElementsByTagName('span');
/*
//Vamo a poner reglas :sad_parrot:
var button = document.getElementById("login");
function funciones(){
  if (button.addEventListener) {
    button.addEventListener("click", myFunction);
  } else if (button.attachEvent) {
    button.attachEvent("onclick", myFunction);
  }
}
*/

//Funcion login
window.addEventListener('load',function() {
  var loginButton = document.getElementById('login');
  loginButton.addEventListener('click',function(){
    var emailInput = document.getElementById('input-Email');
    var passwordInput = document.getElementById('input-Password');
  });
});


function validarLogin(email,password){
  if(!/\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{3,})\z/.test(email)){
    document.getElementById("campoEmail").innerHTML = "La dirección de correo electrónico no es válida";
  } else {
  // vamos a guardarlo;
  }
  if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)){
    document.getElementById("campoPassword").innerHTML = "La contraseña no es válida";;
  } else {
  // vamos a guardarlo;
  }
}

//Vamo a guardar los usuarios :fast_parrot:
function guardarUsuarios() {
  var usuario = new ingreso(email,password);
  usuariosTotales.push(usuario);
}

//Vamo a prohibir usuarios :thinking_face:
function registro(){
  var registroUsuarios = "";
  var cantidadUsuarios = 6;
  for (var i= 0; i<=cantidadUsuarios; i++){
    registroUsuarios = registroUsuarios + usuariosTotales[i];
  }
}
