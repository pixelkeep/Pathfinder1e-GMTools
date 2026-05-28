# Pathfinder 1e — GM Command

[![Pathfinder 1e](https://img.shields.io/badge/Pathfinder-1e%20Editie-8b1a1a?style=for-the-badge)](https://paizo.com/pathfinderRPG)
[![HTML + CSS + JS](https://img.shields.io/badge/HTML%20%2B%20CSS%20%2B%20JS-geen%20framework-2a4a6b?style=for-the-badge)](https://github.com/pixelkeep/Pathfinder1e-GMTools/blob/main/index.html)
[![Offline](https://img.shields.io/badge/Werkt-Offline-2d5a2d?style=for-the-badge)](#aan-de-slag)
[![Licentie](https://img.shields.io/badge/Licentie-MIT-8b6f3e?style=for-the-badge)](https://github.com/pixelkeep/Pathfinder1e-GMTools/blob/main/LICENSE)

Een volledig offline GM-ondersteuning voor Pathfinder 1e. Gebouwd voor gebruik aan tafel — op laptop of tablet, voor en tijdens sessies.

**Live demo:** [pixelkeep.github.io/Pathfinder1e-GMTools](https://pixelkeep.github.io/Pathfinder1e-GMTools)  
**Verwant project:** [pixelkeep/pathfinder1e-sheet](https://github.com/pixelkeep/pathfinder1e-sheet) — Karakterblad voor spelers

---

## Modules

| Module | Functie |
|---|---|
| ⚔️ Initiative Tracker | Combat leiden: beurtvolgorde, HP, condities |
| 📖 Monster Quickview | Elk monster opzoeken mid-sessie |
| 🗺️ Encounter Builder | Sessies plannen, encounters balanceren, XP beheren |
| 🎭 NPC Tracker | Named characters bijhouden — status en wat de party weet |

---

## Aan de slag

### GitHub Pages
Bezoek de live link hierboven — geen installatie of account nodig.

### Lokaal
Download `index.html` en `monsters.js`, zet ze in dezelfde map en open `index.html` in een browser. Werkt zonder server.

---

## Bestanden

```
index.html     Hoofdapplicatie — alle vier modules, ~87 KB
monsters.js    Monsterdatabase — 3.655 entries van Archives of Nethys, ~3,4 MB
README.md      Engelse versie
README.nl.md   Dit bestand (Nederlands)
```

---

## Functies

### ⚔️ Initiative Tracker
- Deelnemers toevoegen met naam, type (PC / Enemy / Ally / Summon), initiative bonus, HP, AC en CON
- Roll alle initiatives tegelijk of voer ze handmatig in; automatisch sorteren bij combat start
- HP bijhouden met schade en healing; automatische dying/dead detectie
- Alle 27 PF1e condities per deelnemer (Shaken, Grappled, Dying, Stunned, etc.)
- Combat log met tijdstempels
- Toestand opgeslagen via `localStorage` — blijft bewaard bij herladen

### 📖 Monster Quickview
- Volledige offline database: alle 3.655 monsters van [Archives of Nethys](https://aonprd.com)
- Zoeken op naam of type; filteren op CR, creature type en grootte
- Volledig statblock: AC, HP, saves, aanvallen, ability scores, BAB/CMB/CMD, feats, skills, talen, speciale vaardigheden
- **Voeg toe aan Initiative Tracker** stuurt het monster direct naar de actieve combat
- Link naar de AoN-pagina voor de volledige regeltekst

### 🗺️ Encounter Builder
- Sessies aanmaken met naam en datum; meerdere encounters per sessie
- Monsters toevoegen via zoekbalk (alle 3.655 AoN-entries) of handmatig met naam en CR
- Correcte PF1e XP-berekening met encounter-multipliers (×1 t/m ×4)
- Moeilijkheidsdrempels (Easy / Medium / Hard / Epic) op basis van de werkelijke party
- Meerdere opgeslagen parties met leden, levels en klassen (alle 59 AoN-klassen)
- Sessieoverzicht: totale XP, XP per speler, encounter-statussen in één oogopslag
- **Naar Tracker** importeert de volledige encounter in de Initiative Tracker
- Export en import van sessies als JSON

### 🎭 NPC Tracker
- Named NPCs bijhouden per encounter of sessie
- Velden: naam, ras/type, rol, locatie, CR, status, relatie tot party, tags, GM-notities (verborgen voor spelers) en wat de party weet
- Filteren op relatie, status en locatie
- Platte lijst of gegroepeerd per locatie
- Snelknoppen voor statuswijziging (Levend / Dood / Gevlucht / Gevangen / Onbekend)
- Export en import als JSON

---

## Workflow

De zijbalk begeleidt de GM door twee modi:

**📋 Voorbereiding** — Party → Sessie → Encounters → NPCs  
**🎲 Spelen** — Combat → Monsters → NPCs

De knop **Start sessie →** onderaan de zijbalk wisselt van modus en opent de Initiative Tracker direct.

---

## Data

`monsters.js` bevat alle monsters die geïndexeerd zijn op [aonprd.com](https://aonprd.com): Bestiary 1–6, Monster Codex, NPC Codex, Adventure Path-monsters en alle overige AoN-bronnen.

Pathfinder 1e is een afgesloten systeem (2019) — deze database is compleet en verandert niet meer.

- Regelreferentie: **Archives of Nethys** — [aonprd.com](https://aonprd.com)
- Databron: [c0d3rman/PathfinderMonsterDatabase](https://github.com/c0d3rman/PathfinderMonsterDatabase)

---

## Roadmap

- [ ] Karakterblad JSON-import — party-data koppelen vanuit [pixelkeep/pathfinder1e-sheet](https://github.com/pixelkeep/pathfinder1e-sheet)
- [ ] Grid / locatietracker — visuele NPC-positionering op een kaart
- [ ] Sessie-notities tabblad
- [ ] Loot tracker integratie

---

## Techniek

Pure HTML, CSS en vanilla JavaScript. Geen build-stap, geen framework, geen dependencies.  
Werkt offline na de eerste keer laden. Alle data lokaal opgeslagen via `localStorage`.
