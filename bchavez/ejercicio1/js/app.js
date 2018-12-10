function mostrarBuenas(){
    var verde = document.getElementById("buenas-noticias");   
    if(verde.style.display == "none"){
        verde.style.display = "flex";
    } else if(verde.style.display == "flex"){
        verde.style.display = "none";
    }
}