# Blog System Testing Checklist

Use this checklist to verify everything is working correctly.

## 🏠 Homepage Tests

### Desktop
- [ ] Visit `http://localhost:3000`
- [ ] Verify sidebar appears on left with 6 icons:
  1. ∞ (infinity logo) - purple circle
  2. Home icon
  3. **BookOpen icon (NEW)** - links to /blog
  4. Lock icon
  5. User icon
  6. Mail icon (darker background)
- [ ] Click Blog icon (BookOpen) → should navigate to `/blog`
- [ ] Verify "BrandAppart" text bottom-left
- [ ] Verify "BOOK A CALL NOW" button top-right
- [ ] Verify right sidebar with "Nominess" text
- [ ] Verify bottom-right location/time display

### Mobile (resize browser to < 768px)
- [ ] Verify mobile header appears at top
- [ ] "BrandAppart" text on left
- [ ] Menu icon on right
- [ ] No sidebar icons visible
- [ ] Content is responsive and readable

---

## 📝 Blog List Page Tests

### Navigation
- [ ] Visit `http://localhost:3000/blog`
- [ ] Verify mobile header (mobile) or desktop "Back to home" link
- [ ] Click "Back to home" → should return to homepage
- [ ] Click "BrandAppart" logo (mobile) → should return to homepage

### Content
- [ ] Verify page title: **"Blog"**
- [ ] Verify subtitle: "Insights, tips, and stories..."
- [ ] Verify **2 blog posts** appear:
  1. "The Future of Brand Design..." (EN)
  2. "Στρατηγική Design για Startups" (GR)

### Post Cards
Each card should show:
- [ ] Post title (bold, large text)
- [ ] Description (3 lines max, truncated with "...")
- [ ] Publish date (e.g., "Jan 15, 2025")
- [ ] Reading time (e.g., "8 min read")
- [ ] Language badge ("EN" or "GR")
- [ ] Tags as small badges
- [ ] Hover effect (shadow increases)

### Filters
- [ ] **Language Filter**:
  - Click "All" → shows both posts
  - Click "EN" → shows only English post
  - Click "GR" → shows only Greek post
  - Active filter has different styling

- [ ] **Tag Filter**:
  - Verify tags appear: branding, design, ai, strategy, startups, greek
  - Click any tag → filters posts by that tag
  - Click "Clear filters" → resets to all posts

- [ ] **Combined Filters**:
  - Select language + tag → only matching posts show
  - URL updates with query params (e.g., `?lang=en&tag=branding`)

### Responsive Design
- [ ] Desktop (> 1024px): 3 columns
- [ ] Tablet (768-1024px): 2 columns
- [ ] Mobile (< 768px): 1 column
- [ ] All text is readable
- [ ] Buttons are tappable

---

## 📖 Single Blog Post Tests

### English Post
- [ ] Visit `http://localhost:3000/blog/2025-01-15-the-future-of-brand-design`
- [ ] Verify mobile header or "Back to blog" link
- [ ] Verify post metadata:
  - Publish date: January 15, 2025
  - Reading time: ~8 min
  - Language badge: EN
  - Tags: branding, design, ai, strategy

### Content Rendering
- [ ] **Title**: Large, bold, black text
- [ ] **Description**: Gray text below title
- [ ] **Tags**: Clickable badges (click → filters by tag on blog list)
- [ ] **Body content**: 
  - Headings styled correctly (H2, H3, H4)
  - Paragraphs have proper spacing
  - Links are blue and underlined
  - Lists render correctly

### MDX Components

#### Callout Component
- [ ] Find "Quick Stats" callout (blue background)
- [ ] Verify icon appears (Info icon)
- [ ] Text is readable
- [ ] Border-left is visible

#### ProsCons Component
- [ ] Find Pros/Cons section
- [ ] Two columns (desktop) or stacked (mobile)
- [ ] Green section (Pros) with checkmarks
- [ ] Red section (Cons) with X marks
- [ ] All items listed correctly

#### Code Blocks
- [ ] Find TypeScript code block
- [ ] Syntax highlighting works (colors)
- [ ] Background is dark (zinc-900)
- [ ] Copy button appears on hover
- [ ] Copy button works (click → "Copied!")

### Greek Post
- [ ] Visit `http://localhost:3000/blog/2025-01-10-design-strategy-startups`
- [ ] Verify Greek title renders correctly
- [ ] Verify Greek content is readable
- [ ] Verify language badge shows "GR"
- [ ] Verify English summary at bottom
- [ ] All MDX components work (Callout, ProsCons, Code)

### Author Section
- [ ] Scroll to bottom of post
- [ ] Verify "BrandAppart Team" author name
- [ ] Verify separator line above author

### Mobile Post View
- [ ] Post is readable on mobile
- [ ] Code blocks scroll horizontally if needed
- [ ] ProsCons component stacks vertically
- [ ] Images (if added) are responsive

---

## 🔍 SEO & Technical Tests

### RSS Feed
- [ ] Visit `http://localhost:3000/rss.xml`
- [ ] Verify valid XML structure
- [ ] Verify 2 posts appear
- [ ] Each post has:
  - Title
  - Link
  - Description
  - Publish date
  - Tags

### Sitemap
- [ ] Visit `http://localhost:3000/sitemap.xml`
- [ ] Verify XML structure
- [ ] Verify these URLs appear:
  - `/` (homepage)
  - `/blog` (blog list)
  - `/blog/2025-01-15-the-future-of-brand-design`
  - `/blog/2025-01-10-design-strategy-startups`

### Robots.txt
- [ ] Visit `http://localhost:3000/robots.txt`
- [ ] Verify `User-agent: *`
- [ ] Verify `Allow: /`
- [ ] Verify sitemap URL reference

### Meta Tags (Open Graph)
Open browser DevTools → Elements → Head section:

- [ ] Verify `<title>` tag on blog list
- [ ] Verify `<meta name="description">` tag
- [ ] Verify Open Graph tags (`og:title`, `og:description`, etc.)
- [ ] Verify Twitter Card tags
- [ ] Verify RSS feed link tag

### Performance
Open DevTools → Network:

- [ ] Blog list loads in < 2 seconds
- [ ] Blog post loads in < 2 seconds
- [ ] No 404 errors in console
- [ ] No JavaScript errors in console

---

## 🎨 Visual Design Tests

### Typography
- [ ] Headings use proper hierarchy
- [ ] Body text is readable (not too small)
- [ ] Line height is comfortable
- [ ] Font weights are appropriate

### Colors
- [ ] Background: Beige (#f5f4f0)
- [ ] Cards: White with subtle shadow
- [ ] Primary accent: Indigo (#4338ca)
- [ ] Secondary accent: Orange (#ff6b35)
- [ ] Text: Dark gray/black, readable

### Spacing
- [ ] Consistent padding/margins
- [ ] Proper whitespace between elements
- [ ] Content not cramped or too spread out

### Hover States
- [ ] Post cards: Shadow increases on hover
- [ ] Links: Color changes on hover
- [ ] Buttons: Background darkens on hover
- [ ] Tag badges: Background changes on hover

---

## 🐛 Known Issues (Expected)

These are NORMAL and expected:

### Missing Images
- **Issue**: Console warnings about missing cover images
- **Why**: Placeholder images haven't been created yet
- **Fix**: Follow `CREATE_IMAGES.md` to add real images
- **Impact**: Posts work fine, just no cover images shown

### Browserslist Warning
- **Issue**: "caniuse-lite is outdated" warning
- **Why**: Dependency is slightly old
- **Fix**: Run `npx update-browserslist-db@latest`
- **Impact**: None for development

---

## ✅ Success Criteria

Your blog system is working correctly if:

1. ✅ Homepage loads with Blog icon in sidebar
2. ✅ Blog list shows 2 posts with metadata
3. ✅ Language and tag filters work
4. ✅ Individual posts render with proper styling
5. ✅ MDX components (Callout, ProsCons, Code) display correctly
6. ✅ Navigation works (back buttons, links)
7. ✅ RSS feed is valid XML
8. ✅ Sitemap includes all pages
9. ✅ Mobile responsive on all pages
10. ✅ No critical errors in console (image warnings are OK)

---

## 🚀 Next Steps

After testing:

1. **Add Real Images**: Follow `CREATE_IMAGES.md`
2. **Customize Content**: Edit demo posts or create new ones
3. **Adjust Styling**: Modify colors/fonts to match brand
4. **Add More Posts**: Follow `BLOG_SOP.md`
5. **Deploy**: Push to production (Vercel, Netlify, etc.)

---

## 📊 Testing Shortcuts

Quick commands to test specific features:

```bash
# Test blog list
open http://localhost:3000/blog

# Test English post
open http://localhost:3000/blog/2025-01-15-the-future-of-brand-design

# Test Greek post  
open http://localhost:3000/blog/2025-01-10-design-strategy-startups

# Test filters
open http://localhost:3000/blog?lang=en
open http://localhost:3000/blog?tag=branding

# Test RSS
open http://localhost:3000/rss.xml

# Test sitemap
open http://localhost:3000/sitemap.xml
```

---

## 🆘 Troubleshooting

### Posts not showing?
1. Check `content/blog/` directory exists
2. Verify MDX files are there
3. Check frontmatter syntax
4. Restart dev server: `npm run dev`

### Styling broken?
1. Check browser console for errors
2. Verify Tailwind classes are correct
3. Clear browser cache
4. Restart dev server

### Links not working?
1. Verify Next.js dev server is running
2. Check URL paths are correct
3. Look for 404 errors in console

### MDX components not rendering?
1. Check import in `MDXComponents.tsx`
2. Verify component syntax in MDX
3. Look for TypeScript errors
4. Check browser console

---

**Testing Time**: ~15-20 minutes for thorough testing

**Priority Tests** (if short on time):
1. Homepage → Blog navigation
2. Blog list loads with 2 posts
3. Open one post, verify MDX components
4. Test one filter (language or tag)
5. Check RSS feed

Happy testing! 🎉

