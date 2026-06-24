import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReservarPageClient } from "@/components/reservar/ReservarPageClient";
import { getAllSuiteIds, getSuite } from "@/lib/suites";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllSuiteIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const suite = getSuite(id);
  if (!suite) return { title: "Reservar" };
  return {
    title: `Reservar — Suíte ${suite.titulo}`,
    description: `Reserve a Suíte ${suite.titulo} no One Motel.`,
  };
}

export default async function ReservarPage({ params }: PageProps) {
  const { id } = await params;
  const suite = getSuite(id);
  if (!suite) notFound();

  return <ReservarPageClient suite={suite} suiteId={id} />;
}
