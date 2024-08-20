export default function Subtitle({ text, subtext }: { text: string, subtext:string }) {
  return (
    <div className="my-auto font-serif">
      <p className="text-4xl text-[#F7BE38]">{text}</p>
      <p className="text-xl">{subtext}</p>
    </div>
  );
}
