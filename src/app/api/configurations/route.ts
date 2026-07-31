import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { kitchenLine, selections, totalPrice } = body ?? {};

  if (typeof kitchenLine !== "string" || typeof selections !== "object" || typeof totalPrice !== "number") {
    return NextResponse.json({ error: "invalid payload" }, { status: 400 });
  }

  const configuration = await prisma.configuration.create({
    data: {
      kitchenLine,
      selections: JSON.stringify(selections),
      totalPrice,
    },
  });

  return NextResponse.json({ id: configuration.id });
}
