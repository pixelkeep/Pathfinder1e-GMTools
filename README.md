# Pathfinder 1e — GM Command

> A fully offline GM support tool for Pathfinder 1st Edition.  
> Built for use at the table — on laptop or tablet, before and during sessions.

**Live demo:** [pixelkeep.github.io/Pathfinder1e-GMTools](https://pixelkeep.github.io/Pathfinder1e-GMTools)  
**Related project:** [pixelkeep/pathfinder1e-sheet](https://github.com/pixelkeep/pathfinder1e-sheet) — Player character sheet

---

## What it does

GM Command is a session-management toolkit that follows the GM's natural workflow — from preparation at home to running combat at the table. It covers four areas:

| Module | Purpose |
|---|---|
| ⚔️ Initiative Tracker | Run combat: turn order, HP, conditions |
| 📖 Monster Quickview | Look up any monster mid-session |
| 🗺️ Encounter Builder | Plan sessions, balance encounters, manage XP |
| 🎭 NPC Tracker | Track named characters, their status and what the party knows |

---

## Getting started

### GitHub Pages (recommended)
Just visit the live link above. No installation, no account needed.

### Self-hosted / local
Download `index.html` and `monsters.js` from this repository and place them in the same folder. Open `index.html` directly in any browser — it works without a server.

---

## Files

```
index.html     Main application — all modules, ~87 KB
monsters.js    Monster database — 3,655 entries from Archives of Nethys, ~3.4 MB
README.md      This file (English)
README.nl.md   Dutch version
```

---

## Features

### ⚔️ Initiative Tracker
- Add combatants: name, type (PC / Enemy / Ally / Summon), initiative bonus, HP, AC, CON
- Roll all initiatives at once or enter manually
- Sort automatically on combat start, step through turns, count rounds
- Track HP with damage and healing; auto-detect dying and dead states
- Apply any of the 27 PF1e conditions per combatant (Shaken, Grappled, Dying, etc.)
- Combat log with timestamps
- State saved in `localStorage` — survives page reloads

### 📖 Monster Quickview
- Full offline database: all 3,655 monsters from [Archives of Nethys](https://aonprd.com)
- Search by name or type; filter by CR, creature type, and size
- Complete statblock per monster: AC, HP, saves, attacks, ability scores, BAB/CMB/CMD, feats, skills, languages, special abilities
- "Add to Initiative Tracker" button sends the monster directly to combat
- Link to the AoN page for full rule text

### 🗺️ Encounter Builder
- Create sessions with name and date
- Multiple encounters per session — duplicate, reorder, track status (Prepared / Active / Completed / Skipped)
- Add monsters via search bar (all 3,655 AoN entries) or manually (name + CR)
- Correct PF1e XP calculation with encounter multipliers
- Difficulty thresholds (Easy / Medium / Hard / Epic) calculated from actual party composition
- Multiple saved parties, each with members, levels and classes (all 59 AoN classes)
- Session overview: total XP, XP per player, encounter statuses at a glance
- "Send to Tracker" imports the full encounter into the Initiative Tracker
- Export and import sessions as JSON

### 🎭 NPC Tracker
- Track named NPCs per encounter or session
- Fields: name, race/type, role, location, CR, status, relationship to party, tags, GM notes (hidden), and what the party knows
- Filter by relationship, status and location
- List view or location-grouped view
- Quick-change status bar (Alive / Dead / Fled / Captured / Unknown)
- Export and import as JSON

---

## Workflow

The sidebar guides the GM through two modes:

**Preparation** — steps through Party → Session → Encounters → NPCs  
**Play** — switches to Combat → Monsters → NPCs

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
- [ ] Grid / location tracker — visual NPC positioning on a room map
- [ ] Session notes tab
- [ ] Loot tracker integration

---

## Tech

Pure HTML, CSS and vanilla JavaScript. No build step, no framework, no dependencies.  
Works offline after initial load. All data stored locally via `localStorage`.
