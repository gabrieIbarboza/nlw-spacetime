import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

// Determinar quais urls podem acessar a API
app.register(cors, {
  origin: true, // ['',''] Todas as urls de frontend que poderão acessar o backend
})

// Método para registrar um arquivo de routes separado
app.register(memoriesRoutes)

// Criar server
app
  .listen({
    port: 3333,
  }) /* quando o server estiver no ar = then */
  .then(() => {
    console.log('🐱‍👤HTTP server running on http://localhost:3333')
  })

// Tecla windows + . = emoji
