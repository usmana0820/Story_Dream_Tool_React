import { useRef, useState } from 'react'
import { EMOTIONS, img } from '../../../../constants/landing'

const CORE_GLOW_DEFAULT = '0 0 35px rgba(214,95,115,.45),0 0 80px rgba(205,94,167,.20)'
const CORE_GLOW_MAP = {
  happy: '0 0 60px #D65F73',
  sad: '0 0 60px #7BA276',
  excited: '0 0 60px #CD5EA7',
  angry: '0 0 60px #B03E00',
  calm: '0 0 60px #7BA276',
  suspense: '0 0 60px #D0A394',
}

export default function EmotionDafSection() {
  const [playing, setPlaying] = useState(null)
  const [coreGlow, setCoreGlow] = useState(CORE_GLOW_DEFAULT)
  const audioRefs = useRef({})

  const toggleAudio = (id) => {
    const audio = audioRefs.current[id]
    if (!audio) return

    if (playing && playing !== id) {
      audioRefs.current[playing]?.pause()
      audioRefs.current[playing].currentTime = 0
    }

    if (playing === id && !audio.paused) {
      audio.pause()
      setPlaying(null)
      return
    }

    audio.play()
    setPlaying(id)
    audio.onended = () => setPlaying(null)
  }

  return (
    <section className="emotion-daf-section neon-animate section-motion" id="emotion-audio">
      <div className="section-bg-orb orb-1" />
      <div className="section-bg-orb orb-2" />

      <div className="container">
        <div className="emotion-grid">
          <div className="daf-left">
            <span className="section-tag">Emotion Audio Preview</span>
            <h2>Emotion-Based <span>Halal DAF</span> Sound Engine</h2>
            <p>
              Instead of traditional multi-instrument music, our system generates background
              audio using only DAF rhythm patterns — dynamically adjusted according to
              emotional context. Listen to how each emotion transforms into synchronized,
              halal background audio in real time.
            </p>
            <div className="circular-glow-frame daf-image">
              <div className="glow-ring pulse-ring ring1" />
              <div className="glow-ring pulse-ring ring2" />
              <div className="glow-ring pulse-ring ring3" />
              <div className="glow-circle daf-image-inner">
                <img src={img('daf.png')} alt="DAF Drum" />
              </div>
            </div>
          </div>

          <div className="circular-glow-frame emotion-core">
            <div className="glow-ring core-ring one" />
            <div className="glow-ring core-ring two" />
            <div className="glow-ring core-ring three" />
            <div className="glow-circle core-circle" style={{ boxShadow: coreGlow }}>
              <img src={img('features/feature emotion.png')} alt="AI Emotion Engine" />
            </div>
            <p className="core-label">AI Emotion Engine</p>
          </div>

          <div className="emotion-list">
            {EMOTIONS.map(({ id, emoji, label, desc, waveClass }) => (
              <div
                key={id}
                className={`emotion-card ${id}${playing === id ? ' playing' : ''}`}
                onMouseEnter={() => setCoreGlow(CORE_GLOW_MAP[id] || CORE_GLOW_DEFAULT)}
                onMouseLeave={() => setCoreGlow(CORE_GLOW_DEFAULT)}
              >
                <div className="emoji">{emoji}</div>
                <div className="content">
                  <h4>{label}</h4>
                  <p>{desc}</p>
                  <div className={`wave ${waveClass}`}>
                    {Array.from({ length: 8 }).map((_, i) => <span key={i} />)}
                  </div>
                </div>
                <button type="button" className="play-btn" onClick={() => toggleAudio(id)}>
                  {playing === id ? '❚❚' : '▶'}
                </button>
                <audio ref={(el) => { audioRefs.current[id] = el }} id={id}>
                  <source src={`/assets/sounds/mp3/${id}.mp3`} />
                </audio>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
