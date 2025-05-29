// /middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const host = req.headers.get("host") || ""

  const isWaitlistHost = host === "waitlist.dpstemplates.com"

  // DON’T rewrite any of these:
  const isNextAsset    = url.pathname.startsWith("/_next/")
  const isPublicAsset  = url.pathname.match(/\.(ico|jpg|jpeg|png|svg|css|js)$/)
  const isApiRoute     = url.pathname.startsWith("/api/")
  const isUnsubRoute    = url.pathname.startsWith("/unsubscribe/")
  const isFavicon      = url.pathname === "/favicon.ico"

  if (
    isWaitlistHost &&
    !isNextAsset &&
    !isPublicAsset &&
    !isApiRoute &&
    !isFavicon &&
    !isUnsubRoute
  ) {
    // only rewrite “page” requests
    url.pathname = `/waitlist${url.pathname}`
    return NextResponse.rewrite(url)
  }

  // everything else (API, assets, other hosts) just passes through
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
