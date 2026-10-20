import { img } from '../../../../constants/landing'

const posts = [
  { id: 1, img: 'hero_images/hero_section_img1 (3).jpg', tag: 'AI Storytelling', title: '10 AI Storytelling Techniques For Better Cartoons', desc: 'Learn how AI transforms simple prompts into structured, episodic cartoon narratives for social media platforms.' },
  { id: 2, img: 'hero_images/hero_section_img1 (5).jpg', tag: 'Character Design', title: 'Creating Memorable AI Cartoon Characters', desc: 'Build reusable character profiles with personality, emotion traits, and episode progression management.', featured: true },
  { id: 3, img: 'hero_images/hero_section_img1 (7).jpg', tag: 'Emotion AI', title: 'Emotion-Aware Storytelling Pipelines', desc: 'Understand how emotion detection drives DAF rhythm generation and motion speed in animated scenes.' },
  { id: 4, img: 'hero_images/hero_section_img1 (9).jpg', tag: 'DAF Audio', title: 'Halal DAF Audio Generation With AI', desc: 'Discover how emotion-driven DAF-only rhythms create ethical, culturally aligned background audio for cartoons.' },
]

export default function BlogSection({ onOpenArticle }) {
  return (
    <section className="blog-section neon-animate" id="blog">
      <div className="section-bg-orb orb-1" />
      <div className="section-bg-orb orb-2" />

      <div className="container">
        <div className="blog-header text-center mb-5">
          <span className="blog-badge">AI Storytelling Tips</span>
          <h2>Learn The Future Of AI Cartoon Storytelling</h2>
          <p>
            Expert insights, tutorials, and creative guides on AI storytelling,
            character design, emotion-aware animation, halal DAF audio generation,
            and motion-controlled video creation.
          </p>
        </div>

        <div className="blog-grid reveal-stagger">
          {posts.map((post) => (
            <article key={post.id} className={`blog-card${post.featured ? ' featured' : ''}`}>
              <div className="blog-image">
                <img src={img(post.img)} alt="" />
              </div>
              <div className="blog-content">
                <span className="blog-tag">{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <button type="button" className="blog-link" onClick={() => onOpenArticle(post.id)}>
                  Read Article →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
