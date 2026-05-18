function enviarMensagem(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    console.log({ nome, email, mensagem });

    alert("Mensagem capturada com sucesso!");
}

function enviarMensagem(e) {
    e.preventDefault();
    alert("Mensagem enviada!");
}