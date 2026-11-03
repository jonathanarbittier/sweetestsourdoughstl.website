import type { Metadata } from "next";
import EditorialPhoto from "../EditorialPhoto";
import OrderCTA from "../OrderCTA";

export const metadata: Metadata = {
  title: "Our Story | Sweets & Sourdough",
  description: "How a love of organic sourdough became a family-run roadside bakery and a weekend gathering place in Creve Coeur, Missouri.",
};

export default function OurStoryPage() {
  return (
    <>
      <div className="editorial-page story-page section-shell">
        <section className="editorial-split story-introduction" aria-labelledby="story-heading">
          <div className="editorial-copy">
            <h1 id="story-heading">The Story Behind Sweets &amp; Sourdough</h1>
            <div className="story-prose">
              <p>Sweets &amp; Sourdough started with a simple idea: to share our love of organic sourdough with our families, neighbors, and all the hungry soccer kids driving to and from Lou Fusz every weekend!</p>
            </div>
          </div>
          <EditorialPhoto src="/images/sweetest-sourdough/founder-with-loaf.webp" alt="The Sweets & Sourdough founder smiling and holding a bagged loaf at the cart" position="50% 30%" eager />
        </section>

        <section className="editorial-split story-chapter" aria-labelledby="beginnings-heading">
          <EditorialPhoto src="/images/sweetest-sourdough/roadside-cart.webp" alt="The stocked Sweets & Sourdough roadside cart" />
          <div className="editorial-copy">
            <h2 id="beginnings-heading">From a hobby to the cart</h2>
            <div className="story-prose">
              <p>After leaving my corporate career when we welcomed our second son, I found a new love for baking and the craft of sourdough. What started as a hobby quickly turned into something more. After years of gifting bread to family and friends (and making far more than our little household could eat!), we dreamed up the idea of selling fresh bread right here on the side of our neighborhood street.</p>
              <p>We found our little cart from the Salvation Army in downtown St. Louis; which was an antique wardrobe. With a little creativity, lots of hard work, and help from my husband, we transformed it into the sweet self-serve roadside bakery you see today.</p>
            </div>
          </div>
        </section>

        <section className="editorial-split story-chapter" aria-labelledby="family-heading">
          <div className="editorial-copy">
            <h2 id="family-heading">The family behind it</h2>
            <div className="story-prose">
              <p>But the real magic is the family behind it. Our oldest loves making coffee for customers, our youngest is the official taste tester, my husband keeps everything running behind the scenes, and I’m usually covered in flour making it all happen!</p>
              <p>Every Saturday and Sunday, we open our little cart with one hope: to share delicious, thoughtfully made organic sourdough breads and treats with our community.</p>
            </div>
          </div>
          <EditorialPhoto src="/images/sweetest-sourdough/packaged-biscuits.webp" alt="Bagged sourdough biscuits displayed at the cart" position="50% 55%" />
        </section>

        <section className="editorial-split story-chapter" aria-labelledby="community-heading">
          <EditorialPhoto src="/images/sweetest-sourdough/neighbors-at-cart.webp" alt="The founder and a group of neighbors smiling together in front of the bakery carts" aspectRatio="3 / 2" />
          <div className="editorial-copy">
            <h2 id="community-heading">A little more than bread</h2>
            <div className="story-prose">
              <p>Somewhere along the way, this little cart became so much more than a place to buy bread. It’s become a place for familiar faces, new friendships, weekend traditions, and a little joy in the middle of our busy lives.</p>
              <p>We’re so grateful for every person who stops by, supports our family, and makes this dream possible.</p>
              <p className="story-closing">Small cart, big dreams, fresh bread, full hearts. From our family to yours, we’re so happy you’re here!</p>
            </div>
          </div>
        </section>
      </div>
      <OrderCTA />
    </>
  );
}
