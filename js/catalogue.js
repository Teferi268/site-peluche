/* ==================================================================
   L'ATELIER TOUT DOUX — Données du catalogue
   ------------------------------------------------------------------
   ✏️ Pour modifier les peluches, les prix, les statuts, les photos
      ou les liens : tout se passe dans ce fichier.
   ================================================================== */

window.AtelierCatalogue = (function () {
  "use strict";

  /* ----- Vos liens (boutons du site) ----- */
  const settings = {
    instagramUrl: "https://www.instagram.com/atelier.toutdoux/",
    vintedShopUrl: "https://www.vinted.fr/member/3166341457"
  };

  /* ----- Les peluches -----
     statut : "disponible" (boutique, bouton Vinted)
            | "commande"   (boutique, bouton Instagram)
            | "adoptee"    (section « Déjà adoptées »)                */
  const products = [

    // --- Vachette (en vente) ---
    {
      id: "vachette",
      nom: "Vachette",
      prix: 26,
      taille: "Moyen modèle",
      dimensions: "environ 26 cm",
      statut: "disponible",
      description: "Vachette entièrement crochetée à la main en laine chenille très douce. Son pelage blanc, ses taches noires et son museau beige sont travaillés maille par maille. Un modèle moyen, à la fois décoratif et agréable à tenir.",
      matieres: "Laine chenille 100 % polyester",
      entretien: "Lavage en machine à 40 °C ou à la main. Séchage à l'air libre, à plat.",
      delai: "",
      vintedUrl: "https://www.vinted.fr/items/9313181360-vachette-crochet",
      photos: [
        "images/vachette-1.jpg",
        "images/vachette-2.jpg",
        "images/vachette-3.jpg"
      ]
    },

    // --- Lapin Chocolat (en vente) ---
    {
      id: "lapin-chocolat",
      nom: "Lapin Chocolat",
      prix: 49,
      taille: "Moyen modèle",
      dimensions: "environ 28 cm",
      statut: "disponible",
      description: "Lapin crocheté à la main dans une laine chenille duveteuse, aux tons chocolat profonds. Longues oreilles tombantes, museau brodé et yeux ronds sont travaillés maille par maille. Modèle moyen d'environ 28 cm.",
      matieres: "Laine chenille 100 % polyester",
      entretien: "Lavage en machine à 40 °C ou à la main. Séchage à l'air libre, à plat.",
      delai: "",
      credit: "loveloopsgb",
      vintedUrl: "https://www.vinted.fr/items/9313164667-lapin-chocolat",
      photos: [
        "images/chocolat-1.jpg",
        "images/chocolat-2.jpg",
        "images/chocolat-3.jpg"
      ]
    },

    // --- Lapin Bordeaux (en vente) ---
    {
      id: "lapin-bordeaux",
      nom: "Lapin Bordeaux",
      prix: 49,
      taille: "Moyen modèle",
      dimensions: "environ 28 cm",
      statut: "disponible",
      description: "Lapin crocheté à la main dans une laine chenille duveteuse, d'un profond ton bordeaux. Ses grandes oreilles souples et son museau brodé sont réalisés maille par maille. Modèle moyen d'environ 28 cm.",
      matieres: "Laine chenille 100 % polyester",
      entretien: "Lavage en machine à 40 °C ou à la main. Séchage à l'air libre, à plat.",
      delai: "",
      credit: "loveloopsgb",
      vintedUrl: "https://www.vinted.fr/items/9313154123-lapin-bordeaux",
      photos: [
        "images/bordeaux-1.jpg",
        "images/bordeaux-2.jpg",
        "images/bordeaux-3.jpg"
      ]
    },

    // --- Lapin rose, déjà adopté (exemple de création) ---
    {
      id: "lapin-rose-adoptee",
      nom: "Lapin rose",
      prix: 40,
      taille: "Petit modèle",
      dimensions: "environ 15 cm",
      statut: "adoptee",
      description: "Un petit lapin tout doux, au regard plein de tendresse. Il est fait pour être serré dans les bras et suivre son adopté partout.",
      matieres: "Coton doux, broderie coton, rembourrage hypoallergénique",
      entretien: "Lavage doux à la main, séchage à l'air libre",
      delai: "",
      credit: "loveloopsgb",
      vintedUrl: "",
      photos: [
        "images/lapin rose 1.jpg",
        "images/lapin rose 2.jpg",
        "images/lapin rose 3.jpg"
      ]
    },

    // --- Lapin Barbe à papa (en vente) ---
    {
      id: "lapin-barbe-a-papa",
      nom: "Lapin Barbe à papa",
      prix: 43,
      taille: "Moyen modèle",
      dimensions: "environ 27 cm",
      statut: "disponible",
      description: "Lapin crocheté à la main dans une laine chenille duveteuse, d'un rose tendre façon barbe à papa. Ses longues oreilles tombantes et son museau brodé sont travaillés maille par maille. Modèle moyen d'environ 27 cm.",
      matieres: "Laine chenille 100 % polyester",
      entretien: "Lavage en machine à 40 °C ou à la main. Séchage à l'air libre, à plat.",
      delai: "",
      credit: "loveloopsgb",
      vintedUrl: "",
      photos: [
        "images/lapin-barbe-a-papa-1.jpg",
        "images/lapin-barbe-a-papa-2.jpg",
        "images/lapin-barbe-a-papa-3.jpg"
      ]
    },

    // --- Girafe, déjà adoptée ---
    {
      id: "girafe",
      nom: "Girafe",
      prix: 50,
      taille: "Moyen modèle",
      dimensions: "environ 35 cm",
      statut: "adoptee",
      description: "Girafe crochetée à la main dans une laine chenille douce, avec ses taches rousses et son museau gris texturé. Un modèle moyen d'environ 35 cm, travaillé maille par maille.",
      matieres: "Laine chenille 100 % polyester",
      entretien: "Lavage en machine à 40 °C ou à la main. Séchage à l'air libre, à plat.",
      delai: "",
      vintedUrl: "",
      photos: [
        "images/girafe-1.jpg",
        "images/girafe-2.jpg",
        "images/girafe-3.jpg"
      ]
    }

  ];

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function loadProducts() {
    return clone(products);
  }

  function loadSettings() {
    return clone(settings);
  }

  return {
    loadProducts: loadProducts,
    loadSettings: loadSettings
  };
}());
