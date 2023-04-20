import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { post } from "@/types/post";

export async function getStaticProps() {
  // Get all files from posts dir
  const files = fs.readdirSync(path.join("src/posts"));

  // Get slugs and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const getMarkdownWithMeta = fs.readFileSync(
      path.join("src/posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(getMarkdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

type homeType = {
  posts: post[];
};

export default function Home({ posts }: homeType) {
  return (
    <>
      <section className="">
        {posts.map((post, index) => (
          <h1 key={index}>{post.slug}</h1>
        ))}
      </section>
    </>
  );
}
