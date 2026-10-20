# PROFiNE

**Interactive GitHub portfolio and analytics website for developers.**

PROFiNE is a premium, lightweight developer portfolio built with semantic HTML5, modern CSS3, and vanilla JavaScript — no frameworks, no build tools. It lives on GitHub Pages and pulls live public data from the GitHub REST API.

---

## ✨ Features

- **Dark / light theme** with system-preference detection and localStorage persistence
- **Live GitHub analytics** — public repos, followers, language breakdown, repo cards
- **Project showcase** with search and category filtering
- **Skills section** with honest, configurable proficiency labels
- **Responsive design** — desktop, tablet, and mobile
- **Scroll-reveal animations** with `prefers-reduced-motion` support
- **Accessible** — semantic HTML, ARIA labels, visible focus rings, keyboard navigation
- **Centralized config** — one object in `app.js` controls all profile content
- **No hardcoded secrets** — uses only the public, unauthenticated GitHub REST API

---

## 🗂 Repository Structure

```text
profine/
├── index.html                   # Single-page application entry point
├── assets/
│   ├── css/style.css            # All styles — design tokens, themes, components
│   └── js/app.js                # Application logic + PROFILE_CONFIG
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Pages deployment workflow
├── .nojekyll                    # Disables Jekyll on GitHub Pages
└── README.md                    # This file
```

---

## 🛠 Technology Stack

| Layer | Technology |
|---|---|
| Markup | Semantic HTML5 |
| Styling | Modern CSS3 (custom properties, grid, flexbox) |
| Behaviour | Vanilla JavaScript (ES2020+) |
| Fonts | Inter + JetBrains Mono via Google Fonts |
| Data | GitHub REST API v3 (public, unauthenticated) |
| Deployment | GitHub Pages via GitHub Actions |
| Analytics card | github-readme-stats (optional, gracefully hidden on failure) |

---

## ⚙️ Configuration

All profile content is controlled by `PROFILE_CONFIG` at the top of
`assets/js/app.js`. Edit only that object — every section of the site updates
automatically.

```javascript
const PROFILE_CONFIG = {
  name: "Rishabh Saxena",
  username: "rishabhsxen58-lgtm",   // GitHub username — used for API calls
  college: "NIET, Greater Noida",
  degree: "B.Tech Computer Science and Engineering",
  email: "rishabhsxen58@gmail.com",
  tagline: "...",
  bio: "...",
  social: { github: "...", linkedin: "...", email: "mailto:..." },
  interests: [...],
  skills: [...],      // Groups with items and levels
  projects: [...],    // Name, description, tags, repo URL, optional demo URL
  github: { maxReposToShow: 6 },
  theme: { default: "dark", respectSystemPreference: true },
  visitorCounter: { enabled: true, url: "..." },
};
```

### Adding a project

Add an entry to the `projects` array:

```javascript
{
  name: "My Project",
  description: "What it does.",
  tags: ["Python", "NumPy"],
  repo: "https://github.com/rishabhsxen58-lgtm/my-project",
  demo: "",           // Leave empty if no live demo
  category: "ml",    // "web" | "ml" | "systems" | "tools"
}
```

### Skill levels

Use only these three values — do not invent percentages:

| Level | Meaning |
|---|---|
| `"proficient"` | Used in real projects, comfortable independently |
| `"familiar"` | Comfortable and actively using |
| `"learning"` | Actively exploring and studying |

---

## 🚀 Local Development

No build step is required.

```bash
# Clone the repository
git clone https://github.com/rishabhsxen58-lgtm/profine.git
cd profine

# Serve with any static server, for example:
npx serve .
# or
python -m http.server 8080
```

Open http://localhost:8080 in your browser.

> **Note:** Opening `index.html` directly via `file://` may cause browser
> security restrictions that block font and API requests. Use a local server.

---

## 🌐 GitHub Pages Deployment

### One-time setup

1. Go to **Settings → Pages** in your repository.
2. Under **Source**, select **GitHub Actions**.
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` runs automatically.

### Expected URL

```
https://rishabhsxen58-lgtm.github.io/profine/
```

> This URL is unverified until deployment has completed successfully.

### Workflow details

The workflow uses official GitHub Actions:

- `actions/checkout@v4`
- `actions/configure-pages@v5`
- `actions/upload-pages-artifact@v3`
- `actions/deploy-pages@v4`

It requires **no secrets or personal access tokens**.

---

## 📊 Analytics — Honest Capabilities

| Feature | Source | Limitation |
|---|---|---|
| Public repo count | GitHub REST API | Public repos only |
| Followers / Following | GitHub REST API | Public data only |
| Language breakdown | GitHub REST API | Primary language per repo |
| Repo cards | GitHub REST API | Public, non-forked repos |
| Stats image | github-readme-stats | External service; may be unavailable |
| Visitor counter | hits.seeyoufarm.com | Image badge — counts page loads, not unique visitors |
| Profile view count | **Not available** | GitHub does not expose this via the public API |
| Contribution graph | **Not available in frontend** | Use the Platane/snk Action — see below |
| Private contributions | **Not available** | Requires authentication (never use tokens in frontend) |

### Optional: Contribution Snake Animation

To add the animated contribution snake to your README:

1. Create `.github/workflows/snake.yml` with the `Platane/snk@v3` action.
2. Configure it to output `assets/images/github-contribution-grid-snake.svg`.
3. Add `![Contribution snake](assets/images/github-contribution-grid-snake.svg)` to your README only **after** the first successful workflow run.
4. The website will display the SVG if it exists; it gracefully hides the image if it is missing.

---

## 🧩 Maintenance

- Update `PROFILE_CONFIG` in `app.js` for any profile, skill, or project changes.
- Add project images to `assets/images/` and reference them in the `projects` config.
- The GitHub API is called unauthenticated; rate limits apply (60 requests/hour per IP).
  Cached data is reused for 5 minutes to reduce calls.
- Never commit access tokens, passwords, or secrets to this repository.

---

## 📄 License

&copy; 2025 Rishabh Saxena. All rights reserved.

Personal portfolio — not open for redistribution without permission.
