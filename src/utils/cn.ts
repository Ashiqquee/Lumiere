import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names with conditional logic using clsx and optimizes them with tailwind-merge
 * Example: cn('text-red-500', isActive && 'bg-blue-500', someCondition ? 'p-4' : 'p-2')
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}