import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ROUTES } from '../constants/routes'
import { USER_ROLES } from '../constants'

export default function AdminRoute({ children }) {
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.ADMIN_LOGIN} state={{ from: location }} replace />
  }

  if (user?.role !== USER_ROLES.ADMIN) {
    return <Navigate to={ROUTES.DASHBOARD} replace />
  }

  return children
}
