document.getElementById("nombre").addEventListener('input', function()
{//esto es para que chequee en el momento
    if(document.getElementById("nombre").value.length<3)
    {
        document.getElementById("texto").innerText="Error. La contraseña debe tener 3 o mas caracteres"
    }
    else{document.getElementById("texto").innerText=""}
})

function validar()
{

    let validar=true;
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let puede=validEmail.test(document.getElementById("email").value)
    if(!puede)
    {
        document.getElementById('mensaje').innerText="Error. Ingrese un email valido"
        validar=false;
    }else{document.getElementById('mensaje').innerText=""}

    var validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    let puede2=validPassword.test(document.getElementById("contraseña").value)
    if(!puede2)
    {
        document.getElementById('mensaje').innerText="Error. Ingrese una contraseña valida"
        validar=false;
    }
    else{document.getElementById('mensaje').innerText=""}

    let confirmarContraseña= document.getElementById('confirmarContraseña').value;
    let puede3=false;
    let contraseña= document.getElementById('contraseña').value
    if(contraseña===confirmarContraseña)
    {
        puede3=true;
        document.getElementById("mensaje").innerText=""
    }
    if(!puede3)
    {
        document.getElementById("mensaje").innerText+=" Error. No es la misma contraseña"
        validar=false;
    }
    console.log("4 "+validar);
    return validar;
}
function alerta()
{
    let puede = document.getElementById("button").value
    console.log(puede)
    if(puede)
    {
        alert("se pudo enviar el form correctamente")
    }
}

