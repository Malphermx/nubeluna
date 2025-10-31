import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { PromoBanner } from "./components/PromoBanner";
import { About } from "./components/About";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <PromoBanner />
      <Products />
      <About />
      <CallToAction />
      <Footer />
    </div>
  );
}
