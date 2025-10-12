import { getAllPosts, getAllTags } from '@/lib/blog';
import { BlogPost } from '@/types/blog';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Blog | Vertical Flow',
  description: 'Insights, tips, and stories from the design partner for top-tier companies.',
};

interface BlogPageProps {
  searchParams: {
    tag?: string;
    lang?: 'en' | 'gr';
  };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  let posts = getAllPosts(false);
  const allTags = getAllTags();

  // Filter by tag if provided
  if (searchParams.tag) {
    posts = posts.filter((post) => post.tags.includes(searchParams.tag as string));
  }

  // Filter by language if provided
  if (searchParams.lang) {
    posts = posts.filter((post) => post.lang === searchParams.lang as 'en' | 'gr');
  }

  return (
    <div className="min-h-screen bg-[#f5f4f0]">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 px-5 py-4 flex items-center justify-between">
        <Link href="/">
          <h2 className="text-lg font-bold leading-tight tracking-tight">Vertical Flow</h2>
        </Link>
        <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
          ← Home
        </Link>
      </div>

      {/* Header */}
      <header className="border-b border-gray-200 bg-white pt-20 lg:pt-0">
        <div className="container mx-auto px-6 py-8">
          <Link href="/" className="hidden lg:inline-block mb-6 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            ← Back to home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-black mb-4 tracking-tight">Blog</h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl">
            Insights, tips, and stories from the design partner for top-tier companies.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-4 items-center">
          <div className="flex gap-2 items-center">
            <span className="text-sm font-medium text-gray-700">Language:</span>
            <Link href="/blog">
              <Button
                variant={!searchParams.lang ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
              >
                All
              </Button>
            </Link>
            <Link href="/blog?lang=en">
              <Button
                variant={searchParams.lang === 'en' ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
              >
                EN
              </Button>
            </Link>
            <Link href="/blog?lang=gr">
              <Button
                variant={searchParams.lang === 'gr' ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
              >
                GR
              </Button>
            </Link>
          </div>

          {allTags.length > 0 && (
            <div className="flex gap-2 items-center flex-wrap">
              <span className="text-sm font-medium text-gray-700">Tags:</span>
              {allTags.map((tag) => (
                <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                  <Badge
                    variant={searchParams.tag === tag ? 'default' : 'outline'}
                    className="cursor-pointer"
                  >
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          )}

          {(searchParams.tag || searchParams.lang) && (
            <Link href="/blog">
              <Button variant="ghost" size="sm">
                Clear filters
              </Button>
            </Link>
          )}
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No posts found.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
        {post.cover && (
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <div className="p-6 flex-1 flex flex-col">
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
            <Badge variant="secondary" className="ml-auto">
              {post.lang.toUpperCase()}
            </Badge>
          </div>

          {/* Title & Description */}
          <h2 className="text-2xl font-bold mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{post.description}</p>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}

