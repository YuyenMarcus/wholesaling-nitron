'use client';

import { ReactNode } from 'react';
// import useSmoothScroll from '../hooks/useSmoothScroll';

export default function ClientWrapper({ children }: { children: ReactNode }) {
  // Temporarily disabled smooth scroll to debug hook errors
  // useSmoothScroll();
  
  return <>{children}</>;
}

