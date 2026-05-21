import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [{ title: "Política de Privacidade — Rainha das Ofertas" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="relative z-10 mx-auto min-h-screen max-w-2xl px-5 py-16">
      <Link to="/" className="text-sm text-primary hover:underline">
        ← Voltar
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-foreground">Política de Privacidade</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          A Rainha das Ofertas respeita a sua privacidade. Esta página não coleta dados pessoais
          através de formulários. A entrada no grupo é feita diretamente pelo WhatsApp.
        </p>
        <p>
          Para qualquer dúvida sobre privacidade, entre em contato com a administradora do grupo.
        </p>
      </div>
    </main>
  );
}
