import { ticker } from '../data.js'

export default function Ticker() {
  // Rendered twice so the loop scrolls seamlessly.
  const items = [...ticker, ...ticker]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  )
}
