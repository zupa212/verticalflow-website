import { MDXComponents } from 'mdx/types';
import { Callout } from './Callout';
import { ProsCons } from './ProsCons';
import { Code } from './Code';
import Link from 'next/link';
import Image from 'next/image';

export const mdxComponents: MDXComponents = {
  // Custom components
  Callout,
  ProsCons,
  Code,

  // Override default HTML elements
  a: ({ href, children }) => {
    const isExternal = href?.startsWith('http');
    
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-700 underline font-medium"
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link
        href={href || '#'}
        className="text-indigo-600 hover:text-indigo-700 underline font-medium"
      >
        {children}
      </Link>
    );
  },

  img: ({ src, alt }) => {
    return (
      <span className="block my-8">
        <Image
          src={src || ''}
          alt={alt || ''}
          width={1200}
          height={630}
          className="rounded-lg w-full h-auto"
        />
      </span>
    );
  },

  h1: ({ children, ...props }) => (
    <h1
      className="text-4xl font-black mb-6 mt-12 tracking-tight scroll-mt-20"
      id={slugify(String(children))}
      {...props}
    >
      {children}
    </h1>
  ),

  h2: ({ children, ...props }) => (
    <h2
      className="text-3xl font-bold mb-4 mt-10 tracking-tight scroll-mt-20"
      id={slugify(String(children))}
      {...props}
    >
      {children}
    </h2>
  ),

  h3: ({ children, ...props }) => (
    <h3
      className="text-2xl font-bold mb-3 mt-8 tracking-tight scroll-mt-20"
      id={slugify(String(children))}
      {...props}
    >
      {children}
    </h3>
  ),

  h4: ({ children, ...props }) => (
    <h4
      className="text-xl font-semibold mb-2 mt-6 scroll-mt-20"
      id={slugify(String(children))}
      {...props}
    >
      {children}
    </h4>
  ),

  p: ({ children, ...props }) => (
    <p className="mb-4 leading-7 text-gray-700" {...props}>
      {children}
    </p>
  ),

  ul: ({ children, ...props }) => (
    <ul className="my-6 ml-6 list-disc space-y-2 text-gray-700" {...props}>
      {children}
    </ul>
  ),

  ol: ({ children, ...props }) => (
    <ol className="my-6 ml-6 list-decimal space-y-2 text-gray-700" {...props}>
      {children}
    </ol>
  ),

  li: ({ children, ...props }) => (
    <li className="leading-7" {...props}>
      {children}
    </li>
  ),

  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-6 border-l-4 border-indigo-500 pl-6 italic text-gray-700"
      {...props}
    >
      {children}
    </blockquote>
  ),

  code: ({ children, className, ...props }) => {
    const isInline = !className;
    
    if (isInline) {
      return (
        <code
          className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm font-mono text-zinc-900"
          {...props}
        >
          {children}
        </code>
      );
    }
    
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },

  pre: ({ children, ...props }) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm"
      {...props}
    >
      {children}
    </pre>
  ),

  hr: (props) => <hr className="my-8 border-gray-200" {...props} />,

  table: ({ children, ...props }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse" {...props}>
        {children}
      </table>
    </div>
  ),

  th: ({ children, ...props }) => (
    <th
      className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold"
      {...props}
    >
      {children}
    </th>
  ),

  td: ({ children, ...props }) => (
    <td className="border border-gray-300 px-4 py-2" {...props}>
      {children}
    </td>
  ),
};

// Helper function to create slugs from headings
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

