import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { post } from "@/types/post";
import EachPost from "@/components/EachPost";

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
      posts: posts.sort((a, b) => {
        return (
          Number(new Date(b.frontmatter.date)) -
          Number(new Date(a.frontmatter.date))
        );
      }),
    },
  };
}

type homeType = {
  posts: post[];
};

export default function Home({ posts }: homeType) {
  return (
    <>
      <section className="md:w-[90%] w-[95%] mx-auto grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6">
        {posts.map((post, index) => (
          <EachPost key={index} post={post} />
        ))}
      </section>
    </>
  );
}
