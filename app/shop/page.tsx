import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop",
  description: "The Taterz shop. Sold out for now. To buy items, contact Davy in the Potato Palace Telegram.",
};

const ITEMS = [
  {
    name: "3,000,000 TATERZ",
    image: "/media/images/881fca98c42ca7a6.png",
    href: SITE.element.ppb16,
  },
  {
    name: "1,000,000 TATERZ",
    image: "/media/images/572ad035e4fd7e56.png",
    href: SITE.element.img55,
  },
];

export default function ShopPage() {
  return (
    <section className="border-b-2 border-ink">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <h1 className="text-center font-display text-3xl md:text-5xl">Taterz Shop</h1>

        <div className="mx-auto mt-6 w-fit -rotate-1 rounded-2xl border-2 border-ink bg-[#ff6b5e] px-6 py-3 shadow-[4px_4px_0_#171310]">
          <p className="font-display text-xl text-cream md:text-2xl">SOLD OUT</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-comic group block overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-square bg-ice/30">
                <Image src={item.image} alt={item.name} fill className="object-contain p-6" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="flex items-center justify-between border-t-2 border-ink px-5 py-3.5">
                <span className="font-display text-base">{item.name}</span>
                <span className="text-xs font-extrabold uppercase tracking-widest text-ice-deep group-hover:underline">View ↗</span>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-12 text-center text-base font-semibold text-ink/80">
          To buy items, contact Davy in the{" "}
          <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="text-ice-deep underline decoration-2 underline-offset-4">
            Potato Palace Telegram
          </a>
          .
        </p>
      </div>
    </section>
  );
}
