import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import LeadCaptureForm from '../components/LeadCaptureForm';

export default function Contact(): React.JSX.Element {
  return (
    <Layout
      title="Kontakt - BUDOLEX"
      description="Skontaktuj się z BUDOLEX. Umów bezpłatną konsultację dotyczącą zgodności prawnej firmy budowlanej.">
      <Head>
        <title>Kontakt - BUDOLEX</title>
        <meta name="description" content="Umów bezpłatną konsultację z ekspertami BUDOLEX. Email, telefon, formularz kontaktowy i kalendarz spotkań." />
      </Head>
      
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12 text--center margin-bottom--lg">
            <h1>Skontaktuj się z nami</h1>
            <p className="hero-subtitle">
              Umów bezpłatną konsultację i dowiedz się, jak BUDOLEX może zapewnić 
              zgodność prawną Twojej firmie budowlanej.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col col--6">
            <div className="feature-card">
              <h2>Dane kontaktowe</h2>
              
              <div style={{ marginBottom: '24px' }}>
                <h4>📧 Email</h4>
                <p>
                  <a href="mailto:kontakt@agadom.com.pl">kontakt@agadom.com.pl</a><br />
                  <small>Odpowiadamy w ciągu 4 godzin roboczych</small>
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h4>📞 Telefon</h4>
                <p>
                  <a href="tel:+48502091059">+48 502 091 059</a><br />
                  <small>Pon-Pt: 9:00-17:00</small>
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h4>🏢 Adres</h4>
                <p>
                  AGADOM Sp. z o.o.<br />
                  Elżbiety Drużbackiej 136<br />
                  30-699 Kraków<br />
                  <small>NIP: 6793287174 | KRS: 0001078988</small>
                </p>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h4>⏰ Godziny pracy</h4>
                <p>
                  <strong>Poniedziałek - Piątek:</strong> 9:00 - 17:00<br />
                  <strong>Sobota - Niedziela:</strong> Zamknięte<br />
                  <small>Wsparcie awaryjne 24/7 dla klientów Pro i White-glove</small>
                </p>
              </div>

              <h3>📅 Umów spotkanie online</h3>
              <p>Wybierz dogodny termin na 30-minutową bezpłatną konsultację:</p>
              
              <div style={{ marginTop: '20px', padding: '20px', background: 'rgba(255, 183, 3, 0.1)', borderRadius: '12px', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                <p style={{ margin: '0 0 15px 0', fontWeight: 'bold', color: 'var(--budolex-accent)' }}>
                  🗓️ Zarezerwuj termin online:
                </p>
                <a 
                  href="https://calendly.com/adam-krawczyk0698/budolex-meet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--primary button--lg"
                  style={{ marginRight: '10px', textDecoration: 'none' }}
                >
                  Calendly - Umów spotkanie
                </a>
                <p style={{ margin: '15px 0 0 0', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Kliknij link, aby przejść do kalendarza Calendly i wybrać dogodny termin.
                </p>
              </div>
              
              <div style={{ marginTop: '30px' }}>
                <h4>📋 Lub wypełnij formularz</h4>
                <p>Jeśli wolisz formularz kontaktowy, skorzystaj z poniższej opcji:</p>
              </div>
              
              {/* Placeholder for calendar embed */}
              <div style={{ 
                border: '2px dashed #ccc', 
                padding: '40px', 
                textAlign: 'center',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                marginBottom: '24px'
              }}>
                <p><strong>Embed kalendarza Calendly</strong></p>
                <p>Tutaj zostanie umieszczony widget kalendarza do rezerwacji spotkań</p>
                <code>&lt;Calendly inline widget&gt;</code>
              </div>
            </div>
          </div>

          <div className="col col--6">
            <LeadCaptureForm />
          </div>
        </div>

        <div className="row margin-top--xl">
          <div className="col col--12">
            <div className="feature-card">
              <h2>Co możesz oczekiwać od konsultacji?</h2>
              
              <div className="row">
                <div className="col col--6">
                  <h4>✅ Audyt zgodności (15 min)</h4>
                  <ul>
                    <li>Ocena obecnego stanu zgodności</li>
                    <li>Identyfikacja głównych ryzyk</li>
                    <li>Analiza procesów sprzedażowych</li>
                  </ul>
                </div>
                <div className="col col--6">
                  <h4>🎯 Plan działania (10 min)</h4>
                  <ul>
                    <li>Rekomendacje dopasowane do firmy</li>
                    <li>Harmonogram wdrożenia</li>
                    <li>Wstępna wycena</li>
                  </ul>
                </div>
              </div>
              
              <div className="row">
                <div className="col col--6">
                  <h4>❓ Pytania i odpowiedzi (5 min)</h4>
                  <ul>
                    <li>Wyjaśnienie wątpliwości</li>
                    <li>Szczegóły techniczne</li>
                    <li>Warunki współpracy</li>
                  </ul>
                </div>
                <div className="col col--6">
                  <h4>📋 Następne kroki</h4>
                  <ul>
                    <li>Szczegółowa oferta (w ciągu 24h)</li>
                    <li>Materiały dodatkowe</li>
                    <li>Umowienie dalszych spotkań</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row margin-top--xl">
          <div className="col col--8 col--offset-2">
            <div style={{ 
              backgroundColor: '#0e5a8a', 
              color: 'white', 
              padding: '32px', 
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <h3>Potrzebujesz pilnej pomocy?</h3>
              <p>
                Kontrola UOKiK już w przyszłym tygodniu? Problemy z eksportem do Portalu Danych? 
                Skontaktuj się z nami natychmiast.
              </p>
              <p>
                <strong>Hotline awaryjny:</strong>{' '}
                <a href="tel:+48987654321" style={{ color: '#ffb703' }}>
                  +48 987 654 321
                </a>
              </p>
              <small>Dostępny 24/7 dla klientów Pro i White-glove</small>
            </div>
          </div>
        </div>

        <div className="row margin-top--xl">
          <div className="col col--12">
            <h2>Zgody i polityka prywatności</h2>
            <div className="feature-card">
              <h4>🔒 Jak przetwarzamy Twoje dane</h4>
              <ul>
                <li><strong>Administrator:</strong> AGADOM Sp. z o.o.</li>
                <li><strong>Cel:</strong> Udzielenie odpowiedzi na zapytanie i nawiązanie współpracy</li>
                <li><strong>Podstawa prawna:</strong> Zgoda (art. 6 ust. 1 lit. a RODO)</li>
                <li><strong>Okres przechowywania:</strong> 3 lata lub do odwołania zgody</li>
                <li><strong>Prawa:</strong> Dostęp, sprostowanie, usunięcie, ograniczenie, przenoszenie, sprzeciw</li>
              </ul>
              <p>
                Szczegółowe informacje znajdziesz w naszej{' '}
                <a href="/polityka-prywatnosci">polityce prywatności</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
