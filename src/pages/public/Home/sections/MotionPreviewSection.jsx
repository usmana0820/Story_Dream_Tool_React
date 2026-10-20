import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../constants/routes'
import { img } from '../../../../constants/landing'

const features = [
  { icon: '🎬', title: 'Character Movement', desc: 'AI controls character actions, gestures, and expressions frame by frame.' },
  { icon: '⚡', title: 'Emotion-Based Speed', desc: 'Motion tempo adapts to detected emotions — fast for excitement, slow for calm.' },
  { icon: '📷', title: 'Camera Control', desc: 'Automatic zoom, pan, and tracking shots create cinematic cartoon scenes.' },
  { icon: '🔄', title: 'Scene Transitions', desc: 'Smooth transitions between scenes maintain narrative flow and visual continuity.' },
]

export default function MotionPreviewSection() {
  return (
    <section className="motion-preview-section neon-animate section-motion" id="motion-preview">
      <div className="section-bg-orb orb-1" />
      <div className="section-bg-orb orb-2" />

      <div className="container">
        <div className="section-header text-center mb-5">
          <span className="section-badge motion-badge">Motion Control</span>
          <h2 className="section-title">Motion Video Preview</h2>
          <p className="section-subtitle">AI-Based Motion-Controlled Video Generation</p>
          <p className="section-description">
            Cartoon scenes are automatically animated using character movement control,
            emotion-based motion speed, camera zoom, pan, and tracking — plus seamless
            scene-to-scene transitions powered by AI.
          </p>
        </div>

        <div className="motion-preview-grid reveal-stagger">
          {features.map((f) => (
            <div key={f.title} className="motion-feature-card">
              <div className="motion-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="motion-showcase mt-5">
          <div className="motion-showcase-inner">
            <img src={img('WORKFLOW/MOTION.jpg')} alt="Motion Video Preview" />
            <div className="motion-showcase-overlay">
              <span className="motion-live-badge">● AI Motion Preview</span>
              <p>Watch how AI transforms static cartoon frames into fully animated video sequences.</p>
              <Link to={ROUTES.STORY_GENERATOR} className="btn btn-primary btn-lg">Create Motion Video</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
