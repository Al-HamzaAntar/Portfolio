export interface BlogPost {
    id: string;
    title: string;
    description: string;
    content: string;
    publishedAt: string;
    readingTime: string;
    category: string;
    image: string;
    author: {
      name: string;
      avatar: string;
    };
  }