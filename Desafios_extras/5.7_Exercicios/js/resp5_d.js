var noticias = [];

function addNoticias() {
    var inNoticia = document.getElementById("inNoticia");

    var noticia = inNoticia.value;

    if (noticia == "") {
        alert("Digite uma noticia...");
        inNoticia.focus();
        return
    }

    noticias.push(noticia);

    document.getElementById("outNum").textContent = noticias.length;

    inNoticia.value = "";
    inNoticia.focus();
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", addNoticias);

function ultimasNoticias() {
    var qtdNoticias = Number(prompt("Quantas notícias você deseja listar?"));

    var total = noticias.length;

    if (qtdNoticias <= 0 || isNaN(qtdNoticias) || qtdNoticias > total) {
        alert("Número Inválido");
        return;
    }

    var ultimas = qtdNoticias + " Últimas Notícias\n------------------------------------------------\n";

    for (var i = total - 1; i >= total - qtdNoticias; i--) {
        ultimas += (i + 1) + "º) " + noticias[i] + "\n";
    }
    document.getElementById("outLista").textContent = ultimas;
}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", ultimasNoticias);