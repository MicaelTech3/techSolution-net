document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const loginForm = document.getElementById('login-form');
    const supportForm = document.getElementById('support-form');

    if (!loginForm || !supportForm) {
        console.error("Um ou mais elementos não foram encontrados no HTML!");
        return;
    }

    // Alterna as seções
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');

            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });

            document.getElementById(sectionId).classList.add('active');
        });
    });

    // Validação do Login
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '123' && password === '123') {
            window.location.href = `painel.html?email=${encodeURIComponent(username)}`;
        } else {
            alert('Usuário ou senha inválidos! Tente novamente.');
        }
    });

    // Formulário de Support
    supportForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(supportForm);

        fetch('https://formspree.io/f/xyzedylg', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta do servidor');
            }
            return response.json();
        })
        .then(data => {
            // Redireciona para a tela de enviado
            window.location.href = 'enviado.html';
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao enviar o chamado: ' + error.message);
        });
    });
});