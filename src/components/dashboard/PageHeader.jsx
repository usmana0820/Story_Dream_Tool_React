export default function PageHeader({ title, subtitle, children }) {
  return (
    <div className="dashboard-page-header row align-items-center">
      <div className="col-md-8">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {children && <div className="col-md-4 text-md-end mt-3 mt-md-0">{children}</div>}
    </div>
  )
}
