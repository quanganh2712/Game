import Link from "next/link";

export default function PlayRobloxPage() {
  return (
    <section className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 shadow-2xl shadow-black/30 sm:p-8">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Play on Roblox</h1>
      <p className="mt-4 text-zinc-300">
        Start your Celestial Odyssey run directly on Roblox and check this wiki while building your team.
      </p>
      <Link
        href="https://www.roblox.com/"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex rounded-full bg-sky-500/25 px-5 py-2.5 font-medium text-sky-100 ring-1 ring-sky-300/30 transition hover:bg-sky-500/35"
      >
        Open Roblox
      </Link>
    </section>
  );
}