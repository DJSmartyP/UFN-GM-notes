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


## v7 mechanics width fix
GM reference notes now always span the full Special Mechanisms grid, regardless of viewport height or landscape/tablet breakpoints. This fixes the half-width reference card visible on taller landscape devices. Actual action controls can still use multiple columns later.


## v9 - Custom DB + Player Mechanics

- Wired the complete mission-specific custom DB handoff into the database browser: 66 pages across OP02, OP04, OP06, OP07, OP08, OP09, OP10, OP11 and OP12.
- Database browsing is page-first with mission-local search, folder filters, one-tap readers, and Previous/Next page navigation.
- Added a dedicated Player Mechanics section using station-labelled tiles.
- OP04 Bright Minds now includes the Signal Tracer player mechanic for Relay.
- Missions with no supplied player mechanics show an explicit empty state ready for later content.
- Cache version bumped to v9.
