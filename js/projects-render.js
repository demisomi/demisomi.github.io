/*
  js/projects-render.js

  Reads the PROJECTS array from js/projects-data.js and builds the
  project cards on the homepage. You should not need to edit this
  file to add a project — edit js/projects-data.js instead.

  The markup generated here matches the original hand-written cards
  exactly (same class names: project-card, project-info, project-desc,
  project-tech, project-link, project-visual) so css/styles.css
  continues to style everything without any changes.

  IMPORTANT: this runs immediately, not on a DOMContentLoaded listener.
  That's deliberate — this script tag sits near the bottom of the page,
  after the #projects-grid container already exists in the HTML, and
  BEFORE js/main.js runs. main.js sets up a scroll fade-in effect by
  scanning for .fade-in elements once, synchronously, when it loads —
  so the project cards must already exist in the DOM before main.js
  runs, or they'll never get the fade-in animation wired up.
*/

function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = PROJECTS.map((p) => {
    const companyHtml = p.company
      ? `<p class="project-company">${p.company}</p>`
      : "";

    const techHtml = p.tech
      .map((t) => `<span>${t}</span>`)
      .join("");

    const linkHtml = p.link
      ? `<a href="${p.link}" class="project-link">View Project Details →</a>`
      : "";

    const visualHtml = p.visual || "";

    return `
      <div class="project-card fade-in">
        <div class="project-info">
          <h3>${p.title}</h3>
          ${companyHtml}
          <p class="project-desc">${p.desc}</p>
          <div class="project-tech">${techHtml}</div>
          ${linkHtml}
        </div>
        <div class="project-visual">${visualHtml}</div>
      </div>
    `;
  }).join("");
}

renderProjects();
