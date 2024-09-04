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
