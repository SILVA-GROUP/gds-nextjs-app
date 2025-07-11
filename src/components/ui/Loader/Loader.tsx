import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LoaderProps } from './types';

export function Loader({ text, size = 'medium', className }: LoaderProps) {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-6 w-6',
    large: 'h-8 w-8',
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div className={cn('flex items-center', className)}>
        <Loader2
          className={cn(
            sizeClasses[size as keyof typeof sizeClasses],
            'animate-spin mr-2 govuk-!-margin-right-2'
          )}
        />
        {text && <span>{text}</span>}
      </div>
    </div>
  );
}
