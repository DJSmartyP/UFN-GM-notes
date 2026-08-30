# UFN GM Mobile Companion

Phone-first GM companion for UFN / EmptyEpsilon missions.

## Mission groups

### UFN Operations
- OP01 — Operation: Narrow Gate
- OP02 — Operation: Among Ghosts
- OP03 — Operation: Groundhog
- OP04 — Operation: Bright Minds
- OP05 — Operation: Thin Ice
- OP06 — Operation: Common Ground
- OP07 — Operation: Counterfeit
- OP08 — Operation: Evaluation
- OP09 — Operation: Sentience
- OP10 — Operation: Patchwork
- OP11 — Operation: Resonance
- OP12 — Operation: Continuum

### Light and Dark Campaign
- LD01 — Into The Darkness
- LD02 — Wormhole Wandering
- LD03 — The Bargain
- LD04 — The Last Aegis
- LD05 — Shadowfall
- LD06 — Out Of The Light

The LD mission art is intentionally not included yet. The UI displays an LD code placeholder until final artwork is supplied.

## Current mission page
1. Mission Synopsis — canonical GM recap supplied for each mission.
2. Special Mechanisms — canonical GM reference note supplied for each mission.
3. Mission Database — primary working area, ready for the actual database pages.

Special-mechanic descriptions are presented as reference cards rather than fake buttons. Live GM controls can later be added as action entries without restructuring the page.

## Content source
The mission synopsis and special-mechanics wording in `data/missions.js` is the current authoritative GM copy supplied for this build. It replaces the earlier generated recap text.


## v6 landscape fix
Mission pages no longer split Story Recap and Special Mechanisms into half-width landscape columns. Recap, mechanics and database now remain full-width and stacked, with mechanics compacted for short landscape screens.
