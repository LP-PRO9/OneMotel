"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { useNavScroll } from "@/hooks/useNavScroll";
import { whatsappUrl } from "@/lib/constants";

type NavVariant = "home" | "default";

interface NavProps {
  variant?: NavVariant;
}

export function Nav({ variant = "default" }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  useNavScroll(navRef, { withMarquee: variant === "home" });

  return (
    <>
      <nav id={variant === "home" ? "nav" : "mainNav"} ref={navRef}>
        <Link href="/">
          <Image
            src="/IMG/logo.png"
            alt="One Motel"
            className="nav-logo"
            width={120}
            height={38}
            priority
          />
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/#sobre">Sobre</Link>
          </li>
          <li>
            <Link href="/suites">Suítes</Link>
          </li>
          <li>
            <Link href="/#reviews">Reviews</Link>
          </li>
          <li className={variant === "home" ? "nav-cta" : undefined}>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              {variant === "home" ? "Entrar em Contato" : "Reservar"}
            </a>
          </li>
        </ul>
        <button
          className="nav-ham"
          aria-label="Menu"
          onClick={() => setMenuOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mob-menu${menuOpen ? " open" : ""}`}>
        <button
          className="mob-menu-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Fechar menu"
        >
          <svg viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="mob-menu-links">
          <Link href="/#sobre" onClick={() => setMenuOpen(false)}>
            Sobre
          </Link>
          <Link href="/suites" onClick={() => setMenuOpen(false)}>
            Suítes
          </Link>
          <Link href="/#reviews" onClick={() => setMenuOpen(false)}>
            Reviews
          </Link>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            {variant === "home" ? "Entrar em Contato" : "Reservar"}
          </a>
        </div>
      </div>
    </>
  );
}
