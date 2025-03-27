document.getElementById("nombre").addEventListener("input", function () {
  //esto es para que chequee en el momento
  if (document.getElementById("nombre").value.length < 3) {
    document.getElementById("texto").innerText =
      "Error. El nombre debe tener 3 o mas caracteres";
  } else {
    document.getElementById("texto").innerText = "";
  }
});



function validar() {

  var validar ;
  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  let puede = validEmail.test(document.getElementById("email").value);
  console.log(puede);

  if (puede == false) {
    document.getElementById("em").innerText =
      "Error. Ingrese un email valido";
    validar = false;
  } else {
    document.getElementById("em").innerText = "";
    validar=true;
  }

  var validPassword =
    /^(?=[A-Z0-9]*[a-z])(?=[a-zA-Z]*[0-9])(?=[a-z0-9]*[A-Z])[a-zA-Z0-9]{8,}$/;
  let puede2 = validPassword.test(document.getElementById("contraseña").value);
  if (!puede2) {
    document.getElementById("con").innerText =
      "Error. Ingrese una contraseña valida";
    validar = false;
  } else {
    document.getElementById("con").innerText = "";
    validar=true
  }


  let confirmarContraseña = document.getElementById("confirmarContraseña").value;
  let puede3 = false;
  let contraseña = document.getElementById("contraseña").value;
  if (contraseña === confirmarContraseña && confirmarContraseña!="") {
    puede3 = true;
    document.getElementById("con2").innerText = "";
    validar=true
  }else {
    document.getElementById("con2").innerText =
      " Error. No es la misma contraseña";
    validar = false;
  }
 console.log(validar)

if(document.getElementById("texto").innerText=="" && validar==true)
{
    alert("usuario registrado exitosamente")
}



}

