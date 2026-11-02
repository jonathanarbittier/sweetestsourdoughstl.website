import { HOTPLATE_URL } from "./site-links";

export default function OrderCTA() {
  return (
    <section className="preorder" aria-labelledby="order-heading">
      <div className="stripe-band" aria-hidden="true" />
      <div className="preorder-inner">
        <div className="loaf-doodle" aria-hidden="true"><span /><span /><span /></div>
        <h2 id="order-heading">Your weekend loaf<br />is waiting</h2>
        <p>See this week’s bakes and preorder your favorites on Hotplate.</p>
        <a className="button" href={HOTPLATE_URL} target="_blank" rel="noopener noreferrer">Order Now</a>
      </div>
    </section>
  );
}
