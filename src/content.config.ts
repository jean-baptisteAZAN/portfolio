import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One entry = one use case = one bento tile + one page at /cas/<id>.
 * The tile shows `tag`, `hook` and `teaser`; the page tells the full story.
 */
const VISUALS = z.enum(['call', 'journey', 'eou', 'curve', 'pipeline', 'arch', 'drone', 'fleet', 'certchain', 'mac-flow', 'audit', 'oden', 'oden-show']);

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    order: z.number(),
    tag: z.string(),
    /** Tile headline: an actionable metric or a question. */
    hook: z.string(),
    /** Tile sub-line: one sentence that earns the click. */
    teaser: z.string(),
    /** Page <title> and H1. */
    title: z.string(),
    /** Meta description (≤ 160 characters). */
    description: z.string().max(160),
    period: z.string(),
    role: z.string(),
    /** Animation in the bento tile. */
    visual: VISUALS,
    /** Larger animation at the top of the page (defaults to the tile one). */
    hero: VISUALS.optional(),
    /** One sentence under the H1: what it is, readable in 5 seconds. The Markdown body tells the story. */
    brief: z.string(),
    tile: z.object({
      size: z.enum(['s', 'l', 'w']).default('s'),
      tone: z.enum(['glass', 'inverse', 'brand']).default('glass'),
    }),
    facts: z.array(z.object({ value: z.string(), label: z.string() })).min(1).max(3),
    /** Tools grouped by axis (Backend, Frontend, Données, Infra, IA…). */
    stack: z.array(z.object({ axis: z.string(), items: z.array(z.string()).min(1) })).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string(), kind: z.enum(['site', 'repo', 'pdf']) })).default([]),
  }),
});

export const collections = { cases };
