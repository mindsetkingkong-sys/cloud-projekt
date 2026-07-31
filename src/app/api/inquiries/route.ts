import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { configurationId, name, email, phone, message } = body ?? {};

  if (typeof configurationId !== "string" || typeof name !== "string" || typeof email !== "string") {
    return NextResponse.json({ error: "invalid payload" }, { status: 400 });
  }
  if (!name.trim() || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid payload" }, { status: 400 });
  }

  const configuration = await prisma.configuration.findUnique({ where: { id: configurationId } });
  if (!configuration) {
    return NextResponse.json({ error: "configuration not found" }, { status: 404 });
  }

  const inquiry = await prisma.inquiry.create({
    data: {
      configurationId,
      name: name.trim(),
      email: email.trim(),
      phone: typeof phone === "string" && phone.trim() ? phone.trim() : null,
      message: typeof message === "string" && message.trim() ? message.trim() : null,
    },
  });

  return NextResponse.json({ id: inquiry.id });
}
