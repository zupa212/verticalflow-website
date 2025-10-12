import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { BlogPost, BlogFrontmatter } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Ensure directory exists
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

export function getAllPosts(includeDrafts = false): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    
    const allPosts = fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        return getPostBySlug(slug, includeDrafts);
      })
      .filter((post): post is BlogPost => post !== null);

    // Sort posts by date (newest first)
    return allPosts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

export function getPostBySlug(slug: string, includeDrafts = false): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const frontmatter = data as BlogFrontmatter;

    // Skip drafts unless explicitly requested
    if (frontmatter.draft && !includeDrafts) {
      return null;
    }

    const stats = readingTime(content);

    return {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      date: frontmatter.date,
      tags: frontmatter.tags || [],
      cover: frontmatter.cover,
      lang: frontmatter.lang || 'en',
      draft: frontmatter.draft || false,
      readingTime: stats.text,
      content,
      author: frontmatter.author,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getPostsByTag(tag: string, includeDrafts = false): BlogPost[] {
  const allPosts = getAllPosts(includeDrafts);
  return allPosts.filter((post) => post.tags.includes(tag));
}

export function getPostsByLang(lang: 'en' | 'gr', includeDrafts = false): BlogPost[] {
  const allPosts = getAllPosts(includeDrafts);
  return allPosts.filter((post) => post.lang === lang);
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = new Set<string>();
  
  allPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}

export function generateRSSFeed(posts: BlogPost[]): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verticalflow.gr';
  const buildDate = new Date().toUTCString();

  const rssItems = posts
    .map((post) => {
      const postUrl = `${siteUrl}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();

      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <dc:creator><![CDATA[${post.author?.name || 'Vertical Flow Team'}]]></dc:creator>
      ${post.tags.map((tag) => `<category><![CDATA[${tag}]]></category>`).join('\n      ')}
    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[Vertical Flow Blog]]></title>
    <link>${siteUrl}/blog</link>
    <description><![CDATA[The design partner for top-tier companies]]></description>
    <language>en</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;
}

export function generateArticleJsonLd(post: BlogPost) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verticalflow.gr';
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = post.cover ? `${siteUrl}${post.cover}` : `${siteUrl}/og-default.jpg`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'Vertical Flow Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vertical Flow',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    keywords: post.tags.join(', '),
    inLanguage: post.lang,
  };
}

