import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { ScarcityBar } from "@/components/landing/ScarcityBar";
import { SocialProofToast } from "@/components/landing/SocialProofToast";
import { Benefits } from "@/components/landing/Benefits";
import { SecondaryCTA } from "@/components/landing/SecondaryCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Rainha das Ofertas — Grupo VIP gratuito de ofertas no WhatsApp",
      },
      {
        name: "description",
        content:
          "Entre no grupo VIP gratuito da Rainha das Ofertas e receba cupons reais, achadinhos e ofertas relâmpago da Shopee, Mercado Livre, Amazon e mais — direto no seu WhatsApp.",
      },
      { property: "og:title", content: "Rainha das Ofertas — Grupo VIP gratuito no WhatsApp" },
      {
        property: "og:description",
        content:
          "Cupons reais, achadinhos e ofertas relâmpago direto no seu WhatsApp. Entrada gratuita.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Hero />
      <ScarcityBar />
      <SocialProofToast inline />
      <Benefits />
      <SecondaryCTA />
      <Footer />
      <SocialProofToast />
    </main>
  );
}

