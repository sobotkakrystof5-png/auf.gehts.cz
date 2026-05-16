/* ============================================================
   HairDeluxe — script.js
   Vanilla ES6+: cursor, navbar, hero, reveal, counters,
   gallery filter + lightbox, testimonials, form, newsletter
   ============================================================ */

'use strict';

/* ── Utility ── */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── Page Loader ── */
const loader = $('#page-loader');
window.addEventListener('load', () => {
  setTimeout(() => loader?.classList.add('hidden'), 600);
});

/* ── Custom Cursor ── */
(function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot      = $('#cursor');
  const follower = $('#cursor-follower');
  if (!dot || !follower) return;

  let mx = 0, my = 0, fx = 0, fy = 0;
  let raf;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  function animateFollower() {
    fx += (mx - fx) * 0.2;
    fy += (my - fy) * 0.2;
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    raf = requestAnimationFrame(animateFollower);
  }
  raf = requestAnimationFrame(animateFollower);

  $$('a, button, [role="button"], .gallery-item, .team-card, label').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; follower.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; follower.style.opacity = '0.6'; });
})();

/* ── Scroll Progress Bar ── */
(function initProgress() {
  const bar = $('#progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
})();

/* ── Navbar ── */
(function initNavbar() {
  const nav = $('#navbar');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Mobile Menu ── */
(function initMobileMenu() {
  const burger = $('#burger-btn');
  const menu   = $('#mobile-menu');
  if (!burger || !menu) return;

  const toggle = () => {
    const open = menu.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  burger.addEventListener('click', toggle);

  $$('a', menu).forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('open')) toggle();
  });
})();

/* ── Hero Text Stagger ── */
(function initHeroText() {
  const words = $$('.hero-word');
  if (!words.length) return;

  words.forEach((w, i) => {
    setTimeout(() => w.classList.add('revealed'), 200 + i * 120);
  });

  const tagline = $('#hero-tagline');
  if (tagline) {
    setTimeout(() => {
      tagline.style.opacity    = '1';
      tagline.style.transform  = 'translateY(0)';
    }, 200 + words.length * 120 + 100);
  }

  const heroCtas = $$('.hero-cta');
  heroCtas.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
    }, 200 + words.length * 120 + 200 + i * 80);
  });
})();

/* ── Intersection Observer: Reveal on Scroll ── */
(function initReveal() {
  const opts = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, opts);

  $$('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => obs.observe(el));
})();

/* ── Parallax Hero ── */
(function initParallax() {
  const bg = $('.parallax-bg');
  if (!bg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight * 1.5) {
      bg.style.transform = `translateY(${y * 0.3}px)`;
    }
  }, { passive: true });
})();

/* ── Animated Number Counters ── */
(function initCounters() {
  const counters = $$('[data-count]');
  if (!counters.length) return;

  const format = (n, suffix) => {
    if (suffix === '+') return Math.floor(n) + '+';
    if (suffix === 'k+') return (n / 1000).toFixed(n >= 1000 ? 0 : 1) + 'k+';
    if (suffix === '*') return n.toFixed(1) + '★';
    return Math.floor(n);
  };

  const easeOut = t => 1 - Math.pow(1 - t, 3);

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el      = entry.target;
      const target  = parseFloat(el.dataset.count);
      const suffix  = el.dataset.suffix || '';
      const dur     = 1800;
      const start   = performance.now();

      const tick = now => {
        const t    = Math.min((now - start) / dur, 1);
        const val  = target * easeOut(t);
        el.textContent = format(val, suffix);
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = format(target, suffix);
      };

      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => obs.observe(c));
})();

/* ── Gallery Filter + Lightbox ── */
(function initGallery() {
  const filterBtns = $$('.gallery-filter-btn');
  const items      = $$('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      items.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.style.transition = 'opacity 0.4s, transform 0.4s';
        if (match) {
          item.style.opacity   = '1';
          item.style.transform = 'scale(1)';
          item.style.pointerEvents = 'auto';
        } else {
          item.style.opacity   = '0';
          item.style.transform = 'scale(0.95)';
          item.style.pointerEvents = 'none';
        }
      });
    });
  });

  /* Lightbox */
  const lightbox   = $('#lightbox');
  const lbImg      = $('#lightbox-img');
  const lbCaption  = $('#lightbox-caption');
  const lbClose    = $('#lightbox-close');
  const lbPrev     = $('#lightbox-prev');
  const lbNext     = $('#lightbox-next');
  if (!lightbox) return;

  let currentIndex = 0;
  const getVisible  = () => items.filter(i => i.style.opacity !== '0');

  const openLightbox = (index) => {
    const visible = getVisible();
    currentIndex  = index;
    const item    = visible[currentIndex];
    if (!item) return;

    const img = $('img', item);
    lbImg.src         = img.src;
    lbImg.alt         = img.alt;
    lbCaption.textContent = item.dataset.caption || img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  const navigate = (dir) => {
    const visible = getVisible();
    currentIndex = (currentIndex + dir + visible.length) % visible.length;
    openLightbox(currentIndex);
  };

  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      const visible = getVisible();
      const vi = visible.indexOf(item);
      openLightbox(vi);
    });
  });

  lbClose?.addEventListener('click', closeLightbox);
  lbPrev?.addEventListener('click', () => navigate(-1));
  lbNext?.addEventListener('click', () => navigate(1));

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
})();

/* ── Testimonials Carousel ── */
(function initTestimonials() {
  const track   = $('#testimonial-track');
  const slides  = $$('.testimonial-slide');
  const dots    = $$('.testimonial-dot');
  const btnPrev = $('#t-prev');
  const btnNext = $('#t-next');
  if (!track || slides.length < 2) return;

  let current = 0;
  let timer;
  let isHovered = false;

  const goTo = (index) => {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === current);
      d.setAttribute('aria-selected', i === current);
    });
  };

  const startAuto = () => {
    timer = setInterval(() => {
      if (!isHovered) goTo(current + 1);
    }, 5000);
  };

  const stopAuto = () => clearInterval(timer);

  btnPrev?.addEventListener('click', () => { goTo(current - 1); stopAuto(); startAuto(); });
  btnNext?.addEventListener('click', () => { goTo(current + 1); stopAuto(); startAuto(); });

  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); stopAuto(); startAuto(); }));

  track.closest('.testimonial-carousel')?.addEventListener('mouseenter', () => { isHovered = true; });
  track.closest('.testimonial-carousel')?.addEventListener('mouseleave', () => { isHovered = false; });

  /* Touch swipe */
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  }, { passive: true });

  goTo(0);
  startAuto();
})();

/* ── Contact Form ── */
(function initForm() {
  const form   = $('#contact-form');
  const submit = $('#form-submit');
  if (!form || !submit) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    submit.classList.add('loading');
    submit.disabled = true;

    await new Promise(r => setTimeout(r, 1800));

    submit.classList.remove('loading');
    submit.disabled = false;

    showToast('Váš dotaz byl odeslán. Ozveme se vám do 24 hodin.');
    form.reset();
  });
})();

/* ── Newsletter Form ── */
(function initNewsletter() {
  const form = $('#newsletter-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = $('input[type="email"]', form).value;
    if (!email) return;
    showToast('Vítejte! Váš 15% slevový kód dorazí na email.');
    form.reset();
  });
})();

/* ── Toast ── */
function showToast(msg, dur = 4000) {
  let toast = $('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), dur);
}

/* ── Ripple Effect on Buttons ── */
(function initRipple() {
  $$('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect   = this.getBoundingClientRect();
      const size   = Math.max(rect.width, rect.height) * 2;
      const x      = e.clientX - rect.left - size / 2;
      const y      = e.clientY - rect.top  - size / 2;
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
})();

/* ── Smooth Scroll for anchor links ── */
(function initSmoothScroll() {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.getElementById(a.getAttribute('href').slice(1));
      if (!target) return;
      e.preventDefault();
      const navHeight = $('#navbar')?.offsetHeight || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ── Highlight current day in opening hours ── */
(function initHours() {
  const today = new Date().getDay();
  const rows  = $$('.hours-row');
  rows.forEach(row => {
    const day = parseInt(row.dataset.day, 10);
    if (day === today) row.classList.add('today');
  });
})();

/* ── Navbar active section indicator ── */
(function initActiveSection() {
  const sections  = $$('section[id]');
  const navLinks  = $$('.nav-link[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.style.color = a.getAttribute('href') === '#' + entry.target.id
            ? 'var(--rose-gold)'
            : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(s => obs.observe(s));
})();
