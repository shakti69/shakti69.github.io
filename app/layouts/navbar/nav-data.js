import config from '~/config.json';

export const navLinks = [
  {
    label: 'Featured',
    pathname: '/#project-1',
  },
  {
    label: 'Quick Links',
    pathname: '/#quick-links',
  },
  {
    label: 'All Projects',
    pathname: '/#all-projects',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Instagram',
    url: `https://www.instagram.com/${config.instagram}`,
    icon: 'instagram',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
