import { CodeMockup } from "react-daisyui";

export default function Code() {
  return (
    <CodeMockup className="mx-auto mt-4">
      <CodeMockup.Line>vtrace run script.py --host=nvida_100x</CodeMockup.Line>
      <CodeMockup.Line className="text-warning">Spinning...</CodeMockup.Line>
      <CodeMockup.Line className="text-warning">Running...</CodeMockup.Line>
      <CodeMockup.Line className="text-success">Done!</CodeMockup.Line>
    </CodeMockup>
  );
}
