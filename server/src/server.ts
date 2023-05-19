import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

// Determinar quais urls podem acessar a API
app.register(cors, {
  origin: true, // ['',''] Todas as urls de frontend que poderão acessar o backend
})

// JSON Web Token
app.register(jwt, {
  secret: 'spacetime', // "Criptografia desse backend" = Maneira de diferenciar os tokens gerados por esse backend de outros jwt de outros backend
  // Desmaiar no teclado (ex: "hsdlakshdfaslhas") quando for criar um secret profissional
})

// Método para registrar um arquivo de routes separado
app.register(authRoutes)
app.register(memoriesRoutes)

// Criar server
app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  }) /* quando o server estiver no ar = then */
  .then(() => {
    console.log('🐱‍👤HTTP server running on http://localhost:3333')
  })

// Tecla windows + . = emoji
