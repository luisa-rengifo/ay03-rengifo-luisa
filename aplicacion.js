$(document).ready(function(){
    var final = $("#final");

    $("#boton").click(function(){
        final.toggle();  
    });


    $("#boton2").click(function(){
        $("#pizzas").text("Recomendadas...");
    });

    $("#algunas").mouseenter(function(){
        $(this).css("background-color", "white");
    });
    
    $("#algunas").mouseleave(function(){
        $(this).css("background-color", "lightgrey");
    });

    
});