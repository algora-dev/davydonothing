import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ice/40">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/images/8f556e5fe83c0607.png" alt="Davy Do Nothing logo" className="h-10 w-10 object-contain" />
            <span className="font-display text-lg leading-none">Davy Do Nothing</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-2" aria-label="Footer">
            <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="btn-pill bg-white text-sm hover:bg-ice">
              Potato Palace Telegram
            </a>
            <a href={SITE.element.permapolarbears} target="_blank" rel="noopener noreferrer" className="btn-pill bg-white text-sm hover:bg-ice">
              Perma Polar Bears
            </a>
            <Link href="/shop" className="btn-pill bg-ink text-sm text-cream hover:bg-ice-deep">
              Taterz Shop
            </Link>
          </nav>
          <div className="flex items-center gap-4">
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
        </div>
        <p className="mt-10 text-center text-xs font-bold uppercase tracking-widest text-ink/60">Copyright © 2025 Davy Do Nothing</p>
      </div>
    </footer>
  );
}
