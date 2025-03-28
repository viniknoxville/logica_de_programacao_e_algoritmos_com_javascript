// 4.2 - Código do Programa Números Descrescentes

function listarNumeros() {
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Digite um número válido!");
        inNumero.focus();
        return;
    }
    // inicializa a variável resposta
    var resposta = "Entre " + numero + " e 1: " + numero;

    // cria um for descrescente
    for (var i = numero - 1; i > 0; i--) {
        // resposta vai acumulando números e virgulas
        resposta = resposta + ", " + i ;
    }
    //altera conteudo do outResposta
    outResposta.textContent = resposta + ".";
}

var btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener("click", listarNumeros);