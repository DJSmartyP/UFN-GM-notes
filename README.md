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
- OP13 — Operation: Columbo
- OP14 — Operation: Special Delivery
- OP15 — Operation: Harvest
- OP16 — Operation: Lifeboat

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


## v14 - Wargames mission section

- Added top-level WARGAMES section to the mission list.
- Added WG01 / The First Wargames with approved synopsis, GM note, shared player mechanics, End Wargames before Final Battle, and no mission DB pages.
- Added The First Wargames mission thumbnail artwork with green opposing-force ships.
- Cache version bumped to v14.


## v16 - Corrected Operation: Columbo

- Replaced the obsolete Chris Porter version with the implemented Chris Kinsey mission.
- Updated the story recap to reflect Convoy C-19, battered Freighter C, GST Black Flag Control, GST Hackers Conclave, the Data Miner and the four-bearing Science trace.
- Added seven accurate GM mechanism references and the two mission-specific player mechanics.
- Replaced the six obsolete database pages with the six authoritative MISSION INTEL pages.
- Retained the approved Operation: Columbo mission artwork.
- Cache version bumped to v16.

## v32 - Operation: Harvest

- Added OP15 with the GM story flow, live GM button reference, player tracker and self-destruct mechanics, faction choice, final raid, and current playtest limits.
- Added the six exact mission database pages from `scenario_OP15_operationHarvest.lua`, including their availability before or after boarding Anderson.
- Used the supplied mission artwork for the tile and focused its thumbnail on the Ghost habitat.
- Bumped the service-worker cache to v32 so installed copies load the new mission data and image.

## v33 - Harvest ship-log wording

- Matched the OP15 GM reference to the revised automated standing orders shown aboard Anderson.
- Bumped the service-worker cache to v33 for the updated mission note.

## v34 - Harvest Janus retreat and asteroids

- Documented the Janus Run GM control, automatic 10% hull trigger, and radar-distance retreat.
- Documented the authored asteroid placements and wider size range.
- Bumped the service-worker cache to v34 for the updated mission notes.

## v35 - Harvest Kinsey delivery

- Updated the GM reference for Whisper's faster one-shot supply pod, Helms H.I.D.E.S drive-lock indicator, automatic release, and single receipt log.
- Bumped the service-worker cache to v35 for the updated mission note.

## v36 - Whisper delivery staging

- Updated the Kinsey GM reference to match Whisper's slower approach, pod handoff pause, visible turn, and departure.
- Bumped the service-worker cache to v36 for the updated mission note.

## v37 - Harvest GM notes

- Matched the Harvest page to the established mission-page layout, with one synopsis and the GM controls described at the relevant story beats.
- Identified Commodore Mayfield as commanding officer of UFNI Janus in both Anderson records.
- Bumped the service-worker cache to v37 for the updated mission notes.

## v41 - Operation: Lifeboat

- Added OP16 with its synopsis, mission-specific GM sequence and station mechanics. Shared controls appear once for Engineering/Engineering+ and Weapons/Tactical/SinglePilot; standard package controls are excluded.
- Added the Mission Intel root description and five exact scenario database pages, with their unlock points.
- Used the existing Operation: Lifeboat artwork for the mission tile and added it to the offline cache.
- Bumped the service-worker cache to v41.

## v42 - Lifeboat launch and reference refinements

- Removed the Mission Intel root description from the scenario and GM reference; the five named files remain.
- Made the database files independent of the player ship's callsign and kept their operational wording in world.
- Updated the AXIS wormhole note: Level 1 Drive Lock remains until the crew clears it at Helm.
- Marked Lifeboat available and documented the final mine speeds, rescue ship tuning, immediate red exposure, shared blue geometry, and GM zone indicator.
- Bumped the service-worker cache to v42.

## v43 - Lifeboat Flight Control and field collapse

- Documented Flight Control disruption inside the nebula and restoration outside it.
- Documented the immediate overlay removal, Relay's NO NEBULA DETECTED state, and the eight-second visual collapse after AXIS GENERATOR is destroyed.
- Bumped the service-worker cache to v43.

## v44 - Lifeboat Relay rescue status

- Updated the Relay reference for the three-line rescue status display and its contacted/docked counters.
- Bumped the service-worker cache to v44.

## v45 - Lifeboat Science upload gate

- Clarified that Science detects rescue ships from launch but receives Send Nebula Data only after Release Relay Route.
- Bumped the service-worker cache to v45.

## v46 - Lifeboat Umbra transit note and recall capacity

- Added Umbra's temporary survey-system access and Science transfer instruction to the in-game overlay file and its exact GM reference copy.
- Updated the hazard advisory and GM mechanics for five shared recall uses.
- Bumped the service-worker cache to v46.

