---
name: taste
description: >-
  Use this skill whenever designing, reviewing, or implementing user interfaces, aesthetics, visual identity, micro-interactions, or typography. Enforces elite design taste, Apple-grade minimalism, intentional whitespace, visual rhythm, emotional resonance, and zero-compromise craftsmanship, eliminating generic AI design tropes.
---

# ✦ The Taste Skill (Elite Aesthetic & Design Craftsmanship)

> *"Design is not just what it looks like and feels like. Design is how it works."* — Steve Jobs  
> *"Good design is as little design as possible."* — Dieter Rams

Taste is the discerning judgment that separates amateur, generic web interfaces from breathtaking, Apple-grade digital craftsmanship. This skill guides the creation of user interfaces that evoke trust, sophistication, and delight.

---

## 1. The Core Philosophy: Eliminating "AI Slop" & Generic Aesthetics

### What to Ban Forever (Anti-Patterns):
❌ **Generic "AI Purple/Indigo Gradients"**: Overused saturated purple/cyan glow buttons that look like generic templates.  
❌ **Harsh, Flat 1px Borders**: Solid grey `#333` or `#ccc` outlines everywhere with no depth or hierarchy.  
❌ **Boxy, Cluttered Cards**: Packing 10 disparate pieces of text and random colored badges inside a single rectangle.  
❌ **Lifeless Transitions**: Default `transition: all 0.2s ease` or sudden snap hover states without kinetic momentum.  
❌ **Placeholder Incoherence**: Low-res placeholder graphics, inconsistent icon stroke weights, or misplaced decorative noise.  
❌ **Text Walls**: Dense paragraphs of technical jargon without typographic pacing or breathing room.

### What to Champion (The Apple / Humane Standard):
✔ **Deep, Controlled Obsidian Surfaces**: `#020205`, `#09090D`, `#121217` layers with calibrated optical separation.  
✔ **Laser-Etched Glass & Lighting**: Subtle translucent acrylic glass (`backdrop-filter: blur(20px)`), frosted specular edges (`inset 0 1px 0 rgba(255,255,255,0.12)`), and directional ambient occlusion shadows.  
✔ **Typographic Rhythm**: Flawless proportion between Display titles, Section headers, Body labels, and Monospace technical specs.  
✔ **Kinetic Grace**: Physics-modeled transitions (`cubic-bezier(0.16, 1, 0.3, 1)`), tactile micro-compressions on click, and subtle spatial parallax.  
✔ **Ruthless Editing**: Showing only what matters at each moment. If an element does not build trust or clarity, remove it.

---

## 2. The 7 Pillars of Interface Taste

### Pillar 1: Typographic Mastery & Pacing
- **Font Stack**: Prioritize Apple System fonts (`-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text"`, `Inter`, `Geist`).
- **Optical Tracking (Letter-Spacing)**:
  - Large Display Headings (32px+): Tighten tracking (`letter-spacing: -0.025em` to `-0.035em`) for punch and confidence.
  - Subheadings (18px–24px): Slight negative tracking (`-0.015em`).
  - Small Overlines / Badges (10px–12px uppercase): Expand tracking (`letter-spacing: +0.06em` to `+0.1em`) for crisp legibility.
- **Line Height Balance**:
  - Headings: Compact `1.1` to `1.2`.
  - Body text: Comfortable `1.5` to `1.6` for effortless readability.

### Pillar 2: Surfaces, Elevation & Layering
Instead of borders, define shape through **tonal depth** and **specular lighting**:
```css
/* Premium Frosted Glass Card */
.taste-card {
  background: rgba(18, 18, 24, 0.65);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-top: 1px solid rgba(255, 255, 255, 0.16); /* Specular top rim light */
  box-shadow: 
    0 4px 24px -1px rgba(0, 0, 0, 0.4),
    0 1px 2px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.35s ease;
}

.taste-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.18);
  box-shadow: 
    0 12px 36px -4px rgba(0, 0, 0, 0.6),
    0 0 20px rgba(255, 255, 255, 0.04);
}
```

### Pillar 3: Monochromatic Harmony with Sparing Accent
- Use the **60-30-10 Rule**:
  - **60% Dominant Base**: Deep Obsidian / Midnight Black (`#030307`, `#08080C`).
  - **30% Structural Medium**: Titanium Gray, Slate Graphite (`#1C1C24`, `#2C2C38`, text in `#E4E4EB` and `#9494A6`).
  - **10% Kinetic Accent**: Luminous Signal White (`#FFFFFF`), Apple Emerald Green (`#30D158`), Electric Blue (`#0A84FF`), or Amber Alert (`#FF9F0A`).
- **Never color-code randomly**: Every color must carry unambiguous semantic meaning (Verified = Green, Warning = Amber, Neutral Info = Titanium Silver).

### Pillar 4: Tactile Buttons & Interactive Affordance
Buttons must feel like physical precision hardware when tapped or hovered:
```css
.taste-button-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 24px;
  background: #FFFFFF;
  color: #000000;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.01em;
  border-radius: 980px; /* Apple pill shape */
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.15);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1),
              filter 0.2s ease;
}

.taste-button-primary:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 24px rgba(255, 255, 255, 0.25);
  filter: brightness(1.04);
}

.taste-button-primary:active {
  transform: scale(0.98);
  filter: brightness(0.92);
}
```

### Pillar 5: Intentional Whitespace & Visual Breathing Room
- **Macro Space**: Give major sections 80px to 140px vertical padding on desktop, 48px to 72px on mobile. Cramped pages look cheap.
- **Micro Space**: Maintain consistent 8px/12px/16px/24px/32px spacing scales.
- **Content Hierarchy**: A user should scan any screen and understand within 3 seconds:
  1. Where am I?
  2. What is the most critical insight or task?
  3. What is my next single action?

### Pillar 6: Sophisticated Badges & Chips
Badges should look like precision-milled hardware tags, not toy stickers:
```css
.taste-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 11px;
  border-radius: 980px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.03em;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #D1D1D6;
  backdrop-filter: blur(12px);
}
```

### Pillar 7: Kinetic Animation & Dynamic Life
- Interface elements should feel alive without being distracting.
- Canvas-based 3D visuals, glowing gradients, and subtle parallax movements create an immersive ambiance that elevates perceived value.
- Use `cubic-bezier(0.16, 1, 0.3, 1)` (Apple standard) or `cubic-bezier(0.2, 0.8, 0.2, 1)` for all layout transitions.

---

## 3. The 60-Second Taste Review Checklist

Before approving any UI code, verify:
- [ ] **Does it look unmistakably premium at first glance?**
- [ ] **Are borders subtle or specular rather than harsh solid outlines?**
- [ ] **Is the typography tightly tracked on titles and legible on body?**
- [ ] **Do buttons have satisfying tactile hover and active press states?**
- [ ] **Is there adequate whitespace so content doesn't feel suffocated?**
- [ ] **Are there zero generic purple-magenta gradient AI clichés?**
- [ ] **Does the interface feel fast, smooth (60fps), and intentional?**
