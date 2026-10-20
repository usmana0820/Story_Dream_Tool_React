import PageHeader from '../../../components/dashboard/PageHeader'

export default function AdminAnalyticsPage() {
  return (
    <>
      <PageHeader title="Analytics" subtitle="Platform usage statistics and performance metrics" />

      <div className="row g-4 mb-4">
        {[
          { label: 'Daily Active Users', value: '342', color: '#D65F73' },
          { label: 'Stories Generated Today', value: '89', color: '#B03E00' },
          { label: 'Avg. Session Time', value: '18m', color: '#CD5EA7' },
          { label: 'Conversion Rate', value: '4.2%', color: '#7BA276' },
        ].map((s) => (
          <div key={s.label} className="col-md-3 col-sm-6">
            <div className="dashboard-stat-card" style={{ borderLeft: `4px solid ${s.color}` }}>
              <h6>{s.label}</h6>
              <h2 style={{ color: s.color }}>{s.value}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-card">
        <h6 className="text-white mb-3">Weekly Story Generation Trend</h6>
        <div className="d-flex align-items-end gap-2" style={{ height: 160 }}>
          {[40, 65, 55, 80, 70, 95, 88].map((h, i) => (
            <div
              key={i}
              className="flex-fill rounded-top"
              style={{ height: `${h}%`, background: 'linear-gradient(180deg, #f97316, #a855f7)', opacity: 0.85 }}
              title={`Day ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}
