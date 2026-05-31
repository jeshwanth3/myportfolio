"use client";

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTitleProps {
  className?: string;
  text?: string;
  glowColor?: string;
  typingDelay?: number;
  style?: React.CSSProperties;
}

export function TypedTitle({ 
  className, 
  text = 'Product Manager',
  glowColor = 'var(--primary)',
  typingDelay = 1000 
}: TypedTitleProps) {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [text],
      typeSpeed: 70, // Slightly slower for better readability
      backSpeed: 50,
      startDelay: typingDelay,
      loop: false,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
      onComplete: (self: Typed) => {
        // Add glow effect after typing is complete
        if (el.current) {
          const element = el.current as HTMLElement;
          element.style.textShadow = `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}`;
          element.style.transition = 'text-shadow 0.3s ease-in-out';
          
          // Optional: Hide cursor after typing
          setTimeout(() => {
            if (self.cursor) {
              self.cursor.style.display = 'none';
            }
          }, 1000);
        }
      }
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [text, glowColor, typingDelay]);

  return (
    <div className={className}>
      <span 
        ref={el} 
        className="typed-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary"
        style={{
          WebkitBackgroundClip: 'text',
          backgroundSize: '200% auto',
        }}
      />
    </div>
  );
}
