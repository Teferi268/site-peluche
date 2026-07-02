# L'Atelier Tout Doux - le site

Site vitrine simple pour les peluches en crochet faites main de Marylou.

Le site fonctionne sans installation : ouvrez `index.html` dans un navigateur.

## Structure

```text
site peluche/
|-- index.html       <- page du site
|-- css/style.css    <- styles du site
|-- js/catalogue.js  <- donnees des peluches et liens
|-- js/main.js       <- affichage et interactions
|-- images/          <- photos du site
`-- README.md        <- ce guide
```

## Modifier le site

Les textes principaux se modifient dans `index.html`.

Les peluches, les prix, les statuts, les photos et les liens Instagram/Vinted
se modifient dans `js/catalogue.js`.

## Statuts

```text
disponible -> affichee dans la boutique avec le bouton Vinted
commande   -> affichee dans la boutique avec le bouton Instagram
adoptee    -> affichee dans la section Deja adoptees
```

## Mettre en ligne

Ce projet est un site statique classique. Il peut etre publie sur Netlify,
Vercel, GitHub Pages, ou n'importe quel hebergeur de fichiers statiques.
