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
}

export type Lang = "en" | "pt";

export const SECTIONS = {
  about: true,
  projects: true,
  experience: false,
  now: true,
} as const;

export const CONTENT: Record<Lang, SiteContent> = {
  en: {
    hero: {
      status: "online",
      name: "Mateus Anselmo",
      role: "student & tech enthusiast",
      tagline: "A handsome young smart tech guy! - My girlfriend",
    },
    about: {
      label: "about",
      body: [
        "I'm a tech enthusiast who's got into the self hosting rabbit hole and never really left. matoserver™ has saved me some money.",
        "I'd rather understand ten lines than depend on a thousand. This whole site is driven by a single config file, which feels about right.",
      ],
    },
    projects: {
      label: "projects",
      items: [
        {
          name: "this site",
          meta: "config-driven",
          repo: "https://matoanselmo.tech/",
          desc: "The page you're reading. Every word, project, and language lives in one tidy config object — change the data, the layout follows. No CMS, no clutter.",
          tags: ["config-driven", "i18n", "no-cms"],
        },
        {
          name: "matoserver",
          meta: "homelab",
          repo: "https://server.matoanselmo.tech/",
          desc: "My personal homelab. Debian + Docker, a dozen containers living behind a single dashboard. The thing I learn the most from.",
          tags: ["Debian", "Docker", "self-hosted"],
        },
        {
          name: "ender-3-klipper",
          meta: "3d printing",
          repo: "https://matoanselmo.tech/",
          desc: "An Ender 3 with klipper and terrible config which I'm still learning how to deal with.",
          tags: ["Klipper", "Mainsail", "G-code"],
        },
      ],
    },
    experience: {
      label: "education & work",
      items: [
        {
          period: "2025 — now",
          role: "High School",
          org: "Alexander Academy",
          desc: "Just boring highschoo;",
        },
      ],
    },
    now: {
      label: "now",
      intro: "What I'm actually doing at the moment —",
      items: [
        "Mostly focusing on school (& summer school)",
        "Learning how to model & make my own 3d prints with fusion.",
        "Slowly getting back into programming.",
      ],
      updatedLabel: "updated",
      updated: "June 2026",
    },
    footer: { note: "built with caffeine and a config file" },
  },
  pt: {
    hero: {
      status: "online",
      name: "Mateus Anselmo",
      role: "estudante & entusiasta de tech",
      tagline: "Um jovem bonito e esperto de tech! - Minha namorada",
    },
    about: {
      label: "sobre",
      body: [
        "Sou um entusiasta de tech que caiu no buraco do self hosting e nunca mais saiu. o matoserver™ já me economizou uma grana.",
        "Prefiro entender dez linhas a depender de mil. Esse site inteiro roda a partir de um único arquivo de config, o que me fazer todo sentido.",
      ],
    },
    projects: {
      label: "projetos",
      items: [
        {
          name: "este site",
          meta: "movido a config",
          repo: "https://github.com/matoanselmo",
          desc: "A página que você tá lendo agora. Cada palavra, projeto e idioma vive num objeto de config bem organizado — muda o dado, o layout acompanha. Sem CMS, sem bagunça.",
          tags: ["config-driven", "i18n", "sem-cms"],
        },
        {
          name: "matoserver",
          meta: "homelab",
          repo: "https://github.com/matoanselmo",
          desc: "Meu homelab pessoal. Debian + Docker, uma dúzia de containers atrás de um único dashboard. A coisa com que eu mais aprendo.",
          tags: ["Debian", "Docker", "self-hosted"],
        },
        {
          name: "ender-3-klipper",
          meta: "impressão 3d",
          repo: "https://github.com/matoanselmo",
          desc: "Ender 3 V3 SE reflashada com Klipper. printer.cfg personalizado, input shaping, pressure advance e uma UI Mainsail que eu confiro vezes demais.",
          tags: ["Klipper", "Mainsail", "G-code"],
        },
      ],
    },
    experience: {
      label: "formação & trabalho",
      items: [
        {
          period: "2025 — agora",
          role: "Ensino Médio",
          org: "Alexander Academy",
          desc: "Apenas o tedio de um ensino medio qualquer.",
        },
      ],
    },
    now: {
      label: "agora",
      intro: "O que eu realmente to fazendo no momento —",
      items: [
        "Focando bastante na escola (& curso de verão)",
        "Aprendendo a modelar & fazer minhas próprias impressões 3d com o fusion.",
        "Voltando devagar pra programação.",
      ],
      updatedLabel: "atualizado",
      updated: "junho 2026",
    },
    footer: { note: "feito com cafeína e um arquivo de config" },
  },
};
