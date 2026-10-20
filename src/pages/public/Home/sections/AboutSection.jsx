import { FaCheckCircle } from 'react-icons/fa'
import { img } from '../../../../constants/landing'

export default function AboutSection() {
  return (
    <section className="about-section neon-animate" id="about">
      <div className="section-bg-orb orb-1" />
      <div className="section-bg-orb orb-2" />

      <div className="container">
        <div className="about-header text-center mb-5">
          <span className="about-badge">About The Platform</span>
          <h2 className="about-title">The Future of AI Cartoon Storytelling</h2>
          <p className="about-subtitle">
            Cartoon storytelling is exploding on YouTube Shorts, TikTok, and Instagram Reels —
            yet most creators still juggle separate tools for writing, characters, audio, and animation.
          </p>
        </div>

        <div className="about-bento about-bento-simple">
          <div className="about-visual-card">
            <div className="about-frame">
              <div className="about-scan-line" />
              <img src={img('ABOUT/about.png')} alt="SuZu DreamToon AI Platform" className="about-image" />
            </div>
            <div className="about-visual-badge">
              <FaCheckCircle /> Unified AI Studio
            </div>
          </div>

          <div className="about-main-card">
            <h3 className="about-heading">One Platform. Complete Cartoon Pipeline.</h3>
            <p className="about-text">
              AI Cartoon Story Studio combines story generation, character management,
              emotion detection, halal DAF audio, and motion video — eliminating manual
              effort across every stage of content creation.
            </p>
            <p className="about-text">
              Our unique <strong>Emotion-Based Halal DAF Sound Engine</strong> generates background
              audio using only DAF rhythm patterns, dynamically adjusted to emotional context.
              Combined with motion-controlled AI video generation, the platform is AI-powered,
              emotion-aware, motion-driven, and culturally aligned.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
