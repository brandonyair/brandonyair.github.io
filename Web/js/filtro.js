/*Creo la función autoinvocada*/
/*el simbolo de dolar significa que quiero acceder al documento jquery*/
(function(){
    //Con el $ le digo que acceda al documento jquery
    //Con el (document) le digo que acceda al documento html
    //Con el .ready(function) quiero que haga esa función
	$(document).ready(function(){
        //Con el $ le digo que acceda al .btn-menu
        //Cuando haga un click quiero que haga esa función
		$(".btn-menu").click(function(e){
			e.preventDefault();
			var filtro = $(this).attr("data-filter");
            //this es una palagra reservada
            //attr("data-filter") es esl atributo personalizado del html

			if (filtro == "todos") {
				$(".box-imagen").show(500);//Si pincho a todos quiero que me muestre todas las imágenes
			} else {
				$(".box-imagen").not("."+filtro).hide(500);
				$(".box-imagen").filter("."+filtro).show(500);
			}
		});

		$("ul li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
		});
	});
}())