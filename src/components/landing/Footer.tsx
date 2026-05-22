import { Link } from "@tanstack/react-router";
import { Crown } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 bg-[#00030a] px-5 py-12 sm:py-14">
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-16 bg-gradient-to-b from-transparent to-[#00030a]" aria-hidden="true" />
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center gap-2">
          <Crown className="h-5 w-5 text-primary" strokeWidth={1.6} />
          <span className="font-display text-lg font-semibold text-primary">
            Rainha das Ofertas
          </span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Curadoria gratuita de promoções, cupons e achadinhos.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm">
          <Link
            to="/privacidade"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Política de Privacidade
          </Link>
          <Link
            to="/termos"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Termos de Uso
          </Link>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-[12.5px] leading-[1.7] text-muted-foreground/85">
          Ofertas podem variar conforme disponibilidade das lojas. A Rainha das Ofertas atua como
          curadoria/divulgação de promoções.
        </p>

        <p className="mt-6 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Rainha das Ofertas
        </p>
      </div>
    </footer>
  );
}
