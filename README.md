# Bilan Mental Express - Application Web (Version Améliorée)

Ceci est une application web front-end pour "Bilan Mental Express", un outil de check-up mental quotidien, maintenant enrichi de fonctionnalités interactives et d'une vision pour des capacités avancées.

Le site est construit avec React, TypeScript, et Tailwind CSS. Il est conçu comme une page unique (one-page) avec plusieurs sections présentant l'application, ses fonctionnalités, ses cibles, et ses offres. Un chatbot simple, basé sur des réponses prédéfinies, est également intégré côté client pour l'assistance.

**Nouvelles Fonctionnalités Intégrées (Front-end) :**

*   **Bilan Mental Interactif** : Un questionnaire quotidien de 7 questions (basé sur le document `questionnaire_design.md`) permettant à l'utilisateur d'évaluer son état mental et de recevoir un score ainsi que des suggestions personnalisées.
*   **Intégration des Logos** : Les logos fournis ont été intégrés dans le Header (version fond clair) et le Footer (version fond sombre), ainsi qu'en favicon.
*   **Sections de Contenu Étendues** :
    *   `DashboardSection` (Placeholder) : Prévu pour afficher un historique et des graphiques d'évolution du bien-être.
    *   `ConcreteSuggestionsSection` : Propose des actions concrètes (respiration, pause créative, etc.) pour améliorer le bien-être.
    *   `ContactProfessionalsSection` : Offre des pistes pour contacter des professionnels de la santé mentale.
    *   `AICoachSection` (Vision) : Décrit la vision future d'un coach IA pour un soutien proactif.
    *   `PassiveDataSection` (Vision) : Explique comment l'analyse de données passives pourrait enrichir l'application à l'avenir.

Le projet a été initialisé avec `create_react_app` (un script personnalisé qui utilise Vite et configure Tailwind).

## Structure du Projet

*   `/public`: Contient les actifs statiques (dont `favicon.jpg`) et `index.html`.
*   `/src`: Contient le code source de l'application.
    *   `/src/assets`: Pour les images et autres médias (y compris `logo-light-bg.jpg` et `logo-dark-bg.jpg`).
    *   `/src/components`: Contient les composants React réutilisables (Header, Footer, sections spécifiques, Chatbot, MentalCheckupSection, etc.).
    *   `/src/App.tsx`: Le composant principal de l'application qui assemble les différentes sections.
    *   `/src/main.tsx`: Le point d'entrée de l'application React.
    *   `/src/App.css`: Styles globaux et animations personnalisées (utilisant Tailwind CSS).
    *   `/src/index.css`: Styles de base de Tailwind.
*   `tailwind.config.js`: Configuration de Tailwind CSS.
*   `vite.config.ts`: Configuration de Vite.
*   `package.json`: Dépendances du projet et scripts.
*   `questionnaire_design.md`: Document de conception du bilan mental interactif.

## Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `pnpm install` (ou `npm install` / `yarn install`)

Installe les dépendances du projet.

### `pnpm dev` (ou `npm run dev` / `yarn dev`)

Lance l'application en mode développement.
Ouvrez [http://localhost:5173](http://localhost:5173) (ou le port indiqué par Vite) pour la visualiser dans le navigateur.

La page se rechargera si vous faites des modifications.
Vous verrez également les erreurs de lint dans la console.

### `pnpm build` (ou `npm run build` / `yarn build`)

Construit l'application pour la production dans le dossier `dist`.
Il optimise la construction pour les meilleures performances.

Votre application est prête à être déployée !

## Contribution

Ce projet est géré par Manus, un agent IA.

## Basé sur

Le contenu fourni dans `MENTAL.pdf` et les demandes subséquentes de l'utilisateur.

