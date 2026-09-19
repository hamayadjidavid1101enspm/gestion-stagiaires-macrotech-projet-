// data.js - Simulation de la base de données via localStorage

const defaultStagiaires = [
    { id: 1, nom: "Dupont", prenom: "Jean", email: "jean.d@mail.com", projet: "Refonte Site Web", dateDebut: "2026-06-01", dateFin: "2026-08-31", statut: "En cours" },
    { id: 2, nom: "Martin", prenom: "Sophie", email: "sophie.m@mail.com", projet: "Application Mobile CRM", dateDebut: "2026-01-15", dateFin: "2026-07-15", statut: "Terminé" },
    { id: 3, nom: "Lefebvre", prenom: "Lucas", email: "lucas.l@mail.com", projet: "API E-commerce", dateDebut: "2026-08-01", dateFin: "2026-10-31", statut: "En cours" }
];

// Initialisation au premier lancement
if (!localStorage.getItem('stagiaires')) {
    localStorage.setItem('stagiaires', JSON.stringify(defaultStagiaires));
}

// Fonction de lecture
function getStagiaires() {
    return JSON.parse(localStorage.getItem('stagiaires'));
}

// Fonction d'ajout (Jour 8)
function addStagiaire(stagiaire) {
    const stagiaires = getStagiaires();
    const maxId = stagiaires.reduce((max, s) => s.id > max ? s.id : max, 0);
    stagiaire.id = maxId + 1;
    stagiaires.push(stagiaire);
    localStorage.setItem('stagiaires', JSON.stringify(stagiaires));
}

// Fonction pour récupérer un stagiaire par son ID
function getStagiaireById(id) {
    return getStagiaires().find(s => s.id == id);
}
