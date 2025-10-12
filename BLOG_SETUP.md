# Blog System Setup Guide

This project includes a complete MDX-based blog system with bilingual support (EN/GR), SEO optimization, and automatic RSS feed generation.

## 📁 File Structure

```
verticalcreative-main/
├── app/
│   ├── blog/
│   │   ├── page.tsx                  # Blog list page with filters
│   │   └── [slug]/
│   │       └── page.tsx              # Individual blog post page
│   ├── rss.xml/
│   │   └── route.ts                  # RSS feed generator
│   ├── sitemap.ts                    # Dynamic sitemap including blog posts
│   └── robots.ts                     # Robots.txt configuration
├── components/
│   └── mdx/
│       ├── Callout.tsx               # Info/warning/success/danger callouts
│       ├── ProsCons.tsx              # Pros and cons comparison component
│       ├── Code.tsx                  # Code blocks with copy button
│       └── MDXComponents.tsx         # MDX component mappings
├── content/
│   └── blog/
│       ├── 2025-01-15-post.mdx       # Example blog post (EN)
│       └── 2025-01-10-post.mdx       # Example blog post (GR)
├── lib/
│   └── blog.ts                       # Blog utilities and helpers
├── types/
│   └── blog.ts                       # TypeScript types
└── public/
    └── blog/
        ├── post-slug/
        │   └── cover.jpg             # Post cover image (1200×630px)
        └── README.md                 # Image guidelines
```

## 🚀 Quick Start

### 1. Create a New Blog Post

Create a new MDX file in `content/blog/` with the format: `YYYY-MM-DD-slug.mdx`

```mdx
---
title: 'Your Post Title'
description: 'A compelling description for SEO and previews'
date: '2025-01-15'
tags: ['design', 'branding', 'strategy']
cover: '/blog/your-slug/cover.jpg'
lang: 'en'
draft: false
author:
  name: 'Your Name'
  avatar: '/authors/your-avatar.jpg'
---

Your content here using MDX syntax...
```

### 2. Add Cover Image

Place your optimized cover image (1200×630px, AVIF/WebP recommended) in:
```
public/blog/your-slug/cover.jpg
```

### 3. Deploy

The blog system automatically:
- ✅ Generates static pages for each post
- ✅ Updates the sitemap with new posts
- ✅ Adds posts to the RSS feed
- ✅ Creates Article JSON-LD structured data
- ✅ Generates Open Graph metadata for social sharing

## 📝 MDX Components

Use these custom components in your blog posts:

### Callout

```mdx
<Callout type="info" title="Quick Tip">
This is an informational callout.
</Callout>
```

Types: `info`, `warning`, `success`, `danger`

### ProsCons

```mdx
<ProsCons
  pros={[
    'First advantage',
    'Second advantage',
    'Third advantage'
  ]}
  cons={[
    'First limitation',
    'Second limitation'
  ]}
/>
```

### Code Blocks

```mdx
\`\`\`typescript
const example = 'code';
console.log(example);
\`\`\`
```

## 🌍 Bilingual Support

### Option 1: Separate Files

Create two files with language-specific slugs:
- `2025-01-15-title-en.mdx` (lang: 'en')
- `2025-01-15-title-gr.mdx` (lang: 'gr')

### Option 2: English Post + Greek Summary

Write post in English, add Greek summary section at the end:

```mdx
## Greek Summary (Ελληνική Περίληψη)

Σύντομη περίληψη του άρθρου στα ελληνικά...
```

## 🔍 SEO Features

Automatically included:
- ✅ Article JSON-LD structured data
- ✅ Open Graph meta tags
- ✅ Twitter Card meta tags
- ✅ Canonical URLs
- ✅ Dynamic sitemap.xml
- ✅ RSS feed at `/rss.xml`
- ✅ Reading time estimation
- ✅ Proper heading hierarchy with anchor links

## 📄 Draft Posts

### Working with Drafts

Set `draft: true` in frontmatter:

```yaml
---
title: 'Work in Progress'
draft: true
---
```

Drafts are:
- ❌ Not shown in blog list
- ❌ Excluded from sitemap
- ❌ Not included in RSS feed
- ✅ Accessible via preview URL (with token)

### Preview Draft Posts

Access with preview token:
```
/blog/your-slug?preview=YOUR_PREVIEW_TOKEN
```

Set `PREVIEW_TOKEN` in your environment variables.

## 🎨 Customization

### Styling

Blog pages use Tailwind CSS. Customize styles in:
- `app/blog/page.tsx` - List page
- `app/blog/[slug]/page.tsx` - Post page
- `components/mdx/MDXComponents.tsx` - MDX element styles

### Metadata

Update site-wide metadata in:
- `app/layout.tsx` - Global metadata
- `lib/blog.ts` - RSS feed & JSON-LD generator

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
PREVIEW_TOKEN=your-secret-token
```

## 📊 Blog Features

### Filtering

The blog list page supports:
- **By language**: `/blog?lang=en` or `/blog?lang=gr`
- **By tag**: `/blog?tag=design`
- **Combined**: `/blog?lang=en&tag=branding`

### Automatic Features

- Reading time calculation
- Date formatting
- Tag extraction for filters
- Social sharing metadata
- Responsive images with Next.js Image
- Syntax highlighting for code blocks
- Automatic heading anchors

## 🔗 URLs

- Blog list: `/blog`
- Single post: `/blog/slug`
- RSS feed: `/rss.xml`
- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`

## 🛠️ Development

### Local Development

```bash
npm run dev
```

Visit `http://localhost:3000/blog` to see your posts.

### Build for Production

```bash
npm run build
npm run start
```

### Type Checking

```bash
npm run typecheck
```

## 📦 Dependencies

The blog system uses:
- `next-mdx-remote` - MDX rendering
- `gray-matter` - Frontmatter parsing
- `reading-time` - Reading time estimation
- `rehype-slug` - Heading IDs
- `rehype-autolink-headings` - Clickable headings
- `rehype-pretty-code` - Syntax highlighting
- `remark-gfm` - GitHub Flavored Markdown

## 🎯 Best Practices

### Content

1. **Titles**: Keep under 60 characters for SEO
2. **Descriptions**: 150-160 characters, compelling and descriptive
3. **Images**: Always optimize (use Squoosh or similar)
4. **Tags**: Use 3-5 relevant tags per post
5. **Headings**: Use proper hierarchy (H2 → H3 → H4)

### Performance

1. Use AVIF/WebP for images
2. Keep cover images under 200KB
3. Optimize content images
4. Use proper image dimensions

### SEO

1. Write descriptive alt text for all images
2. Use internal links to related posts
3. Include relevant keywords naturally
4. Update posts to keep them fresh

## 📚 Example Posts

Check out the demo posts:
- `content/blog/2025-01-15-the-future-of-brand-design.mdx` (English)
- `content/blog/2025-01-10-design-strategy-startups.mdx` (Greek with English summary)

## 🆘 Troubleshooting

### Posts not showing up?

1. Check frontmatter syntax
2. Ensure `draft: false`
3. Verify date format: `YYYY-MM-DD`
4. Check file is in `content/blog/`
5. Restart dev server

### Images not loading?

1. Verify path starts with `/blog/`
2. Check image exists in `public/blog/`
3. Ensure proper file extension
4. Check for typos in path

### RSS feed empty?

1. Check posts are not drafts
2. Verify `NEXT_PUBLIC_SITE_URL` is set
3. Clear build cache: `rm -rf .next`

## 🚀 What's Next?

Consider adding:
- 🔍 Full-text search
- 💬 Comments system (Giscus, Disqus)
- 📧 Newsletter integration
- 🔔 Web push notifications
- 📱 Progressive Web App features
- 🌙 Dark mode toggle
- 📊 View counter
- ⏱️ Estimated reading progress bar

---

**Need help?** Check the example posts or reach out to the development team!

