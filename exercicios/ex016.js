
function count() {
    let i = document.getElementById('txti')
    let inicio = Number(i.value)
    let f = document.getElementById('txtf')
    let fim = Number(f.value)
    let p = document.getElementById('txtp')
    let passo = Number(p.value)
    let res = document.getElementById('resultado')
    res.innerHTML = ""
    if (i.value.length == 0 || f.value.lenght == 0 || p.value.length == 0 || passo == 0) {
        alert('Dados incompletos. Preencha todos os dados e tente novamente.')
    } else {
        if (passo > 0){
            for(let c = inicio; c <= fim; c += passo){
                res.innerHTML += `${c} >  `
        }
        } else {
            for(c = inicio; c >= fim; c += passo)
            res.innerHTML += `${c} > `
        }
            
    }
    res.innerHTML += "FIM"
    }

