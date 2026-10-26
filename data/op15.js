// OP15: Operation Harvest (source: scenario_OP15_operationHarvest.lua).
// GM reference only: the site does not send controls to EmptyEpsilon.
import { missions } from "./missions.js?v=16";
import { customDbPages } from "./db-pages.js?v=16";

const mission = {
  id: "harvest",
  code: "OP15",
  campaign: "UFN Operations",
  name: "Operation: Harvest",
  strap: "OP15 · A strange message from a rogue Commodore leads to a terrible truth...",
  status: "Playtest build",
  artwork: "assets/missions/harvest.jpg",
  artPosition: "80% 50%",
  recap: [
    {
      title: "Mission Synopsis",
      body: "Resolute is sent to observe GST Hearthside Habitat after UFN drones are seen servicing it. Kinsey, hunted by UFNI, sends a desperate note aboard UFN Whisper and asks the crew to speak to Grifter. At Hearthside, Grifter says UFNI has spent months taking food and medicine from Ghost civilians. His tracker leads Resolute through three increasingly dangerous UFNI patrols to a hidden signal in a nebula. Grifter proposes a desperate transfer: the crew arms Resolute's native self-destruct and appears aboard the empty UFNI Anderson. Anderson's records expose Operation FALLOW, Mayfield's plan to deprive Ghost settlements of essentials. UFNI pursuers attack. The crew then reaches GST Haven Seven Habitat, where Mayfield's Janus fleet is poised to raid civilian stores. The players choose whether to protect the Ghosts or support UFNI; the GM runs the outcome and debrief."
    },
    {
      title: "GM story beats",
      body: "Brief the observation of Hearthside. Send Kinsey's note while en route. At Hearthside, play Grifter's conversation and release his two records. Guide the crew through the three tracker echoes and patrols. At the signal fix, voice Grifter's self-destruct idea. After transfer, let the crew read Anderson's files and survive its UFNI pursuit. On the way to Haven Seven, play Mayfield and let the crew choose a side. Start the raid, then adjudicate the battle and debrief by voice. There are no scripted comms choices or automatic mission outcomes."
    }
  ],
  mechanisms: [
    {
      id: "opening-and-kinsey",
      kind: "note",
      label: "Opening brief and Kinsey's note",
      description: "The GM briefs the crew to observe Hearthside, sector D2; that briefing is spoken, not scripted. Press Kinsey Note when ready. UFN Whisper flies in and delivers a supply pod. Resolute's drives lock during delivery, then restore when the pod arrives. Kinsey - Dispatch appears under --MISSION INTEL--. The note is a one-shot GM cue."
    },
    {
      id: "grifter",
      kind: "note",
      label: "Grifter at Hearthside",
      description: "Hearthside is a civilian habitat with weak local ships and cargo traffic; they may be hostile before the GM changes allegiance. Play Grifter's conversation in person. Press Grifter Note to download Grifter - Raid Report and Grifter - Tracker. No scripted comms dialogue or Grifter delivery drone is used."
    },
    {
      id: "alignment",
      kind: "note",
      label: "Allegiance controls",
      description: "The crew begins aligned with UFNI. Aligned: UFNI / Aligned: Ghosts is a read-only GM status button. Change Allegiance switches between those states at any time; it is never locked. Use Ghost alignment after Grifter if appropriate. Boarding Anderson sets Ghost alignment automatically. At Mayfield, use Change Allegiance again only if the crew chooses UFNI. The GM decides which faction is hostile to the players."
    },
    {
      id: "trace",
      kind: "note",
      label: "Carrier trace and patrols",
      description: "The three fixed echoes progress LOW, MEDIUM, HIGH. Relay shows live range; Science shows live bearing. The crew plots its own course and waypoints. Within 2.5U of an echo, a Level 1 drive lock and hostile UFNI patrol trigger: two, then three, then four ships, using decloak spawns. Clear Helms lock and destroy the whole wave to reveal the next echo. After the third wave, the consoles show SIGNAL LOCKED; at the hidden site they show SIGNAL REACHED. No database page updates during the trace."
    },
    {
      id: "anderson-transfer",
      kind: "note",
      label: "Hidden Anderson and transfer",
      description: "Anderson has no normal pre-transfer spawn and is not visible to players while they trace it. It is created at the nebula signal position when Resolute's native Engineering self-destruct detonates. The self-destruct remains available throughout the mission, and the transfer callback does not check range; guide the crew there by voice before they arm it. All player stations receive the teleport message. The earlier Kinsey and Grifter database pages and Relay/Science tracker readouts are removed; Anderson's three files appear. A ship-log standby record explains that Anderson was concealed and its crew reassigned to Janus. Both player ships are non-destroyable by combat."
    },
    {
      id: "anderson-pursuit",
      kind: "note",
      label: "UFNI pursuit after boarding",
      description: "Three hostile UFNI interceptors decloak near Anderson shortly after the transfer. The new ship has paired port/starboard beams, flank missile tubes and an aft mine tube, with roughly Resolute-level power. Use the fight to press the crew to read the files and leave the nebula."
    },
    {
      id: "final-encounter",
      kind: "note",
      label: "Haven Seven and Janus",
      description: "Haven Seven, sector H11, is a civilian habitat with food and medical stores, modest defenders and several cargo or family ships. Mayfield commands UFNI Janus with six escorts. The three already-raided Ghost settlements are Mossbank I5, Lantern Reach I9 and Quiet Harbour G1. These sites and the entire Haven/Janus encounter are created in place only after Anderson transfer, apart from deliberate DEBUG previews. The GM voices Mayfield and the crew chooses a side."
    },
    {
      id: "start-raid",
      kind: "note",
      label: "Start the final raid",
      description: "Start Raid appears after boarding Anderson. Press it when the encounter should begin; four UFNI assault ships attack Haven Seven while the others hold position. Change Allegiance determines which side is hostile to the players. The script does not track or declare an ending; the GM handles the result and debrief."
    },
    {
      id: "gm-controls",
      kind: "note",
      label: "GM button list",
      description: "Main menu: Kinsey Note sends Whisper; Grifter Note downloads the two Grifter pages and enables the tracker; Change Allegiance switches sides; Aligned: UFNI / Aligned: Ghosts displays status without changing it; Start Raid launches the final assault after transfer; DEBUG > opens test visibility controls. Standard HACKS >, COMBAT SPAWN > and REINFORCE > menus remain available. Standard UFN reinforcements are friendly to the player; UFN combat spawns are hostile."
    },
    {
      id: "debug-controls",
      kind: "note",
      label: "DEBUG visibility controls",
      description: "DEBUG > offers Show/Hide Traces, Show/Hide Anderson (preview before transfer), Show/Hide Raid Sites and Show/Hide Final. These are GM test controls. Showing a preview creates it at its real map position; hiding removes it. The controls do not place player waypoints."
    },
    {
      id: "runtime-status",
      kind: "note",
      label: "Playtest status",
      description: "Load scenario_OP15_operationHarvest.lua with the standard EE packages. The separate native self-destruct transfer test succeeded. The full Operation Harvest mission has passed Lua syntax checks but still needs an EmptyEpsilon multiplayer playtest for GM buttons, database transitions, faction behaviour, patrol timing, crew transfer and the final raid."
    }
  ],
  playerMechanics: [
    {
      id: "harvest-relay-tracker",
      name: "Grifter's tracker range",
      station: "Relay",
      description: "After Grifter Note, Relay gains the tracker label, operational or lock status, signal strength and live range in U. The reading advances only after the current UFNI patrol is destroyed. It reads SIGNAL REACHED at the hidden position."
    },
    {
      id: "harvest-science-tracker",
      name: "Grifter's tracker bearing",
      station: "Science",
      description: "Science gains the tracker label, status and live bearing in degrees from Resolute's current position. Combine it with Relay's range to steer to each echo; players place any waypoints themselves."
    },
    {
      id: "harvest-helm-lock",
      name: "Trace-point drive lock",
      station: "Helms",
      description: "Each trace-point patrol triggers a Level 1 drive lock. Clear it using the standard Helms procedure while Weapons deals with the attackers."
    },
    {
      id: "harvest-self-destruct",
      name: "Native self-destruct transfer",
      station: "Engineering",
      description: "At Grifter's cue near the hidden signal, arm and confirm the built-in self-destruct using the normal Engineering controls. When Resolute detonates, the crew moves to UFNI Anderson and each station receives a teleport message. The code does not gate this transfer by distance."
    },
    {
      id: "harvest-anderson-fit",
      name: "Anderson weapon layout",
      station: "Weapons",
      description: "Anderson's beams fire from port and starboard banks rather than Resolute's forward pair. Missile tubes face opposite flanks; the aft tube launches mines."
    }
  ],
  dbEntries: []
};

const pages = [
  {
    id: "kinsey-dispatch",
    title: "Kinsey - Dispatch",
    database: "--MISSION INTEL--",
    group: "--MISSION INTEL--",
    trigger: "UFN Whisper's pod arrives; removed on Anderson transfer",
    body: `Captain,

UFNI is hunting me. I have changed ships twice and I cannot risk a direct transmission. Whisper was the only way I could reach you, but they may have tracked its flight. I think they are coming for Resolute now too. I am sorry I have brought this to your door. Please hear me out.

UFNI has been taking food and medicine from Ghost civilian settlements and calling it military seizure. Families are going without, and their clinics are running dry. Grifter has seen the cargo records and the people those raids hurt. He can lead you to the proof.

Go to Grifter at GST Hearthside Habitat, sector D2. Tell him I sent you. Do not send this through Intelligence. Find the evidence before they catch either of us. If they silence me and strip another settlement, there may be nobody left in the UFN willing to warn you.

I'm counting on you...

Kinsey`
  },
  {
    id: "grifter-raid-report",
    title: "Grifter - Raid Report",
    database: "--MISSION INTEL--",
    group: "--MISSION INTEL--",
    trigger: "GM presses Grifter Note; removed on Anderson transfer",
    body: `Like we talked about... UFNI's been lifting food, medicine, clinic stock and power cells off Ghost settlements for months. "Military seizure", they call it! I've seen the shelter lists. Seen the clinic requests too. That's dinner for families and medicine for sick kids they're carting off.

I took the records to every UFN officer I could get near. More than once! Most barely looked at 'em. Said it was Ghost propaganda, sent me packing. Maybe none of it got past their desks... Far as I can tell, nobody up there gives a damn what happens to Ghost civilians.

I've kept the cargo marks and dates. The signed orders are on that UFNI ship I've been tracking. Find it and you'll have more than my word for all this. Don't let 'em bury it.

Grifter`
  },
  {
    id: "grifter-tracker",
    title: "Grifter - Tracker",
    database: "--MISSION INTEL--",
    group: "--MISSION INTEL--",
    trigger: "GM presses Grifter Note; removed on Anderson transfer",
    body: `I've fitted a tracker to Resolute. It's following that damned UFNI ship's carrier signal... far as I can tell. Can't see the bloody thing on radar. Need three good readings, spread out, before we can nail down where it's hiding.

Look at the extra bits on Relay and Science. Relay tells you how strong the signal is and how far you are from the next echo, in U. Science gives you a bearing in degrees from where you are now. Steer by both. The numbers'll change as you move. Set your own waypoint if it helps.

Get within 2.5U and the tracker'll grab the reading on its own. UFNI patrols'll be sniffing round each echo, you can bet on that! Deal with 'em, then look at Relay and Science again. The signal'll get stronger the further along the trail you go. Once it's locked, we've got the ship's position. When it says you've reached the signal, you're right on top of the bastard... even if you still can't see it.

You find it, I'll find a way to get you aboard. Just don't let 'em catch you first.

Grifter`
  },
  {
    id: "anderson-cargo-log",
    title: "Anderson - Cargo Log",
    database: "--MISSION INTEL--",
    group: "--MISSION INTEL--",
    trigger: "Crew boards UFNI Anderson",
    body: `* EXTERNAL UFN REPORT *
UFNI has removed the following Ghost assets from circulation:
GST Mossbank, sector I5 — Weapons crates and targeting gear. Their seizure denies Ghost raiders the tools to strike UFN patrols.
GST Lantern Reach, sector I9 — Shield cells and military power units. Their recovery weakens Ghost defences along UFN supply routes.
GST Quiet Harbour, sector G1 — Pirate munitions and combat rations. Their removal slows Ghost raids and protects UFN transports.
GST Haven Seven Habitat, sector H11 — Ghost missile stores and targeting systems seized. Their removal secures UFN ships against further strikes.

* INTERNAL UFNI REPORT *
Under Operation FALLOW, Anderson and Janus have recovered the following:
GST Mossbank, sector I5 — Shelter food and medical packs. Shortages will turn families against Ghost leadership.
GST Lantern Reach, sector I9 — Water-treatment parts and clinic power cells. Service failures will undermine Ghost authority.
GST Quiet Harbour, sector G1 — Civilian relief rations. Hunger will drive residents to demand Ghost surrender.
GST Haven Seven Habitat, sector H11 — Food reserve and medical stores targeted. Attack pending.

Retain the true manifests aboard Anderson. Send UFN command only the approved external account. If anyone asks why the figures differ, there is no second set of figures.

Mayfield`
  },
  {
    id: "fallow-directive",
    title: "FALLOW - Directive",
    database: "--MISSION INTEL--",
    group: "--MISSION INTEL--",
    trigger: "Crew boards UFNI Anderson",
    body: `Operation FALLOW will break Ghost resistance by stripping its civilian settlements of food, medicine and the means to keep their services running. Anderson and Janus are to seize these supplies in repeated raids. Hunger, untreated illness and failing utilities will turn families against their own leaders until those leaders demand that Ghost command yield. The recovered stock will sustain UFNI, but the pressure on Ghost civilians is the purpose of this operation.

I selected this cell myself. Every officer in it has earned my trust and understands the silence required. I will not pretend that a Ghost household becomes harmless because its members carry no weapons. Every home shelters the cause. We will do what the UFN needs done, and command will see only the results.

I have read the Legal Review Office's finding that FALLOW is illegal under UFN rules. They may be right about the letter of those rules. Their conclusion is secondary to what is necessary and right for the UFN. I will not let a legal opinion leave our people short of supplies while Ghost resistance endures.

The true target list and manifests remain within this UFNI compartment. Flight Control and UFN Fleet Command are to receive the approved external reports only. No wider command authorisation or disclosure is to be sought while FALLOW is active.

Signed: Mayfield, UFNI Intelligence
Approved: Rear Admiral [REDACTED], UFNI Intelligence`
  },
  {
    id: "fallow-legal-review",
    title: "FALLOW - Legal Review",
    database: "--MISSION INTEL--",
    group: "--MISSION INTEL--",
    trigger: "Crew boards UFNI Anderson",
    body: `* OVERVIEW OF PROPOSED ACTION *
The Operation FALLOW file proposes repeated UFNI raids on Ghost civilian settlements. Ships would take food, medicine and equipment needed to keep water, clinics and other essential services running. The stated aim is to create enough hunger, illness and hardship that civilian families turn against Ghost leadership and demand its surrender.

* LEGAL REVIEW *
UFN engagement rules protect civilians and the supplies they need to survive. FALLOW selects those supplies precisely because their loss will harm the people who depend on them. The proposed seizures are therefore deliberate attacks on civilian welfare, not lawful recovery of military assets. This office finds no legal basis on which to authorise any raid under the plan.

* ETHICAL CONSIDERATIONS *
The UFN code of service asks officers to defend lives, exercise restraint and uphold its principles even during war. FALLOW treats the suffering of families as a weapon. The claim that any method is acceptable if it weakens the Ghosts is incompatible with that code. A surrender won by making civilians hungry and sick would cost the UFN the standards it exists to defend.

* CONCLUSION *
Operation FALLOW is illegal and contrary to the UFN code of service. Legal clearance is denied in full. Withdraw the proposal and refer it to UFN command before any deployment. Any officer found engaging in the conduct proposed by Operation FALLOW, or using similar methods to coerce a civilian population, may face court-martial under UFN service law.

UFNI Legal Review Office`
  }
];

if (!missions.some(entry => entry.id === mission.id)) missions.push(mission);
customDbPages[mission.id] = pages;
