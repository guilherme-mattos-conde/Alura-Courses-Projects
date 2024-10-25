const elementoChute = document.getElementById('chute')
const tela = document.querySelector('.box');
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start()

function onSpeak(e){
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
}

function exibeChuteNaTela() {
    elementoChute.innerHTML = `
    <div>
    <h2>Você disse</h2>
    <span class="boxReconhecimentoDeVoz">${chute}</span>
    </div>
    `
}

recognition.addEventListener('end', () => recognition.start())