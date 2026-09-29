import { kitInfo, photos } from '../data.js'

export default function Kit() {
  return (
    <section id="kit" className="kit">
      <div className="kit-media">
        <img src={photos.kit} alt="Saturday FC red home shirt with name and number" loading="lazy" />
      </div>
      <div className="kit-copy">
        <p className="kicker">03 · The kit</p>
        <h2 className="heading">{kitInfo.title}</h2>
        <p>{kitInfo.text}</p>
        <ul className="kit-list">
          {kitInfo.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <img className="kit-squad" src={photos.kitSquad} alt="Squad wearing the red home kit" loading="lazy" />
      </div>
    </section>
  )
}
