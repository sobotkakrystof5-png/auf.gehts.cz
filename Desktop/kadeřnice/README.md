# HairDeluxe — Luxusní kadeřnictví

Production-ready webová stránka pro prémiový kadeřnický salon. Design na úrovni Apple.com / Stripe.com.

## Spuštění

Otevřete `index.html` v prohlížeči. Žádný build krok není potřeba — vše běží přes CDN.

```bash
# Doporučeno: lokální server (aby se předešlo CORS omezením)
npx serve .
# nebo
python3 -m http.server 8000
```

## Stack

| Vrstva | Technologie |
|--------|-------------|
| HTML | Sémantický HTML5, ARIA, Schema.org JSON-LD |
| CSS | Tailwind CSS v3 (CDN) + `styles.css` |
| JS | Vanilla ES6+ (`script.js`), žádné závislosti |
| Fonty | Google Fonts (Cormorant Garamond, Playfair Display, Inter, Italiana) |
| Obrázky | Unsplash (placeholder) — nahraďte vlastními |

## Struktura souborů

```
kadeřnice/
├── index.html     — kompletní stránka (12 sekcí)
├── styles.css     — custom animace, cursor, lightbox, formuláře
├── script.js      — interakce, Intersection Observer, carousel
└── README.md
```

## Sekce stránky

1. **Navbar** — sticky + glassmorphism blur po scrollu, animated burger
2. **Hero** — fullscreen, staggered text reveal, parallax, gradient mesh
3. **O nás** — 2 sloupce, animated stat counters (20+, 10k+, 4.9★)
4. **Hodnoty** — 4 feature cards s hover lift efektem
5. **Služby** — 6 karet s gradient border hover
6. **Galerie** — masonry layout, filter chips, lightbox s keyboard nav
7. **Tým** — 4 karty s hover reveal sociálních sítí
8. **Recenze** — auto-play carousel, touch swipe, dot navigace
9. **Ceník** — 3 tiery (Junior / Senior / Master), "featured" karta
10. **Kontakt** — floating label formulář, otevírací hodiny, Google Maps
11. **Newsletter** — 15% sleva, email signup
12. **Footer** — 4 sloupce, social links

## Funkce JavaScriptu

- **Custom cursor** — dot + follower s smooth lerp animací
- **Scroll progress bar** — gradient linka nahoře
- **Navbar** — změna stylu po 40px scrollu
- **Hero text** — staggered word reveal při načtení
- **Reveal animace** — Intersection Observer (fade-up, left, right, scale)
- **Parallax** — hero pozadí při scrollu
- **Čítače** — animované number counters s easeOut
- **Gallery filter** — filtrování dle kategorie
- **Lightbox** — keyboard navigace (←→ Escape), touch swipe
- **Testimonials** — auto-play carousel, pause na hover, dot + prev/next
- **Kontaktní formulář** — floating labels, loading spinner, toast notifikace
- **Newsletter** — email validace + toast
- **Ripple effect** — na primárních tlačítkách
- **Otevírací hodiny** — automaticky zvýrazní dnešní den

## SEO

- Kompletní meta tagy (description, keywords, robots)
- Open Graph + Twitter Card
- Schema.org JSON-LD: HairSalon, FAQPage, AggregateRating
- Sémantický HTML5 (header, nav, main, section, article, footer)
- Hierarchie H1 → H2 → H3
- Descriptive alt texty na všech obrázcích
- Canonical URL
- Mobile-first (Google Mobile-First Indexing)

*Doporučeno přidat: `sitemap.xml`, `robots.txt`, `favicon.ico`*

## Accessibility (WCAG AA)

- Skip to content link
- ARIA labels na všech interaktivních prvcích
- Focus visible stavy
- Keyboard navigace (Tab, Enter, Escape, šipky)
- `prefers-reduced-motion` — vypne animace pro uživatele s vestibulárními poruchami
- Screen reader friendly (role, aria-label, aria-expanded, aria-modal)

## Přizpůsobení

### Barvy (CSS custom properties v `styles.css`)
```css
--primary:    #0a0a0a   /* Deep Black */
--rose-gold:  #b76e79   /* Brand Accent */
--champagne:  #f7e7ce   /* Soft Accent */
--pearl:      #f8f6f3   /* Background */
--charcoal:   #3a3a3a   /* Body text */
--gold:       #d4af37   /* Premium Detail */
```

### Obrázky
Nahraďte Unsplash URL vlastními fotografiemi. Doporučený formát: WebP, min. 1200px šířka pro hero, 600px pro galerii.

### Kontaktní formulář
Přidejte backend handler (PHP, Netlify Forms, Formspree) — stačí změnit `action` atribut na `<form>`.

### Google Maps
Vygenerujte vlastní embed URL na [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started).
