# BUDOLEX - Zgodność prawna dla firm budowlanych

Strona internetowa BUDOLEX zbudowana w oparciu o Docusaurus 3.8.1. Zawiera kompletne rozwiązanie marketingowe dla firmy świadczącej usługi zgodności prawnej dla deweloperów.

## ✨ Funkcjonalności

- 🏠 **Landing page** z Hero, Trust Bar, Features, Process, Case Study, Pricing, FAQ
- 📋 **Strony usług** - szczegółowe opisy 4 głównych usług BUDOLEX
- 💰 **Cennik** z trzema planami (Starter, Pro, White-glove)
- 📚 **Przewodnik Prawo 2025** - kompleksowe informacje o zmianach prawnych
- ❓ **FAQ** - 15+ najczęściej zadawanych pytań
- 📞 **Kontakt** z formularzem Netlify i miejscem na kalendarz
- 🚀 **Trial** - strona rejestracji na 14-dniowy bezpłatny trial

## 🎨 Design System

### Kolory
- **Primary:** `#0e5a8a` (BUDOLEX blue)
- **Accent:** `#ffb703` (BUDOLEX orange)
- **Gray Light:** `#f8f9fa`
- **Gray Medium:** `#6c757d` 
- **Gray Dark:** `#343a40`

### Komponenty
- `TrustBar` - pasek zaufania w header
- `PriceTable` - tabela z planami cenowymi
- `LeadCaptureForm` - formularz kontaktowy z walidacją Netlify
- Custom CSS z responsive design

## 🚀 Szybki start

### Wymagania
- Node.js 18.0+
- npm lub yarn

### Instalacja
```bash
git clone <repository-url>
cd budolex
npm install
```

### Zmienne środowiskowe
Skopiuj `.env.example` do `.env` i ustaw:
```bash
GA4_ID=G-XXXXXXXXXX  # Google Analytics 4 Tracking ID
```

### Development
```bash
npm start
# Otwiera http://localhost:3000
```

### Build produkcyjny
```bash
npm run build
# Generuje folder 'build' z statycznymi plikami
```

### Test build lokalnie
```bash
npm run serve
# Testuje zbudowaną wersję lokalnie
```

## 📦 Struktura projektu

```
├── src/
│   ├── components/          # Komponenty React
│   │   ├── TrustBar.tsx
│   │   ├── PriceTable.tsx
│   │   └── LeadCaptureForm.tsx
│   ├── css/
│   │   └── custom.css       # Style BUDOLEX
│   └── pages/               # Strony główne
│       ├── index.tsx        # Landing page
│       ├── uslugi.mdx      # Opis usług
│       ├── cennik.mdx      # Cennik
│       ├── kontakt.tsx     # Kontakt
│       ├── faq.mdx         # FAQ
│       ├── prawo-2025.mdx  # Przewodnik prawny
│       ├── trial.mdx       # Rejestracja trial
│       ├── dziekujemy.mdx  # Thank you page
│       ├── polityka-prywatnosci.mdx
│       └── regulamin.mdx
├── static/
│   ├── assets/             # Pliki do pobrania (PDF)
│   ├── img/                # Obrazy i ikony
│   ├── robots.txt
│   ├── humans.txt
│   └── manifest.webmanifest # PWA manifest
├── blog/                   # Blog posts
├── docusaurus.config.ts    # Konfiguracja Docusaurus
└── package.json
```

## 🌐 Deployment

### Netlify (zalecane)
1. Połącz repository z Netlify
2. Ustaw build command: `npm run build`
3. Ustaw publish directory: `build`
4. Ustaw zmienne środowiskowe w Netlify dashboard
5. Włącz Netlify Forms dla formularzy kontaktowych

### Vercel
1. Połącz repository z Vercel
2. Framework: Docusaurus
3. Build Command: `npm run build`
4. Output Directory: `build`
5. Ustaw zmienne środowiskowe

### GitHub Pages
```bash
npm run deploy
# Automatycznie wdraża na GitHub Pages
```

## 📊 SEO i Analytics

### Zawarte funkcje SEO:
- ✅ Meta tags dla każdej strony
- ✅ Open Graph tags
- ✅ JSON-LD structured data (LocalBusiness)
- ✅ Sitemap.xml (automatyczny)
- ✅ Robots.txt
- ✅ Responsive design
- ✅ PWA manifest

### Google Analytics 4
Ustaw `GA4_ID` w zmiennych środowiskowych:
```bash
GA4_ID=G-XXXXXXXXXX
```

## 📝 Formularz kontaktowy

Formularz używa Netlify Forms:
- Automatyczna walidacja
- Honeypot anti-spam
- Przekierowanie na `/dziekujemy`
- RODO compliant

### Ustawienia Netlify:
1. Włącz Netlify Forms w dashboard
2. Ustaw notyfikacje email
3. Opcjonalnie dodaj Slack integration

## 🔧 Customizacja

### Zmiana kolorów
Edytuj zmienne CSS w `src/css/custom.css`:
```css
:root {
  --budolex-primary: #your-color;
  --budolex-accent: #your-color;
}
```

### Dodawanie nowych stron
1. Utwórz plik w `src/pages/`
2. Dodaj link w nawigacji w `docusaurus.config.ts`
3. Dodaj do footera jeśli potrzeba

### Zmiana treści
- **Landing page:** edytuj `src/pages/index.tsx`
- **Cennik:** edytuj `src/components/PriceTable.tsx`
- **Inne strony:** edytuj odpowiednie pliki `.mdx`

## 🎯 Performance

### Lighthouse scores (target):
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 100
- **SEO:** 100

### Optymalizacje:
- ✅ Lazy loading images
- ✅ Minified CSS/JS
- ✅ Service Worker (PWA)
- ✅ Gzip compression
- ✅ Modern image formats support

## 🚨 TODO / Przyszłe ulepszenia

- [ ] Dodać rzeczywiste obrazy/ikony (obecnie placeholders)
- [ ] Integracja z prawdziwym kalendarzem (Calendly)
- [ ] A/B testing dla hero section
- [ ] Blog z artykułami prawnymi
- [ ] Multi-language support (jeśli potrzeba)
- [ ] Dark mode toggle
- [ ] Cookie consent banner
- [ ] Live chat widget

## 📞 Wsparcie

W przypadku problemów technicznych:
- Email: dev@budolex.pl
- Issues w GitHub repository
- Dokumentacja Docusaurus: https://docusaurus.io/

## 📄 Licencja

© 2025 BUDOLEX Sp. z o.o. Wszystkie prawa zastrzeżone.
