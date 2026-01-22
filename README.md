# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, React, and Tailwind CSS, designed for static export and deployment on GitHub Pages.

## 🚀 Features

- **Modern Stack**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS
- **Fully Static**: Optimized for static site generation with `output: 'export'`
- **Dark Mode**: Built-in dark mode support with system preference detection
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **SEO Optimized**: Comprehensive metadata and semantic HTML structure
- **Smooth Animations**: Subtle animations powered by Framer Motion
- **Accessible**: WCAG-compliant design with proper ARIA labels

## 📁 Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── projects/          # Projects page
│   ├── research/          # Research/Publications page
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer with social links
│   ├── ThemeProvider.tsx  # Dark mode context provider
│   ├── ThemeToggle.tsx    # Theme switcher button
│   └── ProjectCard.tsx   # Project card component
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jahidsagor/jahidsagor.github.io.git
cd jahidsagor.github.io
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the static site:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The static files will be generated in the `out/` directory.

## 📦 Deployment to GitHub Pages

### Option 1: GitHub Actions (Recommended)

1. Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          NODE_ENV: production

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Push to your repository and enable GitHub Pages:
   - Go to Settings → Pages
   - Source: Select "GitHub Actions"

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Copy the contents of the `out/` directory to the root of your `gh-pages` branch:
```bash
git checkout -b gh-pages
rm -rf ./*
cp -r out/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

### Important: Update basePath for GitHub Pages

If your repository name is different from `jahidsagor.github.io`, update the `basePath` in `next.config.js`:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
```

For a custom domain, remove the `basePath` and `assetPrefix` entirely.

## 🎨 Customization

### Updating Content

- **Home Page**: Edit `app/page.tsx`
- **Projects**: Edit `app/projects/page.tsx`
- **Research**: Edit `app/research/page.tsx`
- **About**: Edit `app/about/page.tsx`
- **Contact**: Edit `app/contact/page.tsx` and update contact information

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Global Styles**: Edit `app/globals.css`
- **Components**: Customize components in the `components/` directory

### Metadata & SEO

Update metadata in:
- `app/layout.tsx` - Site-wide metadata
- Individual page files - Page-specific metadata

## 📝 Notes

- This is a **fully static site** - no server-side features are used
- All components that need interactivity are marked with `'use client'`
- The contact form is a client-side demo - integrate with a service like Formspree or EmailJS for production
- Images should be optimized and placed in the `public/` directory
- All links in the footer and contact page should be updated with your actual social media profiles

## 🧪 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **UI Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome!

---

Built with ❤️ using Next.js and Tailwind CSS
