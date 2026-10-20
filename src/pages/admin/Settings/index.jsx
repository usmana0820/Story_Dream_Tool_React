import PageHeader from '../../../components/dashboard/PageHeader'

export default function AdminSettingsPage() {
  return (
    <>
      <PageHeader title="System Settings" subtitle="Configure platform preferences and features" />

      <div className="dashboard-card">
        <div className="row g-4">
          <div className="col-md-6">
            <h6 className="text-white mb-3">General Settings</h6>
            <div className="mb-3">
              <label className="form-label">Platform Name</label>
              <input type="text" className="form-control" defaultValue="SuZu DreamToon AI" />
            </div>
            <div className="mb-3">
              <label className="form-label">Support Email</label>
              <input type="email" className="form-control" defaultValue="support@suzudreamtoon.com" />
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="maintenance" />
              <label className="form-check-label" htmlFor="maintenance">Maintenance Mode</label>
            </div>
          </div>
          <div className="col-md-6">
            <h6 className="text-white mb-3">Feature Toggles</h6>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="storyGen" defaultChecked />
              <label className="form-check-label" htmlFor="storyGen">Story Generator</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="motionVideo" defaultChecked />
              <label className="form-check-label" htmlFor="motionVideo">Motion Video Engine</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="dafAudio" defaultChecked />
              <label className="form-check-label" htmlFor="dafAudio">DAF Audio Engine</label>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-primary mt-3">Save Settings</button>
      </div>
    </>
  )
}
