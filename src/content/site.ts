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
  footer: {
    note: string;
  };
}

export type Lang = "en" | "pt";

export const SECTIONS = {
  about: true,
  projects: true,
  experience: true,
  competitions: true,
  clubs: true,
  now: true,
} as const;

const LINKS = {
  github: "https://github.com/matoanselmo",
  email: "mailto:[mateusanselmoguarino@gmail.com]",
};

export const CONTENT: Record<Lang, SiteContent> = {
  en: {
    hero: {
      name: "Mateus Anselmo",
      role: "I write code, print stuff, and sometimes make them talk to each other",
      tagline: "\"A handsome young smart tech guy!\" - My girlfriend",
    },
    links: LINKS,
    about: {
      label: "about",
      body: [
        "I'm a Brazilian student finishing high school in Vancouver. I like playing around with hardware and software.",
        "Currently, at the software side I'm most comfortable with Java, and learning Rust for embedded systems. I've been building a 3D printer that is a recycled Makerbase kit from 2018, while teaching myself CAD.",
        "I also run my own home-server with a nice selection of daily services I use such as NAS, password manager, development tools and more."
      ],
    },
    projects: {
      label: "projects",
      allLabel: "all repositories",
      items: [
        {
          name: "mimi3D - featured",
          repo: "https://github.com/matoanselmo/klipper",
          desc: "This is my own custom cartesian bedslinger. Recycled from a discontinued makerbase kit.",
          tags: ["3D printer", "klipper", "ai"],
        },
        {
          name: "nix",
          repo: "https://github.com/matoanselmo/nix",
          desc: "This is my entire system, what I run daily on my Desktop and Laptop.",
          tags: ["nix-config", "ai"],
        },
        {
          name: "tessera",
          repo: "https://github.com/matoanselmo/tessera",
          desc: "A custom desktop shell for niri, built in QML with my own bar, launcher and widgets. Styled in a way I actually like.",
          tags: ["qml", "niri", "ai"],
        },
        {
          name: "this site",
          repo: "https://github.com/matoanselmo/website",
          desc: "This incredible website you're currently looking at!",
          tags: ["astro", "ai"],
        },
      ],
    },
    background: { label: "experience" },
    experience: {
      label: "education & work",
      items: [
        { period: "Summer 2026", role: "Printer Technician (Volunteer)", org: "Alexander Academy", desc: "Repaired and upgraded the school's two 3D printers with auto bed leveling, updated firmware, and mechanical improvements." },
        { period: "2025 — now", role: "Student", org: "Alexander Academy", desc: "Grade 11 to 12" },
        { period: "2024 — 2025", role: "Student", org: "Carson Graham", desc: "Grade 10" },
      ],
    },
    competitions: {
      label: "competitions",
      items: [
        { period: "2026", role: "1st Place", org: "Alexander Academy Science Fair", desc: "Built a Flite Test FT-22 adapted as an environmental telemetry plane for harsh conditions like wildfires, dense forests, and high winds. Team of 2." },
        { period: "2025", role: "1st Place", org: "Alexander Academy Hackathon", desc: "Designed and built a school-wide dashboard for students and teachers. Team of 5." },
      ],
    },
    clubs: {
      label: "clubs",
      items: [
        { period: "2026", role: "Lead", org: "Technology Club", desc: "Restructured the club around open-ended projects, moving it off the VEX ecosystem and getting the school to fund ESP32s and better prototyping gear." },
        { period: "2025", role: "Lead Developer & Builder", org: "VEX V5 Club", desc: "Designed and built a competition robot for the Push Back season with a team of 8." },
      ],
    },
    now: {
      label: "now",
      items: ["Focusing on school", "Applying to university", "Building a 3D printer"],
      updatedLabel: "updated",
      updated: "October 2026",
    },
    footer: { note: "Made with ☕. " },
  },
  pt: {
    hero: {
      name: "Mateus Anselmo",
      role: "Escrevo código, imprimo coisas e às vezes faço os dois conversarem",
      tagline: "\"Um garoto bonito, jovem e inteligente que manja de tecnologia!\" - Minha namorada",
    },
    links: LINKS,
    about: {
      label: "sobre",
      body: [
        "Sou um estudante brasileiro terminando o ensino médio em Vancouver. Gosto de mexer com hardware e software.",
        "No lado do software, hoje me sinto mais à vontade com Java, e estou aprendendo Rust para sistemas embarcados. Venho montando uma impressora 3D a partir de um kit Makerbase de 2018 reaproveitado, enquanto aprendo CAD sozinho.",
        "Também mantenho meu próprio home server com uma boa seleção de serviços que uso no dia a dia, como NAS, gerenciador de senhas, ferramentas de desenvolvimento e mais.",
      ],
    },
    projects: {
      label: "projetos",
      allLabel: "todos os repositórios",
      items: [
        {
          name: "mimi3D - destaque",
          repo: "https://github.com/matoanselmo/klipper",
          desc: "Minha própria bedslinger cartesiana personalizada. Reaproveitada de um kit da Makerbase que foi descontinuado.",
          tags: ["impressora 3D", "klipper", "ai"],
        },
        {
          name: "nix",
          repo: "https://github.com/matoanselmo/nix",
          desc: "Meu sistema inteiro, o que eu uso todo dia no meu desktop e no meu notebook.",
          tags: ["nix-config", "ai"],
        },
        {
          name: "tessera",
          repo: "https://github.com/matoanselmo/tessera",
          desc: "Um shell de desktop personalizado para o niri, feito em QML com minha própria barra, launcher e widgets. Com um visual do jeito que eu realmente gosto.",
          tags: ["qml", "niri", "ai"],
        },
        {
          name: "este site",
          repo: "https://github.com/matoanselmo/website",
          desc: "Este lindo site que você está olhando agora!",
          tags: ["astro", "ai"],
        },
      ],
    },
    background: { label: "experiência" },
    experience: {
      label: "formação & trabalho",
      items: [
        { period: "2025 — agora", role: "Estudante", org: "Alexander Academy", desc: "Do 2º ao 3º ano" },
        { period: "2024 — 2025", role: "Estudante", org: "Carson Graham", desc: "1º ano do ensino médio" },
        { period: "Verão de 2026", role: "Técnico de Impressoras (Voluntário)", org: "Alexander Academy", desc: "Consertei e melhorei as duas impressoras 3D da escola com nivelamento automático da mesa, firmware atualizado e melhorias mecânicas." },
      ],
    },
    competitions: {
      label: "competições",
      items: [
        { period: "2026", role: "1º Lugar", org: "Feira de Ciências da Alexander Academy", desc: "Construimos um Flite Test FT-22 adaptado como avião de telemetria ambiental para condições extremas, como incêndios florestais, florestas densas e ventos fortes. Equipe de 2." },
        { period: "2025", role: "1º Lugar", org: "Hackathon da Alexander Academy", desc: "Projetamos e construimos um dashboard para toda a escola, para alunos e professores. Equipe de 5." },
      ],
    },
    clubs: {
      label: "clubes",
      items: [
        { period: "2026", role: "Líder", org: "Clube de Tecnologia", desc: "Reestruturei o clube em torno de projetos abertos, saindo do ecossistema VEX e conseguindo que a escola financiasse ESP32s e equipamentos melhores de prototipagem." },
        { period: "2025", role: "Desenvolvedor Líder & Construtor", org: "Clube VEX V5", desc: "Projetamos e construímos um robô de competição para a temporada Push Back com uma equipe de 8." },
      ],
    },
    now: {
      label: "agora",
      items: ["Focando na escola", "Aplicando para faculdade", "Montando uma impressora 3D"],
      updatedLabel: "atualizado",
      updated: "Outubro de 2026",
    },
    footer: { note: "Feito com ☕." },
  },
};
