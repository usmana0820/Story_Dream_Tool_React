/**
 * Blog article modal
 */
document.addEventListener('DOMContentLoaded', () => {
  const articles = {
    1: {
      tag: 'AI Storytelling',
      title: '10 AI Storytelling Techniques For Better Cartoons',
      body: 'Use structured prompts to define genre, tone, and episode count before generating. Break stories into scenes so the Emotion Engine can map DAF rhythms per moment. Reuse character profiles across episodes for consistent branding on YouTube Shorts, TikTok, and Reels. Preview motion speed changes when emotion shifts from calm to excited. Export halal DAF-only audio instead of multi-instrument tracks for culturally aligned content.',
    },
    2: {
      tag: 'Character Design',
      title: 'Creating Memorable AI Cartoon Characters',
      body: 'Assign each character a personality trait, voice style, and default emotion. Use the Character System to track episode progression so heroes, villains, and side characters evolve naturally. Pair visual design with emotion tags — brave heroes get faster motion; calm teachers get slower DAF rhythms. Save profiles to reuse across multiple cartoon series.',
    },
    3: {
      tag: 'Emotion AI',
      title: 'Emotion-Aware Storytelling Pipelines',
      body: 'The Emotion Engine scans each scene and detects tone — happy, sad, suspense, calm, and more. Detected emotions drive two outputs: halal DAF rhythm patterns for background audio, and motion speed for the Motion Control Video Engine. This creates immersive cartoons where audio and animation stay synchronized without manual editing.',
    },
    4: {
      tag: 'DAF Audio',
      title: 'Halal DAF Audio Generation With AI',
      body: 'Traditional cartoon scores use multiple instruments. SuZu DreamToon AI uses only DAF rhythm patterns — dynamically adjusted to emotional context. Excited scenes get fast energetic beats; calm scenes get soft relaxing rhythms. The result is ethical, value-based background audio that enhances storytelling while staying culturally aligned.',
    },
  };

  const modal = document.getElementById('blogModal');
  if (!modal) return;

  document.querySelectorAll('.blog-link[data-article]').forEach((link) => {
    link.addEventListener('click', () => {
      const id = link.getAttribute('data-article');
      const article = articles[id];
      if (!article) return;

      document.getElementById('blogModalTag').textContent = article.tag;
      document.getElementById('blogModalTitle').textContent = article.title;
      document.getElementById('blogModalBody').textContent = article.body;
    });
  });
});
