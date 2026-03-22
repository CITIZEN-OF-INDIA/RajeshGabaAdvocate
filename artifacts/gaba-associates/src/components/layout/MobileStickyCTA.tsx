import { Phone, MessageCircle } from "lucide-react";

export function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-background border-t border-border shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 flex">
      <a
        href="tel:0124-2310100"
        className="flex-1 flex flex-col items-center justify-center py-3 text-primary hover:bg-muted transition-colors active:bg-muted min-h-[56px]"
      >
        <Phone className="w-5 h-5 mb-1" />
        <span className="text-[10px] font-semibold uppercase tracking-wider">Call Now</span>
      </a>
      <div className="w-px bg-border my-2"></div>
      <a
        href="https://wa.me/919811004759"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 text-green-600 hover:bg-green-50 transition-colors active:bg-green-50 min-h-[56px]"
      >
        <MessageCircle className="w-5 h-5 mb-1" />
        <span className="text-[10px] font-semibold uppercase tracking-wider">WhatsApp</span>
      </a>
    </div>
  );
}
