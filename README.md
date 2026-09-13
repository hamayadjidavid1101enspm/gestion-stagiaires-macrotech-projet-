# 🎓 Gestion des Stagiaires - Macrotech

[![Statut du projet](https://img.shields.io/badge/Statut-En%20développement%20(Phase%201)-blue.svg)]()
[![Technologies](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS%20%7C%20Bootstrap-success.svg)]()

## 📝 Description du projet
**gestion-stagiaires-macrotech-projet** est une application web Frontend (côté client) conçue pour centraliser et fiabiliser le suivi interne des stagiaires au sein de l'entreprise Macrotech. 

Cette interface permet de répondre instantanément aux questions opérationnelles :
- Qui est actuellement en stage ?
- Sur quel(s) projet(s) travaillent-ils ?
- Quel est l'état d'avancement de leurs travaux ?

*Ce projet correspond à la **Phase 1** du cahier des charges (Focus Frontend, Intégration et JavaScript Vanilla).*

## 🚀 Fonctionnalités (Jours 1 à 6)
- **Tableau de bord (Dashboard) :** Vue d'ensemble avec statistiques clés (Stagiaires actifs, projets en cours).
- **Authentification :** Interface de Connexion / Inscription avec bascule dynamique (JavaScript).
- **Sécurité visuelle :** Masquage/Affichage du mot de passe en temps réel.
- **Validation de formulaire :** Contrôle JS en temps réel de la correspondance des mots de passe.
- **Annuaire des stagiaires :** Base de la liste des stagiaires avec barre de recherche et filtres.

## 🛠️ Technologies & Outils
- **HTML5 Sémantique** (Accessibilité et structure)
- **CSS3 & Variables** (Architecture maintenable et micro-interactions)
- **Bootstrap 5** (Système de grille et design responsive Mobile-First)
- **JavaScript ES6+** (Manipulation du DOM et logique métier)
- **Git / GitHub** (Versioning)

## 📂 Architecture
L'architecture respecte les standards professionnels de séparation des responsabilités (SoC) :
```text
gestion-stagiaires-macrotech-projet/
├── index.html          # Point d'entrée (Tableau de bord)
├── pages/              # Vues secondaires (Connexion, Stagiaires...)
├── assets/
│   ├── css/            # Styles globaux et responsifs
│   └── js/             # Logique d'interface, validation et données (Mock)
```
