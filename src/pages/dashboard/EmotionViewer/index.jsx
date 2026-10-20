import PageHeader from '../../../components/dashboard/PageHeader'

const emotions = [
  { emoji: '😊', label: 'Happy', scene: 'Forest greeting', daf: 'Cheerful Beat' },
  { emoji: '🤩', label: 'Excited', scene: 'Rocket launch', daf: 'Fast Energetic' },
  { emoji: '😢', label: 'Sad', scene: 'Lost in cave', daf: 'Slow Deep' },
  { emoji: '😌', label: 'Calm', scene: 'Ending credits', daf: 'Soft Relaxing' },
]

export default function EmotionViewerPage() {
  return (
    <>
      <PageHeader title="Emotion Viewer" subtitle="Detected emotions across your story scenes" />

      <div className="row g-4">
        {emotions.map((e) => (
          <div key={e.label} className="col-md-6 col-lg-3">
            <div className="dashboard-card text-center">
              <div style={{ fontSize: '2.5rem' }}>{e.emoji}</div>
              <h5 className="mt-2">{e.label}</h5>
              <p className="text-muted mb-1">{e.scene}</p>
              <small className="text-muted">DAF: {e.daf}</small>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
