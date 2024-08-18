export default function TwoColContainer({
  children,
}: {
  children: JSX.Element[];
}) {
  return <div className="grid gap-8 grid-cols-[1fr_1fr] p-10">{children}</div>;
}
