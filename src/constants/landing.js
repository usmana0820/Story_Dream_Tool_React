export const img = (path) => `/assets/images/${path}`

export const SECTION_LABELS = {
  home: 'Home',
  about: 'About',
  features: 'Features',
  workflow: 'Workflow',
  'demo-stories': 'Demo Stories',
  'emotion-audio': 'Emotion Audio',
  'motion-preview': 'Motion Preview',
  characters: 'Characters',
  blog: 'Blog',
  testimonials: 'Testimonials',
  cta: 'Get Started',
  pricing: 'Pricing',
  contact: 'Contact',
}

export const SECTION_THEMES = {
  home: 'orange',
  about: 'orange',
  features: 'blue',
  workflow: 'purple',
  'demo-stories': 'purple',
  'emotion-audio': 'green',
  'motion-preview': 'cyan',
  characters: 'orange',
  blog: 'orange',
  testimonials: 'blue',
  cta: 'green',
  pricing: 'pink',
  contact: 'orange',
}

export const EXPLORE_SECTIONS = new Set([
  'about', 'features', 'workflow', 'demo-stories',
  'emotion-audio', 'motion-preview', 'characters',
  'blog', 'testimonials', 'cta',
])

export const BLOG_ARTICLES = {
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
}

export const EMOTIONS = [
  { id: 'excited', emoji: '🤩', label: 'Excited', desc: 'Fast • Energetic Beat', waveClass: 'excited-wave' },
  { id: 'happy', emoji: '😊', label: 'Happy', desc: 'Cheerful • Bright Beat', waveClass: 'happy-wave' },
  { id: 'sad', emoji: '😢', label: 'Sad', desc: 'Slow • Deep Beat', waveClass: 'sad-wave' },
  { id: 'angry', emoji: '😡', label: 'Angry', desc: 'Strong • Powerful Beat', waveClass: 'angry-wave' },
  { id: 'suspense', emoji: '😲', label: 'Suspense', desc: 'Tense • Pulse Beat', waveClass: 'suspense-wave' },
  { id: 'calm', emoji: '😌', label: 'Calm', desc: 'Soft • Relaxing Beat', waveClass: 'calm-wave' },
]

export const WORKFLOW_STEPS = [
  { step: 1, color: 'step-purple', title: 'Idea', desc: 'Your creative concept begins the AI storytelling pipeline', image: 'WORKFLOW/idea.jpg' },
  { step: 2, color: 'step-blue', title: 'Story Generation', desc: 'Story Engine generates a full narrative with episode structure', image: 'WORKFLOW/story.jpg' },
  { step: 3, color: 'step-teal', title: 'Character Assignment', desc: 'Character System assigns and manages story characters', image: 'WORKFLOW/character.jpg' },
  { step: 4, color: 'step-green', title: 'Emotion Detection', desc: 'Emotion Engine detects tone across every scene', image: 'WORKFLOW/emotion.jpg' },
  { step: 5, color: 'step-orange', title: 'DAF Audio', desc: 'Halal DAF rhythms are generated from detected emotions', image: 'WORKFLOW/daf.jpg' },
  { step: 6, color: 'step-pink', title: 'Motion Video', desc: 'Motion Engine animates scenes with camera and transitions', image: 'WORKFLOW/MOTION.jpg' },
  { step: 7, color: 'step-violet', title: 'Final Cartoon', desc: 'Complete cartoon video ready for social platforms', image: 'WORKFLOW/FINAL.jpg' },
]
