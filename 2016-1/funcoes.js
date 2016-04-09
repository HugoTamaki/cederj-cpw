function calculaIMC() {
  var massa = document.getElementById('massa').value
  var altura = document.getElementById('altura').value

  if (verificaCamposVazios(massa, altura)) {
    if (verificaCamposNumericos(massa, altura)) {
      var imc = massa / (Math.pow(altura, 2))
      document.getElementById('resultado').value = imc.toFixed(2)
      document.getElementById('resultHTML').innerHTML = imc.toFixed(2)
    } else {
      alert('Digite somente números!')
    }
  } else {
    alert('Não deixe os campos vazios!')
  }
}

function verificaCamposVazios(massa, altura) {
  return massa != '' || altura != ''
}

function verificaCamposNumericos(massa, altura) {
  return !isNaN(massa) && !isNaN(altura)
}

var precos = []

function selectPrice(self) {
  var price = self.options[self.selectedIndex].value
  precos.push(price)
  document.getElementById('precos').value = precos.join('\n')
  document.getElementById('total').value = calculaTotal(precos)
}

function calculaTotal(precos) {
  var total = 0
  for(var i=0;i<precos.length;i++) {
    total += parseFloat(precos[i])
  }
  return total
}

function limpar() {
  precos = []
  document.getElementById('precos').value = ''
  document.getElementById('total').value = ''
}

