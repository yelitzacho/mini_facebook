var email = document.getElementById('input-Email').value;
var password = document.getElementById('input-Password').value;

function validarLoguin(email,password){
  if(!/\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/.test(email)){
    alert ('La dirección del correo ' + email + ' no es valido');
  } else {
    alert ('Esta direccion es correcta');
  }
  if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)){
    alert ('La contraseña del correo ' + password + ' no es valido');
  } else {
    alert ('Esta contraseña es correcta');
  }
}
