# Adding a new project to the portfolio

Two things happen every time you add a project: a card appears on the
homepage, and (optionally) a detail page exists for someone to click
into. Here's the full process, in order.

## 1. Add the homepage card

Open `js/projects-data.js`. Copy one existing object in the `PROJECTS`
array (the `{ ... }` block), paste it in, and edit the fields:

```js
{
  title: "Your Project Name",
  company: "Where/why you built it",   // optional — delete this line if not applicable
  desc: "One or two sentences describing what it does and why it matters.",
  tech: ["Python", "FastAPI", "etc"],
  link: "project-yourslug.html",        // optional — only if you're building a detail page (step 2)
  visual: "🚀",                          // optional — an emoji, or delete for a blank panel
},
```

Save the file. That's the entire homepage change — no HTML editing,
no touching `index.html`.

## 2. (Optional) Build a detail page

Skip this step if the project doesn't need its own page yet — the
homepage card can exist without a `link`.

1. Copy `project-template.html`, rename it to match the `link` you
   used above (e.g. `project-optimizer.html`)
2. Replace every `{{PLACEHOLDER}}` with your actual content
3. Delete any section you don't need (the template includes comments
   marking which ones are optional)
4. Save it in the same folder as `index.html`

## 3. Push it live

```bash
git add .
git commit -m "Add [project name] to portfolio"
git push
```

GitHub Pages rebuilds automatically — check `demisomi.github.io` in
a minute or two.

## One-time setup (only needed once, not per-project)

`index.html` needs to be pointed at the new data-driven card system.
In the `<section class="projects" id="projects">` block, replace the
five hand-written `<div class="project-card fade-in">...</div>` blocks
with a single empty container:

```html
<div class="projects-container">
  <span class="section-label">Projects</span>
  <h2 class="section-title" id="projects-title">Things I've built</h2>
  <div id="projects-grid"></div>
</div>
```

Then, just before the closing `</body>` tag, add these two script tags
**before** the existing `<script src="js/main.js"></script>` line:

```html
<script src="js/projects-data.js"></script>
<script src="js/projects-render.js"></script>
<script src="js/main.js"></script>
```

Upload `js/projects-data.js` and `js/projects-render.js` into your
existing `js/` folder alongside `main.js`.

**One thing to check afterward:** if your existing `js/main.js` uses a
scroll-triggered fade-in effect on page load (the `.fade-in` class
suggests it might), confirm the newly-rendered cards still fade in
correctly when you scroll to them. If they don't, it likely means
`main.js` sets up its animation observer once on page load, before the
cards exist — let me know and I can adjust `projects-render.js` to
re-trigger it.
