export default function Video({ src, firstOnLgScreen = false }: { src: string, firstOnLgScreen?: boolean }) {
  return (
    <div className={`w-full h-0 relative pt-[56.25%] ${firstOnLgScreen ? 'md:order-first' : ''}`}>
      <iframe
        src={src}
        frameBorder="0"
        allow="fullscreen *"
        className="absolute w-full h-full border-[none] left-0 top-0"
      ></iframe>
    </div>
  );
}
