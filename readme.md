# NLW Spacetime 💜 - Rocketseat 🚀 #

<p>
  <a href="https://www.alura.com.br/imersao-java"><img src="https://lh3.googleusercontent.com/Q5uudql_G8EBQp3-TmpaUiw4cSH46BGBWqn4Y8BGvTN9qUlDrhyxWzaRtmnVfVWThqqTP8a_arbunf19foQQK-imkttVIL8rUKQT3NspTRXGuqZOeKJgg7c0WQ_aX8pY7Q=w1600" alt="Imersao-java"></a>
</p>

## Summary
- [Summary](#summary)
- [1st Class Notes](#1st-class-notes---setup-do-projeto)

## 1st Class Notes - Setup do Projeto
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
