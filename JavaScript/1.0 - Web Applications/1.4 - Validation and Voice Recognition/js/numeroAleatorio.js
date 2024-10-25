const menorValor = 1;
const maiorValor = 100;
const elementoMaiorValor = document.getElementById('maiorValor');
const elementoMenorValor = document.getElementById('menorValor');
const numeroSecreto = gerarNumeroAleatorio(maiorValor);

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;