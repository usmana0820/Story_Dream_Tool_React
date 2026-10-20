import PageHeader from '../../../components/dashboard/PageHeader'

const notifications = [
  { message: 'New user registration: john@example.com', time: '5 min ago', type: 'info' },
  { message: 'Story flagged for review: Sky High Dreams', time: '20 min ago', type: 'warning' },
  { message: 'System backup completed successfully', time: '1 hour ago', type: 'success' },
  { message: 'API rate limit warning on emotion engine', time: '3 hours ago', type: 'danger' },
]

export default function AdminNotificationsPage() {
  return (
    <>
      <PageHeader title="Notifications" subtitle="System alerts and platform notifications" />

      <div className="dashboard-card">
        <div className="list-group">
          {notifications.map((n) => (
            <div key={n.message} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <span className={`badge bg-${n.type} me-2`}>{n.type}</span>
                {n.message}
              </div>
              <small className="text-muted">{n.time}</small>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
