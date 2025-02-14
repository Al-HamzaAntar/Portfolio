// import { getBlogPost, getBlogPosts } from '@/lib/blog';
// import { Calendar, Clock, Tag } from 'lucide-react';
// import Image from 'next/image';
// import { notFound } from 'next/navigation';
// import Navbar from "@/components/layout/Navbar";

// export function generateStaticParams() {
//   const posts = getBlogPosts();
//   return posts.map((post) => ({
//     id: post.id,
//   }));
// }

// export default function BlogPostPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const post = getBlogPost(params.id);

//   if (!post) {
//     notFound(); 
//   }

//   return (
//     <>
//       <Navbar />
//       <main className="container mx-auto px-4 py-20">
//       <article className="max-w-3xl mx-auto">
//         <div className="space-y-4 text-center">
//           <div className="flex items-center justify-center gap-2 text-muted-foreground">
//             <Calendar className="h-4 w-4" />
//             <time dateTime={post.publishedAt}>
//               {new Date(post.publishedAt).toLocaleDateString()}
//             </time>
//             <span className="mx-2">•</span>
//             <Clock className="h-4 w-4" />
//             <span>{post.readingTime}</span>
//           </div>
          
//           <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
          
//           <div className="flex items-center justify-center gap-2">
//             <Tag className="h-4 w-4 text-primary" />
//             <span className="text-muted-foreground">{post.category}</span>
//           </div>
//         </div>

//         <div className="relative h-[400px] w-full my-8">
//           <Image
//             src={post.image}
//             alt={post.title}
//             fill
//             className="object-cover rounded-lg"
//             priority
//           />
//         </div>

//         <div className="prose prose-lg dark:prose-invert max-w-none">
//           {post.content}
//         </div>

//         <div className="flex items-center gap-4 mt-12 border-t pt-6">
//           <Image
//             src={post.author.avatar}
//             alt={post.author.name}
//             width={48}
//             height={48}
//             className="rounded-full"
//           />
//           <div>
//             <p className="font-medium">Written by</p>
//             <p className="text-lg font-semibold">{post.author.name}</p>
//           </div>
//         </div>
//       </article>
//     </main>    
//     </>

//   );
// }