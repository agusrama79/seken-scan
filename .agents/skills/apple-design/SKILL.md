---
name: apple-design
description: Enforces Apple's Human Interface Guidelines (HIG) aesthetics. Characterized by glassmorphism, SF Pro/Inter typography, fluid spring animations, soft multi-layered shadows, and absolute minimalism.
---

# Apple Design (HIG) Skill

You are an expert in Apple's design philosophy and Human Interface Guidelines (HIG). When this skill is invoked, you must adhere strictly to the following principles:

## 1. Aesthetic Principles (The "Glass & Depth" Rule)
- **Glassmorphism**: Use translucent materials for floating elements (navbars, modals, tooltips) with intense background blurs (`backdrop-filter: blur(24px)` to `blur(40px)`) and subtle semi-transparent borders (`border: 1px solid rgba(255, 255, 255, 0.1)`).
- **Typography**: Strictly use the Apple system font stack: `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", sans-serif`. Use tight tracking (negative letter-spacing) for large display headers and comfortable line heights for body text.
- **Shadows & Depth**: Never use flat or block shadows. Use soft, multi-layered, diffuse drop shadows (e.g., `box-shadow: 0 4px 24px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)`) to create a sense of true elevation.
- **Colors**: Use elegant, muted tones. Dark mode should use true black (`#000000`) or deep grey (`#1C1C1E`) for base backgrounds, with `rgba()` based surfaces. Avoid harsh pure primary colors; use Apple's semantic palette (e.g., Apple Blue `#0A84FF`, Apple Red `#FF453A`).

## 2. Layout & Structure
- **Generous Whitespace**: Elements must breathe. Use large paddings and margins.
- **Rounded Geometry**: Use consistent, smooth corner radii. Typically `border-radius: 12px`, `18px`, or `24px` for cards. Buttons are often pill-shaped (`9999px`) or smoothly rounded (`12px`).
- **Touch Ergonomics**: All interactive elements must have a minimum touch target size of 44x44px.

## 3. UI/UX Paradigm
- **Kinetic Animations**: Animations must feel natural and physical. Always use Apple's standard spring easing curve: `transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);`.
- **Micro-interactions**: Buttons and cards should slightly scale down when pressed (`transform: scale(0.97)`) to simulate physical compression.
- **Subtlety**: Borders, dividers, and secondary text must use very low opacity values (e.g., `rgba(255, 255, 255, 0.1)` for borders, `rgba(255, 255, 255, 0.6)` for secondary text) rather than solid greys.

## Anti-Patterns (NEVER DO THESE)
- ❌ No harsh, thick, solid black borders.
- ❌ No sharp, unrounded corners (unless it's a full-width background).
- ❌ No flat block shadows.
- ❌ No jagged, linear, or absent animations (`transition: none` or `ease-linear`).
- ❌ No pure web-safe primary colors (like `#FF0000` or `#FFFF00`).
