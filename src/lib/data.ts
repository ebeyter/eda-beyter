export const bio =
  "Hi, I'm Eda. I'm starting my senior year at Saint Joseph French High School and swimming professionally for Fenerbahçe — I'll try pretty much any sport you put in front of me. Always excited for something new, and just as happy baking good food as eating it.";

export type OrbitItem = {
  id: string;
  label: string;
  color: string;
  iconType: "emoji" | "image";
  icon: string;
  arc: "inner" | "outer";
  angle: number;
  dialog: {
    tagline: string;
    bullets: string[];
  };
};

export const orbitItems: OrbitItem[] = [
  {
    id: "mfinue",
    label: "MFINUE",
    color: "var(--color-mauve)",
    iconType: "emoji",
    icon: "🌍",
    arc: "inner",
    angle: -60,
    dialog: {
      tagline: "Model UN is where I learned to keep a hundred moving parts calm at once.",
      bullets: [
        "Head of Logistics, Accommodation & Finance for MFINUE — matched delegates with host families, ran sponsors and on-site ops.",
        "Before that: Delegate & Guide (even represented Human Rights Watch in an ECOSOC committee), and before that, Admin on the organizing team.",
        "Also a delegate at SULTANI MFINUE, the French MUN conferences.",
      ],
    },
  },
  {
    id: "swimming",
    label: "Fenerbahçe SK",
    color: "var(--color-blue)",
    iconType: "image",
    icon: "/fenerbahce-logo.png",
    arc: "inner",
    angle: 0,
    dialog: {
      tagline: "Swimming's been my thing since I was little — early mornings, endless laps, still going.",
      bullets: [
        "Turkish Champion (Dec 2019) and Turkish National Championships Medalist (Dec 2023).",
        "Training 35+ hrs/week at the national level, full-time since Nov 2013.",
        "Also part of the Fenerbahçe Youth Club team since 2022.",
      ],
    },
  },
  {
    id: "saintjoseph",
    label: "Saint Joseph",
    color: "var(--color-pink)",
    iconType: "emoji",
    icon: "🎓",
    arc: "inner",
    angle: 60,
    dialog: {
      tagline: "School's more than classes for me — I hosted TEDx and lead the Honors Council this year.",
      bullets: [
        "Hosted and ran the whole show as TEDx Saint Joseph host.",
        "High Honors student and Student Council member — this year, Honors Council President.",
        "DELF B2 and DALF C1 certified in French.",
      ],
    },
  },
  {
    id: "entrepreneurship",
    label: "Entrepreneurship Club",
    color: "var(--color-peach)",
    iconType: "image",
    icon: "/entrepreneurship-logo.png",
    arc: "outer",
    angle: -90,
    dialog: {
      tagline: "President of the Saint Joseph Entrepreneurship Club since Sep 2024 — building things with people is my favorite kind of chaos.",
      bullets: [
        "Organizing SOMMET, our case-study competition: 15+ sponsorships (Carrefour, TEB) worth 300k+ TRY.",
        "Leading 35+ team members and 300+ participants.",
        "2x semi-finalist team lead, Gençbizz Start-Up Development Competition.",
      ],
    },
  },
  {
    id: "startups",
    label: "Start-up World",
    color: "var(--color-green)",
    iconType: "emoji",
    icon: "🌱",
    arc: "outer",
    angle: -30,
    dialog: {
      tagline: "I like being around people building things, on and off campus.",
      bullets: [
        "Founding Member & Community Specialist, forcreate. — helped grow Türkiye's next-gen high school entrepreneurship ecosystem (Jan 2024 — Jan 2025).",
        "Part of WorkupOnBoard, İş Bankası's high school entrepreneurship program.",
      ],
    },
  },
  {
    id: "economy",
    label: "Economics",
    color: "var(--color-yellow)",
    iconType: "emoji",
    icon: "📈",
    arc: "outer",
    angle: 30,
    dialog: {
      tagline: "I like keeping an eye on markets and how the economy actually works.",
      bullets: [
        "HSBC Insight Program — a first real look at investment banking and global finance.",
        "Genuinely enjoy following markets, not just for school.",
      ],
    },
  },
  {
    id: "lifestyle",
    label: "Healthy Living",
    color: "var(--color-red)",
    iconType: "emoji",
    icon: "🍽️",
    arc: "outer",
    angle: 90,
    dialog: {
      tagline: "Outside of everything else: I love to eat, and I'll play pretty much any sport you put in front of me.",
      bullets: [
        "Big on food — trying new places, new cuisines, cooking included.",
        "International volunteer with GSM — helped restore a medieval fortress in Montaigu-le-Blin, France, with volunteers from Italy, Belgium, and Spain (Aug 2025).",
        "Interests: sports, politics, world history, volunteering, drawing, cooking.",
      ],
    },
  },
];

export const contact = {
  email: "edabeyter5@gmail.com",
  location: "Istanbul, Turkey",
};

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
  {
    name: "Gmail",
    handle: contact.email,
    href: `mailto:${contact.email}`,
  },
];
