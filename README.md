# Migbig - Link Hub

Un site linktree personnalisé avec des dégradés magnifiques, hébergeable sur GitHub Pages.

## 🎨 Fonctionnalités

- Design moderne avec dégradés colorés
- Bannière personnalisée avec photo de profil
- 4 liens vers vos réseaux sociaux (YouTube, TikTok, Discord)
- Compteurs d'abonnés/membres modifiables
- Animations fluides et effets hover
- Responsive (mobile et desktop)
- Optimisé pour GitHub Pages

## 📝 Modification des compteurs

Pour mettre à jour les nombres d'abonnés, éditez le fichier `client/public/config.json` :

```json
{
  "name": "Migbig",
  "tagline": "Rejoins-moi sur mes réseaux !",
  "links": [
    {
      "id": "youtube",
      "title": "Chaîne YouTube",
      "url": "https://www.youtube.com/@MigbigBS",
      "subscribers": "83.2k abonnés",
      "icon": "youtube"
    },
    ...
  ]
}
```

Vous pouvez modifier :
- `subscribers` : Le nombre d'abonnés/membres affiché
- `title` : Le titre du bouton
- `url` : Le lien vers votre profil
- `name` : Votre nom affiché
- `tagline` : Votre phrase d'accroche

## 🚀 Déploiement sur GitHub Pages

### 📋 Prérequis

Déterminez d'abord le type de site GitHub Pages que vous souhaitez :
- **Site utilisateur** : `username.github.io` (recommandé, configuration simple)
- **Site de projet** : `username.github.io/nom-repo` (nécessite configuration du base path)

### Option 1 : Déploiement automatique avec GitHub Actions (Recommandé)

Cette méthode fonctionne pour tous les types de sites GitHub Pages et gère automatiquement la configuration.

1. **Créez le fichier** `.github/workflows/deploy.yml` à la racine de votre projet :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build site
        run: |
          npm run build -- --base=/${{ github.event.repository.name }}/
        # Pour un site utilisateur (username.github.io), utilisez plutôt :
        # npm run build -- --base=/
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist/public

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. **Sur GitHub** :
   - Allez dans Settings > Pages
   - Source : Sélectionnez "GitHub Actions"
   - Poussez votre code sur la branche `main`
   - Le déploiement se fera automatiquement !

### Option 2 : Déploiement manuel

#### Pour un site utilisateur (`username.github.io`) :

```bash
npm install
npm run build -- --base=/
```

#### Pour un site de projet (`username.github.io/nom-repo`) :

```bash
npm install
npm run build -- --base=/nom-repo/
```

Remplacez `nom-repo` par le nom réel de votre repository.

**Ensuite** :
1. Le dossier `dist/public` contient votre site prêt à être déployé
2. Copiez le contenu de `dist/public` dans une branche `gh-pages` ou à la racine de votre repo
3. Sur GitHub : Settings > Pages > Source : sélectionnez la branche appropriée
4. Votre site sera disponible en quelques minutes

### 🔧 Configuration du base path

Le `base path` est crucial pour que les assets (images, CSS, JS) se chargent correctement :

| Type de site | Base path | Exemple d'URL |
|--------------|-----------|---------------|
| Site utilisateur | `/` | `https://username.github.io/` |
| Site de projet | `/nom-repo/` | `https://username.github.io/nom-repo/` |
| Domaine personnalisé | `/` | `https://votre-domaine.com/` |

### ⚠️ Note importante

Si vous changez le nom de votre repository ou le type de déploiement, pensez à mettre à jour le `base path` dans votre workflow GitHub Actions ou lors de votre build manuel.

## 💻 Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Le site sera accessible sur http://localhost:5000
```

## 🎯 Structure du projet

```
├── attached_assets/        # Images (bannière, profil, logos)
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── link-hub.tsx  # Page principale
│   │   ├── App.tsx
│   │   └── index.css
│   └── index.html
├── client/
│   ├── public/
│   │   └── config.json    # ⭐ Fichier de configuration à éditer
└── README.md
```

## 🎨 Personnalisation

Les couleurs et styles peuvent être modifiés dans :
- `client/src/index.css` - Variables CSS et thème
- `client/src/pages/link-hub.tsx` - Composant principal et dégradés

## 📦 Technologies utilisées

- React + TypeScript
- Vite
- Tailwind CSS
- TanStack Query

---

Créé avec ❤️ pour la communauté Migbig
