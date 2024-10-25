async function conectaAPI() {
    try {
        const api = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
        const apiTraduzida = await api.json()
        postMessage(apiTraduzida.USDBRL)
    } catch (e) {
        console.error(e);
    }
}

addEventListener("message", () => {
    conectaAPI()
    setInterval(() => conectaAPI(), 30000)
})
