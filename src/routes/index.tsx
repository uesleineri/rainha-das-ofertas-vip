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
      { title: "Rainha das Ofertas | Grupo VIP Gratuito de Promoções" },
      {
        name: "description",
        content:
          "Receba ofertas escondidas, cupons reais e achadinhos com desconto direto no seu WhatsApp todos os dias.",
      },
      { property: "og:title", content: "Rainha das Ofertas | Grupo VIP Gratuito de Promoções" },
      {
        property: "og:description",
        content:
          "Receba ofertas escondidas, cupons reais e achadinhos com desconto direto no seu WhatsApp todos os dias.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Rainha das Ofertas" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rainha das Ofertas | Grupo VIP Gratuito de Promoções" },
      {
        name: "twitter:description",
        content:
          "Receba ofertas escondidas, cupons reais e achadinhos com desconto direto no seu WhatsApp todos os dias.",
      },
      { name: "twitter:image", content: "/og-image.jpg" },
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

