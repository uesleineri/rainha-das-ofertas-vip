import { WHATSAPP_URL } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

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
      className={`group relative inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-primary px-6 py-4 text-center text-[15px] font-bold uppercase tracking-wide text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:scale-[1.02] hover:brightness-110 sm:py-5 sm:text-base ${
        pulse ? "animate-[pulse-soft_2.4s_ease-in-out_infinite]" : ""
      } ${className}`}
    >
      <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={2.4} />
      <span className="relative z-10">{children}</span>
    </a>
  );
}
