import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "Davy is the coolest polar bear on Linea and he loves to do nothing. Perma Polar Bears, DN Brotatoes, taterz shop, raffles and the Potato Palace community.",
};

const ART = {
  cave: "/media/images/2bd3a1d4fbde9a85.png",
  explorer: "/media/images/d51d453196d35809.png",
  floe: "/media/images/0b1161c62c6f4d02.png",
  field: "/media/images/a4a6da894c2ec0d1.png",
  check: "/media/images/9e7e679397a98150.png",
  roadBtn: "/media/images/730af53b5222fc58.png",
  buyHere: "/media/images/627bbd1f8e4edf0a.png",
  wall: "/media/images/344f2f56d0911acc.png",
};

const SIGNS: { src: string; alt: string; href: string; internal?: boolean }[] = [
  { src: "/media/images/7628f131061b94b8.png", alt: "Exponent wallet checker", href: SITE.exponentChecker },
  { src: "/media/images/a1521ffdc946ef3d.png", alt: "Buy PPB", href: SITE.element.permapolarbears },
  { src: "/media/images/781ec0de70ef74c1.png", alt: "Buy a Brotato", href: SITE.element.dnbrotatoes },
  { src: "/media/images/2f1bdd22f9634c1c.png", alt: "Farm Brotatoes", href: "/farm", internal: true },
  { src: "/media/images/98196a9bbdb0d93b.png", alt: "Taterz shop", href: "/shop", internal: true },
  { src: "/media/images/62c56c8919703d6b.png", alt: "Buy raffle ticket", href: "/raffleticket", internal: true },
];

const ROADMAP: { phase: number; label: string; done: boolean }[] = [
  { phase: 1, label: "Website", done: true },
  { phase: 2, label: "Telegram", done: true },
  { phase: 3, label: "Wallet checker", done: true },
  { phase: 4, label: "Freemint", done: true },
  { phase: 5, label: "PPB Mint", done: true },
  { phase: 6, label: "Taterz shop", done: true },
  { phase: 7, label: "Staking", done: true },
  { phase: 8, label: "Raffles", done: true },
  ...[9, 10, 11, 12, 13, 14].map((p) => ({ phase: p, label: "[redacted]", done: false })),
];

export default function HomePage() {
  return (
    <>
      {/* Hero: ice cave scene + comic headline */}
      <section className="border-b-2 border-ink">
        <div className="relative aspect-[16/10] w-full md:aspect-[3/1]">
          <Image
            src={ART.cave}
            alt="Davy the polar bear at his ice cave"
            fill
            className="object-cover object-[70%_center] md:object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-start p-4 pt-8 md:items-center md:p-14">
            <div className="card-comic max-w-[64%] -rotate-1 bg-cream/95 p-4 md:max-w-lg md:p-8">
              <h1 className="font-display text-xl leading-[1.1] md:text-5xl">The hero Linea never knew it needed!</h1>
              <p className="mt-3 font-display text-[11px] leading-snug md:mt-5 md:text-lg">
                Davy is the coolest polar bear on Linea that loves to do nothing.
              </p>
              <p className="mt-1.5 font-display text-[11px] leading-snug md:mt-2 md:text-lg">
                It&apos;s written in the prophecy that he will lead Linea to the promise land...
              </p>
              <p className="mt-2 font-display text-sm text-ice-deep md:mt-3 md:text-xl">Davy also loves potatoes!</p>
            </div>
          </div>
        </div>

        {/* The six icy sign buttons */}
        <div className="bg-cream py-10 md:py-12">
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 px-5 md:grid-cols-3 md:gap-6">
            {SIGNS.map((s) =>
              s.internal ? (
                <Link key={s.src} href={s.href} className="transition-transform duration-100 hover:-translate-y-1">
                  <Image src={s.src} alt={s.alt} width={640} height={360} className="h-auto w-full" sizes="(max-width: 768px) 45vw, 380px" />
                </Link>
              ) : (
                <a
                  key={s.src}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-100 hover:-translate-y-1"
                >
                  <Image src={s.src} alt={s.alt} width={640} height={360} className="h-auto w-full" sizes="(max-width: 768px) 45vw, 380px" />
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* Movement: bear explorer scene + crossed-out joke copy */}
      <section className="border-b-2 border-ink">
        <div className="relative">
          <div className="relative aspect-[16/10] w-full md:aspect-[3/1]">
            <Image
              src={ART.explorer}
              alt="Davy the explorer with a potato and staff"
              fill
              className="object-cover object-[15%_center] md:object-center"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 flex items-start justify-end p-4 pt-6 md:items-center md:p-14">
            <div className="card-comic max-w-[64%] rotate-1 bg-cream/95 p-4 md:max-w-md md:p-7">
              <h2 className="font-display text-lg leading-tight md:text-4xl">Davy&apos;s creating a movement</h2>
              <p className="mt-3 font-display text-xs leading-relaxed md:mt-4 md:text-2xl">
                Bring back the{" "}
                <span className="text-ink/40 line-through decoration-[3px] decoration-ink/70">vibes</span>{" "}
                <span className="inline-block -rotate-2 text-ice-deep">chillz</span> to Linea
              </p>
              <p className="mt-2 font-display text-xs leading-relaxed md:text-2xl">
                There will be{" "}
                <span className="text-ink/40 line-through decoration-[3px] decoration-ink/70">something</span>{" "}
                <span className="inline-block -rotate-2 text-ice-deep">potatoes</span> for everyone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Takeover: bear on ice floe + copy */}
      <section className="border-b-2 border-ink">
        <div className="relative">
          <div className="relative aspect-[16/10] w-full md:aspect-[3/1]">
            <Image
              src={ART.floe}
              alt="Davy doing nothing on an ice floe with his potatoes"
              fill
              className="object-cover object-[75%_center] md:object-center"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 flex items-start p-4 pt-6 md:items-center md:p-14">
            <div className="card-comic max-w-[64%] -rotate-1 bg-cream/95 p-4 md:max-w-lg md:p-7">
              <h2 className="font-display text-base leading-snug md:text-3xl">
                Davy&apos;s not promising anything, but he won&apos;t stop until he takes over the internet
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Snow field + Buy here */}
      <section className="border-b-2 border-ink">
        <div className="relative aspect-[16/7] w-full md:aspect-[21/9]">
          <Image src={ART.field} alt="Davy's snowy farm with the igloo" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-x-0 bottom-5 flex justify-center px-4 md:bottom-10">
            <a
              href={SITE.element.permapolarbears}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-52 -rotate-2 transition-transform duration-100 hover:rotate-0 md:w-72"
            >
              <Image src={ART.buyHere} alt="Buy here" width={640} height={360} className="h-auto w-full drop-shadow-xl" />
            </a>
          </div>
        </div>
      </section>

      {/* Roadmap: compact stacked vertical list */}
      <section className="border-b-2 border-ink bg-ice/30">
        <div className="mx-auto max-w-xl px-5 py-8 md:py-10">
          <h2 className="text-center font-display text-2xl md:text-4xl">Davy&apos;s roadmap</h2>
          <div className="mt-3 space-y-0.5 md:mt-4 md:space-y-1">
            {ROADMAP.map((r) => (
              <div key={r.phase} className="grid grid-cols-[64px_1fr_36px] items-center gap-2 md:grid-cols-[86px_1fr_52px] md:gap-3">
                <span
                  className={`text-right font-display text-[11px] md:text-base ${
                    r.done ? "text-ice-deep underline decoration-2 underline-offset-4" : "text-ink/50"
                  }`}
                >
                  phase {r.phase}
                </span>
                <div className="relative mx-auto aspect-square h-12 w-12 md:h-14 md:w-14">
                  <Image src={ART.roadBtn} alt="" fill className="object-contain" sizes="64px" />
                  <span className="absolute inset-0 flex items-center justify-center px-1.5 text-center font-display text-[7px] uppercase leading-tight text-ink md:px-2 md:text-[10px]">
                    {r.label}
                  </span>
                </div>
                {r.done ? (
                  <div className="relative h-7 w-7 md:h-10 md:w-10">
                    <Image src={ART.check} alt="Complete" fill className="object-contain" sizes="40px" />
                  </div>
                ) : (
                  <span aria-hidden />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
