/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
        
 // CALCULO DA QUANTIDADES DE PASSAGENS DE ACORDO COM SALDO QUE O USUARIO ADCIONA.
     
    //TECLAS CALCULADORA SIMPLES
     
    /* button  #btnUm */
    $(document).on("click", "#btnUm", function(evt)
    {
        mostrarDisplay(1);
        
         return false;
    });
    
        /* button  #btnDois */
    $(document).on("click", "#btnDois", function(evt)
    {
        mostrarDisplay(2);
         return false;
    });
    
        /* button  #btnTres */
    $(document).on("click", "#btnTres", function(evt)
    {
        mostrarDisplay(3);
         return false;
    });
    
        /* button  #btnQuatro */
    $(document).on("click", "#btnQuatro", function(evt)
    {
       mostrarDisplay(4);
         return false;
    });
    
        /* button  #btnCinco */
    $(document).on("click", "#btnCinco", function(evt)
    {
        mostrarDisplay(5);
         return false;
    });
    
        /* button  #btnSeis */
    $(document).on("click", "#btnSeis", function(evt)
    {
        mostrarDisplay(6);
        
         return false;
    });
    
        /* button  #btnSete */
    $(document).on("click", "#btnSete", function(evt)
    {
        mostrarDisplay(7); 
         return false;
    });
    
        /* button  #btnOito */
    $(document).on("click", "#btnOito", function(evt)
    {
        mostrarDisplay(8); 
         return false;
    });
    
        /* button  #btnNove */
    $(document).on("click", "#btnNove", function(evt)
    {
        mostrarDisplay(9);
         return false;
    });
    
        /* button  #btnZero */
    $(document).on("click", "#btnZero", function(evt)
    {
        mostrarDisplay(0);
         return false;
    });
    
        /* button  #btnPonto */
    $(document).on("click", "#btnPonto", function(evt)
    {
        mostrarDisplay("."); 
         return false;
    });
    
        /* button  #btnDeletar */
    $(document).on("click", "#btnDeletar", function(evt)
    {
         var numero=getDisplayText();
         if(numero.length>0){
            
             var numeroNovo = numero.substring(0, numero.length-1);
             
             if(numeroNovo==='-'){
                 setDisplayText("");
             }else{
                  setDisplayText(numeroNovo);
             }
            
             
             return false;
         }
         return false;
    });
    
    //CALCULA A TARIFA 01 
        /* button  #btnTarifa1 */
    $(document).on("click", "#btnTarifaUm", function(evt)
    {
        calculoTarifa01();
         return false;
    });
     
    //CALCULA A TARIFA 02
        /* button  #btnTarifa1 */
    $(document).on("click", "#btnTarifaDois", function(evt)
    {
        calculoTarifa02();
         return false;
    });
    
    
    //CALCULA A TARIFA 03
    /* button  #btnTarifa3 */
    $(document).on("click", "#btnTarifaTres", function(evt)
    {
        calculoTarifa03();
         return false;
    });
    
     
    //CALCULA A TARIFA 04
    /* button  #btnTarifa4 */
    $(document).on("click", "#btnTarifaQuatro", function(evt)
    {
        
        calculoTarifa04();
        return false;
    });
     
     
    //FUNÇÃO PRA LIMPAR A TELA
     
        /* button  #btnLimparTela */
    $(document).on("click", "#btnLimparTela", function(evt)
    {   
        
        limparDisplay();
       
         return false;
    });
    
    
        /* button  #btncalculoqnt */
    $(document).on("click", "#btncalculoqnt", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
     
        /* button  #btnVoltarSideBar */
    $(document).on("click", "#btnVoltarSideBar", function(evt)
    {
         uib_sb.toggle_sidebar($("#sideBar"));  
         return false;
    });
    
        /* button  #btnMenu */
    $(document).on("click", "#btnMenu", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
     // ABRE O SIDEBAR.
     
        /* button  #btnMenu */
    $(document).on("click", "#btnMenu", function(evt)
    {
        
        // Abre o sideBar
         uib_sb.open_sidebar($("#sideBar"));  
         return false;
    });
    
        /* button  #btnVoltarSideBar */
    $(document).on("click", "#btnVoltarSideBar", function(evt)
    {
        // Fecha o sidebar        
         uib_sb.close_sidebar($("#sideBar"));  
         return false;
    });
    
        /* button  #btnQtdPassagens */
    $(document).on("click", "#btnQtdPassagens", function(evt)
    {
         /*global activate_subpage */
        uib_sb.close_sidebar($("#sideBar"));
         activate_subpage("#page_23_85"); 
         return false;
    });
      
    
        /* button  #btnCalcSideBar */
    $(document).on("click", "#btnCalcSideBar", function(evt)
    {
                 
         uib_sb.toggle_sidebar($("#sideBar"));  
         return false;
    });
    
       
        /* button  #btnMeusaldo */
    $(document).on("click", "#btnMeusaldo", function(evt)
    {
        uib_sb.close_sidebar($("#sideBar"));
       activate_subpage("#page_96_89");     
       
         return false;
    });
    
        /* button  #btnCalcMenu */
    $(document).on("click", "#btnCalcMenu", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_96_89"); 
         return false;
    });
    
       
    
   
    
        /* button  #btnValorPassagem */
    $(document).on("click", "#btnValorPassagem", function(evt)
    {
         /*global activate_page */
         activate_page("#calculoPassagem"); 
         return false;
    });
    
        /* button  #btnPontos */
    $(document).on("click", "#btnPontos", function(evt)
    {
         /*global activate_page */
         uib_sb.close_sidebar($("#sideBar"));
         activate_page("#pontosGPS");
         initMap();
         return false;
    });
    
        /* button  #btnVoltarPontos */
    $(document).on("click", "#btnVoltarPontos", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
        
         return false;
    });
    
        /* button  #btnVoltarCalcPassagem */
    $(document).on("click", "#btnVoltarCalcPassagem", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
        /* button  #btnLLL */
    $(document).on("click", "#btnLLL", function(evt)
    {
         /*global activate_subpage */
        uib_sb.close_sidebar($("#sideBar"));
         activate_subpage("#rotasPt"); 
         return false;
    });
    
        /* button  #btnInfor */
    $(document).on("click", "#btnInfor", function(evt)
    {
         /*global activate_page */
         activate_page("#informacoes"); 
         return false;
    });
    
        /* button  #btnInforVoltar */
    $(document).on("click", "#btnInforVoltar", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
        /* button  #btnRotasVoltar */
    $(document).on("click", "#btnRotasVoltar", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
        /* button  #btnPontosRecarga */
    $(document).on("click", "#btnPontosRecarga", function(evt)
    {
         /*global activate_page */
         activate_page("#rotas"); 
         return false;
    });
    
        
        /* button  #btnVoltarCalcValorPassagem */
    $(document).on("click", "#btnVoltarCalcValorPassagem", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
     
     
     
     
     
     
     
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     
     
    // CALCULADORA PARA CALCULAR O VALOR FINAL DE ACORDO COM A QUANTIDADE DE PASSAGENS QUE O USUARIO DIGITAR.
     
        /* button  #btnUmseg */
    $(document).on("click", "#btnUmseg", function(evt)
    {
        mostrarDisplayseg(1);
        return false;
    });
    
        /* button  #btnDoisseg */
    $(document).on("click", "#btnDoisseg", function(evt)
    {
        mostrarDisplayseg(2);
         return false;
    });
      
        /* button  #btnTresseg */
    $(document).on("click", "#btnTresseg", function(evt)
    {
        mostrarDisplayseg(3); 
         return false;
    });
    
        /* button  #btnQuatroseg */
    $(document).on("click", "#btnQuatroseg", function(evt)
    {
        mostrarDisplayseg(4); 
         return false;
    });
    
        /* button  #btnCincoseg */
    $(document).on("click", "#btnCincoseg", function(evt)
    {
        mostrarDisplayseg(5); 
         return false;
    });
    
        /* button  #btnSeisseg */
    $(document).on("click", "#btnSeisseg", function(evt)
    {
        mostrarDisplayseg(6);
         return false;
    });
    
        /* button  #btnSeteseg */
    $(document).on("click", "#btnSeteseg", function(evt)
    {
        mostrarDisplayseg(7); 
         return false;
    });
    
     /* button  #btnNoveseg */
    $(document).on("click", "#btnNoveseg", function(evt)
    {
        mostrarDisplayseg(9);
         return false;
    });
     
      /* button  #btnZeroseg */
    $(document).on("click", "#btnZeroseg", function(evt)
    {
        mostrarDisplayseg(0);
         return false;
    });
    
        /* button  #btnOitoseg */
    $(document).on("click", "#btnOitoseg", function(evt)
    {
        mostrarDisplayseg(8);
         return false;
    });
    
        /* button  #btnPontoseg */
    $(document).on("click", "#btnPontoseg", function(evt)
    {
        mostrarDisplayseg(".");
         return false;
    });
    
     //DELETA UM CARACTERE POR VEZ.
        /* button  #btnDeletarseg */
    $(document).on("click", "#btnDeletarseg", function(evt)
    {
              var numeroseg=getDisplayTextseg();
         if(numeroseg.length>0){
            
             var numeroNovoseg = numeroseg.substring(0, numeroseg.length-1);
             
             if(numeroNovoseg==='-'){
                 setDisplayTextseg("");
             }else{
                  setDisplayTextseg(numeroNovoseg);
             }
            
             
             return false;
         }
         return false;
         
    });
    
        /* button  #btnLimparTelaseg */
    $(document).on("click", "#btnLimparTelaseg", function(evt)
    {
        limparDisplayseg();
        
         return false;
    });
    // CALCULA POR TARIFA 0'
      /* button  #btnTarifa1 */
    $(document).on("click", "#btnTarifaUmSeg", function(evt)
    {
        calculoTarifa01seg(); 
         return false;
    });
    
    // CALCULA POR TARIFA 02
        /* button  #btnTarifa2 */
    $(document).on("click", "#btnTarifaDoisSeg", function(evt)
    {
        calculoTarifa02seg();  
         return false;
    });
    
    
    // CALCULA POR TARIFA 03
        /* button  #btnTarifa3 */
    $(document).on("click", "#btnTarifaTresSeg", function(evt)
    {
        calculoTarifa03seg(); 
         return false;
    });
    
     // CALCULA POR TARIFA 04
        /* button  #btnTarifa4 */
    $(document).on("click", "#btnTarifaQuatroSeg", function(evt)
    {
        calculoTarifa04seg();
         return false;
    });
    
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     
     // TELA DE SALDO ATUAL
       
        /* button  #btnDelHistorico */
    $(document).on("click", "#btnDelHistorico", function(evt)
    {
        limparDisplaySaldo(); 
         return false;
    });
    
        
    $(document).on("click", "#btnAdcHistorico", function(evt)
    {
        adcionaraoSaldo();
         return false;
    });
    
        /* button  #btnRemHistorico */
    $(document).on("click", "#btnRemHistorico", function(evt)
    {
        removerdoSaldo();
         return false;
    });
    
        /* button  #btnLimparCampo */
    $(document).on("click", "#btnLimparCampo", function(evt)
    {
        limparDisplayAdcSaldo();
         return false;
    });
    
        /* button  #salvaSaldo */
    $(document).on("click", "#salvaSaldo", function(evt)
    {
        adcionarBD();
         return false;
        
    localStorage.setItem("saldo",ResultadoSaldo);
    localStorage.getItem("saldo",ResultadoSaldo)
    });
    
    }
    
    
    
    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
    
    
    
    
    
    
 document.addEventListener("app.Ready", register_event_handlers, false);
})();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
* Vai obter o numero que a pessoa digitou
*/
function getDisplayText(){
    return $("#saldoDisplay").val();
    
}
/**
* Mostrar um numero na tela
*/
function setDisplayText(value){
    $("#saldoDisplay").val(value);
    
}

/**
* Mostra o resultado na tela da quantidade de passagens
*/
function setResultadoTela(value){
    $("#txtInteira").val(value);
   
    
}

function setResultadoMeia(value){
    $("#txtMeia").val(value);
    
}

function setSaldoRestanteInt(value){
    $("#txtSaldoInteira").val(value);
    
}
function setSaldoRestanteMeia(value){
    $("#txtSaldoMeia").val(value);
    
}

/**
* :Vai adcionar um novo item na tela
*/
function mostrarDisplay(digito){
    var numeroAtual=getDisplayText();
    
    
    setDisplayText(numeroAtual+""+digito);
    
}
var tarifa01_int = 2.20;
var tarifa01_meia = 1.10;

var tarifa02_int = 2.50;
var tarifa02_meia = 1.25;

var tarifa03_int = 2.90;
var tarifa03_meia = 1.45;

var tarifa04_int = 3.10;
var tarifa04_meia = 1.55;

    
var ultimaOper=null;
var opMultiplo=false;

function calculoTarifa01(){
    //lembrar de tirar o comentario do console linha 79
   
    
    var numeroDisplay=getDisplayText();
    var resultadoInteira;
    var resultadoMeia;
    var saldoRestanteInt;
    var saldoRestanteMeia;
    
    numeroDisplay = Number(numeroDisplay);
    
    
    
    resultadoInteira = numeroDisplay / tarifa01_int;
    resultadoInteira = parseInt(resultadoInteira);
    
    resultadoMeia = numeroDisplay / tarifa01_meia;
    resultadoMeia = parseInt(resultadoMeia);
    
    saldoRestanteInt = numeroDisplay % tarifa01_int;
    saldoRestanteMeia = numeroDisplay % tarifa01_meia;
    
    
    setResultadoTela(resultadoInteira);
    setResultadoMeia(resultadoMeia);
    setSaldoRestanteInt(saldoRestanteInt.toFixed(2));
    setSaldoRestanteMeia(saldoRestanteMeia.toFixed(2));
    
    
    
}

function calculoTarifa02(){
    //lembrar de tirar o comentario do console linha 79
   
    
    var numeroDisplay=getDisplayText();
    var resultadoInteira;
    var resultadoMeia;
    var saldoRestanteInt;
    var saldoRestanteMeia;
    
    numeroDisplay = Number(numeroDisplay);
    
    
    
    resultadoInteira = numeroDisplay / tarifa02_int;
    resultadoInteira = parseInt(resultadoInteira);
    
    resultadoMeia = numeroDisplay / tarifa02_meia;
    resultadoMeia = parseInt(resultadoMeia);
    
    saldoRestanteInt = numeroDisplay % tarifa02_int;
    saldoRestanteMeia = numeroDisplay % tarifa02_meia;
    
    
    setResultadoTela(resultadoInteira);
    setResultadoMeia(resultadoMeia);
    setSaldoRestanteInt(saldoRestanteInt.toFixed(2));
    setSaldoRestanteMeia(saldoRestanteMeia.toFixed(2));
    
    
    
}

function calculoTarifa03(){
    //lembrar de tirar o comentario do console linha 79
   
    
    var numeroDisplay=getDisplayText();
    var resultadoInteira;
    var resultadoMeia;
    var saldoRestanteInt;
    var saldoRestanteMeia;
    
    numeroDisplay = Number(numeroDisplay);
    
    
    
    resultadoInteira = numeroDisplay / tarifa03_int;
    resultadoInteira = parseInt(resultadoInteira);
    
    resultadoMeia = numeroDisplay / tarifa03_meia;
    resultadoMeia = parseInt(resultadoMeia);
    
    saldoRestanteInt = numeroDisplay % tarifa03_int;
    saldoRestanteMeia = numeroDisplay % tarifa03_meia;
    
    
    setResultadoTela(resultadoInteira);
    setResultadoMeia(resultadoMeia);
    setSaldoRestanteInt(saldoRestanteInt.toFixed(2));
    setSaldoRestanteMeia(saldoRestanteMeia.toFixed(2));
    
    
    
}

function calculoTarifa04(){
  
    var numeroDisplay=getDisplayText();
    var resultadoInteira;
    var resultadoMeia;
    var saldoRestanteInt;
    var saldoRestanteMeia;
    
    numeroDisplay = Number(numeroDisplay);
    
    
    resultadoInteira = numeroDisplay / tarifa04_int;
    resultadoInteira = parseInt(resultadoInteira);
    
    resultadoMeia = numeroDisplay / tarifa04_meia;
    resultadoMeia = parseInt(resultadoMeia);
    
    saldoRestanteInt = numeroDisplay % tarifa04_int;
    saldoRestanteMeia = numeroDisplay % tarifa04_meia;
    
    
    setResultadoTela(resultadoInteira);
    setResultadoMeia(resultadoMeia);
    setSaldoRestanteInt(saldoRestanteInt.toFixed(2));
    setSaldoRestanteMeia(saldoRestanteMeia.toFixed(2));
    
    
}


function limparDisplay(){
    setDisplayText("");
    setResultadoTela("");
    setResultadoMeia("");
    setSaldoRestanteInt("");
    setSaldoRestanteMeia("");
    opMultiplo=false;
}    




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Funções para calculadora de valores totais de passagens.


/**
* Vai obter o numero que a pessoa digitou
*/
function getDisplayTextseg(){
    return $("#saldoDisplayseg").val();
    
}
/**
* Mostrar um numero na tela
*/
function setDisplayTextseg(value){
    $("#saldoDisplayseg").val(value);
    
}

/**
* Mostra o resultado na tela da quantidade de passagens
*/
function setResultadoTelaseg(value){
    $("#txtInteiraseg").val(value);
   
    
}

function setResultadoMeiaseg(value){
    $("#txtMeiaseg").val(value);
    
}



/**
* :Vai adcionar um novo item na tela
*/
function mostrarDisplayseg(digitoseg){
    var numeroAtualseg=getDisplayTextseg();
    
    
    setDisplayTextseg(numeroAtualseg+""+digitoseg);
    
}


var tarifa01_int = 2.20;
var tarifa01_meia = 1.10;

var tarifa02_int = 2.50;
var tarifa02_meia = 1.25;

var tarifa03_int = 2.90;
var tarifa03_meia = 1.45;

var tarifa04_int = 3.10;
var tarifa04_meia = 1.55;
    
var ultimaOperseg=null;
var opMultiploseg=false;

function calculoTarifa01seg(){
    //lembrar de tirar o comentario do console linha 79
   
    
    var numeroDisplayseg=getDisplayTextseg();
    var resultadoInteiraseg;
    var resultadoMeiaseg;
   
    
    numeroDisplayseg = Number(numeroDisplayseg);
    
    
    resultadoInteiraseg = numeroDisplayseg * tarifa01_int;
    resultadoInteiraseg = parseFloat(resultadoInteiraseg);
    
    resultadoMeiaseg = numeroDisplayseg * tarifa01_meia;
    resultadoMeiaseg = parseFloat(resultadoMeiaseg);
    
   
    
    
    setResultadoTelaseg(resultadoInteiraseg.toFixed(2));
    setResultadoMeiaseg(resultadoMeiaseg.toFixed(2));
    
    
    
}

function calculoTarifa02seg(){
    //lembrar de tirar o comentario do console linha 79
   
    
    var numeroDisplayseg=getDisplayTextseg();
    var resultadoInteiraseg;
    var resultadoMeiaseg;
   
    
    numeroDisplayseg = Number(numeroDisplayseg);
    
    
    resultadoInteiraseg = numeroDisplayseg * tarifa02_int;
    resultadoInteiraseg = parseFloat(resultadoInteiraseg);
    
    resultadoMeiaseg = numeroDisplayseg * tarifa02_meia;
    resultadoMeiaseg = parseFloat(resultadoMeiaseg);
    
   
    
    
    setResultadoTelaseg(resultadoInteiraseg.toFixed(2));
    setResultadoMeiaseg(resultadoMeiaseg.toFixed(2));
    
    
    
}

function calculoTarifa03seg(){
    //lembrar de tirar o comentario do console linha 79
   
    
    var numeroDisplayseg=getDisplayTextseg();
    var resultadoInteiraseg;
    var resultadoMeiaseg;
   
    
    numeroDisplayseg = Number(numeroDisplayseg);
    
    
    resultadoInteiraseg = numeroDisplayseg * tarifa03_int;
    resultadoInteiraseg = parseFloat(resultadoInteiraseg);
    
    resultadoMeiaseg = numeroDisplayseg * tarifa03_meia;
    resultadoMeiaseg = parseFloat(resultadoMeiaseg);
    
   
    
    
    setResultadoTelaseg(resultadoInteiraseg.toFixed(2));
    setResultadoMeiaseg(resultadoMeiaseg.toFixed(2));
    
    
    
}

function calculoTarifa04seg(){
    

    var numeroDisplayseg=getDisplayTextseg();
    var resultadoInteiraseg;
    var resultadoMeiaseg;
   
    
    numeroDisplayseg = Number(numeroDisplayseg);
    
    
    resultadoInteiraseg = numeroDisplayseg * tarifa04_int;
    resultadoInteiraseg = parseFloat(resultadoInteiraseg);
    
    resultadoMeiaseg = numeroDisplayseg * tarifa04_meia;
    resultadoMeiaseg = parseFloat(resultadoMeiaseg);
    
   
    
    
    setResultadoTelaseg(resultadoInteiraseg.toFixed(2));
    setResultadoMeiaseg(resultadoMeiaseg.toFixed(2));
    
    
    
}


function limparDisplayseg(){
    setDisplayTextseg("");
    setResultadoTelaseg("");
    setResultadoMeiaseg("");
    
    
    opMultiploseg=false;
}    

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
* Vai obter o numero que a pessoa digitou
*/
function getDisplaySaldoAtual(){
    return $("#txtHistorico").val();
    
}

function getDisplaySaldoAdc(){
    return $("#txtAdcionarValor").val();
    
}

/**
* Mostra o resultado na tela da quantidade de passagens
*/
function setResultadoSaldo(value){
    $("#txtHistorico").val(value);
   
    
}

function setDisplaySaldoAdc(value){
    $("#txtAdcionarValor").val(value);
   
    
}



/**
* :Vai adcionar um novo item na tela

function mostrarDisplaySaldo(digito){
    var numeroAtualSaldo=getDisplaySaldoAtual();
    
    
    setResultadoSaldo(numeroAtualSaldo+""+digito);
    
}

var ultimaOper=null;
var opMultiplo=false;
*/
function adcionaraoSaldo(){
    
   
    
     
    var numeroDisplay1=getDisplaySaldoAtual();
    var numeroDisplay2=getDisplaySaldoAdc();
    var resultadoSaldo;
    
    
    
    numeroDisplay1 = Number(numeroDisplay1);
    numeroDisplay2 = Number(numeroDisplay2);
    
    
    
    resultadoSaldo = numeroDisplay1 + numeroDisplay2;
    resultadoSaldo = parseFloat(resultadoSaldo);
    
   
    
   
    
    
    setResultadoSaldo(resultadoSaldo.toFixed(2));
    
    
    
    
    
    
    
}

function removerdoSaldo(){
    
   
    
    var numeroDisplay1=getDisplaySaldoAtual();
    var numeroDisplay2=getDisplaySaldoAdc();
    var resultadoSaldo;
    
    
    //numeroDisplay1 = Number(numeroDisplay1);
    //numeroDisplay1 = Number(numeroDisplay1);
    
    resultadoSaldo = numeroDisplay1 - numeroDisplay2;
    resultadoSaldo = parseFloat(resultadoSaldo);
    
   
    
   
    
    
    setResultadoSaldo(resultadoSaldo.toFixed(2));
    
    
    
    
    
}

function limparDisplaySaldo(){
    
    
    setResultadoSaldo("");
    
    opMultiploseg=false;
}    



function limparDisplayAdcSaldo(){
    
    
    setDisplaySaldoAdc("");
    
    opMultiploseg=false;
}    


function adcionarBD (){
    
    window.localStorage.setItem("saldo",ResultadoSaldo);
    localStorage.getItem
    
}