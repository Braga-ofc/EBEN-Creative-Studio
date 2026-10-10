"use client";

import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ConsultationButton } from "@/components/ui/ConsultationButton";
import { navigation } from "@/content/site";
import { pauseSmoothScroll, resumeSmoothScroll } from "@/lib/smooth-scroll";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    pauseSmoothScroll();
    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close(true);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (desktop.matches) close(false);
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      resumeSmoothScroll();
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 items-center justify-center text-ivory transition-colors hover:text-gold"
      >
        {open ? (
          <X aria-hidden="true" strokeWidth={1.5} className="size-6" />
        ) : (
          <Menu aria-hidden="true" strokeWidth={1.5} className="size-6" />
        )}
        <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
      </button>

      <div
        id={panelId}
        hidden={!open}
        data-lenis-prevent
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-ivory/15 bg-burgundy"
      >
        <nav
          aria-label="Seções da página"
          className="shell flex min-h-full flex-col justify-between gap-12 py-10"
        >
          <ul className="flex flex-col">
            {navigation.map((item, index) => (
              <li key={item.href} className="border-b border-ivory/15">
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={() => close(false)}
                  className="block py-5 type-h2 text-ivory transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ConsultationButton className="w-full" />
        </nav>
      </div>
    </div>
  );
}
