// Nivara Skin & Aesthetics - Main Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveals();
  initSliders();
  initFaqAccordions();
  initBookingForms();
  initFloatingQuickActions();
});

// Navbar scroll effects & mobile menu
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('nav-scrolled');
      } else {
        navbar.classList.remove('nav-scrolled');
      }
    });
  }

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }
}

// Scroll Reveals
function initScrollReveals() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

// Interactive Before / After Sliders
function initSliders() {
  const sliders = document.querySelectorAll('.ba-slider-container');
  sliders.forEach(slider => {
    const afterImg = slider.querySelector('.ba-slider-img-after');
    const handle = slider.querySelector('.ba-slider-handle');
    if (!afterImg || !handle) return;

    let isDown = false;

    function updatePosition(clientX) {
      const rect = slider.getBoundingClientRect();
      let x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      percentage = Math.max(0, Math.min(100, percentage));
      
      afterImg.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      handle.style.left = `${percentage}%`;
    }

    slider.addEventListener('mousedown', (e) => { isDown = true; updatePosition(e.clientX); });
    window.addEventListener('mouseup', () => { isDown = false; });
    window.addEventListener('mousemove', (e) => { if (isDown) updatePosition(e.clientX); });

    slider.addEventListener('touchstart', (e) => { isDown = true; updatePosition(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchend', () => { isDown = false; });
    window.addEventListener('touchmove', (e) => { if (isDown) updatePosition(e.touches[0].clientX); }, { passive: true });
  });
}

// FAQ Accordions
function initFaqAccordions() {
  const faqButtons = document.querySelectorAll('.faq-toggle');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentItem = btn.closest('.faq-item');
      const wasActive = currentItem.classList.contains('active');
      
      const parentContainer = currentItem.parentElement;
      parentContainer.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
      
      if (!wasActive) {
        currentItem.classList.add('active');
      }
    });
  });
}

// Direct WhatsApp-connected consultation booking handler
function initBookingForms() {
  const form = document.getElementById('consultationForm');
  const successBox = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = form.querySelector('[name="name"]')?.value || '';
      const phone = form.querySelector('[name="phone"]')?.value || '';
      const email = form.querySelector('[name="email"]')?.value || '';
      const concern = form.querySelector('[name="concern"]')?.value || 'General Consultation';
      const date = form.querySelector('[name="date"]')?.value || 'Earliest available date';
      const time = form.querySelector('[name="time"]')?.value || 'Flexible slot';
      const message = form.querySelector('[name="message"]')?.value || '';

      // Format WhatsApp text payload
      const waText = encodeURIComponent(
        `Hello Dr. Ananya Mehrotra & Nivara Clinic Team,\n\n` +
        `I would like to request a consultation:\n\n` +
        `• Name: ${name}\n` +
        `• Phone: ${phone}\n` +
        `• Email: ${email}\n` +
        `• Primary Concern: ${concern}\n` +
        `• Preferred Date: ${date}\n` +
        `• Preferred Time: ${time}\n` +
        (message ? `• Additional Notes: ${message}\n` : '') +
        `\nConsultation Fee: ₹1,500 (adjusted against treatment within 14 days)`
      );

      const waUrl = `https://wa.me/919811040218?text=${waText}`;

      // Update button on page
      const waLinkBtn = document.getElementById('sendWaDirectBtn');
      if (waLinkBtn) {
        waLinkBtn.href = waUrl;
      }

      // Show on-screen confirmation
      form.classList.add('hidden');
      if (successBox) {
        successBox.classList.remove('hidden');
      }

      // Automatically launch WhatsApp directly in new tab or app
      window.open(waUrl, '_blank');
    });
  }
}

// Persistent Floating Quick Actions (Call & WhatsApp)
function initFloatingQuickActions() {
  if (document.getElementById('floatingQuickActions')) return;

  const floatingContainer = document.createElement('div');
  floatingContainer.id = 'floatingQuickActions';
  floatingContainer.className = 'fixed bottom-5 right-5 z-50 flex items-center gap-2.5 drop-shadow-lg';
  floatingContainer.innerHTML = `
    <a href="tel:+919811040218" 
       title="Call Nivara Clinic directly" 
       class="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 bg-white/95 backdrop-blur-md border border-[#E8DFD3] text-[#2B2A28] rounded-full hover:border-[#5E6F5F] hover:text-[#5E6F5F] transition-all text-xs font-semibold shadow-sm hover:shadow-md">
      <span class="w-2 h-2 rounded-full bg-[#5E6F5F] animate-pulse"></span>
      <span>📞 +91 98110 40218</span>
    </a>
    <a href="https://wa.me/919811040218?text=Hello%20Dr.%20Ananya%20Mehrotra%2C%20I%20would%20like%20to%20request%20a%20consultation%20at%20Nivara%20Clinic." 
       target="_blank" 
       rel="noopener noreferrer"
       title="Chat with Dr. Mehrotra's team on WhatsApp" 
       class="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white rounded-full hover:bg-[#1EBE5D] transition-all text-xs font-semibold shadow-md hover:scale-105">
      <svg class="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      <span>Chat on WhatsApp</span>
    </a>
  `;

  document.body.appendChild(floatingContainer);
}
