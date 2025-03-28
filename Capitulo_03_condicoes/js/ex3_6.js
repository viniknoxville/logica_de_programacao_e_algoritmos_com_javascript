function calcularNotas() {
    var inSaque = document.getElementById("inSaque");
    var outNotasCem = document.getElementById("outNotasCem");
    var outNotasCinquenta = document.getElementById("outNotasCinquenta");
    var outNotasDez = document.getElementById("outNotasDez");

    // limpa mensagens caso segunda execução
    outNotasCem.textContent = "";
    outNotasCinquenta.textContent = "";
    outNotasDez.textContent = "";

    var saque = Number(inSaque.value);

    if (saque == "" || isNaN(saque)) {
        alert("informe o valor do saque corretamente!");
        inSaque.focus();
        return;
    }

    // verifica se saque não é multiplo de 10
    if (saque % 10 != 0) {
        alert("Valor invalido para notas disponiveis (R$ 10, 50, 100");
        inSaque.focus();
        return;
    }

    // calcula notas de 100, 50 e 10
    var notasCem = Math.floor(saque / 100);
    var resto = saque % 100;
    var notasCinquenta = Math.floor(resto / 50);
    resto = resto % 50;
    var notasDez = Math.floor(resto / 10);
    
    // exibe as notas apenas se houver
    if (notasCem > 0) {
        outNotasCem.textContent = "Notas de R$100: " + notasCem;
    }
    if (notasCinquenta > 0) {
        outNotasCinquenta.textContent = "Notas de R$50: " + notasCinquenta;
    }
    if (notasDez > 0) {
        outNotasDez.textContent = "Notas de R$10: " + notasDez;
    }

}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularNotas)