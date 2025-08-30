import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import styles from './index.module.css';
import TrustBar from '../components/TrustBar';
import LeadCaptureForm from '../components/LeadCaptureForm';
import ScrollAnimations from '../components/ScrollAnimations';

const FeaturesList = [
  {
    title: 'Strony WWW z integracją gov',
    icon: '🌐',
    description: (
      <>
        Tworzymy profesjonalną stronę internetową dla każdej inwestycji
        z automatyczną integracją z portalami gov.pl i CMS do zarządzania.
      </>
    ),
  },
  {
    title: 'Prospekty tworzone przez prawników',
    icon: '📋',
    description: (
      <>
        Nasz zespół prawników tworzy zgodne z prawem prospekty w formacie PDF/A
        z pełnym wersjonowaniem i trwałym nośnikiem elektronicznym.
      </>
    ),
  },
  {
    title: 'Email z przekierowaniem',
    icon: '�',
    description: (
      <>
        Obsługa email niewidoczna dla klientów - zapytania automatycznie
        przekierowywane do Twojej skrzynki z dedykowanym opiekunem.
      </>
    ),
  },
];

function Feature({title, icon, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="feature-card">
        <div className="feature-icon">
          {icon}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary hero-section', styles.heroBanner)}>
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
      <div className="container">
        <h1 className="hero-title glow-text">
          BUDOLEX — strony WWW + prospekty + zgodność
        </h1>
        <p className="hero-subtitle">
          Strony WWW z integracją gov.pl, prospekty tworzone przez prawników i
          email z przekierowaniem — wszystko w jednym pakiecie.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="#konsultacja">
            Umów bezpłatną konsultację
          </Link>
          <Link
            className="button button--outline button--lg margin-left--md"
            to="/prawo-2025">
            Pobierz przewodnik prawny 2025 (PDF)
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeaturesList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center margin-bottom--lg">
            <h2>Jak działamy</h2>
            <p className="hero-subtitle">
              Sprawdzony proces wdrożenia w trzech etapach
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col--4 text--center">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>1. Analiza</h3>
              <p>
                Audyt obecnej sytuacji, analiza potrzeb strony WWW i komunikacji email. 
                Projektujemy rozwiązanie dopasowane do Twojej inwestycji (3-5 dni).
              </p>
            </div>
          </div>
          <div className="col col--4 text--center">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>2. Tworzenie</h3>
              <p>
                Budujemy dedykowaną stronę WWW, tworzymy zgodny prospekt prawny,
                konfigurujemy obsługę email i systemy zgodności (5-7 dni).
              </p>
            </div>
          </div>
          <div className="col col--4 text--center">
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>3. Utrzymanie</h3>
              <p>
                Miesięczne utrzymanie strony, monitoring zgodności, obsługa email
                i wsparcie techniczne przez cały okres sprzedaży.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniCaseSection() {
  return (
    <section className="padding-vert--xl" style={{backgroundColor: '#f8f9fa'}}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2 text--center">
            <h2>Przypadek klienta</h2>
            <div className="feature-card">
              <h3>SMB deweloper — wdrożenie w 10 dni, 0 uwag z UOKiK</h3>
              <p>
                Firma developerska z 15-osobowym zespołem sprzedaży, 
                realizująca 3 inwestycje rocznie. Po błyskawicznym wdrożeniu BUDOLEX 
                otrzymała pełną zgodność prawną bez jednej uwagi podczas 
                kontroli UOKiK.
              </p>
              <div style={{marginTop: '24px'}}>
                <strong>Rezultat:</strong> Redukcja ryzyka prawnego o 95%, 
                oszczędność 40 godzin miesięcznie zespołu prawnego, profesjonalne strony WWW.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingPreview() {
  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center margin-bottom--lg">
            <h2>Cennik</h2>
            <p className="hero-subtitle">
              Jeden plan Standard dla wszystkich + opcjonalny White Glove
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col--6 text--center">
            <div className="price-card featured">
              <h3>Standard</h3>
              <div style={{fontSize: '1.8rem', fontWeight: 'bold', margin: '16px 0'}}>
                12,000 zł<span style={{fontSize: '1rem', display: 'block'}}>+ 400 zł/mies</span>
              </div>
              <p>Kompletny pakiet z rabatem 20% wliczonym</p>
              <ul style={{textAlign: 'left', margin: '16px 0'}}>
                <li>🌐 Dedykowana strona WWW</li>
                <li>📋 Prospekt przez prawników</li>
                <li>📧 Email z przekierowaniem</li>
                <li>👤 Dedykowany opiekun</li>
                <li>⚡ Wsparcie SLA 4h</li>
                <li>📞 Konsultacje prawne</li>
              </ul>
            </div>
          </div>
          <div className="col col--6 text--center">
            <div className="price-card">
              <h3>White Glove</h3>
              <div style={{fontSize: '1.8rem', fontWeight: 'bold', margin: '16px 0'}}>
                Wycena<span style={{fontSize: '1rem', display: 'block'}}>indywidualna</span>
              </div>
              <p>Pełen serwis premium</p>
              <ul style={{textAlign: 'left', margin: '16px 0'}}>
                <li>Wszystko ze Standard</li>
                <li>🏠 Wizualizacje 3D</li>
                <li>🏷️ White-label branding</li>
                <li>⚡ Wsparcie SLA 2h</li>
                <li>🎨 Custom UI/UX</li>
                <li>👥 Dedykowany zespół</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text--center margin-top--lg">
          <Link
            className="button button--primary button--lg"
            to="/cennik">
            Zobacz pełny cennik
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQPreview() {
  const faqs = [
    {
      question: 'Czy BUDOLEX zapewnia pełną zgodność z ustawą 2021/2025?',
      answer: 'Tak, nasze rozwiązanie w 100% pokrywa wymagania ustawy, w tym prospekt informacyjny, strony WWW z integracją gov.pl i obsługę komunikacji email.'
    },
    {
      question: 'Jak długo trwa wdrożenie?',
      answer: 'Standardowe wdrożenie zajmuje 2-4 tygodnie: 1-2 tygodnie na audyt i 1-2 tygodnie na konfigurację i testy. W planach White-glove oferujemy ekspresowe wdrożenie w 7 dni.'
    },
    {
      question: 'Czy mogę anulować subskrypcję w każdym momencie?',
      answer: 'Tak, oferujemy elastyczne warunki anulacji z 30-dniowym okresem wypowiedzenia. Wszystkie dane pozostają dostępne przez 90 dni po anulacji.'
    },
    {
      question: 'Co się stanie podczas kontroli UOKiK?',
      answer: 'BUDOLEX zapewnia pełną dokumentację zgodności. W przypadku kontroli otrzymujesz wsparcie prawne i techniczne. Dotychczas żaden z naszych klientów nie otrzymał kary.'
    }
  ];

  return (
    <section className="padding-vert--xl" style={{backgroundColor: '#f8f9fa'}}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center margin-bottom--lg">
            <h2>Najczęściej zadawane pytania</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--8 col--offset-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="feature-card" style={{marginBottom: '16px'}}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text--center margin-top--lg">
          <Link
            className="button button--outline button--lg"
            to="/faq">
            Zobacz wszystkie pytania
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BUDOLEX - AGADOM Sp. z o.o.",
    "description": "Strony WWW z integracją gov.pl, prospekty prawne i email z przekierowaniem dla deweloperów",
    "url": "https://budolex.pl",
    "telephone": "+48 502 091 059",
    "email": "kontakt@budolex.pl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Elżbiety Drużbackiej 136",
      "addressLocality": "Kraków",
      "postalCode": "30-699",
      "addressCountry": "PL",
      "addressRegion": "Polska"
    },
    "areaServed": "Polska",
    "serviceType": "Usługi zgodności prawnej dla firm budowlanych",
    "priceRange": "15000 PLN",
    "openingHours": "Mo-Fr 09:00-17:00",
    "vatID": "6793287174",
    "legalName": "AGADOM SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ"
  };

  return (
    <Layout
      title="Strony WWW + Prospekty + Zgodność dla deweloperów"
      description="BUDOLEX - Strony WWW z integracją gov.pl dla inwestycji, prospekty tworzone przez prawników i email z przekierowaniem w jednym pakiecie.">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Head>
      
      <ScrollAnimations />
      <TrustBar />
      <HomepageHeader />
      <main>
        <div className="fadeInUp">
          <HomepageFeatures />
        </div>
        <div className="fadeInUp">
          <ProcessSection />
        </div>
        <div className="fadeInUp">
          <MiniCaseSection />
        </div>
        <div className="fadeInUp">
          <PricingPreview />
        </div>
        <div className="fadeInUp">
          <FAQPreview />
        </div>
        
        {/* CTA Section with Lead Form */}
        <section id="konsultacja" className="padding-vert--xl fadeInUp">
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2>Umów bezpłatną konsultację</h2>
                <p className="hero-subtitle">
                  Porozmawiaj z naszym ekspertem o tym, jak BUDOLEX może 
                  zapewnić zgodność prawną Twojej firmie budowlanej.
                </p>
                <ul>
                  <li>✅ Audyt obecnego stanu zgodności</li>
                  <li>✅ Analiza ryzyk prawnych</li>
                  <li>✅ Plan wdrożenia dostosowany do Twojej firmy</li>
                  <li>✅ Wycena bezpłatna i bez zobowiązań</li>
                </ul>
                <p>
                  <strong>Konsultacja trwa 30 minut i jest całkowicie bezpłatna.</strong>
                </p>
              </div>
              <div className="col col--6">
                <LeadCaptureForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
