import { useCallback, useEffect, useState } from 'react'
import { gallery } from '../data.js'

export default function Gallery() {
  const [active, setActive] = useState(null)
  const count = gallery.length

  const step = useCallback((dir) => setActive((i) => (i + dir + count) % count), [count])

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, step])

  return (
    <section id="gallery" className="section gallery">
      <div className="wrap">
        <p className="kicker">04 · Gallery</p>
        <h2 className="heading">Every match has a story</h2>
        <div className="photo-wall">
          {gallery.map((g, i) => (
            <button
              key={g.src}
              className="photo"
              onClick={() => setActive(i)}
              aria-label={`Open photo: ${g.caption}`}
            >
              <img src={g.src} alt={g.caption} loading="lazy" />
              <span>{g.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={gallery[active].caption} onClick={() => setActive(null)}>
          <button className="lightbox-close" aria-label="Close" onClick={() => setActive(null)}>×</button>
          <button className="lightbox-nav prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); step(-1) }}>‹</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={gallery[active].src} alt={gallery[active].caption} />
            <figcaption>
              {gallery[active].caption}
              <small>{active + 1} / {count}</small>
            </figcaption>
          </figure>
          <button className="lightbox-nav next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); step(1) }}>›</button>
        </div>
      )}
    </section>
  )
}
