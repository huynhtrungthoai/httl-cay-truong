# 50th Anniversary Church Website (React + Vite)

## Project Overview

Build a production-ready commemorative website celebrating the 50th anniversary of a church.

### Theme

**"Kỷ Niệm 50 năm thành lập Chi Hội Cây Trường"**

The website should feel:

- Sacred
- Historical
- Inspirational
- Elegant
- Museum-like
- Storytelling-focused

Avoid corporate/business styles.

### Technology Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- SwiperJS
- Lightbox Gallery
- Responsive Design

---

## Design System

### Colors

- Gold: `#C9A227`
- Ivory: `#F8F5EE`
- Deep Brown: `#3B2F2F`
- White: `#FFFFFF`

### Typography

- Elegant serif for headings
- Clean sans-serif for body text

---

## Folder Structure

```text
src/
├── components/
│   ├── Hero/
│   ├── HistoryOverview/
│   ├── Timeline/
│   ├── Leaders/
│   ├── Gallery/
│   ├── VideoArchive/
│   ├── AnniversaryEvent/
│   ├── Tribute/
│   ├── Navbar/
│   └── Footer/
│
├── pages/
│   └── Home.tsx
│
├── data/
│   ├── timeline.ts
│   ├── leaders.ts
│   ├── gallery.ts
│   └── videos.ts
│
├── assets/
│
├── App.tsx
└── main.tsx
```

---

# Page Structure

Navbar

↓

Hero

↓

50 Years Journey

↓

Historical Timeline

↓

Key Church Leaders

↓

Photo Gallery

↓

Video Archive

↓

50th Anniversary Celebration

↓

Words of Gratitude

↓

Footer

---

## Hero Section

- Full-screen hero
- Church photo background
- Dark overlay
- Large anniversary title
- Bible verse
- CTA buttons
- Smooth scroll
- Parallax effect
- Framer Motion animations

---

## 50 Years Journey

Three milestone cards:

### Foundation (1976–1990)

Church establishment and early ministry.

### Growth (1991–2010)

Expansion and outreach.

### Flourishing (2011–2026)

Impact and future vision.

---

## Historical Timeline

Interactive vertical timeline.

Example data:

```ts
[
  {
    year: "1976",
    title: "Church Founded",
    description: "Beginning of the ministry.",
  },
  {
    year: "2026",
    title: "50th Anniversary Celebration",
    description: "Golden Jubilee.",
  },
];
```

Requirements:

- Animated timeline
- Alternating cards
- Mobile responsive
- Scroll-based animation

---

## Key Church Leaders

Each profile contains:

- Portrait
- Name
- Service period
- Biography

Features:

- Hover effects
- Responsive cards

---

## Photo Gallery

Museum-style gallery.

Features:

- Masonry layout
- Category filter
- Lightbox preview
- Animation

Categories:

- Founding Years
- Worship
- Community
- Youth Ministry
- Missions
- Anniversary Events

---

## Video Archive

Display:

- Historical documentaries
- Interviews
- Anniversary videos

Use responsive YouTube embeds.

---

## 50th Anniversary Event

Include:

- Event banner
- Date
- Location
- Schedule
- Countdown timer

Sample schedule:

```text
08:00 Opening Worship
09:30 Historical Presentation
11:00 Thanksgiving Service
14:00 Fellowship Gathering
```

---

## Words of Gratitude

Include appreciation messages for:

- God
- Former pastors
- Church members
- Community partners

Display with elegant quote cards.

---

## Navbar

Sticky navigation.

Menu:

- Home
- Journey
- Timeline
- Leaders
- Gallery
- Videos
- Celebration
- Gratitude

Smooth scrolling.

Mobile hamburger menu.

---

## Animations

Use Framer Motion.

Requirements:

- Fade-up effects
- Staggered animations
- Hero entrance animations
- Hover interactions

---

## Responsive Design

Support:

- Mobile
- Tablet
- Desktop

Mobile-first approach.

---

## Accessibility

- Semantic HTML
- Keyboard navigation
- Alt text
- Proper color contrast

---

## Deliverables

Generate:

1. Complete Vite setup
2. package.json dependencies
3. Tailwind configuration
4. Folder structure
5. Reusable components
6. Mock data files
7. TypeScript interfaces
8. Fully working source code

Output all files with filenames and contents.
