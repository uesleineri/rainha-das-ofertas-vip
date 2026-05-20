# Rainha das Ofertas — Landing de Captação WhatsApp

## Objetivo
Página única, mobile-first, focada 100% em cliques para o grupo do WhatsApp. Estética premium feminina (dourado + azul quase preto + petróleo), sem rosa, sem timers falsos.

## Design System (src/styles.css)
Substituir tokens por paleta da marca em `oklch`:
- `--background`: #000511 (azul quase preto)
- `--foreground`: branco
- `--primary`: #eaba68 (dourado) / `--primary-foreground`: #000511
- `--secondary`: #3a5f6f (petróleo) / texto branco
- `--muted-foreground`: cinza claro
- `--border`: dourado com baixa opacidade
- Gradiente sutil de fundo: radial dourado leve + petróleo sobre #000511
- Textura discreta: pontos dourados muito sutis (SVG inline ou background-image)
- Tipografia: Playfair Display (logo/headline) + Inter (corpo), via Google Fonts em `__root.tsx`
- Cantos arredondados generosos (rounded-2xl), sombras suaves, brilho dourado em CTAs

## Estrutura de arquivos
- `src/routes/index.tsx` — monta as seções
- `src/components/landing/Hero.tsx`
- `src/components/landing/ScarcityBar.tsx`
- `src/components/landing/SocialProofToast.tsx` (notificação flutuante)
- `src/components/landing/Benefits.tsx`
- `src/components/landing/SecondaryCTA.tsx`
- `src/components/landing/Footer.tsx`
- `src/components/landing/WhatsAppButton.tsx` (CTA reutilizável dourado com pulse)
- `src/lib/constants.ts` — `WHATSAPP_URL` como placeholder único para troca fácil
- `src/routes/privacidade.tsx` e `src/routes/termos.tsx` — placeholders simples

## Seções (conforme spec)
1. **Hero**: selo cápsula "👑 GRUPO VIP 100% GRATUITO" → logo "Rainha das Ofertas" com coroa → headline com destaques em dourado em "ofertas escondidas", "cupons reais", "WhatsApp" → subheadline → CTA dourado grande com pulse sutil → microcopy.
2. **Escassez**: título + barra de progresso dourada animada (preenche até ~78% no mount) + linha de aviso.
3. **Prova social flutuante**: toast canto inferior esquerdo (desktop) / inferior centro (mobile), rotaciona 10 nomes femininos a cada ~5s, fade in/out, fundo #000511, ícone dourado, não cobre CTA.
4. **Benefícios**: 5 cards em grid (1 col mobile, 2-3 cols desktop), fundo petróleo translúcido, borda dourada fina, ícones Lucide (Tag, ShoppingBag, Zap, Crown, ShieldCheck).
5. **Segunda CTA**: texto + botão dourado idêntico + microcopy.
6. **Rodapé**: marca, descrição, links legais (`/privacidade`, `/termos`), disclaimer em cinza claro.

## Detalhes técnicos
- Todos os CTAs usam `WHATSAPP_URL` de `constants.ts` (placeholder único)
- `target="_blank" rel="noopener"` nos links externos
- Animações via Tailwind (`animate-pulse` suave customizado, `animate-fade-in`) + keyframes em styles.css para o toast e barra
- SEO no `head()` do route: title "Rainha das Ofertas — Grupo VIP gratuito de ofertas no WhatsApp", meta description persuasiva, og tags, lang pt-BR
- H1 único na hero, alt texts, semântica (`<header>`, `<main>`, `<section>`, `<footer>`)
- Sem menu de navegação, sem formulário, sem backend

## Fora de escopo
- Sem Lovable Cloud (página estática, só links externos)
- Sem analytics/pixels (usuário pode adicionar depois)
- Sem páginas legais com conteúdo real — apenas placeholders editáveis