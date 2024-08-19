export default function Image({ src }: { src: string }) {
  return (
    <div className="w-full h-full">
      <img
        loading="lazy"
        decoding="async"
        width="1070"
        height="803"
        className="attachment-full size-full wp-image-792"
        alt=""
        srcSet={src}
        sizes="(max-width: 1070px) 100vw, 1070px"
        src="https://site.wandb.ai/nitropack_static/pfApWRihljemXzAqfjcIBKUphCWQwXRI/assets/images/optimized/rev-ccaa708/site.wandb.ai/wp-content/uploads/2023/07/personas-train-03.jpg"
      ></img>
    </div>
  );
}
