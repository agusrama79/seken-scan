---
name: ui-ux-promax
description: >-
  Use this skill for comprehensive, end-to-end UI/UX architecture, responsive ergonomics, design system tokens, conversion-focused user journeys, accessibility (WCAG AA/AAA), touch ergonomics, and 60/120fps front-end performance engineering.
---

# 🚀 UI/UX Pro Max (The Ultimate Front-End & Experience Standard)

The UI/UX Pro Max skill provides rigorous, production-grade engineering principles for building digital products with world-class user experience, flawless responsive ergonomics, uncompromising performance, and conversion-optimized information architecture.

---

## 1. Ergonomics & Touch-First Architecture (Mobile & Desktop)

### The 48px Minimum Touch Target Rule:
- All interactive controls (buttons, inputs, select triggers, icons, checklist items) must have an active tap hit-area of at least **44x44px** (recommended **48x48px**).
- For small icons (e.g. 16px close or chevron buttons), use padding or `::before` pseudo-elements to expand the click area without altering visual proportions:
  ```css
  .icon-btn-touch {
    width: 32px;
    height: 32px;
    position: relative;
  }
  .icon-btn-touch::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 48px;
    height: 48px;
    transform: translate(-50%, -50%);
  }
  ```

### The Mobile Thumb-Zone & Safe Area Compliance:
- Crucial actions (CTA buttons, step progression, navigation bars) must be placed within natural thumb reach (bottom 35% of mobile screens).
- Always incorporate iOS Safe Area Insets:
  ```css
  .bottom-dock {
    padding-bottom: max(16px, env(safe-area-inset-bottom));
    padding-left: max(16px, env(safe-area-inset-left));
    padding-right: max(16px, env(safe-area-inset-right));
  }
  ```

---

## 2. Design System Tokens & Semantic Variables

Never use ad-hoc hardcoded values. Anchor everything to a structured token architecture:

```css
:root {
  /* Surface Tokens */
  --surface-base: #030306;
  --surface-subtle: #0B0B10;
  --surface-raised: rgba(18, 18, 24, 0.72);
  --surface-overlay: rgba(26, 26, 36, 0.88);
  --surface-acrylic: rgba(255, 255, 255, 0.05);

  /* Border & Specular Tokens */
  --border-hairline: rgba(255, 255, 255, 0.06);
  --border-subtle: rgba(255, 255, 255, 0.10);
  --border-specular: rgba(255, 255, 255, 0.18);
  --border-focus: #FFFFFF;

  /* Typography Colors */
  --text-primary: #F5F5F7;
  --text-secondary: #A1A1A6;
  --text-tertiary: #6E6E73;
  --text-inverse: #000000;

  /* Semantic Feedback Colors */
  --feedback-success: #30D158;
  --feedback-warning: #FF9F0A;
  --feedback-danger: #FF453A;
  --feedback-info: #0A84FF;

  /* Spacing Scale */
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;

  /* Corner Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Kinetic Timing Curves */
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-smooth: cubic-bezier(0.2, 0.8, 0.2, 1);
  --duration-fast: 0.18s;
  --duration-normal: 0.32s;
  --duration-slow: 0.5s;
}
```

---

## 3. Comprehensive State Architecture (The 7 UI States)

Every interactive element must explicitly account for all 7 standard states:
1. **Default / Rest**: Clear visual affordance showing it is interactive.
2. **Hover**: Refined lift or specular lighting enhancement (on non-touch devices).
3. **Active / Pressed**: Tactile scale down (`transform: scale(0.97)`), instant haptic feedback.
4. **Focus-Visible**: High-contrast, clean 2px outline for keyboard accessibility (`outline: 2px solid #FFFFFF; outline-offset: 2px;`).
5. **Disabled**: Clear opacity (`0.4`), `cursor: not-allowed`, no hover transforms.
6. **Loading / Pending**: Skeleton shimmer or spinner, preventing duplicate submissions.
7. **Success / Error (Validation)**: Contextual messaging with clear icons and color-blind friendly text indicators.

---

## 4. Progressive Disclosure & Information Architecture

- **Never Overwhelm the User**: Present high-level, human-readable insights first.
- **Hierarchical Layering**:
  - **Tier 1 (Instant Scan)**: Status indicator, primary verdict ("Normal" / "Waspada"), action button.
  - **Tier 2 (Key Points)**: Concise bullet checklist with bold keywords.
  - **Tier 3 (Deep Dive)**: Collapsible technical specs, serial decoder, frequency charts, or advanced hardware logs.
- **Sticky Progress Indicators**: On multi-step flows, always show progress ("Tahap 2 dari 5") so users never feel lost.

---

## 5. Accessibility (WCAG 2.1 AA/AAA)

- **Color Contrast**: Text on background must achieve at least **4.5:1** contrast ratio (7:1 for AAA).
- **Non-Color Indicators**: Never rely solely on color to communicate state. Combine red/green with recognizable icons (checkmarks `✓`, alert triangles `⚠`, crosses `✕`).
- **Semantic HTML Elements**: Use `<button>`, `<nav>`, `<main>`, `<article>`, `<header>`, `<section>` rather than generic nested `<div>`s.
- **ARIA & Labels**: All icon-only buttons must have `aria-label="Deskripsi tindakan"`.
- **Reduced Motion**: Respect user preferences for reduced motion:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```

---

## 6. Performance & 60/120 FPS Rendering Protocol

- **Animate Only GPU-Composite Properties**:
  - ✅ **Safe**: `transform`, `opacity`, `filter` (sparingly).
  - ❌ **Avoid animating**: `width`, `height`, `top`, `left`, `margin`, `padding`, `border-width` (triggers expensive layout reflows / repaints).
- **Will-Change Strategy**: Apply `will-change: transform` only during active hover/animation states to prevent browser memory leaks.
- **Canvas & WebGL Optimization**: Cap rendering when canvas is out of viewport (`IntersectionObserver`) or when document is hidden (`document.hidden`).

---

## 7. UX Writing & Human-Centered Communication

- **Write for Humans, Not Engineers**:
  - Instead of *"BMS Cycle Count Resetter mismatch detected"*, write: *"Kesehatan Baterai Dipertanyakan (Ada tanda baterai pernah direset/diakali)"*.
  - Instead of *"Pentalobe torque degradation"*, write: *"Baut bawah lecet (tanda pernah dibongkar)"*.
- **Action-Oriented CTAs**:
  - Replace vague labels like *"Submit"* or *"Lanjut"* with explicit action verbs: *"Mulai Pemeriksaan Unit"*, *"Lihat Hasil Diagnostik"*, *"Pilih Model Ini"*.

---

## 8. UI/UX Pro Max Verification Protocol

Run this 8-point checklist before marking any task as complete:
1. **Responsive Viewport Test**: Verify layout at 375px (iPhone SE/Mini), 430px (Pro Max), 768px (Tablet), and 1440px (Desktop).
2. **Touch Target Verification**: Are all interactive elements at least 44x44px?
3. **Typography Scan**: Are headings properly tracked? Is line-height comfortable?
4. **Contrast Check**: Is all text easily legible on dark/glass surfaces?
5. **No Visual Overlaps**: Do elements ever collide when the viewport resizes?
6. **Smooth 60/120 FPS**: Are all micro-animations silky smooth without dropped frames?
7. **Copywriting Clarity**: Can a first-time user understand every message immediately?
8. **Feedback Loops**: Does every click give immediate visual confirmation?
