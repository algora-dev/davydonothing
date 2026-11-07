import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "Davy is the coolest polar bear on Linea and he loves to do nothing. Perma Polar Bears, DN Brotatoes, taterz shop, raffles and the Potato Palace community.",
};

const ROADMAP: { phase: number; label: string; status: "done" | "pending" | "redacted" }[] = [
  { phase: 1, label: "Website", status: "done" },
  { phase: 2, label: "Telegram", status: "done" },
  { phase: 3, label: "Wallet checker", status: "done" },
  { phase: 4, label: "Freemint + PPB Mint", status: "done" },
  { phase: 5, label: "Taterz shop", status: "done" },
  { phase: 6, label: "[redacted]", status: "redacted" },
  { phase: 7, label: "Staking + Raffles", status: "pending" },
  { phase: 8, label: "[redacted]", status: "redacted" },
  { phase: 9, label: "[redacted]", status: "redacted" },
  { phase: 10, label: "[redacted]", status: "redacted" },
  { phase: 11, label: "[redacted]", status: "redacted" },
  { phase: 12, label: "[redacted]", status: "redacted" },
  { phase: 13, label: "[redacted]", status: "redacted" },
  { phase: 14, label: "[redacted]", status: "redacted" },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b-2 border-ink">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-4 inline-block -rotate-2 rounded-full border-2 border-ink bg-ice px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest">
              On Linea
            </p>
            <h1 className="font-display text-4xl leading-[1.05] md:text-6xl">
              The hero Linea never knew it needed!
            </h1>
            <div className="mt-6 space-y-3 text-base font-semibold leading-relaxed text-ink/80 md:text-lg">
              <p>Davy is the coolest polar bear on Linea, and he loves to do nothing.</p>
              <p>
                It&apos;s written in the prophecy that he will lead Linea to the promise land. Davy also loves
                potatoes!
              </p>
              <p>Davy&apos;s not promising anything, but he won&apos;t stop until he takes over the internet.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="btn-pill bg-ink text-sm text-cream hover:bg-ice-deep">
                Join the Potato Palace
              </a>
              <a href={SITE.element.permapolarbears} target="_blank" rel="noopener noreferrer" className="btn-pill bg-white text-sm hover:bg-ice">
                Get a Polar Bear
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-square">
              <Image src="/media/images/0c7eeca179d357f5.png" alt="Davy the polar bear" fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-ink bg-ice/30">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-center font-display text-2xl md:text-3xl">Things Davy made</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/shop" className="btn-pill bg-white text-sm hover:bg-ice">Taterz Shop</Link>
            <Link href="/farm" className="btn-pill bg-white text-sm hover:bg-ice">Farm Brotatoes</Link>
            <Link href="/raffleticket" className="btn-pill bg-white text-sm hover:bg-ice">Raffle Tickets</Link>
            <Link href="/pwof" className="btn-pill bg-white text-sm hover:bg-ice">Wall of Fame</Link>
            <a href={SITE.element.dnbrotatoes} target="_blank" rel="noopener noreferrer" className="btn-pill bg-white text-sm hover:bg-ice">Get a Brotato</a>
            <a href={SITE.telegramChat} target="_blank" rel="noopener noreferrer" className="btn-pill bg-white text-sm hover:bg-ice">Telegram Chat</a>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-ink">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
          <h2 className="text-center font-display text-2xl md:text-3xl">Trait chart</h2>
          <div className="card-comic mt-8 bg-white p-4">
            <Image src="/media/images/4f95aab4b15b61bf.png" alt="Davy trait chart" width={1200} height={900} className="h-auto w-full" sizes="100vw" />
          </div>
        </div>
      </section>

      <section className="border-b-2 border-ink bg-ice/30">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
          <h2 className="text-center font-display text-2xl md:text-3xl">Davy&apos;s roadmap</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ROADMAP.map((r) => (
              <div key={r.phase} className={`card-comic flex items-center gap-4 px-5 py-4 ${r.status === "redacted" ? "opacity-60" : ""}`}>
                <span className="font-display text-lg text-ice-deep">P{r.phase}</span>
                {r.status === "done" && (
                  <>
                    <span className="flex-1 text-sm font-extrabold uppercase tracking-wide">{r.label}</span>
                    <span aria-label="complete" className="text-lg">✅</span>
                  </>
                )}
                {r.status === "pending" && (
                  <>
                    <span className="flex-1 text-sm font-extrabold uppercase tracking-wide">{r.label}</span>
                    <span aria-label="coming" className="text-lg">🥔</span>
                  </>
                )}
                {r.status === "redacted" && <span className="flex-1 font-mono text-sm font-bold text-ink/50">{r.label}</span>}
              </div>
            ))}
          </div>
          <p className="mt-10 text-center font-display text-xl md:text-2xl">
            Davy has a few things planned to take over web3... are you in?
          </p>
        </div>
      </section>
    </>
  );
}
