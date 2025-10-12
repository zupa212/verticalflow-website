# Blog Post Creation SOP (Standard Operating Procedure)

## Quick Reference: Create & Publish a Blog Post in 5 Steps

### Step 1: Create MDX File (2 min)

```bash
# File naming: YYYY-MM-DD-slug.mdx
touch content/blog/2025-01-20-my-new-post.mdx
```

### Step 2: Add Frontmatter (1 min)

```yaml
---
title: 'Your Compelling Title (Max 60 Chars)'
description: 'SEO-friendly description 150-160 characters that makes people want to click.'
date: '2025-01-20'
tags: ['branding', 'design', 'startups']
cover: '/blog/my-new-post/cover.jpg'
lang: 'en'  # or 'gr'
draft: false  # or true for preview only
author:
  name: 'Your Name'
  avatar: '/authors/your-name.jpg'
---
```

### Step 3: Write Content (30-60 min)

```mdx
# Main content using MDX

Use standard Markdown plus custom components:

<Callout type="info" title="Pro Tip">
Important information here
</Callout>

<ProsCons
  pros={['Advantage 1', 'Advantage 2']}
  cons={['Limitation 1']}
/>

\`\`\`typescript
const code = 'with syntax highlighting';
\`\`\`
```

### Step 4: Optimize & Add Images (10 min)

```bash
# Create image directory
mkdir public/blog/my-new-post

# Add cover image (1200×630px, <200KB)
# Use Squoosh.app or similar to optimize
cp cover.jpg public/blog/my-new-post/cover.jpg
```

### Step 5: Test & Deploy (5 min)

```bash
# Test locally
npm run dev
# Visit: http://localhost:3000/blog/my-new-post

# Check everything works
# ✓ Images load
# ✓ Links work
# ✓ Mobile responsive
# ✓ SEO metadata

# Commit & push
git add .
git commit -m "Add: New blog post about X"
git push origin main
```

---

## 📋 Content Checklist

Before publishing, verify:

### Required
- [ ] Title is compelling and under 60 characters
- [ ] Description is 150-160 characters
- [ ] Date is correct format: YYYY-MM-DD
- [ ] At least 3 relevant tags
- [ ] Cover image exists and optimized
- [ ] Language specified (en/gr)
- [ ] Draft status set correctly

### Content Quality
- [ ] Grammar and spelling checked
- [ ] Links tested (no 404s)
- [ ] Images have alt text
- [ ] Code blocks have syntax highlighting
- [ ] Headings use proper hierarchy (H2 → H3 → H4)
- [ ] Reading time is reasonable (3-10 min ideal)

### SEO & Sharing
- [ ] Meta description is compelling
- [ ] Cover image is 1200×630px
- [ ] Title includes target keywords naturally
- [ ] Internal links to related posts
- [ ] External links open in new tab

### Technical
- [ ] No TypeScript errors
- [ ] No linter warnings
- [ ] Images optimized (<200KB cover, <500KB content)
- [ ] Mobile responsive
- [ ] Fast loading time

---

## 📝 Content Templates

### Standard Blog Post Structure

```mdx
---
# Frontmatter here
---

Brief introduction paragraph that hooks the reader and sets expectations.

## Main Point 1

Content with examples and insights.

<Callout type="info">
Supporting information or pro tip
</Callout>

## Main Point 2

More valuable content.

### Subpoint 2.1

Detailed explanation.

## Practical Examples

\`\`\`typescript
// Code example with explanation
\`\`\`

## Pros & Cons

<ProsCons
  pros={['Clear advantage 1', 'Clear advantage 2']}
  cons={['Honest limitation 1', 'Honest limitation 2']}
/>

## Conclusion

Summary and call to action.

---

**Want to learn more?** [Contact us](/contact) for a consultation.
```

### Tutorial Post Structure

```mdx
---
# Frontmatter
---

What you'll learn and why it matters.

## Prerequisites

What readers need to know/have before starting.

## Step 1: First Action

Detailed instructions with code examples.

## Step 2: Next Action

Continue step-by-step.

## Troubleshooting

Common issues and solutions.

## What's Next

Further learning resources.
```

### Case Study Structure

```mdx
---
# Frontmatter
---

## The Challenge

Client's problem and constraints.

## Our Approach

Strategy and methodology.

## The Solution

What we created and how.

<ProsCons
  pros={['Result 1', 'Result 2', 'Result 3']}
/>

## Key Takeaways

Lessons learned and best practices.

## Results

Measurable outcomes and client feedback.
```

---

## 🎨 Image Guidelines

### Cover Images (OG Images)

**Dimensions**: 1200×630px  
**Format**: AVIF > WebP > JPG  
**Size**: <200KB  
**Tools**: [Squoosh.app](https://squoosh.app/), Photoshop, Figma

**Cover Template Checklist**:
- [ ] Brand colors used
- [ ] Post title visible (if applicable)
- [ ] High contrast for readability
- [ ] Looks good on both light/dark backgrounds
- [ ] No text smaller than 60px

### Content Images

**Max Width**: 1200px  
**Format**: AVIF > WebP > JPG/PNG  
**Size**: <500KB per image  
**Alt Text**: Always descriptive and specific

---

## 🌍 Bilingual Content Strategy

### Option A: Separate Posts (Recommended for full translations)

```
content/blog/2025-01-20-brand-strategy-en.mdx  (lang: 'en')
content/blog/2025-01-20-brand-strategy-gr.mdx  (lang: 'gr')
```

**Pros**: Better SEO, full content in each language  
**Cons**: More maintenance

### Option B: English with Greek Summary

```mdx
---
lang: 'en'
---

[Full English content]

---

## Ελληνική Περίληψη (Greek Summary)

Σύντομη περίληψη του άρθρου στα ελληνικά...

[3-5 bullet points σε bullet format]
```

**Pros**: Less maintenance, good for Greek audience scanning  
**Cons**: Not ideal for Greek-only readers

---

## 🚀 Publishing Workflow

### Draft Workflow

1. **Create draft**: Set `draft: true`
2. **Write content**: Focus on quality
3. **Internal review**: Share preview URL with team
4. **Revisions**: Based on feedback
5. **Final check**: Use checklist above
6. **Publish**: Set `draft: false` and deploy

### Preview URL

Share with team for review:
```
https://yoursite.com/blog/post-slug?preview=YOUR_SECRET_TOKEN
```

### Scheduling Posts

Since Next.js builds are static, use these strategies:

**Option 1**: CI/CD scheduled builds
```yaml
# GitHub Actions example
schedule:
  - cron: '0 9 * * *'  # Daily at 9 AM
```

**Option 2**: Manual trigger
Set future date in frontmatter, keep `draft: true`, manually change to `false` on publish date.

**Option 3**: Vercel scheduled functions
Use Vercel Cron Jobs to trigger rebuilds.

---

## 📊 Post-Publish Checklist

Within 24 hours of publishing:

- [ ] Share on social media (Twitter, LinkedIn)
- [ ] Add to newsletter if applicable
- [ ] Monitor analytics for initial response
- [ ] Check RSS feed includes new post
- [ ] Verify sitemap updated
- [ ] Test social share previews (Twitter, LinkedIn, Facebook)
- [ ] Respond to any early comments

Within 1 week:

- [ ] Review analytics data
- [ ] Update internal links in related posts
- [ ] Consider converting to other formats (video, infographic)
- [ ] Repurpose key points for social media posts

---

## 🔍 SEO Best Practices

### On-Page SEO

- **Title**: Include target keyword, keep under 60 chars
- **Description**: Include keyword naturally, 150-160 chars
- **Headings**: Use H2-H4 hierarchy with keywords
- **Alt text**: Descriptive with relevant keywords
- **Internal links**: Link to 2-3 related posts
- **External links**: Link to authoritative sources

### Technical SEO

The blog system automatically handles:
- ✅ JSON-LD structured data
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Sitemap generation
- ✅ RSS feed
- ✅ Mobile responsiveness
- ✅ Fast loading times

### Content SEO

- Write for humans first, search engines second
- Use natural language and conversational tone
- Include examples and practical advice
- Update old posts to keep them fresh
- Use relevant tags for better organization

---

## 📈 Analytics & Improvement

### Metrics to Track

- **Page views**: Total traffic
- **Time on page**: Engagement indicator
- **Bounce rate**: Content relevance
- **Social shares**: Viral potential
- **Backlinks**: Authority building
- **Conversions**: CTA effectiveness

### Continuous Improvement

Monthly review:
- Identify top performers (replicate success)
- Update outdated information
- Improve low-performing posts
- Add internal links to new content
- Refresh images and examples

---

## 🆘 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Post not showing | Check `draft: false`, verify date format, restart dev server |
| Images not loading | Check path `/blog/slug/image.jpg`, verify file exists |
| Broken styling | Check MDX syntax, verify components imported |
| RSS feed empty | Check posts aren't drafts, verify `NEXT_PUBLIC_SITE_URL` |
| SEO metadata missing | Check frontmatter completeness, verify no syntax errors |
| Build errors | Run `npm run typecheck`, check MDX syntax |

---

## 📚 Resources

### Writing Tools
- [Grammarly](https://grammarly.com/) - Grammar checking
- [Hemingway App](http://hemingwayapp.com/) - Readability
- [CoSchedule Headline Analyzer](https://coschedule.com/headline-analyzer) - Title optimization

### Image Tools
- [Squoosh](https://squoosh.app/) - Image compression
- [Unsplash](https://unsplash.com/) - Free stock photos
- [Canva](https://canva.com/) - Cover image design

### SEO Tools
- [Yoast SEO Plugin](https://yoast.com/) - SEO analysis
- [Google Search Console](https://search.google.com/search-console) - Performance tracking
- [Ahrefs](https://ahrefs.com/) - Keyword research

### Development
- [MDX Documentation](https://mdxjs.com/) - MDX syntax
- [Next.js Docs](https://nextjs.org/docs) - Framework reference

---

## 💡 Pro Tips

1. **Write headlines first**: Create 5-10 headlines before writing
2. **Start with outline**: Map structure before writing content
3. **Write in batches**: More efficient than one-at-a-time
4. **Use templates**: Consistency saves time
5. **Edit ruthlessly**: Cut unnecessary words
6. **Add visuals**: Break up text every 300-400 words
7. **Include CTAs**: Guide readers to next action
8. **Update regularly**: Keep content fresh and relevant

---

**Questions?** Check `BLOG_SETUP.md` for technical details or reach out to the dev team!

