export type WebsiteStatus = "live" | "in-design" | "in-development" | "concept";

export type PaletteSwatch = {
  name: string;
  value: string;
};

export type WebsiteProject = {
  slug: string;
  name: string;
  tagline: string;
  cuisine: string;
  location: string;
  year: number;
  status: WebsiteStatus;
  role: string;
  summary: string;
  longDescription: string[];
  preview: string;
  previewUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  stack: string[];
  palette: PaletteSwatch[];
  fonts: { label: string; value: string }[];
  sections: string[];
  notes?: string;
};

export const statusLabel: Record<WebsiteStatus, string> = {
  live: "Live",
  "in-design": "In Design",
  "in-development": "In Development",
  concept: "Concept",
};

export const statusTone: Record<WebsiteStatus, string> = {
  live: "tag-green",
  "in-design": "tag-yellow",
  "in-development": "tag-orange",
  concept: "tag-blue",
};

export const websites: WebsiteProject[] = [
  {
    slug: "inlay-burmese-kitchen",
    name: "Inlay Burmese Kitchen",
    tagline: "A warm, editorial site for a Burmese neighborhood kitchen.",
    cuisine: "Burmese",
    location: "Dallas, TX",
    year: 2026,
    status: "in-development",
    role: "Design & Development",
    summary:
      "A website mockup for a Burmese kitchen — celebrating tea-leaf salad, mohinga, and the quiet rituals of Shan cooking. Built with Nuxt 3, designed around warm spice tones and editorial typography.",
    longDescription: [
      "Inlay Burmese Kitchen is a small, family-run concept in Dallas centered on the dishes of the Inle Lake region. The brief was to produce a site that felt as warm and particular as the food itself — nothing template-y, nothing corporate.",
      "The mockup leans on oversized serif display type, generous whitespace, and a palette pulled from tamarind, turmeric, and lake-water blue. Imagery is treated like a magazine spread — less grid, more curation.",
      "The build is a Nuxt 3 project with a content-first setup so the owners can manage menus and seasonal features themselves without touching code.",
    ],
    preview:
      "https://placehold.co/1600x1000/2a1d14/f5d49a?text=Inlay+Burmese+Kitchen",
    previewUrl: "inlay-burmese.com",
    liveUrl: undefined,
    githubUrl: undefined,
    stack: ["Nuxt 3", "TypeScript", "Nuxt Content", "Tailwind"],
    palette: [
      { name: "Tamarind", value: "#2a1d14" },
      { name: "Turmeric", value: "#e9a648" },
      { name: "Ginger", value: "#c06a2b" },
      { name: "Lake",     value: "#4b6d7a" },
      { name: "Cream",    value: "#f5efe3" },
    ],
    fonts: [
      { label: "Display", value: "Fraunces" },
      { label: "Body",    value: "Instrument Sans" },
    ],
    sections: [
      "Hero with seasonal feature",
      "Story & lineage",
      "Menu (lunch, dinner, teahouse)",
      "Location & hours",
      "Reservations & contact",
    ],
    notes:
      "Currently a Nuxt mockup — imagery placeholders, real photography and menu copy coming once the kitchen opens.",
  },
];

export function getWebsiteBySlug(slug: string): WebsiteProject | undefined {
  return websites.find((w) => w.slug === slug);
}
