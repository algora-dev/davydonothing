"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Farm", href: "/farm" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/images/8f556e5fe83c0607.png" alt="Davy Do Nothing" className="h-[60px] w-[60px] object-contain" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-sm font-extrabold uppercase tracking-wide transition-colors hover:bg-ice"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {SITE.socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.icon} alt={`${s.name} icon`} className="h-5 w-5 object-contain" />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 rounded bg-ink transition-transform ${open ? "translate-y-[4px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 rounded bg-ink transition-transform ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t-2 border-ink bg-cream px-5 py-4 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-full px-3.5 py-2 text-sm font-extrabold uppercase tracking-wide hover:bg-ice"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-5">
              {SITE.socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="opacity-70">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.icon} alt={`${s.name} icon`} className="h-5 w-5 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
