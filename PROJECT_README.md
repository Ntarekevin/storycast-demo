# StoryCast - Ronaldinho Gaúcho Edition

Welcome to the **StoryCast** microsite project, a dedicated, interactive web experience showcasing the magical moments of Brazilian football legend, Ronaldinho Gaúcho. 

This project was built from the ground up focusing heavily on **modern web standards, deep accessibility, and responsive design**—without relying on any CSS frameworks like Bootstrap or Tailwind.

---

##  Features

- **Semantic HTML5:** Built with an articulate document structure using elements like `<article>`, `<figure>`, `<nav>`, and `<main>`.
- **Advanced CSS & SASS:** Employs a robust SASS architecture using partials, tokens, and variables. Features modern CSS Grid and Flexbox layouts, as well as **CSS Container Queries** for highly adaptable component scaling.
- **Deep Accessibility (WCAG 2.1 AA):** 
  - Fully navigable via keyboard with custom, high-contrast focus rings.
  - Hidden "Skip to Main Content" link for screen reader users.
  - Multimedia (`<video>`) is supported by `.vtt` caption tracks and full interactive text transcripts.
  - Generous color contrast ratios utilizing a custom Slate, Amber, and Emerald color palette.
- **Responsive Design:** Adapts fluidly from small mobile screens to large desktop monitors.

---

## 📂 Project Structure

```text
/
├── index.html            # Home page featuring the Ronaldinho story showcase
├── story.html            # The immersive detail page with accessible media player & transcript
├── about.html            # Our mission and accessibility statement
├── /sass/                # SASS source files
│   ├── _colors.scss      # Theme color tokens
│   ├── _typography.scss  # Fluid typography functions & variables
│   ├── _spacing.scss     # Layout spacing tokens
│   ├── _layout.scss      # Grid, flex utilities, and focus states
│   ├── _components.scss  # Component styles (Buttons, Media Player, Container Queries)
│   └── main.scss         # Central file importing all partials
├── /css/                 # Compiled CSS output
│   └── main.css          
└── /assets/              # Media and accessibility assets
    └── captions.vtt      # Video caption tracks
```

---

## Getting Started

This project is entirely static and requires no complicated backend server to run.

### Viewing the Site
1. Clone or download this repository to your local machine.
2. Open the `index.html` file directly in your preferred modern web browser (Chrome, Firefox, Safari, Edge).

### Modifying the Styles (Compiling SASS)
If you wish to adjust the theme or styling, you will need to compile the SASS files into CSS.

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Open your terminal in the root directory of the project.
3. Install the Sass compiler (if you don't already have it globally):
   ```bash
   npm init -y
   npm install sass
   ```
4. Run the Sass compiler:
   ```bash
   npx sass sass/main.scss css/main.css
   ```
5. Refresh your browser to see the updated styles.

---

##  Design & Theme

The UI uses a dark mode aesthetic designed to look premium and engaging. The color palette draws subtle inspiration from the Brazilian flag, utilizing:
- **Slate (Deep Blue/Grey):** For elegant backgrounds.
- **Amber (Gold/Yellow):** For primary accents and interactivity.
- **Emerald (Green):** For secondary tags and highlights.

---
*Built for the love of the beautiful game and accessible web development.*
