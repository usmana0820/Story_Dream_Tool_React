import PageHeader from '../../../components/dashboard/PageHeader'

const reports = [
  { name: 'Monthly User Report', date: 'July 2026', type: 'PDF' },
  { name: 'Content Moderation Log', date: 'June 2026', type: 'CSV' },
  { name: 'System Performance Report', date: 'June 2026', type: 'PDF' },
]

export default function AdminReportsPage() {
  return (
    <>
      <PageHeader title="Reports" subtitle="Export system and usage reports">
        <button type="button" className="btn btn-primary btn-sm">Generate Report</button>
      </PageHeader>

      <div className="dashboard-card">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead>
              <tr>
                <th>Report Name</th>
                <th>Period</th>
                <th>Format</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((r) => (
                <tr key={r.name}>
                  <td><strong>{r.name}</strong></td>
                  <td>{r.date}</td>
                  <td>{r.type}</td>
                  <td><button type="button" className="btn btn-sm btn-primary">Download</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
