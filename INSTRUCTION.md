CEL:
Przebuduj domyślne repo Docusaurus dla marki BUDOLEX (polski rynek, usługi zgodności dla MŚP budowlanych). 
Zadania: brand, nawigacja, strony PL, komponenty (Cennik, Lead Form), SEO/analityka, PWA, formularze static, CTA, schematy danych.

1) KONFIGURACJA I BRAND
- Zmień `docusaurus.config.ts`:
  - title: 'BUDOLEX'
  - tagline: 'Zgodność prawna dla firm budowlanych: Prospekt, Cennik WWW, Portal Danych, MRP/DFG.'
  - url: 'https://budolex.pl', baseUrl: '/'
  - i18n: { defaultLocale: 'pl', locales: ['pl'] }
  - presets: preset-classic z: docs (opcjonalnie), blog: true, theme: customCss, sitemap: weekly
  - plugins:
    - '@docusaurus/plugin-pwa' (offlineModeActivationStrategies: ['appInstalled','standalone','queryString'])
    - '@docusaurus/plugin-ideal-image'
    - '@docusaurus/plugin-google-gtag' (trackingID: process.env.GA4_ID, anonymizeIP: true)
  - themeConfig:
    - navbar: logo 'BUDOLEX', items: Start(/), Usługi, Jak działamy, Cennik, Prawo 2025, FAQ, Blog, Kontakt (CTA button)
    - footer: 3 kolumny (Usługi, Prawo, Kontakt), copyright
    - metadata: description (PL), og:title/og:description
- Dodaj `.env.example` z `GA4_ID=G-XXXXXXXXXX`
- Utwórz paletę w `src/css/custom.css` (np. primary: #0E5A8A, accent: #FFB703) i styl CTA (przycisk pełny + outline).
- Dodaj favicon/logo (placeholder) do `static/img/`.

2) STRONY I KOMPONENTY
- Usuń domyślny sample content. Dodaj:
  - `src/pages/index.tsx` – landing (Hero, TrustBar, Features, Process, MiniCase, PricingPreview, FAQPreview, CTA).
  - `src/pages/uslugi.mdx` – opis 4 usług.
  - `src/pages/jak-dzialamy.mdx` – proces, SLA, odpowiedzialności.
  - `src/pages/cennik.mdx` – pełna tabela cen.
  - `src/pages/prawo-2025.mdx` – edukacja i linki do aktów.
  - `src/pages/faq.mdx`
  - `src/pages/kontakt.tsx` – formularz + embed kalendarza.
  - `src/pages/polityka-prywatnosci.mdx`, `src/pages/regulamin.mdx`
- Komponenty w `src/components/`:
  - `TrustBar.tsx` (pasek zaufania)
  - `PriceTable.tsx` (3 plany: Starter, Pro, White-glove)
  - `LeadCaptureForm.tsx` (Netlify Forms: name, email, telefon, firma, wiadomość, checkbox zgód)
  - `CookieConsent.tsx` (lekki baner)
- Formularz Netlify: atrybut `data-netlify="true"`, honeypot, success page `/dziekujemy`.

3) SEO / SKRYPTY / PLIKI STATYCZNE
- Dodaj `static/robots.txt` (allow all, sitemap).
- Włącz sitemap w configu, dodaj `static/humans.txt`.
- W `src/pages/index.tsx` dodaj JSON-LD `LocalBusiness` (PL dane kontaktowe, obszar „Polska”).
- Dodaj `@docusaurus/theme-common` Head do stron z tytułami PL.
- Zainstaluj i skonfiguruj `@docusaurus/plugin-google-gtag`.
- Dodaj `plugin-pwa` head tags i ikonki.

4) KOPIA TREŚCI (PL) – WSTAW W PLIKI:
- index.tsx: 
  Hero heading: "BUDOLEX — zgodność sprzedaży mieszkań"
  Sub: "Prospekt, transparentny cennik WWW, dzienny eksport do portalu danych oraz MRP/DFG — wszystko w jednym wdrożeniu."
  CTA1: "Umów bezpłatną konsultację" (anchor #konsultacja)
  CTA2: "Pobierz checklistę zgodności (PDF)"
  TrustBar: "Ustawa 2021/2025 · Portal Danych · DFG/UFG · MRP"
  Features (4):
    1) Generator Prospektu (PDF/A + wersjonowanie)
    2) Widget „Prospekt & Cennik” na Twojej WWW (historia zmian, datowanie)
    3) Export GOV (raz/dobę, monitoring błędów)
    4) Konsola MRP/DFG (składki, rejestry, zgodność)
  Process (3 kroki): Audyt → Wdrożenie → Utrzymanie (SLA)
  MiniCase: "SMB deweloper — wdrożenie w 21 dni, 0 uwag z UOKiK"
  Pricing preview (link do /cennik)
  FAQ preview (3–4 pytania)
  Dolne CTA + blok kontaktu (#konsultacja) z `LeadCaptureForm`.

- uslugi.mdx (zwięzłe korzyści klientów):
  1) Generator Prospektu — zgodny wzór, aneksy, trwały nośnik.
  2) Widget WWW „Prospekt & Cennik” — spójność ofert, archiwum zmian, link w reklamach.
  3) Export do Portalu Danych — automatycznie raz na dobę.
  4) MRP/DFG Console — składki, raporty, rejestry, gotowe pliki dla notariusza/KW.

- jak-dzialamy.mdx:
  Audyt (1–2 tyg.), Wdrożenie (1–2 tyg.), Utrzymanie (miesięczne). Zakres odpowiedzialności: my — konfiguracja, eksporty, dokumenty; klient — dane źródłowe, podpisy, decyzje.

- cennik.mdx (użyj komponentu `PriceTable`):
  Starter (mikro), Pro (MŚP), White-glove (bez IT po stronie klienta). Wymień co wchodzi/limity.

- prawo-2025.mdx:
  TL;DR zmian + linki do aktów; obowiązki: WWW z cenami, raz/dobę eksport; terminy; ryzyka UOKiK. Dodaj sekcję „Najczęstsze błędy”.

- faq.mdx:
  10–15 pytań: o prospekt, cennik, reklamy, eksport, MRP, DFG, terminy, kary, role notariusza.

- kontakt.tsx:
  Dane: email, tel., adres. Formularz Netlify i embed kalendarza (np. Calendly). Zgody RODO.

- polityka-prywatnosci.mdx / regulamin.mdx:
  Szablon PL z klauzulami RODO i ograniczeniem odpowiedzialności (nie jest to porada prawna).

5) KOMPONENTY — PRZYKŁADY KODU
- `src/components/PriceTable.tsx`: 3 karty planów, wyróżnij „Pro”. Przyciski: „Umów konsultację”.
- `src/components/LeadCaptureForm.tsx`: <form name="kontakt" method="POST" data-netlify="true" netlify-honeypot="bot-field">
   Pola: Imię i nazwisko, Email (required), Telefon, Firma, Wiadomość (required), checkbox zgody. Po submit → /dziekujemy.

6) DODATKI
- Dodaj `static/thank-you/index.html` lub stronę `src/pages/dziekujemy.mdx`.
- Dodaj `static/manifest.webmanifest` dla PWA + ikony.
- Dodaj `static/robots.txt` i sitemap generowaną pluginem.
- W `README.md` dopisz: jak uruchomić, zmienne środowiskowe, deploy (Netlify/Vercel/GitHub Pages).

7) JAKOŚĆ I DOSTĘPNOŚĆ
- Zadbaj o alt-teksty, kontrasty, focus states.
- Lighthouse: ~90+ performance/SEO/accessibility.

WYNIK:
- Spełnia kryteria
- Upewnij się, że `yarn build` przechodzi oraz formularz Netlify ma poprawny atrybut.
