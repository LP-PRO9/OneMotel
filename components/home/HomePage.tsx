"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MarqueeBar } from "@/components/layout/MarqueeBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { useGsapFadeUp } from "@/hooks/useGsapFadeUp";
import { encodeImagePath } from "@/lib/image-path";
import { whatsappUrl } from "@/lib/constants";
import "@/styles/home.css";

const FEATURED_SUITES = [
  {
    id: "one-101",
    name: "ONE 101",
    bloco: "ONE",
    img: "IMG/Suites imgs/Suítes ONE/101/11517F5E-2F99-49C3-A650-4FED13BD5357.png",
  },
  {
    id: "egy-102",
    name: "EGY 102",
    bloco: "EGY",
    img: "IMG/Suites imgs/Suítes EGY/102/0A2BEC95-33EE-423F-9B0E-B0FD615735C7.png",
  },
  {
    id: "siji-201",
    name: "SIJI 201",
    bloco: "SIJI",
    img: "IMG/Suites imgs/Suítes SIJI/201/13DBC0A8-F055-45A5-86BD-0CE3A3409914.png",
  },
  {
    id: "evac-301",
    name: "EVAC 301",
    bloco: "EVAC",
    img: "IMG/Suites imgs/Suítes EVAC/301/1E39B655-C6A3-4D2D-AA60-F5285ED929FE.png",
  },
];

const VIDEOS = [
  "/Videos/snapinsta.com.br-6a21ba066d37e.mp4",
  "/Videos/snapinsta.com.br-6a21ba55932f9.mp4",
  "/Videos/snapinsta.com.br-6a21ba8e369c9.mp4",
  "/Videos/snapinsta.com.br-6a21bbaadef3b.mp4",
];

const REVIEWS = [
  {
    text: "Acho que me arrisco a dizer que é um dos melhores de Boa Vista. É bom pra fazer tudo, até um rolê com as amigas pois tem uma banheira enorme...",
    author: "Emilly",
    rating: "10/10",
  },
  {
    text: "Lugar agradável, confortável e atendimento excelente, recomendo, para quem busca conforto e praticidade, só uma observação ficarem atentos a manutenção, a hidro não estava aquecendo, ela ficava com a água fria o tempo todo, de resto tudo maravilhoso.",
    author: "Layza",
  },
  {
    text: "O melhor motel da Cidade, os quartos são extremamente sofisticados, confortáveis. Os valores variam, são compatíveis com o serviço, tudo para o conforto e satisfação do Cliente, nesse caso não acho os valores abusivos. As suítes são implacáveis.. Vale a pena, E recomendo. Bonito, bem localizado, modernizado, como Local Guides recomendo..",
    author: "Gisele",
  },
  {
    text: "Excelente opção para momentos de romance e paixão com a pessoa amada. Local muito aconchegante e impecavelmente preparado para receber os clientes que buscam um lugar de bom gosto para relaxar.",
    author: "Luiz",
  },
  {
    text: "Maravilhoso! Ótimo atendimento, design excelente e super confortável.",
    author: "Micaela",
  },
];

function DailyCtaCard() {
  return (
    <div className="daily-card daily-cta">
      <div className="daily-cta-inner">
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 4C24 4 36 16 36 26C36 32.627 30.627 38 24 38C17.373 38 12 32.627 12 26C12 16 24 4 24 4Z" />
          <path d="M24 18C24 18 30 24 30 28C30 31.314 27.314 34 24 34C20.686 34 18 31.314 18 28C18 24 24 18 24 18Z" />
        </svg>
        <h3>Reserve já</h3>
        <p>Disponível 24h. Sem complicação, sem espera. O momento começa quando vocês chegam.</p>
      </div>
    </div>
  );
}

export function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGsapFadeUp(pageRef, {
    heroSelector: ".hero .fade-up",
    excludeSelectors: [".suite-card"],
    staggerSelector: ".suites-cards-grid .suite-card.fade-up",
    staggerTrigger: ".suites-cards-grid",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const photoLeft = document.getElementById("photoLeft");
      const photoRight = document.getElementById("photoRight");
      if (photoLeft) {
        gsap.to(photoLeft, {
          y: -70,
          ease: "none",
          scrollTrigger: {
            trigger: ".sobre",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
      if (photoRight) {
        gsap.to(photoRight, {
          y: 70,
          ease: "none",
          scrollTrigger: {
            trigger: ".sobre",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    }, pageRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    document.querySelectorAll<HTMLElement>(".sticker-item").forEach((sticker, i) => {
      let dragging = false;
      let ox = 0;
      let oy = 0;
      let cx = 0;
      let cy = 0;
      let pvx = 0;
      let pvy = 0;
      let rot = (Math.random() - 0.5) * 28;
      const floatAmp = 6 + Math.random() * 6;
      const floatSpeed = 2.2 + Math.random() * 1.2;
      const floatPhase = i * 0.9;
      let raf = 0;

      function render(override?: string) {
        if (override) {
          sticker.style.transform = override;
          return;
        }
        const t = performance.now() / 1000;
        const fy = Math.sin(t * floatSpeed + floatPhase) * floatAmp;
        sticker.style.transform = `translate(${cx}px, ${cy + fy}px) rotate(${rot}deg)`;
      }

      function tick() {
        if (!dragging) render();
        raf = requestAnimationFrame(tick);
      }
      raf = requestAnimationFrame(tick);

      sticker.addEventListener("mousedown", (e) => {
        dragging = true;
        ox = e.clientX - cx;
        oy = e.clientY - cy;
        sticker.style.zIndex = "50";
        sticker.style.filter = "drop-shadow(0 10px 28px rgba(252,56,69,0.45))";
      });

      window.addEventListener("mousemove", (e) => {
        if (!dragging) return;
        const nx = e.clientX - ox;
        const ny = e.clientY - oy;
        pvx = nx - cx;
        pvy = ny - cy;
        cx = nx;
        cy = ny;
        render(`translate(${cx}px, ${cy}px) rotate(${rot}deg)`);
      });

      window.addEventListener("mouseup", () => {
        if (!dragging) return;
        dragging = false;
        rot += pvx * 0.04;
        sticker.style.zIndex = "";
        sticker.style.filter = "";
      });

      sticker.addEventListener("mouseenter", () => {
        if (!dragging)
          sticker.style.filter = "drop-shadow(0 6px 16px rgba(252,56,69,0.3))";
      });
      sticker.addEventListener("mouseleave", () => {
        if (!dragging) sticker.style.filter = "";
      });

      return () => cancelAnimationFrame(raf);
    });
  }, []);

  const dailyCards = [...VIDEOS.slice(0, 2), "cta", ...VIDEOS.slice(2)];

  return (
    <div ref={pageRef}>
      <MarqueeBar />
      <Nav variant="home" />

      <section className="hero" id="home">
        <div className="hero-stickers" id="stickerWrap">
          {[
            ["s1", "/Stickers/sticker4.png", 160],
            ["s2", "/Stickers/sticker2.png", 80],
            ["s3", "/Stickers/sticker3.png", 70],
            ["s4", "/Stickers/sticker1.png", 90],
            ["s5", "/Stickers/sticker4.png", 60],
            ["s6", "/Stickers/sticker2.png", 65],
            ["s7", "/Stickers/sticker3.png", 55],
            ["s8", "/Stickers/sticker1.png", 120],
          ].map(([cls, src, w]) => (
            <div key={cls} className={`sticker-item ${cls}`}>
              <Image src={src as string} width={w as number} height={w as number} alt="" />
            </div>
          ))}
        </div>

        <div className="hero-content">
          <h1 className="fade-up">
            Momentos
            <br />
            <span className="italic red">inesquecíveis</span>
          </h1>
          <p className="hero-sub fade-up">
            O motel mais moderno de Boa Vista. Tudo que vocês precisam. Só vocês dois.
          </p>
          <div className="hero-btns fade-up">
            <a href="#suites" className="btn btn-secondary">
              Ver Suítes
            </a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Entrar em Contato
            </a>
          </div>
        </div>

        <div className="hero-footer">
          <div className="hero-address fade-up">
            <strong>Boa Vista,</strong>
            <span>Roraima — Brasil</span>
          </div>
          <span className="hero-badge fade-up">Aberto 24h</span>
        </div>
      </section>

      <section className="sobre" id="sobre">
        <div className="sobre-inner">
          <div className="sobre-photos">
            <img id="photoLeft" src="/IMG/01.jpg" alt="One Motel" />
            <img id="photoRight" src="/IMG/02.png" alt="One Motel" />
          </div>
          <div className="sobre-text fade-up">
            <h2>
              Bem-vindos ao
              <br />
              <span className="italic red">One Motel</span>
            </h2>
            <p>
              Somos o motel mais moderno de Boa Vista. Cada detalhe foi pensado para vocês — da hidromassagem à iluminação, do cardápio ao silêncio necessário para o mundo parar.
            </p>
            <p>
              Venha descobrir por que somos a escolha favorita dos casais de Boa Vista. Estrutura moderna, conforto real e uma experiência que começa na entrada.
            </p>
          </div>
        </div>
      </section>

      <section className="daily">
        <div className="daily-inner">
          <div className="daily-text">
            <h2 className="fade-up">
              Cada noite merece
              <br />
              uma <span className="italic">escolha especial</span>
            </h2>
            <p className="fade-up">Hidromassagem. Piscina. Cardápio. Clima perfeito. Só vocês dois.</p>
          </div>
          <div className="daily-wrap">
            <div className="daily-track">
              {[...dailyCards, ...dailyCards].map((item, i) =>
                item === "cta" ? (
                  <DailyCtaCard key={`cta-${i}`} />
                ) : (
                  <div key={`${item}-${i}`} className="daily-card">
                    <video src={item as string} autoPlay muted loop playsInline />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="menu-section" id="suites">
        <div className="menu-inner">
          <div className="menu-head fade-up" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 48 }}>
            <h2>
              Nossas <span className="italic red">Suítes</span>
            </h2>
            <Link href="/suites" className="btn btn-secondary">
              Ver todas as suítes →
            </Link>
          </div>

          <div className="suites-cards-grid">
            {FEATURED_SUITES.map((suite) => (
              <Link key={suite.id} href={`/suite/${suite.id}`} className="suite-card fade-up">
                <div className="suite-card-bg">
                  <img src={encodeImagePath(suite.img)} alt={`Suíte ${suite.name}`} />
                </div>
                <div className="suite-card-gradient" />
                <div className="suite-card-info">
                  <div className="suite-card-name">Suíte {suite.name}</div>
                  <div className="suite-card-loc">One Motel · Bloco {suite.bloco}</div>
                  <div className="suite-ov-label">Amenidades</div>
                  <div className="suite-ov-text">TV a cabo, frigobar completo, ar-condicionado e Wi-Fi.</div>
                </div>
                <div className="suite-card-reveal">
                  <div className="suite-price-wrap">
                    <span className="suite-price-val">R$ ---</span>
                    <span className="suite-price-per">por período</span>
                  </div>
                  <span className="suite-reserve-btn">Ver Suíte →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="suite-info-wrap fade-up">
            <div className="suite-info-block">
              <h3>Incluso em todas as suítes</h3>
              <div className="includes-pills">
                {["Estacionamento", "TV a cabo", "Wi-Fi", "Frigobar", "Ar-condicionado", "Toalhas e amenities"].map(
                  (label) => (
                    <div key={label} className="include-pill">
                      {label}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="suite-info-block">
              <h3>Adicionais</h3>
              <div className="extras-list">
                {[
                  ["Room service", "R$ 30"],
                  ["Café da manhã", "R$ 40"],
                  ["Espumante + frutas", "R$ 80"],
                  ["Decoração romântica", "R$ 60"],
                  ["Hora adicional", "R$ 50"],
                  ["Pernoite", "R$ 220"],
                ].map(([name, price]) => (
                  <div key={name} className="extra-row">
                    <span className="extra-name">{name}</span>
                    <span className="extra-price">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-photo quote-photo-left fade-up">
          <img src="/IMG/Suites/img8.png" alt="One Motel" />
        </div>
        <div className="quote-photo quote-photo-right fade-up">
          <img src="/IMG/02.png" alt="One Motel" />
        </div>
        <div className="quote-content">
          <p className="quote-big fade-up">
            Nossa terapia,
            <br />
            uma noite <span className="red italic">só de vocês</span>
          </p>
          <p className="quote-sub fade-up">
            Sem pressa, sem julgamento. Só vocês dois e o conforto que vocês merecem. Porque às vezes o pequeno luxo do dia está na escolha certa.
          </p>
          <div className="fade-up">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Entrar em Contato
            </a>
          </div>
        </div>
      </section>

      <section className="reviews-section" id="reviews">
        <div className="reviews-title-wrap">
          <span className="reviews-display">Reviews</span>
        </div>
        <div className="reviews-cards">
          {REVIEWS.map((r) => (
            <div key={r.author} className="review-card">
              <div className="stars">{r.rating ?? "★★★★★"}</div>
              <p className="review-text">{r.text}</p>
              <span className="review-author">{r.author}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="hero-final">
        <div className="hero-final-content">
          <h1 className="fade-up">
            Aqui criamos momentos
            <br />
            com cuidado e <span className="italic red">paixão</span>
          </h1>
          <div className="hf-btns fade-up">
            <a href="#suites" className="btn btn-secondary">
              Ver Suítes
            </a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Entrar em Contato
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
