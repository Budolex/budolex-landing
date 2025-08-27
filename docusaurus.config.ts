import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'BUDOLEX',
  tagline: 'Zgodność prawna dla firm budowlanych: Prospekt, Cennik WWW, Portal Danych, MRP/DFG.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://budolex.pl',
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
        docs: false, // Disable docs for now as per instructions
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Remove edit links
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly' as const,
          priority: 0.5,
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
        trackingID: process.env.GA4_ID || 'G-XXXXXXXXXX',
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/budolex-social-card.jpg',
    metadata: [
      {
        name: 'description',
        content: 'BUDOLEX - Zgodność prawna dla firm budowlanych. Prospekt, cennik WWW, portal danych, MRP/DFG. Kompleksowe rozwiązania zgodności dla deweloperów.',
      },
      {
        property: 'og:title',
        content: 'BUDOLEX - Zgodność prawna dla firm budowlanych',
      },
      {
        property: 'og:description',
        content: 'Prospekt, cennik WWW, portal danych, MRP/DFG. Kompleksowe rozwiązania zgodności dla deweloperów.',
      },
    ],
    navbar: {
      title: 'BUDOLEX',
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
        {to: '/blog', label: 'Blog', position: 'left'},
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
              label: 'Generator Prospektu',
              to: '/uslugi#generator-prospektu',
            },
            {
              label: 'Widget WWW',
              to: '/uslugi#widget-www',
            },
            {
              label: 'Export do Portalu Danych',
              to: '/uslugi#export-portal',
            },
            {
              label: 'MRP/DFG Console',
              to: '/uslugi#mrp-dfg',
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
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Cennik',
              to: '/cennik',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BUDOLEX. Wszystkie prawa zastrzeżone.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
