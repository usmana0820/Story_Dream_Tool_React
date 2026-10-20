/* ================================================
   SuZu DreamToon AI - Landing Page Scripts
   ================================================ */

const navbar = document.querySelector('.neon-navbar');
const sections = Array.from(document.querySelectorAll('section[id]'));
const navDirectLinks = document.querySelectorAll('.neon-nav-link[href^="#"]');
const navDropdownItems = document.querySelectorAll('.neon-dropdown-item[href^="#"]');
const navLivePill = document.getElementById('navLivePill');
const navLiveText = document.getElementById('navLiveText');
const navScrollProgress = document.getElementById('navScrollProgress');
const exploreCurrent = document.querySelector('.explore-current');

const exploreSections = new Set([
  'about', 'features', 'workflow', 'demo-stories',
  'emotion-audio', 'motion-preview', 'characters',
  'blog', 'testimonials', 'cta'
]);

const sectionLabels = {
  home: 'Home',
  about: 'About',
  features: 'Features',
  workflow: 'Workflow',
  'demo-stories': 'Demo Stories',
  'emotion-audio': 'Emotion Audio',
  'motion-preview': 'Motion Preview',
  characters: 'Characters',
  blog: 'Blog',
  testimonials: 'Testimonials',
  cta: 'Get Started',
  pricing: 'Pricing',
  contact: 'Contact'
};

const sectionThemes = {
  home: 'orange',
  about: 'orange',
  features: 'blue',
  workflow: 'purple',
  'demo-stories': 'purple',
  'emotion-audio': 'green',
  'motion-preview': 'cyan',
  characters: 'orange',
  blog: 'orange',
  testimonials: 'blue',
  cta: 'green',
  pricing: 'pink',
  contact: 'orange'
};

let currentSectionId = 'home';
let scrollTicking = false;

function getHeaderOffset() {
  const divider = document.querySelector('.navbar-divider');
  const navH = navbar ? navbar.offsetHeight : 68;
  const divH = divider ? divider.offsetHeight : 2;
  return navH + divH + 8;
}

function getCurrentSectionId() {
  if (!sections.length) return 'home';

  if (window.scrollY < 60) return 'home';

  const offset = getHeaderOffset() + 24;
  const scrollPos = window.scrollY + offset;

  let active = 'home';
  for (const section of sections) {
    if (section.offsetTop <= scrollPos) {
      active = section.id;
    }
  }
  return active;
}

function scrollToSection(targetId) {
  const target = document.querySelector(targetId);
  if (!target) return;

  const offset = getHeaderOffset();
  const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}

function closeMobileNav() {
  const collapse = document.querySelector('#nav');
  if (collapse && collapse.classList.contains('show')) {
    const bsCollapse = bootstrap.Collapse.getInstance(collapse) ||
      new bootstrap.Collapse(collapse, { toggle: false });
    bsCollapse.hide();
  }
  document.querySelectorAll('.neon-dropdown.open').forEach((d) => d.classList.remove('open'));
}

function updateLiveIndicator(sectionId) {
  const label = sectionLabels[sectionId] || 'Home';
  const theme = sectionThemes[sectionId] || 'orange';

  if (navLivePill) {
    navLivePill.dataset.theme = theme;
  }

  if (navLiveText && navLiveText.textContent !== label) {
    navLiveText.classList.add('is-changing');
    setTimeout(() => {
      navLiveText.textContent = label;
      navLiveText.classList.remove('is-changing');
    }, 120);
  }

  if (exploreCurrent) {
    if (exploreSections.has(sectionId)) {
      exploreCurrent.textContent = label;
      exploreCurrent.classList.add('is-visible');
    } else {
      exploreCurrent.textContent = '';
      exploreCurrent.classList.remove('is-visible');
    }
  }
}

function updateScrollProgress() {
  if (!navScrollProgress) return;

  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
  navScrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

function updateActiveNav(sectionId) {
  if (currentSectionId === sectionId) return;
  currentSectionId = sectionId;

  const hash = `#${sectionId}`;

  navDirectLinks.forEach((link) => {
    const href = link.getAttribute('href');
    const isHome = sectionId === 'home' && href === '#home';
    const isPricing = sectionId === 'pricing' && href === '#pricing';
    const isContact = sectionId === 'contact' && href === '#contact';
    link.classList.toggle('active', isHome || isPricing || isContact);
  });

  navDropdownItems.forEach((item) => {
    item.classList.toggle('active', item.getAttribute('href') === hash);
  });

  document.querySelectorAll('.neon-dropdown').forEach((dropdown) => {
    dropdown.classList.remove('active');
  });

  if (exploreSections.has(sectionId)) {
    const dropdown = document.querySelector('.neon-dropdown[data-nav="explore"]');
    if (dropdown) dropdown.classList.add('active');
  }

  updateLiveIndicator(sectionId);
}

function handleScrollUpdate() {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.pageYOffset > 40);
  }
  updateScrollProgress();
  updateActiveNav(getCurrentSectionId());
}

function initRealTimeScrollSpy() {
  const onScroll = () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      handleScrollUpdate();
      scrollTicking = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    updateNavbarHeight();
    handleScrollUpdate();
  });

  handleScrollUpdate();
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      scrollToSection(href);
      updateActiveNav(href.replace('#', ''));
      closeMobileNav();
    });
  });
}

function updateNavbarHeight() {
  if (navbar) {
    document.documentElement.style.setProperty('--navbar-height', `${navbar.offsetHeight}px`);
  }
}

function initRevealAnimations() {
  const neonSections = document.querySelectorAll('.neon-animate');
  if (!neonSections.length) return;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('neon-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
  );

  neonSections.forEach((section) => revealObserver.observe(section));

  const hero = document.querySelector('.hero-section.neon-animate');
  if (hero) hero.classList.add('neon-visible');
}

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-bg-gallery img');
  if (!slides.length) return;

  let current = 0;
  slides[0].classList.add('active');

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 2000);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName');
    const email = document.getElementById('contactEmail');
    const subject = document.getElementById('contactSubject');
    const message = document.getElementById('contactMessage');

    let isValid = true;

    if (!name.value || name.value.length < 2) {
      name.classList.add('is-invalid');
      isValid = false;
    } else {
      name.classList.remove('is-invalid');
    }

    if (!email.value || !validateEmail(email.value)) {
      email.classList.add('is-invalid');
      isValid = false;
    } else {
      email.classList.remove('is-invalid');
    }

    if (!subject.value) {
      subject.classList.add('is-invalid');
      isValid = false;
    } else {
      subject.classList.remove('is-invalid');
    }

    if (!message.value || message.value.length < 10) {
      message.classList.add('is-invalid');
      isValid = false;
    } else {
      message.classList.remove('is-invalid');
    }

    if (isValid) {
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    }
  });
}

document.querySelectorAll('input[type="email"]').forEach((input) => {
  input.addEventListener('blur', function () {
    if (this.value && !validateEmail(this.value)) {
      this.classList.add('is-invalid');
    } else if (this.value) {
      this.classList.remove('is-invalid');
    }
  });
});

document.querySelectorAll('.neon-dropdown-toggle').forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    if (window.innerWidth > 991) return;

    e.preventDefault();
    e.stopPropagation();
    const parent = toggle.closest('.neon-dropdown');
    const isOpen = parent.classList.contains('open');

    document.querySelectorAll('.neon-dropdown.open').forEach((d) => d.classList.remove('open'));
    if (!isOpen) parent.classList.add('open');
  });
});

document.addEventListener('click', () => {
  if (window.innerWidth <= 991) {
    document.querySelectorAll('.neon-dropdown.open').forEach((d) => d.classList.remove('open'));
  }
});

window.addEventListener('load', () => {
  updateNavbarHeight();
  if (window.location.hash) {
    const id = window.location.hash.replace('#', '');
    setTimeout(() => {
      scrollToSection(window.location.hash);
      updateActiveNav(id);
    }, 100);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  updateNavbarHeight();
  initSmoothScroll();
  initRealTimeScrollSpy();
  initRevealAnimations();
  initHeroSlider();
  initContactForm();
});
