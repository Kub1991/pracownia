'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ScrollContextType {
  forceLoadSectionId: string | null;
  setForceLoadSectionId: (id: string | null) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [forceLoadSectionId, setForceLoadSectionId] = useState<string | null>(null);

  return (
    <ScrollContext.Provider value={{ forceLoadSectionId, setForceLoadSectionId }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
}