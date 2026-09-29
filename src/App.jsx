import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Story from './components/Story.jsx'
import Matchday from './components/Matchday.jsx'
import Kit from './components/Kit.jsx'
import Gallery from './components/Gallery.jsx'
import Join from './components/Join.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Story />
        <Matchday />
        <Kit />
        <Gallery />
        <Join />
      </main>
      <Footer />
    </>
  )
}
