---
title: 'Como hospedar um blog markdown com nextjs no github pages'
excerpt: 'Um blog em markdown é uma excelente alternativa para quem quer um blog e gosta de editores de códigos como VS Code, no final deste artigo teremos um blog markdown em nextjs hospeda-do no github pages.'
date: '2021-08-01T05:35:07.322Z'
author:
  name: Lucas Almeida
  picture: '/assets/blog/authors/lucas.png'
---

##Introdução

A idéia é clonar um exemplo de repositório oficial que já contém um blog markdown [blog markdown do nextjs](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)

clona-lo localmente, mudar o que quiser e configura-lo para gerar um site estático a ser hospedado pelo github pages.

##Criar um novo projeto Blog Nextjs

Clone o seguinte repositório:
<https://github.com/vercel/next.js/tree/canary/examples/blog-starter>

ou rode algum dos comandos abaixo para criar um diretório local com o conteúdo do repositório citado.

não se esqueça de trocar o texto ¨blog-starter-app¨ pelo nome do diretório do projeto.

```bash
npx create-next-app --example blog-starter blog-starter-app
```

```bash
yarn create next-app --example blog-starter blog-starter-app
```

```bash
pnpm create next-app --example blog-starter blog-starter-app
```

##Analizando o projeto

Cada arquivo markdown dentro da pasta /_posts é compilado como um post do blog. Dados como título, thumbnail, author, entre outros, também são declarados no arquivo com extensão .md

entre na pasta do projeto pelo terminal e rode os comandos de start, 

```bash
npm install
npm run dev
```

```bash
yarn
yarn dev
```
Isso iniciará um servidor nextjs e retornará um link provavelmente http://localhost:3000 pelo terminal.

Acesse o link e veja seu blog pelo navegador.

[navegue na documentação do nextjs](https://nextjs.org/docs) para aprender a modifica-lo como quiser.


##Como gerar páginas estáticas com nextjs

Para gerar páginas estáticas com next é necessário rodar o comando [next export](https://nextjs.org/docs/advanced-features/static-html-export), para isso vamos editar nosso arquivo **package.json** para acrescentar o comando export ao build.

acrescente ¨ && next export¨ à linha ¨build¨ como no exemplo abaixo. 
```
"scripts": {
    "dev": "next",
    "build": "next build && next export",
    "start": "next start",
    "typecheck": "tsc"
  }
```
agora ao rodar o comando build uma pasta ./out será criada, com arquivos estáticos que servem seu blog, isso é útil para ser rodado como uma action do github.

##Como configurar o github actions para servir um site nextjs estático.

Com o github actions é possível rodar diversos comandos nodejs a cada push feito, o usaremos para gerar as páginas estáticas e coloca-los em uma nova branch.