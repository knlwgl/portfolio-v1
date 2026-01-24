import { Experiences } from "app/components/exp";

export const metadata = {
  title: "Experiences",
  description: "What have I done professionally?",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Experiences
      </h1>
      <Experiences />
    </section>
  );
}
