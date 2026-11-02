"use client";

import Image from "next/image";
import { useState } from "react";

type InstagramPost = {
  url: string;
  image: string | null;
  alt: string;
  kind: "photo" | "reel";
};

// Public posts and matching local images verified on November 1, 2026.
// Use a still image and kind: "reel" for videos. A null image shows a replacement label.
const instagramPosts: InstagramPost[] = [
  {
    url: "https://www.instagram.com/p/DfNbDa-FosD/",
    image: "/images/instagram/DfNbDa-FosD.jpg",
    alt: "Sweets & Sourdough Thanksgiving menu announcement with an autumn bow",
    kind: "photo",
  },
  {
    url: "https://www.instagram.com/p/De9z7Z5xd0R/",
    image: "/images/instagram/De9z7Z5xd0R.jpg",
    alt: "Sourdough bread and cookie giveaway on a blue gingham background",
    kind: "photo",
  },
  {
    url: "https://www.instagram.com/p/De7b-twBnq3/",
    image: "/images/instagram/De7b-twBnq3.jpg",
    alt: "Local beekeeper Mike Ferguson standing beside the stocked bakery cart",
    kind: "photo",
  },
  {
    url: "https://www.instagram.com/p/DfFJw6Flro-/",
    image: "/images/instagram/DfFJw6Flro-.jpg",
    alt: "Halloween bakery illustration reading This house is haunted by carbs",
    kind: "photo",
  },
  {
    url: "https://www.instagram.com/p/Der2FdvholN/",
    image: "/images/instagram/Der2FdvholN.jpg",
    alt: "Autumn and holiday cart schedule displayed over a photo of the bakery cart",
    kind: "photo",
  },
  {
    url: "https://www.instagram.com/p/Dd1ZJ44BUI1/",
    image: "/images/instagram/Dd1ZJ44BUI1.jpg",
    alt: "Sourdough loaf, cookies and biscuits giveaway with a blue illustrated bow",
    kind: "photo",
  },
];

export default function GalleryCarousel() {
  const [failedImages, setFailedImages] = useState<Set<string>>(() => new Set());
  const posts = instagramPosts
    .filter((post) => /^https:\/\/(?:www\.)?instagram\.com\/(?:p|reel)\/[A-Za-z0-9_-]+\/(?:\?[^#]*)?$/.test(post.url))
    .slice(0, 6);

  if (posts.length === 0) return null;

  return (
    <div className="instagram-carousel">
      <div
        className="instagram-feed"
        id="instagram-posts"
        role="region"
        aria-label="Around the cart Instagram posts"
        aria-roledescription="carousel"
        tabIndex={0}
      >
        {/* Equal groups include a trailing gap, so translating by half the track
            joins the duplicate to the original without a visible reset. */}
        <div className="instagram-rail">
          {[0, 1].map((copy) => (
            <div className="instagram-set" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {posts.map((post, index) => (
                <div className="instagram-post" key={post.url} role="group" aria-label={`Instagram post ${index + 1} of ${posts.length}`}>
                  <a className="instagram-card" href={post.url} target="_blank" rel="noopener noreferrer" tabIndex={copy === 0 ? 0 : -1} aria-label={`${post.alt}. View ${post.kind === "reel" ? "Reel" : "post"} on Instagram (opens in a new tab).`}>
                    {post.image && !failedImages.has(post.url) ? (
                      <Image
                        src={post.image}
                        alt={post.alt}
                        fill
                        sizes="(max-width: 759px) 78vw, (max-width: 1226px) 30vw, 360px"
                        onError={() => setFailedImages((previous) => new Set(previous).add(post.url))}
                      />
                    ) : (
                      <span className="instagram-replacement">Image to replace<span>View original post on Instagram</span></span>
                    )}
                    {post.kind === "reel" && (
                      <span className="instagram-play" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="m9 5 11 7-11 7Z" /></svg>
                      </span>
                    )}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
