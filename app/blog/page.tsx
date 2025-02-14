import { getBlogPosts } from '@/lib/blog';
import { BlogCard } from '@/components/blog/BlogCard';
import Navbar from "@/components/layout/Navbar";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
    <Navbar />
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Thoughts, stories and ideas about web development and technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
    </>
  );
}

