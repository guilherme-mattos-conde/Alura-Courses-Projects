import selecionaCotacao from "./cotacao.js";

const graficoDolar = document.getElementById('graficoDolar');
const graficoIene = document.getElementById('graficoIene');

const graficoParaDolar = new Chart(graficoDolar, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Dólar',
      data: [],
      borderWidth: 1
    }]
  }
})

const graficoParaIene = new Chart(graficoIene, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Iene',
      data: [],
      borderWidth: 1
    }]
  }
})

function getHorario() {
    let date = new Date()
    let horario = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    return horario
}

function adicionarDados(grafico, label, valor) {
    grafico.data.labels.push(label)
    grafico.data.datasets.forEach(e => {
        e.data.push(valor)
    });
    grafico.update()
}

let workerDolar = new Worker('./js/workers/workerDolar.js')
workerDolar.postMessage('usd')

workerDolar.addEventListener("message", e => {
    let tempo = getHorario()
    let valor = e.data.ask
    selecionaCotacao("dolar", valor)
    adicionarDados(graficoParaDolar, tempo, valor)
})

let workerIene = new Worker('./js/workers/workerIene.js')
workerIene.postMessage('jpy')

workerIene.addEventListener("message", e => {
    let tempo = getHorario()
    let valor = e.data.ask
    selecionaCotacao("iene", valor)
    adicionarDados(graficoParaIene, tempo, valor)
})
