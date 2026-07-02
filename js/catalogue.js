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

    // --- La peluche en vente ---
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

    // --- La même peluche, déjà adoptée (exemple de création) ---
    {
      id: "lapin-barbe-a-papa-adoptee",
      nom: "Lapin barbe à papa",
      prix: 40,
      taille: "Petit modèle",
      dimensions: "environ 15 cm",
      statut: "adoptee",
      description: "Un petit lapin tout doux, à la couleur barbe à papa et au regard plein de tendresse. Il est fait pour être serré dans les bras et suivre son adopté partout.",
      matieres: "Coton doux, broderie coton, rembourrage hypoallergénique",
      entretien: "Lavage doux à la main, séchage à l'air libre",
      delai: "",
      vintedUrl: "",
      photos: [
        "images/lapin%20barbe%20a%20papa%201.jpg",
        "images/lapin%20barbe%20a%20papa%202.jpg",
        "images/lapin%20barbe%20a%20papa%203.jpg"
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
