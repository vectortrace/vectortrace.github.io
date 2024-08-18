export default function Section(props: { children: JSX.Element, bgColor: string }) {
    const className = `py-16 ${props.bgColor}`
    return <div className={className}>{props.children}</div>
}