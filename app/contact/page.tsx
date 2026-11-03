import type { Metadata } from "next";
import Image from "next/image";
import { INSTAGRAM_URL } from "../site-links";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | Sweets & Sourdough",
  description: "Find Sweets & Sourdough on Instagram or visit the roadside cart in Creve Coeur, Missouri.",
};

export default function ContactPage() {
  return (
    <div className={`${styles.page} section-shell`}>
      <div className={styles.layout}>
        <div className={styles.details}>
          <section aria-labelledby="contact-details-heading">
            <h1 id="contact-details-heading">Contact</h1>
            <dl className={styles.contactList}>
              <div>
                <dt>Email</dt>
                <dd>
                  {/* Temporary placeholder: replace with the verified public email before making this a mailto link. */}
                  <span>hello@example.com</span>
                  <small>Temporary placeholder</small>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  {/* Temporary placeholder: replace with the verified public number before making this a tel link. */}
                  <span>(000) 000-0000</span>
                  <small>Temporary placeholder</small>
                </dd>
              </div>
              <div>
                <dt>Instagram</dt>
                <dd><a className="text-link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">@sweetestsourdoughstl</a></dd>
              </div>
            </dl>
          </section>

          <section className={styles.visit} aria-labelledby="visit-heading">
            <h2 id="visit-heading">Visit the cart</h2>
            <dl className={styles.visitList}>
              <div><dt>Where</dt><dd>Off Creve Coeur Mill Rd.<br />Creve Coeur, Missouri</dd></div>
              <div><dt>When</dt><dd>Saturday + Sunday<br />8am–3pm</dd></div>
            </dl>
          </section>
        </div>

        <div className={`${styles.photo} image-wrap`}>
          <Image src="/images/sweetest-sourdough/SweetestSourdoughSTL_2nd_-13.webp" alt="The Sweets & Sourdough cart stocked with baked goods beside the neighborhood road and trees" fill quality={90} loading="eager" sizes="(max-width: 759px) 100vw, (max-width: 1434px) 34vw, 420px" />
        </div>
      </div>
    </div>
  );
}
