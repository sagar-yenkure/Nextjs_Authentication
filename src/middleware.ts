import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const ispublicpath = path === "/signup" || path === "/login" || path === "/" || path==="/verifymail"

  const token = request.cookies.get("token")?.value || "";

  if (ispublicpath && token) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }

  if (!ispublicpath && !token)
    return NextResponse.redirect(new URL("/login", request.nextUrl));
}

export const config = {
  matcher: ["/", "/profile", "/login", "/signup ","/verifymail"],
};
