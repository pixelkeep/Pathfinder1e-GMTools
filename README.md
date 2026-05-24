# PF1e GM Command

Volledig offline GM support tool voor **Pathfinder 1e**.  
Regelset: **Archives of Nethys** (aonprd.com) — alle officiële en geïndexeerde bronnen.

## Bestanden

```
/
├── index.html     ← Complete GM tool (75 KB) — alle drie modules
└── monsters.js    ← 3.655 monsters database (3.4 MB) — volledig AoN
```

Alleen deze twee bestanden nodig. Zet ze in dezelfde map.

## Gebruik

**Lokaal:** Dubbelklik `index.html` — werkt direct, geen server nodig.  
**GitHub Pages:** Upload beide bestanden → Settings → Pages → main / root → Save.  
**URL:** `https://jouwusername.github.io/pf1e-gm-tool`

## Modules

### ⚔️ Initiative Tracker
- Deelnemers toevoegen: naam, type (PC/Enemy/Ally/Summon), init bonus, HP, AC, CON
- Roll All initiatives in één klik
- Combat starten → automatisch sorteren, beurt bijhouden, ronde tellen
- HP bijhouden met schade/healing, dying/dead detectie
- Alle 27 PF1e condities (Shaken, Grappled, Dying, etc.)
- Combat log met timestamps
- Opgeslagen in localStorage — staat bewaard bij herladen

### 📖 Monster Quickview
- Alle 3.655 monsters uit Archives of Nethys — volledig offline
- Zoeken op naam of type, filteren op CR / creature type / size
- Volledig statblock: AC, HP, saves, aanvallen, ability scores, BAB/CMB/CMD,
  feats, skills, talen, special abilities
- "Voeg toe aan Initiative Tracker" — switcht tab en vult alles in
- Link naar AoN pagina voor volledige regeltekst

### 🗺️ Encounter Builder
- Meerdere **sessies** aanmaken met naam en datum
- Meerdere **encounters** per sessie (dupliceren, status bijhouden)
- Monsters toevoegen via zoekbalk (alle 3.655) of handmatig (naam + CR)
- Correcte PF1e XP berekening met encounter multipliers
- Moeilijkheidsdrempels (Easy / Medium / Hard / Epic) op basis van party level
- Meerdere **parties** opslaan — elk met leden, levels en klassen (alle AoN klassen)
- Sessieoverzicht: totaal XP, XP per speler, encounter statussen
- "Naar Tracker" — stuurt alle monsters + party naar Initiative Tracker
- Export / Import als JSON — voor backup of overdracht

## Data

`monsters.js` bevat alle monsters van aonprd.com: Bestiary 1-6, Monster Codex,
NPC Codex, Adventure Path monsters, en alle overige AoN-geïndexeerde bronnen.
PF1e is gesloten (2019) — deze database is compleet en statisch.

Gegenereerd via: github.com/c0d3rman/PathfinderMonsterDatabase

## Volgende modules (gepland)
- NPC Tracker — named NPCs, status, locatie, relatie tot party
- Sessie-notities — vrije tekst, quest hooks, recap
- Karakterblad koppeling — party importeren vanuit PF1e character sheet JSON
