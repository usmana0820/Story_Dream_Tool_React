import PageHeader from '../../../components/dashboard/PageHeader'

const audioFiles = [
  { name: 'Happy DAF Pack v2', uploader: 'John Doe', size: '24 MB', status: 'Approved' },
  { name: 'Suspense Rhythm', uploader: 'Sarah Smith', size: '18 MB', status: 'Pending' },
]

export default function AdminAudioPage() {
  return (
    <>
      <PageHeader title="Audio Library" subtitle="Manage halal DAF audio uploads and exports" />

      <div className="dashboard-card">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead>
              <tr>
                <th>File Name</th>
                <th>Uploader</th>
                <th>Size</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {audioFiles.map((a) => (
                <tr key={a.name}>
                  <td><strong>{a.name}</strong></td>
                  <td>{a.uploader}</td>
                  <td>{a.size}</td>
                  <td><span className={`badge bg-${a.status === 'Approved' ? 'success' : 'warning'}`}>{a.status}</span></td>
                  <td><button type="button" className="btn btn-sm btn-outline-primary">Listen</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
