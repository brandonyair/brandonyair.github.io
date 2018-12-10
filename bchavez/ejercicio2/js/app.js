function validar(){
    var nombre = document.forms["registro"]["name"];
    var email = document.forms["registro"]["mail"];
    if(nombre.value==""){       
        alert("El campo nombre esta vacio");
        nombre.focus();
        return false;
    } else if(email.value==""){
        alert("Rellena el email");
        email.focus();
        return false;
    }else if(email.value=="admin@sagradoc.es")
        alert("Email en uso")
        return false;
}
