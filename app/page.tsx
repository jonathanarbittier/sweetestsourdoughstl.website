import Image from "next/image";
import GalleryCarousel from "./GalleryCarousel";

function Button({ children, href = "#preorder", light = false }: { children: React.ReactNode; href?: string; light?: boolean }) {
  return (
    <a className={`button${light ? " button--light" : ""}`} href={href}>
      <span>{children}</span>
    </a>
  );
}

function BrandMark() {
  return (
    <a href="#top" className="brand" aria-label="Sweets and Sourdough home">
      <Image src="/images/sweets-sourdough-logo-badge.png" alt="Sweets & Sourdough" width={328} height={328} quality={95} />
    </a>
  );
}

const bakes = [
  {
    name: "Sourdough",
    description: "Naturally leavened loaves, baked in small batches for the weekend.",
    image: "/images/real-sourdough.webp",
    position: "50% 50%",
  },
  {
    name: "Cookies",
    description: "Sweet, small-batch treats packed up and ready for the neighborhood.",
    image: "/images/real-cookies.webp",
    position: "50% 52%",
  },
  {
    name: "Biscuits & weekend specials",
    description: "Buttery biscuits and rotating seasonal bakes from the weekend menu.",
    image: "/images/real-biscuits.webp",
    position: "50% 62%",
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#bakes">Shop</a>
          <a href="#story">Our Story</a>
          <a href="#cart">Find the Cart</a>
          <a href="#gallery">Instagram</a>
          <a href="#preorder" className="nav-cta">Preorder</a>
        </nav>
        <details className="mobile-menu">
          <summary className="menu-button" aria-label="Open menu"><span></span><span></span></summary>
          <nav aria-label="Mobile navigation">
            <a href="#preorder">Preorder <span>01</span></a>
            <a href="#cart">Find the cart <span>02</span></a>
            <a href="https://instagram.com/sweetestsourdoughstl">Instagram <span>03</span></a>
          </nav>
        </details>
      </header>

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
            <a className="text-link" href="https://maps.google.com/?q=Creve+Coeur+Mill+Rd,+Creve+Coeur,+Missouri" target="_blank" rel="noreferrer">Get directions</a>
          </div>
          <div className="cart-image image-wrap">
            <Image src="/images/real-cart.webp" alt="The real Sweets & Sourdough roadside bakery cart stocked with bread and treats" fill quality={90} sizes="(max-width: 760px) 100vw, 48vw" />
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
                <Image src={bake.image} alt={bake.name} fill quality={90} sizes="(max-width: 760px) 84vw, 33vw" style={{ objectPosition: bake.position }} />
              </div>
              <h3>{bake.name}</h3>
              <p>{bake.description}</p>
              <a href="#preorder" className="bake-order">Preorder</a>
            </article>
          ))}
        </div>
        <a className="text-link menu-link" href="#preorder">See this week’s preorder menu</a>
      </section>

      <section className="story" id="story">
        <div className="story-image image-wrap">
          <Image src="/images/real-story.webp" alt="Sweets & Sourdough baker Heather Tuttle greeting a customer" fill quality={90} sizes="(max-width: 759px) 100vw, 54vw" />
        </div>
        <div className="story-copy">
          <div>
            <h2>Small bakery.<br />Big sourdough love</h2>
          </div>
          <p>Sweets &amp; Sourdough is a neighborhood micro bakery serving fresh loaves and sweet treats from a roadside cart in Creve Coeur. Baked in small batches and made for the people who make a neighborhood feel like home.</p>
        </div>
      </section>

      <section className="gallery section-shell" id="gallery">
        <div className="section-heading gallery-heading">
          <div><h2>Around the cart</h2></div>
          <a className="gallery-follow" href="https://instagram.com/sweetestsourdoughstl" target="_blank" rel="noreferrer">Follow us</a>
        </div>
        <div className="gallery-intro">
          <p>Fresh bakes, familiar faces and weekends in Creve Coeur.</p>
          <span>@sweetestsourdoughstl</span>
        </div>
        <GalleryCarousel />
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

      <footer>
        <div className="footer-stripes" aria-hidden="true"></div>
        <div className="footer-inner section-shell">
          <BrandMark />
          <div className="footer-details"><p>Micro Bakery<br />Creve Coeur, Missouri</p><p>Saturday + Sunday<br />8am–3pm</p></div>
          <div className="footer-links"><a href="https://instagram.com/sweetestsourdoughstl">Instagram</a><a href="#preorder">Preorder</a></div>
          <p className="footer-note">Roadside cart with big sourdough love!</p>
        </div>
      </footer>
    </main>
  );
}
