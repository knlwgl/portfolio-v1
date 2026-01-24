import { BlogPosts } from "app/components/posts";
import { Projects } from "./components/proj";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Kunal Wagle
      </h1>
      <p className="mb-4">
        {`I'm Kunal, a CS student at Northeastern graduating this May. I'm passionate about building scalable, practical systems - the kind that handle millions of users and solve real problems. My interests span distributed systems, backend engineering, and machine learning, and I love projects where I can see tangible impact. At Cisco, I built AI agents for network troubleshooting; in research, I explored privacy implications of fairness constraints in ML. Now I'm looking for new grad SWE opportunities where I can keep building things that matter.`}
      </p>
      <h2 className="mb-4 text-l font-semibold tracking-tighter">Projects</h2>
      <div className="my-4">
        <Projects />
      </div>
      {/* <h2 className="mb-4 text-l font-semibold tracking-tighter">Posts</h2> */}
      <div className="my-4">
        <BlogPosts />
      </div>
    </section>
  );
}
