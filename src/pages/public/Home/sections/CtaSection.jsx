import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../constants/routes'

const stats = [
  { value: '10K+', label: 'Stories Generated' },
  { value: '5K+', label: 'Happy Creators' },
  { value: '99%', label: 'User Satisfaction' },
]

export default function CtaSection() {
  return (
    <section className="cta-section neon-animate" id="cta">
      <div className="section-bg-orb orb-1" />
      <div className="section-bg-orb orb-2" />
      <div className="cta-overlay" />

      <div className="container">
        <div className="cta-content">
          <span className="cta-badge">Sign Up / Start Creating</span>
          <h2>Turn Your Ideas Into Complete AI Cartoon Stories</h2>
          <p>
            Generate stories with AI, detect emotional tone, convert emotions into
            halal DAF rhythm patterns, manage characters and episodes, and produce
            motion-controlled animated videos — all in one unified platform.
          </p>

          <div className="cta-buttons">
            <Link to={ROUTES.REGISTER} className="cta-btn primary-btn">Sign Up Free</Link>
            <a href="#demo-stories" className="cta-btn secondary-btn">View Demo Stories</a>
          </div>

          <div className="cta-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat-box">
                <h3>{s.value}</h3>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
