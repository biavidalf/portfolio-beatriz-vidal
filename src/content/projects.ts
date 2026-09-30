import type { LocalizedContent } from '../i18n/types';

export interface ProjectSummary {
  number: string;
  title: string;
  company: string;
  subtitle: string;
  tagLabel: string;
  tags: string[];
  summary: string;
}

interface ProjectContent {
  tryOn: ProjectSummary;
  moldsoftSite: ProjectSummary;
  tumtumpa: ProjectSummary;
  behire: ProjectSummary;
}

export const projectContent = {
  'pt-BR': {
    tryOn: {
      number: '02',
      title: 'Try-On',
      company: 'MoldIAX Tecnologia',
      subtitle: 'Provador virtual e plataforma de varejo',
      tagLabel: 'Destaques do Try-On',
      tags: ['IA generativa', 'Provador virtual', 'Em produção'],
      summary: 'Da oportunidade de mercado a um produto em uso por lojistas.',
    },
    moldsoftSite: {
      number: '02',
      title: 'Site institucional',
      company: 'Moldsoft Tecnologia',
      subtitle: 'Uma experiência digital para apresentar a empresa e suas soluções',
      tagLabel: 'Destaques do site',
      tags: ['Next.js', 'SEO', 'Responsivo'],
      summary: 'Objetivo, design e código conectados em um site pronto para evoluir.',
    },
    tumtumpa: {
      number: '03',
      title: 'TumTumPá',
      company: 'Neural Systems',
      subtitle: 'Repertório, modo palco e comunidade musical',
      tagLabel: 'Destaques do TumTumPá',
      tags: ['React', 'Modo palco', 'Comunidade'],
      summary: 'Cifras, setlists e banda no mesmo tempo.',
    },
    behire: {
      number: '04',
      title: 'BeHire',
      company: 'Neural Systems',
      subtitle: 'Marketing com IA orientada pela marca',
      tagLabel: 'Destaques da BeHire',
      tags: ['IA generativa', 'React', 'Revisão humana'],
      summary: 'Estratégia, produção e aprovação num só ciclo.',
    },
  },
  en: {
    tryOn: {
      number: '02',
      title: 'Try-On',
      company: 'MoldIAX Tecnologia',
      subtitle: 'Virtual try-on and retail platform',
      tagLabel: 'Try-On highlights',
      tags: ['Generative AI', 'Virtual try-on', 'In production'],
      summary: 'From a market opportunity to a product used by retailers.',
    },
    moldsoftSite: {
      number: '02',
      title: 'Corporate website',
      company: 'Moldsoft Tecnologia',
      subtitle: 'A digital experience presenting the company and its solutions',
      tagLabel: 'Website highlights',
      tags: ['Next.js', 'SEO', 'Responsive'],
      summary: 'Purpose, design and code brought together in a site built to evolve.',
    },
    tumtumpa: {
      number: '03',
      title: 'TumTumPá',
      company: 'Neural Systems',
      subtitle: 'Repertoire, stage mode and a music community',
      tagLabel: 'TumTumPá highlights',
      tags: ['React', 'Stage mode', 'Community'],
      summary: 'Chord sheets, setlists and bandmates in sync.',
    },
    behire: {
      number: '04',
      title: 'BeHire',
      company: 'Neural Systems',
      subtitle: 'AI-powered marketing guided by the brand',
      tagLabel: 'BeHire highlights',
      tags: ['Generative AI', 'React', 'Human review'],
      summary: 'Strategy, production and approval in one cycle.',
    },
  },
} satisfies LocalizedContent<ProjectContent>;
