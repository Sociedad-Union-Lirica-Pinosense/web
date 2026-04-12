import { ui, type UIKey } from './ui';
import { site, type Locale } from '../config/site';

/** Extrae el idioma de una URL pathname */
export function getLangFromUrl(url: URL): Locale {
  const segments = url.pathname.replace(site.base, '').split('/').filter(Boolean);
  const first = segments[0];
  if (first && site.locales.includes(first as Locale)) {
    return first as Locale;
  }
  return site.defaultLocale;
}

/** Devuelve una función t() para traducir claves de UI */
export function useTranslations(lang: Locale) {
  return function t(key: UIKey, params?: Record<string, string>): string {
    let text = (ui[lang]?.[key] ?? ui[site.defaultLocale][key] ?? key) as string;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        text = text.replace(`{${k}}`, v);
      }
    }
    return text;
  };
}

/** Genera la URL equivalente en otro idioma */
export function getLocalizedPath(currentPath: string, targetLang: Locale): string {
  const cleanPath = currentPath.replace(site.base, '');
  const segments = cleanPath.split('/').filter(Boolean);

  // Quitar prefijo de idioma actual si existe
  if (segments[0] && site.locales.includes(segments[0] as Locale)) {
    segments.shift();
  }

  // Mapeo de rutas por idioma
  const routeMap: Record<string, Record<Locale, string>> = {
    '': { es: '', va: '', en: '' },
    'escuela': { es: 'escuela', va: 'escola', en: 'school' },
    'escola': { es: 'escuela', va: 'escola', en: 'school' },
    'school': { es: 'escuela', va: 'escola', en: 'school' },
    'noticias': { es: 'noticias', va: 'noticies', en: 'news' },
    'noticies': { es: 'noticias', va: 'noticies', en: 'news' },
    'news': { es: 'noticias', va: 'noticies', en: 'news' },
    'privacidad': { es: 'privacidad', va: 'privacitat', en: 'privacy' },
    'privacitat': { es: 'privacidad', va: 'privacitat', en: 'privacy' },
    'privacy': { es: 'privacidad', va: 'privacitat', en: 'privacy' },
    'hazte-socio': { es: 'hazte-socio', va: 'fes-te-soci', en: 'join-us' },
    'fes-te-soci': { es: 'hazte-socio', va: 'fes-te-soci', en: 'join-us' },
    'join-us': { es: 'hazte-socio', va: 'fes-te-soci', en: 'join-us' },
  };

  // Traducir primer segmento si existe en el mapa
  if (segments[0] && routeMap[segments[0]]) {
    segments[0] = routeMap[segments[0]][targetLang];
  }

  // Añadir prefijo de idioma si no es el por defecto
  const prefix = targetLang === site.defaultLocale ? '' : targetLang;
  const path = [prefix, ...segments].filter(Boolean).join('/');

  return `${site.base}/${path}/`;
}

/** Obtener el locale correspondiente a un código de idioma HTML */
export function getHtmlLang(lang: Locale): string {
  const map: Record<Locale, string> = {
    es: 'es',
    va: 'ca',  // Valenciano usa código ISO del catalán
    en: 'en',
  };
  return map[lang];
}
