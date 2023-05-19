import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

// HTTP Methods: GET, POST, PUT, PATCH, DELETE, ...
// Prisma é uma ferramenta que intercepta a comunicação do backend com o banco de dados
// Prisma cria uma forma unificado do backend acessar o banco de dados com uma linguagem universal

// Aqui vai todas as rotas voltadas a parte de gerenciamento de memórias
export async function memoriesRoutes(app: FastifyInstance) {
  // Antes de executar o Handler (as funções abaixo) de cada uma das rotas, verifique se o usuário está autenticado
  app.addHook('preHandler', async (request) => {
    await request.jwtVerify() // Garante que o Token está vindo na requisição
  })

  // READ
  app.get('/memories', async (request) => {
    const memories = await prisma.memory.findMany({
      // Retorna somente as memórias do usar logado
      where: {
        userId: request.user.sub,
      },
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
  app.get('/memories/:id', async (request, reply) => {
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

    // Se a memória não for pública e o ID dessa memória for diferente do usuário logado, retornar erro 401
    if (!memory.isPublic && memory.userId !== request.user.sub)
      return reply.status(401).send()

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
        userId: request.user.sub,
      },
    })

    return memory
  })

  // UPDATE
  app.put('/memories/:id', async (request, reply) => {
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

    let memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (memory.userId !== request.user.sub) return reply.status(401).send()

    memory = await prisma.memory.update({
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
  app.delete('/memories/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (memory.userId !== request.user.sub) return reply.status(401).send()

    await prisma.memory.delete({
      where: {
        id,
      },
    })
  })
}
