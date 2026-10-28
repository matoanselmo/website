export interface Project {
  name: string;
  meta: string;
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
    status: string;
    name: string;
    role: string;
    tagline: string;
  };
  about: {
    label: string;
    body: string[];
  };
  projects: {
    label: string;
    items: Project[];
  };
  experience: {
    label: string;
    items: Experience[];
  };
  now: {
    label: string;
    intro: string;
    items: string[];
    updatedLabel: string;
    updated: string;
  };
  footer: {
    note: string;
  };
  ui: {
    hints: { key: string; label: string }[];
    columns: [string, string, string];
  };
}

export type Lang = "en" | "pt";

export const SECTIONS = {
  about: true,
  projects: true,
  experience: true,
  now: true,
} as const;

export const CONTENT: Record<Lang, SiteContent> = {
  en: {
    hero: {
      status: "online",
      name: "Mateus Anselmo",
      role: "[role]",
      tagline: "[tagline]",
    },
    about: {
      label: "about",
      body: ["[paragraph about you]", "[paragraph about you]"],
    },
    projects: {
      label: "projects",
      items: [
        {
          name: "this site",
          meta: "[meta]",
          repo: "https://github.com/matoanselmo/website",
          desc: "[project description]",
          tags: ["tag", "tag", "tag"],
        },
        {
          name: "matoserver",
          meta: "[meta]",
          repo: "https://server.matoanselmo.runs-on.dev/",
          desc: "[project description]",
          tags: ["tag", "tag", "tag"],
        },
        {
          name: "tessera",
          meta: "[meta]",
          repo: "https://github.com/matoanselmo/tessera",
          desc: "[project description]",
          tags: ["tag", "tag", "tag"],
        },
      ],
    },
    experience: {
      label: "education & work",
      items: [
        { period: "2025 - now", role: "[role]", org: "[place]", desc: "[what you did there]" },
      ],
    },
    now: {
      label: "now",
      intro: "[intro line]",
      items: ["[something you're doing]", "[something you're doing]", "[something you're doing]"],
      updatedLabel: "updated",
      updated: "[month year]",
    },
    footer: { note: "[footer note]" },
    ui: {
      hints: [
        { key: "1-4", label: "section" },
        { key: "j/k", label: "move" },
        { key: "enter", label: "open" },
        { key: "l", label: "language" },
      ],
      columns: ["Name", "Description", "Type"],
    },
  },
  pt: {
    hero: {
      status: "online",
      name: "Mateus Anselmo",
      role: "[papel]",
      tagline: "[frase de efeito]",
    },
    about: {
      label: "sobre",
      body: ["[parágrafo sobre você]", "[parágrafo sobre você]"],
    },
    projects: {
      label: "projetos",
      items: [
        {
          name: "this site",
          meta: "[meta]",
          repo: "https://github.com/matoanselmo/website",
          desc: "[descrição do projeto]",
          tags: ["tag", "tag", "tag"],
        },
        {
          name: "matoserver",
          meta: "[meta]",
          repo: "https://server.matoanselmo.runs-on.dev/",
          desc: "[descrição do projeto]",
          tags: ["tag", "tag", "tag"],
        },
        {
          name: "tessera",
          meta: "[meta]",
          repo: "https://github.com/matoanselmo/tessera",
          desc: "[descrição do projeto]",
          tags: ["tag", "tag", "tag"],
        },
      ],
    },
    experience: {
      label: "formação & trabalho",
      items: [
        { period: "2025 - agora", role: "[papel]", org: "[lugar]", desc: "[o que você fez lá]" },
      ],
    },
    now: {
      label: "agora",
      intro: "[frase de abertura]",
      items: ["[algo que você tá fazendo]", "[algo que você tá fazendo]", "[algo que você tá fazendo]"],
      updatedLabel: "atualizado",
      updated: "[mês ano]",
    },
    footer: { note: "[nota do rodapé]" },
    ui: {
      hints: [
        { key: "1-4", label: "seção" },
        { key: "j/k", label: "mover" },
        { key: "enter", label: "abrir" },
        { key: "l", label: "idioma" },
      ],
      columns: ["Nome", "Descrição", "Tipo"],
    },
  },
};
