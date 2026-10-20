import PageHeader from '../../../components/dashboard/PageHeader'

const tracks = [
  { name: 'Happy DAF Rhythm', story: 'The Magical Forest', duration: '2:34', emotion: 'Happy' },
  { name: 'Excited Beat', story: 'Space Adventure', duration: '1:58', emotion: 'Excited' },
  { name: 'Calm Pattern', story: 'Mystery Theater', duration: '3:12', emotion: 'Calm' },
]

export default function AudioLibraryPage() {
  return (
    <>
      <PageHeader title="Audio Library" subtitle="Halal DAF rhythm audio generated from emotions">
        <button type="button" className="btn btn-primary btn-sm">Upload Audio</button>
      </PageHeader>

      <div className="dashboard-card">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead>
              <tr>
                <th>Track Name</th>
                <th>Story</th>
                <th>Emotion</th>
                <th>Duration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((t) => (
                <tr key={t.name}>
                  <td><strong>{t.name}</strong></td>
                  <td>{t.story}</td>
                  <td><span className="badge bg-warning text-dark">{t.emotion}</span></td>
                  <td>{t.duration}</td>
                  <td>
                    <button type="button" className="btn btn-sm btn-outline-primary me-1">▶ Play</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
