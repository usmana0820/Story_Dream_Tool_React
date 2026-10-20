import PageHeader from '../../../components/dashboard/PageHeader'

const users = [
  { name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Active' },
  { name: 'Sarah Smith', email: 'sarah@example.com', role: 'Creator', status: 'Active' },
  { name: 'Mike Johnson', email: 'mike@example.com', role: 'User', status: 'Suspended' },
  { name: 'Emma Brown', email: 'emma@example.com', role: 'Admin', status: 'Active' },
]

export default function AdminUsersPage() {
  return (
    <>
      <PageHeader title="User Management" subtitle="Control user accounts and permissions" />

      <div className="dashboard-card">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.email}>
                  <td><strong>{u.name}</strong></td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td><span className={`badge bg-${u.status === 'Active' ? 'success' : 'danger'}`}>{u.status}</span></td>
                  <td>
                    <button type="button" className="btn btn-sm btn-outline-primary me-1">Edit</button>
                    <button type="button" className="btn btn-sm btn-outline-danger">Suspend</button>
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
