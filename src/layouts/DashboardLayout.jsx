import { Outlet, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/dashboard.css'
import DashboardTopNav from '../components/dashboard/DashboardTopNav'
import SidebarLogout from '../components/dashboard/SidebarLogout'
import { ROUTES } from '../constants/routes'

const navItems = [
  { to: ROUTES.DASHBOARD, label: 'Overview', icon: 'fa-th-large' },
  { to: ROUTES.STORIES, label: 'Stories', icon: 'fa-book' },
  { to: ROUTES.STORY_GENERATOR, label: 'Story Generator', icon: 'fa-magic' },
  { to: ROUTES.CHARACTERS, label: 'Characters', icon: 'fa-users' },
  { to: ROUTES.EPISODES, label: 'Episodes', icon: 'fa-film' },
  { to: ROUTES.EMOTION_VIEWER, label: 'Emotion Viewer', icon: 'fa-heart' },
  { to: ROUTES.AUDIO_LIBRARY, label: 'Audio Library', icon: 'fa-music' },
  { to: ROUTES.MOTION_VIDEOS, label: 'Motion Videos', icon: 'fa-video-camera' },
  { to: ROUTES.EXPORTS, label: 'Exports', icon: 'fa-download' },
  { to: ROUTES.PROFILE, label: 'Profile & Settings', icon: 'fa-user' },
]

export default function DashboardLayout() {
  return (
    <div className="dashboard-app">
      <DashboardTopNav mode="user" />
      <div className="dashboard-shell">
        <aside className="dashboard-sidebar">
          <div className="dashboard-sidebar-title">Creator Studio</div>
          <nav className="dashboard-sidebar-nav">
            {navItems.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === ROUTES.DASHBOARD}
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
