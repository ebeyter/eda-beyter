export const roles = [
  "Head of Logistics, MFINUE",
  "President, Entrepreneurship Club",
  "Active Equity Investor",
  "Competitive Swimmer, Fenerbahçe SC",
];

export const stats = [
  { value: "4.0", label: "GPA" },
  { value: "35+", label: "hrs/week training" },
  { value: "300+", label: "delegates managed" },
  { value: "15+", label: "sponsors secured" },
  { value: "~25%", label: "portfolio return" },
  { value: "3", label: "languages" },
];

export const about = {
  lede: `Twelve years in a pool taught her pacing before anything else did. These days that
same discipline shows up in delegate budgets, sponsor decks, and a stock portfolio —
with a French Baccalaureate, a TEDx stage, and an Honours Council seat in between.
She reads a room the way she reads a race: watch the pace, don't panic, adjust mid-lap.`,
  interests: [
    "Sports",
    "Politics",
    "World History",
    "Volunteering",
    "Drawing",
    "Cooking",
  ],
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
      "Organizing logistics, accommodation, and budgeting for 300+ international delegates.",
      "Managing financials, housing arrangements, and on-site operations with a cross-functional team.",
    ],
  },
  {
    org: "Saint Joseph Entrepreneurship Club",
    when: "Sep 2024 — Present",
    role: "President — previously VP & Head of Projects",
    bullets: [
      "Running SOMMET, the club's flagship case-study competition, and a 35+ person team.",
      "Managing sponsor relationships worth 300k+ TRY, including Carrefour and TEB.",
    ],
    teaser: {
      strong: "Currently building something new",
      rest: "a startup project in progress. More soon.",
    },
  },
  {
    org: "Active Equity Investor",
    when: "Sep 2024 — Present",
    role: "Self-Employed",
    bullets: [
      "Investing in Turkish public equities across Financial Services, Energy, Retail, and Industrials.",
      "~25% return generated within the first 3 months.",
    ],
  },
];

export const achievements = [
  {
    what: "Turkish Swimming Champion",
    sub: "Fenerbahçe Sports Club",
    when: "Dec 2019",
  },
  {
    what: "Turkish Championship Medalist, Swimming",
    sub: "Fenerbahçe Sports Club",
    when: "Dec 2023",
  },
  {
    what: "Host & Presenter, TEDx Saint Joseph",
    sub: "Introduced speakers, ran the full event flow",
    when: "Feb–Mar 2025",
  },
  {
    what: "HSBC Insight Program",
    sub: "Investment banking, markets & global finance",
    when: "Jan 2025",
  },
  {
    what: "Gençbizz Start-Up Development Competition",
    sub: "Two-time semi-finalist, team lead",
    when: "2023 · 2024",
  },
  {
    what: "MFINUE — Organizer, then Delegate & Guide",
    sub: "Plus delegate at SULTANI MFINUE (French conferences)",
    when: "2023 – 2024",
  },
  {
    what: "Istanbul Saint Joseph French High School",
    sub: "French Baccalaureate & Turkish Diploma, STEM · GPA 4.0 · Honours Council",
    when: "Expected 2027",
  },
];

export type OrbitItem = {
  id: string;
  label: string;
  color: string;
  icon: "waves" | "trending-up" | "globe" | "rocket";
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
    color: "var(--color-pool-soft)",
    icon: "waves",
    ring: 1,
    angle: 0,
    dialog: {
      tagline: "Twelve years in the pool — where the pacing habit started.",
      bullets: [
        "Turkish Swimming Champion, Fenerbahçe Sports Club — Dec 2019",
        "Turkish Championship Medalist, Swimming, Fenerbahçe Sports Club — Dec 2023",
        "35+ hrs/week training, still ongoing",
      ],
    },
  },
  {
    id: "investing",
    label: "Investing",
    color: "var(--color-gold)",
    icon: "trending-up",
    ring: 1,
    angle: 180,
    dialog: {
      tagline: "Active Equity Investor, Self-Employed — Sep 2024 — Present.",
      bullets: [
        "Investing in Turkish public equities across Financial Services, Energy, Retail, and Industrials.",
        "~25% return generated within the first 3 months.",
      ],
    },
  },
  {
    id: "mun",
    label: "Model UN",
    color: "var(--color-pool)",
    icon: "globe",
    ring: 2,
    angle: 90,
    dialog: {
      tagline: "MFINUE — Saint Joseph Model United Nations, Head of Logistics, Accommodation & Finance — Apr 2025 — Present.",
      bullets: [
        "Organizing logistics, accommodation, and budgeting for 300+ international delegates.",
        "Managing financials, housing arrangements, and on-site operations with a cross-functional team.",
        "Previously Organizer, then Delegate & Guide (2023–2024); also delegate at SULTANI MFINUE.",
      ],
    },
  },
  {
    id: "building",
    label: "Building",
    color: "var(--color-coral)",
    icon: "rocket",
    ring: 2,
    angle: 270,
    dialog: {
      tagline: "Saint Joseph Entrepreneurship Club, President — Sep 2024 — Present.",
      bullets: [
        "Running SOMMET, the club's flagship case-study competition, and a 35+ person team.",
        "Managing sponsor relationships worth 300k+ TRY, including Carrefour and TEB.",
        "Two-time semi-finalist & team lead, Gençbizz Start-Up Development Competition (2023 · 2024).",
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
