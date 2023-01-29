var summ3 = 0
var sumbrs = 0

add.onsubmit = e => {
    if( add.C.value == 0 || 
        add.L.value == 0 ||
        add.V.value == 0 ){
            add.C.focus()
            return false
    }
    calc(
        add.C.value,
        add.L.value,
        add.A.value,
        add.V.value
    )
    e.preventDefault()
}

function calc(c, l, a, v) {
    let m3 = (c / 10) * (l / 100) * a
    let brs = m3 * v
    summ3 += m3
    sumbrs += brs
    render(c / 10, l / 100, a, m3, v, brs)
}

function render(c, l, a, m3, v, brs) {
    let tr = document.createElement('tr')
    tr.innerHTML = `
        <td>${c}</td>
        <td>${l}</td>
        <td>${a}</td>
        <td>${m3.toFixed(3)}</td>
        <td>${v}</td>
        <td>${brs.toFixed(2)}</td>
    `
    table1.appendChild(tr)
    sm3.innerHTML = summ3.toFixed(4)
    sbrs.innerHTML = sumbrs.toFixed(2)

    add.C.value = ''
    add.L.value = ''
    add.C.focus()
}