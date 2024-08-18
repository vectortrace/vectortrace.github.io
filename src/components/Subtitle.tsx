export default function Subtitle({ text }: { text: string }) {
  return (
    <div className="m-auto">
      <p className="py-6 text-center">{text}</p>
    </div>
  );
}
