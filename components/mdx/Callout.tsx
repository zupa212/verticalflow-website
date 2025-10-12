import { ReactNode } from 'react';
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'danger';
  children: ReactNode;
  title?: string;
}

const icons = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle2,
  danger: AlertCircle,
};

const styles = {
  info: 'bg-blue-50 border-blue-200 text-blue-900',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
  success: 'bg-green-50 border-green-200 text-green-900',
  danger: 'bg-red-50 border-red-200 text-red-900',
};

const iconStyles = {
  info: 'text-blue-500',
  warning: 'text-yellow-500',
  success: 'text-green-500',
  danger: 'text-red-500',
};

export function Callout({ type = 'info', children, title }: CalloutProps) {
  const Icon = icons[type];

  return (
    <div className={cn('my-6 rounded-lg border-l-4 p-4', styles[type])}>
      <div className="flex gap-3">
        <Icon className={cn('h-5 w-5 flex-shrink-0 mt-0.5', iconStyles[type])} />
        <div className="flex-1">
          {title && <p className="font-semibold mb-1">{title}</p>}
          <div className="text-sm [&>p]:m-0">{children}</div>
        </div>
      </div>
    </div>
  );
}

