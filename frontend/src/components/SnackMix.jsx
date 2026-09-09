function SnackMix() {
  return (
    <section className="mix-section">

      <div className="mix-image">
        <img
          src="/images/peanuts-bottle.jpeg"
          alt="Liz Pleasure Delight snacks"
        />
      </div>

      <div className="mix-content">

        <span className="eyebrow">
          MAKE IT YOURS
        </span>

        <h2>
          Mix it.
          <br />
          Match it.
          <br />
          <span>Love it.</span>
        </h2>

        <p>
          Can't choose just one? Create your own snack
          combination and enjoy the flavours you love most.
        </p>

        <a href="#order" className="btn btn-primary">
          Build Your Mix
        </a>

      </div>

    </section>
  );
}

export default SnackMix;