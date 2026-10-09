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
| `/gazetka` | Gazetka promocyjna — przeglądarka stron |
| `/kontakt` | NAP |
| `/admin` | CMS |

## Aktualizacja gazetki

1. Wrzuć eksport stron gazetki (JPG/PNG) do `katalog/`.
2. Uruchom `scripts/gazetka.sh`. Zapisze `public/images/gazetka/NN.webp` (1200 px, warstwa do wyświetlania), `NN-zoom.webp` (1800 px, powiększenie) i `NN-thumb.webp` (300 px, pasek miniatur), numerując strony po kolejności plików.
3. Uzupełnij `src/data/gazetka.json` (albo panel `/admin` → Gazetka): `image` wybiera plik `NN.webp`, a `alt` i `order` opisują stronę. Warstwy `NN-zoom.webp` i `NN-thumb.webp` wynikają z nazwy pliku. Kolejność z `order` wyznacza skrzydła rozkładówki, więc pierwsza strona jest okładką, a ostatnia tylną okładką.

## Faza 2 (nie w v1)

Katalog produktów z CSV.
