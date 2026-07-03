/* ==================================================================
   L'ATELIER TOUT DOUX — Logique du site public
   ================================================================== */

(function () {
  "use strict";

  const catalogue = window.AtelierCatalogue;
  if (!catalogue) return;

  const settings = catalogue.loadSettings();
  const products = catalogue.loadProducts();
  let filtreActif = "tous";

  const imageSecours = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Crect width='800' height='800' fill='%23F2E9DC'/%3E%3Cpath d='M220 520c45-82 88-123 129-123 24 0 45 11 64 32 34-77 75-116 123-116 68 0 123 68 164 204H220Z' fill='%23E0CFB8'/%3E%3Ccircle cx='315' cy='300' r='48' fill='%23EBDCC3'/%3E%3Ctext x='400' y='620' text-anchor='middle' font-family='Nunito,Arial,sans-serif' font-size='46' fill='%235F4636'%3EPhoto à ajouter%3C/text%3E%3C/svg%3E";

  function texte(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function photosProduit(product) {
    return Array.isArray(product.photos) && product.photos.length > 0
      ? product.photos
      : [imageSecours];
  }

  function prixProduit(product) {
    return Number(product.prix || 0).toLocaleString("fr-FR", {
      maximumFractionDigits: 2
    });
  }

  // Renvoie le lien Vinted de la peluche s'il est valable, sinon la
  // boutique Vinted générale. Couvre les cas où le lien est vide,
  // mal recopié (https:// oublié) ou n'est pas une adresse Vinted.
  function lienVinted(product) {
    const brut = (product.vintedUrl || "").trim();
    if (brut === "") return settings.vintedShopUrl;

    // On complète l'adresse si le https:// a été oublié.
    let url = brut;
    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url.replace(/^\/+/, "");
    }

    // Le lien doit bien mener vers Vinted, sinon retour à la boutique.
    try {
      const hote = new URL(url).hostname.toLowerCase();
      if (!hote.includes("vinted.")) return settings.vintedShopUrl;
    } catch (e) {
      return settings.vintedShopUrl;
    }

    return url;
  }

  function actionProduit(product) {
    if (product.statut === "disponible") {
      return { label: "Je l'adopte !", url: lienVinted(product) };
    }

    if (product.statut === "commande") {
      return { label: "Me contacter sur Instagram", url: settings.instagramUrl };
    }

    return { label: "Demander une création similaire", url: settings.instagramUrl };
  }

  function badgeProduit(statut) {
    if (statut === "disponible") return { classe: "badge-disponible", label: "Disponible" };
    if (statut === "commande") return { classe: "badge-commande", label: "Sur commande" };
    return { classe: "badge-adoptee", label: "Adoptée" };
  }

  function carteHTML(product) {
    const action = actionProduit(product);
    const badge = badgeProduit(product.statut);
    const photos = photosProduit(product);
    const estAdoptee = product.statut === "adoptee";

    return (
      '<li class="carte reveal' + (estAdoptee ? " carte-adoptee" : "") + '">' +
        '<button type="button" class="carte-zone" data-id="' + texte(product.id) + '" aria-haspopup="dialog">' +
          '<span class="carte-photo">' +
            '<img src="' + texte(photos[0]) + '" alt="Peluche ' + texte(product.nom) + ' au crochet" loading="lazy">' +
            '<span class="badge ' + badge.classe + '">' + badge.label + "</span>" +
          "</span>" +
          '<span class="carte-corps">' +
            '<span class="carte-entete">' +
              '<span class="carte-nom">' + texte(product.nom) + "</span>" +
              '<span class="etiquette-prix">' + prixProduit(product) + "&nbsp;€</span>" +
            "</span>" +
            '<span class="carte-taille">' + texte(product.taille) + " · " + texte(product.dimensions) + "</span>" +
            '<span class="carte-description">' + texte(product.description) + "</span>" +
          "</span>" +
        "</button>" +
        '<div class="carte-pied">' +
          '<a class="btn ' + (product.statut === "disponible" ? "btn-plein" : "btn-contour") + '" ' +
            'href="' + texte(action.url) + '" target="_blank" rel="noopener">' + texte(action.label) + "</a>" +
        "</div>" +
      "</li>"
    );
  }

  const grilleBoutique = document.getElementById("grille-boutique");
  const grilleAdoptees = document.getElementById("grille-adoptees");
  const messageVide = document.getElementById("boutique-vide");
  const boutonsFiltre = document.querySelectorAll(".filtre");

  function afficherBoutique(filtre) {
    if (!grilleBoutique || !messageVide) return;

    filtreActif = filtre;
    let liste = products.filter(function (product) {
      return product.statut !== "adoptee";
    });

    if (filtre === "disponible") {
      liste = liste.filter(function (product) {
        return product.statut === "disponible";
      });
    } else if (filtre === "commande") {
      liste = liste.filter(function (product) {
        return product.statut === "commande";
      });
    }

    grilleBoutique.innerHTML = liste.map(carteHTML).join("");
    messageVide.hidden = liste.length > 0;
    observerReveals(grilleBoutique);
  }

  function afficherAdoptees() {
    const section = document.getElementById("adoptees");
    if (!grilleAdoptees || !section) return;

    const adoptees = products.filter(function (product) {
      return product.statut === "adoptee";
    });

    grilleAdoptees.innerHTML = adoptees.map(carteHTML).join("");
    section.hidden = adoptees.length === 0;
    observerReveals(grilleAdoptees);
  }

  boutonsFiltre.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
      boutonsFiltre.forEach(function (autreBouton) {
        autreBouton.classList.remove("actif");
        autreBouton.setAttribute("aria-pressed", "false");
      });
      bouton.classList.add("actif");
      bouton.setAttribute("aria-pressed", "true");
      afficherBoutique(bouton.dataset.filtre);
    });
  });

  const modale = document.getElementById("modale");
  const modaleBoite = modale ? modale.querySelector(".modale-boite") : null;
  const modaleContenu = document.getElementById("modale-contenu");
  const boutonFermer = modale ? modale.querySelector(".modale-fermer") : null;
  let elementAvantModale = null;

  // Agrandissement plein écran d'une photo
  const zoom = document.getElementById("zoom");
  const zoomImage = document.getElementById("zoom-image");
  const zoomFermer = zoom ? zoom.querySelector(".zoom-fermer") : null;
  let photoAvantZoom = null;

  function ouvrirZoom(src, alt) {
    if (!zoom || !zoomImage) return;
    photoAvantZoom = document.activeElement;
    zoomImage.src = src;
    zoomImage.alt = alt || "";
    zoom.hidden = false;
    if (zoomFermer) zoomFermer.focus();
  }

  function fermerZoom() {
    if (!zoom) return;
    zoom.hidden = true;
    zoomImage.removeAttribute("src");
    if (photoAvantZoom) {
      photoAvantZoom.focus();
      photoAvantZoom = null;
    }
  }

  function ficheHTML(product) {
    const action = actionProduit(product);
    const badge = badgeProduit(product.statut);
    const photos = photosProduit(product);

    const vignettes = photos.map(function (src, index) {
      return (
        '<button type="button" class="vignette' + (index === 0 ? " active" : "") + '" data-photo="' + texte(src) + '" ' +
          'aria-label="Voir la photo ' + (index + 1) + '">' +
          '<img src="' + texte(src) + '" alt="">' +
        "</button>"
      );
    }).join("");

    const ligneDelai = product.delai && product.delai.trim() !== ""
      ? "<dt>Délai de confection</dt><dd>" + texte(product.delai) + "</dd>"
      : "";

    // Crédit du modèle (ex : patron d'une créatrice sur Instagram)
    const ligneCredit = product.credit && product.credit.trim() !== ""
      ? '<dt>Modèle</dt><dd>D\'après <a href="https://www.instagram.com/' + texte(product.credit) +
        '/" target="_blank" rel="noopener">@' + texte(product.credit) + "</a></dd>"
      : "";

    return (
      '<div class="modale-galerie">' +
        '<img class="modale-photo-principale" src="' + texte(photos[0]) + '" alt="Peluche ' + texte(product.nom) + ' au crochet" title="Cliquez pour agrandir">' +
        '<span class="zoom-hint" aria-hidden="true">🔍 Agrandir</span>' +
        (photos.length > 1
          ? '<div class="modale-vignettes" role="group" aria-label="Photos de la peluche">' + vignettes + "</div>"
          : "") +
      "</div>" +
      '<div class="modale-infos">' +
        '<span class="badge badge-fiche ' + badge.classe + '">' + badge.label + "</span>" +
        '<h3 id="modale-titre">' + texte(product.nom) + "</h3>" +
        '<p class="modale-prix">' + prixProduit(product) + "&nbsp;€</p>" +
        '<p class="modale-taille">' + texte(product.taille) + " · " + texte(product.dimensions) + "</p>" +
        '<p class="modale-description">' + texte(product.description) + "</p>" +
        '<dl class="modale-details">' +
          "<div><dt>Matières</dt><dd>" + texte(product.matieres) + "</dd></div>" +
          "<div><dt>Entretien</dt><dd>" + texte(product.entretien) + "</dd></div>" +
          (ligneDelai ? "<div>" + ligneDelai + "</div>" : "") +
          (ligneCredit ? "<div>" + ligneCredit + "</div>" : "") +
        "</dl>" +
        '<a class="btn btn-plein" href="' + texte(action.url) + '" target="_blank" rel="noopener">' + texte(action.label) + "</a>" +
      "</div>"
    );
  }

  function ouvrirModale(id) {
    if (!modale || !modaleContenu || !modaleBoite || !boutonFermer) return;

    const product = products.find(function (item) {
      return item.id === id;
    });
    if (!product) return;

    elementAvantModale = document.activeElement;
    modaleContenu.innerHTML = ficheHTML(product);
    modale.hidden = false;
    document.body.style.overflow = "hidden";
    modaleBoite.scrollTop = 0;
    boutonFermer.focus();
  }

  function fermerModale() {
    if (!modale) return;

    modale.hidden = true;
    document.body.style.overflow = "";
    if (elementAvantModale) {
      elementAvantModale.focus();
      elementAvantModale = null;
    }
  }

  document.addEventListener("click", function (event) {
    const zone = event.target.closest(".carte-zone");
    if (zone) {
      ouvrirModale(zone.dataset.id);
      return;
    }

    const vignette = event.target.closest(".vignette");
    if (vignette && modale) {
      const photoPrincipale = modale.querySelector(".modale-photo-principale");
      if (!photoPrincipale) return;
      photoPrincipale.src = vignette.dataset.photo;
      modale.querySelectorAll(".vignette").forEach(function (bouton) {
        bouton.classList.remove("active");
      });
      vignette.classList.add("active");
      return;
    }

    // Clic sur la grande photo de la fiche → agrandissement plein écran
    const photoPrincipale = event.target.closest(".modale-photo-principale");
    if (photoPrincipale) {
      ouvrirZoom(photoPrincipale.src, photoPrincipale.alt);
      return;
    }

    // Fermeture du zoom : clic n'importe où dessus (fond, image ou croix)
    if (zoom && !zoom.hidden && zoom.contains(event.target)) {
      fermerZoom();
    }
  });

  if (boutonFermer && modale) {
    boutonFermer.addEventListener("click", fermerModale);
    modale.addEventListener("click", function (event) {
      if (event.target === modale) fermerModale();
    });
  }

  document.addEventListener("keydown", function (event) {
    // L'agrandissement photo est au-dessus de la fiche : il capte le clavier en premier.
    if (zoom && !zoom.hidden) {
      if (event.key === "Escape") {
        fermerZoom();
      } else if (event.key === "Tab") {
        event.preventDefault();
        if (zoomFermer) zoomFermer.focus();
      }
      return;
    }

    if (!modale || modale.hidden) return;

    if (event.key === "Escape") {
      fermerModale();
      return;
    }

    if (event.key === "Tab") {
      const focusables = modale.querySelectorAll("button, a[href]");
      if (focusables.length === 0) return;

      const premier = focusables[0];
      const dernier = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === premier) {
        event.preventDefault();
        dernier.focus();
      } else if (!event.shiftKey && document.activeElement === dernier) {
        event.preventDefault();
        premier.focus();
      }
    }
  });

  const burger = document.querySelector(".burger");
  const menu = document.getElementById("menu-principal");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      const ouvert = menu.classList.toggle("ouvert");
      burger.setAttribute("aria-expanded", ouvert ? "true" : "false");
      burger.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
    });

    menu.querySelectorAll("a").forEach(function (lien) {
      lien.addEventListener("click", function () {
        menu.classList.remove("ouvert");
        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "Ouvrir le menu");
      });
    });
  }

  function appliquerLiens() {
    document.querySelectorAll(".lien-instagram").forEach(function (lien) {
      lien.href = settings.instagramUrl;
    });

    document.querySelectorAll(".lien-vinted").forEach(function (lien) {
      lien.href = settings.vintedShopUrl;
    });
  }

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
    cibles.forEach(function (element) {
      if (observateur) {
        observateur.observe(element);
      } else {
        element.classList.add("visible");
      }
    });
  }

  afficherBoutique("tous");
  afficherAdoptees();
  appliquerLiens();
  observerReveals(document);

  const annee = document.getElementById("annee");
  if (annee) annee.textContent = new Date().getFullYear();
}());
