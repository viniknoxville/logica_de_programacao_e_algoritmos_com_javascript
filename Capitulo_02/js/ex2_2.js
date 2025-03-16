function converterDuracao() {
    // cria referência aos elemtnso da página
    var inTitulo = document.getElementById("inTitulo");
    var inDuracao = document.getElementById("inDuracao");
    var outTitulo = document.getElementById("outTitulo");
    var outResposta = document.getElementById("outResposta");

    // obtem o conteudo dos elementos de entrada
    var titulo = inTitulo.value;
    var duracao = Number(inDuracao.value);
    // arredonda para baixo o resultado da divisão
    var horas = Math.floor(duracao / 60);
    // obtem o resto da divisão entre os números
    var minutos = duracao % 60;
    // altera o conteudo dos parágrafos 
    outTitulo.textContent = titulo;
    outResposta.textContent = horas + " hora(s) e " + minutos + " minuto(s)";
}

// cria uma referência ao elemento btConverter(botão)
var btConverter = document.getElementById("btConverter");
// regista o evento associado ao botão para carregar a função
btConverter.addEventListener("click", converterDuracao);

