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

    // --- Lapin Chocolat (déjà adopté) ---
    {
      id: "lapin-chocolat",
      nom: "Lapin Chocolat",
      prix: 49,
      taille: "Moyen modèle",
      dimensions: "environ 28 cm",
      statut: "adoptee",
      description: "Lapin crocheté à la main dans une laine chenille duveteuse, aux tons chocolat profonds. Longues oreilles tombantes, museau brodé et yeux ronds sont travaillés maille par maille. Modèle moyen d'environ 28 cm.",
      matieres: "Laine chenille 100 % polyester",
      entretien: "Lavage en machine à 40 °C ou à la main. Séchage à l'air libre, à plat.",
      delai: "",
      credit: "loveloopsgb",
      vintedUrl: "",
      photos: [
        "images/chocolat-1.jpg",
        "images/chocolat-2.jpg",
        "images/chocolat-3.jpg"
      ]
    },

    // --- Lapin Bordeaux (déjà adopté) ---
    {
      id: "lapin-bordeaux",
      nom: "Lapin Bordeaux",
      prix: 49,
      taille: "Moyen modèle",
      dimensions: "environ 28 cm",
      statut: "adoptee",
      description: "Lapin crocheté à la main dans une laine chenille duveteuse, d'un profond ton bordeaux. Ses grandes oreilles souples et son museau brodé sont réalisés maille par maille. Modèle moyen d'environ 28 cm.",
      matieres: "Laine chenille 100 % polyester",
      entretien: "Lavage en machine à 40 °C ou à la main. Séchage à l'air libre, à plat.",
      delai: "",
      credit: "loveloopsgb",
      vintedUrl: "",
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

    // --- Lapin Barbe à papa (déjà adopté) ---
    {
      id: "lapin-barbe-a-papa",
      nom: "Lapin Barbe à papa",
      prix: 43,
      taille: "Moyen modèle",
      dimensions: "environ 27 cm",
      statut: "adoptee",
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
    },

    // --- Lapin lavande (en vente) ---
    {
      id: "lapin-lavande",
      nom: "Lapin lavande",
      prix: 55,
      taille: "Moyen modèle",
      dimensions: "35",
      statut: "disponible",
      description: "Lapin crocheté à la main dans une laine chenille très douce, aux jolies nuances lavande. Ses grandes oreilles souples et son museau brodé sont travaillés maille par maille. Modèle moyen d'environ 35 cm.",
      matieres: "Laine chenille 100 % polyester",
      entretien: "Lavage en machine à 40 °C ou à la main. Séchage à l'air libre, à plat.",
      delai: "",
      credit: "loveloopsgb",
      vintedUrl: "https://www.vinted.com/items/9794513335-lapin-peluche-au-crochet-fait-main-rose-violet",
      photos: [
        "photo/lapin_lavande_1.jpg",
        "photo/lapin_lavande_2.jpg",
        "photo/lapin_lavande_3.jpg",
        "photo/lapin_lavande_4.jpg"
      ]
    },

    // --- Fluffy bee, déjà adoptée ---
    {
      id: "fluffy-bee",
      nom: "Fluffy bee",
      prix: 45,
      taille: "Moyen modèle",
      dimensions: "30",
      statut: "adoptee",
      description: "Une adorable abeille crochetée à la main dans une laine chenille moelleuse. Ses rayures jaunes et noires, ses petites ailes et son doux visage lui donnent un air particulièrement attachant. Modèle moyen d'environ 30 cm.",
      matieres: "Laine chenille 100 % polyester",
      entretien: "Lavage en machine à 40 °C ou à la main. Séchage à l'air libre, à plat.",
      delai: "",
      credit: "quantum_crochet",
      vintedUrl: "",
      photos: [
        "photo/bee1.jpg",
        "photo/bee2.jpg",
        "photo/bee3.jpg",
        "photo/bee4.jpg",
        "photo/bee5.jpg"
      ]
    },

    // --- Tao, déjà adopté ---
    {
      id: "tao",
      nom: "Tao",
      prix: 75,
      taille: "Grand modèle",
      dimensions: "40",
      statut: "adoptee",
      description: "Commande personnalisée, fidèle à la photo du vrai chat. Tao est crocheté à la main, avec ses détails et son expression soigneusement travaillés pour retrouver toute sa personnalité.",
      matieres: "Laine chenille 100 % polyester",
      entretien: "Lavage en machine à 40 °C ou à la main. Séchage à l'air libre, à plat.",
      delai: "",
      credit: "loveloopsgb",
      vintedUrl: "",
      photos: [
        "photo/chat_tao1.jpg",
        "photo/chat_tao2.jpg",
        "photo/chat_tao3.jpg",
        "photo/chat_tao4.jpg",
        "photo/chat_tao5.jpg",
        "photo/chat_tao6.jpg"
      ]
    },

    // --- Cold dog (déjà adopté) ---
    {
      id: "cold-dog",
      nom: "Cold dog",
      prix: 55,
      taille: "Moyen modèle",
      dimensions: "35",
      statut: "adoptee",
      description: "Un adorable chien crocheté à la main dans une laine chenille toute douce. Sa silhouette pleine de douceur et ses détails soigneusement travaillés en font un compagnon unique d'environ 35 cm.",
      matieres: "Laine chenille 100 % polyester",
      entretien: "Lavage en machine à 40 °C ou à la main. Séchage à l'air libre, à plat.",
      delai: "",
      credit: "loveloopsgb",
      vintedUrl: "",
      photos: [
        "photo/colddog1.jpg",
        "photo/colddog2.jpg",
        "photo/colddog3.jpg",
        "photo/colddog4.jpg",
        "photo/colddog5.jpg",
        "photo/colddog6.jpg"
      ]
    },

    // --- Panda Noir (en vente) ---
    {
      id: "panda-noir",
      nom: "Panda Noir",
      prix: 40,
      taille: "Moyen modèle",
      dimensions: "28",
      statut: "disponible",
      description: "Panda crocheté à la main dans une laine chenille très douce, avec son joli pelage noir et blanc. Son visage expressif et ses petites oreilles sont travaillés maille par maille. Modèle moyen d'environ 28 cm.",
      matieres: "Laine chenille 100 % polyester",
      entretien: "Lavage en machine à 40 °C ou à la main. Séchage à l'air libre, à plat.",
      delai: "",
      credit: "loveloopsgb",
      vintedUrl: "https://www.vinted.com/items/10245246203-panda-au-crochet-fait-main-3",
      photos: [
        "photo/panda1.jpg",
        "photo/panda2.jpg",
        "photo/panda3.jpg",
        "photo/panda4.jpg"
      ]
    },

    // --- Panda Roux, déjà adopté ---
    {
      id: "panda-roux",
      nom: "Panda Roux",
      prix: 50,
      taille: "Grand modèle",
      dimensions: "30",
      statut: "adoptee",
      description: "Panda roux crocheté à la main dans une laine chenille douce et chaleureuse. Son pelage roux, son petit museau et ses détails délicats sont travaillés maille par maille. Grand modèle d'environ 30 cm.",
      matieres: "Laine chenille 100 % polyester",
      entretien: "Lavage en machine à 40 °C ou à la main. Séchage à l'air libre, à plat.",
      delai: "",
      credit: "loveloopsgb",
      vintedUrl: "",
      photos: [
        "photo/pandaroux1.jpg",
        "photo/pandaroux2.jpg",
        "photo/pandaroux3.jpg",
        "photo/pandaroux4.jpg",
        "photo/pandaroux5.jpg"
      ]
    },

    // --- Lapin Blanc, déjà adopté ---
    {
      id: "lapin-blanc",
      nom: "Lapin Blanc",
      prix: 50,
      taille: "Moyen modèle",
      dimensions: "30",
      statut: "adoptee",
      description: "Lapin blanc crocheté à la main dans une laine chenille moelleuse. Ses longues oreilles, son museau brodé et son doux regard sont réalisés avec soin, maille par maille. Modèle moyen d'environ 30 cm.",
      matieres: "Laine chenille 100 % polyester",
      entretien: "Lavage en machine à 40 °C ou à la main. Séchage à l'air libre, à plat.",
      delai: "",
      credit: "loveloopsgb",
      vintedUrl: "",
      photos: [
        "photo/whitelapin1.jpg",
        "photo/whitelapin2.jpg",
        "photo/whitelapin3.jpg",
        "photo/whitelapin4.jpg",
        "photo/whitelapin5.jpg"
      ]
    },

    // --- Pingouin, déjà adopté ---
    {
      id: "pingouin",
      nom: "Pingouin",
      prix: 40,
      taille: "Moyen modèle",
      dimensions: "25",
      statut: "adoptee",
      description: "Pingouin crocheté à la main dans une laine chenille toute douce. Son ventre clair, ses petites ailes et son adorable silhouette sont travaillés avec soin. Modèle moyen d'environ 25 cm.",
      matieres: "Laine chenille 100 % polyester",
      entretien: "Lavage en machine à 40 °C ou à la main. Séchage à l'air libre, à plat.",
      delai: "",
      credit: "looveloopsgb",
      vintedUrl: "",
      photos: [
        "photo/pingouin1.jpg",
        "photo/pingouin2.jpg",
        "photo/pingouin3.jpg",
        "photo/pingouin4.jpg",
        "photo/pingouin5.jpg"
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
