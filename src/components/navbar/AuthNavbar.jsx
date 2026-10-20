import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

export default function AuthNavbar({ variant = 'login' }) {
  return (
    <nav className="navbar neon-navbar auth-navbar">
      <div className="nav-beam" aria-hidden="true" />
      <div className="container">
        <Link className="navbar-brand neon-brand d-flex align-items-center gap-2 fw-bold" to={ROUTES.HOME}>
          <span className="brand-text">
            <span className="su">SuZu</span>{' '}
            <span className="dm">DreamToon</span>{' '}
            <span className="ai">AI</span>
          </span>
        </Link>
        <div className="neon-nav-actions neon-nav-actions-split">
          <Link to={ROUTES.HOME} className="btn-nav btn-nav-login">← Home</Link>
          <Link
            to={ROUTES.LOGIN}
            className={`btn-nav btn-nav-login${variant === 'login' ? ' active-auth' : ''}`}
          >
            User Login
          </Link>
          <Link to={ROUTES.DASHBOARD} className="btn-nav btn-nav-studio">Dashboard</Link>
          <Link
            to={ROUTES.ADMIN_LOGIN}
            className={`btn-nav btn-nav-admin${variant === 'admin-login' ? ' active-auth' : ''}`}
          >
            Admin Login
          </Link>
          {variant !== 'register' && (
            <Link to={ROUTES.REGISTER} className="btn-nav btn-nav-signup">Sign Up</Link>
          )}
        </div>
      </div>
    </nav>
  )
}
