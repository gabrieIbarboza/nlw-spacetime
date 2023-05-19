import { cookies } from 'next/headers'
import decode from 'jwt-decode'

interface User {
  sub: string
  name: string
  avatarUrl: string
}

export function getUser(): User {
  // ? pois pode não existir, tendo valor undefined
  const token = cookies().get('token')?.value

  // Se o token não existe
  if (!token) {
    throw new Error('Unauthenticated.')
  }

  // Se existe decodar o token
  const user: User = decode(token)

  return user
}
