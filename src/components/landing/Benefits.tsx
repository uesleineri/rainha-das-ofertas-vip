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
      <h2 className="mx-auto max-w-[18ch] text-balance text-center font-display text-[1.6rem] font-semibold leading-[1.25] tracking-tight text-foreground sm:max-w-none sm:text-3xl">
        Ao entrar, você começa a <span className="text-primary">receber</span>:
      </h2>

      <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {BENEFITS.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-secondary/15 px-4 py-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-secondary/25 sm:px-5 sm:py-5"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                <Icon className="h-[18px] w-[18px] text-primary" strokeWidth={1.9} />
              </div>
              <h3 className="text-[14.5px] font-semibold leading-[1.25] text-primary sm:text-[15px]">
                {title}
              </h3>
            </div>
            <p className="mt-2.5 text-[13px] leading-[1.55] text-muted-foreground sm:text-[13.5px]">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
