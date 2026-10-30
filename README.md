# Lion Meme Generator

Générateur de memes « Tu crois que t'es un lion mais t'es un… » — **[swaks.org/lion-meme](https://swaks.org/lion-meme/)**

React 19 · TypeScript · Vite · Tailwind · Canvas. Le meme est assemblé dans le navigateur : les images ne quittent jamais l'appareil.

## Lancer en local

```
npm install
npm run dev
```

Puis ouvrir http://localhost:3000/lion-meme/.

## Mettre en ligne

Le site est servi par le portfolio ([Swaksm/portfolio](https://github.com/Swaksm/portfolio)), dans le dossier `lion-meme/`.

```
npm run build
```

Puis remplacer le contenu de `portfolio/lion-meme/` par celui de `dist/` (garder `portfolio/lion-meme/.htaccess`) et pousser le portfolio : la GitHub Action l'envoie sur OVH.

## Ancien domaine

`lion-meme.com` (Netlify) redirige en 301 vers `swaks.org/lion-meme/` (`netlify.toml`), pour garder le référencement le temps qu'il expire.
