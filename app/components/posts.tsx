import Link from "next/link";
import { getBlogPosts } from "app/blog/utils";
import { formatDate } from "app/lib/utils";
import { EmptySection } from "./empty";

export function BlogPosts({ limit = -1 }) {
  let allBlogs = getBlogPosts();
  if (allBlogs.length === 0) {
    return <EmptySection section={"blog posts"} />;
  }
  if (limit === -1) limit = allBlogs.length;
  else limit = Math.min(limit, allBlogs.length);
  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.startedOn) > new Date(b.metadata.startedOn)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.startedOn, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
