import { getAllPosts, generateRSSFeed } from '@/lib/blog';

export async function GET() {
  const posts = getAllPosts(false);
  const rss = generateRSSFeed(posts);

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

