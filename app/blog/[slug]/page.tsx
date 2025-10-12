import { getAllPosts, getPostBySlug, generateArticleJsonLd } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/mdx/MDXComponents';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = getAllPosts(false);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug, false);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verticalflow.gr';
  const imageUrl = post.cover ? `${siteUrl}${post.cover}` : `${siteUrl}/og-default.jpg`;

  return {
    title: `${post.title} | Vertical Flow Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author?.name || 'BrandAppart Team'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug, false);

  if (!post) {
    notFound();
  }

  const jsonLd = generateArticleJsonLd(post);

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#f5f4f0]">
        {/* Mobile Header */}
        <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 px-5 py-4 flex items-center justify-between">
        <Link href="/">
          <h2 className="text-lg font-bold leading-tight tracking-tight">Vertical Flow</h2>
        </Link>
          <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
            ← Blog
          </Link>
        </div>


        {/* Header */}
        <header className={`bg-white border-b border-gray-200 ${!post.draft ? 'pt-20 lg:pt-0' : ''}`}>
          <div className="container mx-auto px-6 py-8">
            <Link
              href="/blog"
              className="hidden lg:inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
              <Badge variant="secondary">{post.lang.toUpperCase()}</Badge>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight max-w-4xl">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mb-6">{post.description}</p>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Cover Image */}
        {post.cover && (
          <div className="container mx-auto px-6 py-8">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Content */}
        <article className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg">
              <MDXRemote
                source={post.content}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      rehypeSlug,
                      [
                        rehypeAutolinkHeadings,
                        {
                          behavior: 'wrap',
                          properties: {
                            className: ['anchor'],
                          },
                        },
                      ],
                      [
                        rehypePrettyCode,
                        {
                          theme: 'github-dark',
                          keepBackground: true,
                        },
                      ],
                    ],
                  },
                }}
              />
            </div>

            {/* Author */}
            {post.author && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  {post.author.avatar && (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-lg">{post.author.name}</p>
                    <p className="text-gray-600">Author</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Related posts could go here */}
      </div>
    </>
  );
}

