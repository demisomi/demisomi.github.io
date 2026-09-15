# Adding a new project to the portfolio

Two things happen when you add a project: a card appears on the homepage,
and optionally a detail page exists for someone to click into.

## 1. Add the homepage card

Open `js/projects-data.js`. Copy one existing object in the `PROJECTS`
array, paste it where you want it to appear, and edit the fields:

```js
{
  title: "Your Project Name",
  company: "Where you built it",        // optional
  constraint: "The real limit that shaped the build.",
  desc: "What it does, and why it was built the way it was.",
  outcome: ["A measured result", "Another one"],   // optional
  tech: ["Python", "FastAPI"],
  link: "project-yourslug.html",        // optional, only with a detail page
  visual: "🚀",                          // optional emoji
},
```

Save. That's the whole homepage change. No HTML editing.

### Write the constraint line properly

`constraint` is the field that does the most work on this site. It says
the build was designed against a real limit rather than a benchmark,
which is what implementation and solutions-engineering roles screen for.

Good: "No GPU budget, and a regulator can't act on a score without a reason."
Bad:  "Needed to be fast and accurate."

Only write what's true. An interviewer will open with this line and ask
you to expand on it, so a constraint that overstates is worse than none.

### Keep outcomes measured

`outcome` renders as a monospace readout strip, so it should hold figures
or facts, not adjectives. "97.96% held-out F1" belongs there. "Very
accurate" does not. Omit the field entirely if you have no real numbers.

## 2. Order matters

The array reads top to bottom as strongest first. Most people only look
at the first two records, so put your best work at the top and move it
when something better ships.

## 3. (Optional) Build a detail page

Skip this if the project doesn't need a page yet — a card works fine
without a `link`.

1. Copy `project-template.html` and rename it to match the `link` you
   used above
2. Replace every `{{PLACEHOLDER}}` with real content
3. Delete any section you don't need
4. Save it beside `index.html`

**Known issue:** the detail pages don't currently share the homepage's
stylesheet. Each one inlines its own CSS and its own fonts, and they
don't all use the same system — `project-ponziguard.html` and
`project-prunedge.html` use one, `project-template.html` and
`project-backtestlab.html` use another, and neither matches the
homepage. Until that's unified into a shared `css/project-page.css`,
a page built from the template will not look like the rest of the site.

## 4. Ship it

```bash
git add .
git commit -m "Add [project name] to portfolio"
git push
```

Netlify rebuilds automatically from `main`. Check
`demilade-somide.netlify.app` in a minute or two.

For anything larger than a new card, work on a branch instead —
Netlify builds a deploy preview per branch, so you can see the change
on the real stack before it reaches the live site.
