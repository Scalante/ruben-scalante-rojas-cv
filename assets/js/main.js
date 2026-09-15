/**
 * main.js — UI logic
 *
 * Responsibilities:
 *   - Language toggle (ES ↔ EN) using TRANSLATIONS from i18n.js
 *   - Render all dynamic content from TRANSLATIONS
 *   - Navbar: scroll class + active link + hamburger menu
 *   - Experience accordion (expand / collapse bullets)
 *   - IntersectionObserver for scroll-triggered animations
 */

'use strict';

/* ─── State ───────────────────────────────────────────────── */
let currentLang = localStorage.getItem('lang') || 'es';


/* ─── DOM references ──────────────────────────────────────── */
const DOM = {
  navbar:        document.getElementById('navbar'),
  hamburger:     document.getElementById('hamburger'),
  mobileMenu:    document.getElementById('mobile-menu'),
  langToggle:    document.getElementById('lang-toggle'),
  langOptions:   document.querySelectorAll('.lang-toggle__option'),
};


/* ─── Bootstrap ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  render(currentLang);
  initNavbar();
  initHamburger();
  initLangToggle();
  initScrollAnimations();
  initBackToTop();
  setActiveLang(currentLang);
});


/* ─── Render ──────────────────────────────────────────────── */

/**
 * Main render function — called on load and on language change.
 * Reads all [data-i18n] attributes and fills content from TRANSLATIONS.
 */
function render(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  /* --- Navbar links --- */
  setTextById('nav-about',    t.nav.about);
  setTextById('nav-stack',    t.nav.stack);
  setTextById('nav-exp',      t.nav.exp);
  setTextById('nav-edu',      t.nav.edu);
  setTextById('nav-projects', t.nav.projects);
  setTextById('nav-certs',    t.nav.certs);
  setTextById('nav-contact',  t.nav.contact);

  /* Mobile nav duplicates */
  setTextById('mob-about',    t.nav.about);
  setTextById('mob-stack',    t.nav.stack);
  setTextById('mob-exp',      t.nav.exp);
  setTextById('mob-edu',      t.nav.edu);
  setTextById('mob-projects', t.nav.projects);
  setTextById('mob-certs',    t.nav.certs);
  setTextById('mob-contact',  t.nav.contact);

  /* --- Hero --- */
  setTextById('hero-greeting',   t.hero.greeting);
  setTextById('hero-role',       t.hero.role);
  setTextById('hero-tagline',    t.hero.tagline);
  setTextById('hero-btn-work',   t.hero.btnWork);
  setTextById('hero-btn-cv',     t.hero.btnCv);
  setTextById('hero-btn-contact',t.hero.btnContact);

  /* --- About --- */
  setTextById('about-title', t.about.title);
  setTextById('about-body',  t.about.body);

  /* --- Achievements --- */
  setTextById('achievements-title', t.achievements.title);
  renderList('achievements-list', t.achievements.items, 'achievement-item');

  /* --- Stack --- */
  setTextById('stack-title', t.skills.title);

  /* --- Experience --- */
  setTextById('exp-title', t.experience.title);
  renderExperience('timeline', t.experience.jobs, t.experience.details);

  /* --- Education --- */
  setTextById('edu-title', t.education.title);
  renderEducation('edu-grid', t.education.items);

  /* --- Projects --- */
  setTextById('projects-title', t.projects.title);
  setTextById('projects-note',  t.projects.note);
  renderProjects('projects-grid', t.projects.items);

  /* --- Certifications --- */
  setTextById('certs-title', t.certs.title);
  renderCerts('certs-grid', t.certs.items);
  setTextById('certs-note', t.certs.note);

  /* --- Contact --- */
  setTextById('contact-title',     t.contact.title);
  setTextById('contact-phone',     t.contact.phone);
  setTextById('contact-email',     t.contact.email);
  setTextById('contact-location',  t.contact.location);
  setTextById('contact-available', t.contact.available);
  setTextById('footer-text',       t.contact.footer);

  /* --- Sidebar info --- */
  setTextById('langs-title',   t.langs.title);
  renderLangs('langs-list',    t.langs.items);
  setTextById('hobbies-title', t.hobbies.title);
  renderHobbies('hobbies-list',t.hobbies.items);

  /* Re-init accordions after DOM rebuild */
  initAccordions();
}


/* ─── Render helpers ──────────────────────────────────────── */

function setTextById(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function renderList(containerId, items, itemClass) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(item => `
    <li class="${itemClass}">${item}</li>
  `).join('');
}

function renderExperience(containerId, jobs, detailsLabel) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = jobs.map(job => `
    <div class="timeline__item fade-in">
      <div class="timeline__dot"></div>
      <div class="timeline__header">
        <div>
          <div class="timeline__company">${job.company}</div>
          <div class="timeline__role">${job.role}</div>
        </div>
        <div class="timeline__meta">
          <span class="timeline__period">${job.period}</span>
          <span class="timeline__location">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            ${job.location}
          </span>
        </div>
      </div>
      <button class="timeline__toggle" aria-expanded="false" data-target="${job.id}-bullets">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
        ${detailsLabel}
      </button>
      <ul class="timeline__bullets" id="${job.id}-bullets">
        ${job.bullets.map(b => `<li class="timeline__bullet">${b}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderEducation(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(item => `
    <div class="edu-card fade-in">
      <div class="edu-card__year">${item.year}</div>
      <div class="edu-card__degree">${item.degree}</div>
      <div class="edu-card__school">${item.school}</div>
      <div class="edu-card__location">${item.location}</div>
    </div>
  `).join('');
}

function renderProjects(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(item => `
    <div class="project-card fade-in">
      <div class="project-card__top">
        <div class="project-card__folder">
          ${item.links && item.links.private ? `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          ` : `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
          `}
        </div>
        <div class="project-card__links">
          ${item.links && item.links.github ? `
          <a href="${item.links.github}" target="_blank" rel="noopener noreferrer"
             class="project-card__link" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>` : ''}
          ${item.links && item.links.private ? `
            <span class="project-card__link" style="opacity: 0.5; cursor: not-allowed;" aria-label="Private Repository">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            </span>
          ` : ''}
        </div>
      </div>
      <div class="project-card__name">${item.name}</div>
      <div class="project-card__desc">${item.desc}</div>
      <div class="project-card__tags">
        ${item.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderCerts(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(item => `
    <div class="cert-card fade-in">
      <div class="cert-card__icon">🎓</div>
      <div class="cert-card__name">${item.name}</div>
      <div class="cert-card__issuer">${item.issuer}</div>
      <div class="cert-card__year">${item.year}</div>
    </div>
  `).join('');
}

function renderLangs(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(item => `
    <div class="lang-item">
      <span class="lang-item__name">${item.name}</span>
      <span class="lang-item__level">${item.level}</span>
    </div>
  `).join('');
}

function renderHobbies(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(item => `
    <span class="hobby-badge">${item}</span>
  `).join('');
}


/* ─── Navbar ──────────────────────────────────────────────── */
function initNavbar() {
  const onScroll = () => {
    if (window.scrollY > 20) {
      DOM.navbar.classList.add('scrolled');
    } else {
      DOM.navbar.classList.remove('scrolled');
    }
    updateActiveNavLink();
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link[data-section]');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.id;
    }
  });

  // Highlight the last section if scrolled to the very bottom
  if (window.innerHeight + Math.ceil(window.scrollY) >= document.body.offsetHeight - 50) {
    current = sections[sections.length - 1].id;
  }

  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.section === current);
  });
}


/* ─── Hamburger ───────────────────────────────────────────── */
function initHamburger() {
  if (!DOM.hamburger || !DOM.mobileMenu) return;

  DOM.hamburger.addEventListener('click', () => {
    const isOpen = DOM.mobileMenu.classList.toggle('open');
    DOM.hamburger.classList.toggle('open', isOpen);
    DOM.hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  /* Close on link click */
  DOM.mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      DOM.mobileMenu.classList.remove('open');
      DOM.hamburger.classList.remove('open');
    });
  });
}


/* ─── Language toggle ─────────────────────────────────────── */
function initLangToggle() {
  if (!DOM.langToggle) return;

  DOM.langToggle.addEventListener('click', (e) => {
    const option = e.target.closest('.lang-toggle__option');
    if (!option) return;
    const lang = option.dataset.lang;
    if (lang && lang !== currentLang) {
      currentLang = lang;
      localStorage.setItem('lang', lang);
      setActiveLang(lang);
      render(lang);
      initScrollAnimations(); // re-observe newly rendered elements
    }
  });
}

function setActiveLang(lang) {
  DOM.langOptions.forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
}


/* ─── Experience accordion ────────────────────────────────── */
function initAccordions() {
  document.querySelectorAll('.timeline__toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const bullets  = document.getElementById(targetId);
      if (!bullets) return;

      const isOpen = bullets.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });
}


/* ─── Scroll animations (IntersectionObserver) ────────────── */
function initScrollAnimations() {
  const animatedEls = document.querySelectorAll('.fade-in, .fade-in-left, .stagger');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  });

  animatedEls.forEach(el => observer.observe(el));
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });
}
