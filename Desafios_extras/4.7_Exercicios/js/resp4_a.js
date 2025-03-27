function repeteFruta() {
    var inFruta = document.getElementById("inFruta");
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var fruta = inFruta.value;
    var numero = Number(inNumero.value);

    if (fruta == "" || numero == 0 || isNaN(numero)) {
        alert("Digite os dados corretamente...");
        inFruta.focus();
        return;
    }

    var resposta = "";

    for (var i = 1; i < numero; i++) {
        resposta = resposta + fruta + " * ";
    }

    resposta = resposta + fruta;

    outResposta.textContent = resposta; 
}

var btRepetir = document.getElementById("btRepetir");
btRepetir.addEventListener("click", repeteFruta);