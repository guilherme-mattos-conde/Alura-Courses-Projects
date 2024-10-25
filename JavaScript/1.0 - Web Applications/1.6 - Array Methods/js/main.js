const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
let livros = []

buscarLivrosDaAPI()

async function buscarLivrosDaAPI() {
    const res = await fetch(endPointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivros(livrosComDesconto)
}
