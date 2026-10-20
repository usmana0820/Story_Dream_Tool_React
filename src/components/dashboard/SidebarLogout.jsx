import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../redux/authSlice'
import { ROUTES } from '../../constants/routes'

export default function SidebarLogout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate(ROUTES.HOME)
  }

  return (
    <div className="dashboard-sidebar-footer">
      <button type="button" className="dashboard-logout-btn" onClick={handleLogout}>
        <i className="fa fa-sign-out" />
        <span>Logout</span>
      </button>
    </div>
  )
}
