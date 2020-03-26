function validar(){

    var usuario, email, telefono, patronemail, patronusuario;
    var checkbox1, checkbox2, checkbox3, checkbox4;

    usuario = document.getElementById("usuarioform").value;
    email = document.getElementById("email").value;
    telefono = document.getElementById("telefono").value;
    checkbox1 = document.getElementById("consultoria").checked;
    checkbox2 = document.getElementById("Desarrollo de Proyectos").checked;
    checkbox3 = document.getElementById("Realización de Pedidos").checked;
    checkbox4 = document.getElementById("Otros").checked;

    patronemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
    patronusuario = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,15}[ ]{1}[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,15}[ ]{1}[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,15}$/;

    console.log("usuario: " + usuario);
    console.log("email: " + email);
    console.log("telefono: " + telefono);
    console.log("consultoria: " + checkbox1);
    console.log("desarrollo: " + checkbox2);
    console.log("pedidos: " + checkbox3);
    console.log("otros: " + checkbox4);

    if (email === "" || telefono === "" || usuario === "" || (!checkbox1 && !checkbox2 && !checkbox3 && !checkbox4)){
        alert("Todos los campos son obligatorios. Por favor, introduzca los valores");
        return false;
    } else if (usuario.length > 30){
        alert('El nombre del usuario es demasiado largo');
        return false;
    } else if (!patronusuario.test(usuario)){
        alert("Usuario incorrecto. Debe ser 'nombre apellido1 apellido2'"); 
        return false;
    }else if (email.length > 100) {
        alert("El número de caracteres es demasiado largo. Por favor, introduzca menos de 100 carácteres");
        return false;
    } else if (!patronemail.test(email)) {
        alert("Correo no válido. Debe ser nombredeusuario@servidor.dominio")
        return false;
    } else if (!(/^\d{9}$/.test(telefono))) {
        alert("Teléfono no válido. Por favor, introduzca un teléfono de 9 cifras")
        return false;
    } else if( !checkbox1 && !checkbox2 && !checkbox3 && !checkbox4) {
        alert("por favor, elija una opción de la caja");
        return false;
    }
}