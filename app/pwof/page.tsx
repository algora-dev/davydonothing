import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wall of Fame",
  description: "The Potato Wall of Fame: legends of the Potato Palace community.",
};

export default function PwofPage() {
  return (
    <section className="border-b-2 border-ink">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <p className="text-center font-display text-xs tracking-[0.3em] text-ice-deep">PWOF</p>
        <h1 className="mt-2 text-center font-display text-3xl md:text-5xl">Potato Wall of Fame</h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-base font-semibold text-ink/70">
          Legends of the Potato Palace. Davy salutes you.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {SITE.pwof.map((person) => (
            <a
              key={person.name}
              href={person.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-comic group block overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-square bg-ice/30">
                <Image src={person.image} alt={person.name} fill className="object-contain p-4" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="flex items-center justify-between border-t-2 border-ink px-5 py-3.5">
                <span className="font-display text-base">{person.name}</span>
                <span className="text-xs font-extrabold uppercase tracking-widest text-ice-deep group-hover:underline">
                  Follow ↗
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="btn-pill bg-ink text-sm text-cream hover:bg-ice-deep">
            Join the Potato Palace
          </a>
        </div>
      </div>
    </section>
  );
}
