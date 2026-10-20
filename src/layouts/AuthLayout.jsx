import { Outlet, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/landing.css'
import '../styles/navbar-fixes.css'
import useLandingTheme from '../hooks/useLandingTheme'
import AuthNavbar from '../components/navbar/AuthNavbar'
import LandingFooter from '../components/footer/LandingFooter'
import { ROUTES } from '../constants/routes'

export default function AuthLayout() {
  useLandingTheme()
  const { pathname } = useLocation()
  const variant = pathname === ROUTES.REGISTER
    ? 'register'
    : pathname === ROUTES.ADMIN_LOGIN
      ? 'admin-login'
      : 'login'

  return (
    <div className="public-layout auth-page">
      <AuthNavbar variant={variant} />
      <main>
        <Outlet />
      </main>
      <LandingFooter />
    </div>
  )
}
