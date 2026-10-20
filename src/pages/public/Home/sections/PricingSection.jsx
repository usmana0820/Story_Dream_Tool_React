import { Link } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'
import { ROUTES } from '../../../../constants/routes'

const plans = [
  {
    cls: 'free-card', icon: '🚀', name: 'Free Plan', duration: 'Beginner', price: '$0', sub: 'Forever Free',
    features: ['5 AI Stories Per Month', 'Basic Character System', 'Standard Emotion Engine', 'Limited DAF Audio Preview', 'Community Support'],
    cta: 'Start Free', to: ROUTES.REGISTER,
  },
  {
    cls: 'pink-card', icon: '👑', name: 'Pro Plan', duration: '3 Months', price: '$49', sub: '$16.3 / Month', popular: true,
    features: ['Unlimited AI Stories', 'Full Character & Episode Management', 'Emotion Engine Pro', 'Halal DAF Audio Export', 'HD Motion Video Export', 'Email Support'],
    cta: 'Choose Plan', to: ROUTES.REGISTER,
  },
  {
    cls: 'green-card', icon: '⚡', name: 'Pro Plan', duration: '6 Months', price: '$89', sub: '$14.8 / Month',
    features: ['Everything in Pro 3 Months', 'Motion Control Video Engine', 'Faster Video Rendering', 'Advanced DAF Rhythm Patterns', 'Priority Support', 'Cloud Episode Storage'],
    cta: 'Choose Plan', to: ROUTES.REGISTER,
  },
  {
    cls: 'gold-card', icon: '💎', name: 'Ultimate Plan', duration: '12 Months', price: '$149', sub: 'Best Value',
    features: ['Full Platform Access', 'Unlimited Motion Video Generation', 'Ultra Emotion Engine', 'VIP Support', 'Early Feature Access', 'Lifetime Updates'],
    cta: 'Get Ultimate', to: ROUTES.REGISTER,
  },
]

export default function PricingSection() {
  return (
    <section className="pricing-section neon-animate" id="pricing">
      <div className="pricing-bg-circle circle-1" />
      <div className="pricing-bg-circle circle-2" />
      <div className="pricing-bg-circle circle-3" />

      <div className="container">
        <div className="pricing-header">
          <span className="pricing-label">FREE / PRO PLANS</span>
          <h2>Choose Your <span>Creative Plan</span></h2>
          <p>
            Start free with basic AI storytelling and character tools, or unlock
            the full platform — emotion engine, halal DAF audio, motion video
            generation, and premium creative features.
          </p>
        </div>

        <div className="pricing-grid reveal-stagger">
          {plans.map((plan) => (
            <article key={`${plan.name}-${plan.duration}`} className={`pricing-card ${plan.cls}`}>
              {plan.popular && <span className="popular-tag">MOST POPULAR</span>}
              <span className="border-light" />
              <div className="card-content">
                <div className="plan-icon">{plan.icon}</div>
                <h3>{plan.name}</h3>
                <p className="plan-duration">{plan.duration}</p>
                <div className="price-box">
                  <h1>{plan.price}</h1>
                  <span>{plan.sub}</span>
                </div>
                <ul className="feature-list">
                  {plan.features.map((f) => (
                    <li key={f}><FaCheckCircle /> {f}</li>
                  ))}
                </ul>
                <Link to={plan.to} className="pricing-btn">{plan.cta}</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
