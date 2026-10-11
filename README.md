<div align="center">

# L'Atelier Tout Doux — Site vitrine pour une créatrice artisanale

### Un site web conçu et développé par Mathieu Morin pour présenter les créations au crochet de Marylou

<p>
  <a href="https://latelier-tout-doux.com/">
    <img src="https://img.shields.io/badge/🌐_Voir_le_site-latelier--tout--doux.com-9C5F45?style=for-the-badge" alt="Voir le site en production">
  </a>
  <a href="https://github.com/Teferi268/site-peluche">
    <img src="https://img.shields.io/badge/GitHub-Voir_le_dépôt-181717?style=for-the-badge&logo=github" alt="Voir le dépôt GitHub">
  </a>
</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript_vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=111111" alt="JavaScript vanilla">
  <img src="https://img.shields.io/badge/WebP-Optimisation-8A5A44?style=flat-square" alt="Images WebP">
  <img src="https://img.shields.io/badge/Netlify-Déploiement-00C7B7?style=flat-square&logo=netlify&logoColor=white" alt="Netlify">
</p>

<p>
  <strong>Développement web : Mathieu Morin</strong><br>
  <strong>Créations artisanales : Marylou — L'Atelier Tout Doux</strong>
</p>

</div>

---

## Présentation

**L'Atelier Tout Doux** est un site vitrine réalisé pour Marylou, une créatrice
indépendante de peluches artisanales au crochet.

J'ai conçu et développé ce projet pour répondre à un besoin concret : donner
une présence en ligne à son activité, présenter ses créations de manière
attractive et faciliter les prises de contact ainsi que les achats.

Le projet est également une réalisation de mon portfolio d'étudiant en
informatique. Il montre ma capacité à partir d'un besoin utilisateur réel,
choisir une architecture adaptée, développer une interface complète et
déployer un site utilisable en production.

> **Mon rôle :** analyse du besoin, conception de l'interface, développement
> front-end, structuration des données, responsive design, accessibilité,
> optimisation des images, tests manuels et déploiement.

## Aperçu du site

Le site est accessible en production :

**[latelier-tout-doux.com](https://latelier-tout-doux.com/)**

L'interface reprend l'univers doux et artisanal de la marque : palette
chaleureuse, typographie manuscrite pour les titres, cartes produits,
photographies des créations et parcours de commande personnalisé.

Aucune capture d'écran n'est versionnée dans le dépôt pour le moment. Le lien
ci-dessus permet de consulter le rendu réel et les interactions directement
dans le navigateur.

## Contexte et problématique

Avant le projet, l'activité avait besoin d'un espace clair pour :

- présenter les peluches disponibles à l'adoption ;
- conserver une trace des créations déjà réalisées ;
- valoriser les commandes personnalisées ;
- montrer la possibilité de reproduire un animal à partir de photos ;
- rediriger les visiteurs vers Instagram pour échanger ;
- rediriger les acheteurs vers Vinted pour les créations disponibles ;
- rester simple à mettre à jour sans base de données ni interface
  d'administration complexe.

La problématique n'était donc pas uniquement visuelle. Il fallait transformer
un catalogue artisanal et des contenus hétérogènes en une expérience web
compréhensible, responsive et maintenable.

## Fonctionnalités développées

### Catalogue dynamique

Les produits ne sont pas écrits directement dans les cartes HTML. Ils sont
définis dans [`js/catalogue.js`](./js/catalogue.js), puis générés par
[`js/main.js`](./js/main.js).

Chaque création possède notamment :

- un identifiant et un nom ;
- un prix, une taille et des dimensions ;
- un statut ;
- une description ;
- les matières et les consignes d'entretien ;
- une ou plusieurs photos ;
- un lien Vinted ou Instagram selon le cas.

Cette séparation permet de modifier le contenu du catalogue sans toucher à la
structure de la page.

### Gestion des statuts

Trois statuts organisent automatiquement l'affichage :

| Statut | Affichage | Action principale |
| --- | --- | --- |
| `disponible` | Boutique | Ouvrir l'annonce Vinted |
| `commande` | Boutique | Contacter Marylou sur Instagram |
| `adoptee` | Section « Déjà adoptées » | Demander une création similaire |

Les boutons, badges et sections sont adaptés automatiquement au statut de
chaque produit.

### Recherche textuelle multilingue

La boutique inclut une recherche instantanée qui :

- ignore les majuscules et les accents ;
- accepte plusieurs mots comme `panda noir` ;
- corrige certaines fautes courantes comme `pinguoin` ;
- reconnaît des synonymes en français, anglais, allemand, italien, espagnol
  et néerlandais ;
- recherche dans le nom, la description, la taille, les dimensions, les
  matières, l'entretien et le statut.

Techniquement, la saisie est normalisée avec `toLocaleLowerCase`, `normalize`
et la suppression des diacritiques. Les synonymes sont ensuite convertis vers
un terme de recherche commun avant la comparaison avec les données du produit.

### Filtres interactifs

Les boutons **Tous**, **Disponible** et **Sur commande** filtrent le catalogue
sans rechargement de page. Les états sont reflétés par `aria-pressed` afin de
conserver une interaction compréhensible au clavier et pour les technologies
d'assistance.

### Fiches détaillées et galeries

Cliquer sur une carte ouvre une fiche détaillée dans une modale avec :

- la photo principale ;
- les vignettes de la galerie ;
- le prix et le statut ;
- la description ;
- les matières et l'entretien ;
- le délai éventuel ;
- le crédit du modèle lorsqu'il est renseigné ;
- l'action adaptée à la création.

Les images de Tao présentes dans la section sur mesure peuvent également être
agrandies dans une seconde modale de zoom.

### Responsive design et affichage progressif

Le site est conçu en mobile-first :

- menu de navigation adapté aux petits écrans ;
- grilles qui passent d'une à plusieurs colonnes selon la largeur ;
- étapes de commande empilées verticalement sur téléphone ;
- cartes et boutons utilisables sans débordement horizontal ;
- deux créations adoptées affichées initialement sur mobile ;
- bouton en haut et en bas pour afficher progressivement les suivantes.

Sur ordinateur, la section des créations adoptées reste visible directement.

### Commandes personnalisées et projet Tao

La section **Sur mesure** présente le parcours en quatre étapes :

1. le visiteur partage son idée ou ses photos ;
2. les détails, le prix et le délai sont définis ensemble ;
3. Marylou réalise la peluche à la main ;
4. les modalités de remise ou d'envoi sont organisées.

Le projet Tao sert d'exemple concret : la galerie compare les photos du chat
ayant servi d'inspiration avec les photos de la peluche réalisée au crochet.
Il s'agit d'un exemple de commande personnalisée, pas d'un produit en vente.

### Accessibilité et interactions

Le site intègre notamment :

- un lien d'évitement pour la navigation au clavier ;
- une navigation principale avec libellés accessibles ;
- des boutons sémantiques et des états `aria-*` ;
- des textes alternatifs pour les images ;
- des modales avec fermeture au bouton, au clic extérieur ou avec `Échap` ;
- la restitution du focus à l'élément qui a ouvert la modale ;
- des contrôles clavier pour les images agrandissables ;
- la prise en compte de `prefers-reduced-motion`.

## Stack technique

| Technologie | Utilisation dans le projet |
| --- | --- |
| **HTML5** | Structure sémantique de la page, sections, formulaires et modales |
| **CSS3** | Design visuel, responsive design, grilles, états interactifs et transitions |
| **JavaScript vanilla** | Catalogue, recherche, filtres, modales, menu mobile et liens dynamiques |
| **WebP** | Réduction du poids des photographies utilisées par le site |
| **Google Fonts** | Typographies Caveat et Nunito |
| **Git / GitHub** | Versionnement et hébergement du code source |
| **Netlify** | Déploiement du site statique en production |
| **CNAME** | Configuration du domaine personnalisé associé au projet |

### Pourquoi une architecture statique ?

Le besoin ne nécessitait ni authentification, ni base de données, ni serveur
d'application. Une architecture composée de fichiers HTML, CSS et JavaScript
est donc adaptée au périmètre :

- peu de surface technique à maintenir ;
- hébergement peu coûteux et rapide ;
- déploiement simple depuis le dépôt Git ;
- chargement rapide des pages ;
- contenu du catalogue modifiable dans un fichier identifiable.

Cette simplicité est un choix d'architecture cohérent avec le projet, pas une
limitation accidentelle.

## Architecture du projet

```text
site-peluche/
├── index.html              # Structure de la page et contenu éditorial
├── css/
│   └── style.css           # Design, responsive design et états visuels
├── js/
│   ├── catalogue.js        # Données des produits et liens externes
│   └── main.js             # Rendu, recherche et interactions
├── images/                 # Images historiques et versions optimisées
├── photo/                  # Photos récentes, Tao et créations du catalogue
├── CNAME                   # Domaine personnalisé
├── images/README.md        # Notes sur les ressources images
└── README.md               # Documentation du projet
```

La séparation des responsabilités reste volontairement lisible :

- `index.html` décrit la structure générale et les contenus fixes ;
- `style.css` centralise le design et les adaptations par largeur d'écran ;
- `catalogue.js` contient les données métier du catalogue ;
- `main.js` transforme ces données en interface et gère les événements ;
- `images/` et `photo/` regroupent les ressources visuelles.

## Défis techniques et solutions

### 1. Rendre le catalogue facile à maintenir

**Défi :** éviter de dupliquer le HTML pour chaque peluche et permettre à
Marylou de modifier les informations au même endroit.

**Solution :** centraliser les produits dans un tableau JavaScript, puis
générer les cartes et les fiches à partir de leurs propriétés. Les statuts
pilotent également les sections et les actions disponibles.

### 2. Proposer une recherche utile malgré les variations de saisie

**Défi :** un visiteur peut écrire `pinguoin`, `bunny`, `Hase` ou utiliser
des accents et plusieurs mots.

**Solution :** normaliser les chaînes, supprimer les accents, associer les
synonymes multilingues à des termes communs et exiger que chaque mot saisi
corresponde au contenu indexé du produit.

### 3. Adapter une galerie riche aux écrans mobiles

**Défi :** afficher plusieurs étapes, galeries et créations adoptées sans
forcer l'utilisateur à parcourir une page trop longue ni provoquer de
débordement horizontal.

**Solution :** utiliser des grilles CSS responsive, empiler les étapes sous
619 px et afficher les créations adoptées par groupes de deux sur mobile, avec
des contrôles accessibles en haut et en bas de la section.

### 4. Corriger et optimiser des ressources photographiques hétérogènes

**Défi :** certaines images d'origine utilisaient des formats ou des noms de
fichiers peu fiables pour une intégration web directe, ce qui provoquait des
images absentes et alourdissait le chargement.

**Solution :** convertir les ressources utilisées en WebP, corriger les
références du catalogue et vérifier les cas particuliers, notamment les noms
contenant des espaces comme ceux du lapin rose.

### 5. Construire des modales utilisables au clavier

**Défi :** afficher une galerie détaillée et un zoom sans perdre le contexte
de navigation ni rendre l'interaction dépendante de la souris.

**Solution :** utiliser des boutons sémantiques, des rôles ARIA, une fermeture
avec `Échap`, une gestion du focus et la restitution du focus à l'élément
initial après fermeture.

## Performance et optimisation

Les photographies utilisées par le catalogue ont été converties en WebP afin
de réduire le poids des ressources. Le chargement différé est utilisé sur les
images de catalogue et les galeries qui ne sont pas immédiatement visibles.

Les animations d'apparition utilisent `IntersectionObserver` lorsque cela est
possible et sont désactivées ou réduites lorsque le navigateur indique une
préférence pour moins de mouvement.

## Lancer le projet en local

Le projet ne nécessite aucune installation npm.

### Option rapide

Ouvrir [`index.html`](./index.html) directement dans un navigateur.

### Option recommandée

Depuis la racine du dépôt :

```bash
python -m http.server 8000
```

Puis ouvrir [http://localhost:8000](http://localhost:8000).

Un serveur statique local permet de tester les chemins d'images et le
comportement dans des conditions proches de la production.

## Modifier le catalogue

Les données sont centralisées dans
[`js/catalogue.js`](./js/catalogue.js).

Pour ajouter une création :

1. copier un objet existant ;
2. choisir un identifiant unique ;
3. renseigner le nom, le prix, la taille et les dimensions ;
4. choisir `disponible`, `commande` ou `adoptee` ;
5. ajouter les chemins des photos WebP ;
6. renseigner le lien Vinted si nécessaire ;
7. vérifier l'affichage sur ordinateur et sur téléphone.

Les liens généraux Instagram et Vinted sont regroupés dans l'objet `settings`
du même fichier.

## Vérifications

Le dépôt ne contient pas de suite de tests automatisés. Les vérifications
principales réalisées sur le projet sont :

```bash
node --check js/main.js
node --check js/catalogue.js
git diff --check
```

Les tests manuels à effectuer avant une publication couvrent :

- le rendu sur ordinateur et sur une largeur mobile d'environ 390 px ;
- la recherche avec accents, fautes et traductions ;
- les filtres du catalogue ;
- l'ouverture et la fermeture des fiches ;
- le changement de vignette et le zoom des images ;
- l'affichage progressif des créations adoptées ;
- l'absence de débordement horizontal ;
- les liens Instagram et Vinted ;
- les erreurs éventuelles dans la console du navigateur.

## Déploiement

Le site est déployé sur **Netlify** depuis le dépôt GitHub. Le domaine public
personnalisé est configuré avec le fichier [`CNAME`](./CNAME).

**Site en production :**
[latelier-tout-doux.com](https://latelier-tout-doux.com/)

Le code source est disponible sur
[github.com/Teferi268/site-peluche](https://github.com/Teferi268/site-peluche).

## Ce que ce projet démontre

Ce projet illustre ma capacité à :

- transformer un besoin réel en produit web fonctionnel ;
- choisir une solution technique proportionnée au besoin ;
- organiser des données et séparer contenu, présentation et logique ;
- développer des interactions en JavaScript sans dépendance inutile ;
- concevoir une interface responsive et accessible ;
- diagnostiquer des problèmes de chemins et de formats d'images ;
- optimiser les ressources pour améliorer le chargement ;
- documenter un projet pour faciliter sa reprise ;
- tester manuellement une interface avant sa mise en production.

Il s'inscrit dans mon parcours de **Bachelor informatique à Sup de Vinci** et
dans mon objectif de poursuivre vers le développement logiciel et le DevOps.

---

<div align="center">

Projet développé par **Mathieu Morin** pour **Marylou — L'Atelier Tout Doux**.

<a href="https://github.com/Teferi268">GitHub · Teferi268</a>

</div>
