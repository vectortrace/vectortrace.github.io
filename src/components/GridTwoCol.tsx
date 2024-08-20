
export default function TwoColContainer({
  children,
}: {
  children: JSX.Element[]
}) {
  return <div className="mb-3"><div className="grid gap-8 grid-cols-1 md:grid-cols-[1fr_1fr] p-5">{children}</div></div>
}
