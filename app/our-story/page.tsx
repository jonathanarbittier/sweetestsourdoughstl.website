import type { Metadata } from "next";
import EditorialPhoto from "../EditorialPhoto";
import OrderCTA from "../OrderCTA";

export const metadata: Metadata = {
  title: "Our Story | Sweets & Sourdough",
  description: "Meet Sweets & Sourdough, a neighborhood micro bakery serving small-batch loaves and sweet treats in Creve Coeur, Missouri.",
};

export default function OurStoryPage() {
  return (
    <>
      <div className="editorial-page section-shell">
        <section className="editorial-split story-introduction" aria-labelledby="story-heading">
          <div className="editorial-copy">
            <p className="editorial-eyebrow">Our story</p>
            <h1 id="story-heading">Small bakery.<br />Big sourdough love.</h1>
            <p>Sweets &amp; Sourdough is a neighborhood micro bakery serving fresh loaves and sweet treats from a roadside cart in Creve Coeur.</p>
            <div className="story-draft">
              <p className="editorial-eyebrow">Temporary story copy</p>
              <p>[Add a short introduction from the founder, in their own words.]</p>
            </div>
          </div>
          <EditorialPhoto src="/images/sweetest-sourdough/SweetestSourdoughSTL_2nd_-67.webp" alt="The founder and a group of neighbors smiling together in front of the bakery carts" aspectRatio="4 / 3" eager />
        </section>

        <section className="editorial-split story-chapter" aria-labelledby="beginnings-heading">
          <EditorialPhoto src="/images/sweetest-sourdough/SweetestSourdoughSTL_2nd_-46.webp" alt="The founder laughing with a customer beside the bakery cart" position="48% center" />
          <div className="editorial-copy">
            <p className="editorial-eyebrow">Behind the bakes</p>
            <h2 id="beginnings-heading">A story to share</h2>
            <div className="story-draft">
              <p className="editorial-eyebrow">Temporary story copy</p>
              <p>[Share how the bakery began and what inspired the first bakes.]</p>
            </div>
            <div className="story-draft">
              <h3>Life around the cart</h3>
              <p>[Add a favorite memory of the cart and the people who gather here.]</p>
            </div>
          </div>
        </section>
        <section className="editorial-split story-chapter" aria-label="Life and community around the cart">
          <EditorialPhoto src="/images/sweetest-sourdough/SweetestSourdoughSTL_2nd_-48.webp" alt="The founder and a customer looking over the bakes at the stocked cart" aspectRatio="3 / 2" />
          <EditorialPhoto src="/images/sweetest-sourdough/SweetestSourdoughSTL_2nd_-67.webp" alt="The founder and a group of neighbors smiling together in front of the bakery carts" aspectRatio="3 / 2" />
        </section>
      </div>
      <OrderCTA />
    </>
  );
}
