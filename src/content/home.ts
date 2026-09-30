import type { LocalizedContent } from '../i18n/types';
import { homePtContent } from './home.pt';
import type { HomeContent } from './home.types';

const homeEnContent: HomeContent = {
  aboutPhotos: homePtContent.aboutPhotos.map((photo, index) => ({
    ...photo,
    alt: [
      'Beatriz presenting an application to a group at an event.',
      'Beatriz with two dogs during a volunteering activity.',
      'Beatriz practising archery.',
      'A bicycle beside a lake on a sunny day.',
      'Palm trees and beach umbrellas under a cloudy sky.',
      'A group of people gathered on the beach.',
      'A group of people gathered in front of flowering trees.',
    ][index],
  })),
};

export const homeContent = {
  'pt-BR': homePtContent,
  en: homeEnContent,
} satisfies LocalizedContent<HomeContent>;
