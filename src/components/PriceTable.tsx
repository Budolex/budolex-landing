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
    name: 'Starter',
    price: '2,500 zł/mies',
    description: 'Dla mikrofirm (do 5 lokali/mies)',
    features: [
      'Generator prospektu PDF/A',
      'Widget cennik na WWW',
      'Export do Portalu Danych (1x/dobę)',
      'Email support (48h)',
      'Dokumentacja zgodności',
      'Podstawowe szablony prospektów'
    ],
    ctaText: 'Umów konsultację',
    ctaLink: '/kontakt'
  },
  {
    name: 'Pro',
    price: '4,500 zł/mies',
    description: 'Dla MŚP (do 25 lokali/mies)',
    features: [
      'Wszystko z planu Starter',
      'MRP/DFG Console pełna',
      'Dedykowany opiekun klienta',
      'SLA 24h (wsparcie)',
      'Szkolenia zespołu sprzedaży',
      'Zaawansowane raporty zgodności',
      'Integracja z CRM',
      'Backup i archiwizacja'
    ],
    featured: true,
    ctaText: 'Wybierz Pro',
    ctaLink: '/kontakt'
  },
  {
    name: 'White-glove',
    price: 'Indywidualnie',
    description: 'Dla firm bez działu IT',
    features: [
      'Wszystko z planu Pro',
      'Pełne outsourcing IT zgodności',
      'Dedykowany zespół prawno-techniczny',
      'SLA 4h (krytyczne problemy)',
      'Miesięczne konsultacje prawne',
      'Reprezentacja podczas kontroli',
      'Dostosowane procesy zgodności',
      'Priorytetowe wsparcie'
    ],
    ctaText: 'Skontaktuj się',
    ctaLink: '/kontakt'
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
