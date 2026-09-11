// validation.js - Logique métier et validation des formulaires

document.addEventListener('DOMContentLoaded', () => {
    const pwdInput = document.getElementById('pwd-register');
    const confirmInput = document.getElementById('pwd-confirm');
    const registerForm = document.getElementById('form-register');

    if (pwdInput && confirmInput) {
        // Fonction pour vérifier la correspondance
        const checkPasswords = () => {
            if (confirmInput.value === '') {
                confirmInput.classList.remove('is-valid', 'is-invalid');
                return false;
            }
            
            if (pwdInput.value === confirmInput.value) {
                confirmInput.classList.remove('is-invalid');
                confirmInput.classList.add('is-valid');
                return true;
            } else {
                confirmInput.classList.remove('is-valid');
                confirmInput.classList.add('is-invalid');
                return false;
            }
        };

        // Ecouteurs d'événements en temps réel
        pwdInput.addEventListener('input', checkPasswords);
        confirmInput.addEventListener('input', checkPasswords);

        // Blocage de la soumission si erreur
        registerForm.addEventListener('submit', (e) => {
            if (!checkPasswords()) {
                e.preventDefault();
                alert("Veuillez corriger les erreurs avant de soumettre.");
            }
        });
    }
});
