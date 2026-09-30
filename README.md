# Beatriz Vidal | Portfólio

Portfólio pessoal construído com Astro e publicado como site estático na Vercel.

## Desenvolvimento

Use Node.js 22.19 ou superior.

```sh
npm ci
npm run dev
```

Para conferir a versão de produção:

```sh
npm run check
npm run build
npm run preview
```

## Estrutura

- `src/pages/`: página inicial e trajetória.
- `src/layouts/BaseLayout.astro`: estrutura, navegação e metadados compartilhados.
- `src/components/`: cabeçalho e rodapé.
- `src/styles/`: estilos globais e da trajetória.
- `src/scripts/main.js`: interações, animações e carrossel Splide.
- `public/assets/`: fotos, vídeos, ícones e imagens de compartilhamento.

O Astro gera `/` e `/trajetoria.html` para manter os endereços públicos existentes. O `vercel.json` define a compilação e a pasta estática para a implantação automática pela Vercel.

## Cartão de contato

Na prévia local, o formulário traz uma mensagem inicial editável. A pessoa visitante pode personalizar o texto, informar seu e-mail e abrir o aplicativo de e-mail para confirmar o envio da versão escrita por ela.

Para ativar o envio direto depois da revisão, configure `PUBLIC_CONTACT_DIRECT_ENABLED=true`, `RESEND_API_KEY` e `CONTACT_FROM_EMAIL` na Vercel. O remetente precisa estar verificado no Resend. A função em `api/contact.mjs` envia a mensagem para `beatrizvidal.dev@gmail.com` e usa o e-mail informado como endereço de resposta. Não inclua a chave no código ou em variáveis `PUBLIC_`.
