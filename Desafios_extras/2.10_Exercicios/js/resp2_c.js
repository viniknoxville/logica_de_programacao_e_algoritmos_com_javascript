function produtoPromocao(){
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outPromocao = document.getElementById("outPromocao");
    var outPrecoTerceiro = document.getElementById("outPrecoTerceiro");

    var produto = inProduto.value;
    var preco = Number(inPreco.value);
    
    var terceiro = (preco * 0.5);
    var total = (preco * 2) + terceiro;

    outPromocao.textContent = produto + " Promoção leve 3 por R$: " + total.toFixed(2);
    outPrecoTerceiro.textContent = "O terceiro produto custa apenas R$: " + terceiro.toFixed(2);
}

var btVer = document.getElementById("btVer");
btVer.addEventListener("click", produtoPromocao);

