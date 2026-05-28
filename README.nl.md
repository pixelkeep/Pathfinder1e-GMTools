# Pathfinder 1e — GM Command

> Een volledig offline GM-ondersteuning voor Pathfinder 1e.  
> Gebouwd voor gebruik aan tafel — op laptop of tablet, voor en tijdens sessies.

**Live demo:** [pixelkeep.github.io/Pathfinder1e-GMTools](https://pixelkeep.github.io/Pathfinder1e-GMTools)  
**Verwant project:** [pixelkeep/pathfinder1e-sheet](https://github.com/pixelkeep/pathfinder1e-sheet) — Karakterblad voor spelers

---

## Wat het doet

GM Command is een sessie-managementtool die de natuurlijke workflow van een GM volgt — van voorbereiding thuis tot het leiden van combat aan tafel. Het dekt vier gebieden:

| Module | Functie |
|---|---|
| ⚔️ Initiative Tracker | Combat leiden: beurtvolgorde, HP, condities |
| 📖 Monster Quickview | Elk monster opzoeken mid-sessie |
| 🗺️ Encounter Builder | Sessies plannen, encounters balanceren, XP beheren |
| 🎭 NPC Tracker | Named characters bijhouden — status en wat de party weet |

---

## Aan de slag

### GitHub Pages (aanbevolen)
Bezoek gewoon de live link hierboven. Geen installatie, geen account nodig.

### Zelf hosten / lokaal
Download `index.html` en `monsters.js` uit deze repository en zet ze in dezelfde map. Open `index.html` direct in een browser — werkt zonder server.

---

## Bestanden

```
index.html     Hoofdapplicatie — alle modules, ~87 KB
monsters.js    Monsterdatabase — 3.655 entries van Archives of Nethys, ~3,4 MB
README.md      Engelse versie
README.nl.md   Dit bestand (Nederlands)
```

---

## Functies

### ⚔️ Initiative Tracker
- Deelnemers toevoegen: naam, type (PC / Enemy / Ally / Summon), initiative bonus, HP, AC, CON
- Roll alle initiatives tegelijk of voer ze handmatig in
- Automatisch sorteren bij combat start, beurten doorlopen, ronden tellen
- HP bijhouden met schade en healing; automatische dying/dead detectie
- Alle 27 PF1e condities per deelnemer (Shaken, Grappled, Dying, etc.)
- Combat log met tijdstempels
- Toestand opgeslagen in `localStorage` — blijft bewaard bij herladen

### 📖 Monster Quickview
- Volledige offline database: alle 3.655 monsters van [Archives of Nethys](https://aonprd.com)
- Zoeken op naam of type; filteren op CR, creature type en grootte
- Volledig statblock per monster: AC, HP, saves, aanvallen, ability scores, BAB/CMB/CMD, feats, skills, talen, speciale vaardigheden
- "Voeg toe aan Initiative Tracker" stuurt het monster direct naar combat
- Link naar de AoN-pagina voor de volledige regeltekst

### 🗺️ Encounter Builder
- Sessies aanmaken met naam en datum
- Meerdere encounters per sessie — dupliceren, status bijhouden (Voorbereid / Actief / Voltooid / Overgeslagen)
- Monsters toevoegen via zoekbalk (alle 3.655 AoN-entries) of handmatig (naam + CR)
- Correcte PF1e XP-berekening met encounter-multipliers
- Moeilijkheidsdrempels (Easy / Medium / Hard / Epic) berekend op basis van de werkelijke party
- Meerdere opgeslagen parties, elk met leden, levels en klassen (alle 59 AoN-klassen)
- Sessieoverzicht: totale XP, XP per speler, encounter-statussen in één oogopslag
- "Naar Tracker" importeert de volledige encounter in de Initiative Tracker
- Export en import van sessies als JSON

### 🎭 NPC Tracker
- Named NPCs bijhouden per encounter of sessie
- Velden: naam, ras/type, rol, locatie, CR, status, relatie tot de party, tags, GM-notities (verborgen voor spelers) en wat de party weet
- Filteren op relatie, status en locatie
- Lijstweergave of gegroepeerd per locatie
- Snelknoppen voor statuswijziging (Levend / Dood / Gevlucht / Gevangen / Onbekend)
- Export en import als JSON

---

## Workflow

De zijbalk begeleidt de GM door twee modi:

**Voorbereiding** — stappen: Party → Sessie → Encounters → NPCs  
**Spelen** — schakelt naar: Combat → Monsters → NPCs

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
- [ ] Grid / locatietracker — visuele NPC-positionering op een ruimtekaart
- [ ] Sessie-notities tabblad
- [ ] Loot tracker integratie

---

## Techniek

Pure HTML, CSS en vanilla JavaScript. Geen build-stap, geen framework, geen dependencies.  
Werkt offline na de eerste keer laden. Alle data lokaal opgeslagen via `localStorage`.
