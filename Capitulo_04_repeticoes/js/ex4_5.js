// declara e inicializa contadores e acumuladores (variáveis global)
var numContas = 0;
var valTotal = 0;

// variável String que acumula as contas
var resposta = "";

function registrarConta() {
    var inDescricao = document.getElementById("inDescricao");
    var inValor = document.getElementById("inValor");
    var outListaContas = document.getElementById("outListaContas");
    var outTotal = document.getElementById("outTotal");

    var descricao = inDescricao.value;
    var valor = Number(inValor.value);

    if (descricao == "" || valor == "" || isNaN(valor)) {
        alert("Informe os dados corretamente...");
        inDescricao.focus();
        return;
    }

    // adiciona valores ao contator e acumulador
    numContas++;
    valTotal = valTotal + valor;

    // concatena as contas
    resposta = resposta + descricao + " - R$:" + valor.toFixed(2) + "\n";
    // altera o conteudo das tags de respostas
    outListaContas.textContent = resposta + 
    "---------------------";

    outTotal.textContent = numContas + " Conta(as) - Total R$:" + valTotal.toFixed(2);

    // limpa campos e posiciona cursor inDescrição
    inDescricao.value = "";
    inValor.value = "";
    inDescricao.focus();
}

var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", registrarConta);