window.addEventListener('DOMContentLoaded', (event) => {
  try {
    setFmConfigEtiqueta(getDBL('etq-config'))  
  } catch (error) {
    return false  
  }  
});

fmConfgEtiqueta.onsubmit = e => {
  try {
    setDBL('etq-config', getFmConfigEtiqueta());
    alert('Dados salvos com sucesso!')
  } catch (error) {
    alert('Erro ao tentar salver os dados!')
  }
  e.preventDefault();
}

function setFmConfigEtiqueta(data) {
  fmConfgEtiqueta.before_code.value = data.beforeCode
  fmConfgEtiqueta.after_p1.value = data.afterP1
  fmConfgEtiqueta.after_p2.value = data.afterP2
  fmConfgEtiqueta.off.value = data.off.replace('.', ',')
}

function getFmConfigEtiqueta() {
  return ({
    beforeCode: fmConfgEtiqueta.before_code.value,
    afterP1: fmConfgEtiqueta.after_p1.value,
    afterP2: fmConfgEtiqueta.after_p2.value,
    off: fmConfgEtiqueta.off.value.replace(',', '.')   
  })
}