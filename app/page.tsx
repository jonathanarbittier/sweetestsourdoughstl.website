import Image from "next/image";
import Link from "next/link";
import GalleryCarousel from "./GalleryCarousel";
import { HOTPLATE_URL } from "./site-links";

function Button({ children, href = HOTPLATE_URL, light = false }: { children: React.ReactNode; href?: string; light?: boolean }) {
  return (
    <a className={`button${light ? " button--light" : ""}`} href={href} target="_blank" rel="noopener noreferrer">
      <span>{children}</span>
    </a>
  );
}

const bakes = [
  {
    name: "Sourdough",
    description: "Naturally leavened loaves, baked in small batches for the weekend.",
    image: "/images/sweetest-sourdough/SweetestSourdoughSTL_-4.webp",
    alt: "A crusty sourdough loaf in a paper bag with the Sweets & Sourdough sticker",
    position: "50% 50%",
  },
  {
    name: "Cookies",
    description: "Sweet, small-batch treats packed up and ready for the neighborhood.",
    image: "/images/sweetest-sourdough/cookie-box-assortment.webp",
    alt: "An assortment of cookies in a windowed bakery box tied with blue and white string",
    position: "50% 50%",
  },
  {
    name: "Biscuits & weekend specials",
    description: "Buttery biscuits and rotating seasonal bakes from the weekend menu.",
    image: "/images/sweetest-sourdough/SweetestSourdoughSTL_-44.webp",
    alt: "A close-up assortment of biscuits, muffins, and other baked goods",
    position: "60% 50%",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image image-wrap">
          <Image src="/images/real-hero.webp" alt="Sweets & Sourdough roadside carts with the baker and a customer" fill priority quality={90} sizes="100vw" />
        </div>
        <div className="hero-shade" aria-hidden="true"></div>
        <div className="hero-copy">
          <h1>A little joy, baked into <i>every</i> weekend</h1>
          <p className="intro">Small batch sourdough and sweet bakes, made for weekends around the neighborhood.</p>
          <Button light>Preorder this weekend</Button>
        </div>
      </section>

      <section className="find-cart" id="cart">
        <div className="cart-inner section-shell">
          <div className="cart-copy">
            <h2>Find the cart</h2>
            <div className="info-list">
              <div><span>When</span><strong>Saturday + Sunday<br />8am–3pm</strong></div>
              <div><span>Where</span><strong>Off Creve Coeur Mill Rd.<br />Creve Coeur, Missouri</strong></div>
            </div>
          </div>
          <div className="cart-image image-wrap">
            <Image src="/images/sweetest-sourdough/SweetestSourdoughSTL_-7.webp" alt="The Sweets & Sourdough cart with branded signs, bagged loaves, and baked treats" fill quality={90} sizes="(max-width: 760px) 100vw, 48vw" style={{ objectPosition: "50% 40%" }} />
            <div className="cart-sign"><span>Bread</span><i>&amp;</i><span>Treats</span></div>
          </div>
        </div>
      </section>

      <section className="bakes section-shell" id="bakes">
        <div className="section-heading">
          <div><h2>What’s baking</h2></div>
          <p className="desktop-note">A few neighborhood favorites,<br />baked fresh each weekend.</p>
        </div>
        <div className="bakes-row">
          {bakes.map((bake) => (
            <article className="bake-card" key={bake.name}>
              <div className="bake-image image-wrap">
                <Image src={bake.image} alt={bake.alt} fill quality={90} sizes="(max-width: 760px) 84vw, 33vw" style={{ objectPosition: bake.position }} />
              </div>
              <h3>{bake.name}</h3>
              <p>{bake.description}</p>
              <a href={HOTPLATE_URL} className="bake-order" target="_blank" rel="noopener noreferrer">Preorder</a>
            </article>
          ))}
        </div>
        <a className="text-link menu-link" href={HOTPLATE_URL} target="_blank" rel="noopener noreferrer">See this week’s preorder menu</a>
      </section>

      <section className="story" id="story">
        <div className="story-image image-wrap">
          <Image src="/images/sweetest-sourdough/SweetestSourdoughSTL_2nd_-67.webp" alt="The founder and a group of neighbors smiling together in front of the bakery carts" fill quality={90} sizes="(max-width: 759px) 100vw, 54vw" style={{ objectPosition: "50% 50%" }} />
        </div>
        <div className="story-copy">
          <div>
            <h2>Small bakery.<br />Big sourdough love</h2>
          </div>
          <div className="story-preview">
            <p>Sweets &amp; Sourdough is a neighborhood micro bakery serving fresh loaves and sweet treats from a roadside cart in Creve Coeur. Baked in small batches and made for the people who make a neighborhood feel like home.</p>
            <Link className="text-link" href="/our-story">Read Our Story</Link>
          </div>
        </div>
      </section>

      <section className="gallery section-shell" id="gallery">
        <div className="section-heading gallery-heading">
          <div><h2>Around the cart</h2></div>
        </div>
        <div className="gallery-intro">
          <p>Fresh bakes, familiar faces and weekends in Creve Coeur.</p>
        </div>
        <GalleryCarousel />
        <a className="gallery-follow gallery-follow--below" href="https://instagram.com/sweetestsourdoughstl" target="_blank" rel="noreferrer">Follow @sweetestsourdoughstl</a>
      </section>

      <section className="preorder" id="preorder">
        <div className="stripe-band" aria-hidden="true"></div>
        <div className="preorder-inner">
          <div className="loaf-doodle" aria-hidden="true"><span></span><span></span><span></span></div>
          <h2>Your weekend loaf<br />is waiting</h2>
          <p>Preorder your favorites, then stop by the cart Saturday or Sunday.</p>
          <Button>Preorder for this weekend</Button>
        </div>
      </section>

    </>
  );
}
