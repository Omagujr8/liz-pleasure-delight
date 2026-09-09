const reviews = [
  {
    text: "The peanuts are so crunchy and tasty. I couldn't stop eating them!",
    name: "Happy Customer",
  },
  {
    text: "Their popcorn is perfect for movie nights. Absolutely delicious.",
    name: "Happy Customer",
  },
  {
    text: "Everything was fresh and beautifully packaged. I'll definitely order again.",
    name: "Happy Customer",
  },
];

function Reviews() {
  return (
    <section className="reviews" id="reviews">

      <div className="section-heading">
        <span className="eyebrow">CUSTOMER LOVE</span>

        <h2>
          Don't just take
          <span> our word for it.</span>
        </h2>
      </div>

      <div className="review-grid">

        {reviews.map((review, index) => (
          <article className="review-card" key={index}>

            <div className="stars">
              ★★★★★
            </div>

            <p>
              "{review.text}"
            </p>

            <strong>
              — {review.name}
            </strong>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Reviews;