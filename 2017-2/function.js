
function exibirAlerta() {
  alert("Ola mundo")
}

function validaTelefone() {
  var telefone = document.getElementById('telefone').value

  if (telefone.length != 8) {
    alert("Quantidade de caracteres deve ser 8")
  }

  if (isNaN(telefone)) {
    alert("Telefone deve ser numerico")
  }
}

var produtos = [
  {
    nome: 'Carregador Samsung',
    imagem: 'imagens/charger.jpeg',
    preco: 'R$ 40,00'
  },
  {
    nome: 'DVD Player',
    imagem: 'imagens/charger.jpeg',
    preco: 'R$ 99,00'
  }
]

function mostraProduto(elemento) {
  var produtoEscolhido = produtos[elemento.selectedIndex - 1]

  var display = document.getElementById('display')

  if (produtoEscolhido) {
    var html = "<p>" + produtoEscolhido.nome + "</p>"
    html += "<img src='" + produtoEscolhido.imagem + "' >"
    html += "<p>" + produtoEscolhido.preco + "</p>"

    display.innerHTML = html
  } else {
    display.innerHTML = ""
  }

}


// exemplo de for
var x = ["Bob", "Mary", "John"]

for (i=0;i < 4;i++) {
  console.log(i)
}

// exemplo de while
var i = 0
while (i < x.length) {
  console.log(x[i])
  i++
}