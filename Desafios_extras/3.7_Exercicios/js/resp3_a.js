function calculoImparPar() {
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Digite um número válido");
        inNumero.focus();
        return;
    }

    if (numero % 2 == 0) {
        outResposta.textContent = "O número é: " + numero + " par";
    } else {
        outResposta.textContent = "O número é: " + numero + " impar";
    }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", calculoImparPar);