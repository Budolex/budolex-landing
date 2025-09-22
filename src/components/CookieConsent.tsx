import React, { useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

declare global {
  interface Window {
    cookieconsent: any;
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const enableTracking = (consent: boolean) => {
  if (typeof window !== 'undefined') {
    // Ensure gtag is available
    if (typeof window.gtag !== 'function') {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
    }

    try {
      if (consent) {
        // Enable Google Analytics
        window.gtag('consent', 'update', {
          analytics_storage: 'granted'
        });
        window.gtag('config', 'G-NJWJD8B4DV');
      } else {
        // Disable Google Analytics
        window.gtag('consent', 'update', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied'
        });
      }
    } catch (error) {
      console.error('Error updating tracking preferences:', error);
    }
  }
};

const CookieConsent: React.FC = () => {
  useEffect(() => {
    // Import cookieconsent library and CSS
    Promise.all([
      import('cookieconsent'),
      import('cookieconsent/build/cookieconsent.min.css')
    ]).then(([cookieconsentModule]) => {
      const cookieconsent = cookieconsentModule.default;
      
      // Initialize gtag if not available
      if (typeof window !== 'undefined' && typeof window.gtag !== 'function') {
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

      // Configure cookieconsent for Poland
      window.cookieconsent.initialise({
        palette: {
          popup: {
            background: '#0e5a8a',
            text: '#ffffff'
          },
          button: {
            background: '#ffb703',
            text: '#000000'
          }
        },
        theme: 'classic',
        position: 'bottom',
        type: 'opt-in',
        content: {
          message: 'Ta strona używa plików cookie, aby zapewnić najlepsze doświadczenia użytkownika. Kontynuując korzystanie z tej strony, wyrażasz zgodę na używanie plików cookie.',
          dismiss: 'Rozumiem',
          deny: 'Odrzuć',
          allow: 'Akceptuj',
          link: 'Dowiedz się więcej',
          href: '/polityka-prywatnosci',
          close: '&#x274c;',
          policy: 'Polityka prywatności',
          target: '_blank'
        },
        law: {
          regionalLaw: true,
          countryCode: 'PL',
          hasTransition: true
        },
        location: true,
        revokable: true,
        animateRevokable: true,
        showLink: true,
        revokeBtn: '<div class="cc-revoke {{classes}}">Ustawienia cookies</div>',
        compliance: {
          'opt-in': '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',
        },
        onInitialise: function (status: string) {
          const type = this.options.type;
          const didConsent = this.hasConsented();
          if (type === 'opt-in' && didConsent) {
            enableTracking(true);
          }
          if (type === 'opt-out' && !didConsent) {
            enableTracking(false);
          }
        },
        onStatusChange: function(status: string, chosenBefore: boolean) {
          const type = this.options.type;
          const didConsent = this.hasConsented();
          if (type === 'opt-in' && didConsent) {
            enableTracking(true);
          }
          if (type === 'opt-out' && !didConsent) {
            enableTracking(false);
          }
        },
        onRevokeChoice: function() {
          const type = this.options.type;
          if (type === 'opt-in') {
            enableTracking(false);
          }
          if (type === 'opt-out') {
            enableTracking(true);
          }
        }
      });
    }).catch((error) => {
      console.error('Error loading cookieconsent:', error);
    });

    // GTM noscript fallback
    if (!document.querySelector('noscript[data-gtm]')) {
      const noscript = document.createElement('noscript');
      noscript.setAttribute('data-gtm', 'true');
      noscript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T44N59ZD" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
      document.body.appendChild(noscript);
    }
  }, []);

  return null;
};

export default function CookieConsentWrapper(): React.JSX.Element {
  return (
    <BrowserOnly fallback={<div />}>
      {() => <CookieConsent />}
    </BrowserOnly>
  );
}
