document.addEventListener('DOMContentLoaded', () => {
    
    const container = document.getElementById('stagiaires-container');
    const searchInput = document.getElementById('search-input');
    const filterStatut = document.getElementById('filter-statut');

    function renderStagiaires(data) {
        container.innerHTML = '';
        
        if(data.length === 0) {
            container.innerHTML = '<div class="col-12"><p class="text-muted">Aucun résultat.</p></div>';
            return;
        }

        data.forEach(s => {
            let badgeClass = 'bg-secondary';
            if (s.statut === 'En cours') {
                badgeClass = 'bg-primary';
            }

            let cardHTML = `
            <div class="col-md-4 col-sm-6 fade-in">
                <div class="card h-100 shadow-sm border-0 card-hover">
                    <div class="card-body">
                        <h5 class="card-title">${s.nom} ${s.prenom}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${s.projet}</h6>
                        <p class="card-text small">
                            <strong>Période :</strong> ${new Date(s.dateDebut).toLocaleDateString()} - ${new Date(s.dateFin).toLocaleDateString()}<br>
                            <span class="badge ${badgeClass} mt-2">${s.statut}</span>
                        </p>
                        <a href="stagiaire-detail.html?id=${s.id}" class="btn btn-sm btn-outline-secondary w-100">Voir la fiche</a>
                    </div>
                </div>
            </div>`;
            container.innerHTML += cardHTML;
        });
    }

    function filterData() {
        let term = searchInput.value.toLowerCase();
        let statut = filterStatut.value;
        let stagiaires = getStagiaires();

        let resultats = stagiaires.filter(s => {
            let matchNom = s.nom.toLowerCase().includes(term) || s.prenom.toLowerCase().includes(term);
            let matchStatut = (statut === "" || s.statut === statut);
            return matchNom && matchStatut;
        });

        renderStagiaires(resultats);
    }

    if(container) {
        searchInput.addEventListener('input', filterData);
        filterStatut.addEventListener('change', filterData);
        
        renderStagiaires(getStagiaires());
    }
});
