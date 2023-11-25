import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/dbServer";

export async function middleware(request: NextRequest) {
  console.log(`[middleware] ${request.method} ${request.url}`);
  const isLoggedIn = await db.isAuthenticated(request.cookies as any);

  if (
    request.nextUrl.pathname &&
    request.nextUrl.pathname.startsWith("/auth")
  ) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/features", request.url));
    }
    return;
  }

  // Keep search feature as not required to login
  if (
    request.nextUrl.pathname &&
    (request.nextUrl.pathname.startsWith("/features/search") ||
      request.nextUrl.pathname.endsWith("/features"))
  ) {
    return NextResponse.next();
  }

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
