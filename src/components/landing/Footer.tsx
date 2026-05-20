import { Link } from "@tanstack/react-router";
import { Crown } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-[#00030a] px-5 py-10">
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center gap-2">
          <Crown className="h-5 w-5 text-primary" strokeWidth={1.6} />
          <span className="font-display text-lg font-semibold text-primary">
            Rainha das Ofertas
          </span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Curadoria gratuita de promoções, cupons e achadinhos.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
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

        <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-muted-foreground/80">
          Ofertas podem variar conforme disponibilidade das lojas. A Rainha das Ofertas atua como
          curadoria/divulgação de promoções.
        </p>

        <p className="mt-4 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Rainha das Ofertas
        </p>
      </div>
    </footer>
  );
}
