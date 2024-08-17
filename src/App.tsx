import About from "./components/About"
import Cards from "./components/Cards"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Introduction from "./components/Introduction"
import Navbar from "./components/Navbar"
import ProductionProcess from "./components/ProductionProcess"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Slider from "./components/Slider"

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <Introduction />
     <Projects />
     <ProductionProcess />
     <Services />
     <About />
     <Slider />
     <Cards />
     <Contact />
     <Footer />
    </>
  )
}

export default App
