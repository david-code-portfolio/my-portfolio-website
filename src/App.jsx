import Navbar from "./Navbar"
import Hero from "./Hero"
import Services from "./Services"
import About from "./About"
import Contact from "./Contact"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <p className="note-text justify-self-center mt-32 mb-4 max-sm:text-xs text-center">Built with ❤️ using React & Tailwind CSS.</p>
    </>
  )
}

export default App