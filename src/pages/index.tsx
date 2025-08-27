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
    title: 'Generator Prospektu',
    icon: '📋',
    description: (
      <>
        Automatyczne generowanie prospektów zgodnych z prawem w formacie PDF/A 
        z pełnym wersjonowaniem i trwałym nośnikiem elektronicznym.
      </>
    ),
  },
  {
    title: 'Widget „Prospekt & Cennik" na WWW',
    icon: '🌐',
    description: (
      <>
        Dynamiczny widget na Twojej stronie WWW z historią zmian, datowaniem 
        i spójnością z materiałami reklamowymi.
      </>
    ),
  },
  {
    title: 'Export do Portalu Danych',
    icon: '📤',
    description: (
      <>
        Automatyczny dzienny eksport danych do Portalu Danych z monitoringiem 
        błędów i powiadomieniami o statusie.
      </>
    ),
  },
  {
    title: 'Konsola MRP/DFG',
    icon: '⚖️',
    description: (
      <>
        Zarządzanie składkami, rejestrami i zgodnością MRP/DFG. 
        Gotowe pliki dla notariusza i księgi wieczystej.
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
          BUDOLEX — zgodność sprzedaży mieszkań
        </h1>
        <p className="hero-subtitle">
          Prospekt, transparentny cennik WWW, dzienny eksport do portalu danych 
          oraz MRP/DFG — wszystko w jednym wdrożeniu.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="#konsultacja">
            Umów bezpłatną konsultację
          </Link>
          <Link
            className="button button--outline button--lg margin-left--md"
            to="/assets/budolex-checklista-zgodnosci.pdf">
            Pobierz checklistę zgodności (PDF)
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
              <h3>1. Audyt</h3>
              <p>
                Analiza obecnego stanu zgodności, identyfikacja luk prawnych 
                i przygotowanie planu wdrożenia (1-2 tygodnie).
              </p>
            </div>
          </div>
          <div className="col col--4 text--center">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>2. Wdrożenie</h3>
              <p>
                Konfiguracja systemów, integracja z Twoją WWW, 
                testy i szkolenie zespołu (1-2 tygodnie).
              </p>
            </div>
          </div>
          <div className="col col--4 text--center">
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>3. Utrzymanie</h3>
              <p>
                Miesięczne monitoring zgodności, aktualizacje prawne 
                i wsparcie techniczne w ramach SLA.
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
              <h3>SMB deweloper — wdrożenie w 21 dni, 0 uwag z UOKiK</h3>
              <p>
                Firma developerska z 15-osobowym zespołem sprzedaży, 
                realizująca 3 inwestycje rocznie. Po wdrożeniu BUDOLEX 
                otrzymała pełną zgodność prawną bez jednej uwagi podczas 
                kontroli UOKiK.
              </p>
              <div style={{marginTop: '24px'}}>
                <strong>Rezultat:</strong> Redukcja ryzyka prawnego o 95%, 
                oszczędność 40 godzin miesięcznie zespołu prawnego.
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
              Elastyczne plany dostosowane do rozmiaru Twojej firmy
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col--4 text--center">
            <div className="price-card">
              <h3>Starter</h3>
              <div style={{fontSize: '2rem', fontWeight: 'bold', margin: '16px 0'}}>
                2,500 zł<span style={{fontSize: '1rem'}}>/mies</span>
              </div>
              <p>Dla mikrofirm (do 5 lokali/mies)</p>
              <ul style={{textAlign: 'left', margin: '16px 0'}}>
                <li>Generator prospektu</li>
                <li>Widget cennik WWW</li>
                <li>Export Portal Danych</li>
                <li>Email support</li>
              </ul>
            </div>
          </div>
          <div className="col col--4 text--center">
            <div className="price-card featured">
              <h3>Pro</h3>
              <div style={{fontSize: '2rem', fontWeight: 'bold', margin: '16px 0'}}>
                4,500 zł<span style={{fontSize: '1rem'}}>/mies</span>
              </div>
              <p>Dla MŚP (do 25 lokali/mies)</p>
              <ul style={{textAlign: 'left', margin: '16px 0'}}>
                <li>Wszystko z planu Starter</li>
                <li>MRP/DFG Console</li>
                <li>Dedykowany opiekun</li>
                <li>SLA 24h</li>
                <li>Szkolenia zespołu</li>
              </ul>
            </div>
          </div>
          <div className="col col--4 text--center">
            <div className="price-card">
              <h3>White-glove</h3>
              <div style={{fontSize: '2rem', fontWeight: 'bold', margin: '16px 0'}}>
                Indywidualnie
              </div>
              <p>Dla firm bez działu IT</p>
              <ul style={{textAlign: 'left', margin: '16px 0'}}>
                <li>Wszystko z planu Pro</li>
                <li>Pełne outsourcing IT</li>
                <li>Dedykowany zespół</li>
                <li>SLA 4h</li>
                <li>Konsultacje prawne</li>
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
      answer: 'Tak, nasze rozwiązanie w 100% pokrywa wymagania ustawy, w tym prospekt informacyjny, cennik na WWW, dzienny eksport do Portalu Danych oraz obsługę MRP/DFG.'
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
    "name": "BUDOLEX",
    "description": "Zgodność prawna dla firm budowlanych: Prospekt, Cennik WWW, Portal Danych, MRP/DFG",
    "url": "https://budolex.pl",
    "telephone": "+48 123 456 789",
    "email": "kontakt@budolex.pl",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PL",
      "addressRegion": "Polska"
    },
    "areaServed": "Polska",
    "serviceType": "Usługi zgodności prawnej dla firm budowlanych",
    "priceRange": "2500-10000 PLN",
    "openingHours": "Mo-Fr 09:00-17:00"
  };

  return (
    <Layout
      title="Zgodność prawna dla firm budowlanych"
      description="BUDOLEX - Prospekt, cennik WWW, portal danych, MRP/DFG. Kompleksowe rozwiązania zgodności dla deweloperów.">
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
