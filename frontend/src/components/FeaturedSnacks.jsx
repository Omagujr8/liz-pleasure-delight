const snacks = [
  {
    name: "Peanuts",
    description: "Crunchy, tasty and freshly prepared.",
    image: "/images/peanuts-pouch.jpeg",
    className: "peanut-card",
  },
  {
    name: "Popcorn",
    description: "Light, fluffy and seriously addictive.",
    image: "/images/popcorn.jpeg",
    className: "popcorn-card",
  },
  {
    name: "Peanut Bottles",
    description: "Perfect for sharing or keeping all to yourself.",
    image: "/images/peanuts-bottle.jpeg",
    className: "bottle-card",
  },
];

function FeaturedSnacks() {
  return (
    <section className="featured" id="snacks">

      <div className="section-heading">
        <span className="eyebrow">WHAT'S CRUNCHING?</span>

        <h2>
          Pick your
          <span> pleasure.</span>
        </h2>

        <p>
          From crunchy peanuts to fluffy popcorn,
          there is something for every kind of craving.
        </p>
      </div>

      <div className="product-grid">

        {snacks.map((snack) => (
          <article
            className={`product-card ${snack.className}`}
            key={snack.name}
          >
            <div className="product-image">
              <img
                src={snack.image}
                alt={snack.name}
              />
            </div>

            <div className="product-info">
              <h3>{snack.name}</h3>

              <p>{snack.description}</p>

              <a href="#menu">
                Explore snack →
              </a>
            </div>
          </article>
        ))}

      </div>

    </section>
  );
}

export default FeaturedSnacks;