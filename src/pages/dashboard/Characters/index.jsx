import PageHeader from '../../../components/dashboard/PageHeader'
import { USER_CHARACTERS } from '../../../constants/dashboardData'

export default function CharactersPage() {
  return (
    <>
      <PageHeader title="My Characters" subtitle="Manage AI-generated character profiles">
        <button type="button" className="btn btn-primary btn-sm">+ New Character</button>
      </PageHeader>

      <div className="row g-4">
        {USER_CHARACTERS.map((char) => (
          <div key={char.name} className="col-md-3 col-sm-6">
            <div className="dashboard-card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{char.icon}</div>
              <h6 style={{ color: char.color }}>{char.name}</h6>
              <small className="text-muted">Created {char.date}</small>
              <div className="mt-3">
                <button type="button" className="btn btn-sm btn-outline-primary w-100">Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
