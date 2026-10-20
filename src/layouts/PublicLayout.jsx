import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/landing.css'
import '../styles/navbar-fixes.css'
import '../styles/testimonials.css'
import useLandingTheme from '../hooks/useLandingTheme'
import useScrollSpy from '../hooks/useScrollSpy'
import LandingNavbar from '../components/navbar/LandingNavbar'
import LandingFooter from '../components/footer/LandingFooter'
import { ROUTES } from '../constants/routes'

const LANDING_SECTIONS = [
  'home', 'about', 'features', 'demo-stories', 'emotion-audio',
  'motion-preview', 'workflow', 'characters', 'blog', 'testimonials',
  'cta', 'pricing', 'contact',
]

export default function PublicLayout() {
  useLandingTheme()
  const { pathname } = useLocation()
  const scrollSpy = useScrollSpy(LANDING_SECTIONS)

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && pathname === ROUTES.HOME) {
      const timer = setTimeout(() => scrollSpy.scrollToSection(hash), 150)
      return () => clearTimeout(timer)
    }
  }, [pathname, scrollSpy.scrollToSection])

  return (
    <div className="public-layout">
      <LandingNavbar {...scrollSpy} />
      <main>
        <Outlet />
      </main>
      <LandingFooter />
    </div>
  )
}
