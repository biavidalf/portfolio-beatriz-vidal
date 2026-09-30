import type { LocalizedContent } from '../i18n/types';

interface MethodStep {
  title: string;
  description: string;
}

interface WorkMethodCopy {
  eyebrow: string;
  titleFirst: string;
  titleSecond: string;
  introduction: string;
  roleLabel: string;
  roleTitleFirst: string;
  roleTitleSecond: string;
  roleTeaser: string;
  roleDescription: string;
  linkedin: string;
  processLabel: string;
  processTitle: string;
  steps: MethodStep[];
}

export const workMethodCopy = {
  'pt-BR': {
    eyebrow: '02 / Como eu trabalho',
    titleFirst: 'IA para acelerar.',
    titleSecond: 'Processo para evoluir.',
    introduction:
      'Combatendo um dos maiores problemas que temos hoje, aplico processos estruturados para o time usar ferramentas e IA do jeito certo, aumentando produtividade e mantendo qualidade.',
    roleLabel: 'Meu papel no time',
    roleTitleFirst: 'Eu olho para o todo.',
    roleTitleSecond: 'O time avança com clareza.',
    roleTeaser:
      'Coordeno uma equipe de oito pessoas e acompanho três produtos em produção. Estou nas conversas de estratégia, nas decisões de escopo e nas dúvidas que aparecem enquanto o produto ganha forma.',
    roleDescription:
      'No desenvolvimento, a IA não trabalha sem regras. As especificações, arquitetura e boas práticas orientam o trabalho, dando prioridade ao contexto do produto. Acompanho revisão técnica e testes para manter os produtos estáveis e preparados para crescer. A conversa com clientes e pesquisa constante de mercado e inovação é crucial na hora de decidir os próximos passos.',
    linkedin: 'Conectar no LinkedIn',
    processLabel: 'Da conversa ao produto em uso',
    processTitle: 'Meu processo de desenvolvimento',
    steps: [
      {
        title: 'Encontrar oportunidades e priorizar',
        description:
          'Junto sinais dos clientes, mercado e tecnologia aos objetivos do produto para decidir o que desenvolver agora.',
      },
      {
        title: 'Estruturar para construir e crescer',
        description:
          'Defino um caminho com escopo, especificações e decisões técnicas claras. Assim, time e IA avançam com contexto e o produto pode crescer com consistência.',
      },
      {
        title: 'Validar antes e depois de publicar',
        description:
          'Acompanho revisão técnica, testes em homologação e checagem em produção. O retorno dos clientes orienta as próximas melhorias.',
      },
    ],
  },
  en: {
    eyebrow: '02 / How I work',
    titleFirst: 'AI to move faster.',
    titleSecond: 'Process to keep improving.',
    introduction:
      'I use structured processes to help teams apply tools and AI effectively, increasing productivity while maintaining quality.',
    roleLabel: 'My role on the team',
    roleTitleFirst: 'I look at the whole picture.',
    roleTitleSecond: 'The team moves forward with clarity.',
    roleTeaser:
      'I coordinate a team of eight and oversee three products in production. I take part in strategy discussions, scope decisions and the questions that come up as each product takes shape.',
    roleDescription:
      'AI does not work without guardrails in our development process. Product context, specifications, architecture and good practices guide the work. I oversee technical reviews and testing to keep products stable and ready to grow. Conversations with customers, along with ongoing market and innovation research, inform what we do next.',
    linkedin: 'Connect on LinkedIn',
    processLabel: 'From conversation to a product in use',
    processTitle: 'My development process',
    steps: [
      {
        title: 'Find opportunities and set priorities',
        description:
          'I bring customer, market and technology signals together with product goals to decide what to build next.',
      },
      {
        title: 'Create a foundation for building and growth',
        description:
          'I set a clear path through scope, specifications and technical decisions, giving the team and AI the context to move forward and helping the product grow consistently.',
      },
      {
        title: 'Validate before and after release',
        description:
          'I oversee technical reviews, staging tests and production checks. Customer feedback informs the next improvements.',
      },
    ],
  },
} satisfies LocalizedContent<WorkMethodCopy>;
