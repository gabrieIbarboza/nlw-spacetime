import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: ['query'], // para o primas fazer log de todas a queries executadas no bd
})
