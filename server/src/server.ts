import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

// HTTP Methods: GET, POST, PUT, PATCH, DELETE, ...
// Prisma é uma ferramenta que intercepta a comunicação do backend com o banco de dados
// Prisma cria uma forma unificado do backend acessar o banco de dados com uma linguagem universal

// Criar rota
app.get('/hello', () => {
  return 'Hellow World'
})
app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

// Criar server
app
  .listen({
    port: 3333,
  }) /* quando o server estiver no ar = then */
  .then(() => {
    console.log('🐱‍👤HTTP server running on http://localhost:3333')
  })

// Tecla windows + . = emoji
