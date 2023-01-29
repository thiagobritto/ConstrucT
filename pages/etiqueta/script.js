fmetiqueta.onsubmit = e => {
  let codigo = fmetiqueta.codigo.value
  let descricao = fmetiqueta.descricao.value
  let desconto = Number(fmetiqueta.desconto.value.replaceAll(',', '.'))
  let valor = Number(fmetiqueta.valor.value.replaceAll(',', '.'))

  let div = renderEtiqueta(
    writeEtiqueta(codigo, descricao, desconto, valor)
  )

  rpetiqueta.appendChild(div)

  e.preventDefault()
}

function renderEtiqueta(content) {
  let div = document.createElement('div')
  div.innerHTML = content
  return div
}

function writeEtiqueta(codigo, descricao, desconto, valor) {
  return (`
    <p>Cod.: ${codigo}</p>
    <p>${descricao}</p>
    <p class="destaque">${moedaFormat((valor - (valor * desconto / 100).toFixed(2)))} à vista</p>
    <p>${moedaFormat(valor)} no Cartão de crédito</p>
  `)
}