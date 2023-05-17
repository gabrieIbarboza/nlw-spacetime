# NLW Spacetime 💜 - Rocketseat 🚀 #

<p>
  <a href="https://www.rocketseat.com.br/nlw"><img src="https://lh3.googleusercontent.com/Q5uudql_G8EBQp3-TmpaUiw4cSH46BGBWqn4Y8BGvTN9qUlDrhyxWzaRtmnVfVWThqqTP8a_arbunf19foQQK-imkttVIL8rUKQT3NspTRXGuqZOeKJgg7c0WQ_aX8pY7Q=w1600" alt="Next Level Week Spacetime"></a>
</p>

Projeto em desenvolvimento no evento Next Level Week 12 - Spacetime da Rocketseat

## Summary
- [Summary](#summary)
- [Installation](#installation)
- [1st Class Notes](#1st-class-notes---setup-do-projeto)
- [2nd Class Notes](#2nd-class-notes---home-frontend--api--crud)

## Installation
Coming soon...

## 1st Class Notes - Setup do Projeto
- Tecla windows + . = emoji 😉
### Backend
- TODO: Conceito Prisma
- Models: definem a estrutura e os relacionamentos dos dados no banco de dados.
- Migrations: Backups regulares dos dados armazenados no banco de dados.
- Add `"dev": "tsx watch src/server.ts", "lint": "eslint scr --ext .ts --fix"` to Script in package.json
- `npx prisma migrate dev` para criar versão do banco
### Frontend
- Typescript possui tipagem estática
- Typescript + JSX = TSX
- JSX = Javascript + HTML
- Componentes: elementos de interface reutilizáveis que podem ser compostos para construir interfaces de usuário (Formas de separar a nossa tela em diversos pedacinhos menores)
- Roteamento: O Next identifica as pastas colocadas dentro de app como páginas da aplicação
- No React utiliza className para class
### Tailwind
- Ferramenta de estilização
- "Atalho para o CSS"
- "Semelhança com bootstrap"
- Tem apenas um arquivo "globa.css" e trabalha com classes
- [Doc do Tailwind](https://v2.tailwindcss.com/docs)
### ESLint
- Para instalar configurações de eslint da rocketseat `npm i @rocketseat/eslint-config -D`
- ESLint + Prettier Tailwind `npm i prettier-plugin-tailwindcss -D`
### Mobile
- [Doc Ambiente React Native Rocketseat](https://react-native.rocketseat.dev/)
- Expo: Facilita o desenvolvimento de aplicativos multiplataforma
- No React Native não temos tag semânticas, mas temos equivalente. Ex: View ~= div; Text ~= p
- CSS in JS para styles
- Não há herança de estilos
- Medida não é em pixels como web, é em dp
- Por padrão, todos elementos no RN tem `display: flex`
- [NativeWind](https://www.nativewind.dev/) para usar Tailwind no RN
- Update tsconfig.json `"compilerOptions": {"types":["nativewind/types"]},`
### Pass
- `SHOWMETHECODE` - Marco importante da Rocket (primeiro reality show focado em TI)

## 2nd Class Notes - Home Frontend + API + CRUD
### Frontend Web
#### Next Google Fonts
- Google Fonts já é um module dentro do Next
- Evita o layout shift (abre diferente de como é carregada)
#### Tailwind
- Sempre multiplicado por 4. Ex: `.p-16` = `padding: 4rem/* 64px */;`
- `leading-relaxed` = `line-height: 1.625;` que é melhor para ler
- width personalizado: `w-[360px]`
- px = padding horizontal | py = padding vertical
- `repeting-linear-gradient()` mais novo e mais simples, porém nem sempre compatível
- escolher opacidade usando / ex: `border-white/10`
- `import Image from 'next/image'` porque o Next otimiza a imagem
- `space-y-5` coloca um espeço automática em cada elemento do elemento pai
- Deixar fontes mais bonitinhas no global.css: `body { -webkit-font-smoothing: antiliased; text-rendering: optimizeLegibility; }`
#### a
- a com `target='_blank'`, mas sem `rel="noreferrer"` é um brecha de securança
### Frontend Mobile
- Componente ImageBackground ~= div com image de background
- Arquivo "assets.d.ts" só para tipagem do typescript
- `declare module '*.png'` no assets.d.ts para não considerar erro importar arquivos .png
- Instalar [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer)
- Piada ruim de space-y
- Android e IOS perfeitos, sem precisar mudar nada de um para o outro! 🎉
### Backend
- `npx prisma studio` para acessar dados já cadastrados
- `npx prisma migrate reset` reseta o banco
- `npx prisma migrate dev` criar versão do banco
#### CRUD
- `npm i zod` para fazer validação do Id
#### Cors - Segurança
- `npm i @fastify/cors` instalar para ter uma técnica de segurança do backend para determinar quais endereços (urls) podem acessar a API
