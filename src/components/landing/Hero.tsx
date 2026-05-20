import { Crown } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <header className="relative z-10 flex flex-col items-center px-5 pt-10 pb-12 text-center sm:pt-16">
      {/* Selo cápsula */}
      <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-gold)] sm:text-xs">
        <span>👑</span>
        <span>Grupo VIP 100% Gratuito</span>
      </div>

      {/* Logo */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <Crown className="h-7 w-7 text-primary sm:h-9 sm:w-9" strokeWidth={1.6} />
        <h2 className="font-display text-2xl font-semibold text-primary sm:text-3xl">
          Rainha das Ofertas
        </h2>
      </div>

      {/* Headline */}
      <h1 className="mt-7 max-w-3xl text-3xl font-bold leading-[1.15] text-foreground sm:text-5xl sm:leading-tight">
        🔥 <span className="text-primary">Ofertas escondidas</span>,{" "}
        <span className="text-primary">cupons reais</span> e achadinhos com desconto direto no seu{" "}
        <span className="text-primary">WhatsApp</span> todos os dias
      </h1>

      {/* Subheadline */}
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Eu garimpo ofertas da Shopee, Mercado Livre, Amazon e outras lojas confiáveis para você
        economizar sem perder tempo procurando.
      </p>

      {/* CTA */}
      <div className="mt-9 w-full max-w-md">
        <WhatsAppButton pulse>👑 Entrar no grupo gratuito agora</WhatsAppButton>
        <p className="mt-3 text-xs text-muted-foreground sm:text-sm">
          Acesso gratuito • Ofertas todos os dias • Entrada pelo WhatsApp
        </p>
      </div>
    </header>
  );
}
