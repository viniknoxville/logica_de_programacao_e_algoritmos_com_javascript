function parquimetro() {
    var inValor = document.getElementById("inValor");
    var outTempo = document.getElementById("outTempo");
    var outTroco = document.getElementById("outTroco");

    var valor = Number(inValor.value);
    // verifica validade do campo valor
    if (valor == "" || isNaN(valor)) {
        alert("Digite um valor valido!");
        inValor.focus();
        return;
    }
    // caso valor insuficiente
    if (valor < 1.00) {
        alert("Valor insulficiente (valor mínimo R$ 1.00)");
        inValor.focus();
        return;
    }
    // declara variáveis
    var tempo;
    var troco;
    // cria as condições para verificar tempo e troco
    if (valor >= 3.00) {
        tempo = 120;
        troco = valor - 3.00;

    } else if (valor >= 1.75) {
        tempo = 60;
        troco = valor - 1.75;

    } else {
        tempo = 30;
        troco = valor - 1.00;
    }
    // exibe as respostas
    outTempo.textContent = "Tempo: " + tempo + " min";
    if (troco > 0) {
        outTroco.textContent = "Troco R$: " + troco.toFixed(2);
    }

}

var btConfirmar = document.getElementById("btConfirmar");
btConfirmar.addEventListener("click", parquimetro);