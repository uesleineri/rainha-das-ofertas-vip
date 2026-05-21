import { WhatsAppButton } from "./WhatsAppButton";

export function SecondaryCTA() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-2xl px-5 py-12 text-center sm:py-16">
      <div className="rounded-3xl border border-border bg-gradient-to-b from-secondary/30 to-secondary/5 px-6 py-9 backdrop-blur-sm sm:px-12 sm:py-12">
        <p className="mx-auto max-w-[28ch] text-balance text-[17px] font-medium leading-[1.35] text-foreground sm:max-w-none sm:text-xl">
          Entre agora e comece a receber as{" "}
          <span className="text-primary">melhores ofertas</span> direto no seu WhatsApp.
        </p>

        <div className="mx-auto mt-7 max-w-md sm:mt-8">
          <WhatsAppButton>Quero receber as ofertas no WhatsApp</WhatsAppButton>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Grupo gratuito • Sem compromisso • Você pode sair quando quiser
          </p>
        </div>
      </div>
    </section>
  );
}
