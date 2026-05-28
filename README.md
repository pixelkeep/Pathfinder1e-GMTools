# Pathfinder 1e — GM Command

[![Pathfinder 1e](https://img.shields.io/badge/Pathfinder-1st%20Edition-8b1a1a?style=for-the-badge)](https://paizo.com/pathfinderRPG)
[![HTML + CSS + JS](https://img.shields.io/badge/HTML%20%2B%20CSS%20%2B%20JS-no%20framework-2a4a6b?style=for-the-badge)](https://github.com/pixelkeep/Pathfinder1e-GMTools/blob/main/index.html)
[![Offline](https://img.shields.io/badge/Works-Offline-2d5a2d?style=for-the-badge)](#getting-started)
[![License](https://img.shields.io/badge/License-MIT-8b6f3e?style=for-the-badge)](https://github.com/pixelkeep/Pathfinder1e-GMTools/blob/main/LICENSE)

A fully offline GM support tool for Pathfinder 1st Edition. Designed for use at the table — on laptop or tablet, before and during sessions.

**Live demo:** [pixelkeep.github.io/Pathfinder1e-GMTools](https://pixelkeep.github.io/Pathfinder1e-GMTools)  
**Related project:** [pixelkeep/pathfinder1e-sheet](https://github.com/pixelkeep/pathfinder1e-sheet) — Player character sheet

---

## Modules

| Module | Purpose |
|---|---|
| ⚔️ Initiative Tracker | Run combat: turn order, HP, conditions |
| 📖 Monster Quickview | Look up any monster mid-session |
| 🗺️ Encounter Builder | Plan sessions, balance encounters, manage XP |
| 🎭 NPC Tracker | Track named characters, their status and what the party knows |

---

## Getting started

### GitHub Pages
Visit the live link above — no installation or account needed.

### Local
Download `index.html` and `monsters.js`, place them in the same folder, and open `index.html` in any browser. Works without a server.

---

## Files

```
index.html     Main application — all four modules, ~87 KB
monsters.js    Monster database — 3,655 entries from Archives of Nethys, ~3.4 MB
README.md      This file (English)
README.nl.md   Dutch version
```

---

## Features

### ⚔️ Initiative Tracker
- Add combatants with name, type (PC / Enemy / Ally / Summon), initiative bonus, HP, AC, and CON score
- Roll all initiatives at once or enter manually; sort automatically on combat start
- Track HP with damage and healing inputs; auto-detect dying and dead states
- Apply any of the 27 PF1e conditions per combatant (Shaken, Grappled, Dying, Stunned, etc.)
- Combat log with timestamps
- State persists across page reloads via `localStorage`

### 📖 Monster Quickview
- Full offline database: all 3,655 monsters from [Archives of Nethys](https://aonprd.com)
- Search by name or creature type; filter by CR, type, and size
- Complete statblock: AC, HP, saves, attacks, ability scores, BAB/CMB/CMD, feats, skills, languages, special abilities
- **Add to Initiative Tracker** button sends the monster directly into the active combat
- Direct link to the AoN page for full rule text

### 🗺️ Encounter Builder
- Create sessions with a name and date; add multiple encounters per session
- Add monsters via search (all 3,655 AoN entries) or manually with name and CR
- Correct PF1e XP calculation with encounter multipliers (×1 through ×4)
- Difficulty thresholds (Easy / Medium / Hard / Epic) based on actual party composition
- Save multiple parties, each with members, levels, and classes (all 59 AoN classes covered)
- Session overview: total XP, XP per player, status of all encounters at a glance
- **Send to Tracker** imports the full encounter into the Initiative Tracker
- Export and import sessions as JSON

### 🎭 NPC Tracker
- Track named NPCs per encounter or session
- Fields: name, race/type, role, location, CR, status, relationship to party, tags, GM notes (hidden from players), and what the party knows
- Filter by relationship, status, and location
- Flat list view or grouped by location
- Quick-change status bar at the bottom of each NPC (Alive / Dead / Fled / Captured / Unknown)
- Export and import as JSON

---

## Workflow

The sidebar guides the GM through two modes:

**📋 Preparation** — Party → Session → Encounters → NPCs  
**🎲 Play** — Combat → Monsters → NPCs

The **Start Session →** button at the bottom of the sidebar switches modes and opens the Initiative Tracker directly.

---

## Data

`monsters.js` contains all monsters indexed on [aonprd.com](https://aonprd.com): Bestiary 1–6, Monster Codex, NPC Codex, Adventure Path monsters, and all other AoN-indexed sources.

Pathfinder 1e is a closed system (2019) — this database is complete and does not change.

- Ruleset reference: **Archives of Nethys** — [aonprd.com](https://aonprd.com)
- Database source: [c0d3rman/PathfinderMonsterDatabase](https://github.com/c0d3rman/PathfinderMonsterDatabase)

---

## Roadmap

- [ ] Character sheet JSON import — link party data from [pixelkeep/pathfinder1e-sheet](https://github.com/pixelkeep/pathfinder1e-sheet)
- [ ] Grid / location tracker — visual NPC positioning on a map
- [ ] Session notes tab
- [ ] Loot tracker integration

---

## Tech

Pure HTML, CSS and vanilla JavaScript. No build step, no framework, no dependencies.  
Works offline after the initial page load. All data stored locally via `localStorage`.
