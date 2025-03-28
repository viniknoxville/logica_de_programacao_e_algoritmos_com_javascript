function calcularRaiz() {
    // cria uma refência aos elementos da página
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    // obtem conteudo do campo InNumero
    var numero = Number(inNumero.value);

    // se não preencheu ou NaN
    if (numero == "" || isNaN(numero)) {
        alert("Informe um número válido");
        inNumero.focus(); //coloca um foco no campo inNumero
        return; //retorna
    }

    var raiz = Math.sqrt(numero); //cálcula a raiz quadrada do número

    // se valor da variável raiz igual a este valor arredondado para baixo...
    if (raiz == Math.floor(raiz)) {
        outResposta.textContent = "Raiz: " + raiz; // mostra a raiz   
    } else {
        // senão, exibe mensagem indicando que não há raiz exata
        outResposta.textContent = "Não há raiz exata para " + numero;
    }
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularRaiz);


//No if poderia ser usado a expressão (raiz % 1 == 0)

// Como funciona?
// A operação módulo (%) retorna o resto da divisão. 
// Quando fazemos raiz % 1, estamos dividindo raiz 
// por 1 e verificando o resto dessa divisão.

// Se raiz for um número inteiro, o resto será 0.

// Se raiz for decimal, o resto será diferente de 0.