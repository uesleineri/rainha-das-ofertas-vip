export function ScarcityBar() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-2xl px-5 py-6 sm:py-8">
      <div className="rounded-2xl border border-border bg-secondary/20 p-6 backdrop-blur-sm sm:p-8">
        <h3 className="text-center text-base font-semibold text-foreground sm:text-xl">
          Vagas gratuitas do grupo sendo preenchidas
        </h3>

        <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-secondary/40">
          <div
            className="h-full rounded-full bg-primary shadow-[0_0_12px_oklch(0.79_0.12_80/0.6)]"
            style={
              {
                animation: "progress-fill 1.6s ease-out forwards",
                "--progress-target": "79%",
              } as React.CSSProperties
            }
          />
        </div>

        <p className="mt-4 text-center text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
          Quando o grupo atinge o limite, novas entradas podem ser pausadas temporariamente.
        </p>
      </div>
    </section>
  );
}
