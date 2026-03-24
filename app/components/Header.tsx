"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { label: "Home", href: "/home" },
  { label: "Units", href: "/units" },
  { label: "Traits", href: "/traits" },
  { label: "Items", href: "/items" },
  { label: "Tier List", href: "/tier-list" },
  { label: "Codes", href: "/codes" },
  { label: "Update Logs", href: "/update-logs" },
  { label: "Feedback", href: "/feedback" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-white/10 bg-zinc-950/60 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-3 px-4 py-4 sm:gap-4 sm:px-6 lg:px-8">
        <Image
          src="/celestial-odyssey-logo.svg"
          alt="Celestial Odyssey logo"
          width={72}
          height={72}
          priority
          className="h-16 w-16 rounded-2xl ring-1 ring-white/20 sm:h-[72px] sm:w-[72px]"
        />
        <p className="text-center text-2xl font-semibold tracking-wide text-zinc-100 sm:text-3xl">Celestial Odyssey</p>
        <nav className="flex w-full flex-wrap items-center justify-center gap-2">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 sm:text-base ${
                  isActive
                    ? "bg-sky-500/25 text-sky-200 ring-1 ring-sky-300/30"
                    : "text-zinc-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
