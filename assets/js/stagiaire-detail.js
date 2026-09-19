// stagiaire-detail.js - Chargement des infos d'un stagiaire spécifique

document.addEventListener('DOMContentLoaded', () => {
    // Récupération de l'ID depuis l'URL (ex: ?id=1)
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const stagiaire = getStagiaireById(id);
    const container = document.getElementById('detail-card');

    if(!stagiaire) {
        container.innerHTML = `<div class="card-body p-5 text-center"><h5 class="text-danger">Stagiaire introuvable.</h5></div>`;
        return;
    }

    const badgeClass = stagiaire.statut === 'En cours' ? 'bg-primary' : 'bg-secondary';

    container.innerHTML = `
    <div class="card-body p-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="card-title fw-bold text-dark">${stagiaire.nom} ${stagiaire.prenom}</h2>
            <span class="badge ${badgeClass} fs-6 px-3 py-2">${stagiaire.statut}</span>
        </div>
        <hr class="text-muted">
        <div class="row mt-4">
            <div class="col-md-6 mb-4">
                <h6 class="text-muted text-uppercase small fw-bold mb-3"><i class="bi bi-person-badge"></i> Coordonnées</h6>
                <p class="mb-1"><i class="bi bi-envelope text-primary me-2"></i> ${stagiaire.email || 'Email non renseigné'}</p>
            </div>
            <div class="col-md-6 mb-4">
                <h6 class="text-muted text-uppercase small fw-bold mb-3"><i class="bi bi-folder"></i> Projet Assigné</h6>
                <p class="fs-5">${stagiaire.projet}</p>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-md-12 bg-light p-3 rounded">
                <h6 class="text-muted text-uppercase small fw-bold"><i class="bi bi-calendar3"></i> Période de Stage</h6>
                <p class="mb-0 fs-5">${new Date(stagiaire.dateDebut).toLocaleDateString('fr-FR')} au ${new Date(stagiaire.dateFin).toLocaleDateString('fr-FR')}</p>
            </div>
        </div>
    </div>`;
});
