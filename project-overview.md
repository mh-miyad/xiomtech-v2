# XiomTech v2 — Project Overview

> **Last updated:** 2026-02-11
> **Project:** XiomTech Corporate Website (v2 Rebuild)
> **Status:** 🚧 In Development (Homepage only)

---

## 1. What Is This Project?

XiomTech v2 is the **second-generation corporate website** for **XiomTech**, a Software Development Company specializing in web development, SaaS platforms, ERP systems, POS solutions, and UI/UX design. The site is being rebuilt from scratch using a modern React/Next.js stack with premium animations and a polished, agency-style design language.

---

## 2. Tech Stack

| Layer             | Technology                            | Version |
| ----------------- | ------------------------------------- | ------- |
| **Framework**     | Next.js (App Router)                  | 16.1.6  |
| **UI Library**    | React                                 | 19.2.3  |
| **Language**      | TypeScript                            | 5.x     |
| **Styling**       | Tailwind CSS v4 + shadcn/ui tokens    | 4.x     |
| **Animations**    | GSAP + ScrollTrigger                  | 3.14.2  |
| **Motion**        | Framer Motion (`motion` package)      | 12.34.0 |
| **Smooth Scroll** | Lenis                                 | 1.3.17  |
| **Icons**         | Tabler Icons + Lucide React           | —       |
| **UI Primitives** | Radix UI                              | 1.4.3   |
| **Linter**        | Biome                                 | 2.2.0   |
| **Package Mgr**   | Bun (bun.lock present)                | —       |
| **Compiler**      | React Compiler (babel-plugin enabled) | 1.0.0   |

### Key Config Highlights

- **React Compiler** enabled in `next.config.ts` → `reactCompiler: true`
- **Path alias** `@/*` → `./src/*`
- **Remote images** allowed from `flagcdn.com` and `i.pravatar.cc`
- **Fonts:** Syne (headings), Inter (body), Smooch Sans (logo)

---

## 3. Project Structure

```
xiomtech-v2/
├── html/                          # Static HTML reference pages (design source)
│   ├── index.html                 # Home page reference
│   ├── price.html                 # Pricing page reference
│   ├── projects.html              # Portfolio page reference
│   ├── project-details.html       # Project detail page reference
│   └── service.html               # Services page reference
│
├── public/
│   ├── brand-logo/                # 10 client/partner brand logos (b-1 to b-10)
│   ├── icons/                     # Tech stack SVG icons (React, Next.js, Node, etc.)
│   ├── xiom/                      # XiomTech product icons (POS, HR, Care, etc.)
│   ├── logo.webp                  # Main site logo
│   ├── hero-left.avif             # Hero section images
│   ├── footer_globe.mp4           # Footer globe animation video (24 MB)
│   └── profile-image-png.png      # Profile/testimonial image
│
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout (fonts, metadata, Navbar/Footer/SmoothScroll)
│   │   ├── page.tsx               # Homepage (Hero → FAQ → ContactCTA)
│   │   ├── globals.css            # Tailwind v4 config, shadcn tokens, theme vars
│   │   └── favicon.ico
│   │
│   ├── components/
│   │   ├── common/                # Shared layout components
│   │   │   ├── Navbar.tsx         # Sticky header with dark-section detection
│   │   │   ├── Footer.tsx         # Full footer with links, partners, globe video
│   │   │   ├── FullPageMenu.tsx   # Mega overlay menu (services, products, industries)
│   │   │   ├── Logo.tsx           # XiomTech logo component
│   │   │   └── SmoothScroll.tsx   # Lenis + GSAP ScrollTrigger integration
│   │   │
│   │   ├── section/               # Page section components
│   │   │   ├── HeroSection.tsx    # Hero with word rotator, brand carousel, CTAs
│   │   │   ├── FAQSection.tsx     # Animated accordion FAQ
│   │   │   ├── ContactCTA.tsx     # Contact form + social links CTA
│   │   │   └── hero/
│   │   │       └── WordRotator.tsx # GSAP-powered word rotation animation
│   │   │
│   │   └── ui/                    # Reusable UI primitives
│   │       ├── shimmer-button.tsx  # Button with conic gradient shimmer
│   │       ├── shiny-button.tsx    # Another button variant
│   │       └── marquee.tsx         # CSS marquee/ticker component
│   │
│   ├── gsap/
│   │   └── index.ts               # Global GSAP hero-bar entrance animations
│   │
│   └── lib/
│       └── utils.ts               # cn() utility (clsx + tailwind-merge)
│
├── biome.json                     # Biome linter/formatter config
├── components.json                # shadcn/ui component configuration
├── next.config.ts                 # Next.js config
├── tsconfig.json                  # TypeScript config
├── package.json                   # Dependencies and scripts
└── bun.lock                       # Bun lockfile
```

---

## 4. Current Pages & Sections

### ✅ Implemented (Homepage only)

The homepage (`src/app/page.tsx`) renders three sections in order:

| #   | Section         | Component         | Lines | Description                                                  |
| --- | --------------- | ----------------- | ----- | ------------------------------------------------------------ |
| 1   | **Hero**        | `HeroSection.tsx` | 303   | Word rotation, brand marquee, star rating, CTAs, hero images |
| 2   | **FAQ**         | `FAQSection.tsx`  | 205   | GSAP scroll-animated accordion with 6 Q&A items              |
| 3   | **Contact CTA** | `ContactCTA.tsx`  | 365   | Contact section with email input, social media links         |

### 🔜 Not Yet Implemented (HTML references exist)

| Page               | HTML Reference              | Description                     |
| ------------------ | --------------------------- | ------------------------------- |
| **Pricing**        | `html/price.html`           | Service pricing tiers and plans |
| **Portfolio**      | `html/projects.html`        | Project showcase / case studies |
| **Project Detail** | `html/project-details.html` | Individual project breakdown    |
| **Services**       | `html/service.html`         | Detailed services listing page  |

---

## 5. Core Components Deep Dive

### 5.1 Navbar (112 lines)

- Sticky header with `backdrop-blur-sm` and `z-50`
- **Dark section detection:** scans `[data-dark-section]` on scroll to invert colors
- GSAP intro animation for logo and menu buttons
- Opens `FullPageMenu` overlay on click
- Listens to both native scroll and Lenis scroll events

### 5.2 Full Page Menu (599 lines)

The most complex component — a full-screen overlay with:

- **Main nav:** Home, About Us, Portfolio, Resources, Contact Us
- **Services:** Web Dev, ERP, SaaS, Mobile, AI/ML, Cloud, API, UI/UX
- **Products:** XiomPOS, XiomAccount, XiomHR, XiomEdu, XiomTickets, XiomCare
- **Industries:** Healthcare, Finance, E-Commerce, Real Estate, Education, Manufacturing, Logistics, Government
- **Partners:** AWS, Microsoft, Google Cloud, Docker, Vercel
- **Locations:** Bangladesh, India, UAE, Saudi Arabia, Qatar
- **Social:** WhatsApp, Instagram, LinkedIn, X, Dribbble
- Fully GSAP-animated open/close transitions

### 5.3 Hero Section (303 lines)

- **Word rotator** cycling: Engineer → Build → Craft → Design → Develop
- **Brand logos** marquee (10 client logos)
- **Rating badge** — 4.9/5 from 120+ reviews
- **CTA buttons:** "Start Your Project" + "Explore Our Work"
- **Hero images:** left-hero.avif + right-cursor.avif
- **Tech stack ribbon:** React, Next.js, Node.js, TypeScript, Figma, OpenAI

### 5.4 Footer (394 lines)

- 4-column link grid: Company, Expertise, Solutions, Resources
- Tech partners row (AWS, Google Cloud, Microsoft, Docker, Vercel)
- Social media links with hover effects
- Globe video background (`footer_globe.mp4`, 24 MB)

### 5.5 Smooth Scroll (86 lines)

- Lenis smooth scrolling (`duration: 1.2`)
- Auto-disabled on touch-only mobile devices
- GSAP ScrollTrigger integration
- Globally exposed via `window.__lenis`
- Handles `.reveal-up`, `.reveal-left`, `.reveal-right`, `.reveal-scale` classes

---

## 6. Design System & Theming

### Fonts

| Font            | Usage                    | Variable       |
| --------------- | ------------------------ | -------------- |
| **Syne**        | Headings, section titles | `--font-syne`  |
| **Inter**       | Body text, UI elements   | `--font-inter` |
| **Smooch Sans** | Logo only                | Direct class   |

### Color Palette

- **Primary accent:** Blue-600 (`#2563eb`) — buttons, links, selection, scrollbar
- **Light theme:** White background, dark gray text, oklch-based tokens
- **Dark theme:** Full dark mode support via `.dark` class
- **shadcn/ui tokens:** Complete CSS variable set for all semantic colors

### Animation Strategy

- **GSAP** — complex timeline animations (hero, nav, menu, FAQ)
- **GSAP ScrollTrigger** — scroll-reveal effects
- **Framer Motion** — available but minimally used
- **Lenis** — smooth page scrolling
- **CSS animations** — shimmer rotation, marquee scrolling

---

## 7. XiomTech Products

| Product         | Icon File         | Description                   |
| --------------- | ----------------- | ----------------------------- |
| **XiomPOS**     | `xiompos.png`     | Point of Sale system          |
| **XiomAccount** | `xiomaccount.png` | Accounting software           |
| **XiomHR**      | `hrm.png`         | HR Management                 |
| **XiomEdu**     | `XiomEduFlow.png` | Education management platform |
| **XiomTickets** | `xiomTickets.png` | Ticketing / support system    |
| **XiomCare**    | `xiomCare.png`    | Healthcare management         |

---

## 8. Development Scripts

```bash
bun run dev       # Start Next.js dev server
bun run build     # Production build
bun run start     # Start production server
bun run lint      # Run Biome linter
bun run format    # Auto-format with Biome
```

---

## 9. What's Missing / TODO

### 🔴 Critical (No pages exist yet)

- [ ] **Services page** — convert `html/service.html` to Next.js
- [ ] **Pricing page** — convert `html/price.html` to Next.js
- [ ] **Portfolio page** — convert `html/projects.html` to Next.js
- [ ] **Project detail page** — convert `html/project-details.html` to Next.js
- [ ] **About Us page** — mentioned in nav but no HTML reference exists

### 🟡 Important

- [ ] Contact form backend integration
- [ ] Blog/Resources section
- [ ] SEO: sitemap.xml, robots.txt, per-page metadata
- [ ] Responsive testing across devices
- [ ] Accessibility audit
- [ ] Performance: compress 24 MB `footer_globe.mp4`
- [ ] Dark mode toggle UI
- [ ] 404 page

### 🟢 Nice to Have

- [ ] Case Studies section
- [ ] Testimonials section
- [ ] Page transitions with Framer Motion
- [ ] Analytics integration
- [ ] Cookie consent
- [ ] Loading/skeleton states

---

## 10. Architecture Diagram

```
┌──────────────────────────────────────────────┐
│                 RootLayout                    │
│  (Syne + Inter fonts, metadata, <html>)       │
│                                               │
│  ┌───────────────────────────────────────┐    │
│  │           SmoothScroll                 │   │
│  │  (Lenis + GSAP ScrollTrigger)          │   │
│  │                                        │   │
│  │  ┌────────────────────────────────┐    │   │
│  │  │  Navbar (sticky, dark-aware)    │   │   │
│  │  │  └── FullPageMenu (overlay)     │   │   │
│  │  └────────────────────────────────┘    │   │
│  │                                        │   │
│  │  ┌────────────────────────────────┐    │   │
│  │  │       Page Content              │   │   │
│  │  │  ├─ HeroSection (WordRotator)   │   │   │
│  │  │  ├─ FAQSection (Accordion)      │   │   │
│  │  │  └─ ContactCTA (Form+Social)    │   │   │
│  │  └────────────────────────────────┘    │   │
│  │                                        │   │
│  │  ┌────────────────────────────────┐    │   │
│  │  │  Footer (links, partners, globe)│   │   │
│  │  └────────────────────────────────┘    │   │
│  └───────────────────────────────────────┘    │
└──────────────────────────────────────────────┘
```

---

## 11. Summary

**XiomTech v2** is a well-structured, modern Next.js 16 corporate website with premium animation capabilities (GSAP + Lenis). The homepage is complete and polished with a hero, FAQ, and contact CTA. The main gap is that **4 additional pages** (Services, Pricing, Portfolio, Project Detail) exist only as static HTML references and need to be converted to the Next.js/React component architecture.

- **Total source files:** ~18 TypeScript/CSS files
- **Total lines of code (src/):** ~2,200 lines
- **Static HTML references:** 5 files (~2 MB combined)
