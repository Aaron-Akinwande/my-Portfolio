import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-7 text-center">
      <div>
        <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">
          404
        </p>
        <h1 className="text-light font-bold text-4xl md:text-5xl mb-4">
          Page not found
        </h1>
        <p className="text-tertiary mb-8">
          That page doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-flex px-8 py-3 bg-linear-to-r from-primary to-primary-hover text-dark rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
