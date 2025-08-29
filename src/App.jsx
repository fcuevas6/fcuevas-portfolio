import './App.css'
import Hero from './Hero'
import NavBar from './NavBar'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Contact from './Contact'

function App() {
  return (
    <>
      <NavBar />
      <div id="home">
        <Hero />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  )
}

export default App
