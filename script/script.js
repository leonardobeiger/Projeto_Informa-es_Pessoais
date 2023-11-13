
function validarFormulario() {
    // Obter os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var numero = document.getElementById('numero').value;
    var mensagem = document.getElementById('mensagem').value;

    // Limpar mensagens de erro
    document.getElementById('errorNome').innerHTML = '';
    document.getElementById('errorEmail').innerHTML = '';

    // Validar o campo Nome
    if (nome === '') {
     document.getElementById('errorNome').innerHTML = 'Campo Nome é obrigatório.';
      return false;
    }
    
    // Validar o campo Email
    if (email === '') {
      document.getElementById('errorEmail').innerHTML = 'Campo Email é obrigatório.';
      return false;
    } else {
        // Validar Numero
    if (numero === '') {
      document.getElementById('errorNumero').innerHTML = 'Campo Email é obrigatório.';
      return false;
    } else {
        // Validar mensagem
    if (mensagem === '') {
      document.getElementById('errorMensagem').innerHTML = 'Campo Email é obrigatório.';
      return false;
    } else {
      // Validar o formato do email usando uma expressão regular simples
      var regexEmail = /^\S+@\S+\.\S+$/;
      if (!regexEmail.test(email)) {
        document.getElementById('erroEmail').innerHTML = 'Formato de e-mail inválido.';
        return false;
         }
      }
    }
     }
    // Se todos os campos estiverem válidos, o formulário pode ser enviado
    return true;
  }