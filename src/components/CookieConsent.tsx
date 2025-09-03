import React, { useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

interface CookieConsentProps {}

const CookieConsent: React.FC<CookieConsentProps> = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check window size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Initialize gtag if not available
    if (typeof window !== 'undefined' && typeof window.gtag !== 'function') {
      // Create gtag function
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      
      // Set default consent state
      window.gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }

    // GTM noscript fallback
    if (!document.querySelector('noscript[data-gtm]')) {
      const noscript = document.createElement('noscript');
      noscript.setAttribute('data-gtm', 'true');
      noscript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T44N59ZD" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
      document.body.appendChild(noscript);
    }

    // Check if user has already made a choice
    const consent = localStorage.getItem('budolex-cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      enableTracking(savedPreferences);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const enableTracking = (prefs: typeof preferences) => {
    if (typeof window !== 'undefined') {
      // Ensure gtag is available
      if (typeof window.gtag !== 'function') {
        // Create gtag function if it doesn't exist
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag() {
          window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
      }

      try {
        if (prefs.analytics) {
          // Enable Google Analytics
          window.gtag('consent', 'update', {
            analytics_storage: 'granted'
          });
          window.gtag('config', 'G-NJWJD8B4DV');
        }
        
        if (prefs.marketing) {
          // Enable marketing cookies
          window.gtag('consent', 'update', {
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted'
          });
        }
      } catch (error) {
        console.error('Error updating tracking preferences:', error);
      }
    }
  };

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(newPreferences);
    localStorage.setItem('budolex-cookie-consent', JSON.stringify(newPreferences));
    enableTracking(newPreferences);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(newPreferences);
    localStorage.setItem('budolex-cookie-consent', JSON.stringify(newPreferences));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('budolex-cookie-consent', JSON.stringify(preferences));
    enableTracking(preferences);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  const bannerStyles: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(135deg, #0e5a8a 0%, #0a4a74 100%)',
    color: 'white',
    zIndex: 9999,
    padding: '20px',
    boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)',
    borderTop: '3px solid #ffb703',
    animation: 'slideUp 0.5s ease-out',
  };

  const contentStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: isMobile ? '1fr' : '1fr auto auto',
    alignItems: 'center',
  };

  const textStyles: React.CSSProperties = {
    margin: 0,
  };

  const buttonStyles: React.CSSProperties = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
    minWidth: '140px',
    margin: '0 5px',
  };

  return (
    <>
      <style>
        {`
          @keyframes slideUp {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
      <div style={bannerStyles}>
        <div style={contentStyles}>
          <div style={textStyles}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>🍪 Używamy plików cookie</h3>
            <p style={{ margin: 0, lineHeight: 1.5, color: 'rgba(255, 255, 255, 0.9)' }}>
              Ta strona używa plików cookie w celu zapewnienia najlepszej jakości usług. 
              Kontynuując przeglądanie, wyrażasz zgodę na ich użycie zgodnie z naszą{' '}
              <a href="/polityka-prywatnosci" target="_blank" style={{ color: '#ffb703' }}>
                polityką prywatności
              </a>.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
              <input type="checkbox" checked={preferences.necessary} disabled style={{ accentColor: '#ffb703' }} />
              <strong>Niezbędne</strong> - Wymagane do działania strony
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
              <input 
                type="checkbox" 
                checked={preferences.analytics}
                onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                style={{ accentColor: '#ffb703' }}
              />
              <strong>Analityczne</strong> - Pomagają nam ulepszać stronę
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
              <input 
                type="checkbox" 
                checked={preferences.marketing}
                onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                style={{ accentColor: '#ffb703' }}
              />
              <strong>Marketingowe</strong> - Personalizacja reklam
            </label>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button 
              style={{ ...buttonStyles, background: '#ffb703', color: '#000' }} 
              onClick={handleAcceptAll}
              onMouseOver={(e) => e.currentTarget.style.background = '#ffc530'}
              onMouseOut={(e) => e.currentTarget.style.background = '#ffb703'}
            >
              Akceptuj wszystkie
            </button>
            <button 
              style={{ ...buttonStyles, background: 'transparent', border: '2px solid white' }} 
              onClick={handleSavePreferences}
              onMouseOver={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#0e5a8a'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white'; }}
            >
              Zapisz preferencje
            </button>
            <button 
              style={{ ...buttonStyles, background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.3)' }} 
              onClick={handleRejectAll}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
            >
              Tylko niezbędne
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// Declare gtag and dataLayer for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const BudolexCookieConsent: React.FC = () => {
  return (
    <BrowserOnly>
      {() => <CookieConsent />}
    </BrowserOnly>
  );
};

export default BudolexCookieConsent;
