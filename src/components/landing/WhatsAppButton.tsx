import { WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppIcon } from "./WhatsAppIcon";

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
      className={`group relative inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-primary px-5 py-3.5 text-center text-[13.5px] font-bold uppercase leading-tight tracking-[0.04em] text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:scale-[1.02] hover:brightness-110 sm:px-6 sm:py-4 sm:text-[15px] ${
        pulse ? "animate-[pulse-soft_2.4s_ease-in-out_infinite]" : ""
      } ${className}`}
    >
      <WhatsAppIcon className="h-[18px] w-[18px] shrink-0 sm:h-5 sm:w-5" />
      <span className="relative z-10 text-balance">{children}</span>
    </a>
  );
}
