function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-content">

        <span className="eyebrow">
          ABOUT LIZ PLEASURE DELIGHT
        </span>

        <h2>
          Simple snacks.
          <br />
          <span>Big pleasure.</span>
        </h2>

        <p>
          At Liz Pleasure Delight, we believe snacks should be
          more than something you eat between meals.
        </p>

        <p>
          That's why we prepare delicious peanuts, popcorn and
          snack mixes designed to make every bite enjoyable.
        </p>

        <a href="#order" className="text-link">
          Discover our story →
        </a>

      </div>

      <div className="about-logo">
        <img
          src="/images/logo.jpeg"
          alt="Liz Pleasure Delight logo"
        />
      </div>

    </section>
  );
}

export default About;