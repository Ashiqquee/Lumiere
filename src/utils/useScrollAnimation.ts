import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Custom hook to trigger animations when an element comes into view
 * @param threshold - Percentage of the element that needs to be visible (0-1)
 * @param once - Whether the animation should only trigger once
 * @returns [ref, isInView] - Ref to attach to the element and boolean indicating if in view
 */
export function useScrollAnimation(threshold = 0.15, once = true) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold, 
    once 
  });
  
  return [ref, isInView] as const;
}