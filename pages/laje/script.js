fmlgcircle.onsubmit = e => { 
  let diametro = Number(fmlgcircle.diametro.value.replaceAll(',', '.'))
  let espacamento = Number(fmlgcircle.espacamento.value)
  
  let nervuras = nervurasLajeRedonda(diametro, espacamento)
  let bls = blocos(espacamento, m2Circle(diametro))
  
  tblgcircle.innerHTML = ''

  renderTbCircle(writeTd(m2Circle(diametro), 'm2'))
  renderTbCircle(writeTd(bls.qtd, bls.name))
  renderTbCircle(writeTd(1, `Nervura de ${diametro.toFixed(2)}m`))
  nervuras.forEach( m => {
    renderTbCircle(writeTd(2, `Nervura de ${m}m`))
  })
  e.preventDefault()
}

function renderTbCircle(tx) {
  let tr = document.createElement('tr')
  tr.innerHTML = tx
  tblgcircle.appendChild(tr)
}

function writeTd(a1, b1) {
  return (`
    <td class="tda1">${a1}</td>
    <td>${b1}</td>
  `)
}

function blocos(espacamento, m2) {
  switch (espacamento) {
    case 0.4:
      return { 
        name: 'Blocos 19x30x06',
        qtd: Math.ceil(m2 * 12.8) 
      }
    break;
    case 0.5:
      return { 
        name: 'Isopor 100x40x08',
        qtd: Math.ceil(m2 * 2) 
      }
    break;
  }
}

function nervurasLajeRedonda(diametro, espacamento) {
  let raio = diametro / 2
  let qtd_nervuras = raio / espacamento

  if (qtd_nervuras > Math.floor(qtd_nervuras)){
    qtd_nervuras = Math.floor(qtd_nervuras)
  } else {
    qtd_nervuras--
  }

  let nervuras = []
  let es = espacamento
  for (let i = 0; i < qtd_nervuras; i++) {
    nervuras[i] = (Math.sqrt((raio**2)-(es**2)) * 2).toFixed(2)
    es += espacamento
  }

  return nervuras
}

/* laje comum */

fmlgsquare.onsubmit = e => {
  let largura = Number(fmlgsquare.L.value.replaceAll(',', '.')) 
  let comprimento = Number(fmlgsquare.C.value.replaceAll(',', '.')) 
  let espacamento = Number(fmlgsquare.espacamento.value) 
  let inverter = fmlgsquare.inverter.checked

  const {b, s} = bigFirst(largura, comprimento)

  let nervuras = nervurasLajeQuadrada(b, espacamento)
  let bls = blocos(espacamento, b*s)

  tblgsquare.innerHTML = ''

  renderTbSquare(writeTd(b*s, 'm2'))
  renderTbSquare(writeTd(bls.qtd, bls.name))
  if (inverter) {
    nervuras = nervurasLajeQuadrada(s, espacamento)
    renderTbSquare(writeTd(nervuras, `Nervuras de ${b}m`))
  } else {
    renderTbSquare(writeTd(nervuras, `Nervuras de ${s}m`))
  }

  e.preventDefault()
}

function bigFirst(largura, comprimento) {
  if(largura > comprimento){
    return {
      b: largura, s: comprimento
    }
  } else  {
    return {
      s: largura, b: comprimento
    }
  }
}

function nervurasLajeQuadrada(t, espacamento) {
  let qtd_nervuras = t / espacamento

  if (qtd_nervuras > Math.floor(qtd_nervuras)){
    qtd_nervuras = Math.floor(qtd_nervuras)
  } else {
    qtd_nervuras--
  }

  return qtd_nervuras
}

function renderTbSquare(tx) {
  let tr = document.createElement('tr')
  tr.innerHTML = tx
  tblgsquare.appendChild(tr)
}