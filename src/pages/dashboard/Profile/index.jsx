import { useSelector } from 'react-redux'
import PageHeader from '../../../components/dashboard/PageHeader'

export default function ProfilePage() {
  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <PageHeader title="Profile & Settings" subtitle="Manage your account and preferences" />

      <div className="dashboard-card">
        <h5 style={{ color: '#D65F73' }} className="mb-4">Account Settings</h5>

        <div className="row g-4">
          <div className="col-md-6">
            <h6 className="mb-3 text-white">Profile Information</h6>
            <div className="mb-3">
              <label className="form-label" htmlFor="fullName">Full Name</label>
              <input type="text" className="form-control" id="fullName" defaultValue={user?.name || 'John Doe'} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input type="email" className="form-control" id="email" defaultValue={user?.email || 'john@example.com'} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="bio">Bio</label>
              <textarea className="form-control" id="bio" rows={3} placeholder="Tell us about yourself" />
            </div>
            <button type="button" className="btn btn-primary">Save Changes</button>
          </div>

          <div className="col-md-6">
            <h6 className="mb-3 text-white">Security Settings</h6>
            <div className="mb-3">
              <label className="form-label">Current Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm New Password</label>
              <input type="password" className="form-control" />
            </div>
            <button type="button" className="btn btn-warning">Change Password</button>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        <h6 className="mb-3 text-white">Preferences</h6>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="emailNotifications" defaultChecked />
          <label className="form-check-label" htmlFor="emailNotifications">Receive email notifications</label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="publicProfile" defaultChecked />
          <label className="form-check-label" htmlFor="publicProfile">Make my profile public</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="darkMode" defaultChecked />
          <label className="form-check-label" htmlFor="darkMode">Enable dark mode</label>
        </div>
      </div>
    </>
  )
}
