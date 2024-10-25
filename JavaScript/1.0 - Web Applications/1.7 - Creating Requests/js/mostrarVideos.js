import { conectaAPI } from "./conectaAPI.js"

const lista = document.querySelector('[data-lista]')

function constroiCard(element) {
    const video = document.createElement('li')
    video.className = 'videos_item'
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${element.url}"
        title="${element.titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
    <div class="descricao-video">
        <img src="${element.imagem}">
        <h3>${element.descricao}</h3>
        <p>236 mil visualizações</p>
    </div>`

    return video
}

async function listaVideo() {
    const listaAPI = await conectaAPI.listaVideos()

    listaAPI.forEach(element => lista.appendChild(constroiCard(element)));
}

listaVideo()