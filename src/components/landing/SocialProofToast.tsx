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

export function SocialProofToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), 1500);
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
  }, []);

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-4 left-1/2 z-50 w-[92%] max-w-xs -translate-x-1/2 transition-all duration-500 sm:left-6 sm:bottom-6 sm:max-w-sm sm:translate-x-0 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 rounded-2xl border border-border bg-[#000511]/95 px-4 py-3 shadow-2xl backdrop-blur-md">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15">
          <Crown className="h-4 w-4 text-primary" strokeWidth={2} />
        </div>
        <div className="flex-1">
          <p className="text-[13px] font-medium leading-snug text-foreground sm:text-sm">
            {MESSAGES[index]}
          </p>
          <p className="mt-0.5 text-[11px] text-muted-foreground">agora mesmo</p>
        </div>
      </div>
    </div>
  );
}
