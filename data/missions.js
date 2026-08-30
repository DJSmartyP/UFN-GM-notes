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
    playerMechanics: [
      {
            id: "call-fc",
            name: "Call FC",
            station: "Relay",
            description: "Relay presses `Call FC` to open Flight Control comms. If Flight Control is unavailable, Relay receives a station message explaining the channel failure."
      },
      {
            id: "local-hides-helms",
            name: "Local H.I.D.E.S Helms Hack Clear",
            station: "Helms",
            description: "Helms presses the station button when a drive-side hack is active. It starts a 10-second clear sequence and updates the label between hack status and countdown."
      },
      {
            id: "local-hides-weapons",
            name: "Local H.I.D.E.S Weapons Hack Clear",
            station: "Weapons",
            description: "Weapons presses the station button to clear active weapon-side hacks. It uses the same flashing status / press-to-clear / clearing countdown flow."
      },
      {
            id: "local-hides-engineering",
            name: "Local H.I.D.E.S Engineering Hack Clear",
            station: "Engineering",
            description: "Engineering presses the station button to clear active engineering-side hacks. The button reports status while the hack is active and counts down during clearing."
      }
], 
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
    playerMechanics: [
      {
            id: "call-fc",
            name: "Call FC",
            station: "Relay",
            description: "Relay presses `Call FC` to open Flight Control comms. If Flight Control is unavailable, Relay receives a station message explaining the channel failure."
      },
      {
            id: "hides-helms-clear",
            name: "H.I.D.E.S Helms Hack Clear",
            station: "Helms",
            description: "Helms uses the hack button when it flashes `HACKED`, a named hack, or `PRESS TO CLEAR`. Pressing starts a timed clear; the button shows `Clearing (Xs)` until the Helms hack state is removed."
      },
      {
            id: "hides-weapons-clear",
            name: "H.I.D.E.S Weapons Hack Clear",
            station: "Weapons",
            description: "Weapons uses the hack button to clear active weapons-side intrusions such as Fire Decay, Missile Scramble, or Shield Collapse. The button becomes a countdown while the clear is running."
      },
      {
            id: "hides-engineering-clear",
            name: "H.I.D.E.S Engineering Hack Clear",
            station: "Engineering",
            description: "Engineering uses the hack button to clear engineering-side intrusions such as Heat Surge or Grid Decay. Damage and heat effects may still need normal repair after the hack is cleared."
      },
      {
            id: "hides-tactical-mirror",
            name: "H.I.D.E.S Tactical Mirror",
            station: "Tactical",
            description: "Tactical sees combined Helms and Weapons hack status and can start clearing active Helms/Weapons hacks from one mirrored control."
      },
      {
            id: "hides-engineering-plus-mirror",
            name: "H.I.D.E.S Engineering+ Mirror",
            station: "Engineering+",
            description: "Engineering+ sees Engineering hack status and can start the Engineering hack clear from the auxiliary engineering station."
      },
      {
            id: "virus-upload-status",
            name: "Virus Upload Status Panel",
            station: "Relay",
            description: "Relay watches custom status lines showing ship mask state, upload readiness, progress, paused state, completion, and Ghost jam timer. It tells the crew whether they need to break cover, move into range, or wait."
      },
      {
            id: "upload-virus",
            name: "Upload Virus",
            station: "Relay",
            description: "Relay presses `UPLOAD VIRUS` once the ship is unmasked and a compatible Ghost target is within 5u. The upload progresses over time and, once complete, jams Ghost forces for the mission timer."
      },
      {
            id: "break-cover",
            name: "Break Cover",
            station: "Engineering",
            description: "Engineering presses `Break Cover` to lower the ship mask. This exposes the ship but allows Relay to begin the virus-upload phase."
      },
      {
            id: "auth-reference",
            name: "Authentication Reference Buttons",
            station: "Relay",
            description: "Relay uses `AUTH NUMERIC`, `AUTH QUESTIONS`, and `AUTH PHRASES` to access authentication reference material during the mission. These are player-facing prompt/reference controls rather than ship-control systems."
      },
      {
            id: "starhammer-detection",
            name: "Starhammer Detection Readout",
            station: "Science",
            description: "Science watches the Starhammer detection lines for sequential target/location clues. The readout updates as the player ship gets within the required detection range."
      },
      {
            id: "relay-popups",
            name: "Relay Mission Popup Messages",
            station: "Relay",
            description: "Relay receives custom mission popups for important story/mechanic prompts. The player reads and closes them on the station."
      },
      {
            id: "science-popups",
            name: "Science Mission Popup Messages",
            station: "Science",
            description: "Science receives custom mission popups for scan/story/mechanic prompts. The player reads and closes them on the station."
      }
], 
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
    playerMechanics: [
      {
            id: "call-fc",
            name: "Call FC",
            station: "Relay",
            description: "Relay presses `Call FC` to open Flight Control comms. If Flight Control is unavailable, Relay receives a station message explaining the channel failure."
      },
      {
            id: "hides-helms-clear",
            name: "H.I.D.E.S Helms Hack Clear",
            station: "Helms",
            description: "Helms uses the hack button when it flashes `HACKED`, a named hack, or `PRESS TO CLEAR`. Pressing starts a timed clear; the button shows `Clearing (Xs)` until the Helms hack state is removed."
      },
      {
            id: "hides-weapons-clear",
            name: "H.I.D.E.S Weapons Hack Clear",
            station: "Weapons",
            description: "Weapons uses the hack button to clear active weapons-side intrusions such as Fire Decay, Missile Scramble, or Shield Collapse. The button becomes a countdown while the clear is running."
      },
      {
            id: "hides-engineering-clear",
            name: "H.I.D.E.S Engineering Hack Clear",
            station: "Engineering",
            description: "Engineering uses the hack button to clear engineering-side intrusions such as Heat Surge or Grid Decay. Damage and heat effects may still need normal repair after the hack is cleared."
      },
      {
            id: "hides-tactical-mirror",
            name: "H.I.D.E.S Tactical Mirror",
            station: "Tactical",
            description: "Tactical sees combined Helms and Weapons hack status and can start clearing active Helms/Weapons hacks from one mirrored control."
      },
      {
            id: "hides-engineering-plus-mirror",
            name: "H.I.D.E.S Engineering+ Mirror",
            station: "Engineering+",
            description: "Engineering+ sees Engineering hack status and can start the Engineering hack clear from the auxiliary engineering station."
      },
      {
            id: "temporal-loop-timer",
            name: "Temporal Loop Timer Panel",
            station: "Relay",
            description: "Relay watches `Temporal Shift Detected` and timer lines such as `RESET`, `RESET SOON`, `COLLAPSE`, or `LOOP BROKEN`. It gives the crew live awareness of the reset cycle."
      },
      {
            id: "artifact-status",
            name: "Artifact Status",
            station: "Relay",
            description: "Relay uses the artifact status line to see whether the temporal core location is unknown, located, in range, ready, or overloaded. It guides approach and interaction timing."
      },
      {
            id: "interact-artifact",
            name: "Interact Artifact",
            station: "Relay",
            description: "Relay presses `Interact Artifact` when the method is known and the ship is within 5u of the artifact. This starts the artifact activation/destruction flow that breaks the loop."
      }
], 
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
    playerMechanics: [
      {
            id: "call-fc",
            name: "Call FC",
            station: "Relay",
            description: "Relay presses `Call FC` to open Flight Control comms. If Flight Control is unavailable, Relay receives a station message explaining the channel failure."
      },
      {
            id: "hides-helms-clear",
            name: "H.I.D.E.S Helms Hack Clear",
            station: "Helms",
            description: "Helms uses the hack button when it flashes `HACKED`, a named hack, or `PRESS TO CLEAR`. Pressing starts a timed clear; the button shows `Clearing (Xs)` until the Helms hack state is removed."
      },
      {
            id: "hides-weapons-clear",
            name: "H.I.D.E.S Weapons Hack Clear",
            station: "Weapons",
            description: "Weapons uses the hack button to clear active weapons-side intrusions such as Fire Decay, Missile Scramble, or Shield Collapse. The button becomes a countdown while the clear is running."
      },
      {
            id: "hides-engineering-clear",
            name: "H.I.D.E.S Engineering Hack Clear",
            station: "Engineering",
            description: "Engineering uses the hack button to clear engineering-side intrusions such as Heat Surge or Grid Decay. Damage and heat effects may still need normal repair after the hack is cleared."
      },
      {
            id: "hides-tactical-mirror",
            name: "H.I.D.E.S Tactical Mirror",
            station: "Tactical",
            description: "Tactical sees combined Helms and Weapons hack status and can start clearing active Helms/Weapons hacks from one mirrored control."
      },
      {
            id: "hides-engineering-plus-mirror",
            name: "H.I.D.E.S Engineering+ Mirror",
            station: "Engineering+",
            description: "Engineering+ sees Engineering hack status and can start the Engineering hack clear from the auxiliary engineering station."
      },
      {
            id: "mentor-remote-panel",
            name: "UFN Mentor Remote Control Panel",
            station: "Relay",
            description: "Relay watches order/status/hull lines for the remotely controlled Mentor ship. The panel reports whether remote access is installed, idle, ordered, defending, following, hiding, or out of useful state."
      },
      {
            id: "remote-defend",
            name: "Remote Defend",
            station: "Relay",
            description: "Relay presses `Defend` to order UFN Mentor into a defensive behavior. The ship follows the configured defend behavior and the status line updates."
      },
      {
            id: "remote-follow",
            name: "Remote Follow",
            station: "Relay",
            description: "Relay presses `Follow` to make UFN Mentor follow the player ship. The remote order is advisory and may take a moment to update."
      },
      {
            id: "remote-hide",
            name: "Remote Hide",
            station: "Relay",
            description: "Relay presses `Hide` to send UFN Mentor away from immediate danger. The status panel confirms the order state."
      },
      {
            id: "remote-hold",
            name: "Remote Hold",
            station: "Relay",
            description: "Relay presses `Hold` to cancel the active remote order and leave Mentor waiting for further instruction."
      },
      {
            id: "science-signal-trace",
            name: "Science Signal Trace",
            station: "Science",
            description: "Science watches the custom signal lines for source strength, distance, and lock state. The readout helps the crew find the transport signal source."
      },
      {
            id: "transport-reversal",
            name: "Transport Reversal",
            station: "Science",
            description: "Science presses `TRANSPORT REVERSAL` once the signal lock is acquired, the ship is in range, and the target station shields are sufficiently low. The button starts the reversal timer and returns the crew if completed."
      }
], 
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
    playerMechanics: [
      {
            id: "call-fc",
            name: "Call FC",
            station: "Relay",
            description: "Relay presses `Call FC` to open Flight Control comms. If Flight Control is unavailable, Relay receives a station message explaining the channel failure."
      },
      {
            id: "hides-helms-clear",
            name: "H.I.D.E.S Helms Hack Clear",
            station: "Helms",
            description: "Helms uses the hack button when it flashes `HACKED`, a named hack, or `PRESS TO CLEAR`. Pressing starts a timed clear; the button shows `Clearing (Xs)` until the Helms hack state is removed."
      },
      {
            id: "hides-weapons-clear",
            name: "H.I.D.E.S Weapons Hack Clear",
            station: "Weapons",
            description: "Weapons uses the hack button to clear active weapons-side intrusions such as Fire Decay, Missile Scramble, or Shield Collapse. The button becomes a countdown while the clear is running."
      },
      {
            id: "hides-engineering-clear",
            name: "H.I.D.E.S Engineering Hack Clear",
            station: "Engineering",
            description: "Engineering uses the hack button to clear engineering-side intrusions such as Heat Surge or Grid Decay. Damage and heat effects may still need normal repair after the hack is cleared."
      },
      {
            id: "hides-tactical-mirror",
            name: "H.I.D.E.S Tactical Mirror",
            station: "Tactical",
            description: "Tactical sees combined Helms and Weapons hack status and can start clearing active Helms/Weapons hacks from one mirrored control."
      },
      {
            id: "hides-engineering-plus-mirror",
            name: "H.I.D.E.S Engineering+ Mirror",
            station: "Engineering+",
            description: "Engineering+ sees Engineering hack status and can start the Engineering hack clear from the auxiliary engineering station."
      }
], 
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
    playerMechanics: [
      {
            id: "call-fc",
            name: "Call FC",
            station: "Relay",
            description: "Relay presses `Call FC` to open Flight Control comms. If Flight Control is unavailable, Relay receives a station message explaining the channel failure."
      },
      {
            id: "hides-helms-clear",
            name: "H.I.D.E.S Helms Hack Clear",
            station: "Helms",
            description: "Helms uses the hack button when it flashes `HACKED`, a named hack, or `PRESS TO CLEAR`. Pressing starts a timed clear; the button shows `Clearing (Xs)` until the Helms hack state is removed."
      },
      {
            id: "hides-weapons-clear",
            name: "H.I.D.E.S Weapons Hack Clear",
            station: "Weapons",
            description: "Weapons uses the hack button to clear active weapons-side intrusions such as Fire Decay, Missile Scramble, or Shield Collapse. The button becomes a countdown while the clear is running."
      },
      {
            id: "hides-engineering-clear",
            name: "H.I.D.E.S Engineering Hack Clear",
            station: "Engineering",
            description: "Engineering uses the hack button to clear engineering-side intrusions such as Heat Surge or Grid Decay. Damage and heat effects may still need normal repair after the hack is cleared."
      },
      {
            id: "hides-tactical-mirror",
            name: "H.I.D.E.S Tactical Mirror",
            station: "Tactical",
            description: "Tactical sees combined Helms and Weapons hack status and can start clearing active Helms/Weapons hacks from one mirrored control."
      },
      {
            id: "hides-engineering-plus-mirror",
            name: "H.I.D.E.S Engineering+ Mirror",
            station: "Engineering+",
            description: "Engineering+ sees Engineering hack status and can start the Engineering hack clear from the auxiliary engineering station."
      },
      {
            id: "cargo-transfer-panel",
            name: "Cargo Transfer Protocol Panel",
            station: "Relay",
            description: "Relay watches hauler name, range, and transfer state lines. It shows whether the nearest cargo hauler is searching, ready, linked, paused, or under player control."
      },
      {
            id: "transfer-hauler",
            name: "Transfer Hauler",
            station: "Relay",
            description: "Relay presses `Transfer` when a cargo hauler is within 2.0u. The transfer progresses over time and pauses if the player ship moves too far away."
      }
], 
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
    playerMechanics: [
      {
            id: "call-fc",
            name: "Call FC",
            station: "Relay",
            description: "Relay presses `Call FC` to open Flight Control comms. If Flight Control is unavailable, Relay receives a station message explaining the channel failure."
      },
      {
            id: "hides-helms-clear",
            name: "H.I.D.E.S Helms Hack Clear",
            station: "Helms",
            description: "Helms uses the hack button when it flashes `HACKED`, a named hack, or `PRESS TO CLEAR`. Pressing starts a timed clear; the button shows `Clearing (Xs)` until the Helms hack state is removed."
      },
      {
            id: "hides-weapons-clear",
            name: "H.I.D.E.S Weapons Hack Clear",
            station: "Weapons",
            description: "Weapons uses the hack button to clear active weapons-side intrusions such as Fire Decay, Missile Scramble, or Shield Collapse. The button becomes a countdown while the clear is running."
      },
      {
            id: "hides-engineering-clear",
            name: "H.I.D.E.S Engineering Hack Clear",
            station: "Engineering",
            description: "Engineering uses the hack button to clear engineering-side intrusions such as Heat Surge or Grid Decay. Damage and heat effects may still need normal repair after the hack is cleared."
      },
      {
            id: "hides-tactical-mirror",
            name: "H.I.D.E.S Tactical Mirror",
            station: "Tactical",
            description: "Tactical sees combined Helms and Weapons hack status and can start clearing active Helms/Weapons hacks from one mirrored control."
      },
      {
            id: "hides-engineering-plus-mirror",
            name: "H.I.D.E.S Engineering+ Mirror",
            station: "Engineering+",
            description: "Engineering+ sees Engineering hack status and can start the Engineering hack clear from the auxiliary engineering station."
      }
], 
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
    playerMechanics: [
      {
            id: "call-fc",
            name: "Call FC",
            station: "Relay",
            description: "Relay presses `Call FC` to open Flight Control comms. If Flight Control is unavailable, Relay receives a station message explaining the channel failure."
      },
      {
            id: "hides-helms-clear",
            name: "H.I.D.E.S Helms Hack Clear",
            station: "Helms",
            description: "Helms uses the hack button when it flashes `HACKED`, a named hack, or `PRESS TO CLEAR`. Pressing starts a timed clear; the button shows `Clearing (Xs)` until the Helms hack state is removed."
      },
      {
            id: "hides-weapons-clear",
            name: "H.I.D.E.S Weapons Hack Clear",
            station: "Weapons",
            description: "Weapons uses the hack button to clear active weapons-side intrusions such as Fire Decay, Missile Scramble, or Shield Collapse. The button becomes a countdown while the clear is running."
      },
      {
            id: "hides-engineering-clear",
            name: "H.I.D.E.S Engineering Hack Clear",
            station: "Engineering",
            description: "Engineering uses the hack button to clear engineering-side intrusions such as Heat Surge or Grid Decay. Damage and heat effects may still need normal repair after the hack is cleared."
      },
      {
            id: "hides-tactical-mirror",
            name: "H.I.D.E.S Tactical Mirror",
            station: "Tactical",
            description: "Tactical sees combined Helms and Weapons hack status and can start clearing active Helms/Weapons hacks from one mirrored control."
      },
      {
            id: "hides-engineering-plus-mirror",
            name: "H.I.D.E.S Engineering+ Mirror",
            station: "Engineering+",
            description: "Engineering+ sees Engineering hack status and can start the Engineering hack clear from the auxiliary engineering station."
      },
      {
            id: "document-download-panel",
            name: "Document Download Panel",
            station: "Relay",
            description: "Relay watches station link, range, and download status lines. The panel tells the crew whether they are in range, out of range, blocked, paused, downloading, or finished."
      },
      {
            id: "download-documents",
            name: "Download Documents",
            station: "Relay",
            description: "Relay presses `Download Documents` while within 5u of the correct station in the expected sequence. A download takes 60 seconds, pauses out of range, and updates the Science database on completion."
      },
      {
            id: "unauthorized-download",
            name: "Unauthorized Download Consequence",
            station: "Relay",
            description: "If Relay attempts downloads at the wrong station, the station becomes blocked and hostile UFN security ships are spawned. This is a player-facing risk attached to the download button."
      },
      {
            id: "nuke-countdown",
            name: "Nuke Countdown Readout",
            station: "Relay",
            description: "Relay sees a nuke countdown info line during the threat phase. It gives the crew time pressure while document downloads remain incomplete."
      }
], 
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
    playerMechanics: [
      {
            id: "call-fc",
            name: "Call FC",
            station: "Relay",
            description: "Relay presses `Call FC` to open Flight Control comms. If Flight Control is unavailable, Relay receives a station message explaining the channel failure."
      },
      {
            id: "hides-helms-clear",
            name: "H.I.D.E.S Helms Hack Clear",
            station: "Helms",
            description: "Helms uses the hack button when it flashes `HACKED`, a named hack, or `PRESS TO CLEAR`. Pressing starts a timed clear; the button shows `Clearing (Xs)` until the Helms hack state is removed."
      },
      {
            id: "hides-weapons-clear",
            name: "H.I.D.E.S Weapons Hack Clear",
            station: "Weapons",
            description: "Weapons uses the hack button to clear active weapons-side intrusions such as Fire Decay, Missile Scramble, or Shield Collapse. The button becomes a countdown while the clear is running."
      },
      {
            id: "hides-engineering-clear",
            name: "H.I.D.E.S Engineering Hack Clear",
            station: "Engineering",
            description: "Engineering uses the hack button to clear engineering-side intrusions such as Heat Surge or Grid Decay. Damage and heat effects may still need normal repair after the hack is cleared."
      },
      {
            id: "hides-tactical-mirror",
            name: "H.I.D.E.S Tactical Mirror",
            station: "Tactical",
            description: "Tactical sees combined Helms and Weapons hack status and can start clearing active Helms/Weapons hacks from one mirrored control."
      },
      {
            id: "hides-engineering-plus-mirror",
            name: "H.I.D.E.S Engineering+ Mirror",
            station: "Engineering+",
            description: "Engineering+ sees Engineering hack status and can start the Engineering hack clear from the auxiliary engineering station."
      },
      {
            id: "alf-connection-panel",
            name: "ALF Connection Panel",
            station: "Relay",
            description: "Relay watches ALF connection status and range info lines. The panel tells the crew when they are close enough and what the connection state is."
      },
      {
            id: "alf-connect",
            name: "ALF Connect",
            station: "Relay",
            description: "Relay presses `ALF Connect` when in range of the rogue ALF target. This begins the ALF connection/handshake restoration flow."
      }
], 
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
    playerMechanics: [
      {
            id: "call-fc",
            name: "Call FC",
            station: "Relay",
            description: "Relay presses `Call FC` to open Flight Control comms. If Flight Control is unavailable, Relay receives a station message explaining the channel failure."
      },
      {
            id: "hides-helms-clear",
            name: "H.I.D.E.S Helms Hack Clear",
            station: "Helms",
            description: "Helms uses the hack button when it flashes `HACKED`, a named hack, or `PRESS TO CLEAR`. Pressing starts a timed clear; the button shows `Clearing (Xs)` until the Helms hack state is removed."
      },
      {
            id: "hides-weapons-clear",
            name: "H.I.D.E.S Weapons Hack Clear",
            station: "Weapons",
            description: "Weapons uses the hack button to clear active weapons-side intrusions such as Fire Decay, Missile Scramble, or Shield Collapse. The button becomes a countdown while the clear is running."
      },
      {
            id: "hides-engineering-clear",
            name: "H.I.D.E.S Engineering Hack Clear",
            station: "Engineering",
            description: "Engineering uses the hack button to clear engineering-side intrusions such as Heat Surge or Grid Decay. Damage and heat effects may still need normal repair after the hack is cleared."
      },
      {
            id: "hides-tactical-mirror",
            name: "H.I.D.E.S Tactical Mirror",
            station: "Tactical",
            description: "Tactical sees combined Helms and Weapons hack status and can start clearing active Helms/Weapons hacks from one mirrored control."
      },
      {
            id: "hides-engineering-plus-mirror",
            name: "H.I.D.E.S Engineering+ Mirror",
            station: "Engineering+",
            description: "Engineering+ sees Engineering hack status and can start the Engineering hack clear from the auxiliary engineering station."
      },
      {
            id: "crystal-toggles-eng",
            name: "Control Crystal System Toggles",
            station: "Engineering",
            description: "Engineering uses `[ON]` / `[OFF]` buttons to assign limited control crystals to ship systems. Only systems with crystals can receive power and obey bridge commands."
      },
      {
            id: "crystal-toggles-engplus",
            name: "Control Crystal System Toggles",
            station: "Engineering+",
            description: "Engineering+ has the same crystal toggles as Engineering for Impulse, Maneuvering, Warp, Jump Drive, Front Shield, Rear Shield, Beam Weapons, Missile System, and Reactor."
      },
      {
            id: "crystal-capacity-eng",
            name: "Crystal Capacity Status",
            station: "Engineering",
            description: "Engineering sees `Crystals installed: X/Y` and last crystal action/status messages. This tells the crew how many systems can be enabled at once."
      },
      {
            id: "crystal-capacity-engplus",
            name: "Crystal Capacity Status",
            station: "Engineering+",
            description: "Engineering+ sees the same installed/active crystal count and last action message. It supports the auxiliary engineering operator during crystal rationing."
      },
      {
            id: "crystal-locator-relay",
            name: "Control Crystal Locator",
            station: "Relay",
            description: "Relay sees whether abnormal control crystals are detected and the distance to the current locator target. It helps the crew navigate toward missing crystals."
      },
      {
            id: "crystal-locator-operations",
            name: "Control Crystal Locator",
            station: "Operations",
            description: "Operations sees the same crystal locator label and distance readout as Relay. It supports the broader ops station layout."
      },
      {
            id: "crystal-locator-altrelay",
            name: "Control Crystal Locator",
            station: "AltRelay",
            description: "AltRelay sees the same locator information for alternate relay station setups."
      }
], 
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
    playerMechanics: [
      {
            id: "call-fc",
            name: "Call FC",
            station: "Relay",
            description: "Relay presses `Call FC` to open Flight Control comms. If Flight Control is unavailable, Relay receives a station message explaining the channel failure."
      },
      {
            id: "hides-helms-clear",
            name: "H.I.D.E.S Helms Hack Clear",
            station: "Helms",
            description: "Helms uses the hack button when it flashes `HACKED`, a named hack, or `PRESS TO CLEAR`. Pressing starts a timed clear; the button shows `Clearing (Xs)` until the Helms hack state is removed."
      },
      {
            id: "hides-weapons-clear",
            name: "H.I.D.E.S Weapons Hack Clear",
            station: "Weapons",
            description: "Weapons uses the hack button to clear active weapons-side intrusions such as Fire Decay, Missile Scramble, or Shield Collapse. The button becomes a countdown while the clear is running."
      },
      {
            id: "hides-engineering-clear",
            name: "H.I.D.E.S Engineering Hack Clear",
            station: "Engineering",
            description: "Engineering uses the hack button to clear engineering-side intrusions such as Heat Surge or Grid Decay. Damage and heat effects may still need normal repair after the hack is cleared."
      },
      {
            id: "hides-tactical-mirror",
            name: "H.I.D.E.S Tactical Mirror",
            station: "Tactical",
            description: "Tactical sees combined Helms and Weapons hack status and can start clearing active Helms/Weapons hacks from one mirrored control."
      },
      {
            id: "hides-engineering-plus-mirror",
            name: "H.I.D.E.S Engineering+ Mirror",
            station: "Engineering+",
            description: "Engineering+ sees Engineering hack status and can start the Engineering hack clear from the auxiliary engineering station."
      },
      {
            id: "sample-probe-control",
            name: "Sample Probe Control",
            station: "Relay",
            description: "Relay presses the dynamic probe button when an unanalysed artifact is within 4u. The button launches a sample probe, waits while it travels/returns, then queues analysis."
      },
      {
            id: "sample-probe-status",
            name: "Sample Probe Status Labels",
            station: "Relay",
            description: "Relay reads dynamic labels such as `PROBE ART. ##`, `PROBE OUT`, `PROBE TESTING`, `ART IN DB`, `COMPLETE`, and `OUT OF RANGE` to understand whether a probe can be launched or why it cannot."
      }
], 
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
    playerMechanics: [
      {
            id: "call-fc",
            name: "Call FC",
            station: "Relay",
            description: "Relay presses `Call FC` to open Flight Control comms. If Flight Control is unavailable, Relay receives a station message explaining the channel failure."
      },
      {
            id: "hides-helms-clear",
            name: "H.I.D.E.S Helms Hack Clear",
            station: "Helms",
            description: "Helms uses the hack button when it flashes `HACKED`, a named hack, or `PRESS TO CLEAR`. Pressing starts a timed clear; the button shows `Clearing (Xs)` until the Helms hack state is removed."
      },
      {
            id: "hides-weapons-clear",
            name: "H.I.D.E.S Weapons Hack Clear",
            station: "Weapons",
            description: "Weapons uses the hack button to clear active weapons-side intrusions such as Fire Decay, Missile Scramble, or Shield Collapse. The button becomes a countdown while the clear is running."
      },
      {
            id: "hides-engineering-clear",
            name: "H.I.D.E.S Engineering Hack Clear",
            station: "Engineering",
            description: "Engineering uses the hack button to clear engineering-side intrusions such as Heat Surge or Grid Decay. Damage and heat effects may still need normal repair after the hack is cleared."
      },
      {
            id: "hides-tactical-mirror",
            name: "H.I.D.E.S Tactical Mirror",
            station: "Tactical",
            description: "Tactical sees combined Helms and Weapons hack status and can start clearing active Helms/Weapons hacks from one mirrored control."
      },
      {
            id: "hides-engineering-plus-mirror",
            name: "H.I.D.E.S Engineering+ Mirror",
            station: "Engineering+",
            description: "Engineering+ sees Engineering hack status and can start the Engineering hack clear from the auxiliary engineering station."
      },
      {
            id: "current-year-relay",
            name: "Current Year Panel",
            station: "Relay",
            description: "Relay sees the current era/year line, such as `CURRENT YEAR: 2247`, `~65,000,000 BC`, or `2231`. It gives time-state awareness during temporal transitions."
      },
      {
            id: "current-year-operations",
            name: "Current Year Panel",
            station: "Operations",
            description: "Operations sees the same current era/year line. It keeps ops-aligned station layouts aware of the temporal state."
      },
      {
            id: "current-year-altrelay",
            name: "Current Year Panel",
            station: "AltRelay",
            description: "AltRelay sees the same current era/year line for alternate relay station setups."
      },
      {
            id: "antivirus-panel",
            name: "Antivirus Upload Panel",
            station: "Relay",
            description: "Relay watches target and state lines for the antivirus upload to UFN Twin Pines. It reports in range, out of range, countdown, paused, and upload complete."
      },
      {
            id: "upload-antivirus",
            name: "Upload Antivirus",
            station: "Relay",
            description: "Relay presses `UPLOAD ANTIVIRUS` once the antivirus is prepared and the ship is within 3u of UFN Twin Pines. The upload takes 180 seconds and pauses if the ship leaves range."
      }
], 
    dbEntries: []
  },
  {
    id: "into-the-darkness",
    code: "LD01",
    campaign: "Light and Dark Campaign",
    name: "Into The Darkness",
    strap: "LD01 · Light and Dark Campaign",
    status: "GM notes loaded · art loaded",
    artwork: "assets/missions/into-the-darkness.png",
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
    playerMechanics: [
      {
            id: "call-fc",
            name: "Call FC",
            station: "Relay",
            description: "Relay presses `Call FC` to open Flight Control comms. If Flight Control is unavailable, Relay receives a station message explaining the channel failure."
      },
      {
            id: "legacy-hides-helms",
            name: "Legacy H.I.D.E.S Helms Hack Clear",
            station: "Helms",
            description: "Helms presses the local hack button to clear drive-side hacks such as Drive Lock or Drive Decay. The button flashes hack state and changes to a clear countdown while resolving."
      },
      {
            id: "legacy-hides-weapons",
            name: "Legacy H.I.D.E.S Weapons Hack Clear",
            station: "Weapons",
            description: "Weapons presses the local hack button to clear Fire Decay, Missile Scramble, or Shield Collapse. Some damage or heat consequences remain for normal repair."
      },
      {
            id: "legacy-hides-engineering",
            name: "Legacy H.I.D.E.S Engineering Hack Clear",
            station: "Engineering",
            description: "Engineering presses the local hack button to clear Heat Surge or Grid Decay. The button updates live while the hack is active or clearing."
      }
], 
    dbEntries: []
  },
  {
    id: "wormhole-wandering",
    code: "LD02",
    campaign: "Light and Dark Campaign",
    name: "Wormhole Wandering",
    strap: "LD02 · Light and Dark Campaign",
    status: "GM notes loaded · art loaded",
    artwork: "assets/missions/wormhole-wandering.png",
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
    playerMechanics: [
      {
            id: "call-fc",
            name: "Call FC",
            station: "Relay",
            description: "Relay presses `Call FC` to open Flight Control comms. If Flight Control is unavailable, Relay receives a station message explaining the channel failure."
      },
      {
            id: "hides-helms-clear",
            name: "H.I.D.E.S Helms Hack Clear",
            station: "Helms",
            description: "Helms uses the hack button when it flashes `HACKED`, a named hack, or `PRESS TO CLEAR`. Pressing starts a timed clear; the button shows `Clearing (Xs)` until the Helms hack state is removed."
      },
      {
            id: "hides-weapons-clear",
            name: "H.I.D.E.S Weapons Hack Clear",
            station: "Weapons",
            description: "Weapons uses the hack button to clear active weapons-side intrusions such as Fire Decay, Missile Scramble, or Shield Collapse. The button becomes a countdown while the clear is running."
      },
      {
            id: "hides-engineering-clear",
            name: "H.I.D.E.S Engineering Hack Clear",
            station: "Engineering",
            description: "Engineering uses the hack button to clear engineering-side intrusions such as Heat Surge or Grid Decay. Damage and heat effects may still need normal repair after the hack is cleared."
      },
      {
            id: "hides-tactical-mirror",
            name: "H.I.D.E.S Tactical Mirror",
            station: "Tactical",
            description: "Tactical sees combined Helms and Weapons hack status and can start clearing active Helms/Weapons hacks from one mirrored control."
      },
      {
            id: "hides-engineering-plus-mirror",
            name: "H.I.D.E.S Engineering+ Mirror",
            station: "Engineering+",
            description: "Engineering+ sees Engineering hack status and can start the Engineering hack clear from the auxiliary engineering station."
      }
], 
    dbEntries: []
  },
  {
    id: "the-bargain",
    code: "LD03",
    campaign: "Light and Dark Campaign",
    name: "The Bargain",
    strap: "LD03 · Light and Dark Campaign",
    status: "GM notes loaded · art loaded",
    artwork: "assets/missions/the-bargain.png",
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
    playerMechanics: [
      {
            id: "call-fc",
            name: "Call FC",
            station: "Relay",
            description: "Relay presses `Call FC` to open Flight Control comms. If Flight Control is unavailable, Relay receives a station message explaining the channel failure."
      },
      {
            id: "hides-helms-clear",
            name: "H.I.D.E.S Helms Hack Clear",
            station: "Helms",
            description: "Helms uses the hack button when it flashes `HACKED`, a named hack, or `PRESS TO CLEAR`. Pressing starts a timed clear; the button shows `Clearing (Xs)` until the Helms hack state is removed."
      },
      {
            id: "hides-weapons-clear",
            name: "H.I.D.E.S Weapons Hack Clear",
            station: "Weapons",
            description: "Weapons uses the hack button to clear active weapons-side intrusions such as Fire Decay, Missile Scramble, or Shield Collapse. The button becomes a countdown while the clear is running."
      },
      {
            id: "hides-engineering-clear",
            name: "H.I.D.E.S Engineering Hack Clear",
            station: "Engineering",
            description: "Engineering uses the hack button to clear engineering-side intrusions such as Heat Surge or Grid Decay. Damage and heat effects may still need normal repair after the hack is cleared."
      },
      {
            id: "hides-tactical-mirror",
            name: "H.I.D.E.S Tactical Mirror",
            station: "Tactical",
            description: "Tactical sees combined Helms and Weapons hack status and can start clearing active Helms/Weapons hacks from one mirrored control."
      },
      {
            id: "hides-engineering-plus-mirror",
            name: "H.I.D.E.S Engineering+ Mirror",
            station: "Engineering+",
            description: "Engineering+ sees Engineering hack status and can start the Engineering hack clear from the auxiliary engineering station."
      }
], 
    dbEntries: []
  },
  {
    id: "the-last-aegis",
    code: "LD04",
    campaign: "Light and Dark Campaign",
    name: "The Last Aegis",
    strap: "LD04 · Light and Dark Campaign",
    status: "GM notes loaded · art loaded",
    artwork: "assets/missions/the-last-aegis.png",
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
    playerMechanics: [
      {
            id: "call-fc",
            name: "Call FC",
            station: "Relay",
            description: "Relay presses `Call FC` to open Flight Control comms. If Flight Control is unavailable, Relay receives a station message explaining the channel failure."
      },
      {
            id: "hides-helms-clear",
            name: "H.I.D.E.S Helms Hack Clear",
            station: "Helms",
            description: "Helms uses the hack button when it flashes `HACKED`, a named hack, or `PRESS TO CLEAR`. Pressing starts a timed clear; the button shows `Clearing (Xs)` until the Helms hack state is removed."
      },
      {
            id: "hides-weapons-clear",
            name: "H.I.D.E.S Weapons Hack Clear",
            station: "Weapons",
            description: "Weapons uses the hack button to clear active weapons-side intrusions such as Fire Decay, Missile Scramble, or Shield Collapse. The button becomes a countdown while the clear is running."
      },
      {
            id: "hides-engineering-clear",
            name: "H.I.D.E.S Engineering Hack Clear",
            station: "Engineering",
            description: "Engineering uses the hack button to clear engineering-side intrusions such as Heat Surge or Grid Decay. Damage and heat effects may still need normal repair after the hack is cleared."
      },
      {
            id: "hides-tactical-mirror",
            name: "H.I.D.E.S Tactical Mirror",
            station: "Tactical",
            description: "Tactical sees combined Helms and Weapons hack status and can start clearing active Helms/Weapons hacks from one mirrored control."
      },
      {
            id: "hides-engineering-plus-mirror",
            name: "H.I.D.E.S Engineering+ Mirror",
            station: "Engineering+",
            description: "Engineering+ sees Engineering hack status and can start the Engineering hack clear from the auxiliary engineering station."
      }
], 
    dbEntries: []
  },
  {
    id: "shadowfall",
    code: "LD05",
    campaign: "Light and Dark Campaign",
    name: "Shadowfall",
    strap: "LD05 · Light and Dark Campaign",
    status: "GM notes loaded · art loaded",
    artwork: "assets/missions/shadowfall.png",
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
    playerMechanics: [
      {
            id: "call-fc",
            name: "Call FC",
            station: "Relay",
            description: "Relay presses `Call FC` to open Flight Control comms. If Flight Control is unavailable, Relay receives a station message explaining the channel failure."
      },
      {
            id: "hides-helms-clear",
            name: "H.I.D.E.S Helms Hack Clear",
            station: "Helms",
            description: "Helms uses the hack button when it flashes `HACKED`, a named hack, or `PRESS TO CLEAR`. Pressing starts a timed clear; the button shows `Clearing (Xs)` until the Helms hack state is removed."
      },
      {
            id: "hides-weapons-clear",
            name: "H.I.D.E.S Weapons Hack Clear",
            station: "Weapons",
            description: "Weapons uses the hack button to clear active weapons-side intrusions such as Fire Decay, Missile Scramble, or Shield Collapse. The button becomes a countdown while the clear is running."
      },
      {
            id: "hides-engineering-clear",
            name: "H.I.D.E.S Engineering Hack Clear",
            station: "Engineering",
            description: "Engineering uses the hack button to clear engineering-side intrusions such as Heat Surge or Grid Decay. Damage and heat effects may still need normal repair after the hack is cleared."
      },
      {
            id: "hides-tactical-mirror",
            name: "H.I.D.E.S Tactical Mirror",
            station: "Tactical",
            description: "Tactical sees combined Helms and Weapons hack status and can start clearing active Helms/Weapons hacks from one mirrored control."
      },
      {
            id: "hides-engineering-plus-mirror",
            name: "H.I.D.E.S Engineering+ Mirror",
            station: "Engineering+",
            description: "Engineering+ sees Engineering hack status and can start the Engineering hack clear from the auxiliary engineering station."
      },
      {
            id: "warp-core-ejection",
            name: "Warp Core Ejection",
            station: "Engineering",
            description: "Engineering presses `WARP CORE EJECTION` once the target is within 6u. The control shows too-far, countdown, and core-flight states while the sequence runs."
      },
      {
            id: "warp-core-impact",
            name: "Warp Core Impact Countdown",
            station: "Engineering",
            description: "Engineering sees `CORE IMPACT - Xs` while the ejected core is in flight. It gives the operator timing feedback after launch."
      },
      {
            id: "warp-core-relay",
            name: "Warp Core Target/Range Readout",
            station: "Relay",
            description: "Relay sees whether the warp-core target is locked, too far, missing, or currently ejecting. It helps the crew position within the required 6u launch range."
      },
      {
            id: "station-overwatch",
            name: "Station Overwatch Intel",
            station: "Relay",
            description: "Relay sees `STATION OVERWATCH` attack-intel lines if the Gigantus intel upgrade is chosen. It reports incoming/attack status for tracked stations."
      }
], 
    dbEntries: []
  },
  {
    id: "out-of-the-light",
    code: "LD06",
    campaign: "Light and Dark Campaign",
    name: "Out Of The Light",
    strap: "LD06 · Light and Dark Campaign",
    status: "GM notes loaded · art loaded",
    artwork: "assets/missions/out-of-the-light.png",
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
    playerMechanics: [
      {
            id: "call-fc",
            name: "Call FC",
            station: "Relay",
            description: "Relay presses `Call FC` to open Flight Control comms. If Flight Control is unavailable, Relay receives a station message explaining the channel failure."
      },
      {
            id: "hides-helms-clear",
            name: "H.I.D.E.S Helms Hack Clear",
            station: "Helms",
            description: "Helms uses the hack button when it flashes `HACKED`, a named hack, or `PRESS TO CLEAR`. Pressing starts a timed clear; the button shows `Clearing (Xs)` until the Helms hack state is removed."
      },
      {
            id: "hides-weapons-clear",
            name: "H.I.D.E.S Weapons Hack Clear",
            station: "Weapons",
            description: "Weapons uses the hack button to clear active weapons-side intrusions such as Fire Decay, Missile Scramble, or Shield Collapse. The button becomes a countdown while the clear is running."
      },
      {
            id: "hides-engineering-clear",
            name: "H.I.D.E.S Engineering Hack Clear",
            station: "Engineering",
            description: "Engineering uses the hack button to clear engineering-side intrusions such as Heat Surge or Grid Decay. Damage and heat effects may still need normal repair after the hack is cleared."
      },
      {
            id: "hides-tactical-mirror",
            name: "H.I.D.E.S Tactical Mirror",
            station: "Tactical",
            description: "Tactical sees combined Helms and Weapons hack status and can start clearing active Helms/Weapons hacks from one mirrored control."
      },
      {
            id: "hides-engineering-plus-mirror",
            name: "H.I.D.E.S Engineering+ Mirror",
            station: "Engineering+",
            description: "Engineering+ sees Engineering hack status and can start the Engineering hack clear from the auxiliary engineering station."
      },
      {
            id: "call-ufn",
            name: "Call UFN",
            station: "Relay",
            description: "Relay presses `CALL UFN` after it is unlocked to summon Human Navy support. The button disappears after use."
      },
      {
            id: "call-light",
            name: "Call Light",
            station: "Relay",
            description: "Relay presses `CALL LIGHT` after it is unlocked to summon Light faction support. The button disappears after use."
      },
      {
            id: "defense-override",
            name: "Defense Override",
            station: "Relay",
            description: "Relay presses `Def. Override` to temporarily bring enemy defenses down. The button then shows `Defenses Down (Xs)` and later `D.O Cooldown (Xs)` while it recovers."
      },
      {
            id: "defense-override-status",
            name: "Defense Override Status",
            station: "Relay",
            description: "Relay sees a status line showing either defenses-down time remaining or defense-override cooldown. It tells the crew when the next attack window is open."
      }
], 
    dbEntries: []
  }
];
