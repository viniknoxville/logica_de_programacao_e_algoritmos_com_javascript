function calcularPreco() {
    // cria referência aos elementos da página
    var inQuilo = document.getElementById("inQuilo");
    var inConsumo = document.getElementById("inConsumo");
    var outValor = document.getElementById("outValor");

    // obtem o conteúdo dos campos de entrada
    var quilo = Number(inQuilo.value);
    var consumo = Number(inConsumo.value);

    // calcula op valor a ser pago
    var valor = (quilo / 1000) * consumo;

    // altera o conteudo da linha de resposta
    outValor.textContent = "Valor a pagar R$ " + valor.toFixed(2);
}

// cria uma referência ao elemento btCalcular (botão)
var btCalcular = document.getElementById("btCalcular");
// registra um evento associado ao botão, para carregar uma função
btCalcular.addEventListener("click", calcularPreco);