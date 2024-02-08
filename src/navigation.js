import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'La prière',
      links: [
        {
          text: 'Son importance',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Son objectif',
          href: getPermalink('/homes/startup'),
        },
        {
          text: "Le 2ème pilier de l'islam",
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Ses conditions',
      links: [
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
      ],
    },
    {
      text: 'Ses piliers',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
      ],
    },
    {
      text: 'Ses obligations',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
      ],
    },
    {
      text: 'Ses annulatifs',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
      ],
    },
    {
      text: 'Ses recommandations',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
      ],
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'La prière',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
      ],
    },
    {
      title: 'Ses conditions',
      links: [
        { text: 'Developer API', href: '#' },
      ],
    },
    {
      title: 'Ses obligations',
      links: [
        { text: 'Docs', href: '#' },
      ],
    },
    {
      title: 'Ses annulatifs',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
