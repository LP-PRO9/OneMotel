"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Nav } from "@/components/layout/Nav";
import type { Suite } from "@/data/suites";
import { encodeImagePath } from "@/lib/image-path";
import "@/styles/suites-list.css";

interface SuitesPageClientProps {
  suites: Suite[];
}

export function SuitesPageClient({ suites }: SuitesPageClientProps) {
  const [activBloco, setActivBloco] = useState("all");
  const [activTag, setActivTag] = useState("all");
  const gridRef = useRef<HTMLDivElement>(null);

  const visibleSuites = suites.filter((suite) => {
    const blocoMatch =
      activBloco === "all" || suite.bloco.toLowerCase() === activBloco;
    const tagMatch =
      activTag === "all" || suite.tags.includes(activTag);
    return blocoMatch && tagMatch;
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".suites-hero-title", {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      delay: 0.15,
    });
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".suite-card");
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.65,
      ease: "power2.out",
      stagger: 0.07,
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, [visibleSuites]);

  return (
    <>
      <Nav />
      <section className="suites-hero">
        <span className="suites-hero-label">One Motel · Boa Vista, RR</span>
        <h1 className="suites-hero-title fade-up">
          Encontre a
          <br />
          <em>Suíte Perfeita</em>
        </h1>
      </section>

      <div className="suites-content">
        <div className="suites-filters">
          <div className="filter-group">
            <span className="filter-row-label">Suíte</span>
            <div className="filter-row">
              {[
                ["all", "Todas"],
                ["one", "ONE"],
                ["egy", "EGY"],
                ["siji", "SIJI"],
                ["evac", "EVAC"],
              ].map(([val, label]) => (
                <button
                  key={val}
                  type="button"
                  className={`filter-btn${activBloco === val ? " active" : ""}`}
                  onClick={() => setActivBloco(val)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <span className="filter-row-label">Diferenciais</span>
            <div className="filter-row">
              {[
                ["all", "Todas"],
                ["hidromassagem", "Hidromassagem"],
                ["piscina", "Piscina Privativa"],
              ].map(([val, label]) => (
                <button
                  key={val}
                  type="button"
                  className={`filter-btn${activTag === val ? " active" : ""}`}
                  onClick={() => setActivTag(val)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="suites-grid" ref={gridRef}>
          {visibleSuites.map((suite) => (
            <Link
              key={suite.id}
              href={`/suite/${suite.id}`}
              className="suite-card fade-up"
              data-bloco={suite.bloco.toLowerCase()}
            >
              <div className="suite-card-bg">
                <img
                  src={encodeImagePath(suite.imgs[0])}
                  alt={`Suíte ${suite.titulo}`}
                  loading="lazy"
                />
              </div>
              <div className="suite-card-gradient" />
              <div className="suite-card-info">
                <div className="suite-card-name">Suíte {suite.titulo}</div>
                <div className="suite-card-bloco">One Motel · {suite.bloco}</div>
                <div className="suite-card-amenidades">
                  {suite.amenidades.slice(0, 3).join(" · ")}
                </div>
              </div>
              <div className="suite-card-reveal">
                <div>
                  <span className="suite-price-val">{suite.preco}</span>
                  <span className="suite-price-per">por período</span>
                </div>
                <span className="suite-reserve-btn">Ver Suíte →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className={`suites-empty${visibleSuites.length === 0 ? " visible" : ""}`}>
          Nenhuma suíte encontrada com os filtros selecionados.
        </div>
      </div>
    </>
  );
}
