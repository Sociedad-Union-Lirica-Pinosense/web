# Manual de Uso y Actualización

<div class="cover">

# Sociedad Unión Lírica Pinosense

<p class="subtitle">Manual de Uso y Actualización de la Página Web</p>
<p class="version">Versión 1.0 — Abril 2026</p>

</div>

## 1. Introducción

Este manual explica cómo actualizar la página web de la sociedad **sin necesidad de conocimientos de programación**. Todas las operaciones se realizan desde la web de GitHub (github.com) usando solo el navegador.

### Glosario mínimo

| Término | Significado |
|---|---|
| **Repositorio** | La carpeta del proyecto en GitHub donde vive todo el código de la web |
| **Commit** | Guardar un cambio. Cada vez que editas un archivo, haces un "commit" para que se guarde |
| **Markdown (.md)** | Formato de texto simple para escribir contenido. Se usa `**negrita**`, `# Título`, etc. |
| **Build** | El proceso automático que convierte los archivos del repositorio en la web final |
| **Deploy** | Publicar la web. Ocurre automáticamente cuando guardas cambios en GitHub |

> **Importante**: Cada vez que haces un commit en la rama `main`, la web se reconstruye y publica automáticamente en unos 2-3 minutos.

## 2. Cómo añadir una noticia

Las noticias son archivos Markdown que viven en la carpeta `src/content/news/`.

### Paso a paso

1. Ve a github.com y entra en el repositorio de la web
2. Navega a la carpeta `src/content/news/es/`
3. Haz clic en el botón **"Add file"** → **"Create new file"**
4. Escribe el nombre del archivo, por ejemplo: `concierto-navidad-2026.md`
5. Copia y pega esta plantilla en el editor:

```markdown
---
title: "Concierto de Navidad 2026"
date: 2026-12-20
excerpt: "La banda ofrece su tradicional concierto de Navidad en el Auditorio Municipal."
author: "S.U.L. Pinosense"
tags: ["concierto", "navidad"]
draft: false
lang: es
---

## Concierto de Navidad

Aquí va el contenido completo de la noticia.

Puedes usar **negrita**, *cursiva* y [enlaces](https://ejemplo.com).
```

6. Modifica el título, fecha, resumen y contenido
7. Abajo, en "Commit changes", escribe un mensaje como "Añadir noticia concierto Navidad"
8. Haz clic en **"Commit changes"**

### Para otros idiomas

- Valenciano: crea el archivo en `src/content/news/va/` con `lang: va`
- Inglés: crea el archivo en `src/content/news/en/` con `lang: en`

### Campos importantes

| Campo | Obligatorio | Descripción |
|---|---|---|
| `title` | Sí | Título de la noticia |
| `date` | Sí | Fecha en formato AAAA-MM-DD |
| `excerpt` | Sí | Resumen corto (1-2 frases) |
| `author` | No | Nombre del autor |
| `tags` | No | Etiquetas entre corchetes |
| `draft` | Sí | `false` para publicar, `true` para borrador |
| `lang` | Sí | `es`, `va` o `en` |
| `coverImage` | No | Ruta a imagen de portada (ej: `/web/images/noticias/foto.jpg`) |

## 3. Cómo subir una foto

### Paso a paso

1. Ve al repositorio en GitHub
2. Navega a `public/images/` (elige la subcarpeta: `banda/`, `escuela/`, `sponsors/`)
3. Haz clic en **"Add file"** → **"Upload files"**
4. Arrastra la imagen desde tu ordenador o haz clic en "choose your files"
5. Escribe un mensaje de commit como "Subir foto concierto Navidad"
6. Haz clic en **"Commit changes"**

### Consejos para las fotos

- **Tamaño máximo recomendado**: 2 MB por foto
- **Resolución mínima**: 1200px de ancho para fotos de hero
- **Formatos aceptados**: JPG, PNG, WebP
- **Nombres de archivo**: usa minúsculas y guiones, sin espacios ni acentos (ej: `concierto-navidad-2026.jpg`)

> **¡ATENCIÓN!** Si subes fotos donde aparecen menores de edad, asegúrate de tener el consentimiento firmado de sus padres o tutores (LOPD/RGPD).

## 4. Cómo cambiar teléfono, email o dirección

Todos los datos de contacto están centralizados en **un solo archivo**: `src/config/site.ts`

### Paso a paso

1. Ve al repositorio en GitHub
2. Navega a `src/config/site.ts`
3. Haz clic en el icono del lápiz (editar) arriba a la derecha
4. Busca el dato que quieres cambiar. Por ejemplo, para el teléfono busca:

```
phoneBand: '+34 965 47 XX XX',
```

5. Cambia solo el texto entre comillas simples. **No toques nada más**
6. Haz commit con un mensaje como "Actualizar teléfono banda"

### Datos que puedes cambiar en este archivo

| Dato | Línea a buscar | Ejemplo |
|---|---|---|
| Email | `email:` | `'info@sulpinosense.es'` |
| Teléfono banda | `phoneBand:` | `'+34 965 47 12 34'` |
| Teléfono escuela | `phoneSchool:` | `'+34 965 47 56 78'` |
| Dirección | `street:` | `'Calle Mayor, 1'` |
| Código postal | `postalCode:` | `'03650'` |
| Director | `director:` | `'Nombre del Director'` |
| Número de músicos | `musicians:` | `'60'` |
| Horario secretaría | `secretariatBand:` | Ver las tres líneas (es, va, en) |

> **Regla de oro**: cambia solo lo que hay entre comillas. Si borras una coma, una comilla o un punto y coma, la web se romperá. Si eso pasa, no te preocupes: puedes revertir el cambio (ver sección 8).

## 5. Cómo añadir un patrocinador

Los patrocinadores también son archivos Markdown.

### Paso a paso

1. Sube el logo del patrocinador a `public/images/sponsors/` (ver sección 3)
2. Ve a `src/content/sponsors/`
3. Crea un nuevo archivo con el nombre del patrocinador, por ejemplo: `empresa-ejemplo.md`
4. Pega esta plantilla:

```markdown
---
name: "Empresa Ejemplo S.L."
logo: "/web/images/sponsors/empresa-ejemplo.png"
url: "https://www.empresa-ejemplo.com"
alt: "Logo de Empresa Ejemplo"
weight: 5
active: true
---
```

5. Modifica los datos:
   - `name`: nombre del patrocinador
   - `logo`: la ruta de la imagen que subiste (siempre empieza por `/web/images/sponsors/`)
   - `url`: web del patrocinador
   - `alt`: descripción de la imagen para accesibilidad
   - `weight`: número para ordenar (mayor = aparece primero)
   - `active`: `true` para mostrar, `false` para ocultar temporalmente

6. Haz commit

## 6. Cómo actualizar el horario semanal

El horario de clases está en `src/content/schedule/semanal.json`.

### Paso a paso

1. Ve a `src/content/schedule/semanal.json`
2. Edita el archivo (icono del lápiz)
3. Modifica las clases en cada franja horaria:

```json
{
  "time": "17:00 - 18:00",
  "monday": "Lenguaje Musical 1",
  "tuesday": "Clarinete / Saxofón",
  "wednesday": "Lenguaje Musical 2",
  "thursday": "Flauta / Oboe",
  "friday": "Lenguaje Musical 3"
}
```

4. Para dejar un hueco vacío, usa comillas vacías: `""`
5. Haz commit

> **Cuidado**: el formato JSON es estricto. Cada línea debe mantener las comillas, las comas y las llaves exactamente como están. Si algo falla, revierte el cambio.

## 7. Cómo reemplazar los PDFs

Los PDFs de normativa y calendario están en `public/pdfs/`.

### Paso a paso

1. Ve a `public/pdfs/`
2. Haz clic en el PDF que quieres reemplazar (por ejemplo, `normativa-general.pdf`)
3. Haz clic en el icono de la papelera para eliminarlo
4. Haz commit para confirmar la eliminación
5. Ahora ve de nuevo a `public/pdfs/`
6. Haz clic en **"Add file"** → **"Upload files"**
7. Sube el nuevo PDF **con el mismo nombre exacto** que el anterior
8. Haz commit

> **Importante**: el nombre del archivo debe ser exactamente el mismo. Los nombres son:
> - `normativa-general.pdf`
> - `normativa-interna.pdf`
> - `calendario-escolar.pdf`

## 8. Cómo revertir un cambio si algo se rompe

Si después de hacer un cambio la web deja de funcionar:

### Paso a paso

1. Ve a la pestaña **"Actions"** del repositorio
2. Si ves un workflow con un ✗ rojo, significa que el build ha fallado
3. Ve a la pestaña **"Commits"** (o haz clic en el número de commits)
4. Busca tu último commit (el que probablemente causó el problema)
5. Haz clic en el commit
6. Arriba a la derecha verás un botón **"Revert"**
7. Haz clic en "Revert" y confirma
8. Esto creará un nuevo commit que deshace los cambios
9. Espera 2-3 minutos a que se reconstruya la web

### Si no encuentras el botón Revert

Contacta con el responsable técnico de la web. **No intentes arreglar el código manualmente** si no estás seguro de lo que haces.

## 9. Consejos generales

- **No edites archivos `.astro`, `.ts`, `.css` o `.json` fuera de los mencionados en este manual** salvo que sepas lo que haces
- **Haz un solo cambio cada vez** y espera a que la web se reconstruya antes de hacer otro cambio
- **Comprueba que el build ha funcionado** yendo a la pestaña "Actions" del repositorio
- **Las fotos de menores requieren consentimiento firmado** antes de ser publicadas
- **Los cambios tardan 2-3 minutos** en verse reflejados en la web

## 10. Referencia rápida de rutas

| Qué quiero hacer | Archivo/Carpeta |
|---|---|
| Añadir noticia (español) | `src/content/news/es/nombre.md` |
| Añadir noticia (valenciano) | `src/content/news/va/nombre.md` |
| Añadir noticia (inglés) | `src/content/news/en/nombre.md` |
| Subir foto de la banda | `public/images/banda/` |
| Subir foto de la escuela | `public/images/escuela/` |
| Subir logo de sponsor | `public/images/sponsors/` |
| Añadir patrocinador | `src/content/sponsors/nombre.md` |
| Cambiar datos de contacto | `src/config/site.ts` |
| Cambiar horario de clases | `src/content/schedule/semanal.json` |
| Reemplazar PDF normativa | `public/pdfs/normativa-general.pdf` |
| Reemplazar calendario | `public/pdfs/calendario-escolar.pdf` |

---

*Documento generado automáticamente. Última actualización: Abril 2026.*
