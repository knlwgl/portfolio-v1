import Link from "next/link";
import { getExperiences } from "app/exp/utils";
import { formatDate } from "app/lib/utils";
import { EmptySection } from "./empty";

export function Experiences({ limit = -1 }) {
  let allExps = getExperiences();
  if (allExps.length === 0) {
    return <EmptySection section={"experiences"} />;
  }
  if (limit === -1) limit = allExps.length;
  else limit = Math.min(limit, allExps.length);
  return (
    <div>
      {allExps
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
            href={`/exp/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[150px] tabular-nums">
                {formatDate(post.metadata.startedOn, false).replace(" 1", "")}
                {post.metadata.finishedOn !== undefined &&
                  " - " +
                    formatDate(post.metadata.finishedOn, false).replace(
                      " 1",
                      ""
                    )}
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
