# Nivara Skin & Aesthetics — Official Website

> **Doctor-led aesthetics. Honest, natural results.**  
> A premium, doctor-led dermatology and aesthetic clinic on Golf Course Road, Gurugram. Medicine first, aesthetics second. Every treatment is assessed, planned, and performed or supervised by Dr. Ananya Mehrotra, MD Dermatology.

---

## 🏛️ Project Structure

```
nivara-clinic/
├── index.html                  # Homepage (Hero with Care Plan, 5 Pillars, Featured Treatments, Results, FAQ, Booking)
├── about.html                  # The Doctor & Clinic Philosophy (Dr. Ananya Mehrotra, MAMC, Seoul/Milan training)
├── treatments.html             # Treatment Directory with Transparent Starting Prices Table
├── treatment-melasma.html      # Clinical Deep Dive: Melasma & Pigmentation 3-Phase Protocol
├── treatment-botox.html        # Clinical Deep Dive: Conservative Botox & 14-Day Review
├── treatment-hydrafacial.html  # Clinical Deep Dive: HydraFacial MD Medical Cleanse
├── results.html                # Clinical Results Gallery (Before/After interactive comparison sliders with consent)
├── contact.html                # Contact & Location (Golf Course Road, Valet, Direct Booking & Schema.org SEO)
├── css/
│   └── styles.css              # Design system tokens, typography scales, buttons, and responsive styles
└── js/
│   └── main.js                 # Interactive sliders, accordions, scroll reveals, and WhatsApp booking integration
└── README.md
```

---

## 🎨 Design System

| Role | Name | HEX | Usage |
|---|---|---|---|
| **Background** | Ivory | `#FAF7F2` | Primary page canvas |
| **Panels & Dividers** | Sand | `#E8DFD3` | Structural dividers, cards, borders |
| **Secondary Typography** | Taupe | `#8C7B6B` | Eyebrow labels, captions, metadata |
| **Primary Accent** | Sage | `#5E6F5F` | CTAs, key interactive highlights |
| **Text & Contrast** | Ink | `#2B2A28` | High-contrast headers, dark testimonial cards, footer |

### Typography
- **Headings & Display:** `Cormorant Garamond` (Light 300 / Regular 400 / Italic)
- **Body & Functional UI:** `Manrope` (Light 300 / Regular 400 / Medium 500)

---

## 🚀 Local Preview

Since this project uses modern, clean static web technologies, it runs immediately without any npm/node installation dependencies:

```bash
cd /Users/rubentamang/.gemini/antigravity/scratch/nivara-clinic
python3 -m http.server 8000
```

Open your browser at `http://localhost:8000` to preview the entire website and test all interactive links.

---

## 🌐 Deployment

You can deploy this directory to any modern host in seconds:

- **Vercel / Netlify:** Drag and drop the `nivara-clinic` folder or connect your Git repository.
- **GitHub Pages:** Push to a GitHub repository and enable Pages from the main branch.
- **Cloudflare Pages:** Connect repository with no build command needed (root directory: `/`).
