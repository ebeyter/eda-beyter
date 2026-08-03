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
      body: "Okay, MFINUE is honestly where I learned to keep a hundred moving parts calm at once — and I love it. Right now I'm Head of Logistics, Accommodation & Finance, which means matching delegates with host families, running sponsors, and holding on-site operations together while everything's happening at once. Before that I was Delegate & Guide (I even got to represent Human Rights Watch in an ECOSOC committee, which was such a fun challenge!), and before that, Admin on the organizing team — basically I've done every side of this conference. I've also been a delegate at SULTANI MFINUE, the French MUN conferences. Give me a room full of delegates and a tight deadline and I am genuinely in my element.",
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
      body: "Swimming has been my thing since I was little, and I still love it just as much — early mornings, endless laps, still going strong. I'm a Turkish Champion (Dec 2019) and a Turkish National Championships medalist (Dec 2023), training 35+ hours a week at the national level, full-time since Nov 2013. I'm also part of the Fenerbahçe Youth Club team, and have been since 2022. Honestly, twelve-plus years in the water is where I learned that discipline and patience beat almost everything else.",
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
      body: "School's honestly so much more than just classes for me. I hosted TEDx Saint Joseph and ran the whole show — nerve-wracking, but so worth it — and this year I get to be Honors Council President, on top of being a High Honors student and Student Council member. I'm also DELF B2 and DALF C1 certified in French, which I'm pretty proud of! Saint Joseph is where a lot of who I am actually got built.",
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
      body: "I've been President of the Saint Joseph Entrepreneurship Club since Sep 2024, and building things with people is honestly my favorite kind of chaos! I organize SOMMET, our case-study competition — that's 15+ sponsorships (Carrefour, TEB) worth 300k+ TRY, and leading a 35+ person team through 300+ participants. We were also 2x semi-finalists, with me as team lead, in the Gençbizz Start-Up Development Competition. There's nothing quite like watching an idea turn into an actual event.",
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
      body: "I just really like being around people building things, on and off campus — there's such good energy in a room full of people trying to make something happen. I'm a Founding Member and Community Specialist at forcreate., where I helped grow Türkiye's next-gen high school entrepreneurship ecosystem (Jan 2024 – Jan 2025), and I'm also part of WorkupOnBoard, İş Bankası's high school entrepreneurship program. This whole world is where I feel most alive.",
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
      body: "I'm genuinely that person who checks the markets for fun. Through the HSBC Insight Program I got a real first look at investment banking and global finance, and it just stuck with me — I love trying to understand why the economy moves the way it does, and I promise it's not only for school!",
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
      body: "Outside of literally everything else: I love to eat, and I'll say yes to pretty much any sport you put in front of me. I'm big on food — new places, new cuisines, cooking included — and this past summer I volunteered internationally with GSM, helping restore a medieval fortress in Montaigu-le-Blin, France, alongside volunteers from Italy, Belgium, and Spain, which was such a fun, chaotic, wonderful experience. Sports, politics, world history, volunteering, drawing, cooking — that's pretty much me, all at once.",
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
