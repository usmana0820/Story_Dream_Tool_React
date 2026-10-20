import PageHeader from '../../../components/dashboard/PageHeader'

const videos = [
  { title: 'Forest Adventure Clip', story: 'The Magical Forest', status: 'Rendered', duration: '0:45' },
  { title: 'Space Launch Scene', story: 'Space Adventure', status: 'Processing', duration: '1:02' },
  { title: 'Theater Mystery Intro', story: 'Mystery Theater', status: 'Draft', duration: '0:30' },
]

export default function MotionVideosPage() {
  return (
    <>
      <PageHeader title="Motion Videos" subtitle="AI motion-controlled animated cartoon scenes">
        <button type="button" className="btn btn-primary btn-sm">Create Motion Video</button>
      </PageHeader>

      <div className="row g-4">
        {videos.map((v) => (
          <div key={v.title} className="col-md-4">
            <div className="dashboard-card">
              <div className="d-flex align-items-center justify-content-center rounded mb-3" style={{ height: 120, background: 'rgba(168,85,247,0.15)' }}>
                <i className="fa fa-play-circle" style={{ fontSize: '2.5rem', color: '#a855f7' }} />
              </div>
              <h6>{v.title}</h6>
              <p className="text-muted mb-1">{v.story}</p>
              <small className="text-muted">{v.duration} · </small>
              <span className="badge bg-info">{v.status}</span>
              <div className="mt-3">
                <button type="button" className="btn btn-sm btn-outline-primary w-100">Preview</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
