$(document).ready(function(){
    $(window).scroll(function(){ //.scroll es un evento de desplazamiento
        var tventana = $(window).width(); //Se calcula el tamaño de la ventana

        if(tventana > 800){
            var scroll = $(window).scrollTop(); //Calcular la posicion de la barra de la pagina de manera vertical
            $("header .textos").css({
                "transform": 'translate(0px,' + scroll / 4 + '%)'//Se tranlsada la poscion en vertical a la velocidad del scroll entre 4
            })

            $(".acerca-de article").css({
                "transform": 'translate(0px, -' + scroll / 6 + '%)' //
            })
        }
    })
    $(window).resize(function(){
        var tventana = $(window).width();
        if(tventana < 800){
            $(".acerca-de article").css({
                "transform": 'translate(0px, 0px)' //Se regresa el article a su poscision original
            })
        }
    })
})