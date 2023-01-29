fmcabo.onsubmit = e => {
  let distancia = Number(fmcabo.distancia.value.replaceAll(',', '.'))
  if (!distancia) return false
  let potencia = Number(fmcabo.potencia.value.replaceAll(',', '.'))
  if (!potencia) return false
  let voltz = Number(fmcabo.voltz.value)
  let tipo = Number(fmcabo.tipo.value)
  let secao = calcCaboByDistancia(distancia, potencia * tipo, voltz)
  let res = writeCaboResove({
    distancia, potencia, voltz, secao, tipo
  })
  rpcaco.innerHTML = res
  e.preventDefault()
}

function calcCaboByDistancia(distancia, potencia, voltz) {
  let amper = potencia / voltz
  let secao = (2 * distancia * amper) / (56 * voltz * 0.04)
  return secao.toFixed(2)
}

function writeCaboResove(res) {
  return (`
    Para ligar um equipamento em ${res.voltz}v com 
    ${res.potencia} ${res.tipo > 1 ? 'CV/HP' : 'Watts'}
    de potência à uma distancia de ${res.distancia}m, recomenda-se
    um cabo de no minimo <strong>${res.secao}mm</strong>
  `)
}