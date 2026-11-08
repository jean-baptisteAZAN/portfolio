---
order: 3
tag: Tennor · Infrastructure
hook: 3 mises en prod par jour, à l'hôpital.
teaser: "Sans rogner sur la sécurité."
title: Livrer vite, là où la sécurité ne se négocie pas
description: "L'infra de Tennor : HDS, ISO 27001, ~3 déploiements par jour, MTTR sous 10 minutes."
period: 2025 → aujourd'hui
role: Founding Engineer
visual: pipeline
hero: arch
tile: { size: s, tone: glass }
facts:
  - { value: "~3", label: "déploiements en production par jour" }
  - { value: "< 10 min", label: "de MTTR, le temps moyen pour rétablir le service après un incident (plusieurs heures avant)" }
  - { value: "ISO 27001", label: "premier secrétariat médical IA certifié en France" }
brief: "Les serveurs et outils qui font tourner l'IA vocale de Tennor : elle reçoit plusieurs mises à jour par jour tout en respectant les normes de sécurité des données médicales."
stack:
  - { axis: "Infra", items: ["Kubernetes", "Terraform", "GitOps", "Argo CD", "Argo Rollouts"] }
  - { axis: "Sécurité", items: ["Hébergement HDS", "ISO 27001", "Vault", "VPN IPsec"] }
  - { axis: "Exploitation", items: ["Prometheus", "Loki", "Grafana", "Alertmanager", "Astreinte"] }
links:
  - { label: tennor.fr, href: 'https://tennor.fr', kind: site }
---
## Le paradoxe

Une startup doit livrer chaque jour. Une IA de santé doit être irréprochable. Le pari : refuser de choisir.

## La sécurité dans la structure

Tout est en code, selon une approche GitOps : Git décrit l'état voulu de l'infrastructure, qui s'y aligne automatiquement. Un environnement se recrée, il ne se répare pas à la main. Réseau isolé par défaut, accès de l'équipe par VPN, secrets centralisés, droits au strict nécessaire. Les logiciels des centres (ERP et RIS, leurs logiciels de gestion et de radiologie) sont reliés par un tunnel chiffré. La conformité HDS (l'hébergement certifié pour les données de santé) et le volet technique d'ISO 27001 (la norme internationale de sécurité de l'information) reposent sur cette base, pas sur la discipline.

## Livrer sans trembler

Chaque nouvelle version est déployée en canary : elle ne reçoit d'abord qu'une petite part du trafic, pendant qu'une suite de tests maison rejoue de vrais appels. Si un indicateur bouge, elle recule seule ; sinon, elle s'étend à tout le trafic.

## Réparer vite

En continu, sur tout le cluster, métriques et logs permettent de suivre un appel de bout en bout. L'astreinte n'est réveillée que si un patient est touché, et l'alerte pointe la cause. Restaurations testées, incidents documentés.
