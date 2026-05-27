# CLAUDE.md — VIZEON Web Project
# Instrukce pro Claude Code — čti před každou akcí

---

## 🎯 O PROJEKTU

Tento projekt je produkční portfolio web pro digitální agenturu **VIZEON**.
Majitel: **Kryštof Sobotka**
Cíl: Konverze návštěvníků na platící klienty. Každé rozhodnutí musí sloužit tomuto cíli.

---

## ⚠️ ABSOLUTNÍ PRAVIDLA — NIKDY NEPORUŠUJ

1. **NIKDY nepoužívej AI generovaný obsah** — žádné generické texty, žádné šablony
2. **NIKDY neměň copywriting** — hesla a texty jsou schváleny majitelem, používej je přesně
3. **NIKDY neinstaluj zbytečné dependencies** — každý package musí mít jasný důvod
4. **NIKDY nepoužívej inline styly** — pouze Tailwind CSS třídy
5. **NIKDY nezlomit mobilní layout** — mobile first je priorita č. 1
6. **NIKDY neodstraňuj SEO tagy** — každá stránka musí mít kompletní meta data
7. **NIKDY nepoužívej placeholder barvy** — pouze barvy z design systému níže
8. **NIKDY neměň strukturu sekcí** bez explicitního souhlasu majitele

---

## 🛠️ TECH STACK — POVOLENO

```
Next.js 14          — App Router, TypeScript
Tailwind CSS        — styling (žádné jiné CSS frameworky)
Framer Motion       — animace (žádné jiné animační knihovny)
React Hook Form     — formuláře
Zod                 — validace formulářů
next-seo            — SEO management
Lucide React        — ikony (žádné jiné icon sety)
next/font           — Google Fonts (Cormorant Garamond + Inter)
next/image          — optimalizace obrázků (vždy používat)
```

**Zakázané knihovny:**
- ❌ styled-components / emotion
- ❌ Bootstrap / Material UI / Chakra UI
- ❌ jQuery
- ❌ Anime.js / GSAP (pouze Framer Motion)
- ❌ Lodash (použij vanilla JS)

---

## 🎨 DESIGN SYSTÉM — ZÁVAZNÝ

### Barvy (CSS Variables v globals.css)
```css
--bg-primary: #0a0a0a;        /* hlavní pozadí */
--bg-secondary: #111111;      /* sekce pozadí */
--bg-card: #161616;           /* karty */
--accent: #c9a84c;            /* zlatý akcent — CTA, hover, ikony */
--accent-hover: #d4b968;      /* hover stav zlaté */
--text-primary: #f5f5f5;      /* hlavní text */
--text-secondary: #888888;    /* sekundární text */
--text-muted: #555555;        /* doplňkový text */
--border: rgba(255,255,255,0.08); /* border karet */
--border-hover: rgba(201,168,76,0.3); /* border na hover */
```

### Typografie
```
Cormorant Garamond (weight: 300, 400) — H1, H2, H3, logotyp
Inter (weight: 300, 400, 500)          — body, UI, navigace
```

### Spacing
- Sekce: `py-24 md:py-32`
- Container: `max-w-7xl mx-auto px-6`
- Karty: `p-6 md:p-8`
- Gap gridu: `gap-6`

### Breakpointy
- Mobile: < 768px (priorita)
- Tablet: 768px – 1024px
- Desktop: > 1024px

---

## 📁 STRUKTURA PROJEKTU

```
vizeon/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Homepage (všechny sekce)
│   ├── gdpr/
│   │   └── page.tsx        # GDPR stránka
│   └── not-found.tsx       # Custom 404
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── SocialProof.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── CookieBanner.tsx
│       ├── CustomCursor.tsx
│       └── ScrollIndicator.tsx
├── lib/
│   └── animations.ts       # Framer Motion varianty
├── public/
│   ├── profil.jpg          # Fotka Kryštofa (NUTNÉ)
│   ├── logo.png            # VIZEON logo (NUTNÉ)
│   ├── og-image.jpg        # OG image 1200×630px
│   ├── favicon.ico
│   └── portfolio/
│       ├── kavarna.jpg
│       ├── aufgehts.jpg
│       └── hairdeluxe.jpg
├── CLAUDE.md               # Tento soubor
└── tailwind.config.ts
```

---

## ✍️ COPYWRITING — NEMĚNIT

Tyto texty jsou schváleny a musí být použity PŘESNĚ:

### Hero
- H1: `"Weby, které přivádějí zákazníky. Ne jen zaujmou."`
- H2: `"Každý den bez kvalitního webu jsou zákazníci, které ztrácíte. Pojďme to změnit."`
- CTA: `"Nezávazná konzultace zdarma →"`
- Pod CTA: `"Bez závazků. Bez skrytých poplatků. Jen výsledky."`

### Social Proof
- `"+30 %"` → `"průměrný nárůst objednávek klientů po spuštění"`
- `"< 1 hod"` → `"průměrná doba odpovědi. Žádné čekání."`
- `"10+"` → `"dokončených projektů. Každý ručně, žádná AI."`

### O mně — velký quote
- `"Nejsem agentura. Jsem člověk, který to udělá."`
- Podtitul: `"Jeden kontakt. Žádné přehazování. Výsledky."`

### Kontakt
- H2: `"Pojďme na to."`
- Podtitul: `"Nezávazná konzultace je zdarma. Nejhorší co se může stát je, že si popovídáme."`
- Pod formulářem: `"Odpovídám do 1 hodiny. Každý den."`

---

## 🔍 SEO — POVINNÉ NA KAŽDÉ STRÁNCE

```typescript
// app/layout.tsx — globální metadata
export const metadata: Metadata = {
  title: {
    default: "VIZEON | Tvorba webů, grafika a správa sítí — Kryštof Sobotka",
    template: "%s | VIZEON"
  },
  description: "Weby, které přivádějí zákazníky. Tvorba webů na míru, grafický design, prezentace a správa sociálních sítí pro živnostníky a malé firmy. Nezávazná konzultace zdarma.",
  keywords: ["tvorba webů na míru", "webový designer ČR", "grafický design živnostníci", "správa sociálních sítí malé firmy", "Next.js React web Česká republika", "Kryštof Sobotka VIZEON"],
  authors: [{ name: "Kryštof Sobotka", url: "https://vizeon.cz" }],
  creator: "Kryštof Sobotka",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://vizeon.cz",
    title: "VIZEON — Web. Design. Výsledky.",
    description: "Jeden člověk. Přímá komunikace. Weby které prodávají, ne jen existují.",
    siteName: "VIZEON",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "VIZEON — Kryštof Sobotka" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIZEON — Web. Design. Výsledky.",
    description: "Tvorba webů a grafiky pro živnostníky a malé firmy v ČR.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  canonical: "https://vizeon.cz",
}
```

### Schema.org (JSON-LD — vložit do layout.tsx)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "VIZEON",
  "founder": {
    "@type": "Person",
    "name": "Kryštof Sobotka"
  },
  "url": "https://vizeon.cz",
  "telephone": "+420604837333",
  "email": "sobotkakrystof5@gmail.com",
  "areaServed": "CZ",
  "description": "Tvorba webů na míru, grafický design, prezentace a správa sociálních sítí.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "10"
  }
}
```

---

## 🎬 ANIMACE — PRAVIDLA

```typescript
// lib/animations.ts — používej tyto varianty konzistentně

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
}
```

**Pravidla animací:**
- Viewport trigger: `{ once: true, margin: "-100px" }`
- Žádné animace které trvají déle než 0.8s
- Žádné bouncy animace (easing: vždy easeOut nebo easeInOut)
- Zlatý akcent se nikdy nemění pomocí animace — pouze opacity/scale

---

## 📞 KONTAKTNÍ ÚDAJE — NEMĚNIT

```
Email:    sobotkakrystof5@gmail.com
Telefon:  +420 604 837 333
WhatsApp: https://wa.me/420604837333
Facebook: https://www.facebook.com/profile.php?id=100086439650056
```

---

## 🗂️ PORTFOLIO PROJEKTY — NEMĚNIT

```
1. Kavárna Svěží    | Pohostinství     | https://kav-rna-sv.vercel.app
2. Auf Gehts        | Vzdělávání       | https://auf-gehts-cz-56ly.vercel.app
3. HairDeluxe       | Kadeřnictví      | https://hair-deluxe-jo.vercel.app
```

---

## ✅ CHECKLIST PŘED KAŽDÝM COMMITEM

- [ ] Mobilní layout funkční na 375px
- [ ] Všechny obrázky přes next/image s alt textem
- [ ] Meta title a description na každé stránce
- [ ] Žádné console.log v produkčním kódu
- [ ] Formulář validuje správně (React Hook Form + Zod)
- [ ] GDPR lišta funguje a ukládá do localStorage
- [ ] Všechny externí odkazy mají target="_blank" rel="noopener noreferrer"
- [ ] Favicon nastaven
- [ ] TypeScript bez chyb (tsc --noEmit)
- [ ] Tailwind pouze povolené barvy z design systému

---

## 🚫 ČASTÉ CHYBY — VYHNI SE

- Nepoužívej `<img>` — vždy `<Image>` z next/image
- Nepoužívej `useEffect` pro data fetching — použij Server Components
- Nepoužívej `any` v TypeScriptu — vždy správné typy
- Nezapomínej na `aria-label` u ikonových tlačítek
- Nestylu `focus` stav — Tailwind `focus-visible:ring` je povinný
- Nepoužívej pevné výšky na mobilních zařízeních (`h-screen` — pozor na mobile browsers)
- Kontaktní formulář musí mít loading state a error handling

---

*Poslední aktualizace: 2026 — Kryštof Sobotka / VIZEON*
