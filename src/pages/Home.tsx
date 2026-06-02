import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../components/About";
import Cards from "../components/Cards";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import ProductionProcess from "../components/ProductionProcess";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Slider from "../components/Slider";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTarget = params.get("scroll");
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300); // تاخیر کوتاه برای لود کامل
      }
    }
  }, [location]);
  return (
    <div>
     <Hero />
     <Introduction />
     <Projects />
     <ProductionProcess />
     <Services />
     <About />
     <Slider />
     <Cards />
     <Contact />
    </div>
  )
}
