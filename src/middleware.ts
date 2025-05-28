// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''
  if (host.startsWith('waitlist.dpstemplates.com')) {
    // rewrite all paths to /waitlist/<whatever>
    const url = req.nextUrl.clone()
    url.pathname = `/waitlist${url.pathname}`
    return NextResponse.rewrite(url)
  }
  return NextResponse.next()
}

export const config = {
  // run this middleware for everything except built-in Next.js assets
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
