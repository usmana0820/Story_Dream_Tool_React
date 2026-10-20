import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ROUTES } from '../../constants/routes'
import { USER_ROLES } from '../../constants'
import { logout } from '../../redux/authSlice'
import { img } from '../../constants/landing'

const exploreLinks = [
  { id: 'about', label: 'About', icon: 'fa-info-circle' },
  { id: 'features', label: 'Features', icon: 'fa-th-large' },
  { id: 'workflow', label: 'Workflow', icon: 'fa-random' },
  { id: 'demo-stories', label: 'Demo Stories', icon: 'fa-book' },
  { id: 'emotion-audio', label: 'Emotion Audio', icon: 'fa-heart' },
  { id: 'motion-preview', label: 'Motion Preview', icon: 'fa-video-camera' },
  { id: 'characters', label: 'Characters', icon: 'fa-users' },
  { id: 'blog', label: 'Blog', icon: 'fa-pencil' },
  { id: 'testimonials', label: 'Testimonials', icon: 'fa-comment' },
]

export default function LandingNavbar({
  navbarRef,
  navScrolled,
  scrollProgress,
  activeSection,
  liveLabel,
  liveTheme,
  isExploreActive,
  scrollToSection,
}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isHome = pathname === ROUTES.HOME
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  const isAdmin = user?.role === USER_ROLES.ADMIN

  const [mobileOpen, setMobileOpen] = useState(false)
  const [exploreOpen, setExploreOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 991) {
        setMobileOpen(false)
        setExploreOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    scrollToSection(sectionId)
    setMobileOpen(false)
    setExploreOpen(false)
  }

  const handleExploreToggle = (e) => {
    if (window.innerWidth > 991) return
    e.preventDefault()
    e.stopPropagation()
    setExploreOpen((o) => !o)
  }

  const handleLogout = () => {
    dispatch(logout())
    closeMobile()
    navigate(ROUTES.HOME)
  }

  const sectionTo = (sectionId) => (isHome ? `#${sectionId}` : `${ROUTES.HOME}#${sectionId}`)

  const handleSectionClick = (e, sectionId) => {
    if (!isHome) {
      closeMobile()
      return
    }
    handleNavClick(e, sectionId)
  }

  const isActive = (id) => activeSection === id

  return (
    <>
      <nav
        ref={navbarRef}
        className={`navbar navbar-expand-lg neon-navbar glass-navbar${navScrolled ? ' scrolled' : ''}`}
      >
        <div className="nav-beam" aria-hidden="true" />
        <div
          className="nav-scroll-progress"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <div className="container">
          <div className="navbar-left-zone">
            <Link className="navbar-brand neon-brand d-flex align-items-center gap-2 fw-bold" to={ROUTES.HOME}>
              <span className="logo-ring">
                <img src={img('suzu_main_logo.png')} alt="SuZu Logo" width="40" height="40" className="logo-bounce" />
              </span>
              <span className="brand-text">
                <span className="su">SuZu</span>
                <span className="dm">DreamToon</span>
                <span className="ai">AI</span>
              </span>
            </Link>

            {isHome && (
              <div className="nav-live-pill" data-theme={liveTheme} aria-live="polite" title="Current section">
                <span className="nav-live-dot" aria-hidden="true" />
                <span className="nav-live-label" key={activeSection}>{liveLabel}</span>
              </div>
            )}
          </div>

          <button
            className="navbar-toggler neon-toggler border-0 ms-auto ms-lg-0"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="toggler-bar" />
            <span className="toggler-bar" />
            <span className="toggler-bar" />
          </button>

          <div className={`collapse navbar-collapse justify-content-lg-end ms-lg-auto${mobileOpen ? ' show' : ''}`} id="nav">
            <div className="landing-nav-cluster align-items-end align-items-lg-center">
            <ul className="navbar-nav align-items-end align-items-lg-center ms-lg-auto">
              <li className="nav-item">
                {isHome ? (
                  <a
                    className={`nav-link neon-nav-link${isActive('home') ? ' active' : ''}`}
                    href="#home"
                    onClick={(e) => handleNavClick(e, 'home')}
                  >
                    <i className="fa fa-home" /><span>Home</span>
                  </a>
                ) : (
                  <Link
                    className="nav-link neon-nav-link"
                    to={ROUTES.HOME}
                    onClick={closeMobile}
                  >
                    <i className="fa fa-home" /><span>Home</span>
                  </Link>
                )}
              </li>

              <li
                className={`nav-item neon-dropdown${isExploreActive ? ' active' : ''}${exploreOpen ? ' open' : ''}`}
                data-nav="explore"
              >
                <button
                  className="nav-link neon-nav-link neon-dropdown-toggle"
                  type="button"
                  aria-expanded={exploreOpen}
                  onClick={handleExploreToggle}
                >
                  <i className="fa fa-th" />
                  <span className="explore-label">Explore</span>
                  <i className="fa fa-angle-down dropdown-arrow" />
                </button>
                <ul className="neon-dropdown-menu neon-dropdown-wide">
                  <li className="dropdown-label">Platform</li>
                  {exploreLinks.slice(0, 3).map(({ id, label, icon }) => (
                    <li key={id}>
                      <Link
                        className={`neon-dropdown-item${isHome && isActive(id) ? ' active' : ''}`}
                        to={sectionTo(id)}
                        onClick={(e) => handleSectionClick(e, id)}
                      >
                        <i className={`fa ${icon}`} /> {label}
                      </Link>
                    </li>
                  ))}
                  <li className="dropdown-divider" />
                  <li className="dropdown-label">Studio</li>
                  {exploreLinks.slice(3, 7).map(({ id, label, icon }) => (
                    <li key={id}>
                      <Link
                        className={`neon-dropdown-item${isHome && isActive(id) ? ' active' : ''}`}
                        to={sectionTo(id)}
                        onClick={(e) => handleSectionClick(e, id)}
                      >
                        <i className={`fa ${icon}`} /> {label}
                      </Link>
                    </li>
                  ))}
                  <li className="dropdown-divider" />
                  <li className="dropdown-label">Community</li>
                  {exploreLinks.slice(7).map(({ id, label, icon }) => (
                    <li key={id}>
                      <Link
                        className={`neon-dropdown-item${isHome && isActive(id) ? ' active' : ''}`}
                        to={sectionTo(id)}
                        onClick={(e) => handleSectionClick(e, id)}
                      >
                        <i className={`fa ${icon}`} /> {label}
                      </Link>
                    </li>
                  ))}
                  <li className="dropdown-divider" />
                  <li>
                    <Link className="neon-dropdown-item" to={ROUTES.DASHBOARD} onClick={closeMobile}>
                      <i className="fa fa-magic" /> Creator Studio
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link neon-nav-link${isHome && isActive('pricing') ? ' active' : ''}`}
                  to={sectionTo('pricing')}
                  onClick={(e) => handleSectionClick(e, 'pricing')}
                >
                  <i className="fa fa-tag" /><span>Pricing</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link neon-nav-link${isHome && isActive('contact') ? ' active' : ''}`}
                  to={sectionTo('contact')}
                  onClick={(e) => handleSectionClick(e, 'contact')}
                >
                  <i className="fa fa-envelope" /><span>Contact</span>
                </Link>
              </li>
            </ul>

            <div className="neon-nav-actions neon-nav-actions-split mt-3 mt-lg-0">
              {isAuthenticated ? (
                <>
                  <Link to={ROUTES.DASHBOARD} className="btn-nav btn-nav-studio" onClick={closeMobile}>
                    Dashboard
                  </Link>
                  {isAdmin && (
                    <Link to={ROUTES.ADMIN} className="btn-nav btn-nav-admin" onClick={closeMobile}>
                      Admin Panel
                    </Link>
                  )}
                  <button type="button" className="btn-nav btn-nav-login" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to={ROUTES.LOGIN} className="btn-nav btn-nav-login" onClick={closeMobile}>
                    Login
                  </Link>
                  <Link to={ROUTES.DASHBOARD} className="btn-nav btn-nav-studio" onClick={closeMobile}>
                    Dashboard
                  </Link>
                  <Link to={ROUTES.ADMIN_LOGIN} className="btn-nav btn-nav-admin" onClick={closeMobile}>
                    Admin Login
                  </Link>
                  <Link to={ROUTES.REGISTER} className="btn-nav btn-nav-signup" onClick={closeMobile}>
                    Sign Up
                  </Link>
                </>
              )}
            </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="navbar-divider" aria-hidden="true" />
    </>
  )
}
