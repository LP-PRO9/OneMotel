import { SUITES, type Suite } from "@/data/suites";

export function getSuite(id: string): Suite | undefined {
  return SUITES[id];
}

export function getAllSuiteIds(): string[] {
  return Object.keys(SUITES);
}

export function getAllSuites(): Suite[] {
  return Object.values(SUITES);
}

export function getRelatedSuites(suite: Suite, limit = 3): Suite[] {
  const sameBloco = Object.values(SUITES).filter(
    (s) => s.id !== suite.id && s.bloco === suite.bloco
  );
  const others = Object.values(SUITES).filter(
    (s) => s.id !== suite.id && s.bloco !== suite.bloco
  );
  const result = [...sameBloco];
  while (result.length < limit && others.length) {
    result.push(others.shift()!);
  }
  return result.slice(0, limit);
}
