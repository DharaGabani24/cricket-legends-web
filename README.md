# Cricket Legends - GTA VI Style Website

A stunning promotional website for Cricket Legends video game featuring the **exact GTA VI image-to-text transformation effect** built with Create React App and organized into separate components.

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | UI Framework |
| **Create React App** | 5.0.1 | Build tool (react-scripts) |
| **GSAP** | 3.12.5 | Animation library |
| **GSAP ScrollTrigger** | - | Scroll-based animations |
| **CSS3** | - | Styling (component-based) |
| **Google Fonts** | - | Bebas Neue + Outfit |

---

## 📁 Folder Structure

```
cricket-legends-react/
│
├── public/
│   ├── index.html              # HTML template
│   └── img/                    # Static images
│       ├── cric2.jpg
│       ├── cric4.webp
│       ├── cric6.jpeg
│       └── cric8.webp
│
├── src/
│   ├── components/             # React components
│   │   ├── index.js            # Barrel export for all components
│   │   │
│   │   ├── Preloader/
│   │   │   ├── index.js
│   │   │   ├── Preloader.js
│   │   │   └── Preloader.css
│   │   │
│   │   ├── Navbar/
│   │   │   ├── index.js
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   │   │
│   │   ├── Hero/               # GTA VI effect component
│   │   │   ├── index.js
│   │   │   ├── Hero.js
│   │   │   └── Hero.css
│   │   │
│   │   ├── Features/
│   │   │   ├── index.js
│   │   │   ├── Features.js
│   │   │   ├── FeatureCard.js  # Sub-component
│   │   │   └── Features.css
│   │   │
│   │   ├── Gallery/            # Horizontal scroll
│   │   │   ├── index.js
│   │   │   ├── Gallery.js
│   │   │   ├── GallerySlide.js # Sub-component
│   │   │   └── Gallery.css
│   │   │
│   │   ├── Stats/
│   │   │   ├── index.js
│   │   │   ├── Stats.js
│   │   │   ├── StatItem.js     # Sub-component
│   │   │   └── Stats.css
│   │   │
│   │   ├── CTA/
│   │   │   ├── index.js
│   │   │   ├── CTA.js
│   │   │   └── CTA.css
│   │   │
│   │   └── Footer/
│   │       ├── index.js
│   │       ├── Footer.js
│   │       └── Footer.css
│   │
│   ├── styles/
│   │   └── index.css           # Global styles & CSS variables
│   │
│   ├── hooks/                  # Custom hooks (for future use)
│   │
│   ├── App.js                  # Main app component
│   └── index.js                # Entry point
│
├── package.json
└── README.md
```

---

## 🧩 Components Overview

| Component | Description | Key Features |
|-----------|-------------|--------------|
| `Preloader` | Loading screen | GSAP progress animation |
| `Navbar` | Fixed navigation | Logo + menu links + hamburger |
| `Hero` | GTA VI effect | SVG mask + scroll animations |
| `Features` | Feature cards grid | `FeatureCard` sub-component |
| `Gallery` | Horizontal scroll | `GallerySlide` sub-component |
| `Stats` | Statistics display | `StatItem` sub-component |
| `CTA` | Call to action | Pre-order button |
| `Footer` | Site footer | Logo + copyright |

---

## 🚀 Installation & Running

```bash
# Install dependencies
npm install

# Start development server (localhost:3000)
npm start

# Build for production
npm run build
```

---

## 📦 Component Usage

All components are exported from `src/components/index.js`:

```javascript
import {
  Preloader,
  Navbar,
  Hero,
  Features,
  Gallery,
  Stats,
  CTA,
  Footer
} from './components';
```

Or import individually:

```javascript
import Hero from './components/Hero';
```

---

## 🎨 CSS Variables (Global)

Defined in `src/styles/index.css`:

```css
:root {
  --black: #0a0a0a;
  --dark: #1a1a2e;
  --white: #ffffff;
  --pink: #c41e7f;
  --purple: #7b2d8e;
  --orange: #ff6b35;
  --gray: rgba(255, 255, 255, 0.6);
  
  --font-display: 'Bebas Neue', sans-serif;
  --font-body: 'Outfit', sans-serif;
}
```

---

## 🎬 The GTA VI Effect (Hero Component)

The effect is achieved using:
1. **SVG Mask** - Black rectangle with text-shaped holes
2. **GSAP ScrollTrigger** - Syncs animation to scroll
3. **Scale animation** - Mask shrinks from huge (12) to small (0.3)
4. **Filter animation** - Image brightness increases

```javascript
// In Hero.js
gsap.fromTo(maskGroup,
  { scale: 12, opacity: 0 },  // Start: huge
  { scale: 0.3, opacity: 0 }  // End: small
);
```

---

## 📱 Responsive

All components are responsive with breakpoints at:
- **768px** - Tablet/mobile menu
- **480px** - Small mobile adjustments

---

Built with ❤️ using React + GSAP
