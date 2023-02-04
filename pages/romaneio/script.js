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
        <td>${rpl(c)}</td>
        <td>${rpl(l)}</td>
        <td>${rpl(a)}</td>
        <td>${rpl(m3.toFixed(3))}</td>
        <td>${rpl(v)}</td>
        <td>${rpl(brs.toFixed(2))}</td>
    `
    table1.appendChild(tr)
    sm3.innerHTML = rpl(summ3.toFixed(4))
    sbrs.innerHTML = rpl(sumbrs.toFixed(2))

    add.C.value = ''
    add.L.value = ''
    add.C.focus()
}

function rpl(n) {
    return n.toString().replace('.', ',')
}