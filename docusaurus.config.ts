import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'BUDOLEX',
  tagline: 'Zgodność prawna dla firm budowlanych: Prospekt, Cennik WWW, Portal Danych, integracja gov.pl.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://budolex.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'budolex', // Usually your GitHub org/user name.
  projectName: 'budolex', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/budolex/budolex-landing/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.webmanifest',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#0E5A8A',
          },
        ],
      },
    ],
    '@docusaurus/plugin-ideal-image',
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-NJWJD8B4DV',
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/budolex-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    headTags: [
      // Google Tag Manager
      {
        tagName: 'script',
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T44N59ZD');`,
      },
    ],
    metadata: [
      {
        name: 'description',
        content: 'BUDOLEX - Strony WWW z integracją gov.pl dla deweloperów. Prospekty prawne, email z przekierowaniem. Kompleksowe rozwiązania zgodności.',
      },
      {
        property: 'og:title',
        content: 'BUDOLEX - Zgodność prawna dla firm budowlanych',
      },
      {
        property: 'og:description',
        content: 'Strony WWW z integracją gov.pl, prospekty prawne i email z przekierowaniem. Kompleksowe rozwiązania zgodności dla deweloperów.',
      },
    ],
    navbar: {
      title: '',
      logo: {
        alt: 'BUDOLEX Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'Start', position: 'left'},
        {to: '/uslugi', label: 'Usługi', position: 'left'},
        {to: '/jak-dzialamy', label: 'Jak działamy', position: 'left'},
        {to: '/cennik', label: 'Cennik', position: 'left'},
        {to: '/prawo-2025', label: 'Prawo 2025', position: 'left'},
        {to: '/faq', label: 'FAQ', position: 'left'},
        {
          to: '/kontakt',
          label: 'Kontakt',
          position: 'right',
          className: 'navbar-cta-button',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Usługi',
          items: [
            {
              label: 'Strony WWW z integracją gov',
              to: '/uslugi#strony-www',
            },
            {
              label: 'Prospekty prawne',
              to: '/uslugi#prospekty-prawne',
            },
            {
              label: 'Email z przekierowaniem',
              to: '/uslugi#email-przekierowanie',
            },
          ],
        },
        {
          title: 'Prawo',
          items: [
            {
              label: 'Prawo 2025',
              to: '/prawo-2025',
            },
            {
              label: 'FAQ',
              to: '/faq',
            },
            {
              label: 'Polityka prywatności',
              to: '/polityka-prywatnosci',
            },
            {
              label: 'Regulamin',
              to: '/regulamin',
            },
          ],
        },
        {
          title: 'Kontakt',
          items: [
            {
              label: 'Umów konsultację',
              to: '/kontakt',
            },
            {
              label: 'Cennik',
              to: '/cennik',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AGADOM Sp. z o.o. | NIP: 6793287174 | KRS: 0001078988<br/>Elżbiety Drużbackiej 136, 30-699 Kraków | Tel: +48 502 091 059`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
