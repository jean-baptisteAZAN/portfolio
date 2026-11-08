---
order: 1
tag: Tennor · Founding Engineer
hook: Elle décroche, comprend, réserve.
teaser: "4 M+ d'appels traités, 80 % sans humain."
title: "Une IA vocale qui répond aux patients"
description: "Tennor automatise les appels des centres de santé et d'imagerie : 4 M+ d'appels traités, 24 h/24."
period: 2025 → aujourd'hui
role: Founding Engineer
visual: call
hero: journey
tile: { size: l, tone: inverse }
facts:
  - { value: "4 M+", label: "d'appels traités" }
  - { value: "80 %", label: "des appels automatisés de bout en bout" }
  - { value: "100", label: "appels simultanés, 24 h/24, 0 s d'attente" }
brief: "Quand un patient appelle son centre de santé ou d'imagerie, c'est une IA qui décroche : elle comprend sa demande et prend, déplace ou annule le rendez-vous directement dans l'agenda du centre."
stack:
  - { axis: "Téléphonie", items: ["SIP"] }
  - { axis: "Backend", items: ["TypeScript", "Python"] }
  - { axis: "Infra", items: ["Kubernetes", "CI/CD"] }
links:
  - { label: tennor.fr, href: 'https://tennor.fr', kind: site }
---
## Le problème

Dans un centre d'imagerie, le téléphone sonne toute la journée. Chaque appel manqué, c'est un examen qui glisse.

## Faire entrer l'appel

Le téléphone est un terrain hostile : un son de faible qualité (8 kHz, loin d'un micro de bureau), du bruit, des coupures. D'abord, raccorder l'IA aux lignes téléphoniques existantes des centres via SIP, le protocole de la téléphonie sur internet : garder leurs numéros, transférer vers un humain si besoin, et tenir 100 appels simultanés.

## Répondre sans blanc

Un logiciel maison enchaîne en continu l'écoute, la compréhension et la réponse vocale. Pour gagner du temps, les phrases fréquentes sont transformées en voix à l'avance. La différence entre une démo et un produit se joue en quelques centaines de millisecondes.

## Agir pour de vrai

L'agent est branché sur les logiciels de gestion et d'agenda des centres. Il réserve, déplace, annule. Quand le patient raccroche, le rendez-vous est déjà dans l'agenda.

*Chiffres publiés par Tennor sur [tennor.fr](https://tennor.fr). L'infra derrière : [ici](/cas/infra-sante).*
