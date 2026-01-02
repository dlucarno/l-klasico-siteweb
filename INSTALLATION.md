# Installation de Tailwind CSS

## Étapes d'installation

1. **Installer les dépendances** :
```bash
npm install -D @nuxtjs/tailwindcss tailwindcss postcss autoprefixer
```

2. **Vérifier la configuration** :
   - ✅ `nuxt.config.ts` : Le module `@nuxtjs/tailwindcss` est déjà configuré
   - ✅ `tailwind.config.js` : Configuration Tailwind avec les couleurs L-Klàsico
   - ✅ `postcss.config.js` : Configuration PostCSS
   - ✅ `app/assets/css/main.css` : Fichier CSS avec les directives Tailwind

3. **Démarrer le serveur de développement** :
```bash
npm run dev
```

## Configuration

Le module `@nuxtjs/tailwindcss` détecte automatiquement :
- Le fichier de configuration `tailwind.config.js`
- Le fichier CSS `app/assets/css/main.css`
- Les fichiers PostCSS

## Couleurs personnalisées

Les couleurs L-Klàsico sont définies dans `tailwind.config.js` :
- `bg-primary` : #181A2A
- `bg-secondary` : #23254A
- `primary-blue` : #3A7BFF
- `barca-red` : #A50044
- `barca-blue` : #004D98
- `real-gold` : #FDB913
- `real-white` : #F5F5F5

## Utilisation

Tous les composants ont été convertis pour utiliser Tailwind CSS. Les classes utilitaires Tailwind sont maintenant disponibles dans tout le projet.

