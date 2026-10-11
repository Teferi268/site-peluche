<div align="center">

# L'Atelier Tout Doux

### Des peluches crochetées à la main, imaginées avec douceur

<p>
  <a href="https://latelier-tout-doux.com">
    <img src="https://img.shields.io/badge/🌐_Voir_le_site-latelier--tout--doux.com-9C5F45?style=for-the-badge" alt="Voir le site">
  </a>
  <a href="https://www.instagram.com/atelier.toutdoux/">
    <img src="https://img.shields.io/badge/Instagram-atelier.toutdoux-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram">
  </a>
</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript_vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=111111" alt="JavaScript vanilla">
  <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white" alt="GitHub Pages">
</p>

<p>
  <strong>Site vitrine statique pour l'activité artisanale de Marylou.</strong><br>
  Découvrez les créations disponibles, les peluches déjà adoptées et les commandes personnalisées.
</p>

</div>

---

## À propos

**L'Atelier Tout Doux** est un site vitrine pensé pour présenter des peluches
et des doudous crochetés à la main. Le site met en avant l'univers artisanal,
la disponibilité des créations et la possibilité de demander une réalisation
sur mesure.

Le projet est volontairement simple à maintenir :

- aucune base de données ;
- aucun framework ;
- aucune dépendance npm ;
- un catalogue centralisé dans un seul fichier ;
- un déploiement possible directement avec GitHub Pages.

## Ce que propose le site

<table>
  <tr>
    <td width="50%">
      <h3>🧸 Un catalogue vivant</h3>
      <p>Les créations sont automatiquement réparties entre la boutique et les peluches déjà adoptées.</p>
    </td>
    <td width="50%">
      <h3>🔎 Une recherche intelligente</h3>
      <p>Recherche par animal, couleur, taille, caractéristique, faute courante ou traduction.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>📱 Une expérience mobile</h3>
      <p>Grilles adaptées aux petits écrans, menu mobile et affichage progressif des créations adoptées.</p>
    </td>
    <td width="50%">
      <h3>💛 Des commandes personnalisées</h3>
      <p>Un parcours en quatre étapes et l'exemple Tao montrent comment une peluche peut être créée sur mesure.</p>
    </td>
  </tr>
</table>

## Fonctionnalités

### Catalogue et statuts

Chaque peluche est décrite dans [`js/catalogue.js`](./js/catalogue.js) avec son
nom, son prix, ses dimensions, ses photos, sa description et son lien d'action.

| Statut | Où apparaît la création ? | Bouton |
| :---: | --- | --- |
| `disponible` | Boutique | Voir sur Vinted |
| `commande` | Boutique | Contacter Marylou sur Instagram |
| `adoptee` | Déjà adoptées | Demander une création similaire |

### Recherche multilingue

La recherche comprend les majuscules, les accents, certaines fautes et
plusieurs langues : français, anglais, allemand, italien, espagnol et
néerlandais.

Elle peut rechercher dans :

- le nom et l'identifiant ;
- l'animal ;
- les couleurs ;
- la taille et les dimensions ;
- la description ;
- les matières et l'entretien ;
- le statut de la création.

Exemples :

```text
lapin · bunny · rabbit · Hase · coniglio · conejo · konijn
pingouin · pinguoin · penguin · Pinguin · pinguino · pingüino · pinguïn
panda noir · lapin rose · lavender · klein · custom cat
```

### Projet Tao

Tao est présenté comme **un exemple de commande personnalisée**, pas comme un
produit à vendre. La section compare les photos du chat disparu et celles de la
peluche réalisée au crochet à partir de ces photos.

Les images sont :

- cliquables ;
- agrandissables en plein écran ;
- utilisables au clavier ;
- accompagnées d'un texte alternatif.

### Affichage responsive

Le site est pensé mobile-first :

- navigation compacte sur téléphone ;
- grilles qui s'adaptent à la largeur disponible ;
- deux créations adoptées visibles au départ ;
- boutons en haut et en bas pour charger progressivement la suite ;
- étapes de commande empilées verticalement sur petit écran ;
- prise en compte de `prefers-reduced-motion`.

## Aperçu du parcours de commande

La section sur mesure explique simplement le fonctionnement :

| Étape | Ce qui se passe |
| :---: | --- |
| **1** | Vous envoyez votre idée, vos couleurs, une taille ou des photos |
| **2** | Nous échangeons sur la faisabilité, le prix et le délai |
| **3** | Marylou réalise la création à la main |
| **4** | Nous définissons la remise ou l'envoi de la peluche |

## Organisation du projet

```text
site-peluche/
├── index.html              # Structure, contenu et sections de la page
├── css/
│   └── style.css           # Design, responsive et animations
├── js/
│   ├── catalogue.js        # Données des peluches et liens
│   └── main.js             # Rendu et interactions
├── images/                 # Photos du catalogue historique
├── photo/                  # Photos récentes et photos du projet Tao
├── CNAME                   # Domaine personnalisé GitHub Pages
├── images/README.md        # Notes liées aux ressources image
└── README.md               # Documentation du projet
```

Les photos utilisées par le site sont principalement en **WebP** pour limiter
le poids des pages. Les JPG, HEIC et MOV conservés dans le dépôt servent de
sources ou d'archives et ne sont pas nécessaires au fonctionnement courant.

## Stack technique

| Technologie | Utilisation |
| --- | --- |
| HTML5 | Structure sémantique et contenu |
| CSS3 | Design artisanal, responsive et transitions |
| JavaScript vanilla | Catalogue, recherche, filtres et modales |
| WebP | Optimisation des images |
| Google Fonts | Typographies Caveat et Nunito |
| GitHub Pages | Hébergement statique et domaine personnalisé |

## Démarrer en local

### Option rapide

Ouvrir [`index.html`](./index.html) dans un navigateur.

### Option recommandée

Depuis la racine du dépôt :

```bash
python -m http.server 8000
```

Puis ouvrir [http://localhost:8000](http://localhost:8000).

Un serveur statique est préférable pour tester les chemins de fichiers et le
comportement le plus proche de GitHub Pages.

## Modifier le catalogue

Les données sont centralisées dans
[`js/catalogue.js`](./js/catalogue.js).

Pour ajouter une création :

1. copier un objet existant ;
2. choisir un `id` unique ;
3. renseigner le nom, le prix et les dimensions ;
4. choisir `disponible`, `commande` ou `adoptee` ;
5. ajouter les chemins des photos WebP ;
6. renseigner le lien Vinted si la création est disponible ;
7. recharger le site et vérifier la fiche.

Exemple :

```javascript
{
  id: "nom-unique",
  nom: "Nom de la peluche",
  prix: 45,
  taille: "Moyen modèle",
  dimensions: "environ 25 cm",
  statut: "disponible",
  description: "Description de la création.",
  matieres: "Laine chenille 100 % polyester",
  entretien: "Lavage doux à la main.",
  delai: "",
  vintedUrl: "https://www.vinted.fr/...",
  photos: [
    "photo/nom-1.webp",
    "photo/nom-2.webp"
  ]
}
```

Les liens généraux Instagram et Vinted sont regroupés dans l'objet `settings`
de [`js/catalogue.js`](./js/catalogue.js).

## Ajouter une photo

Pour une nouvelle image :

1. utiliser un nom de fichier simple et stable ;
2. redimensionner la photo si sa résolution est excessive ;
3. exporter en WebP ;
4. placer le fichier dans `photo/` ou `images/` ;
5. ajouter son chemin dans le catalogue ;
6. vérifier son affichage sur ordinateur et sur téléphone.

Les images de galerie doivent conserver un texte alternatif descriptif lorsqu'il
s'agit d'une image écrite directement dans `index.html`.

## Vérifications avant publication

```bash
node --check js/main.js
node --check js/catalogue.js
git diff --check
```

À vérifier aussi manuellement :

- la page d'accueil sur ordinateur et sur une largeur d'environ 390 px ;
- la recherche avec accents, fautes et traductions ;
- les filtres boutique ;
- les liens Vinted et Instagram ;
- l'ouverture d'une fiche produit ;
- le zoom des images Tao ;
- l'affichage progressif des peluches adoptées ;
- l'absence de débordement horizontal ;
- la console du navigateur.

## Déploiement

Le projet peut être publié sur GitHub Pages, Netlify, Vercel ou tout autre
hébergeur statique.

### GitHub Pages

1. pousser les changements sur la branche publiée ;
2. ouvrir **Settings → Pages** dans le dépôt ;
3. choisir **Deploy from a branch** ;
4. sélectionner la branche et le dossier `/ (root)` ;
5. enregistrer ;
6. vérifier que le domaine indiqué par [`CNAME`](./CNAME) pointe vers le site.

Le site public actuel est :

**[latelier-tout-doux.com](https://latelier-tout-doux.com)**

## Accessibilité et attention portée aux détails

Le projet inclut notamment :

- un lien d'évitement vers le contenu ;
- une navigation clavier ;
- des labels et attributs ARIA ;
- des textes alternatifs ;
- des boutons sémantiques ;
- la fermeture des modales ;
- le respect de la réduction des animations ;
- une interface sans défilement horizontal sur mobile.

## Intention du projet

Le site doit rester :

> doux, clair, chaleureux et personnel — comme une peluche faite main.

L'objectif n'est pas seulement de montrer des produits, mais de raconter le
soin apporté à chaque création et de donner envie d'imaginer une peluche
unique.

---

<div align="center">

Fait main, point par point, avec beaucoup d'amour.

**L'Atelier Tout Doux · Marylou**

</div>
