// OP16: Operation Lifeboat (source: scenario_OP16_operationEventHorizon.lua).
// GM reference only: this site does not control EmptyEpsilon.
import { missions } from "./missions.js?v=16";
import { customDbPages } from "./db-pages.js?v=16";

const mission = {
  id: "lifeboat",
  code: "OP16",
  campaign: "UFN Operations",
  name: "Operation: Lifeboat",
  strap: "OP16 · UFN Operation",
  status: "Available now · GM notes loaded · art loaded",
  artwork: "assets/missions/lifeboat.png",
  artPosition: "38% 50%",
  recap: [{
    title: "Mission Synopsis",
    body: "A large, unstable nebula has appeared in a sector where no field existed twenty-four hours earlier. Four ships are trapped inside: UFN Asteria, TSN Halley, UFN Larkspur and UMB Helix. Umbra agrees to assist if its ship is rescued too, and its vessels observe a ceasefire with the UFN for this deployment. The assigned UFN crew must enter the field, send each ship the transit data needed to escape, and guide them home while AXIS forces attack. The final Umbra handoff reveals an AXIS generator hidden behind a replenishing mine screen; destroying it collapses the field."
  }],
  mechanisms: [
    {
      id: "opening",
      kind: "note",
      label: "Opening and Umbra arrangement",
      description: "Vanguard starts beside UFN Homestead in E12. UMB Horizon Array is outside the nebula for the GM-run conversation before entry. Umbra and UFN are friendly for this mission, and Umbra is hostile to AXIS. The Rescue List and Nebula Hazard Advisory are available from launch."
    },
    {
      id: "umbra-route",
      kind: "note",
      label: "Umbra transit data",
      description: "After the conversation at UMB Horizon Array, press Release Relay Route. This grants Relay the Display/Hide Nebula Route control, enables Science to send route data to nearby rescue ships, and adds Umbra Nebula Overlay to Mission Intel. Blue corridors still cause slight damage; red space drives heat and damage sharply upward. The mapped network has branches, loops and dead ends."
    },
    {
      id: "hazard-recall",
      kind: "note",
      label: "Nebula hazard and recall",
      description: "The player vessel alone receives the scripted nebula hazard. If any part of its hull overlaps a blue corridor or pocket, blue exposure applies; the same polygons drive the radar overlay and damage check. Fully in red, heat and direct damage begin on the first update, with escalating damage to five random systems excluding reactor and jump drive. Engineering and Engineering+ share five Recall Jumps to the Homestead start point. Recall vents heat over two seconds but does not repair damage. The player ship is set non-destroyable, although its systems can be badly damaged. AXIS and rescue ships are immune to the scripted hazard."
    },
    {
      id: "rescue-flow",
      kind: "note",
      label: "Four rescue encounters",
      description: "The rescue pockets are spread across the nebula in this order: UFN Asteria (68% hull), TSN Halley (44%), UFN Larkspur (32%), and UMB Helix (57%). All have 1000 maximum hull, 600 shields, 250 impulse speed and acceleration, 35 turn speed, and 2000 warp speed. Helix cannot be destroyed; the other three remain vulnerable. At 15U from each ship, AXIS attackers spawn: two, two, three and three, increasing in strength. Science can send nebula data within 5U even while attackers are present. Once synced, press Release [ship] to send it along the shortest connected blue route. Asteria, Halley and Larkspur dock at Homestead; Helix docks at UMB Horizon Array."
    },
    {
      id: "axis-wormhole",
      kind: "note",
      label: "Optional AXIS wormhole attack",
      description: "AXIS WH Atk (3) brings in one Adder MK7 and two Elara P2 ships through the standard wormhole arrival. It engages Level 1 Drive Lock. Helm can clear it through the standard hack control; the mission does not clear it automatically. The button remains available for another attack."
    },
    {
      id: "axis-reveal",
      kind: "note",
      label: "Final Umbra handoff",
      description: "Reveal AXIS Base appears only after Science has sent data to all four ships and Vanguard has reached the UMB Helix encounter. Helix does not have to dock. Pressing it reveals AXIS GENERATOR and its mine screen, removes Science's Send Nebula Data control, grants AXIS Signal Trace to Science, and grants the sealed Mine Self Destruct control to Weapons, Tactical and SinglePilot. AXIS Signal Trace and Umbra Mine Countermeasure are added to Mission Intel."
    },
    {
      id: "generator-finale",
      kind: "note",
      label: "Generator, mines and finale",
      description: "AXIS GENERATOR is a Defense platform with 150 shields, 200 hull, slow continuous rotation and three long active beams separated by inactive emitters. Four moving rings contain 104 AXIS mines; destroyed mines replenish until the countermeasure is used. Mine Self Destruct is one use and requires the player vessel within 25U of the generator and a live mine within 5U. An early press reports AXIS mines not detected nearby on the console used. Successful activation clears the screen, makes the generator vulnerable and launches four AXIS defenders. Destroying the generator immediately removes the blue/red overlay and ends scripted exposure. Relay changes to NO NEBULA DETECTED; the nebula then flickers and disappears in random patches over about eight seconds."
    },
    {
      id: "gm-zone-indicator",
      kind: "note",
      label: "GM zone indicator",
      description: "A read-only GM button changes between Out, In - Blue and In - Red according to the player vessel's current nebula exposure. It uses the same hull-overlap geometry as damage and the overlay, and updates when the vessel changes zones."
    },
    {
      id: "debug-overlay",
      kind: "note",
      label: "Overlay debug control",
      description: "DEBUG Nebula Overlay: OFF/ON toggles the same shared radar zones used by Relay. Turning it on can expose the route to players before Release Relay Route; use it only when that visibility is acceptable."
    }
  ],
  playerMechanics: [
    {
      id: "flight-control-disruption",
      name: "Flight Control disruption",
      station: "Relay",
      description: "Inside either blue or red nebula space, the Relay Call FC control and GM FC status read FC: OFF - Disrupted, and calls cannot connect. Leaving the field restores the previous Flight Control state. Destroying the generator ends the disruption as the field collapses."
    },
    {
      id: "rescue-tracking",
      name: "Rescue tracking",
      station: "Relay",
      description: "From launch, Relay shows RESCUE STATUS, Ships Contacted and Ships Docked on three separate lines. Ships Contacted increases when Science sends a rescue vessel the nebula data; Ships Docked increases when it reaches its destination. Within 5U of a rescue vessel Relay shows its name; otherwise it reads No ship detected."
    },
    {
      id: "nebula-overlay",
      name: "Nebula route overlay",
      station: "Relay",
      description: "After the Umbra data handoff, Display Nebula Route shows blue lower-exposure corridors and red hazardous space on the shared radar. The same control hides the overlay. Blue still causes slow damage, while red exposure becomes dangerous rapidly."
    },
    {
      id: "send-nebula-data",
      name: "Send Nebula Data",
      station: "Science",
      description: "Science can detect a rescue ship within 5U from launch, but Send Nebula Data appears only after the GM presses Release Relay Route. Within 5U of an unsynced ship, sending the data unlocks that ship's GM release control; destroying its AXIS attackers is not required for the upload. The Science upload control is removed when Reveal AXIS Base is pressed after all four ships are synced."
    },
    {
      id: "axis-signal-trace",
      name: "AXIS Signal Trace",
      station: "Science",
      description: "After Reveal AXIS Base, Science receives the next target bearing and Vanguard's current bearing below it. Outside the field the trace first points to the safe entrance; inside it follows connected blue corridors towards AXIS GENERATOR. The bearing updates at turns and gives no distance."
    },
    {
      id: "recall-jump",
      name: "Emergency Recall Jump",
      station: "Engineering / Engineering+",
      description: "Both engineering screens show the nebula hazard readout and share Recall Jump (5). Each use immediately returns Vanguard to its Homestead start point, logs the use, shows a popup with uses remaining and vents heat over two seconds. The control disappears from both screens after the fifth use. It does not repair damage."
    },
    {
      id: "mine-self-destruct",
      name: "Mine Self Destruct",
      station: "Weapons / Tactical / SinglePilot",
      description: "After Reveal AXIS Base, the same one-use control appears on all three weapons layouts. It works only within 25U of the generator with a live AXIS mine within 5U. Out of range it shows AXIS mines not detected nearby on the console used. A successful press destroys the mine screen, exposes the generator and removes the control from all three screens."
    }
  ],
  dbEntries: []
};

const pages = [
  {
    id: "rescue-list",
    title: "The Rescue List",
    database: "--MISSION INTEL--",
    group: "--MISSION INTEL--",
    trigger: "Mission start",
    body: `UFN SCIENCE CORPS // SEARCH AND RECOVERY LOG

Four vessels remain unaccounted for following the field's sudden appearance. These sectors come from their last reliable transponder returns. Treat each as a search area, not a precise fix.

UFN Asteria
Role: Personnel transport
Commanding officer: Captain Jonah Rell
Last verified sector: B15


TSN Halley
Role: Research science ship
Commanding officer: Commander Daniel Keene
Last verified sector: G16


UFN Larkspur
Role: Cargo freighter
Commanding officer: Captain Samuel Orlan
Last verified sector: B19


Due to Umbra support, we have also agreed to find the following Umbra vessel. IFF has been changed for this deployment to show Umbra as friendly. All Umbra ships have agreed to a ceasefire for the duration of this mission.


UMB Helix
Role: Scientific survey ship
Commanding officer: Director Anton Sorel
Last verified sector: G20`
  },
  {
    id: "hazard-advisory",
    title: "Nebula Hazard Advisory",
    database: "--MISSION INTEL--",
    group: "--MISSION INTEL--",
    trigger: "Mission start",
    body: `UFN SCIENCE CORPS // CRITICAL FLIGHT ADVISORY

The field appeared within the last twenty-four hours and remains highly unstable. Preliminary scans show dense charged particles caught in rapidly shifting magnetic currents. These currents induce power surges through the hull and ship's conduits while interfering with heat dissipation. The resulting thermal load and electrical arcing spread through every ship system. Damage can build to catastrophic levels with continued exposure; propulsion, shields, weapons and sensors must all be treated as vulnerable. Do not remain in the field longer than the rescue requires.

To support this rescue operation, Fleet Engineering fitted the assigned rescue vessel with an emergency Recall Jump drive before departure. It is pre-calibrated to the ship's starting point beside UFN Homestead, allowing extraction if the crew becomes trapped or critical systems begin to fail. Engineering has five recall uses available. Activation jumps the ship back instantly. The jump does not repair damaged systems; residual heat vents over approximately two seconds after arrival. Dock at Homestead for repairs and rearming before another attempt.

UFN Science Corps | Hazard Assessment Division`
  },
  {
    id: "umbra-overlay",
    title: "Umbra Nebula Overlay",
    database: "--MISSION INTEL--",
    group: "--MISSION INTEL--",
    trigger: "GM presses Release Relay Route after the Umbra briefing",
    body: `UMB HORIZON ARRAY // TRANSIT DATA FILE

The survey data we have supplied has allowed the rescue vessel's Relay station to chart areas of the nebula that are less dangerous to cross. The Display Nebula Route control places our assessment on the shared radar; the same control can hide it again.

BLUE marks connected corridors and pockets where exposure is lower. The nebula will still cause some system damage there, but it should be minimal beside the damage sustained in RED regions. RED marks unstable gas where heat rises sharply and damage becomes progressively more severe the longer a ship remains inside. Do not treat a blue corridor as shelter.

The mapped corridors branch, loop and sometimes end without an exit. Check the overlay at each junction and be prepared to retrace your course. A direct line between two contacts may cross dangerous gas even when both contacts lie in blue pockets.

Umbra has authorised temporary use of our survey systems for this rescue. When within close range of a stranded vessel, Science can use Send Nebula Data to transfer the route to its crew. We trust Fleet Command will remember this gesture when Umbra next asks for a little cooperation.`
  },
  {
    id: "axis-signal-trace",
    title: "AXIS Signal Trace",
    database: "--MISSION INTEL--",
    group: "--MISSION INTEL--",
    trigger: "GM presses Reveal AXIS Base after all four uploads and the UMB Helix encounter",
    body: `UMB HELIX // SIGNAL TRACE FILE

Our survey instruments have isolated a repeating transmission inside the nebula. It leads to an AXIS installation. We have transferred the trace to the rescue vessel's Science station, where it appears as AXIS Signal Trace.

READING THE TRACE
The upper bearing points to the next turn towards the AXIS installation. The lower bearing is the ship's current heading. Bearings run clockwise from north: 000 north, 090 east, 180 south, 270 west. Bring the current heading onto the target bearing and check again as the ship advances. No reliable distance can be derived from this signal.

The route may bend or double back; follow each updated bearing rather than steering directly towards the installation.`
  },
  {
    id: "umbra-countermeasure",
    title: "Umbra Mine Countermeasure",
    database: "--MISSION INTEL--",
    group: "--MISSION INTEL--",
    trigger: "GM presses Reveal AXIS Base after all four uploads and the UMB Helix encounter",
    body: `UMB HELIX // RESTRICTED COUNTERMEASURE RELEASE

Umbra has cracked the AXIS mine self-destruct codes surrounding the installation we detected. The codes themselves remain classified. We are providing the rescue vessel with a sealed, one-use transmitter that can issue the command without exposing the underlying sequence.

Weapons can transmit the Mine Self Destruct command. The ship must be within radar range of the AXIS host station to disarm its mine defense system. The transmitter will connect only when its mine screen can be detected nearby. If no AXIS mines are in range, the console will report that none have been detected. The transmitter can fire only once.

Destroying individual mines before transmission will not open a lasting gap: the screen replenishes. A successful transmission destroys the mine screen and exposes the generator, but expect AXIS defenders to deploy immediately.`
  }
];

if (!missions.some(entry => entry.id === mission.id)) missions.push(mission);
customDbPages[mission.id] = pages;

