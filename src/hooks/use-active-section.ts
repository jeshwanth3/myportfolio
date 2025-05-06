'use client';

import { useState, useEffect, useRef } from 'react';
import type { RefObject } from 'react';

// Interface for the Intersection Observer options
interface ObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[]; // Threshold determines how much of the element must be visible
}

// The custom hook
export function useActiveSection(
  sectionIds: string[],
  // Adjusted rootMargin: Slightly increased negative top margin to -90px (header height + buffer).
  // Significantly reduced negative bottom margin from -40% to -25% to make highlighting switch faster when scrolling down.
  options: ObserverOptions = { threshold: 0.3, rootMargin: "-90px 0px -25% 0px" }
): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionElementsRef = useRef<Map<string, HTMLElement | null>>(new Map());

  useEffect(() => {
    // Ensure this runs only on the client
    if (typeof window === 'undefined') {
      return;
    }

    // Initialize the map of section elements
    sectionIds.forEach(id => {
       // Query selector expects ID selectors starting with #
       const element = document.querySelector(id);
       if (element instanceof HTMLElement) {
         sectionElementsRef.current.set(id, element);
       }
    });


    const callback: IntersectionObserverCallback = (entries) => {
      let currentActiveSectionId: string | null = null;
      // Find the entry that is most visible *above* the bottom margin threshold.
      // Prioritize entries that are intersecting and whose top is closest to or above the top margin trigger point.
      let bestMatchEntry: IntersectionObserverEntry | null = null;
      let minTop = Infinity;


      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          // Use entry.intersectionRatio to find the most visible element overall among intersecting ones
          // Also consider elements whose top is closer to the top margin trigger point
          if (rect.top < minTop ) { // Prioritize the one highest up on the screen first
             minTop = rect.top;
             bestMatchEntry = entry;
          }
        }
      });

      if (bestMatchEntry) {
        const element = bestMatchEntry.target as HTMLElement;
         // Map the element back to its ID (href)
         sectionElementsRef.current.forEach((el, id) => {
            if (el === element) {
               currentActiveSectionId = id;
            }
         });
      }

      // Update state only if the active section has changed
      if (currentActiveSectionId && currentActiveSectionId !== activeSection) {
         setActiveSection(currentActiveSectionId);
      } else if (!currentActiveSectionId && activeSection && window.scrollY < 200 ) {
         // Optional: Clear active section if near the top and nothing is intersecting prominently
         // Keep #summary active if near top
         if (activeSection !== '#summary') setActiveSection('#summary');
      } else if (!currentActiveSectionId && activeSection && window.scrollY > (document.documentElement.scrollHeight - window.innerHeight - 200)) {
          // If scrolled near the bottom and nothing else is active, highlight contact
          if (activeSection !== '#contact') setActiveSection('#contact');
      }
    };

    // Disconnect previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Use requestIdleCallback to defer observer initialization slightly, potentially improving initial load performance.
    const initObserver = () => {
        observerRef.current = new IntersectionObserver(callback, options);
        const observer = observerRef.current; // Local variable for cleanup

        // Observe each section element
        sectionElementsRef.current.forEach(element => {
        if (element) {
            observer.observe(element);
        }
        });
    }

    // Check if requestIdleCallback is supported
    if ('requestIdleCallback' in window) {
      requestIdleCallback(initObserver);
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(initObserver, 1);
    }


    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      observerRef.current = null;
    };
     // Rerun effect if sectionIds or options change (though usually they don't)
     // ActiveSection is excluded because we don't want to rerun the effect when state updates
  }, [sectionIds, options]); // Removed activeSection dependency


  return activeSection;
}
