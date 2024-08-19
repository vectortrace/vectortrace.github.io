import { Button, Hero } from "react-daisyui";
import Code from "./Code";

export default function VTrace() {
  return (
    <Hero className="grid-cols-[minmax(0,1fr)]">
      <Hero.Content className="text-center">
        <div>
          <h1 className="text-6xl font-bold font-serif">Bring clarity to your AI workflow</h1>
          <p className="pt-6 pb-1 text-lg font-mono">Code from local workspace. Run on GPUs with one click.</p>
          <p className="pb-1 text-lg font-mono">Rerun on same or different machines. Track all runs.</p>
          <p className="pb-3 text-lg font-mono">Visualize parameters. Evaluate. Fine-tune.</p>
          <div className="w-fit mx-auto text-left font-mono"><Code /></div>
          <Button className="mt-16 outline">Get started</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
}
