# Hierros Masser - Landing Page Specification

## 1. Project Overview

**Project name:** Hierros Masser Landing
**Type:** Premium landing page (lead generation)
**Core functionality:** Convert visitors to WhatsApp contacts for herrería artesanal in Uruguay
**Target users:** Homeowners, architects, interior designers, construction companies

---

## 2. UI/UX Specification

### Layout Structure

| Section | Desktop | Mobile | Notes |
|---------|---------|--------|-------|
| Hero | Full viewport height, centered content | Full viewport, stacked | Fixed WhatsApp button |
| Trust | 3-column grid | Vertical stack | Icon + text |
| Gallery | 3-column masonry | 2-column grid | Lightbox on click |
| Process | Horizontal timeline | Vertical timeline | Animated steps |
| CTA | Full-width block | Full-width, stacked | High contrast |

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

#### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Primary Dark | Carbon Black | `#0D0D0D` |
| Secondary Dark | Charcoal | `#1A1A1A` |
| Accent Gold | Antique Bronze | `#B8860B` |
| Accent Copper | Burnished Copper | `#C87533` |
| Text Primary | Off White | `#F5F5F0` |
| Text Secondary | Warm Gray | `#A3A3A0` |
| Success | Artisan Green | `#4A7C59` |

#### Typography
- **Display:** Playfair Display (Google Fonts) - elegant, colonial feel
- **Body:** Outfit (Google Fonts) - modern, clean, readable
- **Heading sizes:** 
  - H1: 56px desktop / 36px mobile
  - H2: 40px desktop / 28px mobile
  - H3: 24px desktop / 20px mobile
- **Body:** 16px / line-height 1.6

#### Spacing System
- Base unit: 8px
- Section padding: 96px vertical desktop / 64px mobile
- Component gaps: 24px - 48px

#### Visual Effects
- Subtle grain texture overlay on dark sections
- Gold accent borders (1px)
- Box shadows: `0 4px 24px rgba(0,0,0,0.4)`
- Hover transitions: 300ms ease
- Scroll animations: fade-up, stagger 100ms

### Components

#### 1. Navbar
- Fixed position, transparent → solid on scroll
- Logo left (text-based: "HM" monogram + "Hierros Masser")
- WhatsApp CTA button right
- Height: 80px desktop / 64px mobile

#### 2. Hero Section
- Full viewport background (dark with subtle pattern)
- Headline: "Faroles coloniales y herrería a medida"
- Subheadline: "Diseño artesanal, experiencia y confiabilidad en cada pieza"
- Primary CTA: WhatsApp button (large, gold accent)
- Decorative: subtle ironwork SVG pattern

#### 3. Trust Section (3 pillars)
- Icon + title + description per pillar
- Pillar 1: "30+ años de experiencia" - anvil icon
- Pillar 2: "Trabajos a medida" - ruler icon  
- Pillar 3: "Calidad duradera" - shield icon

#### 4. Gallery Section
- Grid of 6 placeholder images
- Categories: faroles, puertas, barandas, portones, muebles, decorativo
- Hover: subtle scale + overlay with "Ver más"
- Lightbox modal on click

#### 5. Process Section
- 3 steps with connecting line
- Step 1: "Consulta" - phone icon
- Step 2: "Diseño y presupuesto" - pencil icon
- Step 3: "Fabricación e instalación" - tools icon

#### 6. Final CTA Section
- Dark background with gold border
- Emotional copy
- WhatsApp button (extra large)

#### 7. Sticky WhatsApp Button
- Fixed bottom-right corner
- Appears after scrolling past hero
- Pulse animation to draw attention

#### 8. Footer
- Company info
- Service areas (all Uruguay)
- Contact info
- Copyright

---

## 3. Functionality Specification

### Core Features
1. **Smooth scroll navigation**
2. **Sticky navbar with scroll effect**
3. **Gallery lightbox modal**
4. **Scroll-triggered animations**
5. **WhatsApp deep link (wa.me)**
6. **Mobile-first responsive design**

### User Interactions
- Click WhatsApp → Opens wa.me/598XXXXXXXXX
- Scroll → Navbar becomes solid
- Gallery hover → Overlay appears
- Gallery click → Lightbox opens
- CTA click → Scroll to top + WhatsApp

### Data Handling
- Static content, no backend
- WhatsApp number: placeholder (to be configured)

### Edge Cases
- Images fail to load → Show elegant placeholder
- JavaScript disabled → Core content visible
- Slow connection → Optimized images

---

## 4. Acceptance Criteria

### Visual Checkpoints
- [x] Hero fills viewport with dark aesthetic
- [x] Gold accents visible on CTAs and borders
- [x] Gallery looks like premium showroom, not e-commerce
- [x] All sections have consistent dark theme
- [x] Typography hierarchy is clear
- [x] Mobile layout is fully functional

### Functional Checkpoints
- [x] WhatsApp buttons open wa.me link
- [x] Sticky button appears after hero
- [x] Scroll animations trigger correctly
- [x] Gallery lightbox works
- [x] All responsive breakpoints work
- [x] Page loads under 3 seconds

### Brand Alignment
- [x] Feels premium and established, not informal
- [x] Copy is direct and confident
- [x] No generic e-commerce aesthetics
- [x] Colonial/artisanal vibe present