const lista = document.querySelectorAll('[data-lista]')

function imprimeCotacao(lista, nome, valor) {
    lista.innerHTML = ''

    for(let mult = 1; mult <= 1000; mult *= 10) {
        const listaItem = document.createElement('li')
        
        const plurais = {
            'dolar': 'dolares',
            'iene': 'ienes'
            
        }
        
        listaItem.innerHTML = `${mult} ${mult == 1 ? nome : plurais[nome]}: R$${(mult * valor).toFixed(2)}`
        lista.appendChild(listaItem)
    }
}

export default function selecionaCotacao(nome, valor) {
    lista.forEach((e) => {
        if (nome === e.id) {
            imprimeCotacao(e, nome, valor)
        }
    })
}
