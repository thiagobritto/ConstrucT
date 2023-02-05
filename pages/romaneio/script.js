var list = []

add.onsubmit = e => {
    if (add.C.value == 0 ||
        add.L.value == 0 ||
        add.V.value == 0) {
        add.C.focus()
        return false
    }

    let res = resove(add.C.value, add.L.value, add.A.value, add.V.value)
    addItem(...res, add.A.value, add.V.value);

    render()
    e.preventDefault()
}

function resove(c, l, a, v) {
    c = c / 10, l = l / 100
    return [
        c,
        l,
        (c * l * a).toFixed(4),
        (c * l * a * v).toFixed(2)
    ]
}

function addItem(c, l, m3, brs, a, v) {
    list.unshift({ c, l, a, m3, v, brs })
}

function removeItem({ target }) {
    let id = target.parentNode.getAttribute('data-id')
    list = list.filter((i, k) => {
        if (id != k) return i
    })
    render()
}

function render() {
    table1.innerHTML = ''

    list.forEach((i, k) => {
        let tr = document.createElement('tr')
        tr.setAttribute('data-id', k)
        tr.ondblclick = removeItem
        tr.innerHTML = write(i)
        table1.appendChild(tr)
    })

    sm3.innerHTML = rpl(soma('m3', list).toFixed(4))
    sbrs.innerHTML = rpl(soma('brs', list).toFixed(2))

    add.C.value = ''
    add.L.value = ''
    add.C.focus()
}

function write(i) {
    return (`
        <td>${rpl(i.c)}</td>
        <td>${rpl(i.l)}</td>
        <td>${rpl(i.a)}</td>
        <td>${rpl(i.m3)}</td>
        <td>${rpl(i.v)}</td>
        <td>${rpl(i.brs)}</td>
    `)
}

function rpl(n) {
    return n.toString().replace('.', ',')
}

function soma(key, arr) {
    let total = 0
    arr.forEach(item => {
        total += Number(item[key])
    })
    return total
}

function settings() {
    console.log('settings');
}