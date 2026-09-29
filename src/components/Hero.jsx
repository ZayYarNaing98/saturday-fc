import crest from '../assets/crest.webp'
import { club, photos } from '../data.js'

export default function Hero() {
  return (
    <section id="top" className="hero" style={{ '--hero-img': `url(${photos.hero})` }}>
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="kicker">Est. {club.founded} · {club.city}</p>
          <h1 className="hero-title">
            <span>{club.shortName}</span>
            <span className="outline">Football Club</span>
          </h1>
          <p className="hero-tagline">“{club.tagline}.”</p>
          <div className="hero-cta">
            <a href="#join" className="button button-red">Play with us</a>
            <a href="#matchday" className="button button-line">Next match</a>
          </div>
        </div>
        <img className="hero-crest" src={crest} alt={`${club.name} crest`} width="320" height="409" />
      </div>
      <p className="hero-when">{club.kickoff}</p>
    </section>
  )
}
