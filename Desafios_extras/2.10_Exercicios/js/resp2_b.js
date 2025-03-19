function calcularTempoLanHouse() {
    // cria referência aos elementos da página
    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");
    var outPagar = document.getElementById("outPagar");

    // obtem o conteúdo dos campos de entrada
    var valor = Number(inValor.value);
    var tempo = Number(inTempo.value);

    // calcula valor a pagar (arredonda para cima)
    var pagar = Math.ceil(tempo/15) * valor;

    //exibe valor a ser pago
    outPagar.textContent = "Valor a pagar R$ " + pagar.toFixed(2);
}

// cria uma referência ao elemento btCalcular (botão)
var btCalcular =document.getElementById("btCalcular");

// registra um evento associado ao botão, para carregar uma função
btCalcular.addEventListener("click", calcularTempoLanHouse);