/*
  js/projects-render.js

  Reads the PROJECTS array from js/projects-data.js and builds the
  project records on the homepage. You should not need to edit this
  file to add a project — edit js/projects-data.js instead.

  Class names used here are styled in css/styles.css:
    project-card, project-info, project-company, project-constraint,
    project-desc, project-outcome, project-tech, project-link,
    project-visual

  IMPORTANT: this runs immediately, not on a DOMContentLoaded listener.
  That's deliberate — this script tag sits near the bottom of the page,
  after the #projects-grid container already exists in the HTML, and
  BEFORE js/main.js runs. main.js sets up a scroll fade-in effect by
  scanning for .fade-in elements once, synchronously, when it loads —
  so the project records must already exist in the DOM before main.js
  runs, or they'll never get the fade-in animation wired up.
*/

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = PROJECTS.map((p) => {
    const companyHtml = p.company
      ? `<p class="project-company">${escapeHtml(p.company)}</p>`
      : "";

    const constraintHtml = p.constraint
      ? `<p class="project-constraint">
           <span class="constraint-label">Constraint</span>
           ${escapeHtml(p.constraint)}
         </p>`
      : "";

    const outcomeHtml =
      p.outcome && p.outcome.length
        ? `<ul class="project-outcome">${p.outcome
            .map((o) => `<li>${escapeHtml(o)}</li>`)
            .join("")}</ul>`
        : "";

    const techHtml = p.tech.map((t) => `<span>${escapeHtml(t)}</span>`).join("");

    const linkHtml = p.link
      ? `<a href="${escapeHtml(p.link)}" class="project-link">Read the build notes →</a>`
      : "";

    const visualHtml = p.visual ? escapeHtml(p.visual) : "";

    return `
      <article class="project-card fade-in">
        <div class="project-info">
          <h3>${escapeHtml(p.title)}</h3>
          ${companyHtml}
          ${constraintHtml}
          <p class="project-desc">${escapeHtml(p.desc)}</p>
          ${outcomeHtml}
          <div class="project-tech">${techHtml}</div>
          ${linkHtml}
        </div>
        <div class="project-visual" aria-hidden="true">${visualHtml}</div>
      </article>
    `;
  }).join("");
}

renderProjects();
