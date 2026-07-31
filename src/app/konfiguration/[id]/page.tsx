import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Configurator from "@/components/Configurator";
import { Selections } from "@/lib/product-data";

export const dynamic = "force-dynamic";

export default async function SavedConfigurationPage({ params }: { params: { id: string } }) {
  const configuration = await prisma.configuration.findUnique({ where: { id: params.id } });
  if (!configuration) notFound();

  const selections = JSON.parse(configuration.selections) as Selections;

  return <Configurator initialSelections={selections} initialConfigId={configuration.id} />;
}
