/* ==================================================================
   L'ATELIER TOUT DOUX — Données partagées boutique + admin
   ================================================================== */

window.AtelierCatalogue = (function () {
  "use strict";

  const PRODUCTS_STORAGE_KEY = "atelierToutDoux.products.v1";
  const SETTINGS_STORAGE_KEY = "atelierToutDoux.settings.v1";

  const defaultSettings = {
    instagramUrl: "https://www.instagram.com/votre_compte",
    vintedShopUrl: "https://www.vinted.fr/member/votre_boutique"
  };

  const defaultProducts = [
    {
      id: "lapin-tout-doux",
      nom: "Lapin tout doux",
      prix: 40,
      taille: "Petit modèle",
      dimensions: "environ 15 cm",
      statut: "disponible",
      description: "Un petit lapin aux grandes oreilles souples, crocheté dans un coton tout doux. Il tient dans une main et adore se glisser dans un sac pour suivre son adopté partout.",
      matieres: "Coton doux, rembourrage hypoallergénique",
      entretien: "Lavage doux à la main, séchage à l'air libre",
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
  ];

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function readStorage(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      window.localStorage.setItem(key, value);
      return true;
    } catch (error) {
      return false;
    }
  }

  function removeStorage(key) {
    try {
      window.localStorage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  }

  function normalizeProduct(product, index) {
    const clean = product && typeof product === "object" ? product : {};
    const photos = Array.isArray(clean.photos)
      ? clean.photos.filter(function (photo) {
        return typeof photo === "string" && photo.trim() !== "";
      })
      : [];

    return {
      id: String(clean.id || "peluche-" + (index + 1)),
      nom: String(clean.nom || "Nouvelle peluche"),
      prix: Number(clean.prix) || 0,
      taille: String(clean.taille || "Petit modèle"),
      dimensions: String(clean.dimensions || ""),
      statut: ["disponible", "commande", "adoptee"].includes(clean.statut) ? clean.statut : "disponible",
      description: String(clean.description || ""),
      matieres: String(clean.matieres || ""),
      entretien: String(clean.entretien || ""),
      delai: String(clean.delai || ""),
      vintedUrl: String(clean.vintedUrl || ""),
      photos: photos
    };
  }

  function normalizeProducts(products) {
    if (!Array.isArray(products)) return clone(defaultProducts);
    return products.map(normalizeProduct);
  }

  function loadProducts() {
    const raw = readStorage(PRODUCTS_STORAGE_KEY);
    if (!raw) return clone(defaultProducts);

    try {
      const parsed = JSON.parse(raw);
      return normalizeProducts(parsed);
    } catch (error) {
      return clone(defaultProducts);
    }
  }

  function saveProducts(products) {
    return writeStorage(PRODUCTS_STORAGE_KEY, JSON.stringify(normalizeProducts(products)));
  }

  function resetProducts() {
    removeStorage(PRODUCTS_STORAGE_KEY);
    return loadProducts();
  }

  function loadSettings() {
    const raw = readStorage(SETTINGS_STORAGE_KEY);
    if (!raw) return clone(defaultSettings);

    try {
      const parsed = JSON.parse(raw);
      return {
        instagramUrl: String(parsed.instagramUrl || defaultSettings.instagramUrl),
        vintedShopUrl: String(parsed.vintedShopUrl || defaultSettings.vintedShopUrl)
      };
    } catch (error) {
      return clone(defaultSettings);
    }
  }

  function saveSettings(settings) {
    const clean = settings && typeof settings === "object" ? settings : {};
    return writeStorage(SETTINGS_STORAGE_KEY, JSON.stringify({
      instagramUrl: String(clean.instagramUrl || defaultSettings.instagramUrl),
      vintedShopUrl: String(clean.vintedShopUrl || defaultSettings.vintedShopUrl)
    }));
  }

  function slugify(text) {
    return String(text || "peluche")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 48) || "peluche";
  }

  function uniqueId(base, products, currentId) {
    const root = slugify(base);
    const ids = new Set((products || [])
      .map(function (product) { return product.id; })
      .filter(function (id) { return id !== currentId; }));

    let id = root;
    let suffix = 2;
    while (ids.has(id)) {
      id = root + "-" + suffix;
      suffix += 1;
    }
    return id;
  }

  return {
    productsStorageKey: PRODUCTS_STORAGE_KEY,
    settingsStorageKey: SETTINGS_STORAGE_KEY,
    defaultProducts: clone(defaultProducts),
    defaultSettings: clone(defaultSettings),
    loadProducts: loadProducts,
    saveProducts: saveProducts,
    resetProducts: resetProducts,
    loadSettings: loadSettings,
    saveSettings: saveSettings,
    normalizeProducts: normalizeProducts,
    slugify: slugify,
    uniqueId: uniqueId
  };
}());
