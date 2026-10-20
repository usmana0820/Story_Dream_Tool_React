import PageHeader from '../../../components/dashboard/PageHeader'

const videos = [
  { title: 'Forest Scene Render', creator: 'John Doe', duration: '0:45', status: 'Live' },
  { title: 'Space Intro', creator: 'Sarah Smith', duration: '1:02', status: 'Processing' },
]

export default function AdminMotionVideosPage() {
  return (
    <>
      <PageHeader title="Motion Videos" subtitle="Monitor AI motion video generation across the platform" />

      <div className="row g-4">
        {videos.map((v) => (
          <div key={v.title} className="col-md-6">
            <div className="dashboard-card">
              <h6>{v.title}</h6>
              <p className="text-muted mb-1">By {v.creator} · {v.duration}</p>
              <span className="badge bg-info">{v.status}</span>
              <div className="mt-3">
                <button type="button" className="btn btn-sm btn-outline-primary">Preview</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
