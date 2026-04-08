import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Detect language from URL path and rewrite html lang attribute
// Next.js reads x-next-intl-locale or we can use a cookie that root layout reads
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const response = NextResponse.next()

  // Set language header so layout can read it
  if (pathname.startsWith('/es')) {
    response.headers.set('x-lang', 'es')
  } else {
    response.headers.set('x-lang', 'en')
  }

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon|.*\\.(?:ico|png|jpg|svg|webmanifest)).*)'],
}
