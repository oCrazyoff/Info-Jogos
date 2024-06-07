document.getElementById('enviar').addEventListener('click', function(event) {
    event.preventDefault();
    var nome = document.getElementById('firstname').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    var whatsappMessage = 'Nome: ' + nome + '\n' + 'Mensagem: ' + mensagem + '\n' + 'Email: ' + email;

    var whatsappUrl = 'https://api.whatsapp.com/send?phone=5516992947779&text=' + encodeURIComponent(whatsappMessage);
    window.open(whatsappUrl, '_blank');
});
