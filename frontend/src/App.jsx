import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";

import bottles from "./assets/bottles.jpeg";
import chinChin from "./assets/chips.jpeg";
import logo from "./assets/logo.jpeg";
import peanuts from "./assets/peanuts.jpeg";
import popcorn from "./assets/popcorn.jpeg";
import api from "./services/api";

const slides = [
  {
    name: "Roasted Peanuts",
    tag: "Salted, crunchy, gone too fast",
    image: peanuts,
  },
  {
    name: "Buttered Popcorn",
    tag: "Popped fresh, packed warm",
    image: popcorn,
  },
  { name: "Chin Chin", tag: "Golden, crunchy, and bite-sized", image: chinChin },
];

const lineup = [
  {
    name: "Peanuts",
    description:
      "Roasted and salted, packed in foil bags or bottled for the long haul.",
    image: peanuts,
  },
  {
    name: "Popcorn",
    description: "Buttered, popped fresh, and boxed up while it is still warm.",
    image: popcorn,
    offset: true,
  },
  {
    name: "Chin Chin",
    description: "Golden, crunchy, and bite-sized, made for every craving.",
    image: chinChin,
  },
  {
    name: "Peanut Bottles",
    description:
      "Crunchy peanuts sealed fresh in bottles, perfect for sharing.",
    image: bottles,
  },
];

function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [orderError, setOrderError] = useState("");
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [selectedSnacks, setSelectedSnacks] = useState({});
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    phone: "",
    address: "",
    scheduledFor: "",
  });
  const activeSlide = slides[slideIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    api
      .get("/products/")
      .then(({ data }) => setProducts(data))
      .catch(() =>
        setOrderError(
          "The product service is unavailable. You can still contact us on WhatsApp.",
        ),
      );
  }, []);

  const showSlide = (index) =>
    setSlideIndex((index + slides.length) % slides.length);

  const updateQuantity = (name, change) => {
    setSelectedSnacks((current) => {
      const nextQuantity = Math.max((current[name] || 0) + change, 0);
      const next = { ...current };
      if (nextQuantity === 0) delete next[name];
      else next[name] = nextQuantity;
      return next;
    });
  };

  const setQuantity = (name, value) => {
    const quantity = Math.max(Number.parseInt(value, 10) || 0, 0);
    setSelectedSnacks((current) => {
      const next = { ...current };
      if (quantity === 0) delete next[name];
      else next[name] = quantity;
      return next;
    });
  };

  const updateOrderDetails = (event) => {
    const { name, value } = event.target;
    setOrderDetails((current) => ({ ...current, [name]: value }));
  };

  const submitOrder = (event) => {
    event.preventDefault();
    const selected = lineup.filter((item) => selectedSnacks[item.name]);
    setOrderError("");
    setOrderSubmitted(false);
    if (!selected.length) {
      setOrderError("Please select at least one snack.");
      return;
    }

    const orderItems = selected.map((item) => {
      const product = products.find(
        (candidate) =>
          candidate.name.toLowerCase().includes(item.name.toLowerCase()) ||
          item.name.toLowerCase().includes(candidate.name.toLowerCase()),
      );
      return {
        product_id: product?.id,
        quantity: selectedSnacks[item.name],
        name: item.name,
      };
    });
    if (orderItems.some((item) => !item.product_id)) {
      setOrderError(
        "One or more selected snacks is not available in the product catalog yet.",
      );
      return;
    }

    const snackLines = selected
      .map((item) => `${item.name} x ${selectedSnacks[item.name]}`)
      .join("%0A");
    const message = [
      "Hello Liz Pleasure Delight, I would like to place an order.",
      "",
      snackLines,
      "",
      `Name: ${orderDetails.name}`,
      `Phone: ${orderDetails.phone}`,
      `Address: ${orderDetails.address}`,
      `Preferred date: ${new Date(`${orderDetails.scheduledFor}T00:00:00`).toLocaleDateString()}`,
    ].join("%0A");
    const whatsappUrl = `https://wa.me/2348163426030?text=${message}`;

    api
      .post("/orders/", {
        customer_name: orderDetails.name,
        phone_number: orderDetails.phone,
        address: orderDetails.address,
        scheduled_date: orderDetails.scheduledFor,
        items: orderItems.map(({ product_id, quantity }) => ({
          product_id,
          quantity,
        })),
      })
      .then(() => {
        setOrderSubmitted(true);
        window.open(
          whatsappUrl,
          "_blank",
          "noopener,noreferrer,width=900,height=700",
        );
      })
      .catch(() => {
        setOrderError(
          "We could not save your order. Please try again or use WhatsApp directly.",
        );
      });
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Liz Pleasure Delight logo" />
            <span>Liz Pleasure Delight</span>
          </a>

          <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#lineup" onClick={() => setMenuOpen(false)}>
              Snacks
            </a>
            <a href="#story" onClick={() => setMenuOpen(false)}>
              Our Story
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>

          <div className="nav-actions">
            <a className="button button-primary nav-order" href="#contact">
              Order Now
            </a>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-reference container" id="home">
          <div className="hero-copy">
            <p className="eyebrow">THE CRUNCH YOU&apos;VE BEEN WAITING FOR</p>
            <h1>Little bites. Big delight.</h1>
            <p className="hero-description">
              Discover irresistible peanuts, freshly popped popcorn, and crunchy
              chin chin made to turn everyday moments into something special.
              One taste, and you&apos;ll understand the pleasure.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://wa.me/2348163426030"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on WhatsApp
              </a>
              <a className="button button-outline" href="#lineup">
                See the Lineup
              </a>
            </div>
            <div className="hero-facts">
              <div>
                <strong>3</strong>
                <span>snacks, zero shortcuts</span>
              </div>
              <div>
                <strong>Fresh</strong>
                <span>packed same day</span>
              </div>
              <div>
                <strong>Life Camp</strong>
                <span>Abuja</span>
              </div>
            </div>
          </div>

          <div className="showcase-wrap">
            <div className="showcase">
              <img src={activeSlide.image} alt={activeSlide.name} />
              <div className="showcase-caption">
                <strong>{activeSlide.name}</strong>
                <span>{activeSlide.tag}</span>
              </div>
              <button
                className="carousel-arrow carousel-prev"
                onClick={() => showSlide(slideIndex - 1)}
                aria-label="Previous product"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="carousel-arrow carousel-next"
                onClick={() => showSlide(slideIndex + 1)}
                aria-label="Next product"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="carousel-dots">
              {slides.map((slide, index) => (
                <button
                  key={slide.name}
                  className={index === slideIndex ? "active" : ""}
                  onClick={() => showSlide(index)}
                  aria-label={`Show ${slide.name}`}
                />
              ))}
            </div>
            <span className="showcase-badge">Absolute the best</span>
          </div>
        </section>

        <section className="story-band" id="story">
          <div className="container story-grid">
            <div className="story-image">
              <img src={bottles} alt="Peanuts packed in bottles" />
            </div>
            <div className="story-copy">
              <p className="eyebrow">WHY LIZ PLEASURE DELIGHT</p>
              <h2>We pack it like it is going straight to someone we love.</h2>
              <p>
                No warehouse sitting around. Every peanut is roasted, every
                kernel popped, close to the day it reaches you, sealed tight in
                bottles or bags.
              </p>
              <ul>
                <li>
                  <span />
                  <span className="story-point">
                    <strong>
                      Roasted in small batches so nothing sits stale on a shelf
                    </strong>
                  </span>
                </li>
                <li>
                  <span />
                  <span className="story-point">
                    <strong>Sealed the day it is made </strong>
                  </span>
                </li>
                <li>
                  <span />
                  <span className="story-point">
                    <strong>
                      Priced for sharing because one bag never lasts alone
                    </strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="lineup container" id="lineup">
          <div className="section-intro">
            <p className="eyebrow">WHAT IS CRUNCHING?</p>
            <h2>The full lineup</h2>
            <p>Three snacks, one obsession with getting the crunch right.</p>
          </div>
          <div className="lineup-grid">
            {lineup.map((item) => (
              <article
                className={`lineup-card ${item.offset ? "offset" : ""}`}
                key={item.name}
              >
                <div className="lineup-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="lineup-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <button
                    className="select-snack"
                    type="button"
                    onClick={() => updateQuantity(item.name, 1)}
                  >
                    {selectedSnacks[item.name]
                      ? "Added to order"
                      : "Add to order"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="order-panel container" id="order">
          <div className="order-panel-copy">
            <p className="eyebrow">PLAN YOUR ORDER</p>
            <h2>Pick your snacks and choose a date.</h2>
            <p>
              Select what you want, type the quantities, tell us where to send
              it, and choose when you would like it ready.
            </p>
          </div>
          <div className="available-snacks">
            <div className="available-snacks-heading">
              <h3>Available snacks</h3>
            </div>
            {products.length ? (
              <div className="available-snacks-grid">
                {products.map((product) => (
                  <div className="available-snack" key={product.id}>
                    <div>
                      <strong>{product.name}</strong>
                    </div>
                    <div className="available-snack-meta">
                      <b>NGN {Number(product.price).toLocaleString()}</b>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="available-snacks-empty">
                Loading available snacks...
              </p>
            )}
          </div>
          <div className="order-layout">
            <div className="order-selection">
              <h3>Your snacks</h3>
              {lineup.map((item) => (
                <div className="selection-row" key={item.name}>
                  <span>{item.name}</span>
                  <div className="quantity-control">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.name, -1)}
                      aria-label={`Remove one ${item.name}`}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="0"
                      value={selectedSnacks[item.name] || 0}
                      onChange={(event) =>
                        setQuantity(item.name, event.target.value)
                      }
                      aria-label={`${item.name} quantity`}
                    />
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.name, 1)}
                      aria-label={`Add one ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <form className="order-form" onSubmit={submitOrder}>
              <label>
                Name
                <input
                  name="name"
                  value={orderDetails.name}
                  onChange={updateOrderDetails}
                  required
                />
              </label>
              <label>
                Phone number
                <input
                  name="phone"
                  type="tel"
                  value={orderDetails.phone}
                  onChange={updateOrderDetails}
                  required
                />
              </label>
              <label>
                Delivery address
                <textarea
                  name="address"
                  value={orderDetails.address}
                  onChange={updateOrderDetails}
                  required
                />
              </label>
              <label>
                Preferred date
                <input
                  name="scheduledFor"
                  type="date"
                  value={orderDetails.scheduledFor}
                  onChange={updateOrderDetails}
                  min={new Date().toISOString().slice(0, 10)}
                  required
                />
              </label>
              {orderError && (
                <p className="order-message order-error">{orderError}</p>
              )}
              {orderSubmitted && (
                <p className="order-message order-success">
                  Order saved. WhatsApp is opening to confirm it.
                </p>
              )}
              <button className="button button-primary" type="submit">
                Continue on WhatsApp
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <img src={logo} alt="Liz Pleasure Delight logo" />
              <span>Liz Pleasure Delight</span>
            </div>
            <p>
              Peanuts, popcorn, and chin chin made fresh in Life Camp, Abuja.
              Absolute the best, say it, we will prove it.
            </p>
          </div>
          <div className="footer-contact">
            <p>
              <Phone size={18} /> 0816 342 6030
            </p>
            <p>
              <MapPin size={18} /> 1 Life Camp, Abuja
            </p>
          </div>
        </div>
        <div className="container footer-bottom">
          &copy; {new Date().getFullYear()} Liz Pleasure Delight. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
