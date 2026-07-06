function validateForm() {
    // 1. Correção: Pegar a message corretamente e não duplicar o email
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value; 

    if (name === '' || email === '' || message === '') {
        alert('Todos os campos são obrigatórios');
        return false;
    }

    // 2. Correção: "name" em minúsculo e a palavra "length" escrita corretamente
    if (name.length < 3 || name.length > 50) {
        alert('O nome deve ter entre 3 a 50 caracteres');
        return false;
    }

    // 3. Correção: "length" escrito corretamente aqui também
    if (email.length < 5 || email.length > 50) {
        alert('O e-mail deve ter entre 5 e 50 caracteres');
        return false;
    }

    // Aqui está a nossa famosa Regex!
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    // 4. Correção: Ajustado para bater com o nome da variável (emailPattern)
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um e-mail válido');
        return false;
    }

    return true;
}

document.getElementById('contactform').addEventListener('submit', function(event) {
    // 5. Correção: O termo correto é preventDefault (com D maiúsculo)
    event.preventDefault(); 
    
    // 6. Correção: Adicionado o "if" que faltava aqui
    if (validateForm()) { 
        alert("Formulário enviado com sucesso!");
    }
});
