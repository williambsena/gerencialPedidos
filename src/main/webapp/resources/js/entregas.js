"use strict";
$(document).ready(function () {
    //console.log("Estou no Entregas.js");

    function disabled_button(id_botao) {
        console.log('Teoricamente hidden');
        var botao = "#";
        botao = botao.concat(id_botao)
        $(botao).attr('type', 'hidden'); console.log("1")
    }//disable_button(id_botao);

    $('#btn_todas_entregas').click(function () {
        console.log("Estou em todas")
        //disabled_button('btn_todas_entregas')
        
        
    });

    $('#btn_entregas_buscar').click(function () {
        disabled_button('btn_entregas_buscar') //aqui to passando por parâmetro o nome do botão que clickei 
        console.log("BUSCAR ENTREGAS");
        console.log("você vai organizando os eventos/funçõesjs no arquivo ");
        exemplodefuncao("Biscoito");
    });
    
    function exemplodefuncao(param){
        console.log("estou aqui com o parâmetro-> " + param )
    };

    $('#btn_entregas_pendentes').click(function () {
        disabled_button('btn_entregas_pendentes')
        console.log("ENTREGAS PENDENTES");
        exemplodefuncao("Coca");
    });

    $("#btn_entregas_concluidas").click(function () {
        disabled_button('btn_entregas_concluidas')
        console.log("ENTREGAS CONCLUIDAS");
        exemplodefuncao("Terere");
    });

    $('#btn_conclui').click(function () {
        $("#item_um").attr('class','hidden');
        //$("#item_um").removeAttr("type")
        //$("#item_um").attr("type", hidden);     console.log("#");
        console.log("Clickei no botão Manolo")

    });

    function myMap() {
        var mapCanvas = document.getElementById("map");
        var mapOptions = {
            center: new google.maps.LatLng(51.5, -0.2),
            zoom: 10
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
    }


});