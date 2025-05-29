// /middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const host = req.headers.get("host") || ""

  const isWaitlistHost = host === "waitlist.dpstemplates.com"

  // don’t rewrite Next.js internals or any “file” requests
  const isNextAsset = url.pathname.startsWith("/_next/")
  const isPublicAsset = url.pathname.match(/\.(ico|jpg|jpeg|png|svg|css|js)$/)
  const isFavicon    = url.pathname === "/favicon.ico"

  if (isWaitlistHost && !isNextAsset && !isPublicAsset && !isFavicon) {
    url.pathname = `/waitlist${url.pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  // run for everything except Next internals
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
