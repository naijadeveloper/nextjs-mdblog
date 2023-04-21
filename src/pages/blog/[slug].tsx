import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import type { post } from "@/types/post";
import type { GetStaticProps, GetStaticPropsContext } from "next";

type postPageProps = post & {
  content: string;
};

/// Generate all paths
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("src/posts"));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

/// Pass all paths to staticProps
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const slug = context.params?.slug;
  const mdFile = fs.readFileSync(path.join("src/posts", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(mdFile);

  return {
    props: {
      slug,
      frontmatter,
      content,
    },
  };
};

/// Get props from staticProps
export default function PostPage({
  slug,
  frontmatter: { title, date, author, cover_image },
  content,
}: postPageProps) {
  return (
    <>
      <Link href="/">
        <button className="p-2 rounded-md bg-stone-300 text-stone-900 hover:bg-stone-200">
          Go back
        </button>
      </Link>

      <div className="text-stone-300 mt-5 w-[100%] md:w-[80%] lg:w-[60%] mx-auto">
        <h1 className="text-6xl p-px">{title}</h1>

        <div className="inline-block mt-4 p-px px-2 bg-stone-700 rounded-sm">
          Posted on {date} by <span className="italic">{author}</span>
        </div>

        <img
          className="h-[400px] w-[100%] object-cover mt-3 rounded-md"
          src={cover_image}
          alt="blog-image"
        />

        <div
          dangerouslySetInnerHTML={{ __html: marked(content) }}
          className="mt-8"
        ></div>
      </div>
    </>
  );
}
