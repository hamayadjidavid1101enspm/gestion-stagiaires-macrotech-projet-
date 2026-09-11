// main.js - Gestion de l'interface utilisateur (UI)

document.addEventListener('DOMContentLoaded', () => {
    // 1. Bascule entre Connexion et Inscription
    const btnLogin = document.getElementById('btn-login');
    const btnRegister = document.getElementById('btn-register');
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');

    if(btnLogin && btnRegister) {
        btnLogin.addEventListener('click', () => {
            btnLogin.classList.add('active');
            btnRegister.classList.remove('active');
            formLogin.classList.remove('d-none');
            formRegister.classList.add('d-none');
        });

        btnRegister.addEventListener('click', () => {
            btnRegister.classList.add('active');
            btnLogin.classList.remove('active');
            formRegister.classList.remove('d-none');
            formLogin.classList.add('d-none');
        });
    }

    // 2. Affichage / Masquage du mot de passe
    const toggleButtons = document.querySelectorAll('.toggle-pwd');
    
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const inputElement = document.getElementById(targetId);
            const icon = this.querySelector('i');

            if (inputElement.type === 'password') {
                inputElement.type = 'text';
                icon.classList.remove('bi-eye');
                icon.classList.add('bi-eye-slash');
            } else {
                inputElement.type = 'password';
                icon.classList.remove('bi-eye-slash');
                icon.classList.add('bi-eye');
            }
        });
    });
});
