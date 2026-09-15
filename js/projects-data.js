/*
  js/projects-data.js

  This is the ONLY file you need to edit to add, remove, or reorder
  project cards on the homepage. js/projects-render.js reads this
  array and builds the cards automatically, with no HTML copy-pasting.

  Fields:
    title      (required): project name
    company    (optional): shown under the title, e.g. "Prunedge Development Technologies"
    constraint (optional): the real-world limit that shaped the build.
                            This is the field that matters most to anyone
                            hiring for implementation work: it shows you
                            designed against reality, not against a benchmark.
    desc       (required): the description paragraph
    outcome    (optional): array of short measured results, e.g.
                            ["97.96% held-out F1", "28 ms mean CPU latency"]
                            Rendered as a monospace readout strip.
    tech       (required): array of strings, shown as small tags
    link       (optional): filename of the project's detail page, e.g.
                            "project-yourproject.html". Omit entirely if
                            there's no detail page yet.
    visual     (optional): an emoji shown in the card's visual panel
                            omit for a blank visual panel

  TO ADD A NEW PROJECT:
  1. Copy one object below (including the curly braces)
  2. Paste it wherever you want it to appear in the list
  3. Edit the fields
  4. Save

  Order matters: the list reads top to bottom as strongest first.
  See ADD-A-PROJECT.md in the repo root for the full checklist.
*/

const PROJECTS = [
  {
    title: "PonziGuard: Real-Time Ponzi Scheme Detector",
    company: "Final-Year Thesis, Pan-Atlantic University",
    constraint:
      "No GPU budget, and a regulator can't act on a score without a reason.",
    desc: "A three-stage detection cascade around a fine-tuned XLM-RoBERTa classifier, catching social-media Ponzi schemes across English, Nigerian Pidgin, Hindi and Indonesian in real time. The cascade exists because running the full model on every post was never going to be affordable. Cheap filters handle the obvious cases, and the classifier only sees what survives. An explainable rule layer sits on top so a regulator can trace why any given post was flagged.",
    outcome: [
      "97.96% held-out F1",
      "28 ms mean CPU latency",
      "4 languages",
      "Runs without a GPU",
    ],
    tech: ["XLM-RoBERTa", "Hugging Face", "PyTorch", "Streamlit"],
    link: "project-ponziguard.html",
  },
  {
    title: "Strategy Backtester",
    constraint:
      "Most retail backtests are curve-fitted and look great right up until real money is involved.",
    desc: "A reproducible backtesting engine testing three trading strategies against six years of real market data. The validation step is the actual product: holding data back and testing out-of-sample is what separates a strategy that found signal from one that memorised the past.",
    outcome: ["3 strategies", "6 years of market data", "Out-of-sample validated"],
    tech: ["Python", "yfinance", "FastAPI", "Chart.js"],
    link: "project-backtestlab.html",
  },
  {
    title: "Developer Productivity Dashboard",
    company: "Prunedge Development Technologies",
    constraint:
      "The team could feel delivery stalling but couldn't point at where.",
    desc: "Pulled developer activity from the GitHub API into a pipeline and surfaced commit frequency, PR turnaround time and code review patterns in one view. Built as a streaming pipeline rather than a report, so the team could watch the bottleneck move instead of reading about it a week later.",
    outcome: ["Used by the delivery team", "Airflow + Spark pipeline"],
    tech: ["Kibana", "PostgreSQL", "Python", "Airflow", "Spark", "Docker"],
    link: "project-prunedge.html",
    visual: "📊",
  },
  {
    title: "Network Automation Scripts",
    company: "MTN Nigeria",
    constraint:
      "Degradations were being found after customers noticed them, not before.",
    desc: "Python automation that collected traffic data, generated the recurring performance reports by itself, and flagged degradations ahead of escalation, replacing a manual reporting routine that ran on someone's afternoon.",
    outcome: ["Replaced a manual reporting routine"],
    tech: ["Python", "Automation", "Network Analysis"],
    visual: "⚡",
  },
  {
    title: "Loan Eligibility Prediction Model",
    company: "Data Science Nigeria",
    constraint: "Thin applicant data, and a decision that has to be defensible.",
    desc: "A machine learning model predicting loan eligibility from applicant data, covering preprocessing, feature engineering and evaluation. The interesting work was in the features rather than the model, because most of what predicts repayment isn't in the columns you're given.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    visual: "🤖",
  },
];
