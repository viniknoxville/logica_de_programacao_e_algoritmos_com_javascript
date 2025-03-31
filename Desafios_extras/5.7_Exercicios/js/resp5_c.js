var candidatos = [];

function addCandidato() {
    var inNome = document.getElementById("inNome");
    var inAcertos = document.getElementById("inAcertos");

    var nome = inNome.value;
    var acertos = Number(inAcertos.value);

    if (nome == "" || acertos == 0 || isNaN(acertos)) {
        alert("Digite os dados corretamente...");
        inNome.focus();
        return;
    }

    candidatos.push({ nome: nome, acertos: acertos });

    inNome.value = "";
    inAcertos.value = "";
    inNome.focus();

    listarCandidatos();
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", addCandidato);

function listarCandidatos() {
    if (candidatos.length == 0) {
        alert("Não há candidatos na lista...");
        return;
    }

    var lista = "";

    for (var i = 0; i < candidatos.length; i++) {
        lista += candidatos[i].nome + " - " + candidatos[i].acertos + " acertos\n";
    }

    document.getElementById("outLista").textContent = lista;
}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCandidatos);

function mostrarAprovados() {
    if (candidatos.length == 0) {
        alert("Não há candidatos na lista...");
        return;
    }

    var notaCorte = Number(prompt("Digite o número de Acertos para aprovação: "))
    // cria uma cópia do vetor candidatos 
    var copia = candidatos.slice();
    // ordena o vetor copia pelos acertos
    copia.sort(function (a, b) {
        return a.acertos - b.acertos
    });

    var aprovados = "";

    for (var i = 0; i < candidatos.length; i++) {
        if (copia[i].acertos >= notaCorte) {
            aprovados += copia[i].nome + " - " + copia[i].acertos + " acertos\n";
        }
    }

    var outLista = document.getElementById("outLista");

    if (aprovados == "") {
        alert("Não há candidatos aprovados...");
    } else {
        outLista.textContent = aprovados;
    }
}

var btAprovados = document.getElementById("btAprovados");
btAprovados.addEventListener("click", mostrarAprovados);
