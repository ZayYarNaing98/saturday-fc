import { photos, story } from '../data.js'

export default function Story() {
  return (
    <section id="story" className="section story">
      <div className="wrap story-grid">
        <div className="story-head">
          <p className="kicker">01 · Our story</p>
          <h2 className="heading">Born on a<br />Saturday morning</h2>
          <figure className="story-photo">
            <img src={photos.story} alt="Saturday FC squad lined up on the pitch" loading="lazy" />
          </figure>
        </div>
        <ol className="timeline">
          {story.map((s) => (
            <li key={s.year}>
              <span className="timeline-year">{s.year}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
