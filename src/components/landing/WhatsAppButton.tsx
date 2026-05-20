import { WHATSAPP_URL } from "@/lib/constants";

interface Props {
  children: React.ReactNode;
  pulse?: boolean;
  className?: string;
}

export function WhatsAppButton({ children, pulse = false, className = "" }: Props) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex w-full items-center justify-center rounded-2xl bg-primary px-6 py-5 text-center text-base font-bold uppercase tracking-wide text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:scale-[1.02] hover:brightness-110 sm:text-lg ${
        pulse ? "animate-[pulse-soft_2.4s_ease-in-out_infinite]" : ""
      } ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
}
