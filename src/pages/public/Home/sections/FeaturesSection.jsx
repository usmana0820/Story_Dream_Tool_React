import { img } from '../../../../constants/landing'

const modules = [
  { cls: 'story-module features-story-card', img: 'features/feature story.png', title: 'Story Engine', desc: 'Generate complete cartoon stories from simple prompts with AI-powered narrative structuring and episodic organization.', overlay: 'Story Engine', featured: true },
  { cls: 'character-module', img: 'features/feature character.png', title: 'Character System', desc: 'Manage AI-generated characters with unique personalities, reusable profiles, and structured episode progression.', overlay: 'Character System' },
  { cls: 'emotion-module', img: 'features/feature emotion.png', title: 'Emotion Engine', desc: 'Detect emotional tone in stories and scenes, then drive storytelling pipelines with real-time emotion intelligence.', overlay: 'Emotion Engine' },
  { cls: 'daf-module', img: 'features/feature daf.png', title: 'DAF Audio Engine', desc: 'Convert detected emotions into halal DAF-only rhythm patterns — synchronized, ethical, and value-based background audio.', overlay: 'DAF Audio Engine' },
  { cls: 'motion-module', img: 'features/feature motion.png', title: 'Motion Control Video Engine', desc: 'Animate cartoon scenes with character movement control, emotion-based motion speed, camera zoom, pan, tracking, and transitions.', overlay: 'Motion Control Engine' },
]

export default function FeaturesSection() {
  const [story, ...network] = modules

  return (
    <section className="features-section neon-animate section-motion" id="features">
      <div className="section-bg-orb orb-1" />
      <div className="section-bg-orb orb-2" />

      <div className="container features-wrap">
        <div className="features-hero-row">
          <div className="features-intro">
            <h2 className="section-title">Feature Showcase</h2>
            <p className="section-subtitle">Six Core Modules — One Unified Platform</p>
            <p className="section-description">
              No existing platform combines AI storytelling, emotion detection, character and episode
              management, and DAF-based emotional audio generation. SuZu DreamToon AI fills that core gap
              with structured, reusable workflows for complete multimedia cartoon output.
            </p>
          </div>

          <div className={`feature-module ${story.cls}`}>
            <div className="feature-image">
              <img src={img(story.img)} alt={story.title} />
              <div className="overlay-title">{story.overlay}</div>
            </div>
            <div className="feature-content">
              <h3>{story.title}</h3>
              <p>{story.desc}</p>
            </div>
          </div>
        </div>

        <div className="features-network">
          {network.slice(0, 1).map((m) => (
            <div key={m.title} className={`feature-module ${m.cls}`}>
              <div className="feature-image">
                <img src={img(m.img)} alt={m.title} />
                <div className="overlay-title">{m.overlay}</div>
              </div>
              <div className="feature-content">
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            </div>
          ))}

          <div className="brain-core">
            <div className="brain-circle">
              <div className="brain-inner">
                <img src={img('features/feature brain.png')} alt="AI Brain Core" className="brain-image" />
              </div>
              <div className="brain-glow" />
              <div className="glow-ring ring-1" />
              <div className="glow-ring ring-2" />
            </div>
          </div>

          {network.slice(1).map((m) => (
            <div key={m.title} className={`feature-module ${m.cls}`}>
              <div className="feature-image">
                <img src={img(m.img)} alt={m.title} />
                <div className="overlay-title">{m.overlay}</div>
              </div>
              <div className="feature-content">
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
