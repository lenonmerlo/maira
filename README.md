# Maira Gurgel Landing

Landing page bilíngue (PT/EN) para a consultora financeira Maíra Gurgel, construída com React + Vite. Inclui seletor de idioma, seções institucionais, CTA com contatos e estilo clean responsivo.

## Stack

- React 18 + Vite
- CSS puro (layout responsivo)
- ESLint configurado pelo template Vite

## Scripts

- `npm install` — instala dependências.
- `npm run dev` — inicia o servidor em modo desenvolvimento.
- `npm run build` — gera o bundle de produção.
- `npm run preview` — pré-visualiza o build localmente.

## Estrutura

- `src/App.jsx` — montagem da página.
- `src/components/sections/*` — seções (Hero, About, Services, Differentials, CTA, Footer).
- `src/components/ui/*` — componentes utilitários (Button, SectionTitle, LanguageSwitcher).
- `src/context/LanguageContext.jsx` — controle de idioma.
- `src/styles/landing.css` — estilos globais.

## Idiomas

O seletor fixo no canto superior permite alternar PT/EN. Textos são carregados conforme o contexto de idioma.

## Contatos (CTA)

Botões rápidos para WhatsApp, LinkedIn, Instagram e e-mail, mantendo o estilo outline do site.

## Como rodar

```bash
npm install
npm run dev
```

Acesse a URL exibida no terminal (por padrão http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Licença

MIT — veja LICENSE.
