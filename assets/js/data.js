const defaultStagiaires = [
    { id: 1, nom: "Dupont", prenom: "Jean", email: "jean.d@mail.com", projet: "Refonte Site Web", dateDebut: "2026-06-01", dateFin: "2026-08-31", statut: "En cours" },
    { id: 2, nom: "Martin", prenom: "Sophie", email: "sophie.m@mail.com", projet: "Application Mobile CRM", dateDebut: "2026-01-15", dateFin: "2026-07-15", statut: "Terminé" },
    { id: 3, nom: "Lefebvre", prenom: "Lucas", email: "lucas.l@mail.com", projet: "API E-commerce", dateDebut: "2026-08-01", dateFin: "2026-10-31", statut: "En cours" }
];

if (!localStorage.getItem('stagiaires')) {
    localStorage.setItem('stagiaires', JSON.stringify(defaultStagiaires));
}

function getStagiaires() {
    let data = localStorage.getItem('stagiaires');
    return JSON.parse(data);
}

function addStagiaire(stagiaire) {
    let stagiaires = getStagiaires();
    
    let maxId = 0;
    stagiaires.forEach(s => {
        if (s.id > maxId) {
            maxId = s.id;
        }
    });
    
    stagiaire.id = maxId + 1;
    stagiaires.push(stagiaire);
    localStorage.setItem('stagiaires', JSON.stringify(stagiaires));
}

function getStagiaireById(id) {
    let stagiaires = getStagiaires();
    return stagiaires.find(s => s.id == id);
}
