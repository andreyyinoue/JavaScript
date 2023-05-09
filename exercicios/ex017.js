
function calcular() {
    let n = document.getElementById('txtnum')
    let num = Number(n.value)
    let res = document.querySelector('div#resultado')
    res.innerHTML = ""
    if (n.value.length == 0) {
        alert('DIGITE UM NÚMERO!')
    } else {
        for(let c = 1; c <= 10; c += 1){
            res.innerHTML += `${num} x ${c} = ${c*num} <br>`
        }
    }
}