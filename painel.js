document.addEventListener('DOMContentLoaded', function () {
    // Pega o email da URL
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email') || 'Usuário não identificado';
    document.getElementById('user-email').textContent = email;

    // Alterna as seções
    const navLinks = document.querySelectorAll('.nav-link');
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

    // Botão Sair
    const logoutBtn = document.getElementById('logout-btn');
    logoutBtn.addEventListener('click', function () {
        window.location.href = 'index.html'; // Redireciona para a tela de login
    });
});