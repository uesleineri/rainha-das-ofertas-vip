import { Tag, ShoppingBag, Zap, Crown, ShieldCheck } from "lucide-react";

const BENEFITS = [
  {
    icon: Tag,
    title: "Cupons que realmente funcionam",
    text: "Nada de perder tempo testando cupom inválido. Você recebe oportunidades já garimpadas.",
  },
  {
    icon: ShoppingBag,
    title: "Achadinhos das principais lojas",
    text: "Produtos úteis, bonitos e desejados da Shopee, Mercado Livre, Amazon e outras lojas, com preços que fazem sentido.",
  },
  {
    icon: Zap,
    title: "Alertas de ofertas relâmpago",
    text: "Você fica sabendo quando aparecem promoções rápidas antes que acabem.",
  },
  {
    icon: Crown,
    title: "Curadoria diária da Rainha",
    text: "Eu procuro, filtro e separo as melhores oportunidades para você.",
  },
  {
    icon: ShieldCheck,
    title: "Links de lojas confiáveis",
    text: "Ofertas selecionadas com foco em segurança, praticidade e economia.",
  },
];

export function Benefits() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-5xl px-5 py-10 sm:py-16">
      <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Ao entrar, você começa a <span className="text-primary">receber</span>:
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-3.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {BENEFITS.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-secondary/15 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-secondary/25 sm:p-5"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.9} />
              </div>
              <h3 className="text-[15px] font-semibold leading-tight text-primary sm:text-base">
                {title}
              </h3>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
