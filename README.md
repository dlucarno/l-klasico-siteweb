# L-Klàsico - Site de Présentation

Site web de présentation pour l'application mobile **L-Klàsico** - La bataille du El Clásico.

## 🎯 À propos

L-Klàsico est une application mobile de jeu compétitif basée sur la rivalité légendaire entre le **FC Barcelone** et le **Real Madrid**. Cette application combine quiz en temps réel, duels entre joueurs, battle royale, collection de stickers, et un système complet de progression et de récompenses.

Ce site web présente l'application et ses fonctionnalités principales.

## 🚀 Technologies

- **Nuxt 4** - Framework Vue.js
- **Vue 3** - Framework JavaScript
- **TypeScript** - Typage statique
- **CSS3** - Styles personnalisés avec variables CSS

## 🎨 Design

Le site utilise la palette de couleurs officielle de L-Klàsico :
- **Dégradé principal** : `#0A1033` → `#3A7BFF`
- **Fond principal** : `#181A2A`
- **Cartes** : `#23254A`
- **Police** : Montserrat (Google Fonts)

## 📦 Installation

```bash
npm install
```

## 🛠️ Développement

Démarrer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 🏗️ Build pour production

```bash
npm run build
```

## 👀 Prévisualisation

```bash
npm run preview
```

## 📝 Structure du projet

```
app/
├── components/          # Composants réutilisables
│   ├── AppHeader.vue   # En-tête avec navigation
│   ├── AppFooter.vue   # Pied de page
│   ├── FeatureCard.vue # Carte de fonctionnalité
│   └── TeamCard.vue    # Carte d'équipe
├── layouts/             # Layouts
│   └── default.vue     # Layout principal
├── pages/               # Pages
│   └── index.vue       # Page d'accueil
└── app.vue             # Point d'entrée

assets/
└── css/
    └── main.css        # Styles globaux
```

## 🌐 Déploiement

Le site peut être déployé sur n'importe quelle plateforme supportant Nuxt :
- Vercel
- Netlify
- Cloudflare Pages
- AWS Amplify
- etc.

## 📧 Contact

- **Email** : noreply@l-klasico.com
- **Site** : https://l-klasico.com

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
