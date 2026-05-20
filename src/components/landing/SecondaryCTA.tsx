import { WhatsAppButton } from "./WhatsAppButton";

export function SecondaryCTA() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-2xl px-5 py-12 text-center sm:py-16">
      <div className="rounded-3xl border border-border bg-gradient-to-b from-secondary/30 to-secondary/5 p-8 backdrop-blur-sm sm:p-12">
        <p className="text-lg font-medium leading-snug text-foreground sm:text-xl">
          Entre agora e comece a receber as{" "}
          <span className="text-primary">melhores ofertas</span> direto no seu WhatsApp.
        </p>

        <div className="mt-8">
          <WhatsAppButton>Quero receber as ofertas no WhatsApp</WhatsAppButton>
          <p className="mt-3 text-xs text-muted-foreground sm:text-sm">
            Grupo gratuito • Sem compromisso • Você pode sair quando quiser
          </p>
        </div>
      </div>
    </section>
  );
}
