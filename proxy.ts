// middleware.ts в корне
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/home/:path*", "/messages/:path*", "/notifications/:path*", "/explore/:path*"],
};
