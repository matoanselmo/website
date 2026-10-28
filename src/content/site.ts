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
      role: "[role]",
      tagline: "[a one-line tagline about what you do and care about]",
    },
    links: LINKS,
    about: {
      label: "about",
      body: [
        "[An opening paragraph about you. Say who you are and what you're into, in your own voice.]",
        "[A second, quieter paragraph with the extra detail.]",
      ],
    },
    projects: {
      label: "projects",
      allLabel: "all repositories",
      items: [
        {
          name: "tessera",
          repo: "https://github.com/matoanselmo/tessera",
          desc: "[project description, one or two lines]",
          tags: ["qml", "niri", "[tag]"],
        },
        {
          name: "this site",
          repo: "https://github.com/matoanselmo/website",
          desc: "[project description, one or two lines]",
          tags: ["astro", "[tag]"],
        },
        {
          name: "[project name]",
          repo: "https://github.com/matoanselmo",
          desc: "[project description, one or two lines]",
          tags: ["[tag]", "[tag]"],
        },
      ],
    },
    experience: {
      label: "education & work",
      items: [
        { period: "2025 — now", role: "[role]", org: "[place]", desc: "[what you did there]" },
        { period: "[year — year]", role: "[role]", org: "[place]", desc: "[what you did there]" },
      ],
    },
    now: {
      label: "now",
      items: ["[something you're doing]", "[something you're doing]", "[something you're doing]"],
      updatedLabel: "updated",
      updated: "[month year]",
    },
    footer: { note: "[footer note]" },
  },
  pt: {
    hero: {
      name: "Mateus Anselmo",
      role: "[papel]",
      tagline: "[uma frase sobre o que você faz e curte]",
    },
    links: LINKS,
    about: {
      label: "sobre",
      body: [
        "[Um parágrafo de abertura sobre você. Diga quem você é e do que curte, do seu jeito.]",
        "[Um segundo parágrafo, mais tranquilo, com os detalhes extras.]",
      ],
    },
    projects: {
      label: "projetos",
      allLabel: "todos os repositórios",
      items: [
        {
          name: "tessera",
          repo: "https://github.com/matoanselmo/tessera",
          desc: "[descrição do projeto, uma ou duas linhas]",
          tags: ["qml", "niri", "[tag]"],
        },
        {
          name: "este site",
          repo: "https://github.com/matoanselmo/website",
          desc: "[descrição do projeto, uma ou duas linhas]",
          tags: ["astro", "[tag]"],
        },
        {
          name: "[nome do projeto]",
          repo: "https://github.com/matoanselmo",
          desc: "[descrição do projeto, uma ou duas linhas]",
          tags: ["[tag]", "[tag]"],
        },
      ],
    },
    experience: {
      label: "formação & trabalho",
      items: [
        { period: "2025 — agora", role: "[papel]", org: "[lugar]", desc: "[o que você fez lá]" },
        { period: "[ano — ano]", role: "[papel]", org: "[lugar]", desc: "[o que você fez lá]" },
      ],
    },
    now: {
      label: "agora",
      items: ["[algo que você tá fazendo]", "[algo que você tá fazendo]", "[algo que você tá fazendo]"],
      updatedLabel: "atualizado",
      updated: "[mês ano]",
    },
    footer: { note: "[nota do rodapé]" },
  },
};
