import { Link } from 'react-router-dom'
import PageHeader from '../../../components/dashboard/PageHeader'
import StatCard from '../../../components/dashboard/StatCard'
import { ROUTES } from '../../../constants/routes'
import { ADMIN_ACTIVITY, ADMIN_STATS } from '../../../constants/dashboardData'

const sections = [
  {
    title: 'User Management',
    color: '#D65F73',
    desc: 'Control user accounts and permissions',
    to: ROUTES.ADMIN_USERS,
    links: ['View All Users', 'Ban/Suspend Users', 'User Verification', 'Role Management'],
  },
  {
    title: 'Content Moderation',
    color: '#B03E00',
    desc: 'Review and manage user-generated content',
    to: ROUTES.ADMIN_STORIES,
    links: ['Pending Reviews', 'Reported Content', 'Community Guidelines', 'Flagged Stories'],
  },
  {
    title: 'System Settings',
    color: '#CD5EA7',
    desc: 'Configure system preferences and features',
    to: ROUTES.ADMIN_SETTINGS,
    links: ['General Settings', 'Feature Toggle', 'Maintenance Mode', 'API Configuration'],
  },
  {
    title: 'Analytics & Reports',
    color: '#7BA276',
    desc: 'View usage statistics and system reports',
    to: ROUTES.ADMIN_ANALYTICS,
    links: ['Usage Statistics', 'Performance Metrics', 'System Logs', 'Export Reports'],
  },
]

export default function AdminDashboardPage() {
  return (
    <>
      <PageHeader title="Admin Dashboard" subtitle="Manage users, content, and system settings" />

      <div className="row g-4 mb-5">
        {ADMIN_STATS.map((stat) => (
          <div key={stat.label} className="col-md-3 col-sm-6">
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      <div className="row g-4 mb-5">
        {sections.map((section) => (
          <div key={section.title} className="col-md-6">
            <div className="dashboard-card">
              <h5 style={{ color: section.color }}>{section.title}</h5>
              <p className="text-muted">{section.desc}</p>
              <div className="list-group">
                {section.links.map((link) => (
                  <Link key={link} to={section.to} className="list-group-item list-group-item-action">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-card">
        <h5 style={{ color: '#D65F73' }} className="mb-4">Recent Activity</h5>
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead>
              <tr>
                <th>User</th>
                <th>Activity</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {ADMIN_ACTIVITY.map((row) => (
                <tr key={`${row.user}-${row.date}`}>
                  <td>{row.user}</td>
                  <td>{row.activity}</td>
                  <td>{row.date}</td>
                  <td><span className={`badge bg-${row.statusClass}`}>{row.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
