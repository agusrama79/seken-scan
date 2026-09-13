# Project Rules & Design Standards: iPhone Seken Scan

This project strictly adheres to the **Taste** and **UI/UX Pro Max** standards. All AI assistants, developers, and code changes in this repository must comply with these guidelines.

## 1. Aesthetic Standard (The Taste Rule)
- **Apple-Grade Visuals**: Dark industrial aesthetic (`#020205` / `#09090D`), frosted glassmorphism (`backdrop-filter: blur(24px)`), subtle specular highlights, and directional ambient shadows.
- **No Generic AI Tropes**: No generic saturated purple/cyan glow buttons, flat harsh 1px solid grey outlines, or cluttered cards.
- **Typographic Precision**: Apple system typography stack (`-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter`), tight tracking on large display headings (`-0.025em`), and comfortable line heights.
- **Kinetic Physics**: All transitions must use Apple's standard easing curve `cubic-bezier(0.16, 1, 0.3, 1)` with tactile micro-compressions on click.

## 2. UI/UX Pro Max Architecture
- **Ergonomics & Touch-First**: Minimum 44x44px touch targets on all interactive elements. Safe-area padding compliance on iOS (`env(safe-area-inset-*)`).
- **Progressive Disclosure**: High-level humanized insights first, followed by clear scannable bullet checklists, with deep technical parameters neatly organized.
- **Humanized UX Writing**: Write clear, conversational instructions that anyone can understand without technical jargon.
- **Performance**: Maintain 60/120 FPS GPU-accelerated rendering. Never animate reflow triggers (`width`, `height`, `margin`). Animate only `transform` and `opacity`.

## 3. Registered Customization Skills
Detailed reference runbooks and checklists are available in:
- **Taste Skill**: [`.agents/skills/taste/SKILL.md`](.agents/skills/taste/SKILL.md)
- **UI/UX Pro Max Skill**: [`.agents/skills/ui-ux-promax/SKILL.md`](.agents/skills/ui-ux-promax/SKILL.md)
