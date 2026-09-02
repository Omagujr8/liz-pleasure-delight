import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Freshly prepared snacks</p>
          <h1>Crunch Into Happiness.</h1>
          <p>
            Enjoy tasty popcorn, premium peanuts, and satisfying snack mixes
            from Liz Pleasure Delight.
          </p>

          <div className="hero-buttons">
            <Link to="/order" className="button">
              Order Now
            </Link>
            <Link to="/menu" className="button button-outline">
              View Menu
            </Link>
          </div>
        </div>

        <div className="hero-snack-card">
          <p>Popcorn • Peanuts • Chips</p>
          <h2>Made for every craving.</h2>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Why choose us?</p>
        <h2>Simple snacks. Big flavour.</h2>

        <div className="feature-grid">
          <article>
            <h3>Fresh Ingredients</h3>
            <p>Quality peanuts and popcorn prepared with care.</p>
          </article>
          <article>
            <h3>Perfect for Every Occasion</h3>
            <p>Great for school, work, parties, gifts, and movie nights.</p>
          </article>
          <article>
            <h3>Easy Ordering</h3>
            <p>Choose your favourite snack and place an order in minutes.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default Home;