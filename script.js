// Função para rolar suavemente para a seção "Sobre"
document.getElementById('learnMoreBtn').addEventListener('click', () => {
    document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
});

// Validação do formulário e feedback
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita envio padrão

    // Coletando valores
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validação básica
    if(name === "" || email === "" || message === "") {
        formMessage.textContent = "Por favor, preencha todos os campos.";
        formMessage.style.color = "red";
        formMessage.classList.remove('hidden');
        return;
    }

    // Simulação de envio
    formMessage.textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
    formMessage.style.color = "green";
    formMessage.classList.remove('hidden');

    // Limpar campos após envio
    contactForm.reset();
});
