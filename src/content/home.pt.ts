import type { AboutPhoto } from './home.types';

export const homePtContent = {
  aboutPhotos: [
    {
      src: '/assets/beatriz-apresentando.webp',
      width: 1800,
      height: 1013,
      alt: 'Beatriz apresentando uma aplicação para um grupo de pessoas em um evento.',
    },
    {
      src: '/assets/about-volunteering.webp',
      width: 1200,
      height: 1600,
      alt: 'Beatriz com dois cachorros durante uma atividade de voluntariado.',
    },
    {
      src: '/assets/about-archery.webp',
      width: 994,
      height: 1600,
      alt: 'Beatriz praticando arco e flecha.',
    },
    {
      src: '/assets/about-bike.webp',
      width: 1200,
      height: 1600,
      alt: 'Bicicleta à beira de um lago em um dia ensolarado.',
    },
    {
      src: '/assets/about-beach.webp',
      width: 960,
      height: 1280,
      alt: 'Coqueiros e guarda-sóis na praia sob um céu nublado.',
    },
    {
      src: '/assets/about-beach-group.webp',
      width: 1600,
      height: 1067,
      alt: 'Grupo de pessoas reunido na praia.',
    },
    {
      src: '/assets/about-friends.webp',
      width: 1600,
      height: 1200,
      alt: 'Grupo de pessoas reunido diante de árvores floridas.',
    },
  ] satisfies AboutPhoto[],
};
