# PF1e GM Command

A fully offline GM support tool for **Pathfinder 1e**, designed for use during and between sessions on laptop or tablet. All data is local — no server, no internet required during play.

**Live:** [pixelkeep.github.io/Pathfinder1e-GMTools](https://pixelkeep.github.io/Pathfinder1e-GMTools)

---

## Files

```
index.html    — Complete GM tool (81 KB), all four modules
monsters.js   — Monster database, 3,655 entries (3.4 MB)
```

Place both files in the same folder. That's it.

---

## Usage

**Local:** Double-click `index.html` — works directly in any browser, no server needed.  
**GitHub Pages:** Upload both files to a repository root, enable Pages under Settings → Pages → Branch: main / root.

---

## Workflow

The tool is structured around the GM's natural workflow, with a sidebar showing numbered steps and two modes:

### 📋 Preparation mode
1. **Party** — Create one or more parties with player names, levels and classes
2. **Session** — Name your session, set a date, write notes
3. **Encounters** — Build encounters with monsters, balance CR and XP per party
4. **NPCs** — Prepare named characters with GM notes, player-facing info and status

### 🎲 Play mode
1. **Combat** — Initiative tracker with HP, conditions and turn order
2. **Monsters** — Full statblock lookup mid-session
3. **NPCs** — Track status, location and relationship to the party

The **"Start Session →"** button at the bottom of the sidebar switches directly from Prep to Play mode and opens the Initiative Tracker.

---

## Modules

### ⚔️ Initiative Tracker
Add combatants with name, type (PC / Enemy / Ally / Summon), initiative bonus, HP, AC and CON score. Roll all initiatives at once or enter manually. Start combat to sort automatically and step through turns. Track HP with damage and healing inputs, detect dying and dead states, apply any of the 27 Pathfinder 1e conditions per combatant. Combat log with timestamps. State persists across page reloads via localStorage.

### 📖 Monster Quickview
All 3,655 monsters from Archives of Nethys, fully offline. Search by name or type, filter by CR, creature type and size. Full statblock: AC, HP, saves, attacks, ability scores, BAB/CMB/CMD, feats, skills, languages, special abilities. "Add to Initiative Tracker" button sends the monster directly to the tracker tab. Direct link to the AoN page for full rule text.

### 🗺️ Encounter Builder
Create sessions with a name and date. Add multiple encounters per session, duplicate them, track their status (Prepared / Active / Completed / Skipped). Add monsters via the search bar (all 3,655 AoN entries) or manually with a name and CR. Correct PF1e XP calculation with encounter multipliers. Difficulty thresholds (Easy / Medium / Hard / Epic) calculated from actual party composition. Multiple parties supported, each with their own members, levels and classes. Session overview shows total XP, XP per player and all encounter statuses. "Send to Tracker" imports all monsters and party members into the Initiative Tracker. Export and import as JSON for backup or transfer.

### 🎭 NPC Tracker
Track named NPCs per encounter or session. Each NPC has a name, race/type, role, location, CR, status (Alive / Dead / Fled / Unknown / Captured), relationship to the party (Friend / Neutral / Enemy / Unknown / Erratic), tags, GM notes (hidden from players) and a "what the party knows" field. Filter by relationship, status and location. Two list views: flat list or grouped by location. Quick-change status bar at the bottom of the detail panel. Export and import as JSON.

---

## Data

`monsters.js` contains all monsters indexed on [aonprd.com](https://aonprd.com): Bestiary 1–6, Monster Codex, NPC Codex, Adventure Path monsters and all other AoN-indexed sources. Pathfinder 1e is a closed system (2019) — this database is complete and static.

Ruleset reference: **Archives of Nethys** — [aonprd.com](https://aonprd.com)  
Database source: [github.com/c0d3rman/PathfinderMonsterDatabase](https://github.com/c0d3rman/PathfinderMonsterDatabase)

---

## Planned

- Character sheet JSON import into party manager (link with companion character sheet project)
- Grid / location tracker for NPC positioning on a map
- Session notes tab
- Loot tracker integration
