import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Aictum",
  description: "The page you are looking for does not exist. Explore our AI, ML, and Blockchain services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10] px-4">
      <div className="text-center">
        <h1 className="mb-4 text-9xl font-bold text-[#AE69DF]">404</h1>
        <h2 className="mb-4 text-3xl font-semibold text-white">Page Not Found</h2>
        <p className="mb-8 text-lg text-gray-300">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/">
            <button className="rounded-lg bg-gradient-to-r from-[#4d0e75] to-[#7739a7] px-8 py-3.5 font-semibold text-white transition-opacity duration-300 hover:opacity-90">
              Go Home
            </button>
          </Link>
          <Link href="/all-service">
            <button className="rounded-lg border-2 border-[#8a44a6] bg-transparent px-8 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-[#c9b4ff]/10">
              View Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
