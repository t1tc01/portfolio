import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"
import SubmitForm from "./components/SubmitForm"

function App() {
  return (
    
      <div className="flex justify-center items-center flex-col bg-[#FBF8CC] ">
        <NavBar />
        <Hero />
        <About />
        <Work/>
        <Contact/>
        <SubmitForm/>
      </div>
  )
}

export default App
