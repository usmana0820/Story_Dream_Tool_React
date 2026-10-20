import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { WORKFLOW_STEPS, img } from '../../../../constants/landing'
import 'swiper/css'
import 'swiper/css/pagination'

function padStep(n) {
  return String(n).padStart(2, '0')
}

export default function WorkflowSection() {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const cycleRef = useRef(null)

  const startCycle = () => {
    if (cycleRef.current) clearInterval(cycleRef.current)
    cycleRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % WORKFLOW_STEPS.length)
    }, 3500)
  }

  const stopCycle = () => {
    if (cycleRef.current) {
      clearInterval(cycleRef.current)
      cycleRef.current = null
    }
  }

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          setActiveIndex(0)
          startCycle()
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(section)

    return () => {
      observer.disconnect()
      stopCycle()
    }
  }, [])

  return (
    <section className="workflow-section neon-animate" id="workflow" ref={sectionRef}>
      <div className="workflow-bg-orb wf-orb-1" />
      <div className="workflow-bg-orb wf-orb-2" />
      <div className="workflow-bg-orb wf-orb-3" />

      <div className="container">
        <div className="workflow-header text-center mb-5">
          <span className="workflow-badge">Creation Pipeline</span>
          <h2 className="workflow-title">AI Story Creation Workflow</h2>
          <p className="workflow-subtitle">From Idea to Animated Cartoon — Structured & Reusable</p>
        </div>

        <div
          className="workflow-pipeline"
          onMouseLeave={startCycle}
        >
          <div className="pipeline-track" aria-hidden="true">
            <div className="pipeline-track-base" />
            <div className="pipeline-track-flow" />
            <div className="pipeline-track-pulse" />
          </div>

          <div className="workflow-nodes">
            {WORKFLOW_STEPS.map((step, i) => (
              <article
                key={step.step}
                className={`wf-node ${step.color}${visible ? ' wf-visible' : ''}${activeIndex === i ? ' wf-active' : ''}`}
                data-step={step.step}
                onMouseEnter={() => { stopCycle(); setActiveIndex(i) }}
                onClick={() => { stopCycle(); setActiveIndex(i) }}
              >
                <div className="wf-node-connector">
                  <span className="wf-node-dot" />
                  <span className="wf-node-pulse" />
                </div>
                <div className="wf-node-card">
                  <div className="wf-card-glow" />
                  <span className="wf-num">{padStep(step.step)}</span>
                  <div className="wf-icon-ring">
                    <div className="wf-icon-orbit" />
                    <img src={img(step.image)} alt={step.title} />
                  </div>
                  <h3 className="wf-title">{step.title}</h3>
                  <p className="wf-desc">{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="workflow-mobile-slider">
          <Swiper
            className="workflow-swiper"
            modules={[Autoplay, Pagination]}
            slidesPerView={1.15}
            centeredSlides
            spaceBetween={16}
            loop
            speed={500}
            grabCursor
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ el: '.workflow-pagination', clickable: true }}
            breakpoints={{
              480: { slidesPerView: 1.3, spaceBetween: 18 },
              576: { slidesPerView: 1.5, spaceBetween: 20 },
            }}
          >
            {WORKFLOW_STEPS.map((step) => (
              <SwiperSlide key={step.step}>
                <div className={`wf-mobile-card ${step.color}`}>
                  <span className="wf-num">{padStep(step.step)}</span>
                  <img src={img(step.image)} alt={step.title} />
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination workflow-pagination" />
        </div>

        <div className="workflow-progress-display">
          <div className="wf-progress-bar">
            <div
              className="wf-progress-fill"
              style={{ width: `${((activeIndex + 1) / WORKFLOW_STEPS.length) * 100}%` }}
            />
          </div>
          <span className="wf-progress-label">
            Step <strong className="wf-current-num">{padStep(activeIndex + 1)}</strong> of 07
          </span>
        </div>

        <div className="workflow-footer-bar">
          <span>AI-POWERED</span>
          <span className="dot-sep">•</span>
          <span>EMOTION-AWARE</span>
          <span className="dot-sep">•</span>
          <span>MOTION-DRIVEN</span>
          <span className="dot-sep">•</span>
          <span>CULTURALLY ALIGNED</span>
        </div>
      </div>
    </section>
  )
}
