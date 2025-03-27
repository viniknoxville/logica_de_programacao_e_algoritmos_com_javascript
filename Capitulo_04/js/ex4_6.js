function verificarNumeroPrimo() {
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Digite um número válido...");
        inNumero.focus();
        return;
    }

    var numDivisores = 0; //declara e inicializa o contator

    // pecorre todos os possiveis divisores do número
    for (var i = 1; i <= numero; i++) {
        //verifica se i (1,2,3...) é divisor do numero
        if (numero % i == 0) {
            numDivisores++; // se é, incrementa contator;
        }
    }


    // se possui apenas 2 divisores, é primo
    if (numDivisores == 2) {
        outResposta.textContent = numero + " É primo";
    } else {
        outResposta.textContent = numero + " Não é primo";
    }

}

var btVerificarPrimo = document.getElementById("btVerificarPrimo");
btVerificarPrimo.addEventListener("click", verificarNumeroPrimo);