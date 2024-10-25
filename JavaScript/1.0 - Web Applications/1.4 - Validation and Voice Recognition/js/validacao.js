function verificacaoChute(chute) {
    const num = +chute

    if(chuteNaoNumerico(num)){
        elementoChute.innerHTML += '<div>Valor Inválido!</div>'
    }
    else {
        if(chuteForaDoRange(num)){
            elementoChute.innerHTML += `<div>O chute tem que ser entre ${menorValor} e ${maiorValor}</div>`
        }
        else {
            if (chute === numeroSecreto){
                document.body.innerHTML = `
                <h1>Você acertou!</h1>
                <h2>O número era ${numeroSecreto}</h2>`
            }
            else {
                if (num > numeroSecreto) {
                    elementoChute.innerHTML += `
                    <div>O número secreto é menor que ${elementoChute}</div>`
                }
                else {
                    elementoChute.innerHTML += `
                    <div>O número secreto é maior que ${elementoChute}</div>`
                }
            }
    }
    }
}

function chuteNaoNumerico(num) {
    return Number.isNaN(num)
}

function chuteForaDoRange(num) {
    return num > maiorValor || num < menorValor
}