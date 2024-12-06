import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Modern Web Applications with Next.js',
    description: 'Learn how to leverage Next.js features to build scalable web applications',
    content: 'Next.js has revolutionized the way we build web applications...',
    publishedAt: '2024-03-20',
    readingTime: '5 min read',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
    }
  },
  {
    id: '2',
    title: 'Mastering TypeScript: Best Practices',
    description: 'Essential TypeScript patterns and practices for better code',
    content: 'TypeScript continues to grow in popularity among developers...',
    publishedAt: '2024-03-18',
    readingTime: '4 min read',
    category: 'TypeScript',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
    author: {
      name: 'Tom Joe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
    }
  },
];

export const getBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
  
};