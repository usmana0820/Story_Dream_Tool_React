import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PageHeader from '../../../components/dashboard/PageHeader'
import StatCard from '../../../components/dashboard/StatCard'
import { ROUTES } from '../../../constants/routes'
import { USER_PROJECTS, USER_STATS } from '../../../constants/dashboardData'

export default function DashboardPage() {
  const { user } = useSelector((state) => state.auth)
  const name = user?.name || 'User'

  return (
    <>
      <PageHeader
        title={`Welcome Back, ${name}! 👋`}
        subtitle="Manage your projects and create amazing cartoon content"
      >
        <Link to={ROUTES.STORY_GENERATOR} className="btn btn-primary btn-sm me-2">New Project</Link>
      </PageHeader>

      <div className="row g-4 mb-5">
        {USER_STATS.map((stat) => (
          <div key={stat.label} className="col-md-3 col-sm-6">
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      <h5 className="text-white mb-3">Recent Projects</h5>
      <div className="row g-4">
        {USER_PROJECTS.map((project) => (
          <div key={project.title} className="col-md-4">
            <div className="dashboard-card">
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{project.icon}</div>
              <h5 style={{ color: project.color }}>{project.title}</h5>
              <p className="text-muted">Started on {project.date}</p>
              <div className="progress mb-3" style={{ height: 5 }}>
                <div
                  className="progress-bar"
                  style={{ width: `${project.progress}%`, background: project.color }}
                />
              </div>
              <small className="text-muted">{project.progress}% Complete</small>
              <div className="mt-3 d-flex gap-2">
                <Link to={ROUTES.STORY_EDITOR.replace(':id', '1')} className="btn btn-sm btn-primary">Continue</Link>
                <button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
