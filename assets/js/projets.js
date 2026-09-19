// projets.js - Affichage groupé par projets (Jour 9-10)

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('projets-container');
    const searchInput = document.getElementById('search-projet');

    function renderProjets(searchTerm = "") {
        const stagiaires = getStagiaires();
        
        // Grouper les stagiaires par projet (Map)
        const projetsMap = new Map();
        stagiaires.forEach(s => {
            if(!projetsMap.has(s.projet)) {
                projetsMap.set(s.projet, []);
            }
            projetsMap.get(s.projet).push(s);
        });

        container.innerHTML = '';
        let projetsList = Array.from(projetsMap.keys());
        
        // Filtrage des projets
        if(searchTerm) {
            projetsList = projetsList.filter(p => p.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        if(projetsList.length === 0) {
            container.innerHTML = '<div class="col-12"><p class="text-muted">Aucun projet trouvé.</p></div>';
            return;
        }

        // Affichage des cartes projets
        projetsList.forEach(projetName => {
            const assignes = projetsMap.get(projetName);
            const listeNoms = assignes.map(a => `
                <li class="mb-2">
                    <i class="bi bi-person text-secondary"></i> ${a.nom} ${a.prenom} 
                    <span class="badge ${a.statut === 'En cours' ? 'bg-primary' : 'bg-secondary'} ms-2">${a.statut}</span>
                </li>
            `).join('');

            const card = `
            <div class="col-md-6 fade-in">
                <div class="card h-100 shadow-sm border-0 card-hover">
                    <div class="card-body p-4">
                        <h5 class="card-title text-success fw-bold"><i class="bi bi-folder2-open"></i> ${projetName}</h5>
                        <hr class="text-muted">
                        <h6 class="card-subtitle mb-3 text-muted text-uppercase small">Équipe assignée (${assignes.length}) :</h6>
                        <ul class="list-unstyled">
                            ${listeNoms}
                        </ul>
                    </div>
                </div>
            </div>`;
            container.innerHTML += card;
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => renderProjets(e.target.value));
    }
    renderProjets(); // Affichage initial
});
