import crest from '../assets/crest.webp'
import { club } from '../data.js'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <img src={crest} alt="" width="48" height="61" />
        <p className="footer-tag">{club.tagline}.</p>
        <p className="footer-copy">© {year} {club.name} · Est. {club.founded}</p>
        <a href="#top" className="footer-top">Back to top ↑</a>
      </div>
    </footer>
  )
}
