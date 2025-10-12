'use client';

import { ReactNode, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export function Code({ children, className, title }: CodeProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const codeElement = document.querySelector(`[data-code-block="${title}"]`);
    const code = codeElement?.textContent || '';
    
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 relative group">
      {title && (
        <div className="flex items-center justify-between bg-zinc-800 text-zinc-200 px-4 py-2 text-sm font-mono rounded-t-lg">
          <span>{title}</span>
          <Button
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0 text-zinc-400 hover:text-zinc-100"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      )}
      <div
        data-code-block={title}
        className={`overflow-x-auto ${title ? 'rounded-b-lg' : 'rounded-lg'}`}
      >
        <pre className={`p-4 bg-zinc-900 text-zinc-100 ${className || ''}`}>
          <code>{children}</code>
        </pre>
      </div>
      {!title && (
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-zinc-100"
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      )}
    </div>
  );
}

