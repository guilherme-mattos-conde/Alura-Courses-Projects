async function conectaAPI() {
    try {
        const api = await fetch("https://economia.awesomeapi.com.br/json/last/JPY-BRL")
        const apiTraduzida = await api.json()
        postMessage(apiTraduzida.JPYBRL)
    } catch (e) {
        console.error(e);
    }
}

addEventListener("message", () => {
    conectaAPI()
    setInterval(() => conectaAPI(), 30000)
})
