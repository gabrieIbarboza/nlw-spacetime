import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

// HTTP Methods: GET, POST, PUT, PATCH, DELETE, ...
// Prisma é uma ferramenta que intercepta a comunicação do backend com o banco de dados
// Prisma cria uma forma unificado do backend acessar o banco de dados com uma linguagem universal

// Aqui vai todas as rotas voltadas a parte de gerenciamento de memórias
export async function memoriesRoutes(app: FastifyInstance) {
  // READ
  app.get('/memories', async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc', // Ordenar por datas da mais antiga para mais nova
      },
    })

    // Faz um map por cada memória para retornar somente os dados necessários...
    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 115).concat('...'),
      }
    })
  })
  app.get('/memories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    // Verificando se o id do request é uma string do tipo uuid usando zod
    const { id } = paramsSchema.parse(request.params)

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id, // id: id,
      },
    })

    return memory // TODO: Tratar o erro 500 caso não seja encontrado o Id
  })
  // CREATE
  app.post('/memories', async (request) => {
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false), // z.coerce = Boolean(valor)
    })

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body)

    const memory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: '493ac551-c7ab-4940-b5d4-bb03464a27e3', // Estático por hora
      },
    })

    return memory
  })

  // UPDATE
  app.put('/memories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body)

    const memory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        coverUrl,
        isPublic,
      },
    })

    return memory
  })

  // DELETE
  app.delete('/memories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    await prisma.memory.delete({
      where: {
        id,
      },
    })
  })
}
