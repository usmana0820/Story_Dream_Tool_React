import PageHeader from '../../../components/dashboard/PageHeader'

const stories = [
  { title: 'The Lost Kingdom', author: 'John Doe', status: 'Approved', reports: 0 },
  { title: 'Ocean Adventure', author: 'Sarah Smith', status: 'Pending', reports: 1 },
  { title: 'Sky High Dreams', author: 'Mike Johnson', status: 'Flagged', reports: 3 },
]

export default function AdminStoriesPage() {
  return (
    <>
      <PageHeader title="Story Moderation" subtitle="Review and manage user-generated stories" />

      <div className="dashboard-card">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Status</th>
                <th>Reports</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {stories.map((s) => (
                <tr key={s.title}>
                  <td><strong>{s.title}</strong></td>
                  <td>{s.author}</td>
                  <td><span className={`badge bg-${s.status === 'Approved' ? 'success' : s.status === 'Pending' ? 'warning' : 'danger'}`}>{s.status}</span></td>
                  <td>{s.reports}</td>
                  <td>
                    <button type="button" className="btn btn-sm btn-outline-success me-1">Approve</button>
                    <button type="button" className="btn btn-sm btn-outline-danger">Remove</button>
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
