const teclado = document.getElementById('teclado')
const microfone = document.getElementById('microfone')
const divTeclado = document.getElementById('digitarChute')

selecionarEntrada(microfone, teclado)

teclado.addEventListener('click', () => {
    if(checarClasseAtiva(microfone)){
        selecionarEntrada(teclado, microfone)
    }
})
microfone.addEventListener('click', () => {
    if(checarClasseAtiva(teclado)){
        selecionarEntrada(microfone, teclado)
    }
})

function selecionarEntrada(ativar, desativar) {
    ativar.classList.add('ativo')
    desativar.classList.remove('ativo')
    
    if (ativar === microfone) {
        divTeclado.classList.add('desativar')
        recognition.addEventListener('result', onSpeak)
    }
    else {
        divTeclado.classList.remove('desativar')
        recognition.removeEventListener('result', onSpeak)
    }
}

function checarClasseAtiva(elemento) {
    if (elemento.classList.contains('ativo')) {
        return true
    }
    else {
        return false
    }
}