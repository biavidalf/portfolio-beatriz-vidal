import type { LocalizedContent } from '../i18n/types';

interface DetailCopy {
  heading: string;
  description: string;
}

interface WorkShowcaseCopy {
  eyebrow: string;
  headingFirst: string;
  headingEmphasis: string;
  introduction: string;
  tabsLabel: string;
  casesTab: string;
  productsTab: string;
  technologyLabel: string;
  refinery: {
    videoAlt: string;
    eyebrow: string;
    title: string;
    description: string[];
    tagsLabel: string;
    tags: string[];
    blogLink: string;
    details: DetailCopy[];
  };
  tryOn: {
    videoAlt: string;
    details: DetailCopy[];
    techNote: string;
    link: string;
  };
  mascot: {
    stageCaption: string;
    imageAlt: string;
    stageNote: string;
    status: string;
    description: string[];
    tagsLabel: string;
    tags: string[];
    link: string;
    details: DetailCopy[];
  };
  moldsoftSite: {
    videoAlt: string;
    details: DetailCopy[];
    flowLabel: string;
    flowSteps: string[];
    techNote: string;
    link: string;
  };
  tumtumpa: {
    details: DetailCopy[];
    techNote: string;
    link: string;
  };
  behire: {
    details: DetailCopy[];
    techNote: string;
    link: string;
  };
}

const commonTechNote =
  'React, Tailwind CSS, Docker and Amazon S3. ChatGPT supports specification-driven development.';

export const workShowcaseCopy = {
  'pt-BR': {
    eyebrow: '01 / Trabalho selecionado',
    headingFirst: 'Cases &',
    headingEmphasis: 'produtos.',
    introduction:
      'Da estratégia à produção: soluções que construí e projetos que ajudei a fazer crescer.',
    tabsLabel: 'Cases e produtos selecionados',
    casesTab: 'Cases',
    productsTab: 'Produtos',
    technologyLabel: 'Na construção:',
    refinery: {
      videoAlt:
        'Demonstração da detecção de EPI por visão computacional em uma refinaria da Petrobras',
      eyebrow: 'Case · IA aplicada à indústria',
      title: 'Visão computacional na Petrobras',
      description: [
        'Coordenei a implantação do primeiro projeto de visão computacional em uma refinaria da Petrobras, focado em detecção de EPI, dentro do prazo e com acompanhamento próximo do cliente. O sucesso dessa entrega gerou confiança para novas negociações e ampliou nossa atuação: hoje, quatro modelos de IA estão em operação nessa refinaria.',
        'Sigo conectando as necessidades da operação às decisões de produto e às entregas do time técnico.',
      ],
      tagsLabel: 'Destaques do case',
      tags: ['Visão computacional', 'Segurança operacional', '4 modelos em operação'],
      blogLink: 'Ler o case da Petrobras no MoldBlog',
      details: [
        {
          heading: 'O desafio',
          description:
            'Inspeções manuais dificultavam acompanhar continuamente o uso de equipamentos de proteção em áreas críticas. O projeto precisava fazer sentido para a rotina da refinaria e demonstrar valor desde a primeira entrega.',
        },
        {
          heading: 'Estratégia de entrada',
          description:
            'Começamos com um escopo menor e fechado e um formato comercial negociado com o cliente. Essa escolha viabilizou a primeira implantação e permitiu demonstrar valor na operação real.',
        },
        {
          heading: 'Expansão no cliente',
          description:
            'A implantação no prazo, a qualidade da entrega e a proximidade após a entrada em produção fortaleceram a parceria. Participei das conversas e negociações para ampliar nossa atuação em segurança e produtividade. Hoje, quatro modelos de IA operam na refinaria.',
        },
        {
          heading: 'Minha contribuição',
          description:
            'Coordenei prioridades, prazos, riscos e entregas do time, fazendo a ponte entre cliente, negócio e desenvolvimento. Acompanhei a implantação e sigo conduzindo a evolução das aplicações, traduzindo novas necessidades em escopo e especificações.',
        },
      ],
    },
    tryOn: {
      videoAlt: 'Prévia em vídeo da plataforma Try-On',
      details: [
        {
          heading: 'A oportunidade',
          description:
            'Identificamos a oportunidade no varejo, acompanhamos pesquisas da área e escolhemos o momento de transformar a ideia em produto. Comprar roupa online sem saber como ela veste ainda gera dúvidas para clientes e lojas.',
        },
        {
          heading: 'IA generativa na prática',
          description:
            'O Try-On usa IA generativa no provador virtual e na criação de conteúdo para o varejo. A plataforma também reúne catálogo, loja online, estoque, pedidos e indicadores para os lojistas.',
        },
        {
          heading: 'Minha contribuição',
          description:
            'Participei da ideação e da estratégia e sigo à frente da evolução do produto desde o MVP. Coordeno o time, reviso escopo e especificações e incorporo feedback dos lojistas às próximas versões.',
        },
      ],
      techNote:
        'React, Tailwind CSS, Docker e Amazon S3. ChatGPT apoia o desenvolvimento orientado por especificações.',
      link: 'Explorar o Try-On',
    },
    mascot: {
      stageCaption: 'Lil Mascot / Companheiro de desktop',
      imageAlt: 'Personagem do Lil Mascot: pequeno arqueiro com capuz claro e roupa verde.',
      stageNote: 'um pequeno passo de cada vez',
      status: 'Produto · organização e foco',
      description: [
        'Um companheiro flutuante no desktop que acompanha você entre janelas e mantém o próximo passo sempre à vista.',
        'Nasceu de uma dificuldade que eu vivia e de estudos em psicologia, especialmente sobre pessoas neurodivergentes.',
      ],
      tagsLabel: 'Tecnologias e formato do Lil Mascot',
      tags: ['React', 'Electron', 'Aplicativo para Windows'],
      link: 'Conhecer o produto',
      details: [
        {
          heading: 'O desafio',
          description:
            'Eu alternava entre ferramentas para organizar tarefas, ideias e tempo de foco. Ao fechar as janelas, perdia de vista o que precisava fazer. Também percebia como muitas ideias e projetos podiam travar o começo. Quis criar um apoio sempre à vista que ajudasse a dividir objetivos em passos menores e a tirar ideias do papel.',
        },
        {
          heading: 'Decisões de interface',
          description:
            'Eu queria que o mascotinho continuasse por perto mesmo quando a pessoa estivesse usando outras janelas. Por isso ele flutua na tela, mantendo a tarefa e o temporizador à vista e trazendo lembretes para beber água, se movimentar e seguir em frente. O arqueiro veio da minha prática de arco e flecha e do meu gosto por jogos.',
        },
        {
          heading: 'Minha contribuição',
          description:
            'Criei o conceito, o nome, a aparência do mascote e a interface. Também programei e testei o aplicativo para Windows, com tarefas, pequenos passos e sessões de foco.',
        },
        {
          heading: 'Evolução com feedback',
          description:
            'Depois de ouvir quem testou, criei uma versão menor do mascote para telas de notebook. Algumas pessoas continuam usando o aplicativo e trazendo ideias para as próximas versões.',
        },
      ],
    },
    moldsoftSite: {
      videoAlt: 'Prévia em vídeo do site institucional da Moldsoft',
      details: [
        {
          heading: 'O objetivo',
          description:
            'Apresentar a Moldsoft, suas soluções e diferentes frentes em muitas páginas, com navegação clara e manutenção viável a longo prazo.',
        },
        {
          heading: 'Como trabalhei',
          description:
            'Alinhei os objetivos do site e revisei as interfaces em ciclos com o designer. Organizei a implementação em componentes reutilizáveis, pensando em desempenho, descoberta do conteúdo e evolução das páginas.',
        },
        {
          heading: 'O que entreguei',
          description:
            'Um site responsivo com blog, carrosséis, sliders e transições sutis para apresentar o conteúdo de cada área.',
        },
      ],
      flowLabel: 'Etapas de desenvolvimento do site',
      flowSteps: [
        'Entender o objetivo',
        'Alinhar a interface',
        'Desenvolver',
        'Testar e publicar',
        'Evoluir',
      ],
      techNote:
        'Next.js, React, Tailwind CSS, Docker e Amazon S3. ChatGPT apoia o desenvolvimento orientado por especificações.',
      link: 'Visitar o site',
    },
    tumtumpa: {
      details: [
        {
          heading: 'O desafio',
          description:
            'Manter cifras, ordem do show e músicos alinhados durante o ensaio e a apresentação.',
        },
        {
          heading: 'Como funciona',
          description:
            'Organiza repertórios e setlists compartilhadas, transpõe cifras e sincroniza a letra no modo palco. O mural também aproxima bandas e músicos por cidade, instrumento e objetivo.',
        },
        {
          heading: 'Em evolução',
          description:
            'Os classificados de instrumentos e equipamentos ainda estão em desenvolvimento.',
        },
      ],
      techNote:
        'Next.js, React, Tailwind CSS, Docker e Amazon S3. ChatGPT apoia o desenvolvimento orientado por especificações.',
      link: 'Explore TumTumPá',
    },
    behire: {
      details: [
        {
          heading: 'O desafio',
          description:
            'Transformar a identidade de uma marca em conteúdo consistente sem perder contexto, tom de voz ou controle editorial.',
        },
        {
          heading: 'Como funciona',
          description:
            'Um perfil de marca orienta a estratégia e o calendário. A IA ajuda a produzir textos, carrosséis e imagens; pessoas revisam, aprovam e agendam as publicações.',
        },
        {
          heading: 'Controle editorial',
          description:
            'O fluxo registra revisões e aprovações, mantendo o histórico das decisões da equipe.',
        },
      ],
      techNote:
        'Next.js, React, Tailwind CSS, Docker e Amazon S3. ChatGPT apoia o desenvolvimento orientado por especificações.',
      link: 'Discover BeHire',
    },
  },
  en: {
    eyebrow: '01 / Selected work',
    headingFirst: 'Case studies &',
    headingEmphasis: 'products.',
    introduction:
      'From strategy to production: solutions I have built and projects I have helped grow.',
    tabsLabel: 'Selected case studies and products',
    casesTab: 'Case studies',
    productsTab: 'Products',
    technologyLabel: 'Built with:',
    refinery: {
      videoAlt: 'Computer vision PPE detection demo at a Petrobras refinery',
      eyebrow: 'Case study · AI for industry',
      title: 'Computer vision at Petrobras',
      description: [
        'I coordinated the on-time deployment of the first computer vision project at a Petrobras refinery, focused on PPE detection, while working closely with the client. The successful delivery built trust for further discussions and expanded our work: four AI models are now in operation at the refinery.',
        'I continue to connect operational needs with product decisions and the technical team’s delivery.',
      ],
      tagsLabel: 'Case study highlights',
      tags: ['Computer vision', 'Operational safety', '4 models in operation'],
      blogLink: 'Read the Petrobras case study on MoldBlog',
      details: [
        {
          heading: 'The challenge',
          description:
            'Manual inspections made it difficult to continuously monitor the use of protective equipment in critical areas. The project needed to fit the refinery’s day-to-day operations and demonstrate value from its first delivery.',
        },
        {
          heading: 'Initial approach',
          description:
            'We started with a smaller, clearly defined scope and a commercial arrangement negotiated with the client. This made the first deployment possible and allowed us to demonstrate value in a live operation.',
        },
        {
          heading: 'Growth within the client',
          description:
            'Delivering on time, maintaining quality and staying close to the client after launch strengthened the partnership. I took part in discussions and negotiations to expand our work in safety and productivity. Four AI models now operate at the refinery.',
        },
        {
          heading: 'My contribution',
          description:
            'I coordinated the team’s priorities, timelines, risks and deliverables, connecting the client, business and development teams. I supported the deployment and continue to guide the applications’ evolution, turning new needs into scope and specifications.',
        },
      ],
    },
    tryOn: {
      videoAlt: 'Video preview of the Try-On platform',
      details: [
        {
          heading: 'The opportunity',
          description:
            'We identified an opportunity in retail, followed research in the field and chose the right moment to turn the idea into a product. Customers and retailers still face uncertainty when buying clothes online without knowing how they will fit.',
        },
        {
          heading: 'Generative AI in practice',
          description:
            'Try-On uses generative AI for virtual try-on and retail content creation. The platform also brings together a catalogue, online shop, inventory, orders and analytics for retailers.',
        },
        {
          heading: 'My contribution',
          description:
            'I contributed to ideation and strategy and have led the product’s evolution since the MVP. I coordinate the team, review scope and specifications, and bring retailer feedback into upcoming releases.',
        },
      ],
      techNote: commonTechNote,
      link: 'Explore Try-On',
    },
    mascot: {
      stageCaption: 'Lil Mascot / Desktop companion',
      imageAlt: 'Lil Mascot character: a small archer wearing a light hood and green clothes.',
      stageNote: 'one small step at a time',
      status: 'Product · organisation and focus',
      description: [
        'A floating desktop companion that follows you between windows and keeps your next step in view.',
        'It grew out of a challenge I experienced myself and research in psychology, especially around neurodivergent people.',
      ],
      tagsLabel: 'Lil Mascot technologies and format',
      tags: ['React', 'Electron', 'Windows app'],
      link: 'Explore the product',
      details: [
        {
          heading: 'The challenge',
          description:
            'I used to switch between tools to organise tasks, ideas and focus time. Once I closed the windows, I lost sight of what I needed to do. I also saw how too many ideas and projects could make it hard to get started. I wanted to create an always-visible aid to break goals into smaller steps and help bring ideas to life.',
        },
        {
          heading: 'Interface decisions',
          description:
            'I wanted the mascot to stay nearby even when someone was using other windows. It therefore floats on screen, keeping the task and timer visible and offering reminders to drink water, move around and keep going. The archer draws on my archery practice and my interest in games.',
        },
        {
          heading: 'My contribution',
          description:
            'I created the concept, name, mascot design and interface. I also built and tested the Windows app, with tasks, small steps and focus sessions.',
        },
        {
          heading: 'Evolving through feedback',
          description:
            'After listening to testers, I created a smaller version of the mascot for laptop screens. Some people still use the app and share ideas for future versions.',
        },
      ],
    },
    moldsoftSite: {
      videoAlt: 'Video preview of the Moldsoft corporate website',
      details: [
        {
          heading: 'The goal',
          description:
            'Present Moldsoft, its solutions and different areas of work across multiple pages, with clear navigation and a site that would remain practical to maintain over time.',
        },
        {
          heading: 'How I worked',
          description:
            'I aligned the website’s goals and reviewed interfaces with the designer in iterative cycles. I organised the implementation into reusable components, with performance, content discovery and future updates in mind.',
        },
        {
          heading: 'What I delivered',
          description:
            'A responsive website with a blog, carousels, sliders and subtle transitions to present each area’s content.',
        },
      ],
      flowLabel: 'Website development stages',
      flowSteps: [
        'Understand the goal',
        'Align the interface',
        'Build',
        'Test and launch',
        'Improve',
      ],
      techNote: `Next.js, ${commonTechNote}`,
      link: 'Visit the website',
    },
    tumtumpa: {
      details: [
        {
          heading: 'The challenge',
          description:
            'Keep chord sheets, set order and musicians in sync during rehearsals and performances.',
        },
        {
          heading: 'How it works',
          description:
            'It organises shared repertoires and setlists, transposes chords and synchronises lyrics in stage mode. A community board also connects bands and musicians by city, instrument and goals.',
        },
        {
          heading: 'In progress',
          description:
            'Classified listings for instruments and equipment are still in development.',
        },
      ],
      techNote: `Next.js, ${commonTechNote}`,
      link: 'Explore TumTumPá',
    },
    behire: {
      details: [
        {
          heading: 'The challenge',
          description:
            'Turn a brand’s identity into consistent content without losing context, tone of voice or editorial control.',
        },
        {
          heading: 'How it works',
          description:
            'A brand profile guides strategy and the content calendar. AI helps create copy, carousels and images; people review, approve and schedule each post.',
        },
        {
          heading: 'Editorial control',
          description:
            'The workflow records revisions and approvals, keeping a history of the team’s decisions.',
        },
      ],
      techNote: `Next.js, ${commonTechNote}`,
      link: 'Discover BeHire',
    },
  },
} satisfies LocalizedContent<WorkShowcaseCopy>;
