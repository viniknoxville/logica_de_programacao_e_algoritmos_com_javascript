function numeroPerfeito() {
    var inNumero = document.getElementById("inNumero");
    var outDivisores = document.getElementById("outDivisores");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número válido...");
        inNumero.focus();
        return;
    }
    // como 1 é um divisor universal, já iniciamos com ele
    var divisores = "Divisores do " + numero + ": 1";
    var soma = 1;
    // percorre os possíveis divisores e acumula
    for (var i = 2; i <= numero/2; i++) {
        if (numero % i == 0) {
            divisores = divisores + ", " + i;  // vírgula + i (evita última vírgula)
            soma = soma + i;
        }
    }
    divisores = divisores + " (soma: " + soma + ")";
    // altera o conteúdo de outDivisores
    outDivisores.textContent = divisores;
    // verifica se é perfeito e exibe resposta na tag outResposta
    if (numero == soma) {
        outResposta.textContent = numero + " É um número perfeito";
        outResposta.style.color = "green";
    } else {
        outResposta.textContent = numero + " Não um número perfeito";
        outResposta.style.color = "red"; 
    }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", numeroPerfeito);