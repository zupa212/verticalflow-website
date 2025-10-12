import { ReactNode } from 'react';
import { Check, X } from 'lucide-react';

interface ProsConsProps {
  pros?: string[];
  cons?: string[];
  children?: ReactNode;
}

export function ProsCons({ pros, cons, children }: ProsConsProps) {
  return (
    <div className="my-8 grid gap-6 md:grid-cols-2">
      {pros && pros.length > 0 && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-6">
          <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-green-900">
            <Check className="h-5 w-5" />
            Pros
          </h4>
          <ul className="space-y-2">
            {pros.map((pro, index) => (
              <li key={index} className="flex gap-2 text-sm text-green-800">
                <Check className="h-4 w-4 flex-shrink-0 mt-0.5 text-green-600" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {cons && cons.length > 0 && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-6">
          <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-red-900">
            <X className="h-5 w-5" />
            Cons
          </h4>
          <ul className="space-y-2">
            {cons.map((con, index) => (
              <li key={index} className="flex gap-2 text-sm text-red-800">
                <X className="h-4 w-4 flex-shrink-0 mt-0.5 text-red-600" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {children}
    </div>
  );
}

