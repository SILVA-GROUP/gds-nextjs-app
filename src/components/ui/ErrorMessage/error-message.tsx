'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ErrorMessageProps {
  message: string;
  title?: string;
  className?: string;
}

export function ErrorMessage({
  message,
  title = 'Error',
  className,
}: ErrorMessageProps) {
  return (
    <div
      className={cn('p-4 border border-red-500 bg-red-50 rounded', className)}
    >
      <h3 className="font-bold text-govuk-red">{title}!</h3>
      <p>{message}</p>
    </div>
  );
}
