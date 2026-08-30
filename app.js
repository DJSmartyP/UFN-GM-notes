import { missions } from "./data/missions.js?v=13";
import { customDbPages } from "./data/db-pages.js?v=13";

const app = document.querySelector("#app");
const title = document.querySelector("#screenTitle");
const backButton = document.querySelector("#backButton");
const homeButton = document.querySelector("#homeButton");
const missionNav = document.querySelector("#missionNav");

let state = { missionId: null, dbBrowser: false, entryId: null };
const dbUiState = new Map();

function byId(id) {
  return missions.find(m => m.id === id);
}

function dbEntriesFor(mission) {
  return customDbPages[mission.id] || [];
}

function route() {
  const raw = location.hash.replace(/^#\/?/, "");
  const parts = raw.split("/").filter(Boolean);

  if (parts[0] === "mission" && parts[1]) {
    state = {
      missionId: parts[1],
      dbBrowser: parts[2] === "db",
      entryId: parts[2] === "db" ? parts[3] || null : null
    };
  } else {
    state = { missionId: null, dbBrowser: false, entryId: null };
  }
  render();
}

function render() {
  if (!state.missionId) return renderHome();
  const mission = byId(state.missionId);
  if (!mission) {
    location.hash = "";
    return;
  }
  if (state.entryId) return renderReader(mission, state.entryId);
  if (state.dbBrowser) return renderDatabaseBrowser(mission);
  renderMission(mission);
}

function renderHome() {
  title.textContent = "GM Mission System";
  backButton.classList.add("hidden");
  homeButton.classList.add("hidden");
  missionNav.classList.add("hidden");

  app.innerHTML = `
    <section class="hero">
      <div class="kicker">United Federated Navy</div>
      <h1>GM Mission Console</h1>
      <p>Select a mission to open its GM synopsis, special mechanics and mission database viewer.</p>
    </section>
    <div id="missionGroups"></div>
  `;

  const groupsRoot = document.querySelector("#missionGroups");
  const template = document.querySelector("#mission-card-template");
  const groupOrder = ["UFN Operations", "Light and Dark Campaign"];

  groupOrder.forEach(groupName => {
    const groupMissions = missions.filter(mission => mission.campaign === groupName);
    if (!groupMissions.length) return;

    const section = document.createElement("section");
    section.className = "mission-group";
    section.innerHTML = `
      <div class="mission-group-heading">
        <div>
          <div class="mission-group-kicker">${groupName === "Light and Dark Campaign" ? "CAMPAIGN" : "MISSIONS"}</div>
          <h2>${escapeHtml(groupName)}</h2>
        </div>
        <span>${groupMissions.length} missions</span>
      </div>
      <div class="mission-grid"></div>
    `;

    const grid = section.querySelector(".mission-grid");
    groupMissions.forEach(mission => {
      const node = template.content.cloneNode(true);
      const button = node.querySelector(".mission-card");
      node.querySelector(".mission-card-index").textContent = mission.code || "";
      const art = node.querySelector(".mission-card-art");
      const artWrap = node.querySelector(".mission-card-art-wrap");

      if (mission.artwork === null) {
        art.remove();
        artWrap.classList.add("mission-card-art-placeholder");
        const placeholder = document.createElement("div");
        placeholder.className = "mission-card-placeholder-code";
        placeholder.textContent = mission.code || "LD";
        artWrap.prepend(placeholder);
      } else {
        art.src = mission.artwork || `assets/missions/${mission.id}.png`;
        art.alt = `${mission.name} mission art`;
      }

      node.querySelector(".mission-card-name").textContent = mission.name;
      const dbCount = dbEntriesFor(mission).length;
      node.querySelector(".mission-card-strap").textContent = dbCount
        ? `${mission.strap} · ${dbCount} DB pages`
        : mission.strap;
      button.addEventListener("click", () => {
        location.hash = `#/mission/${mission.id}`;
      });
      grid.appendChild(node);
    });

    groupsRoot.appendChild(section);
  });
}

function renderMission(mission) {
  title.textContent = mission.name.replace("Operation: ", "");
  backButton.classList.remove("hidden");
  homeButton.classList.remove("hidden");
  missionNav.classList.remove("hidden");

  const recapHtml = mission.recap.map((r, i) => `
    <details class="disclosure" ${i === 0 ? "open" : ""}>
      <summary>${escapeHtml(r.title)}</summary>
      <div class="disclosure-content">${escapeHtml(r.body)}</div>
    </details>
  `).join("");

  const mechanismsHtml = mission.mechanisms.length
    ? `<div class="mech-grid">${mission.mechanisms.map(mech => mech.kind === "action" ? `
        <button class="mech-button" data-mech="${escapeHtml(mech.id)}">
          <strong>${escapeHtml(mech.label)}</strong>
          <span>${escapeHtml(mech.description || "")}</span>
        </button>` : `
        <div class="mech-note">
          <div class="mech-note-tag">GM REFERENCE</div>
          <strong>${escapeHtml(mech.label)}</strong>
          <span>${escapeHtml(mech.description || "")}</span>
        </div>`).join("")}</div>`
    : `<div class="empty-state"><strong>No special mechanisms loaded</strong>No mission-specific GM mechanism note is loaded.</div>`;

  const playerMechanics = mission.playerMechanics || [];
  const playerMechanicsHtml = playerMechanics.length
    ? `<div class="player-mechanics-grid ${playerMechanics.length === 1 ? "single" : ""}">${playerMechanics.map(mech => `
        <article class="player-mechanic-tile">
          <div class="player-mechanic-topline">
            <strong>${escapeHtml(mech.name)}</strong>
            <span class="station-chip">${escapeHtml(mech.station || "Crew")}</span>
          </div>
          <div class="player-mechanic-label">HOW THEY USE IT</div>
          <p>${escapeHtml(mech.description || "")}</p>
        </article>`).join("")}</div>`
    : `<div class="empty-state"><strong>No player mechanics loaded yet</strong>Player-facing mission mechanics can be added here as station-labelled tiles.</div>`;

  const entries = dbEntriesFor(mission);
  const quickDbHtml = entries.length ? `
    <div class="db-launch">
      <div>
        <strong>${entries.length} custom DB ${entries.length === 1 ? "page" : "pages"}</strong>
        <span>Search, browse by folder and open the exact source copy.</span>
      </div>
      <button class="db-launch-button" id="openDbBrowser">Browse Database →</button>
    </div>
    <div class="db-quick-list">
      ${entries.slice(0, 4).map(entry => `
        <button class="db-quick-entry" data-entry="${escapeHtml(entry.id)}">
          <span>${escapeHtml(entry.title)}</span><small>${escapeHtml(entry.group || entry.database)}</small>
        </button>`).join("")}
      ${entries.length > 4 ? `<button class="db-quick-more" id="openDbMore">+ ${entries.length - 4} more pages</button>` : ""}
    </div>
  ` : `
    <div class="empty-state">
      <strong>No mission-specific custom DB pages</strong>
      The source audit found no custom ScienceDatabase pages for this mission. Global/stock pages, hides, supply drops, scan descriptions, comms and ship-log popups are intentionally excluded.
    </div>`;

  app.innerHTML = `
    <section class="mission-heading">
      <div class="meta">GM ACCESS · ${escapeHtml(mission.status)}</div>
      <h1>${escapeHtml(mission.name)}</h1>
      <p>${escapeHtml(mission.strap)}</p>
    </section>

    <div class="mission-layout">
      <section class="section" id="recap">
        <div class="section-header">
          <h2>Story Recap</h2>
          <span class="tag">REFERENCE</span>
        </div>
        <div class="section-body">${recapHtml}</div>
      </section>

      <section class="section" id="mechanisms">
        <div class="section-header">
          <h2>Special Mechanisms</h2>
          <span class="tag">GM REFERENCE</span>
        </div>
        <div class="section-body">${mechanismsHtml}</div>
      </section>

      <section class="section" id="player-mechanics">
        <div class="section-header">
          <h2>Player Mechanics</h2>
          <span class="tag">PLAYER REFERENCE</span>
        </div>
        <div class="section-body">${playerMechanicsHtml}</div>
      </section>

      <section class="section" id="database">
        <div class="section-header">
          <h2>Mission Database</h2>
          <span class="tag">PRIMARY</span>
        </div>
        <div class="section-body">${quickDbHtml}</div>
      </section>
    </div>
  `;

  document.querySelector("#openDbBrowser")?.addEventListener("click", () => openDatabase(mission));
  document.querySelector("#openDbMore")?.addEventListener("click", () => openDatabase(mission));
  document.querySelectorAll(".db-quick-entry").forEach(button => {
    button.addEventListener("click", () => {
      location.hash = `#/mission/${mission.id}/db/${button.dataset.entry}`;
    });
  });
}

function openDatabase(mission) {
  location.hash = `#/mission/${mission.id}/db`;
}

function getDbState(mission) {
  if (!dbUiState.has(mission.id)) dbUiState.set(mission.id, { query: "", group: "All" });
  return dbUiState.get(mission.id);
}

function renderDatabaseBrowser(mission) {
  const entries = dbEntriesFor(mission);
  const saved = getDbState(mission);
  title.textContent = `${mission.name.replace("Operation: ", "")} DB`;
  backButton.classList.remove("hidden");
  homeButton.classList.remove("hidden");
  missionNav.classList.add("hidden");

  app.innerHTML = `
    <section class="db-browser-heading">
      <div class="meta">${escapeHtml(mission.code || "MISSION")} · CUSTOM DATABASE</div>
      <div class="db-browser-title-row">
        <div>
          <h1>Mission Database</h1>
          <p>${escapeHtml(mission.name)} · ${entries.length} ${entries.length === 1 ? "page" : "pages"}</p>
        </div>
        <button class="action-button db-mission-button" id="dbMissionHome">Mission</button>
      </div>
    </section>
    <section class="db-browser-panel">
      <div class="db-browser-toolbar">
        <label class="db-search-label" for="dbSearch">Find a page or anything inside it</label>
        <input id="dbSearch" class="db-search" type="search" placeholder="Try a title, code, phrase, person…" autocomplete="off" value="${escapeHtml(saved.query)}">
        <div class="filter-row" id="filterRow"></div>
      </div>
      <div class="db-result-status" id="dbResultStatus"></div>
      <div id="dbList" class="db-browser-list"></div>
    </section>
  `;

  document.querySelector("#dbMissionHome").addEventListener("click", () => {
    location.hash = `#/mission/${mission.id}`;
  });
  setupDatabaseBrowser(mission, entries, saved);
}

function setupDatabaseBrowser(mission, entries, saved) {
  const search = document.querySelector("#dbSearch");
  const list = document.querySelector("#dbList");
  const filterRow = document.querySelector("#filterRow");
  const status = document.querySelector("#dbResultStatus");
  const groups = ["All", ...new Set(entries.map(e => e.group || e.database || "Database"))];
  if (!groups.includes(saved.group)) saved.group = "All";

  filterRow.innerHTML = groups.map(group => `
    <button class="filter-chip ${group === saved.group ? "active" : ""}" data-filter="${escapeHtml(group)}">${escapeHtml(group)}</button>
  `).join("");

  function draw() {
    saved.query = search.value.trim();
    const query = saved.query.toLowerCase();
    const filtered = entries.filter(entry => {
      const group = entry.group || entry.database || "Database";
      const groupMatch = saved.group === "All" || group === saved.group;
      const blob = `${entry.title || ""} ${entry.database || ""} ${entry.group || ""} ${entry.trigger || ""} ${entry.body || ""}`.toLowerCase();
      return groupMatch && (!query || blob.includes(query));
    });

    status.textContent = entries.length
      ? `${filtered.length} of ${entries.length} pages${saved.query ? ` matching “${saved.query}”` : ""}`
      : "No mission-specific custom DB pages";

    if (!entries.length) {
      list.innerHTML = `<div class="empty-state"><strong>No mission-specific custom DB pages</strong>This is intentional according to the source audit.</div>`;
      return;
    }
    if (!filtered.length) {
      list.innerHTML = `<div class="empty-state"><strong>No matching pages</strong>Search also checks the full page contents, so try a shorter term.</div>`;
      return;
    }

    const grouped = new Map();
    filtered.forEach(entry => {
      const group = entry.group || entry.database || "Database";
      if (!grouped.has(group)) grouped.set(group, []);
      grouped.get(group).push(entry);
    });

    list.innerHTML = [...grouped.entries()].map(([group, groupEntries]) => `
      <section class="db-file-group">
        <div class="db-file-group-heading"><span>${escapeHtml(group)}</span><small>${groupEntries.length}</small></div>
        <div class="db-file-group-list">
          ${groupEntries.map(entry => `
            <button class="db-file-row" data-entry="${escapeHtml(entry.id)}">
              <span class="db-file-icon">DB</span>
              <span class="db-file-copy">
                <strong>${escapeHtml(entry.title)}</strong>
                <small>${escapeHtml(entry.trigger || entry.database || "Mission database")}</small>
              </span>
              <span class="db-file-chevron">›</span>
            </button>
          `).join("")}
        </div>
      </section>
    `).join("");

    list.querySelectorAll("[data-entry]").forEach(button => {
      button.addEventListener("click", () => {
        location.hash = `#/mission/${mission.id}/db/${button.dataset.entry}`;
      });
    });
  }

  search.addEventListener("input", draw);
  filterRow.addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    saved.group = button.dataset.filter;
    filterRow.querySelectorAll(".filter-chip").forEach(b => b.classList.toggle("active", b === button));
    draw();
  });
  draw();
}

function renderReader(mission, entryId) {
  const entries = dbEntriesFor(mission);
  const entryIndex = entries.findIndex(e => e.id === entryId);
  const entry = entries[entryIndex];
  if (!entry) {
    location.hash = `#/mission/${mission.id}/db`;
    return;
  }

  const previous = entryIndex > 0 ? entries[entryIndex - 1] : null;
  const next = entryIndex < entries.length - 1 ? entries[entryIndex + 1] : null;

  title.textContent = mission.name.replace("Operation: ", "");
  backButton.classList.remove("hidden");
  homeButton.classList.remove("hidden");
  missionNav.classList.add("hidden");

  app.innerHTML = `
    <article class="reader">
      <div class="reader-topline">
        <button class="reader-pages-button" id="backToDb">← Pages</button>
        <span>${entryIndex + 1} / ${entries.length}</span>
      </div>
      <div class="reader-meta">${escapeHtml(entry.database || "Mission Database")}</div>
      <h1>${escapeHtml(entry.title)}</h1>
      <div class="reader-trigger"><strong>Trigger/source</strong><span>${escapeHtml(entry.trigger || "Mission database")}</span></div>
      <div class="reader-body">${formatBody(entry.body || "")}</div>
      <div class="reader-sequence" aria-label="Database page navigation">
        <button class="action-button" id="previousPage" ${previous ? "" : "disabled"}>← ${previous ? escapeHtml(shortTitle(previous.title)) : "Previous"}</button>
        <button class="action-button" id="nextPage" ${next ? "" : "disabled"}>${next ? escapeHtml(shortTitle(next.title)) : "Next"} →</button>
      </div>
      <div class="reader-actions">
        <button class="action-button" id="backToDbBottom">All DB Pages</button>
        <button class="action-button" id="missionHome">Mission Home</button>
      </div>
    </article>
  `;

  const goDb = () => location.hash = `#/mission/${mission.id}/db`;
  document.querySelector("#backToDb").addEventListener("click", goDb);
  document.querySelector("#backToDbBottom").addEventListener("click", goDb);
  document.querySelector("#missionHome").addEventListener("click", () => {
    location.hash = `#/mission/${mission.id}`;
  });
  document.querySelector("#previousPage")?.addEventListener("click", () => {
    if (previous) location.hash = `#/mission/${mission.id}/db/${previous.id}`;
  });
  document.querySelector("#nextPage")?.addEventListener("click", () => {
    if (next) location.hash = `#/mission/${mission.id}/db/${next.id}`;
  });
}

function shortTitle(value) {
  const text = String(value || "");
  return text.length > 24 ? `${text.slice(0, 22)}…` : text;
}

function formatBody(body) {
  return escapeHtml(body)
    .split(/\n{2,}/)
    .map(p => `<p>${p.replace(/\n/g, "<br>")}</p>`)
    .join("");
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[c]);
}

backButton.addEventListener("click", () => {
  if (state.entryId) location.hash = `#/mission/${state.missionId}/db`;
  else if (state.dbBrowser) location.hash = `#/mission/${state.missionId}`;
  else location.hash = "";
});
homeButton.addEventListener("click", () => location.hash = "");

missionNav.addEventListener("click", event => {
  const button = event.target.closest("[data-jump]");
  if (!button) return;
  if (button.dataset.jump === "database") {
    const mission = byId(state.missionId);
    if (mission) openDatabase(mission);
    return;
  }
  document.querySelector(`#${button.dataset.jump}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
});

window.addEventListener("hashchange", route);
route();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js").catch(() => {});
}
