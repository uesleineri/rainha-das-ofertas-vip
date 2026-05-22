import { useEffect, useState } from "react";
import { Crown } from "lucide-react";

const MESSAGES = [
  "Ana Beatriz garantiu acesso ao grupo gratuito",
  "Mariana entrou para receber ofertas",
  "Camila entrou no grupo da Rainha das Ofertas",
  "Juliana garantiu as ofertas no WhatsApp",
  "Fernanda entrou para receber achadinhos",
  "Larissa acabou de entrar no grupo gratuito",
  "Patrícia garantiu acesso às promoções",
  "Amanda entrou para receber cupons",
  "Bianca entrou no grupo VIP gratuito",
  "Carolina garantiu acesso ao grupo",
];

interface Props {
  /** When true, renders inline (mobile in-flow). When false, floats fixed (desktop). */
  inline?: boolean;
}

export function SocialProofToast({ inline = false }: Props) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const MAX_CYCLES = inline ? 999 : 5;
    let cycles = 0;
    const show = setTimeout(() => setVisible(true), inline ? 200 : 1500);
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        cycles += 1;
        if (cycles >= MAX_CYCLES) {
          setDismissed(true);
          clearInterval(interval);
          return;
        }
        setIndex((i) => (i + 1) % MESSAGES.length);
        setVisible(true);
      }, 450);
    }, 5500);
    return () => {
      clearTimeout(show);
      clearInterval(interval);
    };
  }, [inline]);

  // Hide floating toast when footer enters viewport
  useEffect(() => {
    if (inline) return;
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setDismissed(true);
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, [inline]);

  if (dismissed) return null;

  const card = (
    <div
      className={`flex items-start gap-3 rounded-2xl border border-border bg-[#000511]/95 px-3.5 py-2.5 shadow-2xl backdrop-blur-md transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
        <Crown className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[12.5px] font-medium leading-snug text-foreground sm:text-[13px]">
          {MESSAGES[index]}
        </p>
        <p className="mt-0.5 text-[11px] text-muted-foreground">agora mesmo</p>
      </div>
    </div>
  );

  if (inline) {
    return (
      <div
        aria-live="polite"
        className="relative z-10 mx-auto block w-full max-w-md px-5 pb-1 sm:hidden"
      >
        {card}
      </div>
    );
  }

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed bottom-6 left-6 z-50 hidden w-[19rem] sm:block"
    >
      <div className="pointer-events-auto">{card}</div>
    </div>
  );
}
