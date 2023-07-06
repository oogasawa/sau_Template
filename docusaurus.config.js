// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Template00',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  /*  baseUrl: '/', */
  baseUrl: "/~oogasawa/sau_Template00/",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'github.com/oogasawa', // Usually your GitHub org/user name.
  projectName: 'sau_Template00', // Usually your repo name.
  plugins: [[require.resolve('docusaurus-lunr-search'), {
    languages: ['ja', 'en']
  }]],
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          // editUrl: 'https://github.com/oogasawa/sau_Template00/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
          'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'Template00',
      logo: {
        alt: 'My Site Logo',
        src: 'img/king_logo.png',
      },

      items: [
        
        {
          type: "doc",
          docId: "TopPage/intro",
          position: 'left',
          label: 'Documentation',
        },

        {to: '/blog', label: 'Blog', position: 'left'},
        {type: 'localeDropdown',
         position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: 'tutorial-basics/create-a-page',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),
};

module.exports = config;
