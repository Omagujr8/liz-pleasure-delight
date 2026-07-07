function Order() {
  return (
    <section className="page-section">
      <p className="eyebrow">Place your order</p>
      <h1>Order Your Snacks</h1>

      <form className="order-form">
        <label>
          Full Name
          <input type="text" placeholder="Enter your full name" />
        </label>

        <label>
          Phone Number
          <input type="tel" placeholder="Enter your phone number" />
        </label>

        <label>
          Delivery Address
          <textarea placeholder="Enter your delivery address" rows="4" />
        </label>

        <label>
          Order Notes
          <textarea placeholder="Any special request?" rows="3" />
        </label>

        <button type="submit" className="button">
          Continue to Checkout
        </button>
      </form>
    </section>
  );
}

export default Order;