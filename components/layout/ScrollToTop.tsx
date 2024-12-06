'use client';

import { useState, useEffect } from 'react';
import { ArrowUpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          className="fixed bottom-5 right-4 p-2 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUpCircle className="h-6 w-6" />
        </Button>
      )}
    </>
  );
}