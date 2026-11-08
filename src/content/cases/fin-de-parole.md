---
order: 2
tag: Recherche · University of Kent
hook: Comment savoir que quelqu'un a fini de parler ?
teaser: "Simple pour vous. Pas pour une IA en temps réel."
title: "Détecter la fin de parole avec le son et le sens"
description: "Mémoire de MSc (Kent × Tennor) : savoir quand un interlocuteur a fini de parler, en combinant intonation et sens. Code open source."
period: '2026'
role: Mémoire de MSc en intelligence artificielle
visual: curve
hero: eou
tile: { size: s, tone: glass }
facts:
  - { value: "0,897", label: "AUC, la capacité à distinguer une fin de phrase d'une simple pause (1 = parfait, 0,5 = hasard). 0,814 avec le son seul." }
  - { value: "−158 ms", label: "de temps de réponse, sans couper la parole plus souvent" }
  - { value: "÷ 5", label: "d'erreur de calibration : quand le modèle annonce 80 %, il a raison environ 8 fois sur 10" }
brief: "Une IA qui parle au téléphone doit deviner quand la personne a fini sa phrase pour ne pas lui couper la parole ; ce mémoire le fait en combinant l'intonation de la voix et le sens des mots déjà prononcés."
stack:
  - { axis: "IA", items: ["Smart Turn v3", "CamemBERT", "Silero VAD", "Calibration isotone"] }
  - { axis: "Code", items: ["Python", "ONNX Runtime"] }
  - { axis: "Voix", items: ["Azure Speech (transcription)"] }
links:
  - { label: Lire le mémoire (PDF), href: '/docs/memoire-fin-de-parole-azan.pdf', kind: pdf }
  - { label: Code sur GitHub, href: 'https://github.com/jean-baptisteAZAN/EOUDetector', kind: repo }
---
## Le problème

« Mon numéro, c'est le 06… » Le patient respire. Pour un agent qui attend un silence, la phrase est finie : il coupe. Attendre plus longtemps partout rend chaque échange lent.

## L'idée

Un humain ne se fie pas qu'au silence : il entend l'intonation et comprend le sens. « C'est le 06 » est inachevé, quelle que soit la voix. Deux modèles reproduisent ce réflexe, en parallèle :

- **Smart Turn v3**, un modèle audio, juge si l'intonation sonne comme une fin ;
- **CamemBERT**, un modèle de langue française, lit la transcription en cours et juge si la phrase est complète.

Leurs scores sont combinés, puis **calibrés** : un score de 0,8 veut dire « fini dans 80 % des cas », d'un appel à l'autre. Un seul seuil suffit alors pour décider quand répondre.

## Comment lire les chiffres

- **AUC** : la capacité à distinguer une vraie fin de phrase d'une simple pause. 0,5 = pile ou face, 1 = parfait.
- **Latence** : le temps entre la fin de la phrase et la décision de répondre. Elle est mesurée à taux de coupure égal : l'agent coupe la parole dans 5 % des cas, pour tous les modèles.
- **Erreur de calibration** : l'écart moyen entre la probabilité annoncée et la réalité. Plus elle est basse, plus on peut se fier au score.

## Les résultats

Mesurés sur eot-bench, un banc de test de fins de phrase en français.

| Modèle | AUC (plus haut = mieux) | Latence à 5 % de coupures (plus bas = mieux) |
|---|---|---|
| Son seul (Smart Turn v3) | 0,814 | 873 ms |
| Sens seul (CamemBERT) | 0,845 | — |
| **Fusion des deux** | **0,897** | **715 ms** |

Les cinq détecteurs du marché testés annoncent des probabilités peu fiables. Après calibration, l'erreur passe de 0,216 à 0,043. Réglage recommandé en contexte médical : l'agent ne coupe que 1,8 % des phrases et répond en moins d'une seconde.

## La limite : le téléphone

Sur 636 vrais appels, le modèle audio s'effondre. Le téléphone transmet un son à 8 kHz, bien plus pauvre que les enregistrements sur lesquels il a été entraîné : l'intonation se perd en grande partie. Ce résultat négatif est documenté et indique la suite : entraîner un modèle audio directement sur du son téléphonique.
