function inputSetNumber(i) {
  let r = ''
  for (const l of i.value) {
    if (!isNaN(l) || l == ',' || l == '.') r += l
  }
  i.value = r
}

function inputSetNumberInt(i) {
  let r = ''
  for (const l of i.value) {
    if (!isNaN(l)) r += l
  }
  i.value = r
}

function m2Circle(diametro) {
  let raio = diametro/2
  return ((raio**2)*Math.PI).toFixed(2)
}

function moedaFormat(brs) {
  return Number(brs).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function setDBL(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

function getDBL(name) {
  return JSON.parse(localStorage.getItem(name))
}