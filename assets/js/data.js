// data.js - Simulation de la base de données (Mock)

const stagiairesData = [
    {
        id: 1,
        nom: "Dupont",
        prenom: "Jean",
        projet: "Refonte Site Web",
        dateDebut: "2026-06-01",
        dateFin: "2026-08-31",
        statut: "En cours"
    },
    {
        id: 2,
        nom: "Martin",
        prenom: "Sophie",
        projet: "Application Mobile CRM",
        dateDebut: "2026-01-15",
        dateFin: "2026-07-15",
        statut: "Terminé"
    },
    {
        id: 3,
        nom: "Lefebvre",
        prenom: "Lucas",
        projet: "API E-commerce",
        dateDebut: "2026-08-01",
        dateFin: "2026-10-31",
        statut: "En cours"
    }
];

function getStagiaires() {
    return stagiairesData;
}
