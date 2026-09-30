import type { LocalizedContent } from '../i18n/types';

export interface HeroWord {
  text: string;
  emphasis?: 'serif' | 'strong';
}

export interface HomeCopy {
  hero: {
    eyebrow: string;
    headline: HeroWord[];
    accessibleHeadline: string;
    introduction: { beforeName: string; afterName: string };
    primaryAction: string;
    emailSubject: string;
    projectsAction: string;
    photoAlt: string;
    caption: { firstLine: string; secondLine: string };
    photoMeta: string;
    location: string;
    role: string;
  };
  about: {
    eyebrow: string;
    titleFirstLine: string;
    titleEmphasisFirst: string;
    titleEmphasisSecond: string;
    description: string;
    affiliationsLabel: string;
    behireDescription: string;
    behireLink: string;
    moldsoftDescription: string;
    moldsoftLink: string;
    personal: string;
    educationFirst: string;
    educationSecond: string;
    trajectoryLink: string;
    slideshowLabel: string;
    caption: string;
    controlsLabel: string;
    previousPhoto: string;
    nextPhoto: string;
    pause: string;
    play: string;
  };
  gallery: {
    eyebrow: string;
    titleFirst: string;
    titleEmphasis: string;
    titleStrong: string;
    introduction: string;
    controlsLabel: string;
    pause: string;
    play: string;
    imageAlts: string[];
  };
  contact: {
    ariaLabel: string;
    eyebrow: string;
    titleFirst: string;
    titleSecond: string;
    description: string;
    instagramDetail: string;
    whatsappDetail: string;
    linkedinDetail: string;
    emailLabel: string;
    emailDetail: string;
    copyEmailLabel: string;
    copyEmail: string;
    copiedEmail: string;
    copiedStatus: string;
    copyFailure: string;
    tiktokDetail: string;
    phonePrompt: string;
    phoneAction: string;
  };
}

export const homeCopy: LocalizedContent<HomeCopy> = {
  'pt-BR': {
    hero: {
      eyebrow: 'Entre ideias · pessoas · tecnologia',
      headline: [
        { text: 'Te' },
        { text: 'ajudo' },
        { text: 'a' },
        { text: 'transformar', emphasis: 'serif' },
        { text: 'desafios' },
        { text: 'reais' },
        { text: 'em' },
        { text: 'produtos', emphasis: 'strong' },
        { text: 'digitais.', emphasis: 'strong' },
      ],
      accessibleHeadline: 'Te ajudo a transformar desafios reais em produtos digitais.',
      introduction: {
        beforeName: 'Sinta-se em casa! Me chamo ',
        afterName:
          '. Desenvolvo aplicações e coordeno iniciativas de inovação, conectando pessoas e tecnologia para fazer boas ideias acontecerem.',
      },
      primaryAction: 'Conversar por e-mail',
      emailSubject: 'Vim do seu portfólio e quero conversar',
      projectsAction: 'Conheça meu trabalho',
      photoAlt: 'Beatriz sorrindo durante uma conversa em um evento de tecnologia.',
      caption: {
        firstLine: 'É sobre tecnologia.',
        secondLine: 'E sobre quem está do outro lado.',
      },
      photoMeta: 'Boas trocas, dentro e fora da tela.',
      location: 'Recifense, vivendo em Fortaleza.',
      role: 'Desenvolvedora / Coordenadora de inovação',
    },
    about: {
      eyebrow: '03 / Um pouco de mim',
      titleFirstLine: 'Gosto de construir.',
      titleEmphasisFirst: 'E de',
      titleEmphasisSecond: 'construir junto.',
      description:
        'Entre código, produtos e conversas, gosto de entender o que as pessoas precisam e encontrar caminhos para fazer acontecer. Sou afetuosa nas relações e objetiva na hora de resolver um problema.',
      affiliationsLabel: 'Atuação profissional',
      behireDescription: 'Cofundadora · desenvolvimento de produtos digitais',
      behireLink: 'Conhecer a BeHire',
      moldsoftDescription: 'Coordenadora da vertente de inovação',
      moldsoftLink: 'Visitar a Moldsoft',
      personal:
        'Fora das telas: recifense morando em Fortaleza. Gosto de estar com amigos e família, praticar arco e flecha e explorar a cidade com um olhar curioso.',
      educationFirst: 'Técnico em Informática · IFCE',
      educationSecond: 'Análise e Desenvolvimento de Sistemas · Unifor',
      trajectoryLink: 'Conheça minha trajetória',
      slideshowLabel: 'Fotos de trabalho, voluntariado e vida fora das telas',
      caption: 'Entre trabalho, voluntariado e vida fora das telas.',
      controlsLabel: 'Controles das fotos',
      previousPhoto: 'Foto anterior',
      nextPhoto: 'Próxima foto',
      pause: 'Pausar',
      play: 'Reproduzir',
    },
    gallery: {
      eyebrow: '04 / Encontros & trocas',
      titleFirst: 'Transformando',
      titleEmphasis: 'complexidade técnica',
      titleStrong: 'em comunicação envolvente',
      introduction:
        'Apresento aplicações desenvolvidas em eventos estratégicos do setor, traduzindo complexidade técnica em comunicação clara e envolvente e conectando inovação a oportunidades reais de mercado.',
      controlsLabel: 'Controles do carrossel',
      pause: 'Pausar',
      play: 'Retomar',
      imageAlts: [
        'Beatriz apresenta uma demonstração em uma tela azul durante um evento de tecnologia.',
        'Beatriz conversa com participantes em um encontro de tecnologia.',
        'Beatriz apresenta uma solução digital a uma visitante em um estande.',
        'Beatriz apresenta uma solução para um grupo de visitantes.',
        'Beatriz e colegas da Moldsoft em um evento no estande da FIEC.',
        'Beatriz e colegas apresentam o Mold IA X em um evento.',
        'Beatriz e colegas junto a uma demonstração do Mold IA X na Unifor.',
        'Beatriz com colegas durante um evento de tecnologia.',
      ],
    },
    contact: {
      ariaLabel: 'Envie uma mensagem para Beatriz',
      eyebrow: '05 / Vamos começar',
      titleFirst: 'Uma boa conversa',
      titleSecond: 'pode ser o começo.',
      description:
        'Escolha o canal que preferir para falar de oportunidades, produtos, parcerias ou simplesmente trocar ideia.',
      instagramDetail: '@biavidalf · mande um oi ou acompanhe os bastidores',
      whatsappDetail: 'Conversa direta sobre oportunidades, ideias e parcerias · +55 85 99700-8387',
      linkedinDetail: 'Vamos nos conectar para falar de tecnologia, inovação e liderança.',
      emailLabel: 'E-mail',
      emailDetail:
        'Convites, oportunidades e conversas com mais contexto · beatrizvidal.dev@gmail.com',
      copyEmailLabel: 'Copiar endereço de e-mail',
      copyEmail: 'Copiar',
      copiedEmail: 'Copiado',
      copiedStatus: 'E-mail copiado. Até já!',
      copyFailure: 'Não foi possível copiar. O endereço está logo acima para você selecionar.',
      tiktokDetail: '@_vidalb · acompanhe meus conteúdos e bastidores',
      phonePrompt: 'Prefere conversar por voz?',
      phoneAction: 'Me ligue · +55 85 99700-8387',
    },
  },
  en: {
    hero: {
      eyebrow: 'Ideas · people · technology',
      headline: [
        { text: 'I help' },
        { text: 'turn' },
        { text: 'real-world' },
        { text: 'challenges', emphasis: 'serif' },
        { text: 'into' },
        { text: 'digital', emphasis: 'strong' },
        { text: 'products.', emphasis: 'strong' },
      ],
      accessibleHeadline: 'I help turn real-world challenges into digital products.',
      introduction: {
        beforeName: 'Make yourself at home. I’m ',
        afterName:
          '. I build applications and lead innovation initiatives, bringing people and technology together to make good ideas happen.',
      },
      primaryAction: 'Get in touch by email',
      emailSubject: 'I found your portfolio and would like to talk',
      projectsAction: 'Explore my work',
      photoAlt: 'Beatriz smiling during a conversation at a technology event.',
      caption: {
        firstLine: 'It’s about technology.',
        secondLine: 'And the people on the other side.',
      },
      photoMeta: 'Good conversations, on and off screen.',
      location: 'Born in Recife, now based in Fortaleza.',
      role: 'Software developer / Innovation coordinator',
    },
    about: {
      eyebrow: '03 / A little about me',
      titleFirstLine: 'I love building.',
      titleEmphasisFirst: 'And building',
      titleEmphasisSecond: 'together.',
      description:
        'Between code, products and conversations, I enjoy understanding what people need and finding ways to make things happen. I value warm relationships and take a practical approach to solving problems.',
      affiliationsLabel: 'Professional roles',
      behireDescription: 'Co-founder · digital product development',
      behireLink: 'Discover BeHire',
      moldsoftDescription: 'Innovation team coordinator',
      moldsoftLink: 'Visit Moldsoft',
      personal:
        'Away from screens: I was born in Recife and now live in Fortaleza. I enjoy spending time with friends and family, practising archery and exploring the city with a curious eye.',
      educationFirst: 'Technical qualification in IT · IFCE',
      educationSecond: 'Systems Analysis and Development · Unifor',
      trajectoryLink: 'Explore my career',
      slideshowLabel: 'Photos of work, volunteering and life away from screens',
      caption: 'Work, volunteering and life away from screens.',
      controlsLabel: 'Photo controls',
      previousPhoto: 'Previous photo',
      nextPhoto: 'Next photo',
      pause: 'Pause',
      play: 'Play',
    },
    gallery: {
      eyebrow: '04 / Events & conversations',
      titleFirst: 'Turning',
      titleEmphasis: 'technical complexity',
      titleStrong: 'into engaging communication',
      introduction:
        'I present applications at key industry events, making technical ideas clear and engaging while connecting innovation with real market opportunities.',
      controlsLabel: 'Carousel controls',
      pause: 'Pause',
      play: 'Resume',
      imageAlts: [
        'Beatriz presents a demo on a blue screen at a technology event.',
        'Beatriz talks with attendees at a technology event.',
        'Beatriz presents a digital solution to a visitor at a stand.',
        'Beatriz presents a solution to a group of visitors.',
        'Beatriz and Moldsoft colleagues at the FIEC event stand.',
        'Beatriz and colleagues present Mold IA X at an event.',
        'Beatriz and colleagues beside a Mold IA X demo at Unifor.',
        'Beatriz with colleagues at a technology event.',
      ],
    },
    contact: {
      ariaLabel: 'Send Beatriz a message',
      eyebrow: '05 / Let’s get started',
      titleFirst: 'A good conversation',
      titleSecond: 'could be the start.',
      description:
        'Choose the channel that suits you to talk about opportunities, products, partnerships or simply exchange ideas.',
      instagramDetail: '@biavidalf · say hello or follow what I’m working on',
      whatsappDetail:
        'Direct conversations about opportunities, ideas and partnerships · +55 85 99700-8387',
      linkedinDetail: 'Connect with me to talk about technology, innovation and leadership.',
      emailLabel: 'Email',
      emailDetail:
        'Invitations, opportunities and more in-depth conversations · beatrizvidal.dev@gmail.com',
      copyEmailLabel: 'Copy email address',
      copyEmail: 'Copy',
      copiedEmail: 'Copied',
      copiedStatus: 'Email address copied.',
      copyFailure: 'Could not copy the address. You can select it above.',
      tiktokDetail: '@_vidalb · follow my content and behind-the-scenes posts',
      phonePrompt: 'Would you rather talk by phone?',
      phoneAction: 'Call me · +55 85 99700-8387',
    },
  },
};
