"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Nav } from "@/components/layout/Nav";
import type { Suite } from "@/data/suites";
import { encodeImagePath } from "@/lib/image-path";
import "@/styles/suite-detail.css";

const AMEN_ICONS = [
  '<svg viewBox="0 0 24 24"><path d="M7 8h10M7 12h10M7 16h6"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>',
  '<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="12" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  '<svg viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M8 8V5a4 4 0 0 1 8 0v3"/></svg>',
  '<svg viewBox="0 0 24 24"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>',
  '<svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>',
  '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  '<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  '<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
];

function SpecsList({
  specs,
  dotClass,
}: {
  specs: string[];
  dotClass: string;
}) {
  return (
    <>
      {specs.map((s, i) => (
        <span key={s} style={{ display: "contents" }}>
          {i > 0 && <span className={dotClass} />}
          <span>{s}</span>
        </span>
      ))}
    </>
  );
}

interface SuitePageClientProps {
  suite: Suite;
  related: Suite[];
}

export function SuitePageClient({ suite, related }: SuitePageClientProps) {
  const imgs = suite.imgs.map(encodeImagePath);
  const total = imgs.length;
  const [carIdx, setCarIdx] = useState(0);
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIdx, setLbIdx] = useState(0);
  const [switching, setSwitching] = useState(false);

  const setCarousel = useCallback(
    (idx: number) => {
      const next = (idx + total) % total;
      setSwitching(true);
      setTimeout(() => {
        setCarIdx(next);
        setSwitching(false);
      }, 180);
    },
    [total]
  );

  const openLb = (idx: number) => {
    setLbIdx(idx);
    setLbOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLb = () => {
    setLbOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".suite-intro .fade-up", {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power2.out",
      stagger: 0.18,
      delay: 0.3,
    });

    if (window.innerWidth > 768) {
      const container = document.getElementById("parallaxContainer");
      document.querySelectorAll(".parallax-item").forEach((item) => {
        gsap.fromTo(
          item,
          { scale: 1 },
          {
            scale: parseFloat((item as HTMLElement).dataset.scale || "4"),
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.5,
            },
          }
        );
      });
    }
  }, []);

  useEffect(() => {
    if (!lbOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") setLbIdx((i) => (i - 1 + total) % total);
      if (e.key === "ArrowRight") setLbIdx((i) => (i + 1) % total);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lbOpen, total]);

  let carTouchX = 0;

  return (
    <>
      <Nav />
      <section className="suite-intro">
        <span className="suite-intro-label fade-up">Suíte</span>
        <h1 className="suite-intro-title fade-up">{suite.titulo}</h1>
        <div className="suite-intro-specs fade-up">
          <SpecsList specs={suite.specs} dotClass="suite-intro-specs-dot" />
        </div>
        <div className="scroll-hint fade-up">
          <span>Role para explorar</span>
          <div className="scroll-hint-line" />
        </div>
      </section>

      <div className="parallax-container" id="parallaxContainer">
        <div className="parallax-sticky">
          <div className="parallax-item" data-scale="5">
            <div className="parallax-img-wrap pi-1">
              <img src={imgs[1 % total]} alt="" />
            </div>
          </div>
          <div className="parallax-item" data-scale="6">
            <div className="parallax-img-wrap pi-2">
              <img src={imgs[2 % total]} alt="" />
            </div>
          </div>
          <div className="parallax-item" data-scale="5">
            <div className="parallax-img-wrap pi-3">
              <img src={imgs[3 % total]} alt="" />
            </div>
          </div>
          <div className="parallax-item" data-scale="6">
            <div className="parallax-img-wrap pi-4">
              <img src={imgs[4 % total]} alt="" />
            </div>
          </div>
          <div className="parallax-item" data-scale="8">
            <div className="parallax-img-wrap pi-5">
              <img src={imgs[5 % total]} alt="" />
            </div>
          </div>
          <div className="parallax-item" data-scale="9">
            <div className="parallax-img-wrap pi-6">
              <img src={imgs[6 % total]} alt="" />
            </div>
          </div>
          <div className="parallax-item parallax-center" data-scale="4">
            <div className="parallax-img-wrap pi-0">
              <img src={imgs[0]} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-hero">
        <img src={imgs[0]} alt={suite.titulo} />
        <div className="mobile-hero-overlay" />
      </div>

      <header className="suite-header">
        <div className="suite-header-left">
          <span className="suite-label">Suíte</span>
          <h2 className="suite-title">{suite.titulo}</h2>
          <div className="suite-specs">
            <SpecsList specs={suite.specs} dotClass="suite-specs-dot" />
          </div>
        </div>
        <div className="suite-header-right">
          <Link href={`/reservar/${suite.id}`} className="suite-book-cta">
            Reservar agora →
          </Link>
        </div>
      </header>

      <div className="suite-gallery-carousel">
        <div
          className="gallery-carousel-main"
          id="carouselMainWrap"
          onClick={(e) => {
            if (!(e.target as HTMLElement).closest(".gallery-carousel-btn")) openLb(carIdx);
          }}
          onTouchStart={(e) => {
            carTouchX = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const diff = carTouchX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) setCarousel(diff > 0 ? carIdx + 1 : carIdx - 1);
          }}
        >
          <img
            src={imgs[carIdx]}
            alt={suite.titulo}
            className={switching ? "switching" : ""}
          />
          <button
            type="button"
            className="gallery-carousel-btn gallery-carousel-prev"
            aria-label="Anterior"
            onClick={() => setCarousel(carIdx - 1)}
          >
            <svg viewBox="0 0 24 24">
              <polyline points="15,18 9,12 15,6" />
            </svg>
          </button>
          <button
            type="button"
            className="gallery-carousel-btn gallery-carousel-next"
            aria-label="Próxima"
            onClick={() => setCarousel(carIdx + 1)}
          >
            <svg viewBox="0 0 24 24">
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </button>
          <div className="gallery-carousel-counter">
            {carIdx + 1} / {total}
          </div>
        </div>
        <div className="gallery-carousel-thumbs">
          {imgs.map((src, i) => (
            <div
              key={src}
              className={`gallery-thumb-item${i === carIdx ? " active" : ""}`}
              onClick={() => setCarousel(i)}
              onKeyDown={() => setCarousel(i)}
              role="button"
              tabIndex={0}
            >
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="suite-body">
        <div className="suite-col-left">
          <div className="suite-section">
            <span className="suite-section-title">Sobre a suíte</span>
            <div className="suite-description">
              <p>{suite.descricao}</p>
            </div>
          </div>
          <div className="suite-section">
            <span className="suite-section-title">O que esta suíte oferece</span>
            <div className="amenities-grid">
              {suite.amenidades.map((a, i) => (
                <div
                  key={a}
                  className="amenity-row"
                  dangerouslySetInnerHTML={{
                    __html: AMEN_ICONS[i % AMEN_ICONS.length] + a,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="suite-col-right">
          <div className="suite-stats-card">
            <div className="stat-big">
              <span className="stat-big-num">{suite.preco}</span>
              <div>
                <span className="stat-big-label">Por período</span>
                <span className="stat-big-sub">Diária ou pernoite</span>
              </div>
            </div>
            <div className="stat-big">
              <span className="stat-big-num">2+</span>
              <div>
                <span className="stat-big-label">Hóspedes</span>
                <span className="stat-big-sub">Capacidade máxima</span>
              </div>
            </div>
            <div className="stat-big">
              <span className="stat-big-num">24h</span>
              <div>
                <span className="stat-big-label">Disponível</span>
                <span className="stat-big-sub">Todos os dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="other-suites">
        <div className="other-suites-head">
          <h2>
            Outras <em>suítes</em>
          </h2>
          <Link href="/suites" className="other-link">
            Ver todas →
          </Link>
        </div>
        <div className="other-cards-wrap">
          {related.map((s) => (
            <div key={s.id} className="other-card">
              <img src={encodeImagePath(s.imgs[0])} alt={`Suíte ${s.titulo}`} />
              <div className="other-card-overlay" />
              <div className="other-card-info">
                <div className="other-card-name">Suíte {s.titulo}</div>
                <div className="other-card-price">{s.preco}</div>
                <Link href={`/suite/${s.id}`} className="other-card-btn">
                  Ver suíte →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="suite-float-bar">
        <Link href={`/reservar/${suite.id}`} className="float-btn float-btn-primary">
          Reservar Agora
        </Link>
        <Link href={`/suite/${suite.proxima}`} className="float-btn float-btn-secondary">
          Próxima suíte →
        </Link>
      </div>

      <div
        className={`lightbox${lbOpen ? " open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeLb();
        }}
        onTouchStart={(e) => {
          carTouchX = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          const diff = carTouchX - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 50)
            setLbIdx((i) => (diff > 0 ? (i + 1) % total : (i - 1 + total) % total));
        }}
      >
        <button type="button" className="lb-close" onClick={closeLb} aria-label="Fechar">
          <svg viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <button
          type="button"
          className="lb-nav lb-prev"
          onClick={() => setLbIdx((i) => (i - 1 + total) % total)}
          aria-label="Anterior"
        >
          <svg viewBox="0 0 24 24">
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </button>
        <img className="lb-img" src={imgs[lbIdx]} alt="" />
        <button
          type="button"
          className="lb-nav lb-next"
          onClick={() => setLbIdx((i) => (i + 1) % total)}
          aria-label="Próxima"
        >
          <svg viewBox="0 0 24 24">
            <polyline points="9,18 15,12 9,6" />
          </svg>
        </button>
      </div>
    </>
  );
}
