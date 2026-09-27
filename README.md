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
