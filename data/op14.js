// OP14: Operation Special Delivery (source: scenario_OP14_operationSpecialDelivery.lua)
// Extend existing mission data without replacing any previous missions.
import { missions } from "./missions.js?v=16";
import { customDbPages } from "./db-pages.js?v=16";

const mission = {
  "id": "special-delivery",
  "code": "OP14",
  "campaign": "UFN Operations",
  "name": "Operation: Special Delivery",
  "strap": "OP14 · Classified cargo recovery",
  "status": "GM notes loaded",
  "artwork": "assets/missions/special-delivery.png",
  "recap": [
    {
      "title": "Mission Synopsis",
      "body": "A classified shipment destined for a UFNI contact is seized when GST Hijack immobilises the crew’s vessel and steals its secure cargo. Flight Control redirects the crew to recover the consignment, relying on an experimental directional beam and additional supplies acquired during the mission. The crew assists Kestrel Outpost during a Ghost attack and receives cargo with a lead towards the ITG Supply Station. There the Guild offers two bounties, defending a fuel freighter and destroying GST Warehouse 21, in either order. Completing the encounters advances the cargo locator towards identifying GST Hijack. The crew must intercept the raider and recover the consignment."
    }
  ],
  "mechanisms": [
    {
      "id": "theft-and-drive-lock",
      "kind": "note",
      "label": "Theft and drive lock",
      "description": "The GM triggers Drive Lock and the opening theft. Unarmed, indestructible GST Hijack warps in from 25u and drops warp near 1.5u; Relay logs the cargo bay breach at that moment. Hijack closes to 1u on impulse, then a visible cargo object moves into the craft before Relay logs ALL CARGO TAKEN. Hijack is ordered to warp away at speed 4000. Drive Lock releases at 20u with the Control Reasserted log. Once Hijack leaves long-range sensors and despawns, the Cargo Locator starts and its field guide appears."
    },
    {
      "id": "kestrel-outpost",
      "kind": "note",
      "label": "Kestrel Outpost",
      "description": "GM triggers the Kestrel Ghost raid and separately sends its thank-you cargo. These controls are independent; continue the story by voice."
    },
    {
      "id": "itg-bounty-contracts",
      "kind": "note",
      "label": "ITG bounty contracts",
      "description": "Two Guild bounties may be undertaken in either order: clear all three Ghost interceptors around the indestructible ITG Fuel Freighter, and destroy GST Warehouse 21. Each completion sends its own BOUNTY COMPLETE Relay log and raises the locator ceiling."
    },
    {
      "id": "gm-reward-options",
      "kind": "note",
      "label": "GM reward options",
      "description": "Once all three attackers are destroyed, the freighter's GM reward is either 2 Homing plus 2 EMP or one each of Crystal, Capacitor and Matrix, sent by supply drop. It also has limited comms trade. The ITG Supply Station provides GM TAKE and GIVE packages plus docked fitting controls."
    },
    {
      "id": "trading-and-upgrades",
      "kind": "note",
      "label": "Trading and upgrades",
      "description": "Common cargo has trade value 1, rare cargo 2. Station ordnance purchases arrive by visible supply drop; permanent fittings require docking. Five upgrades are available, each fitted once."
    },
    {
      "id": "cargo-locator-and-final-target",
      "kind": "note",
      "label": "Cargo locator and final target",
      "description": "The locator progresses 1% every 20 seconds. Its initial ceiling is 13%; receiving Kestrel's cargo raises it to 32%, the first completed bounty to 74%, and the second to 91%. The GM can raise the ceiling to 100% and accelerate the trace to 1% every 2 seconds. At 100%, Relay receives the B11 target location, the location page is added to the database, and GST Hijack spawns there for interception."
    },
    {
      "id": "beam-configuration",
      "kind": "note",
      "label": "Beam configuration",
      "description": "Directional beam: forward 0°, starboard 90°, aft 180°, port 270°. Base range 3,000, 15° arc, 5-second cycle, 20 damage. Each shot draws 20 energy and adds 0.15 beam-system heat. Sustained fire can overheat the system; Engineering can manage the heat with coolant. Activation warms up for five seconds; changing direction disables it."
    },
    {
      "id": "supply-deliveries",
      "kind": "note",
      "label": "Supply deliveries",
      "description": "SupplyDrop objects launch clear of friendly ships and travel to the crew ship in approximately seven seconds. Cargo or ordnance is credited on arrival, or immediately if the crew intercepts the box. SUPPLY RECEIVED lists what was actually delivered; missiles beyond storage capacity are omitted and reported as NOT LOADED."
    }
  ],
  "playerMechanics": [
    {
      "id": "directional-beam-control",
      "name": "Directional beam control",
      "station": "Weapons",
      "description": "Select forward, starboard, aft or port and activate the directional beam. It requires a five-second warm-up; a direction change cancels activation. Base range 3,000, damage 20, cycle 5 seconds, arc 15°. Each shot draws 20 energy and adds 0.15 beam-system heat. Sustained fire can overheat the system; Engineering can manage the heat with coolant."
    },
    {
      "id": "cargo-locator",
      "name": "Cargo locator",
      "station": "Relay",
      "description": "Monitor the locator percentage after Hijack has left sensor range and despawned. The trace progresses automatically, with its ceiling raised as evidence is obtained. At 100%, Relay receives the target's B11 location and a database page is added."
    },
    {
      "id": "cargo-hold-and-secure-storage",
      "name": "Cargo hold and secure storage",
      "station": "Relay",
      "description": "Open CARGO HOLD to view trading inventory, trade value and whether Secure Storage is Full or Empty. Items with zero quantity are hidden."
    },
    {
      "id": "itg-trading",
      "name": "ITG trading",
      "station": "Crew / Comms",
      "description": "Trade common and rare components at exact value through ITG Supply Station communications. Ordnance is delivered by supply drop; permanent upgrades are fitted while docked."
    },
    {
      "id": "supply-receipt",
      "name": "Supply receipt",
      "station": "Relay",
      "description": "SUPPLY INBOUND announces the delivery. SUPPLY RECEIVED lists actual cargo and ordnance loaded when the delivery reaches the ship."
    }
  ],
  "dbEntries": []
};
const pages = [
  {
    "id": "directional-laser-guide",
    "title": "Directional Laser — Operator Guide",
    "database": "--MISSION INTEL--",
    "group": "--MISSION INTEL--",
    "trigger": "Mission start",
    "body": "DIRECTIONAL LASER | OPERATOR GUIDE\n\nThe directional laser is an auxiliary beam with a narrow 15-degree firing arc. It can face forward (0 degrees), starboard (90 degrees), aft (180 degrees), or port (270 degrees).\n\nOn Weapons, use the LASER ARC buttons to select a direction. Select a target and bring it within the arc and 3,000-unit range. Press ACTIVATE LASER and allow five seconds for warm-up. The beam fires automatically at a valid target while active, cycling every five seconds and dealing 20 damage per hit.\n\nChanging direction deactivates the laser and requires another warm-up. Use DEACTIVATE LASER when the extra firepower is no longer needed.\n\nEach shot consumes 20 ship energy and adds 15% to beam-system heat. Sustained fire can overheat the system, especially while other beams are firing. Monitor energy and beam heat at Engineering, apply coolant, and pause firing to let the system cool. Sustained overheating can damage the beam system."
  },
  {
    "id": "itg-price-list",
    "title": "ITG SS - Price List",
    "database": "--MISSION INTEL--",
    "group": "--MISSION INTEL--",
    "trigger": "First docking at ITG Supply Station",
    "body": "ITG SUPPLY STATION | CUSTOMER PRICE LIST\nReady for your next run? The ITG Supply Station keeps your ship supplied and fighting fit with proven ordnance and precision fittings.\nPayment: exact trade value in parts. Common parts count as 1 each; rare parts count as 2 each.\n\nORDNANCE | DELIVERED BY SUPPLY DROP\n4 HVLI — 1 trade value\n2 EMP — 1 trade value\n2 Mine — 1 trade value\n3 Homing — 1 trade value\n1 Nuke — 4 trade value\n\nFITTINGS | INSTALLED WHILE DOCKED\nExtended Focusing Array — 4 trade value. Directional-beam range increases from 3,000 to 4,500; energy cost rises by 2 per shot.\nRapid Capacitor — 4 trade value. Directional-beam cycle time falls from 5 to 4 seconds; heat rises by 0.015 per shot.\nOvercharged Emitter — 5 trade value. Directional-beam damage rises from 20 to 25 per shot; energy cost rises by 4 and heat by 0.02 per shot.\nEngine Tuning — 5 trade value. Forward and reverse impulse speed and turn rate increase by 20%.\nShield Reinforcement — 6 trade value. Maximum shield capacity increases by 25%.\n\nOrder and pay through station comms. After payment, select Fit while docked for installations. Ordnance is dispatched to your ship by supply drop."
  },
  {
    "id": "itg-weekly-bounties",
    "title": "ITG SS - Bounties",
    "database": "--MISSION INTEL--",
    "group": "--MISSION INTEL--",
    "trigger": "First docking at ITG Supply Station",
    "body": "ITG SUPPLY STATION | WEEKLY BOUNTY BULLETIN\nTHIS WEEK'S AVAILABLE CONTRACTS\nThe Interstellar Trade Guild is accepting claims for the following two contracts. They may be completed in either order. Contact the ITG Supply Station to negotiate payment once the Guild has confirmed the work.\n\nBounty #8826 - Recover Cargo Ship - payment to be negotiated\nAn ITG fuel freighter has reported Ghost raiders on its route. Last confirmed location: sector F8. Locate the vessel, drive off its attackers, and help it return to Guild service. The Guild will assess the ship's condition before discussing payment.\n\nBounty #24442 - Destroy GST Base - payment to be negotiated\nGST Warehouse 21 in sector D10 is supporting raids on Guild shipping. Destroy the station and be prepared to face its defenders. The Guild will verify its destruction before discussing payment."
  },
  {
    "id": "cargo-locator-guide",
    "title": "Cargo Locator — Field Guide",
    "database": "--MISSION INTEL--",
    "group": "--MISSION INTEL--",
    "trigger": "Hijack despawns after the theft",
    "body": "CARGO LOCATOR | FIELD GUIDE\nThe locator is now tracking the missing Secure Cargo.\nTriangulation runs in the background, using the Cargo Anti Theft Tracking Device's signal to confirm successive bearings. The lock may hold while an uncertain bearing is resolved.\nAt full signal lock, the locator identifies the sector and coordinates of the vessel carrying the cargo."
  },
  {
    "id": "hijack-location",
    "title": "Cargo Locator — GST Hijack Location",
    "database": "--MISSION INTEL--",
    "group": "--MISSION INTEL--",
    "trigger": "Cargo Locator reaches 100%",
    "body": "CARGO LOCATOR | CONFIRMED SIGNAL\nTrace: 100%\nTarget: GST Hijack\nLocation: sector B11\nCoordinates: 131935, -72157\nSignal source: Cargo Anti Theft Tracking Device."
  }
];

if (!missions.some(entry => entry.id === mission.id)) missions.push(mission);
customDbPages[mission.id] = pages;
