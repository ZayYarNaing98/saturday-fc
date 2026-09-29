import { useEffect, useState } from 'react'
import crest from '../assets/crest.webp'
import { club } from '../data.js'

const links = [
  { href: '#story', label: 'Story' },
  { href: '#matchday', label: 'Matchday' },
  { href: '#kit', label: 'Kit' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#join', label: 'Join' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav-solid' : ''} ${open ? 'nav-open' : ''}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="nav-brand" onClick={close}>
          <img src={crest} alt="" width="34" height="43" />
          <span>{club.shortName}<em>FC</em></span>
        </a>
        <nav className="nav-links" aria-label="Main">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={close}>
              <small>0{i + 1}</small>
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
