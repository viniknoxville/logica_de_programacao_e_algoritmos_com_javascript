function calcularMedia() {
    // cria referencias aos elemtnso da página
    var inNome = document.getElementById("inNome");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var outMedia = document.getElementById("outMedia");
    var outSituacao = document.getElementById("outSituacao");

    //obtem os conteudos dos campos de edição da página
    var nome = inNome.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);

    // cálcula média das notas
    var media = (nota1 + nota2) / 2;

    // apresenta a média (altera o conteudo do elemento outMedia)

    outMedia.textContent = "Média das notas: " + media.toFixed(1);

    // cria a condição
    if (media >= 7) {
        // altera o texto e o estilo da cor do elemento outSituacao
        outSituacao.textContent = "Parabéns " + nome + "! você foi aprovado(a)";
        outSituacao.style.color = "blue";
    } else if (media >= 4) {
        outSituacao.textContent = "Atenção " + nome + ". você está em exame.";
        outSituacao.style.color = "green";
    }
    else {
        outSituacao.textContent = "Oops " + nome + "... você foi reprovado(a)";
        outSituacao.style.color = "red";
    }
}

//cria uma referência ao elemento btResultado (botão)
var btResultado = document.getElementById("btResultado");
//registra um evento associado ao botão para carregar uma função
btResultado.addEventListener("click", calcularMedia);

