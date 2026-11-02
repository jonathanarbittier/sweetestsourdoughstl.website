import Image from "next/image";

export default function EditorialPhoto({ src, alt, caption, position = "center", aspectRatio, eager = false }: {
  src: string;
  alt: string;
  caption?: string;
  position?: string;
  aspectRatio?: string;
  eager?: boolean;
}) {
  return (
    <figure className="editorial-photo">
      <div className="editorial-photo-image image-wrap" style={aspectRatio ? { aspectRatio } : undefined}>
        <Image src={src} alt={alt} fill quality={90} sizes="(max-width: 759px) 100vw, (max-width: 1434px) 46vw, 610px" loading={eager ? "eager" : "lazy"} style={{ objectPosition: position }} />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
