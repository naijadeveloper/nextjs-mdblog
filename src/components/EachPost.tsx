import Link from "next/link";
import type { post } from "@/types/post";

export default function EachPost({ post }: { post: post }) {
  return (
    <article className="p-2 bg-stone-700 rounded-md">
      <img
        className="object-cover h-[200px] w-[100%] mx-auto"
        src={post.frontmatter.cover_image}
        alt="blog-image"
      />

      <div className="flex justify-between mt-2">
        <span className="text-gray-900">Posted on {post.frontmatter.date}</span>
        <span className="italic text-gray-300">{post.frontmatter.author}</span>
      </div>

      <p className="text-xl h-[90px]">{post.frontmatter.excerpt}</p>

      <Link
        href="/blog/[slug]"
        as={`/blog/${post.slug}`}
        className="inline-block mt-2"
      >
        <button className="p-2 rounded-md bg-stone-900">Read More</button>
      </Link>
    </article>
  );
}
