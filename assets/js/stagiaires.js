// stagiaires.js - Injection dynamique de la liste des stagiaires

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('stagiaires-container');
    const searchInput = document.getElementById('search-input');
    const filterStatut = document.getElementById('filter-statut');

    function renderStagiaires(data) {
        container.innerHTML = '';
        if(data.length === 0) {
            container.innerHTML = '<div class="col-12"><p class="text-muted">Aucun stagiaire trouvé.</p></div>';
            return;
        }

        data.forEach(s => {
            const badgeClass = s.statut === 'En cours' ? 'bg-primary' : 'bg-secondary';
            const card = `
            <div class="col-md-4 col-sm-6 fade-in">
                <div class="card h-100 shadow-sm border-0 card-hover">
                    <div class="card-body">
                        <h5 class="card-title">${s.nom} ${s.prenom}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${s.projet}</h6>
                        <p class="card-text small">
                            <strong>Période:</strong> ${new Date(s.dateDebut).toLocaleDateString()} - ${new Date(s.dateFin).toLocaleDateString()}<br>
                            <span class="badge ${badgeClass} mt-2">${s.statut}</span>
                        </p>
                        <a href="stagiaire-detail.html?id=${s.id}" class="btn btn-sm btn-outline-secondary w-100">Voir la fiche</a>
                    </div>
                </div>
            </div>`;
            container.innerHTML += card;
        });
    }

    function filterData() {
        const searchTerm = searchInput.value.toLowerCase();
        const statutTerm = filterStatut.value;
        const allStagiaires = getStagiaires();

        const filtered = allStagiaires.filter(s => {
            const matchName = s.nom.toLowerCase().includes(searchTerm) || s.prenom.toLowerCase().includes(searchTerm);
            const matchStatut = statutTerm === "" || s.statut === statutTerm;
            return matchName && matchStatut;
        });

        renderStagiaires(filtered);
    }

    if(container) {
        searchInput.addEventListener('input', filterData);
        filterStatut.addEventListener('change', filterData);
        renderStagiaires(getStagiaires()); // Premier affichage
    }
});
