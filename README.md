# ROBU2 — wizytówka hurtowni spożywczej

Strona firmowa ROBU2 (Garwolin): lead B2B (telefon), marki, kosze prezentowe, SEO lokalne.

## Stack

- Astro (static) + Tailwind CSS
- Treść: `src/data/*.json`
- CMS: Sveltia pod `/admin` (git-backed; lokalnie `local_backend: true`)

## Wymagania

Node **≥ 22.12** (np. `mise use node@25`).

```bash
npm install
npm run dev
```

```bash
npm run build && npm run preview
```

## Uzupełnij przed go-live

Edytuj `src/data/site.json` (lub panel `/admin`):

- telefon, e-mail
- dokładny adres w Garwolinie
- godziny, embed mapy
- docelowa domena w `astro.config.mjs` → `site` oraz `site.url`

## Struktura

| Ścieżka | Opis |
|---------|------|
| `/` | Home + CTA |
| `/o-nas` | O firmie |
| `/marki` | Logotypy marek |
| `/kosze-prezentowe` | Kosze |
| `/kontakt` | NAP |
| `/admin` | CMS |

## Faza 2 (nie w v1)

Katalog produktów z CSV.
