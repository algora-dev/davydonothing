import type { Metadata } from "next";
import Image from "next/image";
import ContractStrip from "@/components/site/ContractStrip";
import { SITE, VIDEOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Farm",
  description: "How to farm DN Brotatoes with Davy Do Nothing.",
};

export default function FarmPage() {
  return (
    <section className="border-b-2 border-ink">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <h1 className="text-center font-display text-3xl md:text-5xl">Farm</h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-base font-semibold text-ink/70">
          Tutorial on how to farm DN Brotatoes.
        </p>

        <div className="card-comic mt-10 overflow-hidden">
          <video className="aspect-video w-full bg-black object-contain" src={VIDEOS.farm} controls playsInline />
        </div>

        <div className="mt-12 flex flex-col items-center gap-8">
          <div className="relative h-36 w-48">
            <Image src="/media/images/8a9191cc2592686a.png" alt="Farm Brotatoes art" fill className="object-contain" sizes="200px" />
          </div>
          <a href={SITE.element.dnbrotatoes} target="_blank" rel="noopener noreferrer" className="btn-pill bg-ink text-sm text-cream hover:bg-ice-deep">
            Get a Brotato
          </a>
        </div>
      </div>
    </section>
  );
}
