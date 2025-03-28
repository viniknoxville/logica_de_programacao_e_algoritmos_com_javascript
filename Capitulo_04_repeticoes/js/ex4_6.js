function verificarNumeroPrimo() {
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Digite um número válido...");
        inNumero.focus();
        return;
    }

    var temDivisor = 0; // declara e inicia a variável flag
    
    // pecorre os possiveis divisores do número
    for (var i = 2; i <= numero / 2; i++) {
        if (numero % i == 0) {
            temDivisor = 1; // muda o flag
            break; // sai da repetição
        }
    }
    // se num for maior que 1 e não possui divisor
    if (numero > 1 && !temDivisor) {
        outResposta.textContent = numero + " É primo";
    } else {
        outResposta.textContent = numero + " Não é primo";
    }

}

var btVerificarPrimo = document.getElementById("btVerificarPrimo");
btVerificarPrimo.addEventListener("click", verificarNumeroPrimo);