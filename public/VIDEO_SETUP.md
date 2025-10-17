# Video Setup Instructions

## Hero Section Video

To enable the video background in the hero section, you need to add the following files to the `/public` directory:

### Required Files

1. **hero-video.mp4** - Main video background
   - **Dimensions**: 1920x1080 (Full HD) or higher
   - **Duration**: 10-30 seconds (will loop)
   - **Format**: MP4 (H.264 codec recommended)
   - **Size**: Keep under 5MB for optimal loading
   - **Content**: Team working, office environment, or brand-related footage
   - **Color grading**: Dark/moody to match the black theme

2. **hero-poster.jpg** - Video poster/fallback image
   - **Dimensions**: 1920x1080
   - **Format**: JPG or WebP
   - **Size**: Under 200KB
   - **Purpose**: Shows while video is loading or if video fails

### Optimization Tips

**Video Compression**:
- Use HandBrake or FFmpeg to compress
- Target bitrate: 2-3 Mbps
- Remove audio track (video is muted anyway)
- Use H.264 codec for best browser compatibility

**Example FFmpeg command**:
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -an -vf scale=1920:1080 hero-video.mp4
```

### Alternative: Use Static Image

If you prefer to use a static image instead of video:

1. Add `hero-background.jpg` to `/public`
2. In `app/page.tsx`, replace the video element with:
```jsx
<div 
  className="w-full h-full bg-cover bg-center opacity-40"
  style={{ backgroundImage: "url('/hero-background.jpg')" }}
/>
```

### Current Placeholder Behavior

Without the video file, the hero section will:
- Show the gradient background overlay
- Display the content normally
- No errors will occur

---

**Need help?** Contact the development team for video editing assistance.

