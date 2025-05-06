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
  // Adjusted rootMargin: Decreased negative bottom margin to -40% to improve accuracy of highlighting the current section.
  options: ObserverOptions = { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
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
      // Find the entry that is intersecting and is highest up on the page
      let currentActiveSection: string | null = null;
      let minTop = Infinity;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const rect = element.getBoundingClientRect();
          // Prioritize the element whose top is closest to the top margin trigger point (-80px)
          // Only consider elements whose top is above the middle of the viewport (or a bit higher)
          // to prevent premature highlighting of the next section.
          const triggerPoint = options.rootMargin ? parseInt(options.rootMargin.split(' ')[0], 10) : 0; // -80px
          // Check if the element's top is within a reasonable range from the trigger point
          // and also significantly visible (top part is above, say, 45% viewport height)
          if (rect.top <= (window.innerHeight * 0.45) && rect.top < minTop) {
             minTop = rect.top;
             // Map the element back to its ID (href)
             sectionElementsRef.current.forEach((el, id) => {
                if (el === element) {
                   currentActiveSection = id;
                }
             });
          }
        }
      });

       // Fallback: If no section meets the criteria above but one *is* intersecting,
       // pick the topmost intersecting one as a fallback.
       if (!currentActiveSection) {
         let fallbackTop = Infinity;
         entries.forEach(entry => {
           if (entry.isIntersecting) {
             const rect = entry.target.getBoundingClientRect();
             if (rect.top < fallbackTop) {
               fallbackTop = rect.top;
               sectionElementsRef.current.forEach((el, id) => {
                 if (el === entry.target) {
                   currentActiveSection = id;
                 }
               });
             }
           }
         });
       }


      // Update state only if the active section has changed
      if (currentActiveSection && currentActiveSection !== activeSection) {
         setActiveSection(currentActiveSection);
      } else if (!currentActiveSection && activeSection && window.scrollY < 200 ) {
         // Optional: Clear active section if near the top and nothing is intersecting prominently
         // Keep #summary active if near top
         if (activeSection !== '#summary') setActiveSection('#summary');
      }
    };

    // Disconnect previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(callback, options);
    const observer = observerRef.current; // Local variable for cleanup

    // Observe each section element
    sectionElementsRef.current.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup function
    return () => {
      if (observer) {
        observer.disconnect();
      }
      observerRef.current = null;
    };
     // Rerun effect if sectionIds or options change (though usually they don't)
     // ActiveSection is excluded because we don't want to rerun the effect when state updates
  }, [sectionIds, options]); // Removed activeSection dependency


  return activeSection;
}
