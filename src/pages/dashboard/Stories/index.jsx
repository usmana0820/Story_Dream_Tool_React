import { Link } from 'react-router-dom'
import PageHeader from '../../../components/dashboard/PageHeader'
import { ROUTES } from '../../../constants/routes'
import { USER_STORIES } from '../../../constants/dashboardData'

export default function StoriesPage() {
  return (
    <>
      <PageHeader title="My Stories" subtitle="Your recently generated cartoon stories">
        <Link to={ROUTES.STORY_GENERATOR} className="btn btn-primary btn-sm">Generate Story</Link>
      </PageHeader>

      <div className="dashboard-card">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date Created</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {USER_STORIES.map((story) => (
                <tr key={story.title}>
                  <td><strong>{story.title}</strong></td>
                  <td>{story.date}</td>
                  <td><span className={`badge bg-${story.statusClass}`}>{story.status}</span></td>
                  <td>
                    <Link to={ROUTES.STORY_EDITOR.replace(':id', '1')} className="btn btn-sm btn-outline-primary">
                      {story.status === 'Draft' ? 'Edit' : 'View'}
                    </Link>
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
