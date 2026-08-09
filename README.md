# Evergreen Real Estate

A professional, responsive **mixed real estate company website** built with semantic **HTML5**, **TailwindCSS v3 LTS** (compiled via npm + PostCSS), and **vanilla JavaScript**. No frameworks — fast, lightweight, and easy to host on any static-file service.

---

## Features

- Fully **responsive** layout (mobile, tablet, desktop)
- Clean, modern **navy / gold** brand palette configured in `tailwind.config.js`
- **Five pages**: Home, About, Services, Gallery, Contact
- Reusable **vanilla JS** components (mobile menu, scroll effects, gallery, contact form)
- Accessible markup (semantic HTML, keyboard-friendly navigation, alt text)
- Lightweight — no build framework or runtime dependencies

---

## Tech Stack

| Layer       | Technology                                      |
|-------------|-------------------------------------------------|
| Markup      | HTML5                                           |
| Styling     | TailwindCSS v3 LTS, PostCSS, Autoprefixer       |
| Interactivity | Vanilla JavaScript (ES6+)                     |
| Tooling     | npm                                             |

---

## Project Structure

```text
.
├── index.html            # Home
├── about.html            # About the company
├── services.html         # Services offered
├── gallery.html          # Property / project gallery
├── contact.html          # Contact form & info
├── assets/
│   ├── css/              # Additional stylesheets
│   ├── icons/            # Icon assets
│   ├── images/           # Image assets
│   └── js/
│       └── main.js       # Site-wide JavaScript
├── src/
│   └── input.css         # TailwindCSS source file
├── dist/
│   └── output.css        # Compiled CSS (generated)
├── tailwind.config.js    # Tailwind theme & content config
├── postcss.config.js     # PostCSS pipeline
├── package.json
└── .gitignore
```

---

## Getting Started

### Prerequisites
- Node.js **>= 16** (LTS recommended)
- npm **>= 8**

### Install

```bash
npm install
```

### Develop (watch mode)

```bash
npm run dev
```

This rebuilds `dist/output.css` automatically whenever you edit `src/input.css` or any HTML file.

### Production build

```bash
npm run build
```

This generates a **minified** `dist/output.css` ready for deployment.

---

## Deployment

Because the output is plain static files (`*.html` + `dist/output.css` + `assets/`), you can deploy to **any** static host:

- **GitHub Pages** — push to `gh-pages` branch or enable Pages on `main`
- **Netlify / Vercel** — drag-and-drop the folder or connect the repo
- **Cloudflare Pages** — connect the repo, build command `npm run build`, publish directory `.`
- Any traditional web server (Nginx, Apache, IIS)

---

## Customization

- **Brand colors & fonts** → edit `tailwind.config.js`
- **Source styles** → edit `src/input.css`
- **Site copy & sections** → edit the HTML files directly
- **Interactivity** → edit `assets/js/main.js`

---

## License

This project is provided as a starter template for the Evergreen Real Estate brand. Adapt freely for your own use.
