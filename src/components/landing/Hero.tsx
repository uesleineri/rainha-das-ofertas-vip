import { Crown } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <header className="relative z-10 flex flex-col items-center px-5 pt-10 pb-8 text-center sm:pt-16 sm:pb-14">
      {/* Selo cápsula */}
      <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-primary-foreground shadow-[var(--shadow-gold)] sm:text-xs">
        <Crown className="h-3.5 w-3.5" strokeWidth={2.4} />
        <span>Grupo VIP 100% Gratuito</span>
      </div>

      {/* Logo */}
      <div className="mt-7 flex items-center justify-center gap-2.5 sm:mt-8">
        <Crown className="h-6 w-6 text-primary sm:h-8 sm:w-8" strokeWidth={1.6} />
        <h2 className="font-display text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
          Rainha das Ofertas
        </h2>
      </div>

      {/* Headline */}
      <h1 className="mx-auto mt-7 max-w-[17ch] text-balance font-display text-[1.75rem] font-semibold leading-[1.18] tracking-tight text-foreground sm:max-w-3xl sm:text-5xl sm:leading-[1.1]">
        <span className="text-primary">Ofertas escondidas</span>,{" "}
        <span className="text-primary">cupons reais</span> e{" "}
        <span className="text-primary">achadinhos</span> com desconto direto no seu{" "}
        <span className="text-primary">WhatsApp</span> todos os dias
      </h1>

      {/* Subheadline */}
      <p className="mx-auto mt-6 max-w-[32ch] text-pretty text-[14.5px] leading-[1.65] text-muted-foreground sm:mt-7 sm:max-w-2xl sm:text-lg">
        Eu garimpo ofertas da Shopee, Mercado Livre, Amazon e outras lojas confiáveis para você
        economizar sem perder tempo procurando.
      </p>

      {/* CTA */}
      <div className="mt-7 w-full max-w-md sm:mt-9">
        <WhatsAppButton pulse>Entrar no grupo gratuito agora</WhatsAppButton>
        <p className="mt-3 text-xs text-muted-foreground sm:text-sm">
          Acesso gratuito • Ofertas todos os dias • Entrada pelo WhatsApp
        </p>
      </div>
    </header>
  );
}
