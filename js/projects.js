/**
 * Projects Data, Filtering & Interactive Case-Study Modal Module
 * Easily editable project records with custom technical SVG previews
 * (replace previewSvg with <img> paths in assets/images/projects/ anytime).
 */
const PROJECTS_DATA = [
  {
    id: "cfpb-complaints",
    number: "01",
    title: "Consumer Financial Protection Bureau Complaints Analysis",
    category: "Data Analytics",
    categories: ["Data Analytics", "Financial Analytics"],
    summary:
      "Comprehensive exploratory and trend analysis of financial consumer complaints to uncover product pain points, resolution bottlenecks, and customer experience drivers.",
    technologies: [
      "Excel",
      "Data Analytics",
      "Pivot Tables",
      "Statistical Profiling",
    ],
    githubUrl: "https://github.com/wildanalkautsar",
    liveUrl: "",
    businessProblem:
      "Financial institutions face recurring regulatory scrutiny and customer churn when complaint spikes go undiagnosed across loan, credit, and banking product lines.",
    objectives: [
      "Identify the financial products and issue categories driving the highest complaint volume.",
      "Evaluate response timeliness and dispute resolution outcomes across channels.",
      "Translate complaint patterns into actionable service quality improvements.",
    ],
    dataset:
      "Consumer Financial Protection Bureau (CFPB) public complaint records containing submission dates, product categories, sub-issues, company response statuses, and consumer dispute indicators.",
    methodology:
      "Performed structured data cleaning, date-cohort aggregation, Pareto (80/20) issue concentration analysis, and cross-tabulated resolution rate comparisons in Excel.",
    keyFindings: [
      "A concentrated subset of credit reporting and debt collection sub-issues accounted for the majority of recurring escalations.",
      "Timely response rates varied significantly by submission channel and product complexity.",
    ],
    evaluationMetrics:
      "N/A — Descriptive & Diagnostic Business Analytics Study",
    recommendations: [
      "Prioritize automated root-cause triage for top Pareto complaint categories.",
      "Standardize response SLAs across high-friction product lines to lower consumer dispute rates.",
    ],
    visualType: "trend",
  },
  {
    id: "nrg-financial-analytics",
    number: "02",
    title: "NRG Financial Analytics",
    category: "Financial Analytics",
    categories: ["Financial Analytics", "Data Analytics"],
    summary:
      "SQL-powered profitability and scenario modeling pipeline built with Python and DuckDB to evaluate revenue drivers, cost structures, and margin sensitivity.",
    technologies: ["Python", "DuckDB", "SQL", "Financial Analytics"],
    githubUrl: "https://github.com/wildanalkautsar",
    liveUrl: "",
    businessProblem:
      "Leadership needed rapid, reproducible visibility into unit profitability and downside margin risks across shifting operational cost scenarios.",
    objectives: [
      "Consolidate multi-table financial records into a high-speed analytical DuckDB workflow.",
      "Decompose gross and operating margins across segments and time periods.",
      "Simulate best-case, baseline, and stress-test financial scenarios.",
    ],
    dataset:
      "Structured financial ledger, revenue, and operational expense tables queried via DuckDB and processed in Python.",
    methodology:
      "Engineered analytical SQL views in DuckDB for variance and margin decomposition, paired with parameterized Python sensitivity models.",
    keyFindings: [
      "Isolated specific cost categories responsible for margin compression during peak volume periods.",
      "Quantified break-even thresholds under +10% and +15% input cost scenarios.",
    ],
    evaluationMetrics:
      "Variance Reconciliation Accuracy: 100% against ledger totals; 3-Scenario Sensitivity Matrix",
    recommendations: [
      "Reallocate budget toward higher-contribution segments identified in the margin bridge.",
      "Adopt automated DuckDB SQL checks for monthly financial close reporting.",
    ],
    visualType: "bars",
  },
  {
    id: "indonesian-supermarket-bi",
    number: "03",
    title: "Indonesian Supermarket Business Analytics",
    category: "Business Intelligence",
    categories: ["Business Intelligence", "Data Analytics"],
    summary:
      "End-to-end retail sales performance and product assortment dashboard designed in Google Sheets and Looker Studio for regional store decision-making.",
    technologies: [
      "Google Sheets",
      "Looker Studio",
      "Business Intelligence",
      "KPI Design",
    ],
    githubUrl: "https://github.com/wildanalkautsar",
    liveUrl: "",
    businessProblem:
      "Store managers lacked an interactive, consolidated view of category revenue, branch performance, and basket trends across Indonesian supermarket outlets.",
    objectives: [
      "Track total sales, gross income, transaction volume, and average basket value in real time.",
      "Compare branch and product-line performance to guide inventory and promotional focus.",
      "Provide self-service filtering by branch, customer type, and payment method.",
    ],
    dataset:
      "Indonesian supermarket transaction dataset covering branch locations, product lines, unit prices, quantities, tax, gross margin, and timestamps.",
    methodology:
      "Cleaned and standardized raw records in Google Sheets using calculated fields, then built a multi-page interactive Looker Studio executive dashboard.",
    keyFindings: [
      "Identified top-performing product lines driving peak weekend revenue across branches.",
      "Revealed distinct payment method preferences and basket sizes between member and normal shoppers.",
    ],
    evaluationMetrics:
      "Interactive KPI Scorecards, Branch YoY/MoM Benchmarks & Product Mix Ratios",
    recommendations: [
      "Bundle high-margin items with high-frequency staple categories during peak hours.",
      "Tailor loyalty promotions to convert non-member repeat buyers.",
    ],
    visualType: "dashboard",
  },
  {
    id: "bike-sharing-demand",
    number: "04",
    title: "Bike Sharing Demand Analysis",
    category: "Forecasting",
    categories: ["Forecasting", "Data Analytics"],
    summary:
      "Temporal demand exploration and interactive Streamlit web application analyzing hourly, seasonal, and weather-driven urban bike rental patterns.",
    technologies: ["Python", "Pandas", "Streamlit", "EDA", "Forecasting"],
    githubUrl: "https://github.com/wildanalkautsar",
    liveUrl: "",
    businessProblem:
      "Urban bike-sharing operators experience fleet shortages during commuter peaks and underutilization during adverse weather, impacting service availability.",
    objectives: [
      "Analyze hourly, weekday vs. weekend, and seasonal rental demand cycles.",
      "Quantify the impact of temperature, humidity, and weather conditions on ridership.",
      "Deploy an interactive Streamlit dashboard for operational fleet planning.",
    ],
    dataset:
      "Historical Capital Bikeshare hourly and daily rental logs enriched with meteorological attributes (temperature, humidity, windspeed, weather situation).",
    methodology:
      "Conducted time-series decomposition, feature engineering (rush-hour flags, working-day indicators), statistical correlation testing, and Streamlit UI development.",
    keyFindings: [
      "Registered commuters generated sharp bimodal peaks (08:00 and 17:00–18:00) on weekdays, whereas casual riders peaked mid-afternoon on weekends.",
      "Moderate temperatures and clear conditions strongly correlated with maximum fleet utilization.",
    ],
    evaluationMetrics:
      "Seasonal & Hourly Demand Variance Explained; Interactive Streamlit Explorer",
    recommendations: [
      "Schedule fleet rebalancing prior to 07:30 and 16:30 on working days near transit hubs.",
      "Align preventive maintenance windows with low-demand early morning and inclement weather periods.",
    ],
    visualType: "timeseries",
  },
  {
    id: "customer-segmentation",
    number: "05",
    title: "Customer Segmentation",
    category: "Machine Learning",
    categories: ["Machine Learning", "Data Analytics"],
    summary:
      "Unsupervised K-Means clustering pipeline transforming customer behavioral and RFM metrics into distinct, actionable marketing personas.",
    technologies: ["Python", "Scikit-learn", "K-Means", "Clustering", "Pandas"],
    githubUrl: "https://github.com/wildanalkautsar",
    liveUrl: "",
    businessProblem:
      "One-size-fits-all marketing campaigns resulted in suboptimal retention and inefficient promotional spend across a diverse customer base.",
    objectives: [
      "Engineer behavioral and Recency-Frequency-Monetary (RFM) customer features.",
      "Determine optimal cluster granularity using Elbow and Silhouette diagnostics.",
      "Profile each customer cluster to guide targeted retention and upsell strategies.",
    ],
    dataset:
      "Customer demographic and transactional purchase history dataset preprocessed with feature scaling and outlier treatment.",
    methodology:
      "Applied log-transformation and StandardScaler normalization, evaluated K=2 through K=8 via Inertia and Silhouette Score, and trained a Scikit-learn K-Means model.",
    keyFindings: [
      "Segmented customers into four clear behavioral tiers: High-Value Loyalists, Potential Growth Buyers, At-Risk Dormant Customers, and Price-Sensitive Occasional Shoppers.",
      "High-value clusters exhibited significantly higher purchase frequency rather than isolated large orders.",
    ],
    evaluationMetrics:
      "Validated via Elbow Method (Inertia inflection) & Silhouette Score cluster separation",
    recommendations: [
      "Launch automated win-back incentives triggered when customers transition toward the At-Risk segment.",
      "Introduce tiered VIP perks to protect retention among High-Value Loyalists.",
    ],
    visualType: "clusters",
  },
];

function generateProjectSvg(type, title) {
  const visuals = {
    trend: `
      <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title} analytical chart preview">
        <rect width="640" height="400" fill="var(--surface-subtle)"/>
        <g stroke="var(--border)" stroke-width="1">
          <line x1="60" y1="70" x2="580" y2="70"/><line x1="60" y1="145" x2="580" y2="145"/>
          <line x1="60" y1="220" x2="580" y2="220"/><line x1="60" y1="295" x2="580" y2="295"/>
        </g>
        <path d="M60 270 L145 235 L230 248 L315 170 L400 185 L485 112 L580 92 L580 320 L60 320 Z" fill="var(--primary)" opacity="0.12"/>
        <polyline fill="none" stroke="var(--primary)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" points="60,270 145,235 230,248 315,170 400,185 485,112 580,92"/>
        <polyline fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="6 6" points="60,290 145,275 230,260 315,240 400,215 485,190 580,165"/>
        <g fill="var(--surface)" stroke="var(--primary)" stroke-width="3">
          <circle cx="145" cy="235" r="5"/><circle cx="315" cy="170" r="5"/><circle cx="485" cy="112" r="5"/><circle cx="580" cy="92" r="5"/>
        </g>
        <text x="60" y="42" fill="var(--text-secondary)" font-family="monospace" font-size="12">CFPB // COMPLAINT VOLUME &amp; RESOLUTION TREND</text>
      </svg>`,
    bars: `
      <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title} financial scenario chart preview">
        <rect width="640" height="400" fill="var(--surface-subtle)"/>
        <g stroke="var(--border)" stroke-width="1">
          <line x1="60" y1="90" x2="580" y2="90"/><line x1="60" y1="170" x2="580" y2="170"/>
          <line x1="60" y1="250" x2="580" y2="250"/><line x1="60" y1="320" x2="580" y2="320"/>
        </g>
        <rect x="95" y="140" width="44" height="180" rx="4" fill="var(--primary)"/>
        <rect x="147" y="185" width="44" height="135" rx="4" fill="var(--accent)"/>
        <rect x="245" y="110" width="44" height="210" rx="4" fill="var(--primary)"/>
        <rect x="297" y="160" width="44" height="160" rx="4" fill="var(--accent)"/>
        <rect x="395" y="95" width="44" height="225" rx="4" fill="var(--primary)"/>
        <rect x="447" y="145" width="44" height="175" rx="4" fill="var(--accent)"/>
        <text x="60" y="42" fill="var(--text-secondary)" font-family="monospace" font-size="12">DUCKDB // REVENUE VS. OPERATING MARGIN SCENARIOS</text>
      </svg>`,
    dashboard: `
      <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title} BI dashboard preview">
        <rect width="640" height="400" fill="var(--surface-subtle)"/>
        <rect x="48" y="64" width="165" height="76" rx="8" fill="var(--surface)" stroke="var(--border)"/>
        <rect x="237" y="64" width="165" height="76" rx="8" fill="var(--surface)" stroke="var(--border)"/>
        <rect x="426" y="64" width="165" height="76" rx="8" fill="var(--surface)" stroke="var(--border)"/>
        <rect x="66" y="84" width="60" height="10" rx="3" fill="var(--primary)"/>
        <rect x="66" y="104" width="105" height="16" rx="3" fill="var(--deep-navy)" opacity="0.8"/>
        <rect x="255" y="84" width="60" height="10" rx="3" fill="var(--accent)"/>
        <rect x="255" y="104" width="95" height="16" rx="3" fill="var(--deep-navy)" opacity="0.8"/>
        <rect x="444" y="84" width="60" height="10" rx="3" fill="var(--primary)"/>
        <rect x="444" y="104" width="110" height="16" rx="3" fill="var(--deep-navy)" opacity="0.8"/>
        <rect x="48" y="160" width="335" height="190" rx="8" fill="var(--surface)" stroke="var(--border)"/>
        <rect x="403" y="160" width="188" height="190" rx="8" fill="var(--surface)" stroke="var(--border)"/>
        <circle cx="497" cy="255" r="54" fill="none" stroke="var(--primary)" stroke-width="18" stroke-dasharray="210 340"/>
        <circle cx="497" cy="255" r="54" fill="none" stroke="var(--accent)" stroke-width="18" stroke-dasharray="110 340" stroke-dashoffset="-215"/>
        <polyline fill="none" stroke="var(--primary)" stroke-width="3" points="74,305 130,275 186,285 242,230 298,242 354,195"/>
        <text x="48" y="42" fill="var(--text-secondary)" font-family="monospace" font-size="12">LOOKER STUDIO // RETAIL KPI &amp; CATEGORY MIX</text>
      </svg>`,
    timeseries: `
      <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title} hourly demand pattern preview">
        <rect width="640" height="400" fill="var(--surface-subtle)"/>
        <g stroke="var(--border)" stroke-width="1">
          <line x1="60" y1="90" x2="580" y2="90"/><line x1="60" y1="170" x2="580" y2="170"/>
          <line x1="60" y1="250" x2="580" y2="250"/><line x1="60" y1="320" x2="580" y2="320"/>
        </g>
        <path d="M60 300 Q 120 295, 165 135 T 270 220 T 410 115 T 580 280" fill="none" stroke="var(--primary)" stroke-width="3.5"/>
        <path d="M60 305 Q 150 285, 240 215 T 360 175 T 580 295" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
        <text x="60" y="42" fill="var(--text-secondary)" font-family="monospace" font-size="12">STREAMLIT // BIMODAL COMMUTER &amp; WEATHER DEMAND</text>
      </svg>`,
    clusters: `
      <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title} K-Means clustering preview">
        <rect width="640" height="400" fill="var(--surface-subtle)"/>
        <line x1="70" y1="330" x2="580" y2="330" stroke="var(--border)" stroke-width="1.5"/>
        <line x1="70" y1="65" x2="70" y2="330" stroke="var(--border)" stroke-width="1.5"/>
        <!-- Cluster 1 -->
        <g fill="var(--primary)" opacity="0.8">
          <circle cx="165" cy="255" r="7"/><circle cx="185" cy="272" r="6"/><circle cx="148" cy="275" r="8"/><circle cx="195" cy="245" r="6"/><circle cx="172" cy="235" r="7"/>
        </g>
        <!-- Cluster 2 -->
        <g fill="var(--accent)" opacity="0.85">
          <circle cx="320" cy="185" r="7"/><circle cx="342" cy="198" r="8"/><circle cx="305" cy="208" r="6"/><circle cx="350" cy="172" r="7"/><circle cx="326" cy="162" r="6"/>
        </g>
        <!-- Cluster 3 -->
        <g fill="var(--secondary)" opacity="0.9">
          <circle cx="475" cy="115" r="8"/><circle cx="498" cy="128" r="7"/><circle cx="460" cy="135" r="7"/><circle cx="510" cy="105" r="6"/><circle cx="485" cy="95" r="8"/>
        </g>
        <text x="70" y="42" fill="var(--text-secondary)" font-family="monospace" font-size="12">SCIKIT-LEARN // K-MEANS RFM CUSTOMER CLUSTERS</text>
      </svg>`,
  };
  return visuals[type] || visuals.trend;
}

(function () {
  const container = document.getElementById("projects-container");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalMeta = document.getElementById("modal-meta");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");

  let lastFocusedElement = null;

  function renderProjects(filterCategory = "All") {
    if (!container) return;

    const filtered =
      filterCategory === "All"
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter((project) =>
            project.categories.includes(filterCategory),
          );

    container.innerHTML = filtered
      .map(
        (project) => `
        <article class="project-card" data-project-id="${project.id}">
          <div class="project-media" role="button" tabindex="0" data-open-modal="${project.id}" aria-label="View case study for ${project.title}">
            ${generateProjectSvg(project.visualType, project.title)}
          </div>
          <div class="project-body">
            <div class="project-meta-row">
              <span class="project-number mono">PROJECT // ${project.number}</span>
              <span class="project-category-pill mono">${project.category}</span>
            </div>
            <h3 class="project-title">
              <button type="button" class="project-title-btn" data-open-modal="${project.id}">
                ${project.title}
              </button>
            </h3>
            <p class="project-desc">${project.summary}</p>
            <div class="project-tags">
              ${project.technologies.map((tech) => `<span class="tech-tag mono">${tech}</span>`).join("")}
            </div>
            <div class="project-links">
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>GitHub</span>
              </a>
              ${
                project.liveUrl
                  ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                      <span>Live Demo</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </a>`
                  : ""
              }
              <button type="button" class="project-link project-link-primary" data-open-modal="${project.id}">
                <span>Case Study Details</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </article>
      `,
      )
      .join("");
  }

  function openProjectModal(projectId) {
    const project = PROJECTS_DATA.find((item) => item.id === projectId);
    if (!project || !modal) return;

    lastFocusedElement = document.activeElement;
    modalMeta.textContent = `PROJECT ${project.number} // ${project.category.toUpperCase()}`;
    modalTitle.textContent = project.title;

    modalBody.innerHTML = `
      <div class="modal-hero-visual">
        ${generateProjectSvg(project.visualType, project.title)}
      </div>

      <div class="modal-section-grid">
        <div class="modal-block">
          <h3>01 // BUSINESS PROBLEM</h3>
          <p>${project.businessProblem}</p>
        </div>

        <div class="modal-block">
          <h3>02 // PROJECT OBJECTIVES</h3>
          <ul>
            ${project.objectives.map((obj) => `<li>${obj}</li>`).join("")}
          </ul>
        </div>

        <div class="modal-block">
          <h3>03 // DATASET</h3>
          <p>${project.dataset}</p>
        </div>

        <div class="modal-block">
          <h3>04 // ANALYTICAL METHODOLOGY</h3>
          <p>${project.methodology}</p>
        </div>

        <div class="modal-block">
          <h3>05 // KEY FINDINGS</h3>
          <ul>
            ${project.keyFindings.map((finding) => `<li>${finding}</li>`).join("")}
          </ul>
        </div>

        <div class="modal-block">
          <h3>06 // EVALUATION &amp; METRICS</h3>
          <p>${project.evaluationMetrics}</p>
        </div>

        <div class="modal-block modal-block-full">
          <h3>07 // BUSINESS RECOMMENDATIONS</h3>
          <ul>
            ${project.recommendations.map((rec) => `<li>${rec}</li>`).join("")}
          </ul>
        </div>
      </div>

      <div class="modal-footer-links">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <span>View Repository on GitHub</span>
        </a>
        ${
          project.liveUrl
            ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                <span>Open Live Demo</span>
              </a>`
            : ""
        }
      </div>
    `;

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modalClose.focus();
  }

  function closeProjectModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  // Category Filter Listeners
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      renderProjects(btn.dataset.filter);
    });
  });

  // Delegated Click & Keyboard Triggers for Modal
  if (container) {
    container.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-open-modal]");
      if (trigger) {
        openProjectModal(trigger.getAttribute("data-open-modal"));
      }
    });

    container.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        const trigger = event.target.closest("[data-open-modal]");
        if (trigger && trigger.tagName !== "BUTTON") {
          event.preventDefault();
          openProjectModal(trigger.getAttribute("data-open-modal"));
        }
      }
    });
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeProjectModal);
  }

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal && !modal.hidden) {
      closeProjectModal();
    }
  });

  // Initial Render
  renderProjects("All");
})();
