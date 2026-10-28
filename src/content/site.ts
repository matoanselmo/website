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
  experience: {
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
  now: true,
} as const;

const LINKS = {
  github: "https://github.com/matoanselmo",
  email: "mailto:[your@email]",
};

export const CONTENT: Record<Lang, SiteContent> = {
  en: {
    hero: {
      name: "Mateus Anselmo",
      role: "Student @ Alexander Academy",
      tagline: "Brazilian international student in Canada",
    },
    links: LINKS,
    about: {
      label: "about",
      body: [
        "I'm a tech enthusiast doing an exchange program in Vancouver. I love tinkering with 3d printers, code stuff (I vibecode sometimes :c).",
        "\"A handsome young smart tech guy! - My girlfriend\"",
      ],
    },
    projects: {
      label: "projects",
      allLabel: "all repositories",
      items: [
        {
          name: "tessera",
          repo: "https://github.com/matoanselmo/tessera",
          desc: "A custom shell styled in a way I actually like.",
          tags: ["qml", "niri", "ai"],
        },
        {
          name: "this site",
          repo: "https://github.com/matoanselmo/website",
          desc: "[project description, one or two lines]",
          tags: ["astro", "ai"],
        },
        {
          name: "mimi3D",
          repo: "https://github.com/matoanselmo",
          desc: "(no repo) This is my own custom cartesian bedslinger. Recycled from a discontinued makerbase kit.",
          tags: ["3D printer", "klipper"],
        },
      ],
    },
    experience: {
      label: "education & work",
      items: [
        { period: "2025 — now", role: "Student", org: "Alexander Academy", desc: "Grade 10 to 12" },
        { period: "[2024 — 2025]", role: "Student", org: "Carson Graham", desc: "Grade 10" },
      ],
    },
    now: {
      label: "now",
      items: ["Focusing on school", "Applying to university", "Building a 3D printer"],
      updatedLabel: "updated",
      updated: "October 2026",
    },
    footer: { note: "Made with a few prompts" },
  },
  pt: {
    hero: {
      name: "Mateus Anselmo",
      role: "Estudante @ Alexander Academy",
      tagline: "Estudante internacional brasileiro no Canadá",
    },
    links: LINKS,
    about: {
      label: "sobre",
      body: [
        "Sou um entusiasta de tecnologia fazendo intercâmbio em Vancouver. Adoro mexer com impressoras 3D e com código (às vezes faço vibecoding :c).",
        "\"Um garoto bonito, jovem e inteligente que manja de tecnologia! - Minha namorada\"",
      ],
    },
    projects: {
      label: "projetos",
      allLabel: "todos os repositórios",
      items: [
        {
          name: "tessera",
          repo: "https://github.com/matoanselmo/tessera",
          desc: "Um shell personalizado, com um visual do jeito que eu realmente gosto.",
          tags: ["qml", "niri", "ai"],
        },
        {
          name: "este site",
          repo: "https://github.com/matoanselmo/website",
          desc: "[descrição do projeto, uma ou duas linhas]",
          tags: ["astro", "ai"],
        },
        {
          name: "mimi3D",
          repo: "https://github.com/matoanselmo",
          desc: "(sem repo) Minha própria bedslinger cartesiana personalizada. Reaproveitada de um kit da Makerbase que foi descontinuado.",
          tags: ["impressora 3D", "klipper"],
        },
      ],
    },
    experience: {
      label: "formação & trabalho",
      items: [
        { period: "2025 — agora", role: "Estudante", org: "Alexander Academy", desc: "Do 2º ao 3º ano" },
        { period: "[2024 — 2025]", role: "Estudante", org: "Carson Graham", desc: "1º ano do ensino medio" },
      ],
    },
    now: {
      label: "agora",
      items: ["Focando na escola", "Aplicando para faculdade", "Montando uma impressora 3D"],
      updatedLabel: "atualizado",
      updated: "Outubro de 2026",
    },
    footer: { note: "Feito com uns prompts" },
  },
};
