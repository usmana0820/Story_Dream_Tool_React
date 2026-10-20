import { img } from '../../../../constants/landing'

const characters = [
  { cls: 'hero-card', src: 'character life/hero.jpg', title: 'Hero Character', stats: ['⚡ Brave', '🎤 Deep Voice', '😊 Positive'] },
  { cls: 'villain-card', src: 'character life/villian.jpg', title: 'Villain Character', stats: ['🔥 Aggressive', '🎤 Dark Voice', '😈 Evil Emotion'] },
  { cls: 'teacher-card', src: 'character life/teacher.jpg', title: 'Teacher Character', stats: ['📚 Wise', '🎤 Calm Voice', '😊 Friendly'] },
  { cls: 'child-card', src: 'character life/child.jpg', title: 'Child Character', stats: ['🎈 Playful', '🎤 Cute Voice', '😁 Happy'] },
]

export default function CharactersSection() {
  return (
    <section className="character-section neon-animate" id="characters">
      <div className="section-bg-orb orb-1" />
      <div className="section-bg-orb orb-2" />

      <div className="container">
        <div className="section-header text-center mb-5">
          <span className="section-badge">Character System</span>
          <h2 className="character-title">Integrated Character & Episode Management</h2>
          <p>
            Create, manage, and reuse AI-generated characters across episodic content.
            Each character carries unique personalities, voice styles, emotions,
            and structured story journeys that evolve across episodes.
          </p>
        </div>

        <div className="character-grid">
          {characters.map((c) => (
            <div key={c.title} className={`character-card ${c.cls}`}>
              <img src={img(c.src)} alt={c.title} />
              <div className="card-overlay">
                <h3>{c.title}</h3>
                <div className="stats">
                  {c.stats.map((s) => <span key={s}>{s}</span>)}
                </div>
                <div className="timeline">Episode Progression</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
