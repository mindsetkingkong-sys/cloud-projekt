import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const auth = req.headers.get("authorization");
  const expected = process.env.INTERN_PASSWORD;

  if (expected) {
    const validHeader = "Basic " + Buffer.from(`intern:${expected}`).toString("base64");
    if (auth === validHeader) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Anmeldung erforderlich", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Grilluxe intern"' },
  });
}

export const config = {
  matcher: ["/intern/:path*"],
};
