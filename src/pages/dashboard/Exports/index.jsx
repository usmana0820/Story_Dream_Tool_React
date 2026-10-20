import PageHeader from '../../../components/dashboard/PageHeader'

const exports = [
  { name: 'Magical Forest — Full Series', type: 'Video MP4', date: 'June 20, 2026', size: '245 MB' },
  { name: 'Happy DAF Audio Pack', type: 'Audio MP3', date: 'June 19, 2026', size: '12 MB' },
  { name: 'Character Pack Export', type: 'JSON', date: 'June 18, 2026', size: '2 MB' },
]

export default function ExportsPage() {
  return (
    <>
      <PageHeader title="Exports" subtitle="Download your stories, audio, and video exports" />

      <div className="dashboard-card">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead>
              <tr>
                <th>Export Name</th>
                <th>Type</th>
                <th>Date</th>
                <th>Size</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {exports.map((e) => (
                <tr key={e.name}>
                  <td><strong>{e.name}</strong></td>
                  <td>{e.type}</td>
                  <td>{e.date}</td>
                  <td>{e.size}</td>
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
