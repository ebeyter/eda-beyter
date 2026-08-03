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
    body: string;
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
    angle: 0,
    dialog: {
      body: "Model UN is where I learned to keep a hundred moving parts calm at once. I'm Head of Logistics, Accommodation & Finance for MFINUE — matching delegates with host families, running sponsors, and keeping on-site operations together. Before that I was Delegate & Guide (I even got to represent Human Rights Watch in an ECOSOC committee), and before that, Admin on the organizing team. I've also been a delegate at SULTANI MFINUE, the French MUN conferences.",
    },
  },
  {
    id: "swimming",
    label: "Fenerbahçe SK",
    color: "var(--color-blue)",
    iconType: "image",
    icon: "/fenerbahce-logo.png",
    arc: "inner",
    angle: 120,
    dialog: {
      body: "Swimming's been my thing since I was little — early mornings, endless laps, still going. I'm a Turkish Champion (Dec 2019) and a Turkish National Championships medalist (Dec 2023), training 35+ hours a week at the national level, full-time since Nov 2013. I'm also part of the Fenerbahçe Youth Club team, and have been since 2022.",
    },
  },
  {
    id: "saintjoseph",
    label: "Saint Joseph",
    color: "var(--color-pink)",
    iconType: "emoji",
    icon: "🎓",
    arc: "inner",
    angle: 240,
    dialog: {
      body: "School's more than just classes for me. I hosted TEDx Saint Joseph and ran the whole show, and this year I'm Honors Council President — I'm also a High Honors student and Student Council member. On top of that, I'm DELF B2 and DALF C1 certified in French.",
    },
  },
  {
    id: "entrepreneurship",
    label: "Entrepreneurship Club",
    color: "var(--color-peach)",
    iconType: "image",
    icon: "/entrepreneurship-logo.png",
    arc: "outer",
    angle: 45,
    dialog: {
      body: "I've been President of the Saint Joseph Entrepreneurship Club since Sep 2024, and building things with people is honestly my favorite kind of chaos. I organize SOMMET, our case-study competition — that's 15+ sponsorships (Carrefour, TEB) worth 300k+ TRY, leading 35+ team members and 300+ participants. We were also 2x semi-finalists, with me as team lead, in the Gençbizz Start-Up Development Competition.",
    },
  },
  {
    id: "startups",
    label: "Start-up World",
    color: "var(--color-green)",
    iconType: "emoji",
    icon: "🌱",
    arc: "outer",
    angle: 135,
    dialog: {
      body: "I like being around people building things, on and off campus. I'm a Founding Member and Community Specialist at forcreate., where I helped grow Türkiye's next-gen high school entrepreneurship ecosystem (Jan 2024 – Jan 2025), and I'm part of WorkupOnBoard, İş Bankası's high school entrepreneurship program.",
    },
  },
  {
    id: "economy",
    label: "Economics",
    color: "var(--color-yellow)",
    iconType: "emoji",
    icon: "📈",
    arc: "outer",
    angle: 225,
    dialog: {
      body: "I like keeping an eye on markets and how the economy actually works. Through the HSBC Insight Program I got a first real look at investment banking and global finance, and I genuinely enjoy following markets — not just for school.",
    },
  },
  {
    id: "lifestyle",
    label: "Healthy Living",
    color: "var(--color-red)",
    iconType: "emoji",
    icon: "🍽️",
    arc: "outer",
    angle: 315,
    dialog: {
      body: "Outside of everything else: I love to eat, and I'll play pretty much any sport you put in front of me. I'm big on food — trying new places, new cuisines, cooking included — and this past summer I volunteered internationally with GSM, helping restore a medieval fortress in Montaigu-le-Blin, France, alongside volunteers from Italy, Belgium, and Spain. Sports, politics, world history, volunteering, drawing, cooking — that's pretty much me.",
    },
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
    what: "Honors Council President",
    blurb: "High Honors student, Student Council member, and this year's Honors Council President at Saint Joseph.",
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
