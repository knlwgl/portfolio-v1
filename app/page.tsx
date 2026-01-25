import { BlogPosts } from "app/components/posts";
import { Projects } from "./components/proj";
import { Experiences } from "./components/exp";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <div className="mb-4 flex justify-center items-center">
        <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden">
          <Image
            src="/images/profile.jpg"
            alt="Kunal"
            fill
            className="object-cover"
            sizes="250px"
          />
        </div>
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hey, I'm Kunal Wagle!
      </h1>
      <p className="mb-4">
        {`I'm a CS student at Northeastern graduating this May, passionate about building scalable, practical systems - the kind that handle millions of users and solve real problems. My interests span distributed systems, backend engineering, and machine learning, and I love projects where I can see tangible impact. At Cisco, I built AI agents for network troubleshooting; in research, I explored privacy implications of fairness constraints in ML. Now I'm looking for new grad SWE opportunities where I can keep building things that matter.`}
      </p>
      <h2 className="mb-4 text-l font-semibold tracking-tighter">
        Latest Experiences
      </h2>
      <div className="my-4">
        <Experiences limit={3} />
      </div>
      <h2 className="mb-4 text-l font-semibold tracking-tighter">
        Latest Projects
      </h2>
      <div className="my-4">
        <Projects limit={3} />
      </div>
      <h2 className="mb-4 text-l font-semibold tracking-tighter">
        Latest Posts
      </h2>
      <div className="my-4">
        <BlogPosts limit={3} />
      </div>
    </section>
  );
}
