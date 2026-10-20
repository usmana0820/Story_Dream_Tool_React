import { Link } from 'react-router-dom'
import { FaBolt, FaHeart, FaFilm, FaMagic, FaPlayCircle } from 'react-icons/fa'
import { ROUTES } from '../../../../constants/routes'
import { img } from '../../../../constants/landing'

const heroImages = [1, 2, 3, 4, 5].map((n) => img(`hero_images/hero_section_img1 (${n}).jpg`))
const flowCards = [
  { cls: 'card-1', src: 'character life/hero.jpg', alt: 'Story Character' },
  { cls: 'card-2', src: 'character life/child.jpg', alt: 'Child Character' },
  { cls: 'card-3', src: 'character life/teacher.jpg', alt: 'Teacher Character' },
  { cls: 'card-4', src: 'character life/villian.jpg', alt: 'Villain Character' },
]

export default function HeroSection() {
  return (
    <>
      <div className="hero-glow glow-1" />
      <div className="hero-glow glow-2" />
      <div className="hero-grid-overlay" aria-hidden="true" />

      <section className="hero-section neon-animate" id="home">
        <div className="hero-bg-gallery">
          {heroImages.map((src) => (
            <img key={src} src={src} alt="AI Cartoon Story" />
          ))}
        </div>

        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6 text-center text-lg-start hero-content">
              <span className="hero-eyebrow">
                <span className="eyebrow-dot" />
                AI Cartoon Story Studio
              </span>

              <h1 className="hero-heading">
                Create <span className="hero-gradient-text">Complete Cartoon Stories</span> With AI
              </h1>

              <p className="hero-tagline">Emotion-Aware · Motion-Driven · Culturally Aligned</p>

              <p className="lead">
                Generate stories, manage characters, produce halal DAF rhythm audio,
                and render motion-controlled animated scenes — all from one unified studio
                built for YouTube Shorts, TikTok, and Reels.
              </p>

              <div className="hero-pills">
                <span className="hero-pill"><FaBolt /> AI-Powered</span>
                <span className="hero-pill"><FaHeart /> Emotion-Aware</span>
                <span className="hero-pill"><FaFilm /> Motion-Driven</span>
              </div>

              <div className="hero-buttons d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mt-4">
                <Link to={ROUTES.REGISTER} className="btn btn-hero-primary btn-lg">
                  <span className="hero-btn-icon" aria-hidden="true"><FaMagic /></span>
                  <span>Start Creating Free</span>
                </Link>
                <a href="#demo-stories" className="btn btn-hero-outline btn-lg">
                  <span className="hero-btn-icon" aria-hidden="true"><FaPlayCircle /></span>
                  <span>Watch Demos</span>
                </a>
              </div>
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="hero-flow-cards">
                {flowCards.map(({ cls, src, alt }) => (
                  <div key={cls} className={`flow-card ${cls}`}>
                    <div className="card-content">
                      <img src={img(src)} alt={alt} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
