# 🧶 L'Atelier Tout Doux — le site

Site vitrine de la boutique de peluches en crochet faites main de Marylou.

Il fonctionne **sans installation** : il suffit de double-cliquer sur
`index.html` pour l'ouvrir dans votre navigateur. Pas de base de données,
pas de logiciel à installer, rien à payer.

```
site peluche/
├── index.html        ← la page du site (textes des sections)
├── css/style.css     ← l'apparence (couleurs, polices, mise en page)
├── js/main.js        ← ⭐ VOS PELUCHES ET VOS LIENS (c'est ici que tout se passe)
├── images/           ← les photos (+ un guide pour les remplacer)
└── README.md         ← ce guide
```

---

## ✏️ 1. Changer les liens Instagram et Vinted (à faire en premier !)

Ouvrez `js/main.js` avec un éditeur de texte (clic droit → Ouvrir avec →
Bloc-notes, ou mieux : [VS Code](https://code.visualstudio.com), gratuit).

Tout en haut du fichier, remplacez les deux adresses :

```js
const INSTAGRAM_URL = "https://www.instagram.com/votre_compte";
const VINTED_SHOP_URL = "https://www.vinted.fr/member/votre_boutique";
```

Mettez vos vraies adresses **entre les guillemets**, enregistrez, et
rechargez la page dans le navigateur. Tous les boutons du site (peluches,
sur mesure, contact) utilisent automatiquement ces deux liens.

---

## 🧸 2. Modifier une peluche

Toujours dans `js/main.js`, chaque peluche est un bloc comme celui-ci :

```js
{
  id: "lapin-tout-doux",
  nom: "Lapin tout doux",
  prix: 40,
  taille: "Petit modèle",
  dimensions: "environ 15 cm",
  statut: "disponible",
  description: "Un petit lapin aux grandes oreilles souples…",
  matieres: "Coton doux, rembourrage hypoallergénique",
  entretien: "Lavage doux à la main, séchage à l'air libre",
  delai: "",
  vintedUrl: "",
  photos: ["images/lapin-1.svg", "images/lapin-2.svg"]
},
```

Changez simplement les textes entre guillemets, ou le prix (sans
guillemets). Les trois **statuts** possibles :

| statut | Ce que ça affiche |
|---|---|
| `"disponible"` | Badge « Disponible » + bouton **Je l'adopte !** → mène vers Vinted |
| `"commande"` | Badge « Sur commande » + bouton **Me contacter sur Instagram** |
| `"adoptee"` | La peluche passe dans la section **Déjà adoptées** |

💡 `vintedUrl` : collez-y le lien de **l'annonce Vinted précise** de la
peluche. Si vous le laissez vide (`""`), le bouton mènera vers votre
boutique Vinted générale.

💡 `delai` : indiquez par exemple `"2 à 3 semaines"` pour une peluche sur
commande. Laissez `""` sinon (la ligne n'apparaîtra pas).

## ➕ 3. Ajouter ou retirer une peluche

- **Ajouter** : copiez un bloc entier `{ ... },` (de l'accolade ouvrante à
  l'accolade fermante), collez-le à la suite des autres — avant le `];`
  final — et modifiez son contenu. Donnez-lui un `id` unique (minuscules,
  tirets, pas d'accents). N'oubliez pas la **virgule** entre deux blocs.
- **Retirer** : supprimez le bloc `{ ... },` en entier.
- Quand une peluche est vendue, ne la supprimez pas : passez simplement
  son statut à `"adoptee"` — elle rejoindra la section « Déjà adoptées ». 🤍

## 📷 4. Changer les photos

Tout est expliqué pas à pas dans **`images/README.md`**. En résumé :
déposez vos photos JPG dans le dossier `images/`, puis mettez à jour la
liste `photos: [...]` de la peluche concernée dans `js/main.js`.

## 📝 5. Modifier les textes du site

Les textes des sections (accueil, sur mesure, à propos, FAQ, contact) sont
dans `index.html`. Les endroits à personnaliser sont signalés par des
commentaires bien visibles :

```html
<!-- ✏️ À PERSONNALISER : ... -->
```

Le plus important : la section **À propos**, qui attend l'histoire de
Marylou.

## 🎨 6. Ajuster les couleurs (optionnel)

Toutes les couleurs sont regroupées en haut de `css/style.css`, dans le
bloc `:root`. Changez un code couleur, tout le site suit.

---

## 🌐 Mettre le site en ligne

Le site est **prêt à être déployé tel quel**. Trois options gratuites, de
la plus simple à la plus complète :

### Option A — Netlify (recommandée, 2 minutes)

1. Créez un compte gratuit sur [netlify.com](https://www.netlify.com).
2. Sur votre tableau de bord, ouvrez l'onglet *« Sites »* — repérez la zone
   *« Drag and drop your site folder here »*.
3. **Glissez-déposez le dossier entier** du site (celui qui contient
   `index.html`) dans cette zone.
4. C'est en ligne ! Netlify vous donne une adresse du type
   `nom-aleatoire.netlify.app`, que vous pouvez renommer dans
   *Site settings → Change site name* (ex. `latelier-tout-doux.netlify.app`).

Pour mettre à jour le site plus tard : onglet *Deploys* → glissez-déposez
à nouveau le dossier.

### Option B — Vercel

1. Compte gratuit sur [vercel.com](https://vercel.com).
2. *Add New → Project*, puis importez le dossier (par glisser-déposer ou
   depuis GitHub).
3. Cliquez *Deploy* : l'adresse `votre-site.vercel.app` est prête.

### Option C — GitHub Pages

1. Créez un compte sur [github.com](https://github.com) et un nouveau
   dépôt (*repository*), par exemple `atelier-tout-doux`, en le laissant
   **Public**.
2. *Add file → Upload files* : déposez tous les fichiers du site
   (`index.html` à la racine du dépôt, avec les dossiers `css`, `js`,
   `images`), puis *Commit changes*.
3. *Settings → Pages* : dans *Branch*, choisissez `main` et `/ (root)`,
   puis *Save*.
4. Après une minute, le site est visible sur
   `https://votre-compte.github.io/atelier-tout-doux/`.

💡 Plus tard, vous pourrez acheter un nom de domaine (ex.
`lateliertoutdoux.fr`, environ 10 €/an) et le relier en quelques clics
depuis Netlify, Vercel ou GitHub Pages.

---

Fait main, point par point. 🤍
