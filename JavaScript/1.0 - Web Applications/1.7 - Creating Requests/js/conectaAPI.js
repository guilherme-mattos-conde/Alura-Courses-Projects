async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos')
    const conexaoConvert = await conexao.json()

    return conexaoConvert
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch ('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify ({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })

    const conexaoConvert = await conexao.json()
    return conexaoConvert
}

export const conectaAPI = {
    listaVideos,
    criaVideo
}