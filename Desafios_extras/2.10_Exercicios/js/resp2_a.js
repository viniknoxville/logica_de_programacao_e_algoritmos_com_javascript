function calcularPromocao() {
    // cria referência aos elementos da página
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outMedicamento = document.getElementById("outMedicamento");
    var outPromocao = document.getElementById("outPromocao");

    // obtem o conteúdo dos campos de entrada
    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);

    // calcula op valor a ser pago
    var preco = Math.floor(preco * 2); //Math.floor(...) → Arredonda o resultado para baixo, removendo qualquer parte decimal.

    // altera o conteudo da linha de resposta
    outMedicamento.textContent = "Promoção de " + medicamento;
    outPromocao.textContent = "Leve dois por apenas R$ " + preco.toFixed(2);
}

// cria uma referência ao elemento btCalcular (botão)
var btMostrar = document.getElementById("btMostrar");
// registra um evento associado ao botão, para carregar uma função
btMostrar.addEventListener("click", calcularPromocao);