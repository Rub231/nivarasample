/**
 * NIVARA SKIN & AESTHETICS - INTERACTIVE ENGINE
 * Doctor-led medical aesthetic clinic website script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Footer Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Minimum Date for Booking (Next day onwards)
  const dateInput = document.getElementById('preferredDate');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  // 3. Mobile Navigation Drawer Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const isOpen = mobileDrawer.classList.contains('open');
      mobileBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile drawer when link clicked
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', false);
      });
    });
  }

  // 4. Treatment Data Dictionary for Clinical Modals
  const treatmentData = {
    hydrafacial: {
      category: 'Skin Health & Hydration',
      title: 'HydraFacial MD® (Medical-Grade)',
      overview: 'A doctor-supervised three-step vortex cleanse, extraction, and hydration facial delivering medical-grade antioxidants, hyaluronic acid, and peptides directly into the skin barrier.',
      duration: '45 Minutes',
      downtime: 'Zero downtime; immediate radiant hydration',
      sessions: 'Monthly maintenance or pre-event preparation',
      suitability: 'Dehydrated skin, congested pores, dull complexion, uneven tone',
      safety: 'Safe across all Fitzpatrick skin types. Not advised over active cystic acne infections, broken skin, or acute sunburn.',
      pricing: 'From ₹6,500 per session'
    },
    peels: {
      category: 'Cellular Turnover & Tone',
      title: 'Medical Chemical Peels',
      overview: 'Customized clinical peeling solutions (glycolic, salicylic, lactic, TCA, and modified Jessner) tailored precisely to your epidermal thickness and skin phototype by Dr. Mehrotra.',
      duration: '30 Minutes',
      downtime: '2 to 4 days of subtle, light flaking; gentle moisturization needed',
      sessions: '1 to 4 sessions spaced 3–4 weeks apart',
      suitability: 'Acne prone skin, post-inflammatory pigmentation, fine texture irregularities',
      safety: 'Patch-tested in advance. Not recommended on compromised skin barriers or within 6 months of oral isotretinoin therapy.',
      pricing: 'From ₹4,000 per session'
    },
    acne: {
      category: 'Medical Dermatology',
      title: 'Acne & Atrophic Scarring Protocol',
      overview: 'A combined dermatological approach that treats active acne lesions first with prescription topicals/oral medication, followed by subcision and fractional resurfacing to reconstruct depressed scar tissue.',
      duration: '45 to 60 Minutes',
      downtime: '1 to 3 days of localized redness and mild swelling',
      sessions: '4 to 6 sessions depending on scar grading (rolling, boxcar, icepick)',
      suitability: 'Active inflammatory papules, persistent redness (PIE), pitted scarring',
      safety: 'Performed with sterile medical instrumentation under topical anesthesia. Contraindicated during acute skin infections.',
      pricing: 'Customized & quoted in writing after skin exam'
    },
    pigmentation: {
      category: 'Melanin Regulation',
      title: 'Pigmentation & Melasma Therapy',
      overview: 'Layered protocol addressing epidermal and dermal hyperpigmentation. Blends tyrosinase-inhibiting topical regimens, oral antioxidants, gentle pigment-toning lasers, and superfacial peels.',
      duration: '30 to 45 Minutes',
      downtime: 'Minimal; transient mild dryness for 48 hours',
      sessions: '3 to 5 sessions spaced 4 weeks apart',
      suitability: 'Stubborn melasma, sun spots, freckles, hormonal discoloration',
      safety: 'Requires strict post-procedure compliance with broad-spectrum mineral SPF 50+. Not suitable if patient cannot avoid direct intense UV exposure for two weeks.',
      pricing: 'Sessions from ₹4,500'
    },
    botox: {
      category: 'Anti-Ageing & Facial Harmony',
      title: 'Anti-Wrinkle Injections (Botox)',
      overview: 'Conservative dosing of authentic botulinum toxin type A injected with micro-fine needles into specific target muscles. Preserves natural facial animation while softening deep expression lines.',
      duration: '20 to 30 Minutes',
      downtime: 'No downtime; small red injection bumps fade within 30 minutes',
      sessions: 'Single session with a mandatory complimentary review at day 14. Lasts 4–6 months.',
      suitability: 'Forehead lines, glabellar frown lines, crow\'s feet, bunny lines, masseter slimming',
      safety: 'Strictly performed by Dr. Ananya Mehrotra. Not suitable during pregnancy, breastfeeding, or in patients with neuromuscular disorders.',
      pricing: 'From ₹320 per unit (typical forehead/frown: 20–35 units)'
    },
    fillers: {
      category: 'Volume & Facial Architecture',
      title: 'Dermal Fillers & Skin Boosters',
      overview: 'Strategic micro-placement of USFDA-cleared cross-linked hyaluronic acid gels to restore midface structural support, under-eye hollowing, and deep tissue hydration (Profhilo / Skinboosters).',
      duration: '45 to 60 Minutes',
      downtime: 'Mild localized swelling or tiny bruising possible for 2–4 days',
      sessions: '1 to 3 sessions; tailored around patient anatomy',
      suitability: 'Tear troughs, sunken cheeks, nasolabial lines, loss of jawline definition',
      safety: 'Administered with blunt safety micro-cannulas by Dr. Mehrotra only. Reversible at any time with hyaluronidase. Not suitable during pregnancy.',
      pricing: 'Quoted following anatomical mapping at consultation'
    },
    laserhair: {
      category: 'Laser Technologies',
      title: 'Laser Hair Reduction (Medical Grade)',
      overview: 'Triple-wavelength diode laser with advanced integrated contact cooling. Emits precise fluences that selectively target follicular melanin while preserving surrounding epidermis.',
      duration: '15 to 60 Minutes depending on anatomical area',
      downtime: 'None; immediate resumption of daily routines',
      sessions: '6 to 8 sessions spaced 4 to 6 weeks apart',
      suitability: 'Unwanted facial and body hair for all Indian skin types',
      safety: 'Avoid waxing or plucking for 4 weeks before treatment. Mandatory pre-treatment patch test.',
      pricing: 'From ₹3,500 per area, per session'
    },
    prp: {
      category: 'Trichology & Cellular Therapy',
      title: 'PRP Hair Restoration Program',
      overview: 'Concentrated autologous platelets collected from your own blood, spun in a medical centrifuge to isolate bio-active growth factors (PDGF, VEGF, TGF-β), and micro-injected into thinning scalp regions.',
      duration: '45 Minutes',
      downtime: 'Mild scalp tenderness for 12–24 hours',
      sessions: 'Protocol of 4 monthly sessions, followed by maintenance every 4–6 months',
      suitability: 'Androgenetic alopecia, diffuse thinning, postpartum telogen effluvium',
      safety: 'Autologous and biocompatible—zero risk of allergic reaction. Medical blood panels may be ordered prior.',
      pricing: 'From ₹9,000 per session'
    },
    hifu: {
      category: 'Non-Surgical Tissue Tightening',
      title: 'HIFU Non-Surgical Facial Contouring',
      overview: 'High-Intensity Focused Ultrasound delivers thermal coagulation points directly to the Superficial Musculoaponeurotic System (SMAS) layer, stimulating deep neocollagenesis without surface epidermal injury.',
      duration: '60 Minutes',
      downtime: 'None to subtle tenderness along the mandibular rim',
      sessions: 'Single treatment with progressive collagen tightening over 90–120 days',
      suitability: 'Submental fullness, softening jawlines, mild to moderate lower face laxity',
      safety: 'Non-invasive. Not a surgical facelift substitute or weight-loss procedure.',
      pricing: 'Quoted at consultation after assessing tissue elasticity'
    }
  };

  // 5. Treatment Filter Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const treatmentCards = document.querySelectorAll('.treatment-card');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      treatmentCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 6. Treatment Modal Dialog
  const modal = document.getElementById('treatmentModal');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const viewBtns = document.querySelectorAll('.view-treatment-btn');

  function openTreatmentModal(key) {
    const data = treatmentData[key];
    if (!data) return;

    modalBody.innerHTML = `
      <span class="modal-category">${data.category}</span>
      <h3 class="modal-title">${data.title}</h3>
      <p class="modal-overview">${data.overview}</p>
      
      <div class="modal-specs-grid">
        <div class="modal-spec-item">
          <strong>Procedure Duration</strong>
          <span>${data.duration}</span>
        </div>
        <div class="modal-spec-item">
          <strong>Expected Downtime</strong>
          <span>${data.downtime}</span>
        </div>
        <div class="modal-spec-item">
          <strong>Recommended Protocol</strong>
          <span>${data.sessions}</span>
        </div>
        <div class="modal-spec-item">
          <strong>Transparent Pricing</strong>
          <span>${data.pricing}</span>
        </div>
      </div>

      <div class="modal-notes-box">
        <h4>Clinical Suitability</h4>
        <p>${data.suitability}</p>
      </div>

      <div class="modal-notes-box">
        <h4>Safety & Contraindications</h4>
        <p>${data.safety}</p>
      </div>

      <div class="modal-footer">
        <div>
          <span style="font-size:0.75rem; color:#8C7B6B; display:block;">Consultation fee ₹1,500</span>
          <strong style="font-size:0.85rem; color:#5E6F5F;">100% adjusted against treatment</strong>
        </div>
        <a href="#book" class="btn btn-primary btn-sm" onclick="closeModalAndScroll()">Book Assessment</a>
      </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeTreatmentModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  window.closeModalAndScroll = function() {
    closeTreatmentModal();
  };

  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalKey = btn.getAttribute('data-modal');
      openTreatmentModal(modalKey);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeTreatmentModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeTreatmentModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeTreatmentModal();
    }
  });

  // 7. Consultation Booking Form Submission
  const bookingForm = document.getElementById('consultationForm');
  const bookingSuccess = document.getElementById('bookingSuccess');
  const successDetails = document.getElementById('successDetails');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const requiredInputs = bookingForm.querySelectorAll('[required]');

      requiredInputs.forEach(input => {
        const formGroup = input.closest('.form-group');
        if (!input.value.trim()) {
          isValid = false;
          formGroup.classList.add('has-error');
        } else {
          formGroup.classList.remove('has-error');
        }

        // Simple email regex
        if (input.type === 'email' && input.value.trim()) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(input.value.trim())) {
            isValid = false;
            formGroup.classList.add('has-error');
          }
        }

        // Phone check
        if (input.type === 'tel' && input.value.trim()) {
          if (input.value.replace(/\D/g, '').length < 10) {
            isValid = false;
            formGroup.classList.add('has-error');
          }
        }
      });

      if (!isValid) {
        const firstError = bookingForm.querySelector('.has-error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // Collect data
      const formData = new FormData(bookingForm);
      const name = formData.get('fullName');
      const phone = formData.get('phone');
      const concernText = bookingForm.querySelector('#concern option:checked').textContent;
      const date = formData.get('preferredDate');
      const timeSlotText = bookingForm.querySelector('#preferredTime option:checked').textContent;

      // Populate Success Box
      const refNumber = 'NVR-' + Math.floor(100000 + Math.random() * 900000);
      successDetails.innerHTML = `
        <p><strong>Booking Reference:</strong> ${refNumber}</p>
        <p><strong>Patient Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Primary Concern:</strong> ${escapeHtml(concernText)}</p>
        <p><strong>Requested Slot:</strong> ${escapeHtml(date)} (${escapeHtml(timeSlotText)})</p>
        <p><strong>Consultation Fee:</strong> ₹1,500 (100% credited against procedures within 14 days)</p>
      `;

      bookingForm.style.display = 'none';
      bookingSuccess.classList.add('active');
      bookingSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  function escapeHtml(text) {
    if (!text) return '';
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // 8. Mobile Sticky Bar Visibility Logic
  const mobileBar = document.getElementById('mobileStickyBar');
  const heroSection = document.getElementById('hero');

  if (mobileBar && heroSection) {
    window.addEventListener('scroll', () => {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      if (window.innerWidth <= 768) {
        if (heroBottom < 100) {
          mobileBar.style.display = 'flex';
        } else {
          mobileBar.style.display = 'none';
        }
      }
    });
  }
});
