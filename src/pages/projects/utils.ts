import type { MarkdownInstance } from "astro";

export type Project = MarkdownInstance<{
  title: string;
  description: string;
  pubDate: string;
  heroImage: string;
  url: string;
  tags: string[];
  highlight: boolean;
  preferred_position: number;
}>;

export const getProjects = () => Object.values(import.meta.glob<Project>("./*.{md,mdx}", { eager: true }));
