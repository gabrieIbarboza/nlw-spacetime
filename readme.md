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
- [3rd Class Notes](#3rd-class-notes---security)

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
- Especificar valor customizado direto na classe => Utilizar a sintaxe `-[valor]`. Ex: width personalizado `w-[360px]`
- px = padding horizontal | py = padding vertical
- `repeting-linear-gradient()` mais novo e mais simples, porém nem sempre compatível
- escolher opacidade usando / ex: `border-white/10`
- `import Image from 'next/image'` porque o Next otimiza a imagem
- `space-y-5` coloca um espeço automática em cada elemento do elemento pai
- Deixar fontes mais bonitinhas no global.css: `body { -webkit-font-smoothing: antiliased; text-rendering: optimizeLegibility; }`
#### a
- a com `target='_blank'`, mas sem `rel="noreferrer"` é um brecha de securança
### Frontend Mobile
- flag para iniciar a aplicação com o cache limpo no Expo CLI => `--clear`
- Componente TouchableOpacity => Renderiza um botão com efeito de opacidade ao ser pressionado.
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
- CRUD = Create, Read, Update, Delete
- CRUD no Http = POST, GET, PUT, DELETE
- `npm i zod` para fazer validação do Id
#### Cors - Segurança
- `npm i @fastify/cors` instalar para ter uma técnica de segurança do backend para determinar quais endereços (urls) podem acessar a API
### Pass
- `BUILDTHEFUTURE`

## 3rd Class Notes - Security
- useEffect no React é uma função que permite monitorar a mudança de valor numa variável
### Fluxo de Autenticação
- OAuth => "Permite fazer login dentro de uma aplicação usando uma conta existente em outra aplicação"
- Frontend - Fazer login => Login GitHub => Redirecionamento de volta p/ minha aplicação + `?code=` => Enviar `?code=` p/ backend => Verificar `?code=` na API do GitHub => API retorna access_token => requisitar `/user` para a API => Receber `{ name, login, avatarUrl }` => Salvar no DB
- Mobile => WebBrowser => `?code=`
### GitHub
- No GitHub Register a new OAuth application
- `NEXT_PUBLIC_` é o prefixo correto para armazenar variáveis ambiente públicas (ou seja, expostas ao cliente) no NextJs
### Backend P1
- `npm i dotenv -D` = arquivos consigam acessar as variáveis ambiente
- `npm i axios` = ótima e simples forma de fazer requisições Http
- O acess_token expira rapidamente (menos de um dia), então...
### JWT
- JSON Web Token
- Token criado pelo Backend, enviado para o frotend para ele usar esse token nas requisões que ele faz para o backend no futuro
- A função do token na autenticação via OAuth é identificar o usuário no sistema
- O caso de uso mais comum para token JWT é armazenar informações de login de um usuário
- `npm i @fastify/jwt`
- auth.d.ts
### Frontend
- Há rotas que não precisam mostrar nada para o usuário e o Next incorpora isso
- No Next cada pasta é um caminho na URL
- Acessar um URL é sempre um método GET
- Salvei o Token nos cookies pela primeira vez!!
- `import { cookies } from 'next/headers'`
- `npm i jwt-decode`
- Permitir no next.config.js o uso de imagens do dominío "avatars.githubusercontent.com"
### Mobile
- [Expo AuthSession](https://docs.expo.dev/versions/latest/sdk/auth-session/) - Recurso para gerenciar sessões de autenticação no Expo.
- [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/) no lugar de salvar nos cookies
- [Expo Router](https://expo.github.io/router/docs)
- Para a aplicação mobile conseguir se conectar com o back-end, a configuração `host: '0.0.0.0'` precisa ser adicionada na api
### Pass
- `NEVERSTOPLEARNING` - Mantra da Rocketseat

## 4th Class Notes - ...

## Start Project
- Frontend/Backend: `npm run dev`
- Mobile: `npm run start` `npx expo start --clear