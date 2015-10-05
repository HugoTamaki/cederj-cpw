function validaForm (){
  var nome = document.getElementById('name').value;
  var idade = document.getElementById('idade').value;
  var cep = document.getElementById('cep').value;

  var valid = true;
  var errors = "";

  if (nome.length < 5) {
    errors += 'Preencha seu nome! POarrr' + '\n';
    valid = false;
  }

  if (idade < 18) {
    errors += 'Dimenor, vá pra casa' + '\n';
    valid = false;
  }

  if (!valid) {
    alert(errors);
  }
  
  return valid;
}