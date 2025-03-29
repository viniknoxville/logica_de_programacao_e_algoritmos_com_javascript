// 5.2 - Código js do programa Descubra o Número

// declara vetor de escopo global que irá conter os números já apostados
var erros = [];
// gera um número aleatório entre 1 e 100
var sorteado = Math.floor(Math.random() * 100) + 1;
// declara constante com o número de chances
var CHANCES = 6;

// cria referência ao campo de entrada e obtém seu conteúdo
function apostarNumero() {
    var inNumero = document.getElementById("inNumero");
    var numero = Number(inNumero.value);

    //valida o número
    if (numero <= 0 || numero > 100 || isNaN(numero)) {
        alert("Informe um número válido (de 1 até 100)");
        inNumero.focus();
        return;
    }
    // referencia espaços das saídas de dados
    var outDica = document.getElementById("outDica");
    var outErros = document.getElementById("outErros");
    var outChances = document.getElementById("outChances");
    // se aposta do jogador for igual ao número sorteado
    if (numero == sorteado) {
        alert("Parabens você acertou");
        showFireworks();
        // troca status dos botões
        btApostar.disabled = true;
        btJogar.className = "exibe";
        outDica.textContent = "Parabéns!!! Número sorteado: " + sorteado;
    } else {
        // se número existe no vetor erros 
        if (erros.indexOf(numero) >= 0) {
            alert("Você já apostou o número: " + numero + ". Tente outro...");
        } else {
            erros.push(numero); // adiciona número ao vetor
            var numErros = erros.length; // obtém tamanho do vetor
            var numChances = CHANCES - numErros; // calcula nº de chances
            // exibe nº de erros, conteúdo do vetor e nº de chances
            outErros.textContent = numErros + " (" + erros.join(", ") + ")";
            outChances.textContent = numChances;

            if (numChances == 0) {
                alert("Suas chances acabaram...");
                btApostar.disabled = true;
                btJogar.className = "exibe";
                outDica.textContent = "Game Over!! Número Sorteado: " + sorteado;
            } else {
                // usa operador ternário para mensagem da dica
                var dica = numero < sorteado ? "maior" : "menor";
                outDica.textContent = "Dica: Tente um número " + dica + " que " + numero;
            }
        }
    }
    // Limpa campo de entrada e posiciona cursor neste campo
    inNumero.value = "";
    inNumero.focus();
}

var btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", apostarNumero);

function showFireworks() {
    for (let i = 0; i < 10; i++) {
        let firework = document.createElement("div");
        firework.classList.add("firework");
        document.body.appendChild(firework);

        firework.style.left = Math.random() * 100 + "vw";
        firework.style.top = Math.random() * 100 + "vh";

        setTimeout(() => {
            firework.remove();
        }, 1000);
    }
}

function jogarNovamente (){
    location.reload(); // recarrega a página
}

var btJogar = document.getElementById("btJogar");
btJogar.addEventListener("click", jogarNovamente);


