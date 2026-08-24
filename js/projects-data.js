/*
  js/projects-data.js

  This is the ONLY file you need to edit to add, remove, or reorder
  project cards on the homepage. js/projects-render.js reads this
  array and builds the cards automatically — no HTML copy-pasting.

  Fields:
    title      (required) — project name
    company    (optional) — shown under the title, e.g. "Prunedge Development Technologies"
    desc       (required) — the description paragraph
    tech       (required) — array of strings, shown as small tags
    link       (optional) — filename of the project's detail page, e.g. "project-yourproject.html"
                             omit this field entirely if there's no detail page yet
    visual     (optional) — an emoji shown in the card's visual panel, e.g. "📊"
                             omit for a blank visual panel

  TO ADD A NEW PROJECT:
  1. Copy one object below (including the curly braces)
  2. Paste it wherever you want it to appear in the list
  3. Edit the fields
  4. Save

  That's it — the homepage card appears automatically on next page
  load. No other file needs to change for the card itself. See
  ADD-A-PROJECT.md in the repo root for the full checklist, including
  optionally building a detail page.
*/

const PROJECTS = [
  {
    title: "PonziGuard — Real-Time Ponzi Scheme Detector",
    company: "Final-Year Thesis, Pan-Atlantic University",
    desc: "Built a three-stage detection cascade around a fine-tuned XLM-RoBERTa classifier that catches social-media Ponzi schemes across English, Nigerian Pidgin, Hindi, and Indonesian in real time. Reached 97.96% held-out F1 at 28ms mean latency on CPU, with an explainable rule layer for regulators.",
    tech: ["XLM-RoBERTa", "Hugging Face", "PyTorch", "Streamlit"],
    link: "project-ponziguard.html",
  },
  {
    title: "Strategy Backtester",
    desc: "A quantitative backtesting project testing three trading strategies against six years of real market data, including a validation step most backtests skip.",
    tech: ["yfinance", "FastAPI", "Chart.js", "Python"],
    link: "project-backtestlab.html",
  },
  {
    title: "Developer Productivity Dashboard",
    company: "Prunedge Development Technologies",
    desc: "Built an interactive visualization dashboard that pulled developer data from GitHub and displayed metrics like commit frequency, PR turnaround time, and code review patterns. Helped the team identify bottlenecks in their development workflow.",
    tech: ["Kibana", "PostgreSQL", "Python"],
    link: "project-prunedge.html",
    visual: "📊",
  },
  {
    title: "Loan Eligibility Prediction Model",
    company: "Data Science Nigeria",
    desc: "Developed a machine learning model to predict loan eligibility based on applicant data. Handled data preprocessing, feature engineering, and model evaluation to achieve reliable prediction accuracy.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    visual: "🤖",
  },
  {
    title: "Network Automation Scripts",
    company: "MTN Nigeria",
    desc: "Created Python automation scripts to streamline routine network monitoring tasks. The scripts collected traffic data, generated performance reports, and flagged potential issues before they escalated.",
    tech: ["Python", "Automation", "Network Analysis"],
    visual: "⚡",
  },
];
