---
order: 5
tag: Scaleway · Stage, équipe Apple Silicon
hook: "Des milliers de Mac loués dans le cloud."
teaser: "Désormais aussi ouverts que le vôtre."
title: Des Mac loués dans le cloud, pilotés à distance
description: "Stage chez Scaleway, qui loue des Mac en datacenter : automatiser la chaîne de certificats Apple pour piloter la flotte à distance."
period: avr. → août 2025
role: Stage · Software Engineer, équipe Apple Silicon
visual: fleet
hero: mac-flow
tile: { size: s, tone: glass }
facts:
  - { value: "Milliers", label: "de Mac mini proposés à la location, pilotés à distance" }
  - { value: "< 10 min", label: "pour restaurer un serveur de gestion de la flotte" }
brief: "Stage chez Scaleway, qui loue des Mac installés dans ses datacenters. Sujet : automatiser la chaîne de certificats Apple qui permet de les administrer à distance, pour que les clients puissent y installer des logiciels système comme sur leur propre Mac."
stack:
  - { axis: "Backend", items: ["Go", "Bash"] }
  - { axis: "Données", items: ["PostgreSQL"] }
  - { axis: "Apple", items: ["MDM", "Apple Business Manager", "APNs"] }
  - { axis: "Infra", items: ["PKI", "Vault", "GitLab CI"] }
  - { axis: "Observabilité", items: ["Prometheus", "Grafana"] }
links:
  - { label: L'offre Mac mini de Scaleway, href: 'https://www.scaleway.com/fr/apple-mac-mini/', kind: site }
---
## L'offre

Scaleway permet de louer un Mac mini installé dans ses datacenters, dès une heure. On s'y connecte à distance, on l'utilise, on le rend ; il est effacé pour le suivant.

## Le blocage

Des entreprises voulaient y installer des extensions noyau : des logiciels système, comme des agents de sécurité, qui s'exécutent au cœur de macOS. Sur un Mac de bureau, on valide soi-même. En datacenter, personne n'est devant l'écran : il faut passer par le MDM d'Apple, le système qui administre les appareils à distance, et que la flotte n'utilisait qu'au minimum.

## Trois badges pour entrer

Piloter un Mac exige trois identités Apple, des certificats qui se référencent les uns les autres et expirent. Une date oubliée, et la flotte devient ingérable. C'était le sujet du stage : fiabiliser cette chaîne de certificats. Les renouvellements manuels sont devenus des pipelines Bash et Go, documentés et tracés. Les extensions noyau ont suivi.

## En prime

Une observabilité qui repère les installations ratées avant les clients.
