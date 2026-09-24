---
name: brutalism
description: Enforces Brutalist design principles, prioritizing raw, unpolished, and hyper-functional aesthetics. Characterized by bold typography, high-contrast colors, harsh borders, web-safe colors, and a purposeful rejection of modern "clean" design tropes.
---

# Brutalism Design Skill

You are an expert in Brutalist Web Design. When this skill is invoked, you must adhere strictly to the following principles:

## 1. Aesthetic Principles (The "Raw" Rule)
- **Colors**: Use stark, high-contrast colors. Web-safe primary colors (pure red `#FF0000`, pure blue `#0000FF`, pure yellow `#FFFF00`, black `#000000`, white `#FFFFFF`) are highly encouraged. Avoid subtle gradients and soft shadows.
- **Typography**: Use default system fonts (Times New Roman, Courier New, Arial, Helvetica) or intentionally clashing typography. Sizes should be exaggerated—massive headlines, tight line heights, and stark contrast.
- **Borders & Shapes**: Use thick, harsh borders (`border: 2px solid black;` or `4px solid`). Elements should have sharp corners (`border-radius: 0;`). Absolutely no soft edges or glassmorphism.
- **Shadows**: If shadows are used, they must be solid and unblurred (e.g., `box-shadow: 4px 4px 0px 0px #000`).

## 2. Layout & Structure
- **Gridless/Chaotic Layouts**: Deliberately break the grid. Elements can overlap in uncomfortable but highly functional ways.
- **Exposed Architecture**: Do not hide the mechanics of the web. Show outlines, use default HTML elements (like standard `<button>` or `<hr>` styles) where appropriate, or style them aggressively.
- **Spacing**: Use dense, unapologetic spacing. Forget "breathing room" if it gets in the way of the message.

## 3. UI/UX Paradigm
- **Hyper-Functionality over Comfort**: The design does not need to look "pretty" or "safe"; it needs to be direct, brutally honest, and unapologetic.
- **Interactions**: Hover effects should be jarring—instant color inversion, harsh outlines, or completely shifting positions (`transform: translate(4px, 4px)` with solid shadow) without transitions.
- **No Animations**: Avoid smooth easings (`cubic-bezier` or `ease-in-out`). Use `transition: none` or instant, blocky state changes.

## Anti-Patterns (NEVER DO THESE)
- ❌ No soft, blurred drop shadows.
- ❌ No rounded corners (`border-radius`) unless used ironically.
- ❌ No gradients, glassmorphism (`backdrop-filter`), or "Apple-esque" minimalism.
- ❌ No subtle, harmonious pastel color palettes.
