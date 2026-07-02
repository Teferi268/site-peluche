/* ==================================================================
   L'ATELIER TOUT DOUX - Donnees du catalogue
   ================================================================== */

window.AtelierCatalogue = (function () {
  "use strict";

  const settings = {
    instagramUrl: "https://www.instagram.com/atelier.toutdoux/",
    vintedShopUrl: "https://www.vinted.fr/member/3166341457"
  };

  const products = [
    {
      id: "lapin-tout-doux",
      nom: "Lapin tout doux",
      prix: 40,
      taille: "Petit modele",
      dimensions: "environ 15 cm",
      statut: "disponible",
      description: "Un petit lapin aux grandes oreilles souples, crochete dans un coton tout doux. Il tient dans une main et adore se glisser dans un sac pour suivre son adopte partout.",
      matieres: "Coton doux, rembourrage hypoallergenique",
      entretien: "Lavage doux a la main, sechage a l'air libre",
      delai: "",
      vintedUrl: "",
      photos: [
        "images/lapin%20barbe%20a%20papa%201.jpg",
        "images/lapin%20barbe%20a%20papa%202.jpg",
        "images/lapin%20barbe%20a%20papa%203.jpg"
      ]
    },
    {
      id: "ourson-calin",
      nom: "Ourson calin",
      prix: 70,
      taille: "Grand modele",
      dimensions: "environ 35 cm",
      statut: "commande",
      description: "Un grand ourson moelleux aux bras grands ouverts, pense pour les calins du soir et les gros chagrins a consoler. Il est confectionne a la demande, rien que pour vous.",
      matieres: "Coton et velours chenille, rembourrage hypoallergenique",
      entretien: "Lavage doux a la main, sechage a l'air libre",
      delai: "2 a 3 semaines",
      vintedUrl: "",
      photos: [
        "images/lapin%20barbe%20a%20papa%201.jpg",
        "images/lapin%20barbe%20a%20papa%202.jpg",
        "images/lapin%20barbe%20a%20papa%203.jpg"
      ]
    },
    {
      id: "lapin-barbe-a-papa",
      nom: "Lapin barbe a papa",
      prix: 40,
      taille: "Petit modele",
      dimensions: "environ 15 cm",
      statut: "disponible",
      description: "Un petit lapin tout doux, a la couleur barbe a papa et au regard plein de tendresse. Il est fait pour etre serre dans les bras et suivre son adopte partout.",
      matieres: "Coton doux, broderie coton, rembourrage hypoallergenique",
      entretien: "Lavage doux a la main, sechage a l'air libre",
      delai: "",
      vintedUrl: "https://www.vinted.fr/items/9304571558-lapin-barbe-a-papa",
      photos: [
        "images/lapin%20barbe%20a%20papa%201.jpg",
        "images/lapin%20barbe%20a%20papa%202.jpg",
        "images/lapin%20barbe%20a%20papa%203.jpg"
      ]
    },
    {
      id: "chien-doudou",
      nom: "Chien doudou",
      prix: 55,
      taille: "Moyen modele",
      dimensions: "environ 25 cm",
      statut: "adoptee",
      description: "Un fidele compagnon aux oreilles tombantes, parti vivre de nouvelles aventures. Son modele peut etre recree sur demande, avec ses propres petites particularites.",
      matieres: "Coton, rembourrage hypoallergenique",
      entretien: "Lavage doux a la main, sechage a l'air libre",
      delai: "",
      vintedUrl: "",
      photos: [
        "images/lapin%20barbe%20a%20papa%201.jpg",
        "images/lapin%20barbe%20a%20papa%202.jpg",
        "images/lapin%20barbe%20a%20papa%203.jpg"
      ]
    },
    {
      id: "renard-moelleux",
      nom: "Renard moelleux",
      prix: 70,
      taille: "Grand modele",
      dimensions: "environ 35 cm",
      statut: "disponible",
      description: "Un grand renard aux teintes douces, avec sa queue touffue crochetee point par point. Un compagnon un peu malicieux, mais tres calin.",
      matieres: "Coton rouille et ecru, rembourrage hypoallergenique",
      entretien: "Lavage doux a la main, sechage a l'air libre",
      delai: "",
      vintedUrl: "",
      photos: [
        "images/lapin%20barbe%20a%20papa%201.jpg",
        "images/lapin%20barbe%20a%20papa%202.jpg",
        "images/lapin%20barbe%20a%20papa%203.jpg"
      ]
    },
    {
      id: "mouton-nuage",
      nom: "Mouton nuage",
      prix: 40,
      taille: "Petit modele",
      dimensions: "environ 15 cm",
      statut: "commande",
      description: "Tout rond et tout moelleux, ce petit mouton est crochete dans une laine bouclette qui lui donne un air de nuage. Chaque exemplaire est unique, realise a la demande.",
      matieres: "Laine bouclette, coton, rembourrage hypoallergenique",
      entretien: "Lavage doux a la main, sechage a l'air libre",
      delai: "1 a 2 semaines",
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
