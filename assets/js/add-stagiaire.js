// add-stagiaire.js - Logique d'ajout et validation des dates

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-add-stagiaire');
    const dateDebut = document.getElementById('add-debut');
    const dateFin = document.getElementById('add-fin');
    const errorDiv = document.getElementById('form-error');

    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validation personnalisée des dates
            if(new Date(dateFin.value) <= new Date(dateDebut.value)) {
                errorDiv.classList.remove('d-none');
                dateFin.classList.add('is-invalid');
                return;
            }
            errorDiv.classList.add('d-none');
            dateFin.classList.remove('is-invalid');

            const newStagiaire = {
                nom: document.getElementById('add-nom').value,
                prenom: document.getElementById('add-prenom').value,
                email: document.getElementById('add-email').value,
                projet: document.getElementById('add-projet').value,
                dateDebut: dateDebut.value,
                dateFin: dateFin.value,
                statut: document.getElementById('add-statut').value
            };

            addStagiaire(newStagiaire);
            alert('Stagiaire ajouté avec succès dans le localStorage !');
            window.location.href = 'stagiaires.html'; // Redirection vers la liste
        });
    }
});
