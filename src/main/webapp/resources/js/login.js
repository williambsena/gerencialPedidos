$(document).ready(function () {
    console.log("AQUI");
    var i = 1;
    $("#edit_email").blur( function(){
        console.log("SAI DO EMAIL");
        $("#edit_senha").focus();
    })
    
    $("#btn_teste1").click( function() {
        console.log("ESTAR NA FUNÇÃO DE BTN_TESTE_1")
        $("#div_teste1").removeAttr('class')
        $("#div_teste1").attr('class', "col-sm-3");
        $("#div_teste1").attr('class', "col-sm-3");
        $("#div_teste2").attr('class', "col-sm-3 hidden")
        $("#div_teste3").attr('class', "col-sm-3 hidden")
    })
    $("#btn_teste2").click( function() {
        console.log("ESTAR NA FUNÇÃO DE BTN_TESTE_2")
        $("#div_teste2").removeAttr('class');
        $("#div_teste2").attr('class', "col-sm-3");
        $("#div_teste2").attr('class', "col-sm-3");
        $("#div_teste1").attr('class', "col-sm-3 hidden")
        $("#div_teste3").attr('class', "col-sm-3 hidden")
    })
    
    $("#btn_teste3").click( function() {
        console.log("ESTAR NA FUNÇÃO DE BTN_TESTE_3")
        $("#div_teste3").removeAttr('class');
        $("#div_teste3").attr('class', "col-sm-3");
        $("#div_teste3").attr('class', "col-sm-3");
        $("#div_teste1").attr('class', "col-sm-3 hidden")
        $("#div_teste2").attr('class', "col-sm-3 hidden")
    })
    
    $("#btn_check").focus( function(){
        console.log("estou focando")
    })
    
    
    $("#btn_check").click( function(){
        console.log("estou clikando")
    })
    
    $("#edit_senha").focus( function(){
        console.log("CARLIN VAI DA A BUNDA EM ALGUM LUGAR")
    });
})