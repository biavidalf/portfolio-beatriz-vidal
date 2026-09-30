import type { Locale } from './types';

export type Page = 'home' | 'trajectory';

export const localizedRoutes: Record<Page, Record<Locale, string>> = {
  home: {
    'pt-BR': '/',
    en: '/en',
  },
  trajectory: {
    'pt-BR': '/trajetoria.html',
    en: '/en/trajectory.html',
  },
};

export function getLocalizedPath(page: Page, locale: Locale): string {
  return localizedRoutes[page][locale];
}
