import PageHeader from '../../../components/dashboard/PageHeader'

const characters = [
  { name: 'Wizard Master', owner: 'John Doe', type: 'Hero', status: 'Approved' },
  { name: 'Dark Villain', owner: 'Sarah Smith', type: 'Villain', status: 'Pending' },
  { name: 'Fairy Princess', owner: 'Emma Brown', type: 'Sidekick', status: 'Approved' },
]

export default function AdminCharactersPage() {
  return (
    <>
      <PageHeader title="Character Management" subtitle="Moderate AI-generated character profiles" />

      <div className="dashboard-card">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead>
              <tr>
                <th>Character</th>
                <th>Owner</th>
                <th>Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {characters.map((c) => (
                <tr key={c.name}>
                  <td><strong>{c.name}</strong></td>
                  <td>{c.owner}</td>
                  <td>{c.type}</td>
                  <td><span className={`badge bg-${c.status === 'Approved' ? 'success' : 'warning'}`}>{c.status}</span></td>
                  <td><button type="button" className="btn btn-sm btn-outline-primary">Review</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
