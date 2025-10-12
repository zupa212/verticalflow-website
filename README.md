# Vertical Flow

> The design partner for top-tier companies

A modern, production-ready Next.js website featuring:
- 🎨 Beautiful landing page with macOS-style animations
- 📝 MDX-powered blog system (EN/GR bilingual)
- 🎬 TikTok/Instagram-style video carousel
- ⚡ Lightning-fast performance
- 📱 Fully responsive design
- 🔍 SEO optimized

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the site!

---

## 📂 Project Structure

```
verticalcreative-main/
├── app/
│   ├── page.tsx              # Homepage
│   ├── blog/                 # Blog pages
│   │   ├── page.tsx          # Blog list
│   │   └── [slug]/
│   │       └── page.tsx      # Blog post
│   ├── projects/
│   │   └── page.tsx          # Video carousel ⭐
│   ├── rss.xml/              # RSS feed
│   ├── sitemap.ts            # Dynamic sitemap
│   └── robots.ts             # SEO robots
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── mdx/                  # MDX components
│   └── VideoCarousel.tsx     # Projects carousel ⭐
├── content/
│   └── blog/                 # Blog posts (MDX)
├── lib/
│   └── blog.ts               # Blog utilities
└── public/
    └── blog/                 # Blog images
```

---

## 🎯 Features

### Homepage
- Modern landing page
- macOS Dock-style hover effects
- Smooth animations
- Live Athens time display
- Sidebar navigation

### Blog System
- MDX-powered content
- Bilingual support (EN/GR)
- Tag & language filtering
- SEO optimized
- RSS feed
- Reading time estimation
- Custom MDX components

### Projects Carousel
- TikTok/Instagram Reels style
- Vertical snap scrolling
- Video support ready
- Touch & mouse navigation
- Keyboard accessible

---

## 📝 Documentation

- **[BLOG_SETUP.md](BLOG_SETUP.md)** - Technical blog documentation
- **[BLOG_SOP.md](BLOG_SOP.md)** - Content creation guide
- **[TESTING_CHECKLIST.md](TESTING_CHECKLIST.md)** - Testing procedures
- **[CHANGES_SUMMARY.md](CHANGES_SUMMARY.md)** - Recent updates
- **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** - Implementation details

---

## 🛠️ Tech Stack

- **Framework**: Next.js 13.5.1 (App Router)
- **Language**: TypeScript 5.2.2
- **Styling**: Tailwind CSS 3.3.3
- **UI Components**: shadcn/ui (40+ components)
- **Content**: MDX with next-mdx-remote
- **Icons**: Lucide React
- **Backend**: Supabase (ready to integrate)

---

## 📄 Pages

| Page | URL | Description |
|------|-----|-------------|
| Homepage | `/` | Landing page with navigation |
| Projects | `/projects` | Video carousel showcase |
| Blog | `/blog` | Blog list with filters |
| Post | `/blog/[slug]` | Individual blog post |
| RSS | `/rss.xml` | Blog RSS feed |
| Sitemap | `/sitemap.xml` | SEO sitemap |

---

## 🎨 Design System

### Colors
- **Primary**: #4338ca (Indigo)
- **Accent**: #ff6b35 (Orange)
- **Background**: #f5f4f0 (Beige)
- **Text**: Gray-800 to Black

### Typography
- **Font**: Space Grotesk
- **Weights**: 400, 500, 600, 700

### Animations
- **Duration**: 300ms
- **Easing**: ease-out
- **Hover Scale**: 105-110%
- **Lift**: -4px translateY

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 🌍 Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://verticalflow.gr
PREVIEW_TOKEN=your-secret-token
```

---

## 📚 How to Add Content

### New Blog Post

1. Create MDX file:
```bash
content/blog/2025-01-20-my-post.mdx
```

2. Add frontmatter:
```yaml
---
title: 'Your Title'
description: 'Your description'
date: '2025-01-20'
tags: ['tag1', 'tag2']
lang: 'en'
draft: false
---
```

3. Write content using MDX
4. Deploy - everything else is automatic!

### New Project (Carousel)

Edit `components/VideoCarousel.tsx`:

```typescript
{
  id: 5,
  title: 'New Project',
  subtitle: 'Project #05',
  videoUrl: 'https://your-video.mp4',
  posterUrl: 'https://your-poster.jpg',
  backgroundColor: '#yourcolor',
}
```

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Manual
```bash
npm run build
npm run start
```

---

## 🧪 Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # TypeScript check
```

---

## 📞 Support

- **Website**: https://verticalflow.gr
- **Location**: Athens, Greece
- **Documentation**: See docs folder

---

## 📄 License

Private - All rights reserved

---

**Built with** ❤️ **in Athens, Greece**
