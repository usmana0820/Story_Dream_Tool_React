export default function StatCard({ label, value, sub, color, subClass = '' }) {
  return (
    <div className="dashboard-stat-card" style={{ borderLeft: `4px solid ${color}` }}>
      <h6>{label}</h6>
      <h2 style={{ color }}>{value}</h2>
      <small className={subClass}>{sub}</small>
    </div>
  )
}
