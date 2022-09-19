---
title: 'Como hospedar um site nextjs no github pages'
excerpt: 'Neste post vamos clonar o blog em markdown exemplo do nextjs, e vamos hospeda-lo no github pages, mas os passos podem ser usados em qualquer projeto nextjs. No final teremos um blog markdown em nextjs hospedado no github pages.'
date: '2021-08-01T05:35:07.322Z'
author:
  name: Lucas Almeida
  picture: '/assets/blog/authors/lucas.png'
---

## Introdução

A idéia é clonar o repositório oficial que já contém um [blog markdown do nextjs](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) e configurar o build para gerar as páginas estáticas a serem hospedadas no github pages.

## Criar um novo projeto Blog Nextjs

Clone o seguinte repositório:
<https://github.com/vercel/next.js/tree/canary/examples/blog-starter>

ou rode algum dos comandos abaixo para criar um diretório local com o conteúdo do repositório citado.

não se esqueça de trocar o texto ¨blog-starter-app¨ pelo nome do diretório do projeto.

```bash
npx create-next-app --example blog-starter blog-starter-app
```
ou
```bash
yarn create next-app --example blog-starter blog-starter-app
```
ou
```bash
pnpm create next-app --example blog-starter blog-starter-app
```

## Analizando o projeto

Cada arquivo markdown dentro da pasta /_posts é compilado como um post do blog. Dados como título, thumbnail, author, entre outros, também são declarados no arquivo com extensão .md

entre na pasta do projeto pelo terminal e rode os comandos de start, 

```bash
npm install
npm run dev
```
ou
```bash
yarn
yarn dev
```
Isso iniciará um servidor nextjs e retornará um link provavelmente http://localhost:3000 pelo terminal.

Acesse o link e veja seu blog pelo navegador.

[navegue na documentação do nextjs](https://nextjs.org/docs) para aprender a modifica-lo como quiser.


## Como gerar páginas estáticas com nextjs

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

## Criar variável de ambiente
Precisamos de uma variável de ambiente com o nome do nosso repositório para que as rotas funcionem, para isso vamos criar um arquivo `.env`.

Crie o arquivo `touch .env` e insira a variável como abaixo 
```
NEXT_PUBLIC_REPO_NAME = "/nome-do-seu-repositorio-aqui"
```

## Como configurar o github actions para servir um site nextjs estático.

Com o github actions é possível automatizar a compilação com a utilização de  diversos comandos, inclusive node, disponíveis para serem executados direto de um repositório no github.

Usaremos o Github Actions para em cada push gerar as páginas estáticas e coloca-las em uma nova branch pronta para seren servidas.

crie um arquivo node.js.yml no diretório ./.github/workflows/
```bash
touch ./.github/workflows/node.js.yml
```
cole o seguinte código no arquivo node.js.yml
```
name: Node.js CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      NEXT_PUBLIC_REPO_NAME: "/nome-do-seu-repositorio-aqui"
    steps:
    - uses: actions/checkout@v1
      with:
        node-version: 12
    - run: npm install -g yarn
    - run: yarn install --frozen-lockfile
    - run: yarn build
    - run: touch ./out/.nojekyll

    - name: Deploy 🚀
      uses: JamesIves/github-pages-deploy-action@v4
      with:
        folder: out
```
1. em NEXT_PUBLIC_REPO_NAME: "/insira-aqui-o-nome-do-repositorio"


Acesse a [documentação  do github actions](https://docs.github.com/pt/actions/learn-github-actions/understanding-github-actions) para obter mais informaões.

agora seus próximos commits rodarão o build configurado acima.

## Como configurar basePath e assetPrefix do next.config.js para github pages

Para que as rotas, arquivos e imagens funcionem bem no github pages é necessário ativar as opções basePath e assetPrefix no seu arquivo next.config.js.

caso ele não exista na raiz do projeto crie-o. com o comando 
```
touch next.config.js 
```

Insira o seguite código em next.config.js substitua com a variável de ambiente do seu repositório.
```
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_REPO_NAME,
    assetPrefix: process.env.NEXT_PUBLIC_REPO_NAME
}
module.exports = nextConfig
```

## Problema com imagens
As imagens também precisam do nome do diretório como prefixo para funcionarem, a unica solução que achei pra isso é inserindo como stringo ou como variável de ambiente manualmente nas tags <img> do projeto.

Neste projeto apenas os componentes /components/avatar.tsx e /components/cover-image.tsx usam a tag <img>

a alteração é apenas inserir a string com o nome do repositörio no início do atributo src, ou apenas usar a variável de ambiente que já definimos:
```
<img src={process.env.NEXT_PUBLIC_REPO_NAME + picture} />
```
## Conclusão

Agora temos um blog hospedado pronto para uso.
[Projeto hospedaddo no github pages](https://lucasalmeida-ux.github.io/blog/).