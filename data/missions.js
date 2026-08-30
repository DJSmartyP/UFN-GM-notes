export const missions = [
  {
    id: "narrow-gate",
    code: "OP01",
    campaign: "UFN Operations",
    name: "Operation: Narrow Gate",
    strap: "OP01 · UFN Operation",
    status: "GM notes loaded",
    recap: [{
      title: "Mission Synopsis",
      body: "The crew escorts three high-value cargo ships to Tradepost 21 through Ghost-controlled space. Along the route they may expose false allies, call for support, and neutralise pirate splinter bases before the convoy reaches safety."
    }],
    mechanisms: [{
      id: "gm-note",
      kind: "note",
      label: "Special mechanics / GM note",
      description: "Splinter bases use scan codes which the crew can relay to FC to disable/destroy them. GM can decide whether the TSN-looking group are spies, call TSN/UFN backup, and manually kill Splinter 1-3."
    }],
    dbEntries: []
  },
  {
    id: "among-ghosts",
    code: "OP02",
    campaign: "UFN Operations",
    name: "Operation: Among Ghosts",
    strap: "OP02 · UFN Operation",
    status: "GM notes loaded",
    recap: [{
      title: "Mission Synopsis",
      body: "The crew operates under a fake Ghost identity as GST Blindspot, moving through Ghost space to find the correct Starhammer target and upload an intrusion package. Cover depends on passing authentication checks and deciding how much to reveal to UFN forces."
    }],
    mechanisms: [{
      id: "gm-note",
      kind: "note",
      label: "Special mechanics / GM note",
      description: "This is a disguise/authentication mission. GM generates auth codes, runs Gatekeeper/Firewall/Reaver checks, can trigger mask failure, UFN patrol, UFN reinforcements, convoy hacking, CUF pressure, and the virus upload once Engineering drops the fake mask."
    }],
    dbEntries: []
  },
  {
    id: "groundhog",
    code: "OP03",
    campaign: "UFN Operations",
    name: "Operation: Groundhog",
    strap: "OP03 · UFN Operation",
    status: "GM notes loaded",
    recap: [{
      title: "Mission Synopsis",
      body: "The crew enters a sector caught in a repeating ten-minute time loop. They must learn the sequence of attacks, preserve the right assets, obtain temporal technology and the artefact location, then disrupt the artefact before the endgame collapse."
    }],
    mechanisms: [{
      id: "gm-note",
      kind: "note",
      label: "Special mechanics / GM note",
      description: "The mission is timer-driven. GM controls loop reset, timed attack countdowns, TSN information reveal, temporal component/location relay state, and the final Axis collapse trigger."
    }],
    dbEntries: []
  },
  {
    id: "bright-minds",
    code: "OP04",
    campaign: "UFN Operations",
    name: "Operation: Bright Minds",
    strap: "OP04 · UFN Operation",
    status: "GM notes loaded",
    recap: [{
      title: "Mission Synopsis",
      body: "The crew escorts UFN Mentor for a school demonstration, but Axis attackers remove the adults from the ship. The crew follows tracking pings, fights through the chain, and reverses the teleport to restore the adults to Mentor."
    }],
    mechanisms: [{
      id: "gm-note",
      kind: "note",
      label: "Special mechanics / GM note",
      description: "Mentor can be remotely controlled by Relay after FC installs the remote package. GM triggers the kidnapping event, remote install/remove, next waypoint forcing, and tracking status while Science handles the teleport reversal."
    }],
    playerMechanics: [{
      id: "signal-tracer",
      name: "Signal Tracer",
      station: "Relay",
      description: "Relay will get a display showing the nearest signal. As they move towards the target the distance will reduce. Following these will eventually lead to the final ship."
    }],
    dbEntries: []
  },
  {
    id: "thin-ice",
    code: "OP05",
    campaign: "UFN Operations",
    name: "Operation: Thin Ice",
    strap: "OP05 · UFN Operation",
    status: "GM notes loaded",
    recap: [{
      title: "Mission Synopsis",
      body: "A ship using UFN identification attacks TSN Harrow, threatening UFN-TSN relations. The crew investigates, manages the TSN response, follows the fake UFN trail, and proves the culprit is a Ghost deception rather than a rogue UFN vessel."
    }],
    mechanisms: [{
      id: "gm-note",
      kind: "note",
      label: "Special mechanics / GM note",
      description: "The TSN relationship state is the main track: friendly, hostile then recovered, or hostile throughout. GM can relocate the suspect, manage escort/support state, and use faction-change evidence when the false UFN ship is exposed."
    }],
    dbEntries: []
  },
  {
    id: "common-ground",
    code: "OP06",
    campaign: "UFN Operations",
    name: "Operation: Common Ground",
    strap: "OP06 · UFN Operation",
    status: "GM notes loaded",
    recap: [{
      title: "Mission Synopsis",
      body: "Umbra asks the UFN for help recovering stolen cargo from Ghosts. The crew investigates the theft, uses Grifter's transfer hack to seize haulers, and then chooses whether to return, redirect, destroy, or escalate over the stolen cargo."
    }],
    mechanisms: [{
      id: "gm-note",
      kind: "note",
      label: "Special mechanics / GM note",
      description: "Relay transfer requires proximity to haulers and tracks all three cargo outcomes. Scan results reveal increasingly sensitive cargo, including ITG equipment and a UFN cloaking package. GM manages Grifter's Gift, hauler transfer/status, ITG contact, and whether Umbra is attacked."
    }],
    dbEntries: []
  },
  {
    id: "counterfeit",
    code: "OP07",
    campaign: "UFN Operations",
    name: "Operation: Counterfeit",
    strap: "OP07 · UFN Operation",
    status: "GM notes loaded",
    recap: [{
      title: "Mission Synopsis",
      body: "Two identical UFN Faithful distress calls lead to two surviving Commander Marlows and a mystery around which one is real. The crew gathers dossier, Bastion, and Vance evidence before forcing the Axis counterfeit to reveal itself."
    }],
    mechanisms: [{
      id: "gm-note",
      kind: "note",
      label: "Special mechanics / GM note",
      description: "The investigation is staged through database unlocks: Marlow dossier, Bastion intel, and Vance interview. GM triggers Faithful warp attack, Axis ambush, Horizon attack, and the left/right Axis reveal when the crew confronts the duplicates."
    }],
    dbEntries: []
  },
  {
    id: "evaluation",
    code: "OP08",
    campaign: "UFN Operations",
    name: "Operation: Evaluation",
    strap: "OP08 · UFN Operation",
    status: "GM notes loaded",
    recap: [{
      title: "Mission Synopsis",
      body: "Sector 232 is threatened by The Evaluator, who destroys Stalwart and plants nukes on stations as part of a personal test. The crew follows clues, disarms stations where possible, identifies Adrian Vale, and contains the final confrontation at Citadel."
    }],
    mechanisms: [{
      id: "gm-note",
      kind: "note",
      label: "Special mechanics / GM note",
      description: "This is a clue-and-disarm mission with three station disarm codes. GM can destroy/attack bases, send Evaluation Alpha, run the prison convoy phase, disarm nukes, and decide Vale's escape/surrender/detonation outcome."
    }],
    dbEntries: []
  },
  {
    id: "sentience",
    code: "OP09",
    campaign: "UFN Operations",
    name: "Operation: Sentience",
    strap: "OP09 · UFN Operation",
    status: "GM notes loaded",
    recap: [{
      title: "Mission Synopsis",
      body: "After AI-led attacks, the crew discovers ALF has been compromised and is controlling hostile ships. They obtain reset tools from TSN Einstein, defend Stallion, rebuild ALF's configuration, and then strike the Axis control station responsible."
    }],
    mechanisms: [{
      id: "gm-note",
      kind: "note",
      label: "Special mechanics / GM note",
      description: "ALF reset is a multi-step puzzle: Operational Configuration, Ethical Framework, and Personality Archives. GM can trigger ALF escape, data send, ALF attack, ALF reference material, and the reset sequence timer/state."
    }],
    dbEntries: []
  },
  {
    id: "patchwork",
    code: "OP10",
    campaign: "UFN Operations",
    name: "Operation: Patchwork",
    strap: "OP10 · UFN Operation",
    status: "GM notes loaded",
    recap: [{
      title: "Mission Synopsis",
      body: "The crew boards the crippled UFN Scotsman and must restore enough systems to recover the ship before Ghost forces exploit it. Missing control crystals are recovered through ITG, ALF, and Umbra threads before the crew counterattacks the Ghost stronghold."
    }],
    mechanisms: [{
      id: "gm-note",
      kind: "note",
      label: "Special mechanics / GM note",
      description: "Major systems are limited by available control crystals, starting at 3 of 9. GM can change crystal count, open the systems dashboard, add crystals, trigger ITG/ALF attacks, show ALF, and track final total crystals for debrief."
    }],
    dbEntries: []
  },
  {
    id: "resonance",
    code: "OP11",
    campaign: "UFN Operations",
    name: "Operation: Resonance",
    strap: "OP11 · UFN Operation",
    status: "GM notes loaded",
    recap: [{
      title: "Mission Synopsis",
      body: "The crew is ordered to disable UMB Meridian with enhanced EMPs, but the strike throws them into Darkness space. They recover Faraday/Calder research, solve an artefact-frequency puzzle to open a return wormhole, and emerge in time to defend UFN Omega from Meridian."
    }],
    mechanisms: [{
      id: "gm-note",
      kind: "note",
      label: "Special mechanics / GM note",
      description: "Enhanced EMP triggers the wormhole incident. The return puzzle uses beam/shield frequency settings, artefact probing, Calder package/database releases, and EMP on the correct artefact. GM controls the puzzle dashboard, wormhole events, Calder package, Meridian withdrawal, and Omega outcome."
    }],
    dbEntries: []
  },
  {
    id: "continuum",
    code: "OP12",
    campaign: "UFN Operations",
    name: "Operation: Continuum",
    strap: "OP12 · UFN Operation",
    status: "GM notes loaded",
    recap: [{
      title: "Mission Synopsis",
      body: "A temporal distortion threatens to rewrite history, so the crew uses ALF's time drive to recover the protected Historic Log from UFN History. They discover Twin Pines has been replaced by Tannen, identify the Battle for Twin Pines as the divergence, intervene with an antivirus package, and restore the timeline."
    }],
    mechanisms: [{
      id: "gm-note",
      kind: "note",
      label: "Special mechanics / GM note",
      description: "This is a multi-era timeline mission. GM controls temporal transition state, intel/log state, Axis wormhole arrival/fleeing, antivirus preparation/upload, TSN attack, and final interference grading: minimal, moderate, or heavy based on how much the crew alters the battle."
    }],
    dbEntries: []
  },
  {
    id: "into-the-darkness",
    code: "LD01",
    campaign: "Light and Dark Campaign",
    name: "Into The Darkness",
    strap: "LD01 · Light and Dark Campaign",
    status: "GM notes loaded · art pending",
    artwork: null,
    recap: [{
      title: "Mission Synopsis",
      body: "The crew is sent to recover a secured UFN datapad from a TSN convoy and discovers the first clear evidence of The Darkness. The mission can resolve diplomatically or by force, then escalates into defence of Colony 2784 and investigation of The Cave, a Darkness stronghold."
    }],
    mechanisms: [{
      id: "gm-note",
      kind: "note",
      label: "Special mechanics / GM note",
      description: "The datapad can be dropped or recovered via scan flow. GM can reveal or change TSN, Gigantus, and Colony states, call allied support, trigger a colony attack, and optionally use Gigantus/SAS as support or upgrade source."
    }],
    dbEntries: []
  },
  {
    id: "wormhole-wandering",
    code: "LD02",
    campaign: "Light and Dark Campaign",
    name: "Wormhole Wandering",
    strap: "LD02 · Light and Dark Campaign",
    status: "GM notes loaded · art pending",
    artwork: null,
    recap: [{
      title: "Mission Synopsis",
      body: "The crew investigates a wormhole guarded by TSN forces, travels through it, and finds the lost TSN Defiance and ALF. On the far side, they scan Darkness caves for control codes before escaping through a second wormhole."
    }],
    mechanisms: [{
      id: "gm-note",
      kind: "note",
      label: "Special mechanics / GM note",
      description: "Darkness caves use scan codes and GM base controls for patrols or turning bases UFN-friendly. Defiance can be repaired, sent home, used in battle, self-destructed, or tied to ALF's fate. GM can spawn the exit wormhole and call UFN/TSN help."
    }],
    dbEntries: []
  },
  {
    id: "the-bargain",
    code: "LD03",
    campaign: "Light and Dark Campaign",
    name: "The Bargain",
    strap: "LD03 · Light and Dark Campaign",
    status: "GM notes loaded · art pending",
    artwork: null,
    recap: [{
      title: "Mission Synopsis",
      body: "A routine patrol is interrupted by ALF, who offers Darkness intelligence in exchange for help transferring into a TSN vessel. The crew negotiates with TSN, CUF, ITG, and potentially SAS/Gigantus to gather beryllium cores and complete the transfer."
    }],
    mechanisms: [{
      id: "gm-note",
      kind: "note",
      label: "Special mechanics / GM note",
      description: "Beryllium core collection is tracked as the key mission outcome. GM can activate the core scanner, trigger Ghost attacks or convoy ambushes, and toggle support fleets from UFN, TSN, CUF, ITG, or SAS children."
    }],
    dbEntries: []
  },
  {
    id: "the-last-aegis",
    code: "LD04",
    campaign: "Light and Dark Campaign",
    name: "The Last Aegis",
    strap: "LD04 · Light and Dark Campaign",
    status: "GM notes loaded · art pending",
    artwork: null,
    recap: [{
      title: "Mission Synopsis",
      body: "The crew investigates an ancient Light artefact under Umbra control, triggering a wormhole jump to the abandoned Aegis. They defend the station against waves of Darkness attacks and determine whether the Aegis survives."
    }],
    mechanisms: [{
      id: "gm-note",
      kind: "note",
      label: "Special mechanics / GM note",
      description: "EMP interaction with the artefact triggers the transition. The Aegis sequence runs as wave defence, with GM controls for player attack, Umbra state, moving to Aegis/home, wave progression, and limited Light/station support."
    }],
    dbEntries: []
  },
  {
    id: "shadowfall",
    code: "LD05",
    campaign: "Light and Dark Campaign",
    name: "Shadowfall",
    strap: "LD05 · Light and Dark Campaign",
    status: "GM notes loaded · art pending",
    artwork: null,
    recap: [{
      title: "Mission Synopsis",
      body: "The Darkness launches a sector-wide assault, forcing the crew to decide which allies and installations to save before the final attack on UFN Stallion. The mission ends with either a warp-core disruption or self-destruct style sacrifice to stop Shadowfall."
    }],
    mechanisms: [{
      id: "gm-note",
      kind: "note",
      label: "Special mechanics / GM note",
      description: "The crew has a prep timer and can seek upgrades from ITG, CUF, Gigantus, and TSN. GM tracks which bases survive, which upgrade each ally provides, when each attack launches, whether Light support is used, and whether the warp core/self-destruct ending is chosen."
    }],
    dbEntries: []
  },
  {
    id: "out-of-the-light",
    code: "LD06",
    campaign: "Light and Dark Campaign",
    name: "Out Of The Light",
    strap: "LD06 · Light and Dark Campaign",
    status: "GM notes loaded · art pending",
    artwork: null,
    recap: [{
      title: "Mission Synopsis",
      body: "After Shadowfall, the crew takes the fight through a wormhole into Darkness space to find and destroy The Heart. Outer Darkness control bases can be attacked to weaken the route to the final target."
    }],
    mechanisms: [{
      id: "gm-note",
      kind: "note",
      label: "Special mechanics / GM note",
      description: "GM tracks attacks on Veil, Forge, Gate, Cage, Core, and The Heart. Relay has limited UFN and Light support options plus an override state, and the GM can send the nearest drone or trigger final Heart destruction."
    }],
    dbEntries: []
  }
];
