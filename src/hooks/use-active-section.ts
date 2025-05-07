'use client';

import { useState, useEffect, useRef, useCallback } from 'react'; // Added useCallback
import type { RefObject } from 'react';

interface ObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useActiveSection(
  sectionIds: string[],
  options: ObserverOptions = { threshold: 0.3, rootMargin: "-90px 0px -25% 0px" }
): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionElementsRef = useRef<Map<string, HTMLElement | null>>(new Map());

  // Memoize the callback to prevent recreation on every render
  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    let currentActiveSectionId: string | null = null;
    let bestMatchEntry: IntersectionObserverEntry | null = null;
    let minTop = Infinity;

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        const rect = element.getBoundingClientRect();
        if (rect.top < minTop) {
          minTop = rect.top;
          bestMatchEntry = entry;
        }
      }
    });

    if (bestMatchEntry) {
      const element = bestMatchEntry.target as HTMLElement;
      sectionElementsRef.current.forEach((el, id) => {
        if (el === element) {
          currentActiveSectionId = id;
        }
      });
    }

    if (currentActiveSectionId && currentActiveSectionId !== activeSection) {
      setActiveSection(currentActiveSectionId);
    } else if (!currentActiveSectionId && activeSection && window.scrollY < 200) {
      if (activeSection !== '#summary') setActiveSection('#summary');
    } else if (!currentActiveSectionId && activeSection && window.scrollY > (document.documentElement.scrollHeight - window.innerHeight - 200)) {
      if (activeSection !== '#contact') setActiveSection('#contact');
    }
  }, [activeSection]); // Dependency on activeSection is correct here as it's used in the logic

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    sectionIds.forEach(id => {
      const element = document.querySelector(id);
      if (element instanceof HTMLElement) {
        sectionElementsRef.current.set(id, element);
      }
    });

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const initObserver = () => {
      observerRef.current = new IntersectionObserver(observerCallback, options);
      const observer = observerRef.current;

      sectionElementsRef.current.forEach(element => {
        if (element) {
          observer.observe(element);
        }
      });
    };

    // Using requestIdleCallback for potentially non-critical setup
    if ('requestIdleCallback' in window) {
      requestIdleCallback(initObserver);
    } else {
      setTimeout(initObserver, 1); // Fallback
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      observerRef.current = null; // Clean up the ref
    };
  }, [sectionIds, options, observerCallback]); // observerCallback is now memoized

  return activeSection;
}
