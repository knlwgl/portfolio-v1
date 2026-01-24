import { Projects } from "app/components/proj";

export const metadata = {
  title: "Projects",
  description: "See some of my past work.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <Projects />
    </section>
  );
}
