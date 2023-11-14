
function validarFormulario() {
    enviarFormulario()
    // Se todos os campos estiverem válidos, o formulário pode ser enviado
    return true;
}

function enviarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    var numero = document.getElementById('numero').value;
    // Limpar mensagens de erro
    document.getElementById('errorNome').innerHTML = '';
    document.getElementById('errorEmail').innerHTML = '';
    
    // Validar o campo Nome
    if (nome === '') {
     document.getElementById('errorNome').innerHTML = 'Campo Nome é obrigatório.';
      return false;
    }
    
    // Validar o campo numerp
    if (email === '') {
      document.getElementById('errorEmail').innerHTML = 'Campo Email é obrigatório.';
      return false;
    } else {
        // Validar email
    if (numero === '') {
      document.getElementById('errorNumero').innerHTML = 'Campo Número é obrigatório.';
      return false;
    } else {
        // Validar mensagem
    if (mensagem === '') {
      document.getElementById('errorMensagem').innerHTML = 'Campo Mensagem é obrigatório.';
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
    
    emailjs.init("Kgdqa6ovOjIJMS2lh"); // Substitua com o seu User ID do Email.js
    const templateParams = {
        nome: nome,
        email: email,
        mensagem: mensagem,
      };
      emailjs.send("service_gk9rpdw", "template_xfmpknm", templateParams)
      .then(function(response) {
          console.log('Email enviado com sucesso:', response);
          alert('Formulário enviado com sucesso!');
        }, function(error) {
          console.error('Erro ao enviar o email:', error);
          alert('Erro ao enviar o formulário. Por favor, tente novamente.');
        });
    }
   // Função que redireciona para o WhatsApp
   function enviarWhatsapp() {
    // Substitua "seu_numero" pelo número de telefone e "sua_mensagem" pela mensagem desejada
    var numeroTelefone = '5547992005039';
    var mensagem = 'Olá Sr Leonardo Beiger, gostaria de conversar com você.';

    // Cria o link do WhatsApp com o número e mensagem
    var linkWhatsapp = 'https://api.whatsapp.com/send?phone=' + encodeURIComponent(numeroTelefone) + '&text=' + encodeURIComponent(mensagem);
   // Abre uma nova guia (ou janela) com o link do WhatsApp
    window.open(linkWhatsapp, '_blank');
    }