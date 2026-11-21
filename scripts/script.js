/**
 * Monochrome Data Analyst Portfolio
 * Modular ES6+ Vanilla JavaScript
 */

/* ==========================================================================
   1. CENTRALIZED PROJECT DATA STORE
   Add, edit, or remove projects below without touching HTML markup.
   ========================================================================== */
const PROJECTS_DATA = [
  {
    id: 'cfpb-bofa-complaints',
    title: 'Bank of America CFPB Consumer Complaints Analysis (2017–2023)',
    category: 'Financial Data Analytics & BI',
    thumbnail: 'assets/images/project-1.jpg',
    description:
      'Comprehensive longitudinal analysis of multi-year Consumer Financial Protection Bureau (CFPB) records evaluating complaint volume, product dispute concentration, and response timeliness.',
    businessProblem:
      'High-volume recurring consumer disputes across credit reporting and checking accounts increased operational resolution overhead and regulatory escalation risk.',
    objectives: [
      'Quantify year-over-year complaint growth across financial product lines.',
      'Identify geographic hotspots and root-cause sub-issues driving consumer escalations.',
      'Benchmark timely response rates and non-monetary relief distributions.'
    ],
    methodology:
      'Cleaned and standardized raw CFPB datasets using Python (Pandas), engineered temporal seasonality features, and built interactive drill-down KPI views in Power BI.',
    technologies: ['Python', 'Pandas', 'SQL', 'Power BI'],
    keyFindings:
      'Credit reporting and improper use of credit reports accounted for over 52% of post-2020 volume spikes, enabling targeted workflow triage recommendations.',
    githubUrl: 'https://github.com/muchammadwr',
    liveDemoUrl: 'https://muchammadwr.github.io/',
    gallery: [
      'assets/images/project-1.jpg'
    ]
  },
  {
    id: 'msme-supply-chain-audit',
    title: 'Multi-Outlet Automotive Supply Chain Data Audit & Demand Analysis',
    category: 'Operations & Data Engineering',
    thumbnail: 'assets/images/project-2.jpg',
    description:
      'Data cleansing, deduplication, and SKU velocity analysis across 10,000+ raw multi-outlet transaction rows for an automotive parts distributor.',
    businessProblem:
      'Fragmented point-of-sale exports contained duplicate invoices, inconsistent SKU naming conventions, and blind spots in branch-level inventory turnover.',
    objectives: [
      'Establish an automated validation pipeline to deduplicate 500+ cross-branch transaction anomalies.',
      'Classify fast-moving vs. slow-moving inventory items across outlets.',
      'Deliver a clean analytical baseline for procurement forecasting.'
    ],
    methodology:
      'Applied deterministic rule-based deduplication in Python and SQL, followed by ABC inventory stratification and margin contribution analysis.',
    technologies: ['Python', 'Pandas', 'SQL', 'Excel'],
    keyFindings:
      'Eliminated 8.4% reporting distortion caused by duplicate branch entries and isolated the top 18% of SKUs generating 74% of gross turnover.',
    githubUrl: 'https://github.com/muchammadwr',
    liveDemoUrl: '',
    gallery: [
      'assets/images/project-2.jpg'
    ]
  },
  {
    id: 'banking-churn-segmentation',
    title: 'Banking Customer Classification & Behavioral Clustering',
    category: 'Machine Learning & Segmentation',
    thumbnail: 'assets/images/project-3.jpg',
    description:
      'Supervised classification and unsupervised customer segmentation across 2,512 banking transaction records to predict retention risk and group behavioral profiles.',
    businessProblem:
      'Uniform marketing outreach yielded diminishing retention returns due to unsegmented customer transaction behaviors and churn triggers.',
    objectives: [
      'Train an interpretable classification model to flag high-churn-risk accounts.',
      'Segment customers into distinct behavioral clusters using unsupervised learning.',
      'Translate cluster centroids into actionable retention playbooks.'
    ],
    methodology:
      'Evaluated Decision Tree classifiers with cross-validation and applied K-Means clustering (k=3) validated via Silhouette scoring in Scikit-learn.',
    technologies: ['Python', 'Scikit-learn', 'NumPy', 'Matplotlib'],
    keyFindings:
      'Decision Tree classification achieved 95.77% accuracy, while K-Means (k=3, Silhouette 0.49) separated high-tenure savers from low-engagement transactional users.',
    githubUrl: 'https://github.com/muchammadwr',
    liveDemoUrl: '',
    gallery: [
      'assets/images/project-3.jpg'
    ]
  }
];

/* ==========================================================================
   2. APPLICATION INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initThemeManager();
  initMobileNavigation();
  initActiveNavObserver();
  renderProjectsGrid(PROJECTS_DATA);
  initProjectModal();
  initScrollReveal();
  initContactForm();
  initBackToTop();
});

/* ==========================================================================
   3. DARK / LIGHT MONOCHROME THEME MANAGER
   Default: Dark Mode unless user has a saved preference or system light preference
   ========================================================================== */
function initThemeManager() {
  const toggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    root.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    root.setAttribute('data-theme', 'light');
  } else {
    root.setAttribute('data-theme', 'dark');
  }

  toggleBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  });
}

/* ==========================================================================
   4. DYNAMIC PROJECT CARD RENDERER
   ========================================================================== */
function renderProjectsGrid(projects) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (project) => `
      <article class="project-card card reveal" data-project-id="${project.id}" tabindex="0" role="button" aria-label="Open case study: ${project.title}">
        <div class="project-thumb-wrapper">
          <img src="${project.thumbnail}" alt="${project.title} preview" class="project-img" loading="lazy" width="600" height="375">
          <span class="project-hover-badge">View Project &nearr;</span>
        </div>
        <div class="project-body">
          <span class="project-category">${project.category}</span>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-summary">${project.description}</p>
          <div class="project-tags">
            ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
        </div>
      </article>
    `
    )
    .join('');
}

/* ==========================================================================
   5. ACCESSIBLE ZOOM MODAL CONTROLLER (EVENT DELEGATION + FOCUS MANAGEMENT)
   ========================================================================== */
function initProjectModal() {
  const grid = document.getElementById('projects-grid');
  const modalBackdrop = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.getElementById('modal-close');
  let lastFocusedElement = null;

  if (!grid || !modalBackdrop || !modalBody || !closeBtn) return;

  function openModal(projectId) {
    const project = PROJECTS_DATA.find((item) => item.id === projectId);
    if (!project) return;

    lastFocusedElement = document.activeElement;

    const objectivesHtml = project.objectives
      .map((obj) => `<li>${obj}</li>`)
      .join('');

    const techHtml = project.technologies
      .map((tech) => `<span class="tech-tag">${tech}</span>`)
      .join('');

    const galleryHtml =
      project.gallery && project.gallery.length > 1
        ? `<div class="modal-gallery">
            ${project.gallery
              .map(
                (imgSrc, index) =>
                  `<img src="${imgSrc}" alt="${project.title} view ${index + 1}" loading="lazy">`
              )
              .join('')}
          </div>`
        : '';

    const liveDemoBtn = project.liveDemoUrl
      ? `<a href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Live Demo &nearr;</a>`
      : '';

    modalBody.innerHTML = `
      <img src="${project.thumbnail}" alt="${project.title}" class="modal-hero-img">
      <p class="modal-meta">${project.category}</p>
      <h3 class="modal-title" id="modal-title">${project.title}</h3>
      <p class="modal-desc">${project.description}</p>

      <div class="modal-grid">
        <div class="modal-block">
          <h4>Business Problem</h4>
          <p>${project.businessProblem}</p>
        </div>
        <div class="modal-block">
          <h4>Objectives</h4>
          <ul>${objectivesHtml}</ul>
        </div>
        <div class="modal-block">
          <h4>Analytical Methodology</h4>
          <p>${project.methodology}</p>
        </div>
        <div class="modal-block modal-findings">
          <h4>Key Findings &amp; Impact</h4>
          <p>${project.keyFindings}</p>
        </div>
      </div>

      <div class="project-tags" style="margin-bottom: 1.5rem;">
        ${techHtml}
      </div>

      ${galleryHtml}

      <div class="modal-actions">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">GitHub Repository &nearr;</a>
        ${liveDemoBtn}
      </div>
    `;

    modalBackdrop.hidden = false;
    // Trigger reflow for CSS scale transition
    requestAnimationFrame(() => {
      modalBackdrop.classList.add('is-open');
    });

    document.body.classList.add('modal-open');
    closeBtn.focus();
  }

  function closeModal() {
    modalBackdrop.classList.remove('is-open');
    document.body.classList.remove('modal-open');

    setTimeout(() => {
      modalBackdrop.hidden = true;
      if (lastFocusedElement) {
        lastFocusedElement.focus();
      }
    }, 250);
  }

  // Event delegation for clicking or pressing Enter/Space on any project card
  grid.addEventListener('click', (event) => {
    const card = event.target.closest('.project-card');
    if (card) {
      openModal(card.dataset.projectId);
    }
  });

  grid.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      const card = event.target.closest('.project-card');
      if (card) {
        event.preventDefault();
        openModal(card.dataset.projectId);
      }
    }
  });

  // Close actions: X button, backdrop click, Escape key
  closeBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (event) => {
    if (event.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalBackdrop.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Trap keyboard focus inside modal while open
  modalBackdrop.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;

    const focusable = modalBackdrop.querySelectorAll(
      'button, a[href], input, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

/* ==========================================================================
   6. MOBILE NAVIGATION & SCROLL SPY
   ========================================================================== */
function initMobileNavigation() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initActiveNavObserver() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener(
    'scroll',
    () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const top = section.offsetTop - 110;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { passive: true }
  );
}

/* ==========================================================================
   7. INTERSECTION OBSERVER SCROLL REVEAL
   ========================================================================== */
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

/* ==========================================================================
   8. CONTACT FORM VALIDATION & BACK TO TOP
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const statusEl = document.getElementById('form-status');

  const toggleError = (id, show) => {
    const el = document.getElementById(id);
    if (el) el.style.display = show ? 'block' : 'none';
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;

    if (!nameInput.value.trim()) {
      toggleError('name-error', true);
      valid = false;
    } else {
      toggleError('name-error', false);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      toggleError('email-error', true);
      valid = false;
    } else {
      toggleError('email-error', false);
    }

    if (messageInput.value.trim().length < 10) {
      toggleError('message-error', true);
      valid = false;
    } else {
      toggleError('message-error', false);
    }

    if (valid) {
      statusEl.textContent = 'Inquiry validated. Thank you for reaching out.';
      form.reset();
    } else {
      statusEl.textContent = 'Please review the required fields above.';
    }
  });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}