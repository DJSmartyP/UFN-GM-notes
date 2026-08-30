import { missions } from "./data/missions.js?v=6";

const app = document.querySelector("#app");
const title = document.querySelector("#screenTitle");
const backButton = document.querySelector("#backButton");
const homeButton = document.querySelector("#homeButton");
const missionNav = document.querySelector("#missionNav");

let state = { missionId: null, entryId: null };

function byId(id) {
  return missions.find(m => m.id === id);
}

function route() {
  const raw = location.hash.replace(/^#\/?/, "");
  const parts = raw.split("/").filter(Boolean);

  if (parts[0] === "mission" && parts[1]) {
    state.missionId = parts[1];
    state.entryId = parts[2] === "db" ? parts[3] || null : null;
  } else {
    state = { missionId: null, entryId: null };
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
      node.querySelector(".mission-card-strap").textContent = mission.strap;
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
    : `<div class="empty-state"><strong>No special mechanisms loaded</strong>Mission-specific controls can be added here later without changing the app structure.</div>`;

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
          <span class="tag">LIVE GM</span>
        </div>
        <div class="section-body">${mechanismsHtml}</div>
      </section>

      <section class="section" id="database">
        <div class="section-header">
          <h2>Mission Database</h2>
          <span class="tag">PRIMARY</span>
        </div>
        <div class="section-body">
          <div class="db-toolbar">
            <input id="dbSearch" class="db-search" type="search" placeholder="Search mission database…" autocomplete="off">
            <div class="filter-row" id="filterRow"></div>
          </div>
          <div id="dbList" class="db-list"></div>
        </div>
      </section>
    </div>
  `;

  setupDatabase(mission);
}

function setupDatabase(mission) {
  const search = document.querySelector("#dbSearch");
  const list = document.querySelector("#dbList");
  const filterRow = document.querySelector("#filterRow");
  const categories = ["All", ...new Set(mission.dbEntries.map(e => e.type || "Other"))];
  let activeCategory = "All";

  filterRow.innerHTML = categories.map((c, i) =>
    `<button class="filter-chip ${i === 0 ? "active" : ""}" data-filter="${escapeHtml(c)}">${escapeHtml(c)}</button>`
  ).join("");

  function draw() {
    const query = search.value.trim().toLowerCase();
    const filtered = mission.dbEntries.filter(entry => {
      const categoryMatch = activeCategory === "All" || (entry.type || "Other") === activeCategory;
      const blob = `${entry.title || ""} ${entry.description || ""} ${entry.type || ""}`.toLowerCase();
      return categoryMatch && blob.includes(query);
    });

    if (!mission.dbEntries.length) {
      list.innerHTML = `<div class="empty-state"><strong>No database entries loaded yet</strong>When you provide the real mission DB pages, add them to <code>data/missions.js</code>. Search, filtering and the reader view are already wired in.</div>`;
      return;
    }
    if (!filtered.length) {
      list.innerHTML = `<div class="empty-state"><strong>No matching entries</strong>Try a different search term or category.</div>`;
      return;
    }

    list.innerHTML = filtered.map(entry => `
      <button class="db-entry-card" data-entry="${escapeHtml(entry.id)}">
        <div class="type">${escapeHtml(entry.type || "Database")}</div>
        <div class="title">${escapeHtml(entry.title)}</div>
        <div class="desc">${escapeHtml(entry.description || "")}</div>
      </button>
    `).join("");

    list.querySelectorAll("[data-entry]").forEach(button => {
      button.addEventListener("click", () => {
        location.hash = `#/mission/${mission.id}/db/${button.dataset.entry}`;
      });
    });
  }

  search.addEventListener("input", draw);
  filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeCategory = button.dataset.filter;
    filterRow.querySelectorAll(".filter-chip").forEach(b => b.classList.toggle("active", b === button));
    draw();
  });
  draw();
}

function renderReader(mission, entryId) {
  const entry = mission.dbEntries.find(e => e.id === entryId);
  if (!entry) {
    location.hash = `#/mission/${mission.id}`;
    return;
  }

  title.textContent = mission.name.replace("Operation: ", "");
  backButton.classList.remove("hidden");
  homeButton.classList.remove("hidden");
  missionNav.classList.add("hidden");

  app.innerHTML = `
    <article class="reader">
      <div class="reader-meta">${escapeHtml(entry.type || "Mission Database")}</div>
      <h1>${escapeHtml(entry.title)}</h1>
      <div class="reader-body">${formatBody(entry.body || "")}</div>
      <div class="reader-actions">
        <button class="action-button" id="backToDb">← Database</button>
        <button class="action-button" id="missionHome">Mission Home</button>
      </div>
    </article>
  `;

  document.querySelector("#backToDb").addEventListener("click", () => {
    location.hash = `#/mission/${mission.id}`;
    setTimeout(() => document.querySelector("#database")?.scrollIntoView(), 0);
  });
  document.querySelector("#missionHome").addEventListener("click", () => {
    location.hash = `#/mission/${mission.id}`;
  });
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
  if (state.entryId) location.hash = `#/mission/${state.missionId}`;
  else location.hash = "";
});
homeButton.addEventListener("click", () => location.hash = "");

missionNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-jump]");
  if (!button) return;
  document.querySelector(`#${button.dataset.jump}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
});

window.addEventListener("hashchange", route);
route();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js").catch(() => {});
}
