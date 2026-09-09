import peanuts from "../assets/peanuts.jpeg";   
function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <span className="eyebrow">
            FRESHLY PREPARED SNACKS
          </span>

          <h1>
            Good snacks.
            <br />
            <span>Better cravings.</span>
          </h1>

          <p>
            Delicious peanuts, fluffy popcorn and irresistible
            snack mixes made to make every craving worth it.
          </p>

          <div className="hero-buttons">
            <a href="#order" className="btn btn-primary">
              Order Now
            </a>

            <a href="#menu" className="btn btn-outline">
              View Menu
            </a>
          </div>

          <div className="hero-note">
            <span>✦</span>
            Made with love in Abuja
          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-circle"></div>

          <div className="hero-badge">
            <strong>100%</strong>
            <span>DELICIOUS</span>
          </div>

          <img
            src={peanuts}
            alt="Liz Pleasure Delight peanuts"
            className="hero-product"
          />

          <div className="floating-card">
            <span>CRUNCHY</span>
            <strong>Peanuts</strong>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;