import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SnacksMix from "./pages/SnacksMix";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snacks-mix" element={<SnacksMix />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;