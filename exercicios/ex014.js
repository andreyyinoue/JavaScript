
function load() {
    let date = new Date()
    let hour = date.getHours()
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    msg.innerHTML = `Agora são ${hour} horas! <br>`
    if (hour >= 0 && hour < 6) {
        msg.innerHTML += "Boa Madrugada!"
        img.src = "../imagens/dawn-square.jpg"
        document.body.style.background = '#07317D'
    } else if (hour >= 6 && hour < 12) {
        msg.innerHTML += "Bom Dia!"
        img.src = "../imagens/morning-square.jpg"
        document.body.style.background = "#e2cd9f"
    } else if (hour >= 12 && hour < 19) {
        msg.innerHTML += "Boa Tarde!"
        img.src = "../imagens/afternoon-square.jpg"
        document.body.style.background = "#b9846f"
    } else {
        msg.innerHTML += "Boa Noite!"
        img.src = "../imagens/night-square.jpg"
        document.body.style.background = "#515154"
    }
}
