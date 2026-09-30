import type { LocalizedContent } from '../i18n/types';

interface QuickContactCopy {
  kicker: string;
  titleFirst: string;
  titleEmphasis: string;
  introduction: string;
  emailIntroduction: string;
  modesLabel: string;
  whatsappLabel: string;
  emailLabel: string;
  messageLabel: string;
  editHint: string;
  initialMessage: string;
  emailAddressLabel: string;
  emailPlaceholder: string;
  websiteLabel: string;
  submitWhatsapp: string;
  submitEmail: string;
  whatsappHelp: string;
  emailHelp: string;
  directEmailHelp: string;
  messageRequired: string;
  whatsappOpened: string;
  openingEmail: string;
  sending: string;
  sent: string;
  directFailed: string;
  emailSubject: string;
}

export const quickContactCopy = {
  'pt-BR': {
    kicker: 'Uma mensagem para começar',
    titleFirst: 'Quer conversar?',
    titleEmphasis: 'Ficou fácil.',
    introduction:
      'Escreva sua mensagem e abra a conversa no WhatsApp. O texto ficará pronto para você enviar.',
    emailIntroduction:
      'Deixe seu e-mail para eu saber onde responder. A mensagem pronta é só um ponto de partida.',
    modesLabel: 'Escolha como enviar sua mensagem',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'E-mail',
    messageLabel: 'Sua mensagem',
    editHint: 'edite como quiser',
    initialMessage:
      'Oi, Beatriz! Conheci seu trabalho e gostaria de conversar sobre uma oportunidade, projeto ou parceria.',
    emailAddressLabel: 'Seu e-mail',
    emailPlaceholder: 'voce@empresa.com',
    websiteLabel: 'Deixe este campo vazio',
    submitWhatsapp: 'Abrir no WhatsApp',
    submitEmail: 'Enviar e-mail',
    whatsappHelp: 'O WhatsApp Web abrirá com a mensagem preenchida. Confirme o envio na conversa.',
    emailHelp:
      'Seu aplicativo de e-mail abrirá com o texto que você escreveu para confirmar o envio.',
    directEmailHelp: 'Recebo sua mensagem e respondo no endereço informado.',
    messageRequired: 'Escreva uma mensagem.',
    whatsappOpened: 'WhatsApp Web aberto com sua mensagem. Confirme o envio na conversa.',
    openingEmail: 'Abrindo seu aplicativo de e-mail para confirmar o envio.',
    sending: 'Enviando sua mensagem…',
    sent: 'Mensagem enviada. Respondo pelo e-mail informado!',
    directFailed: 'O envio direto não funcionou. Abrindo a mensagem no seu aplicativo de e-mail.',
    emailSubject: 'Contato pelo portfólio de Beatriz Vidal',
  },
  en: {
    kicker: 'A message to get started',
    titleFirst: 'Would you like to talk?',
    titleEmphasis: 'It’s easy.',
    introduction:
      'Write your message and open a WhatsApp conversation. Your text will be ready for you to send.',
    emailIntroduction:
      'Leave your email address so I know where to reply. The suggested message is just a starting point.',
    modesLabel: 'Choose how to send your message',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'Email',
    messageLabel: 'Your message',
    editHint: 'edit as you like',
    initialMessage:
      'Hi, Beatriz! I came across your work and would like to talk about an opportunity, project or partnership.',
    emailAddressLabel: 'Your email address',
    emailPlaceholder: 'you@company.com',
    websiteLabel: 'Leave this field blank',
    submitWhatsapp: 'Open WhatsApp',
    submitEmail: 'Send email',
    whatsappHelp:
      'WhatsApp Web will open with your message filled in. Review and send it in the chat.',
    emailHelp: 'Your email app will open with the message you wrote so you can review and send it.',
    directEmailHelp: 'I will receive your message and reply to the address you provided.',
    messageRequired: 'Please write a message.',
    whatsappOpened: 'WhatsApp Web opened with your message. Review and send it in the chat.',
    openingEmail: 'Opening your email app so you can review and send the message.',
    sending: 'Sending your message…',
    sent: 'Message sent. I will reply to the email address you provided.',
    directFailed: 'Direct delivery failed. Opening your email app with the message instead.',
    emailSubject: 'Contact from Beatriz Vidal’s portfolio',
  },
} satisfies LocalizedContent<QuickContactCopy>;
