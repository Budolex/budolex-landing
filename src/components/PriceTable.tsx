import React from 'react';
import Link from '@docusaurus/Link';

interface PricePlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

const plans: PricePlan[] = [
  {
    name: 'Standard',
    price: '12,000 zł + 200 zł/mies',
    description: 'Kompletny pakiet dla każdej inwestycji - rabat 20% wliczony',
    features: [
      '🌐 Strona WWW z integracją gov.pl dla inwestycji',
      '📋 Prospekt stworzony przez nasz zespół prawników',
      '📧 Email z przekierowaniem (niewidoczny dla klientów)',
      '👤 Dedykowany opiekun klienta',
      '🔗 Integracja z portalami rządowymi',
      '⚡ Priorytetowe wsparcie (SLA 4h)',
      '📞 Miesięczne konsultacje prawne (2h gratis)',
      '📊 Zaawansowane raporty zgodności',
      '💾 Backup i archywizacja danych'
    ],
    featured: true,
    ctaText: 'Wybierz Standard',
    ctaLink: '#konsultacja'
  },
  {
    name: 'White Glove',
    price: 'Wycena indywidualna',
    description: 'Pełen serwis premium dla wymagających klientów',
    features: [
      'Wszystko z pakietu Standard',
      '🏠 Wizualizacje 3D na stronie WWW',
      '🏷️ Rozwiązanie white-label (Twoja marka)',
      '⚡ Najwyższy priorytet wsparcia (SLA 2h)',
      '🎨 Niestandardowe dostosowania UI/UX',
      '👥 Dedykowany zespół prawno-techniczny',
      '🔧 Integracja z Twoimi systemami',
      '📈 Zaawansowana analityka sprzedaży',
      '🛡️ Gwarancja zgodności 100%',
      '📞 Nielimitowane konsultacje prawne'
    ],
    ctaText: 'Skontaktuj się',
    ctaLink: '#konsultacja'
  }
];

export default function PriceTable() {
  return (
    <div className="price-table">
      {plans.map((plan, index) => (
        <div key={index} className={`price-card ${plan.featured ? 'featured' : ''}`}>
          <h3>{plan.name}</h3>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '16px 0', color: 'var(--budolex-primary)' }}>
            {plan.price}
          </div>
          <p style={{ color: 'var(--budolex-gray-medium)', marginBottom: '24px' }}>
            {plan.description}
          </p>
          <ul style={{ textAlign: 'left', margin: '24px 0', padding: '0', listStyle: 'none' }}>
            {plan.features.map((feature, idx) => (
              <li key={idx} style={{ margin: '8px 0', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ 
                  position: 'absolute', 
                  left: '0', 
                  color: 'var(--budolex-accent)' 
                }}>
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
            <Link
              className={`button button--lg ${plan.featured ? 'button--primary' : 'button--outline'}`}
              to={plan.ctaLink || '/kontakt'}
              style={{ width: '100%' }}
            >
              {plan.ctaText || 'Skontaktuj się'}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
