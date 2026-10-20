import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ROUTES } from '../../constants/routes'
import { USER_ROLES } from '../../constants'
import { logout } from '../../redux/authSlice'

export default function DashboardTopNav({ mode = 'user' }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)
  const [open, setOpen] = useState(false)
  const isAdmin = user?.role === USER_ROLES.ADMIN

  const handleLogout = () => {
    dispatch(logout())
    navigate(ROUTES.HOME)
  }

  return (
    <nav className="navbar navbar-expand-lg dashboard-topnav sticky-top">
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold" to={ROUTES.HOME}>
          <span className="brand-text">
            <span className="su">SuZu</span>{' '}
            <span className="dm">DreamToon</span>{' '}
            <span className="ai">AI</span>
          </span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse justify-content-lg-end${open ? ' show' : ''}`}>
          <ul className="navbar-nav align-items-lg-center gap-lg-1">
            <li className="nav-item">
              <Link className="nav-link" to={ROUTES.HOME} onClick={() => setOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={ROUTES.DASHBOARD} onClick={() => setOpen(false)}>
                User Dashboard
              </NavLink>
            </li>
            {isAdmin && (
              <li className="nav-item">
                <NavLink className="nav-link" to={ROUTES.ADMIN} onClick={() => setOpen(false)}>
                  Admin
                </NavLink>
              </li>
            )}
          </ul>

          <div className="d-flex flex-wrap gap-2 ms-lg-3 mt-3 mt-lg-0 align-items-center">
            {mode === 'user' && (
              <Link to={ROUTES.STORY_GENERATOR} className="btn-dash btn-dash-primary">
                New Project
              </Link>
            )}
            {isAdmin && mode === 'user' && (
              <Link to={ROUTES.ADMIN} className="btn-dash btn-dash-secondary">Admin</Link>
            )}
            {mode === 'admin' && (
              <Link to={ROUTES.DASHBOARD} className="btn-dash btn-dash-secondary">User Dashboard</Link>
            )}
            <button type="button" className="btn-dash btn-dash-danger btn-dash-logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
