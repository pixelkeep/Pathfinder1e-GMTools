/**
 * Pathfinder 1e — Monster Quickview
 * 
 * GEBRUIK:
 * 1. Zet monsters.js in dezelfde map als dit bestand
 * 2. Importeer: import { MONSTERS } from './monsters.js'
 * 3. Of gebruik standalone via GitHub Pages (zie README)
 * 
 * Voor GitHub Pages: vervang de import hieronder door een fetch van monsters.js
 */

import { useState, useEffect, useRef, useMemo } from "react";

// ─── In de standalone GitHub Pages versie vervang je dit door:
// const [MONSTERS, setMonsters] = useState([]);
// useEffect(() => { fetch('./monsters.js').then(...) }, []);
// Hier gebruiken we een prop zodat de component herbruikbaar is:

const CREATURE_TYPES = [
  "aberration","animal","construct","dragon","fey","humanoid",
  "magical beast","monstrous humanoid","ooze","outsider","plant",
  "undead","vermin"
];

const SIZES = ["Fine","Diminutive","Tiny","Small","Medium","Large","Huge","Gargantuan","Colossal"];

const ALIGNMENTS = ["LG","NG","CG","LN","N","CN","LE","NE","CE"];

const CR_OPTIONS = ["1/4","1/3","1/2","1","2","3","4","5","6","7","8","9","10",
  "11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"];

// ─── Stat modifier helper ──────────────────────────────────────────────────
function mod(score) {
  if (score == null) return null;
  const m = Math.floor((score - 10) / 2);
  return (m >= 0 ? "+" : "") + m;
}

function sign(n) {
  if (n == null) return "—";
  return (n >= 0 ? "+" : "") + n;
}

// ─── Styles ────────────────────────────────────────────────────────────────
const dark = "#0d0f0e";
const gold = "#c8952a";
const goldDim = "#8B5E3C";
const panel = "#111310";
const border = "#2a2018";
const text = "#d4c5a9";
const muted = "#6a5535";
const dimmed = "#3a2a18";

const S = {
  root: {
    minHeight: "100vh",
    background: dark,
    backgroundImage: `
      radial-gradient(ellipse at 15% 15%, rgba(139,90,43,0.07) 0%, transparent 50%),
      radial-gradient(ellipse at 85% 85%, rgba(180,30,30,0.05) 0%, transparent 50%)
    `,
    fontFamily: "'Crimson Text', Georgia, serif",
    color: text,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "hidden",
  },
  header: {
    background: "linear-gradient(135deg, #1a0e05 0%, #0d0f0e 60%)",
    borderBottom: `1px solid ${border}`,
    padding: "14px 20px",
    display: "flex",
    alignItems: "center",
    gap: 16,
    flexShrink: 0,
  },
  title: {
    fontFamily: "'Cinzel', 'Palatino Linotype', serif",
    fontSize: 18,
    fontWeight: 700,
    color: gold,
    letterSpacing: "0.08em",
    textShadow: `0 0 20px rgba(200,149,42,0.4)`,
  },
  subtitle: { fontSize: 11, color: muted, letterSpacing: "0.15em" },
  countBadge: {
    marginLeft: "auto",
    background: "#1a1208",
    border: `1px solid ${border}`,
    borderRadius: 6,
    padding: "4px 12px",
    fontSize: 11,
    color: muted,
    fontFamily: "inherit",
  },
  body: {
    display: "flex",
    flex: 1,
    overflow: "hidden",
  },
  // Left sidebar — search + list
  sidebar: {
    width: 300,
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    borderRight: `1px solid ${border}`,
    background: "#0f1110",
    overflow: "hidden",
  },
  searchWrap: {
    padding: "12px 14px",
    borderBottom: `1px solid ${border}`,
    background: "#0d0f0e",
  },
  searchInput: {
    width: "100%",
    background: "#0a0c0b",
    border: `1px solid ${border}`,
    borderRadius: 8,
    padding: "8px 12px",
    color: text,
    fontFamily: "'Crimson Text', Georgia, serif",
    fontSize: 15,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.15s",
  },
  filterRow: {
    padding: "8px 14px",
    borderBottom: `1px solid ${border}`,
    display: "flex",
    gap: 6,
    flexWrap: "wrap",
    background: "#0d0f0e",
  },
  filterSelect: {
    background: "#0a0c0b",
    border: `1px solid ${border}`,
    borderRadius: 5,
    padding: "4px 8px",
    color: muted,
    fontFamily: "inherit",
    fontSize: 11,
    outline: "none",
    cursor: "pointer",
    flex: 1,
    minWidth: 70,
  },
  monsterList: {
    flex: 1,
    overflowY: "auto",
    padding: "6px 0",
  },
  monsterItem: {
    padding: "8px 14px",
    cursor: "pointer",
    borderLeft: "3px solid transparent",
    transition: "all 0.1s",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  monsterItemActive: {
    background: "rgba(200,149,42,0.08)",
    borderLeftColor: gold,
  },
  monsterItemHover: {
    background: "rgba(255,255,255,0.02)",
  },
  crBadge: {
    fontSize: 10,
    fontFamily: "'Cinzel', serif",
    padding: "1px 5px",
    borderRadius: 3,
    background: "#1a1208",
    border: `1px solid ${border}`,
    color: gold,
    flexShrink: 0,
    minWidth: 28,
    textAlign: "center",
  },
  monsterName: {
    fontSize: 13,
    color: text,
    flex: 1,
    fontFamily: "'Cinzel', serif",
    letterSpacing: "0.03em",
  },
  monsterType: {
    fontSize: 10,
    color: dimmed,
    fontStyle: "italic",
  },
  resultCount: {
    padding: "6px 14px",
    fontSize: 11,
    color: dimmed,
    borderBottom: `1px solid ${border}`,
    background: "#0d0f0e",
  },
  // Detail panel
  detail: {
    flex: 1,
    overflowY: "auto",
    padding: "20px 24px",
  },
  empty: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: dimmed,
    textAlign: "center",
  },
  emptyIcon: { fontSize: 48, marginBottom: 16, opacity: 0.4 },
  emptyText: { fontFamily: "'Cinzel', serif", fontSize: 14, letterSpacing: "0.1em" },
  emptyHint: { fontSize: 12, marginTop: 8, color: "#2a1e10" },
  // Statblock
  statName: {
    fontFamily: "'Cinzel', serif",
    fontSize: 22,
    color: gold,
    letterSpacing: "0.06em",
    marginBottom: 2,
  },
  statMeta: {
    fontSize: 13,
    color: muted,
    marginBottom: 4,
    fontStyle: "italic",
  },
  statCR: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: "#1e1508",
    border: `1px solid ${goldDim}`,
    borderRadius: 6,
    padding: "3px 10px",
    marginBottom: 12,
  },
  statCRLabel: { fontSize: 11, color: muted, textTransform: "uppercase", letterSpacing: "0.12em" },
  statCRValue: { fontFamily: "'Cinzel', serif", fontSize: 16, color: gold },
  desc: {
    fontSize: 13,
    color: "#8a7a5a",
    fontStyle: "italic",
    lineHeight: 1.5,
    marginBottom: 14,
    paddingBottom: 14,
    borderBottom: `1px solid ${border}`,
  },
  divider: {
    height: 1,
    background: `linear-gradient(90deg, transparent, ${border}, transparent)`,
    margin: "12px 0",
  },
  sectionLabel: {
    fontSize: 11,
    color: goldDim,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    marginBottom: 6,
    fontFamily: "'Cinzel', serif",
  },
  statGrid: {
    display: "grid",
    gap: 8,
    marginBottom: 12,
  },
  statRow: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap",
  },
  statBox: {
    background: "#0d0f0e",
    border: `1px solid ${border}`,
    borderRadius: 6,
    padding: "6px 10px",
    textAlign: "center",
    minWidth: 56,
  },
  statBoxLabel: { fontSize: 9, color: muted, letterSpacing: "0.12em", textTransform: "uppercase" },
  statBoxValue: { fontFamily: "'Cinzel', serif", fontSize: 16, color: text, lineHeight: 1.2 },
  statBoxMod: { fontSize: 10, color: muted },
  inlineRow: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
    marginBottom: 8,
    fontSize: 13,
  },
  inlineLabel: { color: muted, fontSize: 12, marginRight: 4 },
  inlineVal: { color: text },
  pill: {
    display: "inline-block",
    padding: "2px 8px",
    borderRadius: 4,
    background: "#1a1508",
    border: `1px solid ${border}`,
    fontSize: 11,
    color: "#9a8a6a",
    marginRight: 4,
    marginBottom: 3,
  },
  attackBlock: {
    background: "#0d0f0e",
    border: `1px solid ${border}`,
    borderRadius: 6,
    padding: "8px 12px",
    fontSize: 13,
    color: text,
    lineHeight: 1.6,
    marginBottom: 8,
    fontFamily: "'Courier New', monospace",
    fontSize: 12,
  },
  specialBlock: {
    background: "#0d0f0e",
    border: `1px solid #2a1818`,
    borderRadius: 6,
    padding: "8px 12px",
    fontSize: 12,
    color: "#9a8070",
    lineHeight: 1.6,
    marginBottom: 6,
  },
  sourceTag: {
    fontSize: 11,
    color: "#4a3a28",
    fontStyle: "italic",
    marginTop: 8,
  },
  addToCombatBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "linear-gradient(135deg, #1e2a1e, #141e14)",
    border: "1px solid #3a5a3a",
    borderRadius: 8,
    padding: "10px 18px",
    color: "#7ab87a",
    fontFamily: "'Cinzel', serif",
    fontSize: 12,
    letterSpacing: "0.08em",
    cursor: "pointer",
    marginBottom: 16,
    transition: "all 0.15s",
  },
  aonLink: {
    fontSize: 11,
    color: "#4a6a8a",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    marginLeft: 12,
  },
};

// ─── Stat Box ──────────────────────────────────────────────────────────────
function StatBox({ label, value, modifier }) {
  return (
    <div style={S.statBox}>
      <div style={S.statBoxLabel}>{label}</div>
      <div style={S.statBoxValue}>{value ?? "—"}</div>
      {modifier !== undefined && <div style={S.statBoxMod}>{modifier}</div>}
    </div>
  );
}

// ─── Monster Detail ────────────────────────────────────────────────────────
function MonsterDetail({ monster, onAddToCombat }) {
  if (!monster) {
    return (
      <div style={S.empty}>
        <div style={S.emptyIcon}>📖</div>
        <div style={S.emptyText}>Selecteer een monster</div>
        <div style={S.emptyHint}>Zoek op naam, type of CR om te beginnen</div>
      </div>
    );
  }

  const m = monster;
  const hasSaves = m.fort != null || m.ref != null || m.will != null;
  const hasAbilities = m.str != null || m.dex != null || m.con != null;

  return (
    <div>
      {/* Name & meta */}
      <div style={S.statName}>{m.name}</div>
      <div style={S.statMeta}>
        {[m.alignment, m.size, m.type].filter(Boolean).join(" ")}
      </div>

      {/* CR / XP / Init row */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
        <div style={S.statCR}>
          <span style={S.statCRLabel}>CR</span>
          <span style={S.statCRValue}>{m.cr}</span>
        </div>
        {m.xp != null && (
          <div style={{ ...S.statCR, borderColor: border }}>
            <span style={S.statCRLabel}>XP</span>
            <span style={{ ...S.statCRValue, fontSize: 14, color: muted }}>{m.xp.toLocaleString()}</span>
          </div>
        )}
        <div style={{ ...S.statCR, borderColor: border }}>
          <span style={S.statCRLabel}>Init</span>
          <span style={{ ...S.statCRValue, fontSize: 14, color: muted }}>{sign(m.init)}</span>
        </div>
      </div>

      {/* Add to combat */}
      <button style={S.addToCombatBtn} onClick={() => onAddToCombat(m)}>
        ⚔️ Voeg toe aan Initiative Tracker
      </button>

      {/* Description */}
      {m.desc && <div style={S.desc}>{m.desc}</div>}

      {/* Defense */}
      <div style={S.sectionLabel}>Defensie</div>
      <div style={S.statRow}>
        <StatBox label="AC" value={m.ac} />
        <StatBox label="Touch" value={m.touch} />
        <StatBox label="Flat-F" value={m.ff} />
        <StatBox label="HP" value={m.hp} />
      </div>
      {m.hd && <div style={{ fontSize: 11, color: dimmed, marginTop: 4, marginBottom: 8 }}>HD: {m.hd}</div>}
      {hasSaves && (
        <div style={{ ...S.statRow, marginBottom: 8 }}>
          <StatBox label="Fort" value={sign(m.fort)} />
          <StatBox label="Ref" value={sign(m.ref)} />
          <StatBox label="Will" value={sign(m.will)} />
          {m.sr && <StatBox label="SR" value={m.sr} />}
        </div>
      )}
      {m.immunities && (
        <div style={{ marginBottom: 6 }}>
          <span style={S.inlineLabel}>Immuniteiten:</span>
          <span style={S.inlineVal}>{m.immunities}</span>
        </div>
      )}
      {m.resistances && (
        <div style={{ marginBottom: 6 }}>
          <span style={S.inlineLabel}>Resistanties:</span>
          <span style={S.inlineVal}>{m.resistances}</span>
        </div>
      )}

      <div style={S.divider} />

      {/* Offense */}
      <div style={S.sectionLabel}>Aanvallen</div>
      {m.speed && (
        <div style={{ marginBottom: 8 }}>
          <span style={S.inlineLabel}>Snelheid:</span>
          <span style={S.inlineVal}>{m.speed}</span>
        </div>
      )}
      {m.attacks && (
        <div style={S.attackBlock}>
          {m.attacks.split("; ").map((atk, i) => (
            <div key={i}>{atk}</div>
          ))}
        </div>
      )}

      <div style={S.divider} />

      {/* Ability scores */}
      {hasAbilities && (
        <>
          <div style={S.sectionLabel}>Eigenschappen</div>
          <div style={S.statRow}>
            {[["STR", m.str], ["DEX", m.dex], ["CON", m.con], ["INT", m.int], ["WIS", m.wis], ["CHA", m.cha]].map(([label, val]) => (
              <StatBox key={label} label={label} value={val ?? "—"} modifier={val != null ? mod(val) : undefined} />
            ))}
          </div>
          <div style={{ ...S.statRow, marginTop: 8, marginBottom: 8 }}>
            {m.bab != null && <StatBox label="BAB" value={sign(m.bab)} />}
            {m.cmb != null && <StatBox label="CMB" value={sign(m.cmb)} />}
            {m.cmd != null && <StatBox label="CMD" value={m.cmd} />}
          </div>
          <div style={S.divider} />
        </>
      )}

      {/* Senses */}
      {m.senses && (
        <div style={{ marginBottom: 8 }}>
          <span style={S.inlineLabel}>Zintuigen:</span>
          <span style={{ ...S.inlineVal, fontSize: 13 }}>{m.senses}</span>
        </div>
      )}

      {/* Languages */}
      {m.languages && (
        <div style={{ marginBottom: 8 }}>
          <span style={S.inlineLabel}>Talen:</span>
          <span style={{ ...S.inlineVal, fontSize: 13 }}>{m.languages}</span>
        </div>
      )}

      {/* Feats */}
      {m.feats && (
        <div style={{ marginBottom: 8 }}>
          <span style={S.inlineLabel}>Feats:</span>
          <span style={{ ...S.inlineVal, fontSize: 13 }}>{m.feats}</span>
        </div>
      )}

      {/* Skills */}
      {m.skills && (
        <div style={{ marginBottom: 8 }}>
          <span style={S.inlineLabel}>Skills:</span>
          <span style={{ ...S.inlineVal, fontSize: 13 }}>{m.skills}</span>
        </div>
      )}

      {/* SQ */}
      {m.sq && (
        <div style={{ marginBottom: 8 }}>
          <span style={S.inlineLabel}>Bijzondere kwaliteiten:</span>
          <span style={{ ...S.inlineVal, fontSize: 13 }}>{m.sq}</span>
        </div>
      )}

      {/* Special abilities */}
      {m.special && (
        <>
          <div style={S.divider} />
          <div style={S.sectionLabel}>Speciale Vaardigheden</div>
          {m.special.split("; ").map((sa, i) => (
            <div key={i} style={S.specialBlock}>{sa}</div>
          ))}
        </>
      )}

      {/* Source + AoN link */}
      <div style={{ ...S.divider, marginTop: 16 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {m.source && <div style={S.sourceTag}>Bron: {m.source}</div>}
        <a href={m.url} target="_blank" rel="noopener noreferrer" style={S.aonLink}>
          🔗 Archives of Nethys ↗
        </a>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────
export default function MonsterQuickview({ monsters = [], onAddToCombat }) {
  const [query, setQuery] = useState("");
  const [filterCR, setFilterCR] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterSize, setFilterSize] = useState("");
  const [selected, setSelected] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const searchRef = useRef(null);

  // Focus search on mount
  useEffect(() => { searchRef.current?.focus(); }, []);

  // Filter logic
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return monsters.filter(m => {
      if (q && !m.name.toLowerCase().includes(q) && !m.type?.toLowerCase().includes(q)) return false;
      if (filterCR && m.cr !== filterCR) return false;
      if (filterType && m.type !== filterType) return false;
      if (filterSize && m.size !== filterSize) return false;
      return true;
    }).slice(0, 200); // cap for perf
  }, [monsters, query, filterCR, filterType, filterSize]);

  function handleAdd(m) {
    if (onAddToCombat) {
      onAddToCombat({
        name: m.name,
        type: "Enemy",
        initBonus: m.init || 0,
        hpMax: m.hp || 0,
        ac: m.ac || 10,
        conScore: m.con || 10,
      });
    }
  }

  const clearFilters = filterCR || filterType || filterSize || query;

  return (
    <div style={S.root}>
      {/* Header */}
      <div style={S.header}>
        <div>
          <div style={S.title}>📖 MONSTER QUICKVIEW</div>
          <div style={S.subtitle}>Pathfinder 1e · {monsters.length.toLocaleString()} monsters</div>
        </div>
        <div style={S.countBadge}>
          Volledig offline · Archives of Nethys data
        </div>
      </div>

      <div style={S.body}>
        {/* Left sidebar */}
        <div style={S.sidebar}>
          {/* Search */}
          <div style={S.searchWrap}>
            <input
              ref={searchRef}
              style={S.searchInput}
              placeholder="Zoek op naam of type..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div style={S.filterRow}>
            <select style={S.filterSelect} value={filterCR} onChange={e => setFilterCR(e.target.value)}>
              <option value="">CR</option>
              {CR_OPTIONS.map(cr => <option key={cr} value={cr}>CR {cr}</option>)}
            </select>
            <select style={S.filterSelect} value={filterType} onChange={e => setFilterType(e.target.value)}>
              <option value="">Type</option>
              {CREATURE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <select style={S.filterSelect} value={filterSize} onChange={e => setFilterSize(e.target.value)}>
              <option value="">Size</option>
              {SIZES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          {/* Result count + clear */}
          <div style={{ ...S.resultCount, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>{filtered.length}{filtered.length === 200 ? "+" : ""} resultaten</span>
            {clearFilters && (
              <span style={{ cursor: "pointer", color: muted }}
                onClick={() => { setQuery(""); setFilterCR(""); setFilterType(""); setFilterSize(""); }}>
                ✕ wis
              </span>
            )}
          </div>

          {/* Monster list */}
          <div style={S.monsterList}>
            {filtered.map((m) => (
              <div
                key={m.name + m.source}
                style={{
                  ...S.monsterItem,
                  ...(selected?.name === m.name && selected?.source === m.source ? S.monsterItemActive : {}),
                  ...(hoveredId === (m.name + m.source) && selected?.name !== m.name ? S.monsterItemHover : {}),
                }}
                onClick={() => setSelected(m)}
                onMouseEnter={() => setHoveredId(m.name + m.source)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <span style={S.crBadge}>{m.cr}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ ...S.monsterName, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {m.name}
                  </div>
                  <div style={S.monsterType}>{m.size} {m.type}</div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div style={{ padding: "32px 14px", textAlign: "center", color: dimmed, fontSize: 13 }}>
                Geen monsters gevonden
              </div>
            )}
          </div>
        </div>

        {/* Detail panel */}
        <div style={S.detail}>
          <MonsterDetail
            monster={selected}
            onAddToCombat={handleAdd}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Standalone wrapper voor GitHub Pages ─────────────────────────────────
// Gebruik dit als je index.html zonder bundler wil:
//
// export function StandaloneApp() {
//   const [monsters, setMonsters] = useState([]);
//   useEffect(() => {
//     fetch('./monsters.js')
//       .then(r => r.text())
//       .then(text => {
//         // strip "export const MONSTERS = " en trailing ";"
//         const json = text.replace(/^[^[]+/, '').replace(/;\s*export[^$]*$/, '');
//         setMonsters(JSON.parse(json));
//       });
//   }, []);
//   return <MonsterQuickview monsters={monsters} />;
// }
