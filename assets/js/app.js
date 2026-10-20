/* =========================================================
   PROFiNE CONFIGURATION — EDIT THIS SECTION ONLY
   Update profile details, links, skills, projects and theme.
   ========================================================= */
const PROFILE_CONFIG = {
  // ── Personal Information ────────────────────────────────
  name: "Rishabh Saxena",
  username: "rishabhsxen58-lgtm",
  college: "NIET, Greater Noida",
  degree: "B.Tech Computer Science and Engineering",
  email: "rishabhsxen58@gmail.com",
  tagline: "Learning consistently. Building practically. Improving continuously.",
  bio: "I am a B.Tech CSE student with a strong interest in software development, cybersecurity, AI/ML, and problem solving through programming. I enjoy building projects that solve real problems and continuously work on sharpening my skills in C++, Python, and DSA.",

  // ── Social Links ────────────────────────────────────────
  social: {
    github: "https://github.com/rishabhsxen58-lgtm",
    linkedin: "https://www.linkedin.com/in/rishabh-saxena-02b751369/",
    email: "mailto:rishabhsxen58@gmail.com",
    // twitter: "",   // Uncomment and fill if available
    // instagram: "", // Uncomment and fill if available
  },

  // ── Interests / Focus Areas ─────────────────────────────
  interests: [
    "Software Development",
    "Cybersecurity",
    "AI / ML",
    "Data Structures & Algorithms",
  ],

  // ── Skills ─────────────────────────────────────────────
  // level: "learning" | "familiar" | "proficient"
  skills: [
    {
      group: "Programming Languages",
      icon: "💻",
      items: [
        { name: "C++", level: "proficient" },
        { name: "Python", level: "proficient" },
        { name: "C", level: "familiar" },
        { name: "Java", level: "familiar" },
        { name: "JavaScript", level: "familiar" },
      ],
    },
    {
      group: "Web & Backend",
      icon: "🌐",
      items: [
        { name: "HTML5", level: "proficient" },
        { name: "CSS3", level: "familiar" },
        { name: "Firebase", level: "learning" },
        { name: "Netlify", level: "familiar" },
      ],
    },
    {
      group: "Data & Scientific Computing",
      icon: "📊",
      items: [
        { name: "NumPy", level: "familiar" },
        { name: "Pandas", level: "familiar" },
        { name: "Matplotlib", level: "familiar" },
      ],
    },
    {
      group: "Tools & DevOps",
      icon: "🛠️",
      items: [
        { name: "Git", level: "proficient" },
        { name: "GitHub", level: "proficient" },
        { name: "Bash", level: "familiar" },
        { name: "PowerShell", level: "familiar" },
        { name: "VS Code", level: "proficient" },
      ],
    },
  ],

  // ── Projects ────────────────────────────────────────────
  // Omit "demo" key if no live demo. Omit "image" if none.
  // category: "all" | "web" | "ml" | "systems" | "tools"
  projects: [
    {
      name: "PROFiNE",
      description:
        "Interactive GitHub portfolio and analytics website. A premium developer portfolio built with semantic HTML, modern CSS, and vanilla JavaScript — deployed via GitHub Pages.",
      tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      repo: "https://github.com/rishabhsxen58-lgtm/profine",
      demo: "", // Fill in once deployed, e.g. "https://rishabhsxen58-lgtm.github.io/profine/"
      category: "web",
    },
    // ── Add more projects below ──
    // {
    //   name: "My Project",
    //   description: "A short description of what this project does.",
    //   tags: ["Python", "NumPy"],
    //   repo: "https://github.com/rishabhsxen58-lgtm/my-project",
    //   demo: "",
    //   category: "ml",
    // },
  ],

  // ── GitHub Analytics ────────────────────────────────────
  github: {
    // Public REST API endpoint (no token required)
    apiBase: "https://api.github.com",
    // Maximum repos to display in the analytics section
    maxReposToShow: 6,
    // Cache TTL in milliseconds (5 minutes)
    cacheTTL: 5 * 60 * 1000,
  },

  // ── Theme ───────────────────────────────────────────────
  theme: {
    default: "dark", // "dark" | "light"
    respectSystemPreference: true,
  },

  // ── Navigation ──────────────────────────────────────────
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Analytics", href: "#analytics" },
    { label: "Contact", href: "#contact" },
  ],

  // ── Optional: Visitor Counter ───────────────────────────
  // Uses https://hits.seeyoufarm.com — a public, privacy-respecting image counter.
  // Leave visitorCounter.enabled = false to hide it.
  visitorCounter: {
    enabled: true,
    // Replace "rishabhsxen58-lgtm/profine" with your actual user/repo
    url: "https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Frishabhsxen58-lgtm%2Fprofine&count_bg=%2320C997&title_bg=%23555555&icon=github.svg&icon_color=%23E7E7E7&title=Visitors&edge_flat=false",
    alt: "Visitor count badge",
  },
};

/* =========================================================
   END OF CONFIGURATION — Do not edit below unless you know
   what you are doing.
   ========================================================= */

"use strict";

// ── Utilities ─────────────────────────────────────────────

/**
 * Safely get an element by selector. Returns null if not found.
 */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/**
 * Create a DOM element with optional attributes and children.
 */
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else if (k.startsWith("data-")) node.dataset[k.slice(5)] = v;
    else node.setAttribute(k, v);
  }
  for (const child of children) {
    if (child == null) continue;
    if (typeof child === "string") node.appendChild(document.createTextNode(child));
    else node.appendChild(child);
  }
  return node;
}

/** Format large numbers with K/M suffixes. */
function fmtNum(n) {
  if (n == null) return "—";
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return String(n);
}

/** Validate that a string is a safe HTTP/S URL. */
function isSafeUrl(url) {
  if (!url || typeof url !== "string") return false;
  try {
    const u = new URL(url);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

/** Debounce: only call fn after `wait` ms of silence. */
function debounce(fn, wait = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

// ── Theme ─────────────────────────────────────────────────

const ThemeManager = (() => {
  const STORAGE_KEY = "profine-theme";
  const ROOT = document.documentElement;

  function getPreferred() {
    if (PROFILE_CONFIG.theme.respectSystemPreference) {
      const sys = window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
      return localStorage.getItem(STORAGE_KEY) || sys;
    }
    return localStorage.getItem(STORAGE_KEY) || PROFILE_CONFIG.theme.default;
  }

  function apply(theme) {
    ROOT.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    const btn = $("#theme-toggle");
    if (btn) {
      btn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }

  function toggle() {
    const current = ROOT.getAttribute("data-theme") || "dark";
    apply(current === "dark" ? "light" : "dark");
  }

  function init() {
    apply(getPreferred());
    window
      .matchMedia("(prefers-color-scheme: light)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem(STORAGE_KEY)) {
          apply(e.matches ? "light" : "dark");
        }
      });
  }

  return { init, toggle };
})();

// ── GitHub API ────────────────────────────────────────────

const GitHubAPI = (() => {
  const cache = new Map();
  const { apiBase, cacheTTL } = PROFILE_CONFIG.github;

  async function fetchJSON(path) {
    const url = `${apiBase}${path}`;
    const cached = cache.get(url);
    if (cached && Date.now() - cached.ts < cacheTTL) return cached.data;

    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 10_000);
    try {
      const res = await fetch(url, {
        signal: ctrl.signal,
        headers: { Accept: "application/vnd.github.v3+json" },
      });
      clearTimeout(timer);
      if (res.status === 403) throw new Error("rate_limit");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      cache.set(url, { data, ts: Date.now() });
      return data;
    } catch (err) {
      clearTimeout(timer);
      throw err;
    }
  }

  async function getUser() {
    return fetchJSON(`/users/${PROFILE_CONFIG.username}`);
  }

  async function getRepos() {
    return fetchJSON(
      `/users/${PROFILE_CONFIG.username}/repos?sort=updated&per_page=100`
    );
  }

  return { getUser, getRepos };
})();

// ── Navigation ────────────────────────────────────────────

function initNav() {
  const nav = $("#main-nav");
  if (!nav) return;

  // Nav links are statically rendered in HTML for SEO and no-JS fallback.
  // JS handles: scroll-active highlighting, mobile menu, scroll-hide.

  // Mobile hamburger
  const burger = $("#nav-burger");
  const mobileMenu = $("#mobile-menu");
  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    // Close on link click
    $$("a", mobileMenu).forEach((a) => {
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target)) {
        mobileMenu.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Active section highlight on scroll
  const sections = $$("section[id]");
  const observerOpts = { rootMargin: "-40% 0px -55% 0px" };
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $$(".nav__link, .mobile-nav__link").forEach((a) => {
          a.classList.toggle(
            "is-active",
            a.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  }, observerOpts);
  sections.forEach((s) => obs.observe(s));

  // Scroll-hide navbar
  let lastY = 0;
  window.addEventListener(
    "scroll",
    debounce(() => {
      const y = window.scrollY;
      nav.classList.toggle("nav--hidden", y > lastY && y > 80);
      nav.classList.toggle("nav--scrolled", y > 20);
      lastY = y;
    }, 50)
  );
}

// ── Hero ──────────────────────────────────────────────────

function initHero() {
  const cfg = PROFILE_CONFIG;
  const nameEl = $("#hero-name");
  const taglineEl = $("#hero-tagline");
  const interestsEl = $("#hero-interests");
  const githubLink = $("#hero-github-link");
  const linkedinLink = $("#hero-linkedin-link");

  if (nameEl) nameEl.textContent = cfg.name;
  if (taglineEl) taglineEl.textContent = cfg.tagline;
  if (interestsEl) {
    cfg.interests.forEach((interest) => {
      interestsEl.appendChild(el("span", { class: "interest-tag" }, interest));
    });
  }
  if (githubLink && isSafeUrl(cfg.social.github)) {
    githubLink.href = cfg.social.github;
  }
  if (linkedinLink && isSafeUrl(cfg.social.linkedin)) {
    linkedinLink.href = cfg.social.linkedin;
  }
}

// ── About ─────────────────────────────────────────────────

function initAbout() {
  const cfg = PROFILE_CONFIG;
  const nameEl = $("#about-name");
  const degreeEl = $("#about-degree");
  const collegeEl = $("#about-college");
  const bioEl = $("#about-bio");

  if (nameEl) nameEl.textContent = cfg.name;
  if (degreeEl) degreeEl.textContent = cfg.degree;
  if (collegeEl) collegeEl.textContent = cfg.college;
  if (bioEl) bioEl.textContent = cfg.bio;

  const interestList = $("#about-interests");
  if (interestList) {
    cfg.interests.forEach((interest) => {
      interestList.appendChild(el("li", { class: "about__interest-item" }, interest));
    });
  }
}

// ── Skills ────────────────────────────────────────────────

function initSkills() {
  const container = $("#skills-grid");
  if (!container) return;

  PROFILE_CONFIG.skills.forEach((group) => {
    const card = el("div", { class: "skill-card" });
    const header = el("div", { class: "skill-card__header" });
    header.appendChild(el("span", { class: "skill-card__icon", "aria-hidden": "true" }, group.icon));
    header.appendChild(el("h3", { class: "skill-card__title" }, group.group));
    card.appendChild(header);

    const list = el("ul", { class: "skill-card__list", role: "list" });
    group.items.forEach(({ name, level }) => {
      const li = el("li", { class: "skill-item" });
      li.appendChild(el("span", { class: "skill-item__name" }, name));
      li.appendChild(
        el("span", { class: `skill-item__badge skill-item__badge--${level}` }, level)
      );
      list.appendChild(li);
    });
    card.appendChild(list);
    container.appendChild(card);
  });
}

// ── Projects ──────────────────────────────────────────────

function buildProjectCard(proj) {
  const card = el("article", { class: "project-card", role: "article" });

  const body = el("div", { class: "project-card__body" });
  body.appendChild(el("h3", { class: "project-card__title" }, proj.name));
  body.appendChild(el("p", { class: "project-card__desc" }, proj.description));

  const tags = el("ul", { class: "project-card__tags", role: "list", "aria-label": "Technologies" });
  (proj.tags || []).forEach((tag) => {
    tags.appendChild(el("li", { class: "tag" }, tag));
  });
  body.appendChild(tags);

  const actions = el("div", { class: "project-card__actions" });
  if (isSafeUrl(proj.repo)) {
    const a = el("a", {
      href: proj.repo,
      class: "btn btn--outline btn--sm",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": `View source code for ${proj.name} on GitHub`,
    });
    a.appendChild(el("span", { "aria-hidden": "true" }, "⌥ "));
    a.appendChild(document.createTextNode("Source"));
    actions.appendChild(a);
  }
  if (proj.demo && isSafeUrl(proj.demo)) {
    const a = el("a", {
      href: proj.demo,
      class: "btn btn--primary btn--sm",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": `View live demo for ${proj.name}`,
    });
    a.appendChild(el("span", { "aria-hidden": "true" }, "↗ "));
    a.appendChild(document.createTextNode("Live Demo"));
    actions.appendChild(a);
  }
  body.appendChild(actions);
  card.appendChild(body);
  return card;
}

function initProjects() {
  const container = $("#projects-grid");
  const filterBar = $("#projects-filter");
  const searchInput = $("#projects-search");
  const emptyState = $("#projects-empty");
  if (!container) return;

  const projects = PROFILE_CONFIG.projects;

  // Build filter buttons
  if (filterBar && projects.length > 1) {
    const categories = ["all", ...new Set(projects.map((p) => p.category).filter(Boolean))];
    categories.forEach((cat) => {
      const btn = el("button", {
        class: `filter-btn${cat === "all" ? " is-active" : ""}`,
        "data-category": cat,
        type: "button",
        "aria-pressed": cat === "all" ? "true" : "false",
      }, cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1));
      btn.addEventListener("click", () => {
        $$(".filter-btn").forEach((b) => {
          b.classList.remove("is-active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");
        renderProjects();
      });
      filterBar.appendChild(btn);
    });
  }

  function renderProjects() {
    const activeCat = $(".filter-btn.is-active")?.dataset.category || "all";
    const query = searchInput?.value.trim().toLowerCase() || "";
    const filtered = projects.filter((p) => {
      const catMatch = activeCat === "all" || p.category === activeCat;
      const searchMatch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(query));
      return catMatch && searchMatch;
    });

    container.innerHTML = "";
    if (filtered.length === 0) {
      if (emptyState) emptyState.hidden = false;
    } else {
      if (emptyState) emptyState.hidden = true;
      filtered.forEach((proj) => container.appendChild(buildProjectCard(proj)));
      initScrollReveal(); // Re-run reveal for new cards
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", debounce(renderProjects, 250));
  }

  renderProjects();
}

// ── GitHub Analytics ──────────────────────────────────────

function setAnalyticsState(state, message = "") {
  const loading = $("#analytics-loading");
  const error = $("#analytics-error");
  const content = $("#analytics-content");
  const errorMsg = $("#analytics-error-msg");

  if (loading) loading.hidden = state !== "loading";
  if (error) error.hidden = state !== "error";
  if (content) content.hidden = state !== "ready";
  if (errorMsg && message) errorMsg.textContent = message;
}

function renderLanguageChart(repos) {
  const container = $("#lang-chart");
  if (!container) return;

  const langCount = {};
  repos.forEach((r) => {
    if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
  });

  const total = Object.values(langCount).reduce((a, b) => a + b, 0);
  if (total === 0) {
    container.textContent = "No language data available.";
    return;
  }

  // Sort by count
  const sorted = Object.entries(langCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 8);

  const LANG_COLORS = {
    JavaScript: "#f7df1e",
    Python: "#3572A5",
    "C++": "#f34b7d",
    C: "#555555",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Java: "#b07219",
    TypeScript: "#3178c6",
    Shell: "#89e051",
    Jupyter: "#DA5B0B",
  };

  const list = el("ul", { class: "lang-list", role: "list", "aria-label": "Repository languages" });
  sorted.forEach(([lang, count]) => {
    const pct = ((count / total) * 100).toFixed(1);
    const color = LANG_COLORS[lang] || "#888";
    const li = el("li", { class: "lang-item" });
    const bar = el("div", { class: "lang-item__bar-wrap" });
    const fill = el("div", { class: "lang-item__fill" });
    fill.style.width = `${pct}%`;
    fill.style.backgroundColor = color;
    bar.appendChild(fill);

    li.appendChild(
      el("span", { class: "lang-item__dot", "aria-hidden": "true", style: `background:${color}` })
    );
    li.appendChild(el("span", { class: "lang-item__name" }, lang));
    li.appendChild(el("span", { class: "lang-item__pct" }, `${pct}%`));
    li.appendChild(bar);
    list.appendChild(li);
  });

  container.innerHTML = "";
  container.appendChild(list);
}

function renderRepoCards(repos) {
  const container = $("#repo-cards");
  if (!container) return;
  container.innerHTML = "";

  const max = PROFILE_CONFIG.github.maxReposToShow;
  const top = repos
    .filter((r) => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, max);

  if (top.length === 0) {
    container.appendChild(
      el("p", { class: "analytics__empty" }, "No public repositories found.")
    );
    return;
  }

  top.forEach((repo) => {
    const card = el("article", { class: "repo-card" });

    const hdr = el("div", { class: "repo-card__header" });
    const nameLink = el("a", {
      href: repo.html_url,
      class: "repo-card__name",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": `Open ${repo.name} repository on GitHub`,
    });
    nameLink.textContent = repo.name;
    hdr.appendChild(nameLink);
    card.appendChild(hdr);

    if (repo.description) {
      card.appendChild(el("p", { class: "repo-card__desc" }, repo.description));
    }

    const meta = el("div", { class: "repo-card__meta" });
    if (repo.language) {
      meta.appendChild(el("span", { class: "repo-card__lang" }, repo.language));
    }
    meta.appendChild(
      el("span", { class: "repo-card__stat", "aria-label": `${repo.stargazers_count} stars` },
        `⭐ ${fmtNum(repo.stargazers_count)}`)
    );
    meta.appendChild(
      el("span", { class: "repo-card__stat", "aria-label": `${repo.forks_count} forks` },
        `🍴 ${fmtNum(repo.forks_count)}`)
    );
    card.appendChild(meta);
    container.appendChild(card);
  });
}

async function loadGitHubAnalytics() {
  setAnalyticsState("loading");

  try {
    const [user, repos] = await Promise.all([
      GitHubAPI.getUser(),
      GitHubAPI.getRepos(),
    ]);

    // Populate stat cards
    const stats = {
      "#stat-repos": user.public_repos,
      "#stat-followers": user.followers,
      "#stat-following": user.following,
      "#stat-gists": user.public_gists,
    };
    for (const [sel, val] of Object.entries(stats)) {
      const el2 = $(sel);
      if (el2) el2.textContent = fmtNum(val);
    }

    // Profile link
    const profileLink = $("#analytics-profile-link");
    if (profileLink && isSafeUrl(PROFILE_CONFIG.social.github)) {
      profileLink.href = PROFILE_CONFIG.social.github;
    }

    // GitHub Readme Stats card (optional enhancement)
    const statsImg = $("#gh-stats-img");
    if (statsImg) {
      const url = `https://github-readme-stats.vercel.app/api?username=${encodeURIComponent(PROFILE_CONFIG.username)}&show_icons=true&theme=dark&hide_border=true&count_private=false`;
      const img = el("img", {
        src: url,
        alt: `GitHub statistics for ${PROFILE_CONFIG.name}`,
        class: "gh-stats-img",
        width: "495",
        height: "195",
        loading: "lazy",
      });
      img.addEventListener("error", () => {
        statsImg.hidden = true;
      });
      statsImg.appendChild(img);
    }

    renderLanguageChart(repos);
    renderRepoCards(repos);
    setAnalyticsState("ready");
  } catch (err) {
    if (err.message === "rate_limit") {
      setAnalyticsState(
        "error",
        "GitHub API rate limit reached. Please wait a few minutes and refresh."
      );
    } else if (err.name === "AbortError") {
      setAnalyticsState("error", "Request timed out. Check your connection and try again.");
    } else {
      setAnalyticsState("error", `Could not load GitHub data: ${err.message}`);
    }
  }
}

function initAnalytics() {
  loadGitHubAnalytics();

  const refreshBtn = $("#analytics-refresh");
  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      loadGitHubAnalytics();
    });
  }

  // Visitor counter
  const vcContainer = $("#visitor-counter");
  if (vcContainer && PROFILE_CONFIG.visitorCounter.enabled) {
    const img = el("img", {
      src: PROFILE_CONFIG.visitorCounter.url,
      alt: PROFILE_CONFIG.visitorCounter.alt,
      class: "visitor-badge",
      loading: "lazy",
    });
    img.addEventListener("error", () => {
      vcContainer.hidden = true;
    });
    vcContainer.appendChild(img);
  } else if (vcContainer) {
    vcContainer.hidden = true;
  }
}

// ── Contact ───────────────────────────────────────────────

function initContact() {
  const cfg = PROFILE_CONFIG;
  const emailLink = $("#contact-email");
  const linkedinLink = $("#contact-linkedin");
  const githubLink = $("#contact-github");

  if (emailLink) emailLink.href = cfg.social.email;
  if (linkedinLink && isSafeUrl(cfg.social.linkedin)) {
    linkedinLink.href = cfg.social.linkedin;
  }
  if (githubLink && isSafeUrl(cfg.social.github)) {
    githubLink.href = cfg.social.github;
  }
}

// ── Footer ────────────────────────────────────────────────

function initFooter() {
  const yearEl = $("#footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const nameEl = $("#footer-name");
  if (nameEl) nameEl.textContent = PROFILE_CONFIG.name;

  const ghLink = $("#footer-github");
  if (ghLink && isSafeUrl(PROFILE_CONFIG.social.github)) {
    ghLink.href = PROFILE_CONFIG.social.github;
  }

  const liLink = $("#footer-linkedin");
  if (liLink && isSafeUrl(PROFILE_CONFIG.social.linkedin)) {
    liLink.href = PROFILE_CONFIG.social.linkedin;
  }

  // Back to top
  const backToTop = $("#back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", debounce(() => {
      backToTop.classList.toggle("is-visible", window.scrollY > 400);
    }, 100));
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// ── Scroll Reveal ─────────────────────────────────────────

function initScrollReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const targets = $$("[data-reveal]");
  if (!targets.length) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px" }
  );

  targets.forEach((t) => {
    if (!t.classList.contains("is-revealed")) obs.observe(t);
  });
}

// ── App Bootstrap ─────────────────────────────────────────

function bootstrap() {
  ThemeManager.init();

  // Theme toggle button
  const themeBtn = $("#theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", ThemeManager.toggle);
  }

  initNav();
  initHero();
  initAbout();
  initSkills();
  initProjects();
  initAnalytics();
  initContact();
  initFooter();
  initScrollReveal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}
