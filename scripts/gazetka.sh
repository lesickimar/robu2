#!/usr/bin/env bash
# Użycie: scripts/gazetka.sh [katalog_ze_zrodlem]   (domyślnie ./katalog)
set -euo pipefail

src="${1:-katalog}"
out="public/images/gazetka"

if [ ! -d "$src" ]; then
  echo "Brak katalogu źródłowego: $src" >&2
  exit 1
fi

mapfile -t files < <(ls -1 "$src"/*.jpg "$src"/*.jpeg "$src"/*.png 2>/dev/null | sort -V)
if [ "${#files[@]}" -eq 0 ]; then
  echo "Brak plików JPG/PNG w $src" >&2
  exit 1
fi

mkdir -p "$out"
rm -f "$out"/*.webp

i=0
for f in "${files[@]}"; do
  i=$((i + 1))
  n=$(printf '%02d' "$i")
  magick "$f" -resize 1200x -quality 80 -define webp:method=6 "$out/$n.webp"
  magick "$f" -resize 1800x -quality 82 -define webp:method=6 "$out/$n-zoom.webp"
  magick "$f" -resize 300x -quality 75 -define webp:method=6 "$out/$n-thumb.webp"
  printf '%s -> %s.webp\n' "$(basename "$f")" "$n"
done

printf '\n%s stron, %s na dysku\n' "$i" "$(du -sh "$out" | cut -f1)"
echo "Pamiętaj o aktualizacji src/data/gazetka.json (kolejność i alt-y)."
