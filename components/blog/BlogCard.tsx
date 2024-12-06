'use client';

import { BlogPost } from '@/types/blog';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar, Clock, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <>
    <Link href={`/blog/${post.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            <Clock className="h-4 w-4 ml-2" />
            <span>{post.readingTime}</span>
          </div>
          <h3 className="text-xl font-bold tracking-tight mb-2">{post.title}</h3>
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">{post.category}</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{post.description}</p>
          <div className="flex items-center gap-3 mt-4">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
    </>
  );
}