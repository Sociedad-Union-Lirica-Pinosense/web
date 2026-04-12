# Sociedad Unión Lírica Pinosense — Sitio Web

Sitio web oficial de la Sociedad Unión Lírica Pinosense (banda y escuela de música de Pinoso, Alicante).

## Stack

- [Astro 5](https://astro.build) — generador de sitios estáticos
- TypeScript + Content Collections (Zod)
- Trilingüe: Castellano, Valenciano, English
- GitHub Pages + GitHub Actions

## Desarrollo local

```bash
npm install
npm run dev      # Servidor de desarrollo en http://localhost:4321
npm run build    # Build de producción
npm run preview  # Preview del build
```

## Estructura

```
src/
  config/site.ts       # Variables centralizadas (contacto, colores, etc.)
  content/             # Contenido editable (noticias, cursos, sponsors)
  components/          # Componentes reutilizables
  layouts/             # Plantillas de página
  pages/               # Rutas del sitio
  styles/              # Tokens CSS y estilos globales
  i18n/                # Traducciones UI
public/
  images/              # Imágenes estáticas
  pdfs/                # PDFs de normativa y calendario
  docs/                # Manuales PDF generados
docs/src/              # Fuentes Markdown de los manuales
```

## Documentación

- **Manual de Uso**: `public/docs/manual-uso.pdf` — Guía para actualizar la web sin conocimientos técnicos
- **Manual de Marca**: `public/docs/manual-marca.pdf` — Paleta de colores, fuentes y directrices visuales

## Deploy

El sitio se despliega automáticamente en GitHub Pages cuando se hace push a `main`.
