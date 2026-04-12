# Manual de Identidad Visual

<div class="cover">

# Sociedad Unión Lírica Pinosense

<p class="subtitle">Manual de Identidad Visual y Marca</p>
<p class="version">Versión 1.0 — Abril 2026</p>

</div>

## 1. Introducción

Este manual recoge las directrices de identidad visual de la **Sociedad Unión Lírica Pinosense**. Su objetivo es garantizar una imagen coherente y profesional en todos los soportes: web, redes sociales, cartelería, documentos oficiales y merchandising.

## 2. Paleta de Colores

### Color principal

El color principal de la sociedad es el **Burdeos 520**, que representa la tradición, la pasión y la solemnidad de nuestra música.

| Nombre | Hexadecimal | RGB | Uso |
|---|---|---|---|
| **Primary** | `#A23139` | rgb(162, 49, 57) | Color principal, botones primarios, enlaces |
| **Primary Dark** | `#7A252C` | rgb(122, 37, 44) | Hover, encabezados, énfasis |
| **Primary Light** | `#C84852` | rgb(200, 72, 82) | Acentos, badges, indicadores |
| **Primary Soft** | `#F6E4E6` | rgb(246, 228, 230) | Fondos suaves, secciones alternas |

### Color de acento

| Nombre | Hexadecimal | RGB | Uso |
|---|---|---|---|
| **Accent Gold** | `#C8A24C` | rgb(200, 162, 76) | Detalles decorativos. **Nunca para texto** (no cumple contraste WCAG) |

### Colores neutros

| Nombre | Hexadecimal | RGB | Uso |
|---|---|---|---|
| **Ink** | `#1A1214` | rgb(26, 18, 20) | Texto principal |
| **Ink Soft** | `#4A3F42` | rgb(74, 63, 66) | Texto secundario |
| **Paper** | `#FBF9F6` | rgb(251, 249, 246) | Fondo general |
| **Surface** | `#FFFFFF` | rgb(255, 255, 255) | Cards, modales |
| **Border** | `#E8E0DC` | rgb(232, 224, 220) | Separadores, bordes |

### Colores funcionales

| Nombre | Hexadecimal | RGB | Uso |
|---|---|---|---|
| **Success** | `#2E7D4F` | rgb(46, 125, 79) | Estados correctos |
| **Warning** | `#B8862A` | rgb(184, 134, 42) | Avisos |
| **Error** | `#9A1B1B` | rgb(154, 27, 27) | Errores |

### Reglas de contraste

- **#A23139 sobre blanco**: ratio ≈ 6.5:1 ✓ (cumple WCAG AA texto normal y grande)
- **Blanco sobre #A23139**: ratio ≈ 6.5:1 ✓
- **#C8A24C (oro) sobre blanco**: ratio ≈ 2.5:1 ✗ — **Solo para decoración, NUNCA para texto**

## 3. Tipografía

### Fuente de encabezados: Playfair Display

- **Familia**: Playfair Display
- **Pesos utilizados**: Bold (700) y Black (900)
- **Uso**: Títulos (H1, H2), nombre de la sociedad, textos destacados
- **Origen**: Google Fonts (self-hosted via Fontsource)

### Fuente de cuerpo: Inter

- **Familia**: Inter
- **Pesos utilizados**: Regular (400), Medium (500), Semibold (600), Bold (700)
- **Uso**: Párrafos, navegación, botones, metadatos
- **Origen**: Google Fonts (self-hosted via Fontsource)

### Escala tipográfica

Escala modular **Major Third (1.25)**:

| Token | Tamaño | Uso |
|---|---|---|
| `--text-xs` | 14px / 0.875rem | Metadatos, badges, pies |
| `--text-sm` | 16px / 1rem | **Texto base** (párrafos) |
| `--text-md` | 20px / 1.25rem | Subtítulos, intro |
| `--text-lg` | 25px / 1.5625rem | H4 |
| `--text-xl` | 31px / 1.9375rem | H3 |
| `--text-2xl` | 39px / 2.4375rem | H2 |
| `--text-3xl` | 49px / 3.0625rem | H1 |
| `--text-4xl` | 61px / 3.8125rem | H1 hero (desktop) |

### Interlineado

| Token | Valor | Uso |
|---|---|---|
| `--leading-tight` | 1.2 | Encabezados |
| `--leading-normal` | 1.6 | Texto de cuerpo |
| `--leading-relaxed` | 1.8 | Contenido largo (prose) |

## 4. Espaciado y bordes

### Sistema de espaciado (base 4px)

| Token | Valor | Ejemplo de uso |
|---|---|---|
| `--space-1` | 4px | Micro-separaciones |
| `--space-2` | 8px | Padding botones interno |
| `--space-3` | 12px | Gaps pequeños |
| `--space-4` | 16px | Padding general |
| `--space-6` | 24px | Gaps de grid |
| `--space-8` | 32px | Separación entre secciones |
| `--space-12` | 48px | Padding de secciones |
| `--space-16` | 64px | Secciones desktop |
| `--space-20` | 80px | Espaciado extra |
| `--space-24` | 96px | Hero padding |

### Bordes redondeados

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 4px | Inputs, tags |
| `--radius-md` | 8px | Botones, tarjetas pequeñas |
| `--radius-lg` | 16px | Cards, secciones |
| `--radius-full` | 9999px | Píldoras, avatares |

### Sombras

| Token | Valor |
|---|---|
| `--shadow-sm` | `0 1px 2px rgba(26,18,20,0.06)` |
| `--shadow-md` | `0 4px 12px rgba(26,18,20,0.08)` |
| `--shadow-lg` | `0 8px 24px rgba(26,18,20,0.12)` |

## 5. Uso correcto del color principal

### Correcto ✓

- Fondo burdeos con texto blanco para botones primarios y cabeceras
- Texto burdeos sobre fondo blanco o crema para enlaces y títulos
- Fondo `Primary Soft` (#F6E4E6) para secciones alternas

### Incorrecto ✗

- Texto burdeos sobre fondo oscuro (falta contraste)
- Oro (#C8A24C) como color de texto (no cumple WCAG)
- Más de un color primario en la misma sección (confusión visual)
- Gradientes con el burdeos (pierde identidad)

## 6. Componentes visuales

### Botones

- **Primario**: fondo `#A23139`, texto blanco, radio `8px`, padding `12px 24px`
- **Outline**: borde `2px solid #A23139`, texto burdeos, fondo transparente
- **Hover**: primario oscurece a `#7A252C`, outline rellena con `#A23139`

### Cards

- Fondo blanco, borde `1px solid #E8E0DC`, radio `16px`, sombra `shadow-sm`
- Hover: sombra `shadow-md`, sin cambio de color

### Header

- Fondo blanco, borde inferior `1px solid #E8E0DC`, sticky
- Logo en `Playfair Display Bold`, color `#7A252C`

### Footer

- Fondo `#7A252C` (Primary Dark), texto blanco/soft
- Enlaces en `#F6E4E6`

## 7. Imágenes

- Estilo fotográfico: preferiblemente fotografías naturales del grupo, ensayos y actuaciones
- Formato web: optimizar a WebP/AVIF mediante Astro
- Tamaño máximo recomendado al subir: 2MB, mínimo 1200px de ancho
- Alt text obligatorio y descriptivo en todas las imágenes

---

*Documento generado automáticamente. Última actualización: Abril 2026.*
