var numeros = [];

function addNumero() {
    var inNumero = document.getElementById("inNumero");
    var outLista = document.getElementById("outLista");
    var outOrdem = document.getElementById("outOrdem");

    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero) || numeros.indexOf(numero) >= 0) {
        alert("Digite um número válido e que não foi adicionado a lista...");
        inNumero.focus();
        return;
    }
    // adiciona o num no final do vetor
    numeros.push(numero);

    outLista.textContent = "Números: " + numeros.join(", ");
    // limpa mensagem (se já clicou em verificar...)
    outOrdem.textContent = "";

    inNumero.value = "";
    inNumero.focus();
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", addNumero);

function verificarOrdem() {
    if (numeros.length == 0) {
        alert("Não há números na lista...");
        inNumero.focus();
        return;
    }

    var ordem = document.getElementById("outOrdem");
    // flag indicativa
    var ordem = true;

    // percorre os elementos do vetor (até penúltimo)
    for (var i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] > numeros[i + 1]) {
            ordem = false;
            break;
        }
    }
    // modifica conteúdo de outOrdem a partir de um operador ternário 
    outOrdem.textContent = ordem ? "Ok! Números estão em ordem crescente" : 
    "Atenção... Números não estão em ordem crescente";
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarOrdem);

// Função para reiniciar
function reiniciar() {
    location.reload();
}

var btReiniciar = document.getElementById("btReiniciar");
btReiniciar.addEventListener("click", reiniciar);