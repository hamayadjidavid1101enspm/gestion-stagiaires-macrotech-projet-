# Projet : Gestion des Stagiaires (Macrotech)

Ce projet a été réalisé dans le cadre de mon stage chez Macrotech. L'objectif principal est de remplacer le suivi informel actuel (fichiers Excel, emails) par un véritable outil centralisé pour le suivi des stagiaires.

Ce dépôt correspond à la **Phase 1** du projet, qui se concentre uniquement sur la partie intégration et Front-end.

## Fonctionnalités implémentées

- Tableau de bord avec le résumé des effectifs et projets en cours
- Formulaires de connexion et d'inscription (bascule gérée en JS)
- Liste complète des stagiaires avec système de recherche et de filtre par statut
- Fiche de détail pour chaque stagiaire
- Formulaire d'ajout d'un stagiaire (avec contrôle et validation des dates en temps réel)
- Vue "Projets" regroupant les équipes assignées

*Note technique : En l'absence de base de données pour cette première phase, la persistance des données lors de la navigation ou des rechargements de page est simulée via le `localStorage` du navigateur.*

## Stack technique

- **HTML5** (Structure sémantique)
- **CSS3** (Variables CSS, animations CSS, approche Mobile-First)
- **Bootstrap 5** (Utilisation de la grille responsive et composants basiques)
- **JavaScript Vanilla** (Manipulation du DOM, gestion d'événements, simulation de base de données)

## Comment lancer le projet en local ?

1. Clonez ce dépôt sur votre machine : 
   `git clone https://github.com/hamayadjidavid1101enspm/gestion-stagiaires-macrotech-projet-.git`
2. Ouvrez le dossier dans votre éditeur (ex: VS Code).
3. Ouvrez le fichier `index.html` directement dans votre navigateur web, ou utilisez une extension comme *Live Server* pour un meilleur confort.

## Évolutions prévues (Phase 2)

Le travail futur consistera à basculer sur l'environnement Back-end (une branche dédiée a été préparée) pour connecter cette interface à une véritable base de données MySQL via PHP, et gérer les sessions de connexion de manière sécurisée.
