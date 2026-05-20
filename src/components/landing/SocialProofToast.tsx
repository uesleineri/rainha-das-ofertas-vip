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

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), inline ? 200 : 1500);
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % MESSAGES.length);
        setVisible(true);
      }, 450);
    }, 5500);
    return () => {
      clearTimeout(show);
      clearInterval(interval);
    };
  }, [inline]);

  const card = (
    <div
      className={`flex items-center gap-3 rounded-2xl border border-border bg-[#000511]/95 px-4 py-3 shadow-2xl backdrop-blur-md transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
        <Crown className="h-4 w-4 text-primary" strokeWidth={2} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-medium leading-snug text-foreground sm:text-sm">
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
        className="relative z-10 mx-auto block w-full max-w-md px-5 pb-2 sm:hidden"
      >
        {card}
      </div>
    );
  }

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed bottom-6 left-6 z-50 hidden w-full max-w-xs sm:block"
    >
      <div className="pointer-events-auto">{card}</div>
    </div>
  );
}
