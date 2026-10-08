import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*"
}
