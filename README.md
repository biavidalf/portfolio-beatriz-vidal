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

Use `npm run format` para formatar os arquivos e `npm run format:check` para conferir a formatação.

## Estrutura

- `src/pages/` define as rotas e a ordem das seções de cada página.
- `src/layouts/BaseLayout.astro` reúne metadados, navegação, rodapé e estilos de base.
- `src/components/home/` e `src/components/trajectory/` guardam as seções das páginas inicial e de trajetória.
- `src/components/` reúne peças compartilhadas ou reaproveitáveis, como cabeçalho, rodapé, formulário de contato e linhas de projeto.
- `src/content/` mantém os textos e dados estruturados separados do markup.
- `src/i18n/` define os idiomas aceitos e as rotas equivalentes em cada idioma. `src/content/` exige conteúdo em português e inglês, evitando que uma página em inglês mostre texto sem tradução.
- `src/styles/` mantém tokens e regras globais em `global.css`; cada seção importa seus próprios estilos. `tailwind.css` configura Tailwind 4 e conecta os tokens visuais existentes às utilities.
- `src/scripts/` contém comportamentos por área, incluindo abas e acordeões de projetos, fotos de Sobre, galeria, formulário, navegação e linha do tempo.
- `public/assets/` guarda fotos, vídeos, ícones e imagens de compartilhamento.

O Tailwind 4 entra pelo plugin oficial `@tailwindcss/vite`, registrado em `astro.config.mjs`. Composições editoriais e animações específicas continuam em CSS próprio para manter essas regras legíveis. O site não usa um framework de interface adicional.

O Astro gera `/` e `/trajetoria.html` para manter os endereços públicos existentes. As versões em inglês ficam em `/en` e `/en/trajectory.html`; o `vercel.json` redireciona `/en/` para a rota canônica sem barra final. `BaseLayout.astro` mantém os canônicos e as referências `hreflang` alinhados às rotas, e o sitemap lista as quatro páginas com alternâncias de idioma.

## Cartão de contato

O cartão abre por padrão o WhatsApp Web com a mensagem editável preenchida. A pessoa visitante também pode alternar para e-mail; sem envio direto ativado, o site abre o aplicativo de e-mail para confirmar o envio.

Para ativar o envio direto por e-mail, configure `PUBLIC_CONTACT_DIRECT_ENABLED=true`, `RESEND_API_KEY` e `CONTACT_FROM_EMAIL` na Vercel. O remetente precisa estar verificado no Resend. A função em `api/contact.mjs` envia a mensagem para `beatrizvidal.dev@gmail.com` e usa o e-mail informado como endereço de resposta. Não inclua a chave no código ou em variáveis `PUBLIC_`.
