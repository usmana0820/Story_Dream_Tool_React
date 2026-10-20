import { Outlet, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/dashboard.css'
import DashboardTopNav from '../components/dashboard/DashboardTopNav'
import SidebarLogout from '../components/dashboard/SidebarLogout'
import { ROUTES } from '../constants/routes'

const navItems = [
  { to: ROUTES.ADMIN, label: 'Overview', icon: 'fa-tachometer' },
  { to: ROUTES.ADMIN_USERS, label: 'Users', icon: 'fa-users' },
  { to: ROUTES.ADMIN_STORIES, label: 'Stories', icon: 'fa-book' },
  { to: ROUTES.ADMIN_CHARACTERS, label: 'Characters', icon: 'fa-user-circle' },
  { to: ROUTES.ADMIN_AUDIO, label: 'Audio', icon: 'fa-music' },
  { to: ROUTES.ADMIN_MOTION_VIDEOS, label: 'Motion Videos', icon: 'fa-video-camera' },
  { to: ROUTES.ADMIN_ANALYTICS, label: 'Analytics', icon: 'fa-bar-chart' },
  { to: ROUTES.ADMIN_REPORTS, label: 'Reports', icon: 'fa-file-text' },
  { to: ROUTES.ADMIN_SETTINGS, label: 'Settings', icon: 'fa-cog' },
  { to: ROUTES.ADMIN_NOTIFICATIONS, label: 'Notifications', icon: 'fa-bell' },
]

export default function AdminLayout() {
  return (
    <div className="dashboard-app">
      <DashboardTopNav mode="admin" />
      <div className="dashboard-shell">
        <aside className="dashboard-sidebar admin-sidebar">
          <div className="dashboard-sidebar-title">Admin Panel</div>
          <nav className="dashboard-sidebar-nav">
            {navItems.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === ROUTES.ADMIN}
                className={({ isActive }) => `dashboard-sidebar-link${isActive ? ' active' : ''}`}
              >
                <i className={`fa ${icon}`} />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
          <SidebarLogout />
        </aside>
        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
      <footer className="dashboard-footer">
        <p>&copy; {new Date().getFullYear()} SuZu DreamToon AI. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
