import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [{ title: "Termos de Uso — Rainha das Ofertas" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="relative z-10 mx-auto min-h-screen max-w-2xl px-5 py-16">
      <Link to="/" className="text-sm text-primary hover:underline">
        ← Voltar
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-foreground">Termos de Uso</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          A Rainha das Ofertas atua como curadoria e divulgação de promoções de lojas terceiras.
          Os preços, cupons e disponibilidade podem variar a qualquer momento, conforme regras
          das próprias lojas.
        </p>
        <p>
          Não nos responsabilizamos por entregas, trocas, devoluções ou qualquer relação comercial
          entre o consumidor e a loja onde a compra é realizada.
        </p>
      </div>
    </main>
  );
}
