import { img } from '../../../../constants/landing'

const stories = [
  { img: 'hero_images/hero_section_img1 (1).jpg', tag: 'Adventure', title: 'The Brave Little Explorer', desc: 'A young hero discovers a hidden world and learns courage through friendship and discovery.', meta: ['🎭 4 Characters', '🎵 Happy DAF', '🎬 3 Episodes'] },
  { img: 'hero_images/hero_section_img1 (3).jpg', tag: 'Fantasy', title: 'The Magic Garden', desc: 'When a curious child enters an enchanted garden, every plant tells a story of kindness and patience.', meta: ['🎭 5 Characters', '🎵 Calm DAF', '🎬 5 Episodes'], featured: true },
  { img: 'hero_images/hero_section_img1 (5).jpg', tag: 'Sci-Fi', title: 'Space Friends', desc: 'Two unlikely companions travel the galaxy, solving problems with teamwork and creative thinking.', meta: ['🎭 3 Characters', '🎵 Excited DAF', '🎬 4 Episodes'] },
  { img: 'hero_images/hero_section_img1 (2).jpg', tag: 'Educational', title: 'The Wise Teacher', desc: 'An inspiring teacher uses animated lessons to help students understand values, science, and life skills.', meta: ['🎭 6 Characters', '🎵 Happy DAF', '🎬 6 Episodes'] },
]

export default function DemoStoriesSection() {
  return (
    <section className="demo-stories-section neon-animate section-motion" id="demo-stories">
      <div className="section-bg-orb orb-1" />
      <div className="section-bg-orb orb-2" />

      <div className="container">
        <div className="section-header text-center mb-5">
          <span className="section-badge demo-badge">Sample Stories</span>
          <h2 className="section-title">Demo Stories</h2>
          <p className="section-subtitle">AI-Generated Cartoon Story Previews</p>
          <p className="section-description">
            Explore sample AI-generated cartoon stories — complete with characters,
            emotional arcs, DAF rhythm audio, and motion-animated scenes ready for
            YouTube Shorts, TikTok, and Instagram Reels.
          </p>
        </div>

        <div className="demo-stories-grid reveal-stagger">
          {stories.map((story) => (
            <article key={story.title} className={`demo-story-card${story.featured ? ' featured' : ''}`}>
              <div className="demo-story-image">
                <img src={img(story.img)} alt={story.title} />
                <span className="demo-tag">{story.tag}</span>
              </div>
              <div className="demo-story-content">
                <h3>{story.title}</h3>
                <p>{story.desc}</p>
                <div className="demo-meta">
                  {story.meta.map((m) => <span key={m}>{m}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
