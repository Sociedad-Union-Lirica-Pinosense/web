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
    email: 'info@sulpinosense.es',
    phoneBand: '+34 965 47 XX XX',
    phoneSchool: '+34 965 47 XX XX',
    address: {
      street: 'Calle Mayor, 1',
      city: 'Pinoso',
      province: 'Alicante',
      postalCode: '03650',
      country: 'España',
    },
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3130.0!2d-1.042!3d38.401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPinoso!5e0!3m2!1ses!2ses!4v1',
    googleMapsLinkUrl: 'https://maps.google.com/?q=Pinoso+Alicante+Sociedad+Musical',
  },

  // ────────────────────────────────────────────
  // HORARIOS DE SECRETARÍA
  // ────────────────────────────────────────────
  hours: {
    secretariatBand: {
      es: 'Lunes a viernes de 18:00 a 20:00',
      va: 'Dilluns a divendres de 18:00 a 20:00',
      en: 'Monday to Friday, 6:00 PM – 8:00 PM',
    },
    secretariatSchool: {
      es: 'Lunes a viernes de 17:00 a 20:00',
      va: 'Dilluns a divendres de 17:00 a 20:00',
      en: 'Monday to Friday, 5:00 PM – 8:00 PM',
    },
  },

  // ────────────────────────────────────────────
  // REDES SOCIALES (deja vacío '' si no aplica)
  // ────────────────────────────────────────────
  social: {
    facebook: 'https://facebook.com/sulpinosense',
    instagram: 'https://instagram.com/sulpinosense',
    youtube: '',
  },

  // ────────────────────────────────────────────
  // INFORMACIÓN DE LA BANDA
  // ────────────────────────────────────────────
  band: {
    founded: '1890',
    director: 'Nombre del Director',
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
