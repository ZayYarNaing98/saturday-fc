import { club, photos } from '../data.js'

export default function Join() {
  return (
    <section id="join" className="join" style={{ '--join-img': `url(${photos.join})` }}>
      <div className="wrap join-inner">
        <p className="kicker">05 · Join us</p>
        <h2 className="join-title">
          Play with us<br />
          <span>this Saturday</span>
        </h2>
        <p className="join-text">
          All levels welcome. Bring your boots, bring a friend — we'll bring the ball.
        </p>
        <a className="button button-white" href={`mailto:${club.email}?subject=I want to play for ${club.name}`}>
          Get in touch
        </a>
        <dl className="join-info">
          <div><dt>When</dt><dd>{club.kickoff}</dd></div>
          <div><dt>Where</dt><dd>{club.ground}, {club.city}</dd></div>
          <div><dt>Email</dt><dd><a href={`mailto:${club.email}`}>{club.email}</a></dd></div>
          <div><dt>Phone</dt><dd><a href={`tel:${club.phone.replace(/\s/g, '')}`}>{club.phone}</a></dd></div>
        </dl>
      </div>
    </section>
  )
}
