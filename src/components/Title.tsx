export default function Title({ text }: { text: string }) {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold">{text}</h2>
    </div>
  );
}
