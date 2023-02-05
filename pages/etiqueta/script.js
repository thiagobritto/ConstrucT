fmetiqueta.onsubmit = e => {
  let codigo = fmetiqueta.codigo.value
  let descricao = fmetiqueta.descricao.value
  let valor = Number(fmetiqueta.valor.value.replaceAll(',', '.'))

  renderEtiqueta(writeEtiqueta(codigo, descricao, valor))

  e.preventDefault()
}

function renderEtiqueta(content) {
  let div = document.createElement('div')
  div.innerHTML = content
  rpetiqueta.appendChild(div)
}

function writeEtiqueta(code, descricao, valor) {
  try {
    const { codigo, precods, preco, desconto } = getDBL('db-etq')
    const desc = valor - (valor * desconto / 100)
    return (`
      <p>${codigo || ''} ${code}</p>
      <p>${descricao}</p>
      <p class="destaque">${moedaFormat(desc.toFixed(2))} ${precods || ''}</p>
      <p>${moedaFormat(valor.toFixed(2))} ${preco || ''}</p>
    `)
  } catch (error) {
    return (`
      <p>${code}</p>
      <p>${descricao}</p>
      <p class="destaque">${moedaFormat(valor.toFixed(2))}</p>
      <p>${moedaFormat(valor.toFixed(2))}</p>
    `)
  }
}

function settings() {
  document.querySelector('.et-modal-overlay').classList.toggle('hide')
  document.querySelector('.et-modal').classList.toggle('hide')
  innerFormSetting(getDBL("db-etq"))
}

function innerFormSetting(data) {
  try {
    const { codigo, precods, preco, desconto } = data
    fmsetting.codigo.value = codigo || ''
    fmsetting.precods.value = precods || ''
    fmsetting.preco.value = preco || ''
    fmsetting.desconto.value = desconto || ''
  } catch (error) {
    return false
    console.log(error);
  }
}

document.querySelector('.et-modal-overlay').onclick = settings

fmsetting.onsubmit = e => {
  setDBL("db-etq", {
    codigo: fmsetting.codigo.value,
    precods: fmsetting.precods.value,
    preco: fmsetting.preco.value,
    desconto: fmsetting.desconto.value,
  })
  settings()
  e.preventDefault()
}