// ============================================================
// ARCHIVO DE CONFIGURACIÓN PRINCIPAL
// Solo modifica los valores entre comillas. No toques nada más.
// Si tienes dudas, consulta docs/manual-uso.pdf
// ============================================================

export const site = {
  /** Nombre completo de la sociedad */
  name: 'Sociedad Unión Lírica Pinosense',
  /** Nombre corto para UI */
  shortName: 'S.U.L. Pinosense',
  /** URL del sitio desplegado (sin barra final) */
  url: 'https://sociedad-union-lirica-pinosense.github.io',
  /** Base path del sitio en GitHub Pages */
  base: '/web',
  /** Idioma por defecto */
  defaultLocale: 'es' as const,
  /** Idiomas disponibles */
  locales: ['es', 'va', 'en'] as const,

  // ────────────────────────────────────────────
  // CONTACTO — Cambia estos datos cuando sea necesario
  // ────────────────────────────────────────────
  contact: {
    email: 'info@unionliricapinosense.com',
    phoneBand: '+34 965 47 87 20',
    phoneSchool: '+34 965 47 87 20',
    address: {
      street: 'Calle Novelda, 1',
      city: 'Pinoso',
      province: 'Alicante',
      postalCode: '03650',
      country: 'España',
    },
    googleMapsEmbedUrl:
      'https://maps.google.com/maps?q=Calle+Novelda+1,+03650+Pinoso,+Alicante&t=&z=17&ie=UTF8&iwloc=&output=embed',
    googleMapsLinkUrl: 'https://maps.google.com/?q=Calle+Novelda+1,+03650+Pinoso,+Alicante',
  },

  // ────────────────────────────────────────────
  // HORARIOS DE SECRETARÍA
  // ────────────────────────────────────────────
  hours: {
    secretariatBand: {
      es: 'Lunes a viernes de 16:00 a 20:00',
      va: 'Dilluns a divendres de 16:00 a 20:00',
      en: 'Monday to Friday, 4:00 PM – 8:00 PM',
    },
    secretariatSchool: {
      es: 'Lunes a viernes de 16:00 a 20:00',
      va: 'Dilluns a divendres de 16:00 a 20:00',
      en: 'Monday to Friday, 4:00 PM – 8:00 PM',
    },
  },

  // ────────────────────────────────────────────
  // REDES SOCIALES (deja vacío '' si no aplica)
  // ────────────────────────────────────────────
  social: {
    facebook: 'https://www.facebook.com/sociedadunionlirica.pinosense',
    instagram: 'https://www.instagram.com/la.sulp?igsh=MTMyMzg1aGphZ3NqNA==',
    youtube: 'https://youtube.com/@lasulp?si=Zmq8Wn2bLf_rFzL8',
  },

  // ────────────────────────────────────────────
  // INFORMACIÓN DE LA BANDA
  // ────────────────────────────────────────────
  band: {
    founded: '1890',
    director: 'Alberto',
    musicians: '60',
  },

  // ────────────────────────────────────────────
  // PALETA DE COLORES Y FUENTES
  // (si cambias aquí, cambia también en src/styles/tokens.css)
  // ────────────────────────────────────────────
  brand: {
    colors: {
      primary: '#A23139',
      primaryDark: '#7A252C',
      primaryLight: '#C84852',
      primarySoft: '#F6E4E6',
      accentGold: '#C8A24C',
      ink: '#1A1214',
      inkSoft: '#4A3F42',
      paper: '#FBF9F6',
      surface: '#FFFFFF',
      border: '#E8E0DC',
    },
    fonts: {
      display: 'Playfair Display',
      body: 'Inter',
    },
  },
} as const;

export type Locale = (typeof site.locales)[number];
