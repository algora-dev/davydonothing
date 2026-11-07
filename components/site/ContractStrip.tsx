"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function ContractStrip({ address = SITE.raffleContract, label = "Raffle ticket contract address" }: { address?: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="card-comic inline-flex max-w-full flex-wrap items-center justify-center gap-3 px-5 py-3">
      <span className="text-xs font-extrabold uppercase tracking-widest text-ink/60">{label}</span>
      <code className="break-all text-sm font-bold text-ice-deep">{address}</code>
      <button
        type="button"
        onClick={copy}
        className="text-xs font-extrabold uppercase tracking-widest text-ink/60 transition-colors hover:text-ice-deep"
      >
        {copied ? "Copied ✓" : "Copy"}
      </button>
    </div>
  );
}
