import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { getProjects } from "app/projects/utils";
import { formatDate } from "app/lib/utils";
import { baseUrl } from "app/sitemap";

export async function generateStaticParams() {
  let posts = getProjects();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getProjects().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    startedOn: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/projects/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post = getProjects().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Project",
            headline: post.metadata.title,
            datePublished: post.metadata.startedOn,
            dateModified: post.metadata.startedOn,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/projects/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Kunal Wagle",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.startedOn)}
          {post.metadata.finishedOn !== undefined &&
            " - " +
              formatDate(post.metadata.finishedOn, false).replace(" 1", "")}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
