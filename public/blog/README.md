# Blog Images

This directory contains images for blog posts.

## Structure

Each blog post should have its own subdirectory:

```
blog/
├── slug-of-post/
│   ├── cover.jpg (1200×630px recommended for OG image)
│   ├── image1.jpg
│   └── image2.png
└── another-post/
    └── cover.jpg
```

## Image Guidelines

### Cover Images (OG Images)
- **Dimensions**: 1200×630px (Facebook/Twitter optimal)
- **Format**: AVIF or WebP for best performance, fallback to JPG
- **File size**: Keep under 200KB for fast loading
- **Content**: Include post title or key visual

### Content Images
- **Format**: AVIF/WebP preferred, JPG/PNG as fallback
- **Width**: Max 1200px wide (will be responsive)
- **Optimization**: Use tools like Squoosh or ImageOptim
- **Alt text**: Always provide descriptive alt text in MDX

## Image Optimization Tools

- [Squoosh](https://squoosh.app/) - Online image compressor
- [Sharp](https://sharp.pixelplumbing.com/) - Node.js image processing
- Next.js Image component automatically optimizes images

## Usage in MDX

```mdx
![Alt text](/blog/post-slug/image.jpg)
```

Or use the Next.js Image component:

```mdx
<Image src="/blog/post-slug/image.jpg" alt="Description" width={1200} height={630} />
```

