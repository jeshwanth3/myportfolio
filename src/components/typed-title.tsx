"use client";

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTitleProps {
  className?: string;
}

export function TypedTitle({ className }: TypedTitleProps) {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: ['Product Manager', 'Business Analyst'],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
      backDelay: 2000,
      startDelay: 500,
      cursorChar: '|',
      showCursor: true,
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    <div className={className}>
      <span ref={el}></span>
    </div>
  );
}
