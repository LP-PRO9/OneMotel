import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SuitePageClient } from "@/components/suite/SuitePageClient";
import { getAllSuiteIds, getRelatedSuites, getSuite } from "@/lib/suites";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllSuiteIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const suite = getSuite(id);
  if (!suite) return { title: "Suíte não encontrada" };
  return {
    title: `Suíte ${suite.titulo}`,
    description: suite.descricao,
  };
}

export default async function SuitePage({ params }: PageProps) {
  const { id } = await params;
  const suite = getSuite(id);
  if (!suite) notFound();

  const related = getRelatedSuites(suite);
  return <SuitePageClient suite={suite} related={related} />;
}
