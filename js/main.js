/* ==================================================================
   L'ATELIER TOUT DOUX — Données et logique du site
   ==================================================================

   ✏️✏️✏️  TOUT CE QUE VOUS AVEZ BESOIN DE MODIFIER SE TROUVE
            DANS LA « PARTIE 1 » CI-DESSOUS (liens + peluches).

   La « PARTIE 2 » (le moteur du site) n'a pas besoin d'être touchée.
   ================================================================== */


/* ==================================================================
   PARTIE 1 — VOS LIENS ET VOS PELUCHES (à personnaliser)
   ================================================================== */

/* ------------------------------------------------------------------
   VOS LIENS
   Remplacez les adresses ci-dessous par les vôtres, en gardant les
   guillemets. Ces liens sont utilisés partout sur le site :
   boutons des peluches, section « Sur mesure », section « Contact ».
   ------------------------------------------------------------------ */

// ✏️ Votre compte Instagram :
const INSTAGRAM_URL = "https://www.instagram.com/votre_compte";

// ✏️ Votre boutique Vinted (la page de votre profil vendeur) :
const VINTED_SHOP_URL = "https://www.vinted.fr/member/votre_boutique";


/* ------------------------------------------------------------------
   VOS PELUCHES
   Chaque peluche est un bloc entre accolades { ... } séparé du
   suivant par une virgule.

   ➜ POUR MODIFIER une peluche : changez simplement les textes
     entre guillemets ou le prix (sans guillemets).

   ➜ POUR AJOUTER une peluche : copiez un bloc entier { ... },
     collez-le avant le crochet fermant ], et modifiez son contenu.
     N'oubliez pas la virgule entre deux blocs !

   ➜ POUR RETIRER une peluche : supprimez son bloc { ... } en entier
     (avec la virgule qui le suit).

   Détail des champs :
   - id          : identifiant unique, en minuscules, sans espaces ni
                   accents (ex : "lapin-tout-doux"). Ne doit pas être
                   en double.
   - nom         : le nom affiché sur le site.
   - prix        : en euros, un nombre SANS guillemets (ex : 40).
   - taille      : "Petit modèle", "Moyen modèle" ou "Grand modèle".
   - dimensions  : ex : "environ 15 cm".
   - statut      : trois valeurs possibles (respectez l'orthographe) :
                     "disponible" → en vente, bouton « Je l'adopte ! »
                                    qui mène vers Vinted ;
                     "commande"   → réalisée à la demande, bouton
                                    « Me contacter sur Instagram » ;
                     "adoptee"    → déjà vendue, affichée dans la
                                    section « Déjà adoptées ».
   - description : une ou deux phrases de présentation.
   - matieres    : ce qui compose la peluche.
   - entretien   : comment en prendre soin.
   - delai       : délai de confection (ex : "2 à 3 semaines").
                   Laissez "" si non applicable.
   - vintedUrl   : le lien de l'annonce Vinted PRÉCISE de cette
                   peluche. Laissez "" pour renvoyer vers votre
                   boutique Vinted générale (VINTED_SHOP_URL).
   - photos      : la liste des photos, entre crochets, séparées par
                   des virgules. La première est celle de la carte.
                   (Voir images/README.md pour remplacer les photos.)
   ------------------------------------------------------------------ */

const products = [

  // ---------------------------------------------------------------
  // PELUCHE 1 — exemple entièrement commenté, à lire une fois :)
  // ---------------------------------------------------------------
  {
    id: "lapin-tout-doux",                    // identifiant unique
    nom: "Lapin tout doux",                   // nom affiché
    prix: 40,                                 // prix en euros (nombre)
    taille: "Petit modèle",                   // Petit / Moyen / Grand modèle
    dimensions: "environ 15 cm",              // taille approximative
    statut: "disponible",                     // "disponible" | "commande" | "adoptee"
    description: "Un petit lapin aux grandes oreilles souples, crocheté dans un coton tout doux. Il tient dans une main et adore se glisser dans un sac pour suivre son adopté partout.",
    matieres: "Coton doux, rembourrage hypoallergénique",
    entretien: "Lavage doux à la main, séchage à l'air libre",
    delai: "",                                // vide : déjà prêt à partir
    vintedUrl: "",                            // ✏️ collez ici le lien de l'annonce Vinted
    photos: [
      "images/lapin%20barbe%20a%20papa%201.jpg",
      "images/lapin%20barbe%20a%20papa%202.jpg",
      "images/lapin%20barbe%20a%20papa%203.jpg"
    ]
  },

  // ---------------------------------------------------------------
  // PELUCHE 2
  // ---------------------------------------------------------------
  {
    id: "ourson-calin",
    nom: "Ourson câlin",
    prix: 70,
    taille: "Grand modèle",
    dimensions: "environ 35 cm",
    statut: "commande",
    description: "Un grand ourson moelleux aux bras grands ouverts, pensé pour les câlins du soir et les gros chagrins à consoler. Il est confectionné à la demande, rien que pour vous.",
    matieres: "Coton et velours chenille, rembourrage hypoallergénique",
    entretien: "Lavage doux à la main, séchage à l'air libre",
    delai: "2 à 3 semaines",
    vintedUrl: "",
    photos: [
      "images/lapin%20barbe%20a%20papa%201.jpg",
      "images/lapin%20barbe%20a%20papa%202.jpg",
      "images/lapin%20barbe%20a%20papa%203.jpg"
    ]
  },

  // ---------------------------------------------------------------
  // PELUCHE 3
  // ---------------------------------------------------------------
  {
    id: "lapin-barbe-a-papa",
    nom: "Lapin barbe à papa",
    prix: 40,
    taille: "Petit modèle",
    dimensions: "environ 15 cm",
    statut: "disponible",
    description: "Un petit lapin tout doux, à la couleur barbe à papa et au regard plein de tendresse. Il est fait pour être serré dans les bras et suivre son adopté partout.",
    matieres: "Coton doux, broderie coton, rembourrage hypoallergénique",
    entretien: "Lavage doux à la main, séchage à l'air libre",
    delai: "",
    vintedUrl: "https://www.vinted.fr/items/9304571558-lapin-barbe-a-papa",
    photos: [
      "images/lapin%20barbe%20a%20papa%201.jpg",
      "images/lapin%20barbe%20a%20papa%202.jpg",
      "images/lapin%20barbe%20a%20papa%203.jpg"
    ]
  },

  // ---------------------------------------------------------------
  // PELUCHE 4 — exemple de peluche déjà adoptée
  // ---------------------------------------------------------------
  {
    id: "chien-doudou",
    nom: "Chien doudou",
    prix: 55,
    taille: "Moyen modèle",
    dimensions: "environ 25 cm",
    statut: "adoptee",
    description: "Un fidèle compagnon aux oreilles tombantes, parti vivre de nouvelles aventures. Son modèle peut être recréé sur demande, avec ses propres petites particularités.",
    matieres: "Coton, rembourrage hypoallergénique",
    entretien: "Lavage doux à la main, séchage à l'air libre",
    delai: "",
    vintedUrl: "",
    photos: [
      "images/lapin%20barbe%20a%20papa%201.jpg",
      "images/lapin%20barbe%20a%20papa%202.jpg",
      "images/lapin%20barbe%20a%20papa%203.jpg"
    ]
  },

  // ---------------------------------------------------------------
  // PELUCHE 5
  // ---------------------------------------------------------------
  {
    id: "renard-moelleux",
    nom: "Renard moelleux",
    prix: 70,
    taille: "Grand modèle",
    dimensions: "environ 35 cm",
    statut: "disponible",
    description: "Un grand renard aux teintes douces, avec sa queue touffue crochetée point par point. Un compagnon un peu malicieux, mais très câlin.",
    matieres: "Coton rouille et écru, rembourrage hypoallergénique",
    entretien: "Lavage doux à la main, séchage à l'air libre",
    delai: "",
    vintedUrl: "",
    photos: [
      "images/lapin%20barbe%20a%20papa%201.jpg",
      "images/lapin%20barbe%20a%20papa%202.jpg",
      "images/lapin%20barbe%20a%20papa%203.jpg"
    ]
  },

  // ---------------------------------------------------------------
  // PELUCHE 6
  // ---------------------------------------------------------------
  {
    id: "mouton-nuage",
    nom: "Mouton nuage",
    prix: 40,
    taille: "Petit modèle",
    dimensions: "environ 15 cm",
    statut: "commande",
    description: "Tout rond et tout moelleux, ce petit mouton est crocheté dans une laine bouclette qui lui donne un air de nuage. Chaque exemplaire est unique, réalisé à la demande.",
    matieres: "Laine bouclette, coton, rembourrage hypoallergénique",
    entretien: "Lavage doux à la main, séchage à l'air libre",
    delai: "1 à 2 semaines",
    vintedUrl: "",
    photos: [
      "images/lapin%20barbe%20a%20papa%201.jpg",
      "images/lapin%20barbe%20a%20papa%202.jpg",
      "images/lapin%20barbe%20a%20papa%203.jpg"
    ]
  }

]; // ← fin du tableau des peluches (n'effacez pas ce crochet !)



/* ==================================================================
   PARTIE 2 — LE MOTEUR DU SITE
   (vous n'avez pas besoin de modifier ce qui suit)
   ================================================================== */

(function () {
  "use strict";

  /* ----------------------------------------------------------------
     Petites fonctions utilitaires
     ---------------------------------------------------------------- */

  // Selon le statut, quel bouton afficher et vers quel lien ?
  function actionProduit(p) {
    if (p.statut === "disponible") {
      return {
        label: "Je l'adopte !",
        url: p.vintedUrl && p.vintedUrl.trim() !== "" ? p.vintedUrl : VINTED_SHOP_URL
      };
    }
    if (p.statut === "commande") {
      return { label: "Me contacter sur Instagram", url: INSTAGRAM_URL };
    }
    // statut "adoptee"
    return { label: "Demander une création similaire", url: INSTAGRAM_URL };
  }

  // Le badge (pastille) correspondant au statut
  function badgeProduit(statut) {
    if (statut === "disponible") return { classe: "badge-disponible", label: "Disponible" };
    if (statut === "commande")   return { classe: "badge-commande",   label: "Sur commande" };
    return { classe: "badge-adoptee", label: "Adoptée" };
  }

  /* ----------------------------------------------------------------
     Construction des cartes produit
     ---------------------------------------------------------------- */

  function carteHTML(p) {
    const action = actionProduit(p);
    const badge = badgeProduit(p.statut);
    const estAdoptee = p.statut === "adoptee";

    return (
      '<li class="carte reveal' + (estAdoptee ? " carte-adoptee" : "") + '">' +
        '<button type="button" class="carte-zone" data-id="' + p.id + '" aria-haspopup="dialog">' +
          '<span class="carte-photo">' +
            '<img src="' + p.photos[0] + '" alt="Peluche ' + p.nom + ' au crochet" loading="lazy">' +
            '<span class="badge ' + badge.classe + '">' + badge.label + "</span>" +
          "</span>" +
          '<span class="carte-corps">' +
            '<span class="carte-entete">' +
              '<span class="carte-nom">' + p.nom + "</span>" +
              '<span class="etiquette-prix">' + p.prix + "&nbsp;€</span>" +
            "</span>" +
            '<span class="carte-taille">' + p.taille + " · " + p.dimensions + "</span>" +
            '<span class="carte-description">' + p.description + "</span>" +
          "</span>" +
        "</button>" +
        '<div class="carte-pied">' +
          '<a class="btn ' + (p.statut === "disponible" ? "btn-plein" : "btn-contour") + '" ' +
            'href="' + action.url + '" target="_blank" rel="noopener">' + action.label + "</a>" +
        "</div>" +
      "</li>"
    );
  }

  /* ----------------------------------------------------------------
     Affichage de la boutique (avec filtres) et des adoptées
     ---------------------------------------------------------------- */

  const grilleBoutique = document.getElementById("grille-boutique");
  const grilleAdoptees = document.getElementById("grille-adoptees");
  const messageVide = document.getElementById("boutique-vide");
  const boutonsFiltre = document.querySelectorAll(".filtre");

  function afficherBoutique(filtre) {
    // La boutique n'affiche jamais les peluches déjà adoptées
    let liste = products.filter(function (p) { return p.statut !== "adoptee"; });

    if (filtre === "disponible") {
      liste = liste.filter(function (p) { return p.statut === "disponible"; });
    } else if (filtre === "commande") {
      liste = liste.filter(function (p) { return p.statut === "commande"; });
    }

    grilleBoutique.innerHTML = liste.map(carteHTML).join("");
    messageVide.hidden = liste.length > 0;
    observerReveals(grilleBoutique);
  }

  function afficherAdoptees() {
    const adoptees = products.filter(function (p) { return p.statut === "adoptee"; });
    grilleAdoptees.innerHTML = adoptees.map(carteHTML).join("");

    // S'il n'y a aucune peluche adoptée, on masque toute la section
    const section = document.getElementById("adoptees");
    section.hidden = adoptees.length === 0;
    observerReveals(grilleAdoptees);
  }

  // Gestion des boutons de filtre
  boutonsFiltre.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
      boutonsFiltre.forEach(function (b) {
        b.classList.remove("actif");
        b.setAttribute("aria-pressed", "false");
      });
      bouton.classList.add("actif");
      bouton.setAttribute("aria-pressed", "true");
      afficherBoutique(bouton.dataset.filtre);
    });
  });

  /* ----------------------------------------------------------------
     Fiche détaillée (modale)
     ---------------------------------------------------------------- */

  const modale = document.getElementById("modale");
  const modaleBoite = modale.querySelector(".modale-boite");
  const modaleContenu = document.getElementById("modale-contenu");
  const boutonFermer = modale.querySelector(".modale-fermer");
  let elementAvantModale = null; // pour rendre le focus au clavier à la fermeture

  function ficheHTML(p) {
    const action = actionProduit(p);
    const badge = badgeProduit(p.statut);

    // Galerie : photo principale + une vignette par photo
    const vignettes = p.photos.map(function (src, i) {
      return (
        '<button type="button" class="vignette' + (i === 0 ? " active" : "") + '" data-photo="' + src + '" ' +
          'aria-label="Voir la photo ' + (i + 1) + '">' +
          '<img src="' + src + '" alt="">' +
        "</button>"
      );
    }).join("");

    // Le délai n'est affiché que s'il est renseigné
    const ligneDelai = p.delai && p.delai.trim() !== ""
      ? "<dt>Délai de confection</dt><dd>" + p.delai + "</dd>"
      : "";

    return (
      '<div class="modale-galerie">' +
        '<img class="modale-photo-principale" src="' + p.photos[0] + '" alt="Peluche ' + p.nom + ' au crochet">' +
        (p.photos.length > 1
          ? '<div class="modale-vignettes" role="group" aria-label="Photos de la peluche">' + vignettes + "</div>"
          : "") +
      "</div>" +
      '<div class="modale-infos">' +
        '<span class="badge badge-fiche ' + badge.classe + '">' + badge.label + "</span>" +
        '<h3 id="modale-titre">' + p.nom + "</h3>" +
        '<p class="modale-prix">' + p.prix + "&nbsp;€</p>" +
        '<p class="modale-taille">' + p.taille + " · " + p.dimensions + "</p>" +
        '<p class="modale-description">' + p.description + "</p>" +
        '<dl class="modale-details">' +
          "<div><dt>Matières</dt><dd>" + p.matieres + "</dd></div>" +
          "<div><dt>Entretien</dt><dd>" + p.entretien + "</dd></div>" +
          (ligneDelai ? "<div>" + ligneDelai + "</div>" : "") +
        "</dl>" +
        '<a class="btn btn-plein" href="' + action.url + '" target="_blank" rel="noopener">' + action.label + "</a>" +
      "</div>"
    );
  }

  function ouvrirModale(id) {
    const produit = products.find(function (p) { return p.id === id; });
    if (!produit) return;

    elementAvantModale = document.activeElement;
    modaleContenu.innerHTML = ficheHTML(produit);
    modale.hidden = false;
    document.body.style.overflow = "hidden"; // bloque le défilement derrière
    modaleBoite.scrollTop = 0;
    boutonFermer.focus();
  }

  function fermerModale() {
    modale.hidden = true;
    document.body.style.overflow = "";
    if (elementAvantModale) {
      elementAvantModale.focus();
      elementAvantModale = null;
    }
  }

  // Ouverture : clic (ou Entrée au clavier) sur la zone d'une carte
  document.addEventListener("click", function (e) {
    const zone = e.target.closest(".carte-zone");
    if (zone) {
      ouvrirModale(zone.dataset.id);
      return;
    }

    // Changement de photo dans la galerie
    const vignette = e.target.closest(".vignette");
    if (vignette) {
      const photoPrincipale = modale.querySelector(".modale-photo-principale");
      photoPrincipale.src = vignette.dataset.photo;
      modale.querySelectorAll(".vignette").forEach(function (v) {
        v.classList.remove("active");
      });
      vignette.classList.add("active");
    }
  });

  // Fermeture : croix, ou clic sur le fond sombre
  boutonFermer.addEventListener("click", fermerModale);
  modale.addEventListener("click", function (e) {
    if (e.target === modale) fermerModale();
  });

  // Fermeture avec la touche Échap + focus retenu dans la modale (Tab)
  document.addEventListener("keydown", function (e) {
    if (modale.hidden) return;

    if (e.key === "Escape") {
      fermerModale();
      return;
    }

    if (e.key === "Tab") {
      const focusables = modale.querySelectorAll("button, a[href]");
      if (focusables.length === 0) return;
      const premier = focusables[0];
      const dernier = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === premier) {
        e.preventDefault();
        dernier.focus();
      } else if (!e.shiftKey && document.activeElement === dernier) {
        e.preventDefault();
        premier.focus();
      }
    }
  });

  /* ----------------------------------------------------------------
     Menu burger (mobile)
     ---------------------------------------------------------------- */

  const burger = document.querySelector(".burger");
  const menu = document.getElementById("menu-principal");

  burger.addEventListener("click", function () {
    const ouvert = menu.classList.toggle("ouvert");
    burger.setAttribute("aria-expanded", ouvert ? "true" : "false");
    burger.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
  });

  // Le menu se referme quand on choisit une section
  menu.querySelectorAll("a").forEach(function (lien) {
    lien.addEventListener("click", function () {
      menu.classList.remove("ouvert");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Ouvrir le menu");
    });
  });

  /* ----------------------------------------------------------------
     Liens Instagram / Vinted répartis dans la page
     (les boutons portant les classes .lien-instagram / .lien-vinted
     reçoivent automatiquement les adresses définies en haut du fichier)
     ---------------------------------------------------------------- */

  document.querySelectorAll(".lien-instagram").forEach(function (lien) {
    lien.href = INSTAGRAM_URL;
  });

  document.querySelectorAll(".lien-vinted").forEach(function (lien) {
    lien.href = VINTED_SHOP_URL;
  });

  /* ----------------------------------------------------------------
     Apparition en fondu au défilement (discrète)
     ---------------------------------------------------------------- */

  const animationsReduites = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let observateur = null;

  if (!animationsReduites && "IntersectionObserver" in window) {
    observateur = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (entree) {
        if (entree.isIntersecting) {
          entree.target.classList.add("visible");
          observateur.unobserve(entree.target);
        }
      });
    }, { threshold: 0.12 });
  }

  function observerReveals(racine) {
    const cibles = (racine || document).querySelectorAll(".reveal:not(.visible)");
    cibles.forEach(function (el) {
      if (observateur) {
        observateur.observe(el);
      } else {
        el.classList.add("visible"); // pas d'animation : tout est visible
      }
    });
  }

  /* ----------------------------------------------------------------
     Démarrage
     ---------------------------------------------------------------- */

  afficherBoutique("tous");
  afficherAdoptees();
  observerReveals(document);

  // Année automatique dans le pied de page
  const annee = document.getElementById("annee");
  if (annee) annee.textContent = new Date().getFullYear();

})();
