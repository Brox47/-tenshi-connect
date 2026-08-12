const translations = {

  fr: {
    language: "Français",
    platform: "Plateforme de croissance contacts",
    title: "Le TSHC pour votre portée WhatsApp",
    description:
      "Créez votre compte gratuit, ajoutez votre numéro dans le tableau de bord, et laissez l'auto-sync construire votre réseau — pour que chaque statut touche plus de monde.",
    start: "Commencer gratuitement",
    how: "Comment ça marche",
    members: "Membres",
    countries: "190+ pays",
    updated: "Mise à jour chaque jour",
    login: "Se connecter",
    signup: "Créer un compte"
  },

  ht: {
    language: "Kreyòl",
    platform: "Platfòm pou devlope kontak",
    title: "TSHC pou ogmante portée WhatsApp ou",
    description:
      "Kreye kont ou gratis, ajoute nimewo ou nan dashboard la, epi kite auto-sync la konstwi rezo ou — pou chak status ka rive jwenn plis moun.",
    start: "Kòmanse gratis",
    how: "Kijan sa mache",
    members: "Manm",
    countries: "190+ peyi",
    updated: "Mete ajou chak jou",
    login: "Konekte",
    signup: "Kreye yon kont"
  },

  en: {
    language: "English",
    platform: "Contact growth platform",
    title: "TSHC for your WhatsApp reach",
    description:
      "Create your free account, add your number to the dashboard, and let auto-sync build your network — so every status reaches more people.",
    start: "Start for free",
    how: "How it works",
    members: "Members",
    countries: "190+ countries",
    updated: "Updated daily",
    login: "Log in",
    signup: "Create an account"
  },

  es: {
    language: "Español",
    platform: "Plataforma de crecimiento de contactos",
    title: "TSHC para aumentar tu alcance en WhatsApp",
    description:
      "Crea tu cuenta gratis, añade tu número al panel y deja que la sincronización automática construya tu red — para que cada estado llegue a más personas.",
    start: "Comenzar gratis",
    how: "Cómo funciona",
    members: "Miembros",
    countries: "190+ países",
    updated: "Actualizado diariamente",
    login: "Iniciar sesión",
    signup: "Crear una cuenta"
  }

};


function setLanguage(lang) {

  if (!translations[lang]) {
    return;
  }

  document.documentElement.lang = lang;

  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {

      const key =
        element.getAttribute("data-i18n");

      if (translations[lang][key]) {

        element.textContent =
          translations[lang][key];

      }

    });

  localStorage.setItem(
    "tenshiLanguage",
    lang
  );

}


function loadLanguage() {

  const savedLanguage =
    localStorage.getItem(
      "tenshiLanguage"
    ) || "fr";

  setLanguage(savedLanguage);

}


document.addEventListener(
  "DOMContentLoaded",
  loadLanguage
);