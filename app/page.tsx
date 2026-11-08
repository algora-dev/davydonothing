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
};

const SIGNS: { src: string; alt: string; href: string; internal?: boolean }[] = [
  { src: "/media/images/a1521ffdc946ef3d.png", alt: "Buy Perma Polar Bear", href: SITE.element.permapolarbears },
  { src: "/media/images/781ec0de70ef74c1.png", alt: "Buy DN Brotato", href: SITE.element.dnbrotatoes },
  { src: "/media/images/2f1bdd22f9634c1c.png", alt: "Farm DN Brotato", href: "/farm", internal: true },
];

export default function HomePage() {
  return (
    <>
      {/* Hero: ice cave scene + centered comic headline */}
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
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="card-comic max-w-[85%] -rotate-1 bg-cream/95 p-4 md:max-w-sm md:p-6">
              <h1 className="text-center font-display text-lg leading-[1.1] md:text-3xl">
                The hero Linea never knew it needed!
              </h1>
              <p className="mt-2 text-center font-display text-[10px] leading-snug md:mt-3 md:text-sm">
                Davy is the coolest polar bear on Linea that loves to do nothing.
              </p>
              <p className="mt-2 text-center font-display text-xs text-ice-deep md:text-base">
                Davy also loves potatoes!
              </p>
            </div>
          </div>
        </div>

        {/* The three icy sign buttons */}
        <div className="bg-cream py-8 md:py-10">
          <div className="mx-auto grid max-w-xs grid-cols-1 gap-3 px-5 md:max-w-3xl md:grid-cols-3 md:gap-6">
            {SIGNS.map((s) =>
              s.internal ? (
                <Link key={s.src} href={s.href} className="transition-transform duration-100 hover:-translate-y-1">
                  <Image src={s.src} alt={s.alt} width={640} height={360} className="h-auto w-full" sizes="(max-width: 768px) 320px, 380px" />
                </Link>
              ) : (
                <a
                  key={s.src}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-100 hover:-translate-y-1"
                >
                  <Image src={s.src} alt={s.alt} width={640} height={360} className="h-auto w-full" sizes="(max-width: 768px) 320px, 380px" />
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
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto flex w-full max-w-6xl justify-end px-5">
              <div className="card-comic max-w-[68%] rotate-1 bg-cream/95 p-4 md:max-w-sm md:p-6">
                <h2 className="font-display text-base leading-tight md:text-2xl">Davy&apos;s creating a movement</h2>
                <p className="mt-3 font-display text-[11px] leading-relaxed md:mt-4 md:text-lg">
                  Bring back the{" "}
                  <span className="text-ink/40 line-through decoration-[3px] decoration-ink/70">vibes</span>{" "}
                  <span className="inline-block -rotate-2 text-ice-deep">chillz</span> to Linea
                </p>
                <p className="mt-2 font-display text-[11px] leading-relaxed md:text-lg">
                  There will be{" "}
                  <span className="text-ink/40 line-through decoration-[3px] decoration-ink/70">something</span>{" "}
                  <span className="inline-block -rotate-2 text-ice-deep">potatoes</span> for everyone
                </p>
              </div>
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
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto flex w-full max-w-6xl justify-start px-5">
              <div className="card-comic max-w-[68%] -rotate-1 bg-cream/95 p-4 md:max-w-md md:p-6">
                <h2 className="font-display text-sm leading-snug md:text-2xl">
                  Davy&apos;s not promising anything, but he won&apos;t stop until he takes over the internet
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
