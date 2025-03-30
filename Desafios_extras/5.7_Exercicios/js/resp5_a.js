var clubes = [];

function addClubes() {
    var inClube = document.getElementById("inClube");
    var nome = inClube.value;

    if (nome == "") {
        alert("Informe o nome do clube...");
        inClube.focus();
        return;
    }

    clubes.push(nome);
    inClube.value = "";
    inClube.focus();

    listarClubes();
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", addClubes);

function listarClubes() {
    if (clubes.length == 0) {
        alert("Não há clubes na lista...");
        inClube.focus();
        return;
    }

    var lista = "";

    for (var i = 0; i < clubes.length; i++) {
        lista += (i + 1) + ". " + clubes[i] + "\n";
    }

    document.getElementById("outLista").textContent = lista;
}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarClubes);

function montarJogos() {

    var numClubes = clubes.length;

    if (numClubes == 0) {
        alert("Nenhum clube cadastrado...");
        return;
    }
    if (numClubes % 2 == 1) {
        alert("Número de clubes ímpar! Adicione mais um clube para montar os jogos.");
        return;
    }

    var jogos = "";
    var ultimo = numClubes - 1;

    for (var i = 0; i < numClubes / 2; i++) {
        jogos += clubes[i] + " x " + clubes[ultimo - i] + "\n";
    }

    document.getElementById("outLista").textContent = jogos;
}

var btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarJogos);