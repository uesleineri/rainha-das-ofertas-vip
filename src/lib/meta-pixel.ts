declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackLead(buttonName: string) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  window.fbq("track", "Lead", {
    content_name: buttonName,
    content_category: "Landing Page CTA",
    button_text: buttonName,
  });
}
