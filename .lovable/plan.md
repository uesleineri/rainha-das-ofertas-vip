# Refinamentos técnicos da landing Rainha das Ofertas

Sem mudar copy, paleta, estrutura ou seções. Apenas ajustes pontuais.

## 1. Hierarquia semântica do Hero
**Arquivo:** `src/components/landing/Hero.tsx`
- Trocar `<h2>` de "Rainha das Ofertas" por `<p>` com `role="img"` + `aria-label="Rainha das Ofertas"` (ou simples `<div>`). Mantém classes visuais (`font-display`, dourado, tamanho).
- Garantir que `<h1>` da headline continue sendo o único h1.

## 2. Toast de prova social inteligente
**Arquivo:** `src/components/landing/SocialProofToast.tsx`
- Desktop (modo flutuante): adicionar limite de aparições (ex.: esconder após 5 ciclos) **e** usar `IntersectionObserver` num sentinel colocado acima do footer — quando o footer entra no viewport, esconder o toast.
- Mobile (`inline`): comportamento atual mantido (já está no fluxo, não flutua).
- Adicionar sentinel `<div id="footer-sentinel" />` em `index.tsx` logo antes do `<Footer />` para o observer encontrar. Alternativa: o próprio toast observa o elemento `<footer>` via `document.querySelector("footer")` no mount.

## 3. Focus-visible nos CTAs
**Arquivos:** `src/components/landing/WhatsAppButton.tsx`, `Footer.tsx` (links legais)
- Adicionar nos botões dourados:
  `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background`
- Nos links do footer: `focus-visible:outline-none focus-visible:underline focus-visible:text-primary`.

## 4. Meta tags sociais + favicon
**Arquivos:** `src/routes/index.tsx`, `src/routes/__root.tsx`, `public/favicon.svg` (novo)
- `index.tsx` `head()`:
  - title: "Rainha das Ofertas | Grupo VIP Gratuito de Promoções"
  - description: "Receba ofertas escondidas, cupons reais e achadinhos com desconto direto no seu WhatsApp todos os dias."
  - og:title, og:description, og:image (`/og-image.jpg`), og:url (relativo `/`), og:type=website, og:site_name
  - twitter:card=summary_large_image, twitter:title, twitter:description, twitter:image
- `__root.tsx`: link `rel="icon"` apontando para `/favicon.svg` (type image/svg+xml). Definir lang="pt-BR" no `<html>` se ainda não estiver.
- **Favicon:** gerar SVG inline simples no `public/favicon.svg` — coroa dourada (#eaba68) sobre fundo arredondado azul-quase-preto (#000511). Inline SVG escrito à mão, sem dependência de imagegen para favicon.
- **og:image:** gerar imagem 1200x630 via `imagegen` (premium, com texto legível) — coroa dourada + "Rainha das Ofertas" + "Grupo VIP Gratuito no WhatsApp" sobre fundo escuro com sutil gradiente dourado. Salvar em `public/og-image.jpg`.

## 5. Padrão de pontinhos mais leve no mobile
**Arquivo:** `src/styles.css`
- No `body::before` atual: reduzir opacidade no mobile via media query.
- Desktop: manter `oklch(0.79 0.12 80 / 0.06)` e `28px 28px`.
- Mobile (`@media (max-width: 640px)`): baixar para `oklch(0.79 0.12 80 / 0.035)` e aumentar espaçamento para `36px 36px`.

## 6. Transição suave CTA → Footer
**Arquivo:** `src/components/landing/Footer.tsx`
- Remover `border-t` brusco; substituir por pseudo-elemento `::before` com gradiente vertical de `transparent` para `#00030a` (~64px de altura) posicionado no topo do footer. Mantém o fundo escuro atual sem nova seção.
- Alternativa mais simples: adicionar um `<div>` antes do `<footer>` em `index.tsx` com `h-16 bg-gradient-to-b from-transparent to-[#00030a]`. Vou usar essa opção (mais isolada, sem alterar layout do footer).

## Fora de escopo
- Sem mudanças de copy, cores, novas seções, timers, ou layout geral.
- Sem alteração da estrutura de roteamento.
- Sem analytics/pixels.

## Resumo dos arquivos tocados
- `src/components/landing/Hero.tsx` (semântica)
- `src/components/landing/SocialProofToast.tsx` (auto-hide + observer)
- `src/components/landing/WhatsAppButton.tsx` (focus-visible)
- `src/components/landing/Footer.tsx` (focus-visible nos links)
- `src/routes/index.tsx` (meta tags completas, sentinel/fade antes do footer)
- `src/routes/__root.tsx` (link favicon, lang)
- `src/styles.css` (dots no mobile)
- `public/favicon.svg` (novo)
- `public/og-image.jpg` (novo, via imagegen)
