# PF1e GM Command

Een volledig offline GM-ondersteuning voor **Pathfinder 1e**, ontworpen voor gebruik tijdens en tussen sessies op laptop of tablet. Alle data is lokaal opgeslagen — geen server, geen internet nodig tijdens het spelen.

**Live:** [pixelkeep.github.io/Pathfinder1e-GMTools](https://pixelkeep.github.io/Pathfinder1e-GMTools)

---

## Bestanden

```
index.html    — Complete GM tool (81 KB), alle vier modules
monsters.js   — Monsterdatabase, 3.655 entries (3,4 MB)
```

Zet beide bestanden in dezelfde map. Meer is niet nodig.

---

## Gebruik

**Lokaal:** Dubbelklik op `index.html` — werkt direct in elke browser, geen server nodig.  
**GitHub Pages:** Upload beide bestanden naar de root van een repository, zet Pages aan via Settings → Pages → Branch: main / root.

---

## Workflow

De tool is opgebouwd rond de natuurlijke voorbereiding en het spel van een GM. Een zijbalk toont genummerde stappen in twee modi:

### 📋 Voorbereidingsmodus
1. **Party** — Maak één of meerdere parties aan met namen, levels en klassen
2. **Sessie** — Geef de sessie een naam, datum en notities
3. **Encounters** — Bouw encounters met monsters, balanceer CR en XP op basis van de party
4. **NPCs** — Bereid personages voor met GM-notities, spelersinformatie en status

### 🎲 Spelmodus
1. **Combat** — Initiative tracker met HP, condities en beurtvolgorde
2. **Monsters** — Volledig statblock opzoeken mid-sessie
3. **NPCs** — Status, locatie en relatie tot de party bijhouden

De knop **"Start sessie →"** onderaan de zijbalk schakelt direct van Prep naar Play en opent de Initiative Tracker.

---

## Modules

### ⚔️ Initiative Tracker
Voeg deelnemers toe met naam, type (PC / Enemy / Ally / Summon), initiative bonus, HP, AC en CON-score. Roll alle initiatives tegelijk of voer ze handmatig in. Start de combat om automatisch te sorteren en beurten door te lopen. Houd HP bij met schade- en healing-invoer, detecteer automatisch dying en dead states, en wijs alle 27 Pathfinder 1e condities toe per deelnemer. Combat log met tijdstempels. Toestand blijft bewaard via localStorage bij het herladen van de pagina.

### 📖 Monster Quickview
Alle 3.655 monsters van Archives of Nethys, volledig offline beschikbaar. Zoek op naam of type, filter op CR, creature type en grootte. Volledig statblock: AC, HP, saves, aanvallen, ability scores, BAB/CMB/CMD, feats, skills, talen en speciale vaardigheden. Met de knop "Voeg toe aan Initiative Tracker" stuur je het monster direct door naar de tracker. Directe link naar de AoN-pagina voor de volledige regeltekst.

### 🗺️ Encounter Builder
Maak sessies aan met naam en datum. Voeg meerdere encounters toe per sessie, dupliceer ze en houd hun status bij (Voorbereid / Actief / Voltooid / Overgeslagen). Voeg monsters toe via de zoekbalk (alle 3.655 AoN-entries) of handmatig met naam en CR. Correcte PF1e XP-berekening met encounter-multipliers. Moeilijkheidsdrempels (Easy / Medium / Hard / Epic) worden berekend op basis van de werkelijke party-samenstelling. Meerdere parties worden ondersteund, elk met eigen leden, levels en klassen. Het sessieoverzicht toont totale XP, XP per speler en de status van alle encounters. Met "Naar Tracker" worden alle monsters en partyleden direct ingeladen in de Initiative Tracker. Export en import als JSON voor back-up of overdracht.

### 🎭 NPC Tracker
Leg named NPCs vast per encounter of sessie. Elke NPC heeft een naam, ras/type, rol, locatie, CR, status (Levend / Dood / Gevlucht / Onbekend / Gevangen), relatie tot de party (Vriend / Neutraal / Vijand / Onbekend / Wisselvallig), tags, GM-notities (verborgen voor spelers) en een veld "wat de party weet". Filter op relatie, status en locatie. Twee lijstweergaven: platte lijst of gegroepeerd per locatie. Snelknoppen voor statuswijziging onderaan het detailvenster. Export en import als JSON.

---

## Data

`monsters.js` bevat alle monsters die geïndexeerd zijn op [aonprd.com](https://aonprd.com): Bestiary 1–6, Monster Codex, NPC Codex, Adventure Path-monsters en alle overige AoN-bronnen. Pathfinder 1e is een afgesloten systeem (2019) — deze database is compleet en verandert niet meer.

Regelreferentie: **Archives of Nethys** — [aonprd.com](https://aonprd.com)  
Databron: [github.com/c0d3rman/PathfinderMonsterDatabase](https://github.com/c0d3rman/PathfinderMonsterDatabase)

---

## Gepland

- Karakterblad JSON-import in de party manager (koppeling met het companion karakterblad-project)
- Grid- / locatietracker voor NPC-positionering op een kaart
- Sessie-notities tabblad
- Koppeling met de loot tracker
