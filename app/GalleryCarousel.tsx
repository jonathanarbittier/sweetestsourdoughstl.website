import Image from "next/image";

const posts = [
  {
    src: "/images/instagram-01.jpg",
    alt: "Heather rolling out the bakery cart in a September mood post",
    href: "https://www.instagram.com/reel/Dd2P3ZihvZX/",
    position: "50% 50%",
  },
  {
    src: "/images/instagram-02.jpg",
    alt: "Sourdough loaf, cookies and biscuits giveaway post",
    href: "https://www.instagram.com/p/Dd1ZJ44BUI1/",
    position: "50% 50%",
  },
  {
    src: "/images/instagram-03.jpg",
    alt: "Setting up the roadside cart with little helpers",
    href: "https://www.instagram.com/reel/DdyuVjYBHZj/",
    position: "50% 50%",
  },
  {
    src: "/images/instagram-04.jpg",
    alt: "A fully stocked cart of sourdough treats",
    href: "https://www.instagram.com/reel/DdxHyy9h6rY/",
    position: "50% 50%",
  },
  {
    src: "/images/instagram-05.jpg",
    alt: "Mom walk gathering at the Sweets & Sourdough cart",
    href: "https://www.instagram.com/reel/DdwySiYRnjV/",
    position: "50% 50%",
  },
  {
    src: "/images/instagram-06.jpg",
    alt: "Neighborhood play date at the roadside cart",
    href: "https://www.instagram.com/reel/DdwkmQhhdmt/",
    position: "50% 50%",
  },
];

export default function GalleryCarousel() {
  return (
    <div className="social-carousel">
      <div className="social-rail">
        {[0, 1].map((setIndex) => (
          <div className="social-set" aria-hidden={setIndex === 1} key={setIndex}>
            {posts.map((post) => (
              <a
                className="social-post image-wrap"
                href={post.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View Sweets & Sourdough on Instagram: ${post.alt}`}
                tabIndex={setIndex === 1 ? -1 : 0}
                key={`${post.src}-${setIndex}`}
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 759px) 62vw, 22vw"
                  style={{ objectPosition: post.position }}
                />
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
