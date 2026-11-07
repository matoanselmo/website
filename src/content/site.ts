export interface Project {
  name: string;
  repo: string;
  desc: string;
  tags: string[];
}

export interface Experience {
  period: string;
  role: string;
  org: string;
  desc: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    name: string;
    role: string;
    tagline: string;
  };
  links: {
    github: string;
    email: string;
  };
  about: {
    label: string;
    body: string[];
  };
  projects: {
    label: string;
    allLabel: string;
    // Tooltip on the "ai" tag.
    aiNote: string;
    items: Project[];
  };
  background: {
    label: string;
  };
  experience: {
    label: string;
    items: Experience[];
  };
  competitions: {
    label: string;
    items: Experience[];
  };
  clubs: {
    label: string;
    items: Experience[];
  };
  now: {
    label: string;
    items: string[];
    updatedLabel: string;
    updated: string;
  };
  a11y: {
    toc: string;
    language: string;
  };
  terminal: {
    label: string;
    hint: string;
    // The same button on touch screens, where there is no ~ key.
    hintTouch: string;
    help: Record<TerminalCommand, string>;
    notFound: string;
    usage: string;
    noProject: string;
    opening: string;
    sameLang: string;
    sudo: string;
    neofetch: {
      location: string;
      languages: string;
      interests: string;
      labels: { location: string; languages: string; interests: string };
    };
  };
  footer: {
    note: string;
  };
}

export type Lang = "en" | "pt";

export const TERMINAL_COMMANDS = ["help", "whoami", "ls projects", "open <project>", "neofetch", "lang en|pt", "contact", "clear", "exit"] as const;

export type TerminalCommand = (typeof TERMINAL_COMMANDS)[number];

// The boot sequence's output, in English on every page. "ready" gets the section labels.
export const BOOT_LINES = [
  { cmd: "git clone https://github.com/matoanselmo/website" },
  { out: "Cloning into 'website'..." },
  { out: "remote: Enumerating objects: 100% done." },
  { out: "Receiving objects: ", percent: true },
  { out: "Resolving deltas: 100%" },
  { cmd: "cd website && npm install" },
  { out: "added packages" },
  { cmd: "npm run dev" },
  { ready: "ready: " },
] as const;

const SECTION_FLAGS = {
  about: true,
  projects: true,
  experience: true,
  competitions: true,
  clubs: true,
  now: true,
};

export const SECTIONS: Record<keyof typeof SECTION_FLAGS, boolean> = SECTION_FLAGS;

// Text that is the same in every language, or a short per-language pair.
type Localized = string | Record<Lang, string>;

const local = (value: Localized, lang: Lang) => (typeof value === "string" ? value : value[lang]);

// Shared data. Lists keep their order here; translations below link to them by id.
const NAME = "Mateus Anselmo";

const LINKS = {
  github: "https://github.com/matoanselmo",
  email: "mailto:mateusanselmoguarino@gmail.com",
};

const PROJECTS = [
  {
    id: "mimi3d",
    name: { en: "mimi3D - featured", pt: "mimi3D - destaque" },
    repo: "https://github.com/matoanselmo/klipper",
    tags: [{ en: "3D printer", pt: "impressora 3D" }, "klipper", "ai"],
  },
  {
    id: "nix",
    name: "nix",
    repo: "https://github.com/matoanselmo/nix",
    tags: ["linux", "nix-config", "ai"],
  },
  {
    id: "tessera",
    name: "tessera",
    repo: "https://github.com/matoanselmo/tessera",
    tags: ["linux", "qml", "niri", "ai"],
  },
  {
    id: "website",
    name: "matoanselmo.runs-on.dev",
    repo: "https://github.com/matoanselmo/website",
    tags: ["astro", "ai"],
  },
] as const satisfies readonly { id: string; name: Localized; repo: string; tags: readonly Localized[] }[];

type Entry = { id: string; org: Localized };

const EXPERIENCE = [
  { id: "technician", org: "Alexander Academy" },
  { id: "alexander", org: "Alexander Academy" },
  { id: "carson", org: "Carson Graham" },
] as const satisfies readonly Entry[];

const COMPETITIONS = [
  { id: "scienceFair", org: { en: "Alexander Academy Science Fair", pt: "Feira de Ciências da Alexander Academy" } },
  { id: "hackathon", org: { en: "Alexander Academy Hackathon", pt: "Hackathon da Alexander Academy" } },
] as const satisfies readonly Entry[];

const CLUBS = [
  { id: "techClub", org: { en: "Technology Club", pt: "Clube de Tecnologia" } },
  { id: "vex", org: { en: "VEX V5 Club", pt: "Clube VEX V5" } },
] as const satisfies readonly Entry[];

type IdOf<T extends readonly { id: string }[]> = T[number]["id"];

type EntryText = Omit<Experience, "org">;

interface Timeline<Id extends string> {
  label: string;
  items: Record<Id, EntryText>;
}

// Everything that needs translating. A missing or unknown id is a type error.
interface Translation extends Omit<SiteContent, "hero" | "links" | "projects" | "experience" | "competitions" | "clubs"> {
  hero: Omit<SiteContent["hero"], "name">;
  projects: Omit<SiteContent["projects"], "items"> & { items: Record<IdOf<typeof PROJECTS>, string> };
  experience: Timeline<IdOf<typeof EXPERIENCE>>;
  competitions: Timeline<IdOf<typeof COMPETITIONS>>;
  clubs: Timeline<IdOf<typeof CLUBS>>;
}

const TRANSLATIONS: Record<Lang, Translation> = {
  en: {
    meta: {
      title: "Mateus Anselmo | Student Developer",
      description: "Mateus Anselmo is a student developer in Vancouver working across software and hardware.",
    },
    hero: {
      role: "Student developer working across software and hardware",
      tagline: "\"A handsome young smart tech guy!\" - My girlfriend",
    },
    about: {
      label: "about",
      body: [
        "I'm a Brazilian high school student in Vancouver who likes building things where software meets hardware. I've won my school's science fair and hackathon, and I lead its Technology Club.",
        "Currently, on the software side I'm most comfortable with Java, and I'm learning Rust for embedded systems. I've been building a 3D printer that is a recycled Makerbase kit from 2018, while teaching myself CAD.",
        "I also run my own home server with a nice selection of daily services I use, such as a NAS, a password manager, development tools, and more.",
        "I'm hoping to study mechatronics and robotics, and eventually work with industrial CNC machines and robots.",
      ],
    },
    projects: {
      label: "projects",
      allLabel: "all repositories",
      aiNote: "built with AI help",
      items: {
        mimi3d: "A Cartesian bedslinger rebuilt from a discontinued Makerbase kit, running Klipper on my home server.",
        nix: "The NixOS config behind my desktop and laptop.",
        tessera: "A custom desktop shell for Linux on top of niri, built in QML with its own bar, launcher, and widgets.",
        website: "My portfolio, built with Astro in English and Portuguese.",
      },
    },
    background: { label: "experience" },
    experience: {
      label: "education & work",
      items: {
        technician: { period: "Summer 2026", role: "Printer Technician (Volunteer)", desc: "Repaired and upgraded the school's two 3D printers with auto bed leveling, updated firmware, and mechanical improvements." },
        alexander: { period: "2025 — now", role: "Student", desc: "Grade 11 to 12" },
        carson: { period: "2024 — 2025", role: "Student", desc: "Grade 10" },
      },
    },
    competitions: {
      label: "competitions",
      items: {
        scienceFair: { period: "2026", role: "1st Place", desc: "Built a Flite Test FT-22 adapted as an environmental telemetry plane for harsh conditions like wildfires, dense forests, and high winds. Team of 2." },
        hackathon: { period: "2025", role: "1st Place", desc: "Designed and built a school-wide dashboard for students and teachers. Team of 5." },
      },
    },
    clubs: {
      label: "clubs",
      items: {
        techClub: { period: "2026", role: "Lead", desc: "Restructured the club around open-ended projects, moving it off the VEX ecosystem and getting the school to fund ESP32s and better prototyping gear." },
        vex: { period: "2025", role: "Lead Developer & Builder", desc: "Designed and built a competition robot for the Push Back season with a team of 8." },
      },
    },
    now: {
      label: "now",
      items: ["Focusing on school", "Applying to university", "Building a 3D printer"],
      updatedLabel: "updated",
      updated: "November 2026",
    },
    a11y: { toc: "On this page", language: "Language" },
    terminal: {
      label: "Terminal",
      hint: "press ~",
      hintTouch: "open terminal",
      help: {
        help: "list commands",
        whoami: "who I am",
        "ls projects": "list my projects",
        "open <project>": "open a project's repo",
        neofetch: "system info, sort of",
        "lang en|pt": "switch language",
        contact: "how to reach me",
        clear: "clear the screen",
        exit: "close the terminal",
      },
      notFound: "command not found",
      usage: "usage",
      noProject: "no such project",
      opening: "opening",
      sameLang: "already in English",
      sudo: "nice try.",
      neofetch: {
        location: "Vancouver",
        languages: "Java, Rust",
        interests: "hardware, software, 3D printing, robotics",
        labels: { location: "location", languages: "languages", interests: "interests" },
      },
    },
    footer: { note: "Made with ☕." },
  },
  pt: {
    meta: {
      title: "Mateus Anselmo | Estudante Desenvolvedor",
      description: "Mateus Anselmo é um estudante desenvolvedor em Vancouver que trabalha com software e hardware.",
    },
    hero: {
      role: "Estudante desenvolvedor que trabalha com software e hardware",
      tagline: "\"Um garoto bonito, jovem e inteligente que manja de tecnologia!\" - Minha namorada",
    },
    about: {
      label: "sobre",
      body: [
        "Sou um estudante brasileiro do ensino médio em Vancouver e gosto de construir coisas onde o software encontra o hardware. Venci a feira de ciências e o hackathon da minha escola, e lidero o Clube de Tecnologia.",
        "No lado do software, hoje me sinto mais à vontade com Java, e estou aprendendo Rust para sistemas embarcados. Venho montando uma impressora 3D a partir de um kit Makerbase de 2018 reaproveitado, enquanto aprendo CAD sozinho.",
        "Também mantenho meu próprio home server com uma boa seleção de serviços que uso no dia a dia, como NAS, gerenciador de senhas, ferramentas de desenvolvimento e mais.",
        "Quero estudar mecatrônica e robótica e, no futuro, trabalhar com máquinas CNC e robôs industriais.",
      ],
    },
    projects: {
      label: "projetos",
      allLabel: "todos os repositórios",
      aiNote: "feito com ajuda de IA",
      items: {
        mimi3d: "Uma bedslinger cartesiana reconstruída a partir de um kit descontinuado da Makerbase, rodando Klipper no meu home server.",
        nix: "A configuração do NixOS por trás do meu desktop e do meu notebook.",
        tessera: "Um shell de desktop personalizado para o niri, feito em QML com barra, launcher e widgets próprios.",
        website: "Meu portfólio, feito com Astro em inglês e português.",
      },
    },
    background: { label: "experiência" },
    experience: {
      label: "formação & trabalho",
      items: {
        technician: { period: "Verão de 2026", role: "Técnico de Impressoras (Voluntário)", desc: "Consertei e melhorei as duas impressoras 3D da escola com nivelamento automático da mesa, firmware atualizado e melhorias mecânicas." },
        alexander: { period: "2025 — agora", role: "Estudante", desc: "Do 2º ao 3º ano" },
        carson: { period: "2024 — 2025", role: "Estudante", desc: "1º ano do ensino médio" },
      },
    },
    competitions: {
      label: "competições",
      items: {
        scienceFair: { period: "2026", role: "1º Lugar", desc: "Construímos um Flite Test FT-22 adaptado como avião de telemetria ambiental para condições extremas, como incêndios florestais, florestas densas e ventos fortes. Equipe de 2." },
        hackathon: { period: "2025", role: "1º Lugar", desc: "Projetamos e construímos um dashboard para toda a escola, para alunos e professores. Equipe de 5." },
      },
    },
    clubs: {
      label: "clubes",
      items: {
        techClub: { period: "2026", role: "Líder", desc: "Reestruturei o clube em torno de projetos abertos, saindo do ecossistema VEX e conseguindo que a escola financiasse ESP32s e equipamentos melhores de prototipagem." },
        vex: { period: "2025", role: "Desenvolvedor líder e montador", desc: "Projetamos e construímos um robô de competição para a temporada Push Back com uma equipe de 8." },
      },
    },
    now: {
      label: "agora",
      items: ["Focando na escola", "Me candidatando a universidades", "Montando uma impressora 3D"],
      updatedLabel: "atualizado",
      updated: "Novembro de 2026",
    },
    a11y: { toc: "Nesta página", language: "Idioma" },
    terminal: {
      label: "Terminal",
      hint: "aperte ~",
      hintTouch: "abrir terminal",
      help: {
        help: "lista os comandos",
        whoami: "quem eu sou",
        "ls projects": "lista meus projetos",
        "open <project>": "abre o repositório de um projeto",
        neofetch: "informações do sistema, mais ou menos",
        "lang en|pt": "troca o idioma",
        contact: "como falar comigo",
        clear: "limpa a tela",
        exit: "fecha o terminal",
      },
      notFound: "comando não encontrado",
      usage: "uso",
      noProject: "projeto não encontrado",
      opening: "abrindo",
      sameLang: "já está em português",
      sudo: "boa tentativa.",
      neofetch: {
        location: "Vancouver",
        languages: "Java, Rust",
        interests: "hardware, software, impressão 3D, robótica",
        labels: { location: "local", languages: "linguagens", interests: "interesses" },
      },
    },
    footer: { note: "Feito com ☕." },
  },
};

// Joins a shared list with its translated text, in the shared order.
function timeline<Id extends string>(entries: readonly { id: Id; org: Localized }[], text: Timeline<Id>, lang: Lang) {
  return {
    label: text.label,
    items: entries.map((e) => ({ ...text.items[e.id], org: local(e.org, lang) })),
  };
}

function build(lang: Lang): SiteContent {
  const t = TRANSLATIONS[lang];
  return {
    ...t,
    hero: { name: NAME, ...t.hero },
    links: LINKS,
    projects: {
      label: t.projects.label,
      allLabel: t.projects.allLabel,
      aiNote: t.projects.aiNote,
      items: PROJECTS.map((p) => ({
        name: local(p.name, lang),
        repo: p.repo,
        desc: t.projects.items[p.id],
        tags: p.tags.map((tag) => local(tag, lang)),
      })),
    },
    experience: timeline(EXPERIENCE, t.experience, lang),
    competitions: timeline(COMPETITIONS, t.competitions, lang),
    clubs: timeline(CLUBS, t.clubs, lang),
  };
}

export const CONTENT: Record<Lang, SiteContent> = { en: build("en"), pt: build("pt") };

// The 404 page is shared by both languages; it picks one from the URL.
export const NOT_FOUND: Record<Lang, { error: string; back: string }> = {
  en: { error: "No such file or directory", back: "back home" },
  pt: { error: "Arquivo ou diretório inexistente", back: "voltar ao início" },
};
