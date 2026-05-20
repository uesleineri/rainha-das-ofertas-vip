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
    text: "Produtos úteis, bonitos e desejados da Shopee, Mercado Livre, Amazon e outras, com preços que fazem sentido.",
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
    <section className="relative z-10 mx-auto w-full max-w-5xl px-5 py-12 sm:py-16">
      <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
        Ao entrar, você começa a <span className="text-primary">receber</span>:
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-secondary/15 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-secondary/25"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
              <Icon className="h-6 w-6 text-primary" strokeWidth={1.8} />
            </div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
