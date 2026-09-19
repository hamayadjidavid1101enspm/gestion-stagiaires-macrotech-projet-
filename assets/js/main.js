document.addEventListener('DOMContentLoaded', () => {
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

    const toggleBtns = document.querySelectorAll('.toggle-pwd');
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            let targetId = this.getAttribute('data-target');
            let input = document.getElementById(targetId);
            let icon = this.querySelector('i');

            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('bi-eye');
                icon.classList.add('bi-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('bi-eye-slash');
                icon.classList.add('bi-eye');
            }
        });
    });
});
