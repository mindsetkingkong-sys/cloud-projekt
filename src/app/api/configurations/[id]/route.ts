import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const configuration = await prisma.configuration.findUnique({ where: { id: params.id } });
  if (!configuration) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
  return NextResponse.json({
    id: configuration.id,
    kitchenLine: configuration.kitchenLine,
    selections: JSON.parse(configuration.selections),
    totalPrice: configuration.totalPrice,
  });
}
