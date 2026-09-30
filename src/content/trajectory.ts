import type { LocalizedContent } from '../i18n/types';

export interface ExperienceEntry {
  date: string;
  title: string[];
  company: string;
  location: string;
  descriptions: string[];
  tags: string[];
}

export interface EducationEntry {
  date: string;
  title: string;
  institution: string;
  kind: string;
  continuing?: boolean;
}

export interface ContributionEntry {
  eyebrow: string;
  titleLines: string[];
  emphasis: string;
  emphasisPrefix?: string;
  description: string;
  footnote: string;
}

export interface CapabilityEntry {
  title: string[];
  emphasis: string;
  description: string;
  tools: string;
  proof: string;
  caseLink?: { href: string; label: string };
  languages?: { label: string; value: string };
}

interface TrajectoryContent {
  copy: {
    heroEyebrow: string;
    heroTitleFirst: string;
    heroTitleSecond: string;
    heroDescription: string;
    heroAction: string;
    city: string;
    experienceEyebrow: string;
    experienceTitleFirst: string;
    experienceTitleSecond: string;
    experienceDescription: string;
    experienceAction: string;
    educationEyebrow: string;
    educationTitleFirst: string;
    educationTitleSecond: string;
    educationDescription: string;
    contributionEyebrow: string;
    contributionTitleFirst: string;
    contributionTitleSecond: string;
    contributionDescription: string;
    volunteerTitleFirst: string;
    volunteerTitleSecond: string;
    volunteerDescription: string;
    volunteerNote: string;
    volunteerAlt: string;
    volunteerCaption: string;
    capabilitiesEyebrow: string;
    capabilitiesTitleFirst: string;
    capabilitiesTitleSecond: string;
    capabilitiesDescription: string;
    practicalLabel: string;
    ctaEyebrow: string;
    ctaTitleFirst: string;
    ctaTitleSecond: string;
    ctaDescription: string;
    whatsappAction: string;
    emailAction: string;
    linkedinAction: string;
  };
  experiences: ExperienceEntry[];
  education: EducationEntry[];
  contributions: ContributionEntry[];
  capabilities: CapabilityEntry[];
}

export const trajectoryContent = {
  'pt-BR': {
    copy: {
      heroEyebrow: 'Desenvolvimento · coordenação · inovação',
      heroTitleFirst: 'Uma trajetória',
      heroTitleSecond: 'feita de ideias em movimento.',
      heroDescription:
        'Comecei estudando informática, passei por suporte e desenvolvimento e hoje coordeno iniciativas de inovação. Também empreendo, desenvolvo produtos e crio conteúdo para compartilhar aprendizados. Gosto de aproximar pessoas, entender problemas e levar boas ideias até a entrega.',
      heroAction: 'Percorrer minha experiência',
      city: 'Fortaleza, Ceará',
      experienceEyebrow: '01 / Experiência',
      experienceTitleFirst: 'Do primeiro código à',
      experienceTitleSecond: 'coordenação.',
      experienceDescription:
        'Minha experiência cruza desenvolvimento, atendimento a pessoas e construção de produtos. Em cada etapa, aprendi a transformar necessidades reais em caminhos possíveis.',
      experienceAction: 'Ver produtos e cases',
      educationEyebrow: '02 / Formação',
      educationTitleFirst: 'Uma base prática,',
      educationTitleSecond: 'curiosa e contínua.',
      educationDescription:
        'Da formação técnica ao ensino superior, com espaço para seguir aprendendo.',
      contributionEyebrow: '03 / Outras contribuições',
      contributionTitleFirst: 'Tecnologia também é',
      contributionTitleSecond: 'um jeito de contribuir.',
      contributionDescription:
        'Além da experiência profissional, o voluntariado e a formação abriram espaço para construir com outras pessoas.',
      volunteerTitleFirst: 'ONG Jovens pela',
      volunteerTitleSecond: 'Diferença',
      volunteerDescription:
        'A associação civil laica mobiliza jovens de Fortaleza em ações de caridade e apoio a comunidades vulneráveis. Participei de atividades em abrigos de animais, escolas e outros espaços comunitários, cuidando dos ambientes e dos pets. Também criei sites para a Jovens pela Diferença e para a Família BDL.',
      volunteerNote:
        'Uma forma de aproximar duas coisas que me movem: desenvolver aplicações e ajudar pessoas.',
      volunteerAlt: 'Beatriz com dois cachorros em um espaço de acolhimento animal',
      volunteerCaption: 'Cuidado, presença e empatia.',
      capabilitiesEyebrow: '04 / Como posso contribuir',
      capabilitiesTitleFirst: 'Código, direção',
      capabilitiesTitleSecond: 'e diálogo.',
      capabilitiesDescription:
        'Gosto de estar perto da construção, cuidar do caminho até a entrega e manter as pessoas na mesma página.',
      practicalLabel: 'Na prática',
      ctaEyebrow: '05 / Próximos caminhos',
      ctaTitleFirst: 'Vamos transformar',
      ctaTitleSecond: 'uma ideia em conversa?',
      ctaDescription:
        'Estou aberta a conhecer pessoas, trocar experiências e conversar sobre oportunidades, produtos e colaboração.',
      whatsappAction: 'Conversar pelo WhatsApp',
      emailAction: 'Prefiro e-mail',
      linkedinAction: 'Conectar no LinkedIn',
    },
    experiences: [
      {
        date: 'JUL/2025 · ATUAL',
        title: ['Coordenadora de Sistemas,', 'Vertente de Inovação'],
        company: 'Moldsoft Tecnologia',
        location: 'Fortaleza, CE',
        descriptions: [
          'Participei da criação da vertente de Inovação e hoje coordeno o time técnico. Conduzo ideias até produtos, alinhando escopo, prioridades e próximos passos com clientes, equipe e lideranças.',
          'Também represento a empresa em eventos de tecnologia, apresentando soluções e criando conexões.',
        ],
        tags: ['Coordenação', 'Inovação', 'Produto', 'Alinhamento'],
      },
      {
        date: 'JUL/2024 · JUL/2025',
        title: ['Desenvolvedora Front-end'],
        company: 'Moldsoft Tecnologia',
        location: 'Fortaleza, CE',
        descriptions: [
          'Desenvolvi soluções de inovação desde a ideação até a entrega. Estruturei requisitos e protótipos, criei produtos digitais acessíveis e organizei tarefas em colaboração com o time.',
          'Criei experiências para desktop, mobile, totens, televisores e tablets.',
        ],
        tags: ['React', 'Next.js', 'Tailwind CSS', 'Acessibilidade'],
      },
      {
        date: 'JUL/2022 · JUN/2024',
        title: ['Estagiária Salesforce'],
        company: 'Unimed Fortaleza',
        location: 'Fortaleza, CE',
        descriptions: [
          'Atuei entre desenvolvimento e suporte no Salesforce, conectando as soluções técnicas às necessidades das pessoas usuárias e das rotinas comerciais.',
          'Desenvolvi componentes Lightning Web Components, trabalhei com Apex, SOQL e Flow Builder e participei de testes com Jest. Também analisei solicitações, configurei o Sales Cloud e ajudei a resolver problemas.',
          'Essa experiência fortaleceu minha comunicação com diferentes perfis, minha capacidade de investigar problemas e meu jeito resolutivo de apoiar as pessoas.',
        ],
        tags: [
          'Salesforce Sales Cloud',
          'LWC · Apex · SOQL',
          'Flow Builder · Jest',
          'Suporte e processos',
        ],
      },
    ],
    education: [
      {
        date: 'JAN/2022 · JUN/2024',
        title: 'Análise e Desenvolvimento de Sistemas',
        institution: 'Universidade de Fortaleza · UNIFOR',
        kind: 'Tecnólogo',
      },
      {
        date: 'JAN/2018 · DEZ/2021',
        title: 'Informática',
        institution: 'Instituto Federal do Ceará · IFCE, Campus Fortaleza',
        kind: 'Técnico integrado',
      },
      {
        date: 'MAR/2025',
        title: 'UX/UI Avançado',
        institution: 'Coderhouse',
        kind: 'Curso complementar',
        continuing: true,
      },
      {
        date: 'JUN/2022',
        title: 'Hiring Coders #3 · Fullstack Web Developer',
        institution: 'VTEX + Gama Academy · 120 horas',
        kind: 'Curso complementar',
        continuing: true,
      },
    ],
    contributions: [
      {
        eyebrow: 'Reconhecimento · dez/2023',
        titleLines: ['Design vencedor'],
        emphasis: 'Desafio do Futuro.',
        emphasisPrefix: 'no',
        description:
          'Participação no desafio do Globo Esporte, com design vencedor no episódio 8, exibido no Globoplay.',
        footnote: 'Globo Esporte / Desafio do Futuro',
      },
      {
        eyebrow: 'Trabalho de conclusão de curso · 2022/2024',
        titleLines: ['PHAIS+'],
        emphasis: 'Conexões na saúde.',
        description:
          'Plataforma web e mobile para apoiar a troca de medicamentos entre hospitais, desenvolvida como trabalho de conclusão de curso.',
        footnote: 'React · React Native · Node.js · PostgreSQL',
      },
    ],
    capabilities: [
      {
        title: ['Construir'],
        emphasis: 'produtos.',
        description:
          'Transformo necessidades, requisitos e protótipos em produtos digitais acessíveis, atentos aos diferentes contextos de uso.',
        tools: 'React · Next.js · Tailwind CSS · Figma',
        proof:
          'Desenvolvi o site institucional Mold IA X e aplicações para desktop, mobile e totens.',
      },
      {
        title: ['Coordenar'],
        emphasis: 'entregas.',
        description:
          'Alinho escopo e prioridades, distribuo responsabilidades e ajudo o time a remover impedimentos para avançar.',
        tools: 'Coordenação técnica · Escopo · Priorização',
        proof:
          'Coordenei a implantação de um sistema de detecção de EPI e acompanhamento de produtividade em uma refinaria da Petrobras. A solução segue ativa há mais de um ano.',
        caseLink: {
          href: 'https://moldiax.moldsoft.com.br/conteudos/moldblog/0',
          label: 'Ler o case da Petrobras no MoldBlog',
        },
      },
      {
        title: ['Conectar'],
        emphasis: 'pessoas.',
        description:
          'Gosto de ouvir, explicar soluções e transformar conversas entre clientes, equipe e lideranças em próximos passos claros.',
        tools: 'Comunicação · Demonstração de produtos',
        proof:
          'Represento a Moldsoft em eventos de tecnologia, apresentando produtos e criando conexões.',
        languages: { label: 'Idiomas', value: 'Português nativo · Inglês avançado' },
      },
    ],
  },
  en: {
    copy: {
      heroEyebrow: 'Development · coordination · innovation',
      heroTitleFirst: 'A career shaped',
      heroTitleSecond: 'by ideas in motion.',
      heroDescription:
        'I started out studying IT, moved through support and software development, and now coordinate innovation initiatives. I also co-found ventures, build products and create content to share what I learn. I enjoy bringing people together, understanding problems and taking good ideas through to delivery.',
      heroAction: 'Explore my experience',
      city: 'Fortaleza, Ceará',
      experienceEyebrow: '01 / Experience',
      experienceTitleFirst: 'From my first line of code to',
      experienceTitleSecond: 'coordination.',
      experienceDescription:
        'My experience spans software development, customer support and product building. At each stage, I have learned to turn real needs into practical solutions.',
      experienceAction: 'View products and case studies',
      educationEyebrow: '02 / Education',
      educationTitleFirst: 'A practical foundation,',
      educationTitleSecond: 'with room to keep learning.',
      educationDescription:
        'From technical training to higher education, with plenty of room to keep learning.',
      contributionEyebrow: '03 / Other contributions',
      contributionTitleFirst: 'Technology is also',
      contributionTitleSecond: 'a way to contribute.',
      contributionDescription:
        'Alongside my professional experience, volunteering and education have given me opportunities to build things with others.',
      volunteerTitleFirst: 'Jovens pela',
      volunteerTitleSecond: 'Diferença NGO',
      volunteerDescription:
        'This secular civil association brings young people in Fortaleza together for charitable work and support for vulnerable communities. I took part in activities at animal shelters, schools and other community spaces, helping care for the facilities and pets. I also built websites for Jovens pela Diferença and Família BDL.',
      volunteerNote:
        'A way to bring together two things that matter to me: building applications and helping people.',
      volunteerAlt: 'Beatriz with two dogs at an animal shelter',
      volunteerCaption: 'Care, presence and empathy.',
      capabilitiesEyebrow: '04 / How I can contribute',
      capabilitiesTitleFirst: 'Code, direction',
      capabilitiesTitleSecond: 'and dialogue.',
      capabilitiesDescription:
        'I like staying close to the build, guiding the path to delivery and keeping everyone on the same page.',
      practicalLabel: 'In practice',
      ctaEyebrow: '05 / What comes next',
      ctaTitleFirst: 'Let’s turn',
      ctaTitleSecond: 'an idea into a conversation.',
      ctaDescription:
        'I am open to meeting people, exchanging experiences and talking about opportunities, products and collaboration.',
      whatsappAction: 'Message me on WhatsApp',
      emailAction: 'Email instead',
      linkedinAction: 'Connect on LinkedIn',
    },
    experiences: [
      {
        date: 'JUL 2025 · PRESENT',
        title: ['Systems Coordinator,', 'Innovation Division'],
        company: 'Moldsoft Tecnologia',
        location: 'Fortaleza, CE',
        descriptions: [
          'I helped establish the Innovation division and now coordinate the technical team. I guide ideas towards products, aligning scope, priorities and next steps with clients, the team and leadership.',
          'I also represent the company at technology events, presenting solutions and building connections.',
        ],
        tags: ['Coordination', 'Innovation', 'Product', 'Alignment'],
      },
      {
        date: 'JUL 2024 · JUL 2025',
        title: ['Front-end Developer'],
        company: 'Moldsoft Tecnologia',
        location: 'Fortaleza, CE',
        descriptions: [
          'I developed innovation solutions from ideation through delivery. I structured requirements and prototypes, built accessible digital products and organised work in collaboration with the team.',
          'I built experiences for desktop, mobile, kiosks, televisions and tablets.',
        ],
        tags: ['React', 'Next.js', 'Tailwind CSS', 'Accessibility'],
      },
      {
        date: 'JUL 2022 · JUN 2024',
        title: ['Salesforce Intern'],
        company: 'Unimed Fortaleza',
        location: 'Fortaleza, CE',
        descriptions: [
          'I worked across Salesforce development and support, connecting technical solutions with users’ needs and commercial workflows.',
          'I developed Lightning Web Components, worked with Apex, SOQL and Flow Builder, and took part in testing with Jest. I also reviewed requests, configured Sales Cloud and helped resolve issues.',
          'This experience strengthened my communication with people in different roles, my ability to investigate problems and my practical approach to supporting others.',
        ],
        tags: [
          'Salesforce Sales Cloud',
          'LWC · Apex · SOQL',
          'Flow Builder · Jest',
          'Support and processes',
        ],
      },
    ],
    education: [
      {
        date: 'JAN 2022 · JUN 2024',
        title: 'Systems Analysis and Development',
        institution: 'University of Fortaleza · UNIFOR',
        kind: 'Higher technology degree',
      },
      {
        date: 'JAN 2018 · DEC 2021',
        title: 'Information Technology',
        institution: 'Federal Institute of Ceará · IFCE, Fortaleza campus',
        kind: 'Integrated technical programme',
      },
      {
        date: 'MAR 2025',
        title: 'Advanced UX/UI',
        institution: 'Coderhouse',
        kind: 'Professional development course',
        continuing: true,
      },
      {
        date: 'JUN 2022',
        title: 'Hiring Coders #3 · Full-stack Web Developer',
        institution: 'VTEX + Gama Academy · 120 hours',
        kind: 'Professional development course',
        continuing: true,
      },
    ],
    contributions: [
      {
        eyebrow: 'Recognition · Dec 2023',
        titleLines: ['Winning design'],
        emphasis: 'Desafio do Futuro.',
        emphasisPrefix: 'for',
        description:
          'Took part in Globo Esporte’s challenge, with the winning design in episode 8, broadcast on Globoplay.',
        footnote: 'Globo Esporte / Desafio do Futuro',
      },
      {
        eyebrow: 'Final degree project · 2022–2024',
        titleLines: ['PHAIS+'],
        emphasis: 'Healthcare connections.',
        description:
          'A web and mobile platform designed to support medicine exchanges between hospitals, developed as a final degree project.',
        footnote: 'React · React Native · Node.js · PostgreSQL',
      },
    ],
    capabilities: [
      {
        title: ['Build'],
        emphasis: 'products.',
        description:
          'I turn needs, requirements and prototypes into accessible digital products that account for different contexts of use.',
        tools: 'React · Next.js · Tailwind CSS · Figma',
        proof:
          'I built the Mold IA X corporate website and applications for desktop, mobile and kiosks.',
      },
      {
        title: ['Coordinate'],
        emphasis: 'delivery.',
        description:
          'I align scope and priorities, share responsibilities and help the team remove blockers so work can move forward.',
        tools: 'Technical coordination · Scope · Prioritisation',
        proof:
          'I coordinated the deployment of a PPE detection and productivity monitoring system at a Petrobras refinery. The solution has been active for over a year.',
        caseLink: {
          href: 'https://moldiax.moldsoft.com.br/conteudos/moldblog/0',
          label: 'Read the Petrobras case study on MoldBlog',
        },
      },
      {
        title: ['Connect'],
        emphasis: 'people.',
        description:
          'I enjoy listening, explaining solutions and turning conversations between clients, teams and leadership into clear next steps.',
        tools: 'Communication · Product demonstrations',
        proof:
          'I represent Moldsoft at technology events, presenting products and building connections.',
        languages: { label: 'Languages', value: 'Native Portuguese · Advanced English' },
      },
    ],
  },
} satisfies LocalizedContent<TrajectoryContent>;
