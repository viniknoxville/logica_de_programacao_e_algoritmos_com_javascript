function radarVeiculo() {
    var inVelPermitida = document.getElementById("inVelPermitida");
    var inVelCondutor = document.getElementById("inVelCondutor");
    var outSituacao = document.getElementById("outSituacao");

    var velPermitida = Number(inVelPermitida.value);
    var velCondutor = Number(inVelCondutor.value);

    if (inVelPermitida.value == "" || isNaN(velPermitida) || inVelCondutor.value == "" || isNaN(velCondutor)) {
        alert("Digite uma velocidade valida!");
        inVelPermitida.focus();
        return;
    }


    if (velCondutor <= velPermitida) {
        outSituacao.textContent = "Situação: Sem Multa";
        outSituacao.style.color = "green";
    } else if (velCondutor <= velPermitida * 1.20) {
        outSituacao.textContent = "Situação: Multa Leve";
        outSituacao.style.color = "blue";
    } else {
        outSituacao.textContent = "Situação: Multa Grave";
        outSituacao.style.color = "red";
    }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", radarVeiculo);