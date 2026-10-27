// OP15: Operation Harvest (source: scenario_OP15_operationHarvest.lua).
// GM reference only: the site does not send controls to EmptyEpsilon.
import { missions } from "./missions.js?v=16";
import { customDbPages } from "./db-pages.js?v=16";

const mission = {
  id: "harvest",
  code: "OP15",
  campaign: "UFN Operations",
  name: "Operation: Harvest",
  strap: "OP15 · UFN Operation",
  status: "GM notes loaded",
  artwork: "assets/missions/harvest.jpg",
  artPosition: "80% 50%",
  recap: [
    {
      title: "Mission Synopsis",
      body: "Resolute is sent to observe GST Hearthside Habitat after UFN drones are seen servicing it. Kinsey, hunted by UFNI, sends a desperate note aboard UFNI Whisper and asks the crew to speak to Grifter. At Hearthside, Grifter says UFNI has spent months taking food and medicine from Ghost civilians. His tracker leads Resolute through three increasingly dangerous UFNI patrols to a hidden signal in a nebula. Grifter proposes a desperate transfer: the crew arms Resolute's native self-destruct and appears aboard the empty UFNI Anderson. Anderson's records expose Operation FALLOW, Commodore Mayfield's plan to deprive Ghost settlements of essentials. UFNI pursuers attack. The crew then reaches GST Haven Seven Habitat, where his Janus fleet is poised to raid civilian stores. The players choose whether to protect the Ghosts or support UFNI; the GM runs the outcome and debrief."
    }
  ],
  mechanisms: [
    {
      id: "opening-and-kinsey",
      kind: "note",
      label: "Opening brief and Kinsey's note",
      description: "Brief the crew to observe Hearthside, sector D2. Press Kinsey Note when ready: UFNI Whisper delivers Kinsey's dispatch by supply pod. Resolute's drive is locked during delivery and releases when the note arrives. The Kinsey - Dispatch database page then appears. The GM voices Kinsey; the button is one use."
    },
    {
      id: "grifter",
      kind: "note",
      label: "Grifter at Hearthside",
      description: "Hearthside is a civilian habitat with light defences and family traffic. Play Grifter's conversation aboard the station, then press Grifter Note to download his raid report and tracker instructions. This enables the Relay and Science trace; it cannot trigger before the note."
    },
    {
      id: "alignment",
      kind: "note",
      label: "Allegiance controls",
      description: "The crew begins friendly to UFNI. The Aligned: UFNI / Aligned: Ghosts button shows the current side; press it to switch between them. Use it after Grifter as the story requires. Boarding Anderson sets Ghost alignment automatically. Press it again if the crew later sides with UFNI."
    },
    {
      id: "trace",
      kind: "note",
      label: "Carrier trace and patrols",
      description: "After Grifter Note, Relay shows live range and Science shows bearing to three fixed echoes. The route bends between readings and stays clear of the ZZ sectors. Within 2.5U of each echo, a Level 1 drive lock and decloaking UFNI patrol trigger: two ships, then three, then four. Destroy the wave to reveal the next reading. The final signal points to Anderson's concealed berth."
    },
    {
      id: "anderson-transfer",
      kind: "note",
      label: "Hidden Anderson and transfer",
      description: "Anderson is created in the hidden nebula when Resolute's native Engineering self-destruct detonates. Guide the crew to the signal before they arm it; the transfer itself has no range check. All player stations receive the teleport message. The Kinsey and Grifter pages and trace readouts clear, and Anderson's three files appear. Both player ships resist combat destruction."
    },
    {
      id: "anderson-pursuit",
      kind: "note",
      label: "UFNI pursuit after boarding",
      description: "Three hostile UFNI interceptors decloak shortly after transfer. Anderson has two centrally placed side beams and two missile tubes: forward loads everything except mines, rear loads all ordnance. Nukes require GM authorisation through REINFORCE > on either player ship."
    },
    {
      id: "final-encounter",
      kind: "note",
      label: "Haven Seven and Janus",
      description: "Haven Seven, sector H11, is a civilian habitat with modest defences and family traffic. Commodore Mayfield commands UFNI Janus and six escorts. The GM voices Mayfield and lets the crew choose a side. Start Fight appears after Anderson transfer; press it to send four UFNI assault ships against the station. The GM handles the battle's outcome and debrief."
    },
    {
      id: "janus-retreat",
      kind: "note",
      label: "Janus retreat",
      description: "Janus resists combat destruction. Janus Run on the GM menu, or 10% hull, starts a fast warp escape away from the player. Janus despawns only after moving beyond long-range radar; its escorts remain."
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
      id: "harvest-self-destruct",
      name: "Native self-destruct transfer",
      station: "Engineering",
      description: "At Grifter's cue near the hidden signal, arm and confirm the built-in self-destruct using the normal Engineering controls. When Resolute detonates, the crew moves to UFNI Anderson and each station receives a teleport message. The code does not gate this transfer by distance."
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
    trigger: "UFNI Whisper's pod arrives; removed on Anderson transfer",
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

Commodore Mayfield
Commanding Officer, UFNI Janus`
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

Signed: Commodore Mayfield, Commanding Officer, UFNI Janus
Approved: Rear Admiral [REDACTED]`
  },
  {
    id: "fallow-legal-review",
    title: "Fallow - Legal Review",
    database: "--MISSION INTEL--",
    group: "--MISSION INTEL--",
    trigger: "Crew boards UFNI Anderson",
    body: `* OVERVIEW OF PROPOSED ACTION *
The Operation Fallow file proposes repeated UFNI raids on Ghost civilian settlements. Ships would take food, medicine and equipment needed to keep water, clinics and other essential services running. The stated aim is to create enough hunger, illness and hardship that civilian families turn against Ghost leadership and demand its surrender.

* LEGAL REVIEW *
UFN engagement rules protect civilians and the supplies they need to survive. Fallow selects those supplies precisely because their loss will harm the people who depend on them. The proposed seizures are therefore deliberate attacks on civilian welfare, not lawful recovery of military assets. This office finds no legal basis on which to authorise any raid under the plan.

* ETHICAL CONSIDERATIONS *
The UFN code of service asks officers to defend lives, exercise restraint and uphold its principles even during war. Fallow treats the suffering of families as a weapon. The claim that any method is acceptable if it weakens the Ghosts is incompatible with that code. A surrender won by making civilians hungry and sick would cost the UFN the standards it exists to defend.

* CONCLUSION *
Operation Fallow is illegal and contrary to the UFN code of service. Legal clearance is denied in full. Withdraw the proposal and refer it to UFN command before any deployment. Any officer found engaging in the conduct proposed by Operation Fallow, or using similar methods to coerce a civilian population, may face court-martial under UFN service law.

UFNI Legal Review Office`
  },
  {
    id: "mayfield-reply-to-legal",
    title: "Mayfield Reply to Legal",
    database: "--MISSION INTEL--",
    group: "--MISSION INTEL--",
    trigger: "Crew boards UFNI Anderson",
    body: `To the UFNI Legal Review Office,

Your ruling has sat on my desk for three days. I have tried to find an answer to it, but I keep returning to the same question: what am I to tell the next crew I send into Ghost space?

Seven years ago, Ghost raiders killed my wife and our son aboard a medical transport. I know how readily grief can distort a man's judgement. That is why I did not bring Fallow to you when I first conceived of it. I waited. I fought this war by the rules. Since then, savage Ghost attacks have taken commanding officers I trusted with my life. I have written to their families and met crews who came home without the people who led them out.

Our ships are running short of supplies. We can win another engagement, but we cannot replace every experienced commander or ask their crews to endure this indefinitely. I need a way to make Ghost leadership end these raids.

I have read every objection in your finding. I am not asking you to set your judgement aside. I am asking you to help me find terms under which you could bring Fallow before Fleet Command. Set limits and oversight. Require me to answer for every order given under it. If you can show me another course that might end this campaign in time, I will take it.

Please reconsider. I have to return to those crews with more than an instruction to hold the line.

Commodore Mayfield
Commanding Officer, UFNI Janus`
  }
];

if (!missions.some(entry => entry.id === mission.id)) missions.push(mission);
customDbPages[mission.id] = pages;
