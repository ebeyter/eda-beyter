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
    org: "MFINUE",
    when: "Dec 2024 — Apr 2026",
    role: "Head of Logistics, Accommodation & Finance",
    bullets: [
      "300+ delegates, one conference, countless moving pieces.",
      "Matched international delegates with host families, coordinated sponsors and on-site operations, and helped bring months of planning to life.",
    ],
  },
  {
    org: "Saint Joseph Entrepreneurship Club",
    when: "Sep 2024 — Present",
    role: "President — previously VP & Head of Projects",
    bullets: [
      "Organizing SOMMET, the club's case-study competition: 15+ sponsorships (Carrefour, TEB) worth 300k+ TRY.",
      "Leading 35+ team members and 300+ participants.",
    ],
  },
];

export const achievements = [
  {
    emoji: "🏆",
    what: "Turkish Champion",
    blurb: "National title in swimming with Fenerbahçe SK.",
    when: "Dec 2019",
  },
  {
    emoji: "🥈",
    what: "Championship Medalist",
    blurb: "Medaled again at the Turkish National Championships.",
    when: "Dec 2023",
  },
  {
    emoji: "🎓",
    what: "High Honors & Honors Council",
    blurb: "High Honors student and Honors Council member at Saint Joseph.",
    when: "2022 — 2027",
  },
  {
    emoji: "🗣️",
    what: "DELF B2 & DALF C1",
    blurb: "French language certifications from France Éducation international.",
    when: "2025 · 2026",
  },
  {
    emoji: "🌱",
    what: "Founding Member, forcreate.",
    blurb: "Community Specialist — helped grow Türkiye's next-gen high school entrepreneurship ecosystem.",
    when: "Jan 2024 — Jan 2025",
  },
  {
    emoji: "🏰",
    what: "Restoration Workcamp",
    blurb: "International volunteer with GSM — helped restore a medieval fortress in Montaigu-le-Blin, France, alongside volunteers from Italy, Belgium, and Spain.",
    when: "Aug 2025",
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
      tagline: "Professional swimmer at Fenerbahçe SK since Nov 2013 — early mornings, endless laps.",
      bullets: [
        "Turkish Champion — Dec 2019",
        "Turkish National Championships Medalist — Dec 2023",
        "35+ hrs/week training, still going",
      ],
    },
  },
  {
    id: "volunteering",
    label: "Volunteering",
    color: "var(--color-green)",
    emoji: "🤝",
    ring: 1,
    angle: 180,
    dialog: {
      tagline: "Community-building, on and off campus.",
      bullets: [
        "Founding Member & Community Specialist, forcreate. — grew Türkiye's next-gen high school entrepreneurship ecosystem (Jan 2024 — Jan 2025).",
        "International volunteer with GSM — restored a medieval fortress in Montaigu-le-Blin, France, with volunteers from Italy, Belgium, and Spain (Aug 2025).",
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
      tagline: "MFINUE — Head of Logistics, Accommodation & Finance.",
      bullets: [
        "Matched international delegates with host families, coordinated sponsors and on-site operations.",
        "Previously Delegate & Guide — represented Human Rights Watch in the ECOSOC committee; before that, Admin on the organizing team.",
        "Also a delegate at SULTANI MFINUE (French MUN conferences).",
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
      tagline: "President of the Saint Joseph Entrepreneurship Club, since Sep 2024.",
      bullets: [
        "Organizing SOMMET: 15+ sponsorships (Carrefour, TEB) worth 300k+ TRY.",
        "Leading 35+ team members and 300+ participants.",
        "2x semi-finalist team lead, Gençbizz Start-Up Development Competition.",
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
