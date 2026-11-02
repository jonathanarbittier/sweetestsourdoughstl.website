import Link from "next/link";
import SiteLogo from "./SiteLogo";
import { HOTPLATE_URL, INSTAGRAM_URL, SITE_NAV_LINKS } from "./site-links";

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-stripes" aria-hidden="true"></div>
      <div className="footer-inner section-shell">
        <SiteLogo />
        <div className="footer-details"><p>Micro Bakery<br />Creve Coeur, Missouri</p><p>Saturday + Sunday<br />8am–3pm</p></div>
        <nav className="footer-links" aria-label="Footer navigation">
          {SITE_NAV_LINKS.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={HOTPLATE_URL} target="_blank" rel="noopener noreferrer">Order Now</a>
        </nav>
        <p className="footer-note">Roadside cart with big sourdough love!</p>
      </div>
    </footer>
  );
}
