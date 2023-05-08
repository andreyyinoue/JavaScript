function verify() {
    let data = new Date()
    let now = data.getFullYear()
    let a = document.getElementById('txtano')
    let ano = Number(a.value)
    let res = document.getElementById("resultado")
    let img = document.createElement('img') //Criação de uma tag <img>
    img.setAttribute('id', 'foto') //Atribui Id = foto
    if (a.value.length == 0 || ano > now) {
        alert("ERRO! Verifique os dados digitados e tente novamente.")
    } else {
        let sex = window.document.getElementsByName('radsex')
        let idade = now - ano
        let sexo = ""
        if (sex[0].checked) {
            sexo = "Homem"
            res.innerHTML = `${sexo} de ${idade} anos de idade.`
            if (idade < 15) {
                img.setAttribute('src', '../imagens/mkid-square.jpg')
            } else if (idade <= 25) {
                img.setAttribute('src', '../imagens/mteen-square.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', "../imagens/madult-square.jpg")
            } else {
                img.setAttribute('src', "../imagens/mold-square.jpg")
            }
        } else {
            sexo = "Mulher"
            res.innerHTML = `${sexo} de ${idade} anos de idade`
            if (idade < 15) {
                img.setAttribute('src', '../imagens/fkid-square.jpg')
            } else if (idade <= 25) {
                img.setAttribute('src', '../imagens/fteen-square.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', '../imagens/fadult-square.jpg')
            } else {
                img.setAttribute('src', '../imagens/fold-square.jpg')
            }
        }
    }
    res.appendChild(img) //Adicionar "filho" na variável res.

    
    
}