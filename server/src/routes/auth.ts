import { FastifyInstance } from 'fastify'
import axios from 'axios'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (request) => {
    const bodySchema = z.object({
      code: z.string(),
    })

    const { code } = bodySchema.parse(request.body)

    const accessTokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token', // Endereço do GitHub
      null, // Corpo da Requisição
      // Configurações da Requisição
      {
        // params para não colocar direto na URL o que se deseja enviar
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        // Meta dados da requisição
        headers: {
          Accept: 'application/json', // "Quero que os dados sejam retornados em JSON"
        },
      },
    )

    // Obter acess_token do data da requisição
    const { access_token } = accessTokenResponse.data

    // Nova requisição para o GitHub buscando os dados do usuário autenticado
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    // Validação dos dados recebidos
    const userSchema = z.object({
      id: z.number(),
      login: z.string(),
      name: z.string(),
      avatar_url: z.string().url(),
    })

    const userInfo = userSchema.parse(userResponse.data)

    // Verifica se o usuário já não existe no DB
    // Só pode usar findUnique se o campo for @unique no Prisma
    let user = await prisma.user.findUnique({
      where: {
        githubId: userInfo.id,
      },
    })

    // Se não encontrar usuário no DB, criá-lo
    if (!user) {
      user = await prisma.user.create({
        data: {
          githubId: userInfo.id,
          login: userInfo.login,
          name: userInfo.name,
          avatarUrl: userInfo.avatar_url,
        },
      })
    }

    const token = app.jwt.sign(
      // Informações do usuário que eu quero no Token
      // Informações que não são sensíveis, pois não é criptografado
      {
        name: user.name,
        avatarUrl: user.avatarUrl,
      },
      {
        sub: user.id, // A qual usuário pertence esse token?
        expiresIn: '30 days', // Duração do token
      },
    )

    return {
      token,
    }
  })
}
