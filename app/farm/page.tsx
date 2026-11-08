import type { Metadata } from "next";
import { SITE, VIDEOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Farm Brotatoes",
  description: "Stake your DN Brotatoes at Davy's farm on Linea. Davy does the work, you do nothing.",
};

const STEPS = [
  {
    n: 1,
    title: "Get a Brotato",
    body: "Pick up a DN Brotato on the Element marketplace.",
    href: SITE.element.dnbrotatoes,
    cta: "Marketplace",
  },
  {
    n: 2,
    title: "Stake at the farm",
    body: "Stake your Brotatoes at the farm app and let them grow.",
    href: SITE.farming,
    cta: "Stake here",
  },
  {
    n: 3,
    title: "Do nothing",
    body: "That's it. Davy tends the field and the rewards grow.",
    href: SITE.telegram,
    cta: "Potato Palace",
  },
];

export default function FarmPage() {
  return (
    <>
      <section className="border-b-2 border-ink bg-ice/30">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="inline-block -rotate-2 rounded-full border-2 border-ink bg-ice px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest">
              DN Brotatoes staking
            </p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl">Farm Brotatoes</h1>
            <p className="mt-5 text-base font-semibold leading-relaxed text-ink/80 md:text-lg">
              Stake your DN Brotatoes at the farm and let them grow. Davy does the work, you do nothing.
              That&apos;s the whole point.
            </p>
            <p className="mt-3 text-base font-semibold leading-relaxed text-ink/80 md:text-lg">
              There&apos;s no limit to how many Brotatoes you can stake. The more you farm, the more rewards
              you&apos;re eligible for.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={SITE.farming}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-ink text-sm text-cream hover:bg-ice-deep"
              >
                Stake here
              </a>
              <a
                href={SITE.element.dnbrotatoes}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-white text-sm hover:bg-ice"
              >
                Get a Brotato
              </a>
            </div>
          </div>
          <div className="card-comic mx-auto w-full max-w-sm bg-white p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/images/165439103326331f.gif" alt="A dancing DN Brotato" className="h-auto w-full" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="border-b-2 border-ink">
        <div className="mx-auto max-w-3xl px-5 py-14 md:py-20">
          <h2 className="text-center font-display text-2xl md:text-4xl">Tutorial on how to farm DN Brotatoes</h2>
          <div className="card-comic mt-8 overflow-hidden">
            <video className="aspect-video w-full bg-black object-contain" src={VIDEOS.farm} controls playsInline />
          </div>
        </div>
      </section>

      <section className="bg-ice/30">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2 className="text-center font-display text-2xl md:text-4xl">Getting started</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <a
                key={s.n}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-comic block bg-white p-6 transition-transform duration-100 hover:-translate-y-1"
              >
                <h3 className="font-display text-lg md:text-xl">
                  <span className="text-ice-deep">{s.n}.</span> {s.title}
                </h3>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-ink/70">{s.body}</p>
                <span className="mt-4 inline-block font-display text-sm text-ice-deep underline decoration-2 underline-offset-4">
                  {s.cta} &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
