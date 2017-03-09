var email = document.getElementById('input-Email').value;
var password = document.getElementById('input-Password').value;
var campoEmail = document.getElementById('campoEmail');
var campoPassword = document.getElementById('campoPassword');

function validarLoguin(email,password){
  if(!/\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{3,})\z/.test(email)){
    campoEmail.innerHTML = "La dirección de correo electrónico no es válido";
  } else {
    alert ('Esta direccion es correcta');
  }
  if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)){
    alert ('La contraseña del correo ' + password + ' no es valido');
  } else {
    alert ('Esta contraseña es correcta');
  }
}
