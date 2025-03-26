function mostrarTabuada() {
    //cria referência dos elementos da página
    var inNumero = document.getElementById("inNumero");
    var outTabuada = document.getElementById("outTabuada");

    // converte o conteudo do campo inNumero
    var numero = Number(inNumero.value);
    //valida o número
    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número válido...");
        inNumero.focus();
        return;
    }

    //cria uma variavel do tipo String que irá concatenar a resposta
    var resposta = "";

    // cria um laço de repetição
    for (var i = 1; i < 10; i++) {
        // a váriavel resposta vai acumulando os novos conteúdos
        resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n";
    }

    // o conteúdo da tag pré é alterado para receber a tabuada do num
    outTabuada.textContent = resposta;

}

// cria referência ao botão e após associa funcão ao evento "click"
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarTabuada);