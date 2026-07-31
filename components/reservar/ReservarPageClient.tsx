"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Suite } from "@/data/suites";
import { getAllSuites } from "@/lib/suites";
import { encodeImagePath } from "@/lib/image-path";
import { bookingWhatsAppUrl } from "@/lib/whatsapp";
import "@/styles/reservar.css";

const MONTHS_PT = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];
const DAYS_SHORT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const HOURS = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
const MINS = ["00", "10", "20", "30", "40", "50"];
const ITEM_H = 48;
const THUMB_W = 52;

interface ReservarPageClientProps {
  suite: Suite;
  suiteId: string;
}

export function ReservarPageClient({ suite: initialSuite, suiteId }: ReservarPageClientProps) {
  const router = useRouter();
  const allSuites = getAllSuites();
  const [suite, setSuite] = useState(initialSuite);
  const [currentStep, setCurrentStep] = useState(1);
  const [calDate, setCalDate] = useState(() => {
    const d = new Date();
    d.setDate(1);
    return d;
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [hourIdx, setHourIdx] = useState(0);
  const [minIdx, setMinIdx] = useState(0);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [slideSuccess, setSlideSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const drumHRef = useRef<HTMLDivElement>(null);
  const drumMRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const thumbPosRef = useRef(0);

  const dateLabel = selectedDate
    ? `${DAYS_SHORT[selectedDate.getDay()]}, ${selectedDate.getDate()} de ${MONTHS_PT[selectedDate.getMonth()]}`
    : "";

  const timeStr = `${HOURS[hourIdx]}h${MINS[minIdx]}`;

  const goToStep = (n: number) => setCurrentStep(n);

  const buildCalendar = useCallback(() => {
    const year = calDate.getFullYear();
    const month = calDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const cells: React.ReactNode[] = [];
    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`e-${i}`} className="cal-cell empty" />);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const thisDate = new Date(year, month, d);
      const isPast = thisDate < today;
      const isToday = thisDate.toDateString() === today.toDateString();
      const isSelected =
        selectedDate?.toDateString() === thisDate.toDateString();
      cells.push(
        <div
          key={d}
          className={[
            "cal-cell",
            isPast ? "disabled" : "",
            isToday ? "today" : "",
            isSelected ? "selected" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          onClick={() => {
            if (isPast) return;
            setSelectedDate(thisDate);
            setTimeout(() => goToStep(2), 300);
          }}
          onKeyDown={() => {}}
          role="button"
          tabIndex={isPast ? -1 : 0}
        >
          {d}
        </div>
      );
    }
    return cells;
  }, [calDate, selectedDate]);

  const updateDrumVisuals = useCallback((col: HTMLDivElement, items: string[]) => {
    const idx = Math.round(col.scrollTop / ITEM_H);
    col.querySelectorAll(".drum-item").forEach((item, i) => {
      const el = item as HTMLElement;
      const dist = Math.abs(i - idx);
      if (dist === 0) {
        el.style.color = "var(--neon)";
        el.style.textShadow = "0 0 20px rgba(224,24,122,0.7)";
        el.style.fontSize = "36px";
        el.style.opacity = "1";
      } else if (dist === 1) {
        el.style.color = "rgba(240,238,246,0.55)";
        el.style.textShadow = "none";
        el.style.fontSize = "28px";
        el.style.opacity = "0.55";
      } else {
        el.style.color = "rgba(240,238,246,0.2)";
        el.style.textShadow = "none";
        el.style.fontSize = "22px";
        el.style.opacity = "0.2";
      }
    });
    if (col === drumHRef.current) setHourIdx(Math.min(idx, HOURS.length - 1));
    if (col === drumMRef.current) setMinIdx(Math.min(idx, MINS.length - 1));
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      if (drumHRef.current) updateDrumVisuals(drumHRef.current, HOURS);
      if (drumMRef.current) updateDrumVisuals(drumMRef.current, MINS);
    }, 50);
    return () => clearTimeout(t);
  }, [currentStep, updateDrumVisuals]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 899px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const getTrackMax = () => {
    const track = trackRef.current;
    return track ? track.offsetWidth - THUMB_W - 10 : 0;
  };

  const resetSlide = () => {
    const thumb = thumbRef.current;
    const fill = fillRef.current;
    if (thumb && fill) {
      thumb.style.transition = "transform 0.4s cubic-bezier(0.4,0,0.2,1)";
      fill.style.transition = "width 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s";
      thumbPosRef.current = 0;
      thumb.style.transform = "translateX(0)";
      fill.style.width = "0";
      fill.style.opacity = "0";
      setTimeout(() => {
        thumb.style.transition = "";
        fill.style.transition = "";
      }, 400);
    }
    setSlideSuccess(false);
  };

  const buildWhatsAppUrl = () => {
    const d = selectedDate;
    const dayStr = d
      ? `${d.getDate()}/${String(d.getMonth() + 1).padStart(2, "0")}`
      : "—";
    return bookingWhatsAppUrl({
      suiteTitle: suite.titulo,
      dateLabel: dayStr,
      time: timeStr,
    });
  };

  const confirmBooking = () => {
    const url = buildWhatsAppUrl();
    setTimeout(() => {
      window.open(url, "_blank");
      resetSlide();
    }, 800);
  };

  const confirmBookingNow = () => {
    if (slideSuccess) return;
    setSlideSuccess(true);
    window.open(buildWhatsAppUrl(), "_blank");
    setTimeout(() => setSlideSuccess(false), 1200);
  };

  const moveDrag = (clientX: number) => {
    if (!draggingRef.current) return;
    const thumb = thumbRef.current;
    const fill = fillRef.current;
    const track = trackRef.current;
    if (!thumb || !fill || !track) return;
    const max = getTrackMax();
    const pos = Math.min(Math.max(clientX - startXRef.current, 0), max);
    thumbPosRef.current = pos;
    thumb.style.transform = `translateX(${pos}px)`;
    const pct = max > 0 ? pos / max : 0;
    fill.style.width = `${pos + THUMB_W + 10}px`;
    fill.style.opacity = String(pct);
    thumb.style.boxShadow = `0 0 ${20 + pct * 20}px rgba(224,24,122,${0.7 + pct * 0.3}), 0 0 ${40 + pct * 40}px rgba(224,24,122,${0.3 + pct * 0.2})`;
  };

  const endDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    const track = trackRef.current;
    if (track) track.style.cursor = "";
    const max = getTrackMax();
    const pct = max > 0 ? thumbPosRef.current / max : 0;
    if (pct >= 0.82) {
      setSlideSuccess(true);
      const thumb = thumbRef.current;
      if (thumb) thumb.style.transform = `translateX(${max}px)`;
      confirmBooking();
    } else {
      resetSlide();
    }
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => moveDrag(e.clientX);
    const onUp = () => endDrag();
    const onTouchMove = (e: TouchEvent) => {
      if (draggingRef.current) {
        e.preventDefault();
        moveDrag(e.touches[0].clientX);
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  });

  const selectSuite = (id: string) => {
    const s = allSuites.find((x) => x.id === id);
    if (s) {
      setSuite(s);
      router.replace(`/reservar/${id}`);
    }
    setSheetOpen(false);
  };

  return (
    <>
      <nav className="r-nav">
        <button
          type="button"
          className="r-nav-back"
          onClick={() => {
            if (window.history.length > 1) router.back();
            else router.push(`/suite/${suiteId}`);
          }}
          aria-label="Voltar"
        >
          <svg viewBox="0 0 24 24">
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </button>
        <Link href="/">
          <Image src="/IMG/logo.png" alt="One Motel" className="r-nav-logo" width={100} height={28} />
        </Link>
        <span className="r-nav-step">Passo {currentStep} de 2</span>
      </nav>

      <div className="booking-wrap">
        <div className="card-suite">
          <div className="card-suite-bg">
            <img src={encodeImagePath(suite.imgs[0])} alt={suite.titulo} />
          </div>
          <div className="card-suite-overlay" />
          <div className="card-suite-content">
            <button type="button" className="suite-selector-btn" onClick={() => setSheetOpen(true)}>
              Trocar suíte
              <svg viewBox="0 0 24 24">
                <polyline points="6,9 12,15 18,9" />
              </svg>
            </button>
            <h1 className="card-suite-name">Suíte {suite.titulo}</h1>
            <p className="card-suite-sub">One Motel · Bloco {suite.bloco}</p>
          </div>
        </div>

        <div className="card-booking">
          <div className="step-indicator">
            <div className={`step-dot${currentStep === 1 ? " active" : currentStep > 1 ? " done" : ""}`}>
              <div className="step-dot-circle">1</div>
              <span className="step-dot-label">Data</span>
            </div>
            <div className="step-line" />
            <div className={`step-dot${currentStep === 2 ? " active" : ""}`}>
              <div className="step-dot-circle">2</div>
              <span className="step-dot-label">Horário</span>
            </div>
          </div>

          <button
            type="button"
            className={`selected-date-badge${currentStep === 2 && selectedDate ? " show" : ""}`}
            onClick={() => goToStep(1)}
          >
            <svg viewBox="0 0 24 24">
              <polyline points="15,18 9,12 15,6" />
            </svg>
            <span>{dateLabel}</span>
          </button>

          <div className="steps-container">
            <div className={`step-panel${currentStep === 1 ? " visible" : " hidden-left"}`}>
              <div className="calendar-header">
                <button
                  type="button"
                  className="cal-nav-btn"
                  onClick={() =>
                    setCalDate((d) => {
                      const n = new Date(d);
                      n.setMonth(n.getMonth() - 1);
                      return n;
                    })
                  }
                >
                  <svg viewBox="0 0 24 24">
                    <polyline points="15,18 9,12 15,6" />
                  </svg>
                </button>
                <span className="cal-month-label">
                  {MONTHS_PT[calDate.getMonth()]} {calDate.getFullYear()}
                </span>
                <button
                  type="button"
                  className="cal-nav-btn"
                  onClick={() =>
                    setCalDate((d) => {
                      const n = new Date(d);
                      n.setMonth(n.getMonth() + 1);
                      return n;
                    })
                  }
                >
                  <svg viewBox="0 0 24 24">
                    <polyline points="9,18 15,12 9,6" />
                  </svg>
                </button>
              </div>
              <div className="cal-days-header">
                {DAYS_SHORT.map((d) => (
                  <div key={d} className="cal-day-name">
                    {d}
                  </div>
                ))}
              </div>
              <div className="cal-grid">{buildCalendar()}</div>
            </div>

            <div className={`step-panel${currentStep === 2 ? " visible" : " hidden-right"}`}>
              <div className="time-picker-wrap">
                <div className="drum-col-wrap">
                  <div className="drum-col-label">Hora</div>
                  <button
                    type="button"
                    className="drum-arrow"
                    onClick={() =>
                      drumHRef.current?.scrollBy({ top: -ITEM_H, behavior: "smooth" })
                    }
                  >
                    <svg viewBox="0 0 24 24">
                      <polyline points="18,15 12,9 6,15" />
                    </svg>
                  </button>
                  <div className="drum-col-container">
                    <div
                      className="drum-col"
                      ref={drumHRef}
                      onScroll={() =>
                        drumHRef.current && updateDrumVisuals(drumHRef.current, HOURS)
                      }
                    >
                      {HOURS.map((h) => (
                        <div key={h} className="drum-item">
                          {h}
                        </div>
                      ))}
                    </div>
                    <div className="drum-col-fade top" />
                    <div className="drum-col-fade bottom" />
                  </div>
                  <button
                    type="button"
                    className="drum-arrow"
                    onClick={() =>
                      drumHRef.current?.scrollBy({ top: ITEM_H, behavior: "smooth" })
                    }
                  >
                    <svg viewBox="0 0 24 24">
                      <polyline points="6,9 12,15 18,9" />
                    </svg>
                  </button>
                </div>

                <div className="drum-sep">:</div>

                <div className="drum-col-wrap">
                  <div className="drum-col-label">Min</div>
                  <button
                    type="button"
                    className="drum-arrow"
                    onClick={() =>
                      drumMRef.current?.scrollBy({ top: -ITEM_H, behavior: "smooth" })
                    }
                  >
                    <svg viewBox="0 0 24 24">
                      <polyline points="18,15 12,9 6,15" />
                    </svg>
                  </button>
                  <div className="drum-col-container">
                    <div
                      className="drum-col"
                      ref={drumMRef}
                      onScroll={() =>
                        drumMRef.current && updateDrumVisuals(drumMRef.current, MINS)
                      }
                    >
                      {MINS.map((m) => (
                        <div key={m} className="drum-item">
                          {m}
                        </div>
                      ))}
                    </div>
                    <div className="drum-col-fade top" />
                    <div className="drum-col-fade bottom" />
                  </div>
                  <button
                    type="button"
                    className="drum-arrow"
                    onClick={() =>
                      drumMRef.current?.scrollBy({ top: ITEM_H, behavior: "smooth" })
                    }
                  >
                    <svg viewBox="0 0 24 24">
                      <polyline points="6,9 12,15 18,9" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className={`booking-summary${currentStep === 2 ? " show" : ""}`}>
                <div className="bs-item">
                  <span className="bs-label">Suíte</span>
                  <span className="bs-value">Suíte {suite.titulo}</span>
                </div>
                <div className="bs-item">
                  <span className="bs-label">Data</span>
                  <span className="bs-value">
                    {selectedDate
                      ? `${selectedDate.getDate()}/${String(selectedDate.getMonth() + 1).padStart(2, "0")}`
                      : "—"}
                  </span>
                </div>
                <div className="bs-item">
                  <span className="bs-label">Horário</span>
                  <span className="bs-value">{timeStr}</span>
                </div>
              </div>

              <div className="slide-wrap">
                {isMobile ? (
                  <button
                    type="button"
                    className={`confirm-btn${slideSuccess ? " success" : ""}`}
                    onClick={confirmBookingNow}
                  >
                    Confirmar reserva
                    <svg viewBox="0 0 24 24">
                      <polyline points="9,18 15,12 9,6" />
                    </svg>
                  </button>
                ) : (
                  <div
                    className={`slide-track${slideSuccess ? " success" : ""}`}
                    ref={trackRef}
                  >
                    <div className="slide-fill" ref={fillRef} />
                    <div
                      className="slide-thumb"
                      ref={thumbRef}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        draggingRef.current = true;
                        startXRef.current = e.clientX - thumbPosRef.current;
                        if (trackRef.current) trackRef.current.style.cursor = "grabbing";
                      }}
                      onTouchStart={(e) => {
                        draggingRef.current = true;
                        startXRef.current = e.touches[0].clientX - thumbPosRef.current;
                      }}
                    >
                      <svg viewBox="0 0 24 24">
                        <polyline points="9,18 15,12 9,6" />
                      </svg>
                    </div>
                    <div className="slide-text">Deslizar para confirmar</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sheet-overlay${sheetOpen ? " open" : ""}`}
        onClick={() => setSheetOpen(false)}
        onKeyDown={() => {}}
        role="presentation"
      />
      <div className={`sheet${sheetOpen ? " open" : ""}`}>
        <div className="sheet-handle" />
        <div className="sheet-title">Escolher suíte</div>
        <div>
          {allSuites.map((s) => (
            <div
              key={s.id}
              className={`sheet-item${s.id === suite.id ? " active" : ""}`}
              onClick={() => selectSuite(s.id)}
              onKeyDown={() => selectSuite(s.id)}
              role="button"
              tabIndex={0}
            >
              <img className="sheet-item-img" src={encodeImagePath(s.imgs[0])} alt="" />
              <div>
                <div className="sheet-item-name">Suíte {s.titulo}</div>
                <div className="sheet-item-bloco">Bloco {s.bloco}</div>
              </div>
              <svg className="sheet-item-check" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="2.5">
                <polyline points="20,6 9,17 4,12" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
