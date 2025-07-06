"use client";

import Image from "next/image";
import Link from "next/link";

export const Simple404 = () => {
  return (
    <div className="flex min-h-screen flex-col w-full items-center justify-center bg-white px-4">
      <div className="max-w-2xl text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-[#82d7a5] sm:text-6xl">
          Oops! We Can't Seem to Find That Page.
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          The page you're looking for might have been moved, deleted, or never
          existed.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-[#82d7a5] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#14B8A6]"
          >
            Go Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-[#82d7a5] px-6 py-3 text-base font-medium text-[#82d7a5] transition-colors hover:bg-gray-50"
          >
            Contact Support
          </Link>
        </div>
      </div>
      <div className="mt-12 w-full max-w-lg">
        <Image
          src="/404/looking.webp"
          alt="404 Illustration"
          width={800}
          height={600}
          className="w-full object-contain"
          priority
        />
      </div>
    </div>
  );
};
