import Link from "next/link";

const wikiCards = [
  {
    href: "/units",
    icon: "👥",
    title: "Units",
    description: "Browse unit stats, abilities, and upgrade paths.",
  },
  {
    href: "/traits",
    icon: "✨",
    title: "Traits",
    description: "Discover trait synergies and best combinations.",
  },
  {
    href: "/items",
    icon: "🎯",
    title: "Items",
    description: "Learn item effects, rarity, and usage tips.",
  },
  {
    href: "/tier-list",
    icon: "🏆",
    title: "Tier List",
    description: "Check the latest meta rankings.",
  },
  {
    href: "/codes",
    icon: "🎁",
    title: "Codes",
    description: "Find all available redemption codes.",
  },
];

const communityCards = [
  {
    href: "/play-roblox",
    icon: "🎮",
    title: "Play on Roblox",
    description: "Quick link and tips to jump in-game.",
  },
  {
    href: "/official-discord",
    icon: "💬",
    title: "Official Discord",
    description: "Join the community and get the latest updates.",
  },
  {
    href: "/feedback",
    icon: "🗨️",
    title: "Feedback",
    description: "Share suggestions to improve this wiki.",
  },
];

type LinkCard = {
  href: string;
  icon: string;
  title: string;
  description: string;
};

function CardGrid({ cards }: { cards: LinkCard[] }) {
  return (
    <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {cards.map((card) => (
        <Link
          key={card.href}
          href={card.href}
          className="group rounded-2xl border border-white/10 bg-linear-to-br from-zinc-900/80 to-black/60 p-5 shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-0.5 hover:border-sky-300/40 hover:shadow-sky-900/20"
        >
          <p className="text-2xl">{card.icon}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white/95">{card.title}</h3>
          <p className="mt-2 text-zinc-300">{card.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/75 p-6 shadow-2xl shadow-black/30 sm:p-8 lg:p-10">
      
        <div className="relative">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">🎮 Welcome to Celestial Odyssey Wiki!</h1>
          <p className="mt-4 max-w-6xl text-lg leading-8 text-zinc-300">
          Your ultimate source for all things Celestial Odyssey. Whether you are a seasoned player or just starting your
          journey, explore guides to discover powerful unit combinations, optimal trait synergies, and current meta strategies.
          </p>
          <CardGrid cards={wikiCards} />
        </div>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/75 p-6 shadow-2xl shadow-black/30 sm:p-8 lg:p-10">

        <div className="relative">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">🤝 Join Community</h2>
          <p className="mt-4 max-w-6xl text-lg leading-8 text-zinc-300">
          Connect with other players, follow new updates, and help the wiki grow with your experience.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {communityCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-2xl border border-white/10 bg-linear-to-br from-zinc-900/80 to-black/60 p-5 shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-300/40 hover:shadow-emerald-900/20"
              >
                <p className="text-2xl">{card.icon}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white/95">{card.title}</h3>
                <p className="mt-2 text-zinc-300">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
