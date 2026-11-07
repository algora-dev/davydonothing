import type { Metadata } from "next";
import Image from "next/image";
import ContractStrip from "@/components/site/ContractStrip";
import { VIDEOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Raffle Ticket",
  description: "How to buy a Davy Do Nothing raffle ticket with taterz.",
};

export default function RaffleTicketPage() {
  return (
    <section className="border-b-2 border-ink">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <h1 className="text-center font-display text-3xl md:text-5xl">Raffle Ticket</h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-base font-semibold text-ink/70">
          Tutorial on how to buy a raffle ticket with taterz.
        </p>

        <div className="card-comic mt-10 overflow-hidden">
          <video className="aspect-video w-full bg-black object-contain" src={VIDEOS.raffle} controls playsInline />
        </div>

        <div className="mt-10 flex justify-center">
          <ContractStrip />
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative h-32 w-40 opacity-90">
            <Image src="/media/images/d4fed6ead8a18252.png" alt="Buy raffle ticket art" fill className="object-contain" sizes="160px" />
          </div>
        </div>
      </div>
    </section>
  );
}
