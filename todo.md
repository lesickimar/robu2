# ROBU2 — todo

## Kosze: wideo / animacja napełniania

**Status:** czekamy na zdjęcia  
**Gdzie:** sekcja koszy prezentowych (homepage + `/kosze-prezentowe`)

### Co dostarczyć
- [ ] Pusty kosz (PNG/JPG, najlepiej proste tło lub wycięty)
- [ ] Produkty osobno (kilka–kilkanaście, wycięte jeśli się da)
- [ ] Opcjonalnie: gotowy pełny kosz jako referencja „efekt końcowy”

**Folder na pliki:** `public/images/kosze/`

### Po dostarczeniu
- [ ] Wygenerować wideo napełniania (`reference_to_video` / image→video)
- [ ] Wpiąć na stronę (lazy, `preload="none"`, sensowny `poster`)
- [ ] Fallback: statyczne zdjęcie pełnego kosza, gdy autoplay zablokowany

### Notatki
- Bez assetów nie generujemy stocku na ślepo.
- Alternatywa lżejsza: animacja CSS warstwami z cutoutów (jeśli wideo będzie za ciężkie).
