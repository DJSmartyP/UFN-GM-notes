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

LD01-LD06 mission artwork is included in the Light and Dark Campaign tiles.

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


## v10 - Player Mechanics source scan

- Added OP01-OP12 and LD01-LD06 player-facing station mechanics from the canonical Lua source scan supplied by the GM.
- SO01 / The Tortuga Run is intentionally excluded.
- Replaced the earlier Bright Minds Signal Tracer placeholder with the canonical Science Signal Trace / Transport Reversal entries.
- Common Call FC and standard H.I.D.E.S mechanics are inherited across the applicable mission set; missions with explicit local/legacy intrusion controls use those mission-specific variants.
- Cache version bumped to v10.


## v11
- LD01-LD06 mission artwork loaded into the Light and Dark Campaign mission tiles.
- Cache version bumped to v11.


## v12 - Mission-specific Player Mechanics only

- Removed Call FC from Player Mechanics because it is part of the generic ship package.
- Removed all H.I.D.E.S / intrusion-clear tiles, including local and legacy variants, because they are generic rather than mission-specific.
- Re-audited the supplied source list and restored mission-specific LD03 and LD04 player mechanics that were missing from the prior build.
- Player Mechanics now contains 55 mission-specific entries across OP01-OP12 and LD01-LD06.
- SO01 / The Tortuga Run remains excluded.
- Cache version bumped to v12.


## v13 - Installable database app icon

- Added a dedicated UFN GM Mission Database icon designed to remain recognisable at small launcher sizes.
- Added 192px and 512px standard PWA icons.
- Added 192px and 512px maskable Android icons.
- Added Apple touch icon and favicon assets.
- Wired all icon assets into `manifest.webmanifest` and `index.html`.
- Updated installed app short name to `UFN GM DB`.
- Cache version bumped to v13 so installed PWAs pick up the new icon metadata.
