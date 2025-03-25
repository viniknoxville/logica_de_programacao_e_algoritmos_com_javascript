function calculoTriangulo() {
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");
    var outSimNao = document.getElementById("outSimNao");
    var outTipo = document.getElementById("outTipo");

    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);

    if (ladoA == 0 || isNaN(ladoA) || ladoB == 0 || isNaN(ladoB) || ladoC == 0 || isNaN(ladoC)) {
        alert("Digite um número valido!");
        inLadoA.focus();
        return;
    }
    // Verifica se os lados formam um triângulo
    if (ladoA > (ladoB + ladoC) || ladoB > (ladoA + ladoC) || ladoC > (ladoA + ladoB)) {
        outSimNao.textContent = "Lados não podem formar um triângulo.";
        outTipo.textContent = "";
        return;
    }
    // Se passou pela verificação, os lados formam um triângulo
    outSimNao.textContent = "Lados podem formar um triângulo";

    if (ladoA == ladoB && ladoA == ladoC) {
        outTipo.textContent = "Tipo: Equilátero";

    } else if (ladoA == ladoB || ladoA == ladoC || ladoC == ladoB) {
        outTipo.textContent = "Tipo: Isóceles";

    } else {
        outTipo.textContent = "Tipo: Escaleno";
    }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", calculoTriangulo);