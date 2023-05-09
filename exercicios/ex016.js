
function count() {
    let i = document.getElementById('txti')
    let f = document.getElementById('txtf')
    let p = document.getElementById('txtp')
    let inicio = Number(i.value)
    let fim = Number(f.value)
    let passo = Number(p.value)
    let res = document.getElementById('resultado')
    res.innerHTML = ""
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        window.alert('Dados incompletos. Preencha os dados abaixo, e tente novamente.')
    } else if (passo <= 0) {
        alert('Impossível contar. Valor mínimo para o PASSO: 1')
    } else if (inicio < fim) {
        for(let c = inicio; c <= fim; c += passo) {
            res.innerHTML += `${c} > `
        }
    } else if(inicio > fim) {
        for(let c = inicio; c >= fim; c -= passo) {
            res.innerHTML += `${c} > `
        }
    }
    res.innerText += " FIM"
}

//Exemplo de Emoji no JS

/*
U+1F92A --> `/u{1F92A}` (Apenas entre crase)
*/