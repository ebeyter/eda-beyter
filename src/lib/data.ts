export const about = {
  greeting: "Hi, I'm Eda.",
  lines: [
    "From Saint Joseph.",
    "Professional swimmer.",
    "Eager to learn new things.",
    "Love to eat and travel.",
  ],
  interests: ["Sports", "Politics", "World History", "Volunteering", "Drawing", "Cooking"],
  languages: [
    { code: "TR", level: "Native" },
    { code: "EN", level: "Fluent" },
    { code: "FR", level: "Fluent" },
  ],
};

export const nowCards = [
  {
    org: "MFINUE — Saint Joseph Model United Nations",
    when: "Apr 2025 — Present",
    role: "Head of Logistics, Accommodation & Finance",
    bullets: [
      "Running logistics, accommodation, and budgeting for 300+ international delegates.",
      "Handling financials, housing, and on-site operations with a cross-functional team.",
    ],
  },
  {
    org: "Saint Joseph Entrepreneurship Club",
    when: "Sep 2024 — Present",
    role: "President — previously VP & Head of Projects",
    bullets: [
      "Running SOMMET, the club's flagship case-study competition, with a 35+ person team.",
      "Managing sponsor relationships, including Carrefour and TEB.",
    ],
    teaser: {
      strong: "Currently building something new",
      rest: "a startup project in progress. More soon.",
    },
  },
];

export type OrbitItem = {
  id: string;
  label: string;
  color: string;
  emoji: string;
  ring: 1 | 2;
  angle: number;
  dialog: {
    tagline: string;
    bullets: string[];
  };
};

export const orbitItems: OrbitItem[] = [
  {
    id: "swimming",
    label: "Swimming",
    color: "var(--color-sky)",
    emoji: "🏊‍♀️",
    ring: 1,
    angle: 0,
    dialog: {
      tagline: "Twelve years in the pool — where the pacing habit started.",
      bullets: [
        "Turkish Swimming Champion, Fenerbahçe Sports Club — Dec 2019",
        "Turkish Championship Medalist, Swimming — Dec 2023",
        "35+ hrs/week training, still ongoing",
      ],
    },
  },
  {
    id: "economy",
    label: "Economy",
    color: "var(--color-green)",
    emoji: "📈",
    ring: 1,
    angle: 180,
    dialog: {
      tagline: "Into markets and how money moves — an active investor on the side.",
      bullets: [
        "Investing in Turkish public equities across Financial Services, Energy, Retail, and Industrials.",
        "HSBC Insight Program — investment banking, markets & global finance.",
      ],
    },
  },
  {
    id: "mun",
    label: "Model UN",
    color: "var(--color-mauve)",
    emoji: "🌍",
    ring: 2,
    angle: 90,
    dialog: {
      tagline: "MFINUE — Saint Joseph Model United Nations, Head of Logistics.",
      bullets: [
        "Running logistics, accommodation, and budgeting for 300+ international delegates.",
        "Previously organizer, then delegate & guide; also delegate at SULTANI MFINUE.",
      ],
    },
  },
  {
    id: "building",
    label: "Entrepreneurship Club",
    color: "var(--color-peach)",
    emoji: "🚀",
    ring: 2,
    angle: 270,
    dialog: {
      tagline: "President of the Saint Joseph Entrepreneurship Club.",
      bullets: [
        "Running SOMMET, the club's flagship case-study competition, with a 35+ person team.",
        "Two-time semi-finalist & team lead, Gençbizz Start-Up Development Competition.",
        "Currently building something new — a startup project in progress. More soon.",
      ],
    },
  },
];

export const links = [
  {
    name: "LinkedIn",
    handle: "eda-beyter",
    href: "https://www.linkedin.com/in/eda-beyter-552a8326a/",
  },
  {
    name: "GitHub",
    handle: "ebeyter",
    href: "https://github.com/ebeyter",
  },
];

export const contact = {
  email: "edabeyter5@gmail.com",
  location: "Istanbul, Turkey",
};
