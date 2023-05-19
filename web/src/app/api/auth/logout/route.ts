import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectURL = new URL('/', request.url)

  return NextResponse.redirect(redirectURL, {
    headers: {
      // Resetando o cookie, já que não tem função de delete-cookie
      'Set-Cookie': `token=; Path=/; max-age=0;`,
    },
  })
}
