import React, { useState } from 'react';

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="lead-form">
      <h3>Skontaktuj się z nami</h3>
      <form 
        name="kontakt" 
        method="POST" 
        data-netlify="true" 
        netlify-honeypot="bot-field"
        action="/dziekujemy"
      >
        <input type="hidden" name="form-name" value="kontakt" />
        <div style={{ display: 'none' }}>
          <label>
            Don't fill this out: <input name="bot-field" />
          </label>
        </div>
        
        <div className="form-group">
          <label htmlFor="name">Imię i nazwisko *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Firma</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Wiadomość *</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Opisz swoje potrzeby związane ze zgodnością prawną..."
            required
          />
        </div>

        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            <span className="checkmark"></span>
            Wyrażam zgodę na przetwarzanie moich danych osobowych przez BUDOLEX 
            w celu udzielenia odpowiedzi na zapytanie zgodnie z{' '}
            <a href="/polityka-prywatnosci" target="_blank">
              polityką prywatności
            </a>
            . *
          </label>
        </div>

        <button type="submit" className="button button--primary button--lg" style={{ width: '100%' }}>
          Wyślij zapytanie
        </button>
      </form>
    </div>
  );
}
