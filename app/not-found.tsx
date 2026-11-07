import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-24 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/media/images/8f556e5fe83c0607.png" alt="Davy Do Nothing logo" className="mb-8 h-32 object-contain" />
      <h1 className="font-display text-3xl md:text-4xl">Nothing here.</h1>
      <p className="mt-3 max-w-md text-base font-semibold text-ink/70">
        Davy found nothing, and honestly, he was never going to look that hard.
      </p>
      <Link href="/" className="btn-pill mt-8 bg-ink text-sm text-cream hover:bg-ice-deep">
        Back to home
      </Link>
    </section>
  );
}
