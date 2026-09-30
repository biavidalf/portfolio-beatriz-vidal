import type { LocalizedContent } from '../i18n/types';

interface SiteContent {
  navigation: {
    mainLabel: string;
    work: string;
    method: string;
    about: string;
    trajectory: string;
    contact: string;
  };
  language: {
    selectorLabel: string;
    portugueseLabel: string;
    englishLabel: string;
  };
  homeLinkLabel: string;
  footer: {
    signature: string;
    year: string;
  };
}

export const siteContent = {
  'pt-BR': {
    navigation: {
      mainLabel: 'Navegação principal',
      work: 'Trabalho',
      method: 'Como trabalho',
      about: 'Sobre',
      trajectory: 'Trajetória',
      contact: 'Vamos conversar',
    },
    language: {
      selectorLabel: 'Idioma da página',
      portugueseLabel: 'Português',
      englishLabel: 'Inglês',
    },
    homeLinkLabel: 'Beatriz Vidal, início',
    footer: {
      signature: 'Feito com intenção, de Fortaleza.',
      year: '2026',
    },
  },
  en: {
    navigation: {
      mainLabel: 'Main navigation',
      work: 'Work',
      method: 'How I work',
      about: 'About',
      trajectory: 'Career',
      contact: 'Let’s talk',
    },
    language: {
      selectorLabel: 'Page language',
      portugueseLabel: 'Portuguese',
      englishLabel: 'English',
    },
    homeLinkLabel: 'Beatriz Vidal, home',
    footer: {
      signature: 'Made with intention, in Fortaleza.',
      year: '2026',
    },
  },
} satisfies LocalizedContent<SiteContent>;
