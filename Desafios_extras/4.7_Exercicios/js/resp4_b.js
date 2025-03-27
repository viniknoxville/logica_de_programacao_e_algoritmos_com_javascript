function numeroChinchilas (){
    var inChin = document.getElementById("inChin");
    var inAnos = document.getElementById("inAnos");
    var outEvolucao = document.getElementById("outEvolucao");

    var chin = Number(inChin.value);
    var anos = Number(inAnos.value);

    if (chin < 2 || anos == 0 || isNaN(chin) || isNaN(anos)){
        alert("Informe os dados corretamente...");
        inChin.focus();
        return;
    }

    var resposta = "";
    var total = chin;

    for (var i = 1; i <= anos; i++){
        resposta = resposta + i + "º ano: " + total + " Chinchilas" + "\n";
        total = total * 3;
    }

    outEvolucao.textContent = resposta;
}

var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", numeroChinchilas);

