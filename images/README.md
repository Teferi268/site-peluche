# 📷 Comment remplacer les photos

Les images actuelles (`lapin-1.svg`, `ourson-2.svg`, etc.) sont des
**emplacements provisoires** : de simples cadres beiges avec le nom de la
peluche. Elles sont là pour que le site fonctionne tout de suite, en
attendant vos vraies photos.

## Étape 1 — Préparez vos photos

- Format recommandé : **JPG** (ou PNG).
- Idéalement **carrées** (par exemple 800 × 800 pixels) : c'est le format
  d'affichage des cartes. Une photo non carrée sera recadrée au centre
  automatiquement, ce n'est pas grave.
- Poids conseillé : **moins de 500 Ko par photo** pour que le site reste
  rapide. (Astuce : le site gratuit [squoosh.app](https://squoosh.app)
  permet de compresser une photo en quelques secondes.)
- Prenez vos photos à la lumière naturelle, sur un fond neutre (drap
  beige, bois clair…) : c'est ce qui mettra le mieux vos peluches en valeur.

## Étape 2 — Déposez-les dans ce dossier

Copiez vos photos dans ce dossier `images/`, avec des noms simples,
**sans espaces ni accents**, par exemple :

```
images/lapin-1.jpg
images/lapin-2.jpg
images/lapin-3.jpg
```

## Étape 3 — Indiquez-les dans js/main.js

Ouvrez le fichier `js/main.js` avec un éditeur de texte (Bloc-notes,
Notepad++, VS Code…). Dans le tableau des peluches, remplacez les anciens
chemins par les nouveaux :

```js
// AVANT
photos: [
  "images/lapin-1.svg",
  "images/lapin-2.svg",
  "images/lapin-3.svg"
],

// APRÈS
photos: [
  "images/lapin-1.jpg",
  "images/lapin-2.jpg",
  "images/lapin-3.jpg"
],
```

Bon à savoir :

- La **première photo** de la liste est celle affichée sur la carte de la
  boutique. Les autres apparaissent dans la galerie de la fiche détaillée.
- Vous pouvez mettre **autant de photos que vous voulez** par peluche
  (2 ou 3 suffisent en général).
- Une fois vos vraies photos en place, vous pouvez supprimer les fichiers
  `.svg` provisoires de ce dossier.
