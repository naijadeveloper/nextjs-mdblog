import Head from "next/head";

type metaType = {
  title: string;
  keywords: string;
  description: string;
};

export default function Meta({ title, keywords, description }: metaType) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
    </Head>
  );
}

Meta.defaultProps = {
  title: "NextJs Markdown Mini Blog",
  keywords: "nextjs, markdown, md, blog",
  description: "A blog website generated from markdown files",
};
