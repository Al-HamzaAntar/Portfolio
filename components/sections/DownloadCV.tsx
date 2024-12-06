'use client';

import { FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DownloadCV() {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'developer-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button 
      onClick={handleDownload}
      variant="default"
      size="lg"
      className="bg-primary hover:bg-primary/90"
    >
      <FileDown className="mr-2 h-5 w-5" />
      Download CV
    </Button>
  );
}