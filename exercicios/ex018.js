let suuji = []
let res = document.getElementById('res')
let valores = document.getElementById('valores')
function add(){
    let n = document.getElementById('txtn')
    let num = Number(n.value)
    if (n.value.length == 0) {
        alert("ERRO! Digite um número para adicionar ou finalize,")
    } else if(num < 1 || num > 100) {
        alert("ERRO! Digite um número entre 1 e 100 ou finalize.")
    } else if(suuji.includes(num)) { //Identifica se num já existe em suuji
        alert(`O número ${num} já foi adicionado. Por favor, digite outro ou finalize.`)
    } else {
        suuji.push(num)
        valores.innerHTML += `*O número ${num} foi adicionado. <br>`
    }
}

function finalizar() {
    suuji.sort(function(a, b) {
        return a-b
    })
    let soma = 0
    for(let i = 0; i <= (suuji.length)-1; i ++) {
        soma += suuji[i]
    }
    if(suuji.length == 0) {
        alert('Adicione pelo menos 1 número.')
    } else {
        res.innerHTML = ""
        res.innerHTML += `Ao todo, temos ${suuji.length} números cadastrados. <br>`
        res.innerHTML += `O maior valor informado foi ${suuji[suuji.length-1]}. <br>`
        res.innerHTML += `O menor valor informado foi ${suuji[0]} <br>`
        res.innerHTML += `A soma de todos os valores informados é igual a ${soma} <br>`
        res.innerHTML += `A média aritmética dos valores informados é ${soma/suuji.length}<br>`
    }
    
}

function clean() {
    suuji.length = 0
    res.innerHTML = ""
    valores.innerHTML = ""
}