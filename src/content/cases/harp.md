---
order: 4
tag: Harp · Co-fondateur
hook: "Monter ou réparer n'importe quoi, sans être expert."
teaser: "Le manuel devient un tutoriel 3D."
title: "Harp : le manuel devient un tutoriel 3D"
description: "Harp transforme un manuel PDF et un modèle 3D en tutoriel animé, généré par IA. Défense, maintenance, industrie."
period: 2025 → aujourd'hui
role: Co-fondateur
visual: drone
tile: { size: l, tone: glass }
facts:
  - { value: "PDF → 3D", label: "le manuel existant devient un tutoriel animé" }
  - { value: "0", label: "installation pour l'opérateur, un lien ou un QR code suffit" }
  - { value: "On-premise", label: "déployable sur le réseau du client" }
brief: "Pour monter ou réparer un équipement, Harp transforme le manuel PDF du fabricant et le modèle 3D de l'objet en tutoriel animé, étape par étape, que l'opérateur suit sur son téléphone."
stack:
  - { axis: "Frontend", items: ["SvelteKit", "Svelte 5", "three.js"] }
  - { axis: "Backend", items: ["NestJS", "TypeScript"] }
  - { axis: "Données", items: ["PostgreSQL", "Prisma", "Stockage S3"] }
  - { axis: "IA", items: ["MCP"] }
  - { axis: "Infra", items: ["Docker"] }
links:
  - { label: harp3d.fr, href: 'https://harp3d.fr', kind: site }
  - { label: Le tutoriel du drone, href: 'https://harp3d.fr/view?tutorial=97677e8c-ab9e-4e40-b0dc-247c54f3fba2', kind: site }
---
## L'idée

Sur le terrain, personne ne lit un manuel de quarante pages écrit pour des experts. Pourtant le manuel PDF existe. Le modèle 3D existe. Il manque le lien. Harp lit l'un, découpe l'autre, et génère les étapes animées, en vérifiant chaque trajectoire sur la vraie géométrie.

## Pour qui le fait, pour qui le suit

L'auteur retouche dans un éditeur web, ou délègue tout à un assistant IA, via un connecteur MCP (le standard qui permet à une IA de piloter un logiciel). L'opérateur scanne un QR code et suit sur son téléphone. Pour la défense et l'industrie : installation sur le réseau du client.

## Cette page

Le drone ci-dessus est le vrai tutoriel publié, servi par Harp : 79 pièces, 24 étapes. Il se parcourt comme sur le terrain, étape par étape.
