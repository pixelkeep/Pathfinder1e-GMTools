# PF1e GM Tool

Pathfinder 1e GM Support Tool — volledig offline, draait op GitHub Pages.

## Bestanden

```
/
├── index.html          ← Hoofdpagina (Initiative Tracker + Monster Quickview)
├── monsters.js         ← 3655 monsters database (gegenereerd uit data.json)
├── GMTool.jsx          ← Initiative Tracker component
└── MonsterQuickview.jsx ← Monster Quickview component
```

## GitHub Pages setup (eenmalig)

1. Maak een **nieuw GitHub repository** aan (bijv. `pf1e-gm-tool`)
2. Upload alle bestanden hierboven naar de repo
3. Ga naar **Settings → Pages → Source: main branch / root**
4. Jouw tool is live op: `https://jouwusername.github.io/pf1e-gm-tool`

## Lokaal testen (Windows)

Rechtsklik op de map → **Open in Terminal** → typ:
```
python -m http.server 8080
```
Ga dan naar `http://localhost:8080` in je browser.

> **Let op:** Direct openen als bestand (`file://`) werkt niet vanwege browser security.  
> Je hebt altijd een kleine lokale server nodig, of GitHub Pages.

## Data

De `monsters.js` bevat alle 3655 monsters uit **Archives of Nethys** voor Pathfinder 1e.  
PF1e is gesloten (2019) — deze database is compleet en verandert niet meer.

Gegenereerd via: [c0d3rman/PathfinderMonsterDatabase](https://github.com/c0d3rman/PathfinderMonsterDatabase)
