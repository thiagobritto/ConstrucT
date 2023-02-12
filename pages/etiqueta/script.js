fmetiqueta.onsubmit = e => {
  const dataFM = getFmEtiqueta()
  if (dataFM.describe == '') return false
  if (dataFM.price == '') return false

  dataFM.priceOff = 0

  try {
    const dataDB = getDBL('etq-config')
    dataFM.priceOff = (dataFM.price * (dataDB.off || 0) / 100).toFixed(2)
    const htmlET = writeHTMLEtiqueta(dataFM, dataDB)
    renderEtiqueta(htmlET)
  } catch (error) {
    const htmlET = writeHTMLEtiqueta(dataFM)
    renderEtiqueta(htmlET)
  }
  e.preventDefault()
}

function getFmEtiqueta() {
  return ({
    code: fmetiqueta.codigo.value,
    describe: fmetiqueta.descricao.value,
    price: fmetiqueta.preco.value.replace(',', '.')
  })
}

function writeHTMLEtiqueta(dataFM, dataDB = {}) {
  return (`
    <p>${dataDB.beforeCode || ''} ${dataFM.code || ''}</p>
    <p>${dataFM.describe}</p>
    <p class="destaque">
      ${moedaFormat(dataFM.price - dataFM.priceOff)} 
      ${dataDB.afterP1 || ''}
    </p>
    <p>${moedaFormat(dataFM.price)} ${dataDB.afterP2 || ''}</p>
  `)
}

function renderEtiqueta(content) {
  const div = document.createElement('div')
  div.innerHTML = content
  rpetiqueta.appendChild(div)
  cleanFmEtiqueta()
}

function cleanFmEtiqueta() {
  fmetiqueta.codigo.value = ''
  fmetiqueta.descricao.value = ''
  fmetiqueta.preco.value = ''
  fmetiqueta.codigo.focus()
}