import crest from '../assets/crest.webp'
import { club, lastResult, lineup, nextMatch } from '../data.js'
import { formatDate } from '../utils.js'

export default function Matchday() {
  const won = lastResult.us > lastResult.them
  const drew = lastResult.us === lastResult.them

  return (
    <section id="matchday" className="section matchday">
      <div className="wrap">
        <p className="kicker">02 · Matchday</p>
        <h2 className="heading">The Saturday XI</h2>
        <div className="matchday-grid">
          <div className="pitch" role="img" aria-label={`Starting line-up in a ${lineup.formation}`}>
            <div className="pitch-lines">
              <span className="pitch-half" />
              <span className="pitch-circle" />
              <span className="pitch-box top" />
              <span className="pitch-box bottom" />
            </div>
            {lineup.players.map((p) => (
              <div key={p.number} className="player" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                <span className="player-shirt">{p.number}</span>
                <span className="player-name">{p.name}</span>
              </div>
            ))}
            <span className="pitch-formation">{lineup.formation}</span>
          </div>

          <div className="match-cards">
            <article className="match-card match-next">
              <p className="match-label">Next match</p>
              {nextMatch ? (
                <>
                  <p className="match-vs">
                    {club.shortName} <span>vs</span> {nextMatch.opponent}
                  </p>
                  <p className="match-meta">
                    {formatDate(nextMatch.date)} · {nextMatch.time} · {nextMatch.venue}
                  </p>
                </>
              ) : (
                <>
                  <p className="match-vs">To be announced</p>
                  <p className="match-meta">Fixture coming soon · {club.kickoff}</p>
                </>
              )}
            </article>
            <article className="match-card">
              <p className="match-label">Last result · {formatDate(lastResult.date)}</p>
              <p className="match-score">
                <span>{lastResult.us}</span>
                <small>–</small>
                <span>{lastResult.them}</span>
              </p>
              <p className="match-meta">
                vs {lastResult.opponent}
                <b className={`badge ${won ? 'win' : drew ? 'draw' : 'loss'}`}>
                  {won ? 'Win' : drew ? 'Draw' : 'Loss'}
                </b>
              </p>
              {lastResult.headline && <p className="match-headline">{lastResult.headline}</p>}
              {lastResult.scorers?.length > 0 && (
                <p className="match-scorers">⚽ {lastResult.scorers.join(' · ')}</p>
              )}
            </article>
            <article className="match-card match-when">
              <img className="match-when-crest" src={crest} alt="" loading="lazy" />
              <p className="match-label">We play</p>
              <p className="match-big">{club.kickoff}</p>
              <p className="match-meta">{club.ground}, {club.city}</p>
              <a href="#join" className="button button-red">Join this Saturday</a>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
