import { Button } from "react-daisyui";
import Code from "./Code";

export default function VTrace() {
  return (
    <div className="grid-cols-[minmax(0,1fr)]">
      <div className="text-center">
        <div>
          <div className="text-6xl font-bold font-serif">Bring clarity to your AI workflow</div>
          <p className="pt-6 pb-1 text-lg font-mono">Code from local workspace. Run on GPUs with one click.</p>
          <p className="pb-1 text-lg font-mono">Rerun on same or different machines. Track all runs.</p>
          <p className="pb-3 text-lg font-mono">Visualize parameters. Evaluate. Fine-tune.</p>
          <div className="w-fit mx-auto text-left font-mono"><Code /></div>
          <Button className="mt-6 text-xl font-bold font-mono text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
