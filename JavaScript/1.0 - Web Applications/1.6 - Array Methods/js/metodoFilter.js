const botoes = document.querySelectorAll('.btn')

botoes.forEach(botao => botao.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const botao = document.getElementById(this.id)
    const categoria = botao.value
    let livrosFiltrados = categoria === 'disponivel' ? filtrarQuantidade() : filtrarCategoria(categoria)
    exibirLivros(livrosFiltrados)

    if (categoria === 'disponivel') {
        const valorTotal = calcularValorTotal(livrosFiltrados)
        exibirValorTotal(valorTotal)
    }
}
function exibirValorTotal(total) {
    elementoValorTotal.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${total.toFixed(2)}</span></p>
        </div>
        `
}

function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria)
}

function filtrarQuantidade() {
    return livros.filter(livro => livro.quantidade > 0)
}
