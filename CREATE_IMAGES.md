# Image Creation Guide

Before launching the blog, you'll need to create actual images for the placeholder files.

## Required Images

### 1. Default OG Image
**File**: `public/og-default.jpg`  
**Size**: 1200×630px  
**Purpose**: Fallback for social sharing

**Design suggestions**:
- BrandAppart logo centered
- Tagline: "The design partner for top-tier companies"
- Background: Brand color (#f5f4f0 or gradient)
- Simple, professional, on-brand

### 2. Blog Post Covers

#### Post 1: The Future of Brand Design
**File**: `public/blog/future-brand-design/cover.jpg`  
**Title**: "The Future of Brand Design: AI, Authenticity, and Human Touch"  
**Themes**: AI + creativity, tech meets design, future-focused

#### Post 2: Design Strategy for Startups
**File**: `public/blog/startup-strategy/cover.jpg`  
**Title**: "Στρατηγική Design για Startups"  
**Themes**: Startup culture, brand building, strategy

## Quick Creation Methods

### Option 1: Canva (Easiest)
1. Go to [canva.com](https://canva.com)
2. Create "Custom Size" 1200×630px
3. Use templates or design from scratch
4. Download as JPG
5. Optimize with Squoosh

### Option 2: Figma (Professional)
1. Create new frame 1200×630px
2. Design with brand assets
3. Export as JPG (quality 80-90)
4. Optimize if needed

### Option 3: Stock Photos (Fast)
1. Find high-quality images on:
   - [Unsplash](https://unsplash.com)
   - [Pexels](https://pexels.com)
   - [Pixabay](https://pixabay.com)
2. Edit/crop to 1200×630px
3. Add text overlay if desired
4. Optimize for web

### Option 4: AI Generation (Modern)
1. Use Midjourney, DALL-E, or Stable Diffusion
2. Generate with prompts like:
   - "Modern design workspace with tech elements, minimal style"
   - "Abstract brand identity visuals, professional"
3. Upscale to 1200×630px
4. Optimize for web

## Image Optimization

Always optimize images before adding:

### Using Squoosh (Recommended)
1. Visit [squoosh.app](https://squoosh.app)
2. Upload your image
3. Choose format:
   - **Best**: AVIF (smallest, great quality)
   - **Good**: WebP (small, good quality)
   - **Fallback**: JPG (universal support)
4. Adjust quality (70-80 is usually fine)
5. Download optimized version

### Target Sizes
- Cover images: < 200KB
- Content images: < 500KB
- Default OG: < 150KB

## File Naming

Use lowercase with hyphens:
- ✅ `cover.jpg`
- ✅ `feature-image.jpg`
- ✅ `screenshot-dashboard.png`
- ❌ `Cover Image.JPG`
- ❌ `myImage_final2.png`

## Quick Checklist

Before launching:
- [ ] Create `public/og-default.jpg`
- [ ] Create cover for "future of brand design" post
- [ ] Create cover for "startup strategy" post
- [ ] All images optimized (< 200KB each)
- [ ] All images 1200×630px
- [ ] Test on localhost
- [ ] Verify social sharing previews

## Testing Social Previews

Use these tools to test how your images look when shared:

- **Twitter**: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- **Facebook**: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- **LinkedIn**: Share URL and check preview
- **Generic**: [Metatags.io](https://metatags.io)

## Pro Tips

1. **Brand Consistency**: Use your brand colors and fonts
2. **High Contrast**: Ensure text is readable
3. **Safe Zones**: Keep important content away from edges
4. **Test Thumbnails**: Check how it looks at small sizes
5. **Version Control**: Keep source files for future edits

---

**Timeline**: Creating all images should take 30-60 minutes with Canva or stock photos.

**Priority**: Default OG image is most important (used for all posts without covers).

