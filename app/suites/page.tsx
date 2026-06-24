import type { Metadata } from "next";
import { SuitesPageClient } from "@/components/suites/SuitesPageClient";
import { getAllSuites } from "@/lib/suites";

export const metadata: Metadata = {
  title: "Suítes",
  description: "Encontre a suíte perfeita no One Motel — Boa Vista, RR.",
};

export default function SuitesPage() {
  const suites = getAllSuites();
  return <SuitesPageClient suites={suites} />;
}
