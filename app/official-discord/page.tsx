import Link from "next/link";

export default function OfficialDiscordPage() {
  return (
    <section className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 shadow-2xl shadow-black/30 sm:p-8">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Official Discord</h1>
      <p className="mt-4 text-zinc-300">
        Join the community Discord to follow updates, team builds, and event discussions.
      </p>
      <Link
        href="https://discord.com/"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex rounded-full bg-indigo-500/25 px-5 py-2.5 font-medium text-indigo-100 ring-1 ring-indigo-300/30 transition hover:bg-indigo-500/35"
      >
        Open Discord
      </Link>
    </section>
  );
}