# UFN GM Mobile — Skeleton

A phone-first GM companion app for EmptyEpsilon missions.

## What is already wired in
- Front page listing all 12 missions with mission artwork
- Mission screen with:
  1. Story Recap (full GM-memory breakdowns loaded)
  2. Special Mechanisms
  3. Mission Database (primary feature)
- Sticky phone navigation
- Searchable/filterable DB viewer
- Dedicated DB reader screen
- Portrait-first layout with landscape reflow
- PWA manifest + basic service worker for install/offline shell
- UFN dark navy / gold placeholder styling
- Mission-select artwork extracted into 12 lightweight mission thumbnails

## Mission content

All 12 GM story recaps are now populated. Special mechanisms and database pages remain intentionally data-driven placeholders for the final mission content.

## Where mission content goes
Edit `data/missions.js`.

Each mission supports:

```js
{
  recap: [
    { title: "Stage 1", body: "GM-only recap text" }
  ],
  mechanisms: [
    { id: "spawn-axis", label: "Spawn AXIS", description: "Creates two ships" }
  ],
  dbEntries: [
    {
      id: "historic-log",
      type: "Historical Log",
      title: "Twin Pines Historical Record",
      description: "Short picker description",
      body: "Full database page text"
    }
  ]
}
```

The skeleton does not yet execute EmptyEpsilon commands. The mechanism buttons are intentionally data-driven placeholders so mission-specific behaviour can be attached later.

## Training portal assets
This build uses neutral UFN placeholder styling only. When the training portal files are supplied, replace/add its approved assets under `assets/` and update the CSS variables/components in `styles.css`.

## GitHub Pages
Upload the contents of this folder to a GitHub repository and enable GitHub Pages from the repository settings.


## Update fix
Build `recaps-v3` uses a network-first service worker for HTML/JS/CSS/mission data and a versioned mission-data import. This prevents an older installed/PWA copy from silently continuing to use stale recap data after deployment.


## v4 correction
- Corrected Operation: Common Ground recap to the canonical cargo-recovery / double-theft story involving Private Grifter, Ghost-stolen UMBRA freighters, stolen UFN/TSN technology, and Fleet Command authorising salvage and action against UMBRA.
