'use client';

import { Download } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { generatePDF } from '@/lib/utils/pdf';
import { CVData } from '@/types/cv';
import { Button } from '@/components/ui/button';


interface DownloadButtonProps {
  data: CVData;
  className?: string;
}

export function DownloadButton({ data, className }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const blob = await generatePDF(data);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${data.name.toLowerCase().replace(/\s+/g, '-')}-resume.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      variant="default"
      size="lg"
      className={cn(
        'group gap-2',
        className
      )}
    >
      <Download
        className={cn(
          'h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5',
          { 'animate-bounce': isDownloading }
        )}
      />
      <span>
        {isDownloading ? 'Generating PDF...' : 'Download CV'}
      </span>
    </Button>
  );
}