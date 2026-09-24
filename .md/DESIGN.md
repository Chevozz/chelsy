# DESIGN.md

# For Chelsy — Romantic Editorial Design System

## 01 — Concept

Primary:
**ROMANTIC EDITORIAL**

Supporting:
- digital love letter
- film photography
- paper
- scrapbook
- elegant typography
- subtle neumorphism
- cinematic motion

The website should feel closer to a beautifully designed personal magazine or letter than an application.

## 02 — Visual Keywords

intimate, warm, quiet, elegant, nostalgic, tactile, soft, personal, cinematic.

## 03 — Colors

Background: `#F4EFE8`
Paper: `#F9F5EF`
Secondary paper: `#E9E0D7`
Primary text: `#302B29`
Secondary text: `#716964`
Muted rose: `#B9828D`
Deep rose: `#8E5965`
Soft brown: `#A18D7F`
Accent: `#D8B3A9`

Most of the page should remain warm neutral.

## 04 — Typography

Display: `Playfair Display` or `Cormorant Garamond`
Body: `Inter` or `Manrope`

Use large serif headings, comfortable body text, small editorial captions, and very limited handwritten accents.

## 05 — Layout

Maximum content width: approximately `1200px`.
Reading width: approximately `620px–760px`.

Use generous vertical spacing. Whitespace is a major design element.

## 06 — Hero

Suggested:
- eyebrow: `a little something for you`
- title: `Untuk Chelsy, ♡`
- subtitle: `aku bikin tempat kecil ini untuk menyimpan sedikit cerita tentang kamu.`
- CTA: `Buka suratnya ♡`

Use one strong personal photograph or intentional placeholder.

## 07 — Photography

Use:
- full-width image
- offset image
- portrait beside text
- two-photo composition
- large image with small caption

Do not put every photo inside the same rounded card.

## 08 — Paper / Film Texture

If used, keep it extremely subtle. It should suggest physical memory, not an old website.

## 09 — Timeline

Make the timeline feel like a story, not a dashboard.

Desktop can be horizontal or alternating. Mobile should be vertical.

Never invent dates.

## 10 — Little Things

Avoid identical cards. Use:
- numbered notes
- tiny annotations
- subtle buttons
- floating text
- tactile elements

## 11 — Neumorphism

Secondary style only.

Use it for tactile controls.

Example:
```css
box-shadow:
  8px 8px 18px rgba(163, 150, 140, 0.25),
  -8px -8px 18px rgba(255, 255, 255, 0.8);
```

Pressed:
```css
box-shadow:
  inset 5px 5px 12px rgba(163, 150, 140, 0.22),
  inset -5px -5px 12px rgba(255, 255, 255, 0.75);
```

Do not apply shadows indiscriminately.

## 12 — Love Letter

This is the visual and emotional centerpiece.

Possible flow:
closed letter/envelope → click/tap → gentle opening → paper reveal → readable letter.

Use serif typography and generous reading width.

## 13 — Music Player

A discreet tactile control with:
- title
- play/pause
- progress

Do not let it dominate.

## 14 — Hearts

Use hearts sparingly. A few meaningful hearts are better than constant heart particles.

## 15 — Motion

Micro: `150–250ms`
Normal: `300–500ms`
Storytelling: `500–900ms`

Motion should feel like turning a page.

## 16 — Scroll Story

Recommended:
1. Hero
2. Introduction
3. First meaningful photograph
4. Our little story / timeline
5. Little things I love about you
6. Photo gallery
7. Music moment
8. Love letter
9. Final message

The page should gradually become more intimate.

## 17 — Ending

Make the final section visually quiet.

Example:
`Terima kasih sudah menjadi kamu.`
`always,`
`[YOUR NAME] ♡`

Leave breathing room.

## 18 — Mobile

Use generous side padding, readable headings, full-width photos, vertical timeline, comfortable touch targets, reduced shadow intensity, and simplified navigation.

## 19 — Final Test

Ask:
- Does it feel personal?
- Does it feel like a love letter?
- Do photos have enough importance?
- Is there enough whitespace?
- Is the design too decorative?
- Is neumorphism an accent rather than the identity?
- Does the page tell a story?
- Does the final letter feel like the climax?

Refine before adding more effects.
