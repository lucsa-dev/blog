---
title: 'Como implementar modo dark em um projeto existente com nextjs e tailwindcss'
excerpt: 'Hoje vamos implementar um botão com ícones de sol e lua para alternar entre os modos dark e light.'
date: '2021-09-08T14:44:07.322Z'
author:
  name: Lucas Almeida
  picture: '/assets/blog/authors/lucas.png'
---

## Introdução

No primeiro post mostrei como este blog foi implementado a partir de um exemplo oficial do nextjs e hospedado no github pages. Agora preciso implementar o modo dark nele para conseguirmos ler o conteúdo sem prejudicar nossa visão. hoje implementaremos um botão com ícones de sol/lua para alternar entre os modos dark e light. 

Usaremos o next-themes que já nos fornece o funcionamento dos modos dark/light e o react-icons apenas para inserir os ícones de sol e lua.

```
npm install next-themes react-icons
```
ou
```
yarn add next-themes react-icons
```

## instalando o ThemeProvider

No `pages/_app.tsx` deveremos importar o `ThemeProvider` e usa-lo para envolver o <Component>

Para habilitar o modo dark como padrão insira o atributo `defaultTheme="dark"` no `ThemeProvider`

O atributo `attribute="class"` é obrigatório para fazer funcionar com as classes do tailwind
```
import { ThemeProvider } from "next-themes";
import { AppProps } from 'next/app'
import '../styles/index.css'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    );
}

```

## Habilitando o modo dark

No arquivo `tailwind.config.js` insira a linha `darkMode: 'class',` para habilitar o modo dark
```
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class',
```

## Definindo as classes css de textos e background

Setaremos as cores do texto e backgrounds em cada modo.
No arquivo `styles/index.css` acrescente o seguinte código
```
@layer base {
    body {
        @apply bg-gray-50
        dark:bg-gray-900
        text-gray-900
        dark:text-gray-50
        transition-colors;
    }
}
```

## Componente para alternar modos.

Crie um componente chamado `components/themeToggle` com o seguinte conteúdo:

```
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Aqui temos os ícones de Lua e Sol
import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    function isDark() {
        return theme === "dark";
    }

    return (
        <button
            className="focus:outline-none"
            onClick={() => setTheme(isDark() ? "light" : "dark")}
            aria-label="Theme toggle"
        >
            {isDark() ? <BiSun size={20} /> : <BiMoon size={20} />}
        </button>
    );
}
```
Agora é só importa-lo e usa-lo em qualquer lugar. aqui no blog coloquei no `components/layout.tsx` para ficar presente em todas as telas

```
<div className="p-3 fixed right-0 top-0">
  <ThemeToggle />
</div>
```