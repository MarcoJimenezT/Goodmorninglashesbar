$(document).ready(function(){
    $(".menu a").each(function(index,elemento){ //Recorrer los elementos de un mismo tipo y ejecutar una accion a cada uno
        $(this).css({ //Se selecciona el modelo actual y se cambia el estilo
            "top": "-200px"
        })

        $(this).animate({//Se selecciona el modelo actual y se anima por un cambio de estilo
            "top": "0"
        },2000 + (index * 500)) //Index es la posciion del objeto actual {0,1,2,3,4...}
    })
})

$( document ).ready(function() {
    $('#myModal').modal('toggle')
});