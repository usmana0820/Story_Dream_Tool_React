import PageHeader from '../../../components/dashboard/PageHeader'

const episodes = [
  { story: 'The Magical Forest', ep: 'Episode 1', title: 'Into the Woods', status: 'Complete' },
  { story: 'The Magical Forest', ep: 'Episode 2', title: 'The Hidden Path', status: 'In Progress' },
  { story: 'Space Adventure', ep: 'Episode 1', title: 'Launch Day', status: 'Draft' },
]

export default function EpisodesPage() {
  return (
    <>
      <PageHeader title="Episodes" subtitle="Organize and track story episodes" />

      <div className="dashboard-card">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead>
              <tr>
                <th>Story</th>
                <th>Episode</th>
                <th>Title</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {episodes.map((ep) => (
                <tr key={`${ep.story}-${ep.ep}`}>
                  <td>{ep.story}</td>
                  <td>{ep.ep}</td>
                  <td><strong>{ep.title}</strong></td>
                  <td><span className="badge bg-info">{ep.status}</span></td>
                  <td><button type="button" className="btn btn-sm btn-outline-primary">Open</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
