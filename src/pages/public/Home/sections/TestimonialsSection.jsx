import { FaQuoteLeft, FaStar, FaCheckCircle, FaYoutube, FaTiktok, FaChalkboardTeacher, FaHeart } from 'react-icons/fa'
import { img } from '../../../../constants/landing'

const stats = [
  { value: '4.9', label: 'Average Rating', suffix: '★' },
  { value: '5K+', label: 'Active Creators' },
  { value: '98%', label: 'Would Recommend' },
  { value: '120+', label: 'Countries' },
]

const testimonials = [
  {
    id: 'michael',
    accent: 'purple',
    img: 'testinomial/micheal.jpg',
    name: 'Michael Lee',
    role: 'TikTok Content Creator',
    platform: 'TikTok',
    platformIcon: FaTiktok,
    highlight: '3× more engagement',
    rating: 5,
    text: 'Motion-controlled video and emotion-based DAF rhythms feel like having a full animation studio. My TikTok cartoon shorts now get 3× more engagement.',
    featured: true,
  },
  {
    id: 'sarah',
    accent: 'orange',
    img: 'testinomial/sarah.jpg',
    name: 'Sarah Johnson',
    role: 'YouTube Story Creator',
    platform: 'YouTube',
    platformIcon: FaYoutube,
    highlight: '5 episodes in one day',
    rating: 5,
    text: 'I went from a blank page to a full 5-episode cartoon series in one afternoon. The story engine and character system are game-changers.',
  },
  {
    id: 'emma',
    accent: 'green',
    img: 'testinomial/enna.jpg',
    name: 'Emma Carter',
    role: 'Educator & Teacher',
    platform: 'Education',
    platformIcon: FaChalkboardTeacher,
    highlight: 'Students love it',
    rating: 5,
    text: 'Episode management and character reuse let me build educational cartoon series my students actually look forward to every week.',
  },
  {
    id: 'david',
    accent: 'cyan',
    img: 'testinomial/david.jpg',
    name: 'David Brown',
    role: 'Parent & Storyteller',
    platform: 'Family',
    platformIcon: FaHeart,
    highlight: 'Halal DAF audio',
    rating: 5,
    text: 'Stories are culturally aligned with halal DAF-only audio. My kids enjoy the cartoons and I feel confident about the content they watch.',
  },
]

function StarRow({ count = 5 }) {
  return (
    <div className="feedback-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>
  )
}

function ReviewCard({ item, variant = 'mini' }) {
  const PlatformIcon = item.platformIcon

  return (
    <article className={`feedback-card feedback-card--${variant} feedback-accent-${item.accent}${item.featured ? ' is-featured' : ''}`}>
      <div className="feedback-card-glow" aria-hidden="true" />

      <div className="feedback-card-top">
        <span className="feedback-platform">
          <PlatformIcon aria-hidden="true" />
          {item.platform}
        </span>
        {item.featured && <span className="feedback-top-badge">Top Review</span>}
        <span className="feedback-highlight">{item.highlight}</span>
      </div>

      <div className="feedback-quote-mark" aria-hidden="true">
        <FaQuoteLeft />
      </div>

      <StarRow count={item.rating} />
      <p className="feedback-text">&ldquo;{item.text}&rdquo;</p>

      <div className="feedback-author">
        <div className={`feedback-avatar ring-${item.accent}`}>
          <img src={img(item.img)} alt={item.name} loading="lazy" />
        </div>
        <div className="feedback-info">
          <h4>{item.name}</h4>
          <span className="feedback-role">{item.role}</span>
          <span className="feedback-verified">
            <FaCheckCircle aria-hidden="true" />
            Verified Creator
          </span>
        </div>
      </div>
    </article>
  )
}

export default function TestimonialsSection() {
  const featured = testimonials.find((t) => t.featured)
  const others = testimonials.filter((t) => !t.featured)

  return (
    <section className="testimonials-section neon-animate" id="testimonials">
      <div className="section-bg-orb orb-1" />
      <div className="section-bg-orb orb-2" />
      <div className="feedback-grid-bg" aria-hidden="true" />

      <div className="container">
        <header className="feedback-header text-center">
          <span className="testimonial-badge">User Feedback</span>
          <h2>Trusted By Story Creators Worldwide</h2>
          <p>
            Educators, content creators, storytellers, and parents use SuZu DreamToon AI
            to generate complete cartoon experiences — from story writing and character design
            to halal DAF audio and motion video.
          </p>
        </header>

        <div className="feedback-stats reveal-stagger">
          {stats.map((stat) => (
            <div key={stat.label} className="feedback-stat">
              <strong>
                {stat.value}
                {stat.suffix && <small>{stat.suffix}</small>}
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="feedback-showcase reveal-stagger">
          {featured && <ReviewCard item={featured} variant="spotlight" />}

          <div className="feedback-stack">
            {others.map((item) => (
              <ReviewCard key={item.id} item={item} variant="mini" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
