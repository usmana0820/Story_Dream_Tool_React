import { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { ROUTES } from '../../../constants/routes'
import { USER_ROLES } from '../../../constants'
import { authenticateDemo, DEMO_ADMIN } from '../../../constants/demoAuth'
import { loginDemo } from '../../../redux/authSlice'

export default function AdminLoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const [form, setForm] = useState({ email: DEMO_ADMIN.email, password: DEMO_ADMIN.password })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setForm({ email: DEMO_ADMIN.email, password: DEMO_ADMIN.password })
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email || !form.password) return

    const account = authenticateDemo(form.email, form.password)
    if (!account || account.role !== USER_ROLES.ADMIN) {
      toast.error('Invalid admin credentials. Use admin@gmail.com / 123456')
      return
    }

    setLoading(true)
    dispatch(loginDemo({
      user: { email: account.email, name: account.name, role: account.role },
      token: 'demo-token',
    }))
    toast.success(`Welcome, ${account.name}!`)
    const next = searchParams.get('next')
    navigate(location.state?.from?.pathname || next || ROUTES.ADMIN)
    setLoading(false)
  }

  return (
    <section className="auth-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="auth-card admin-auth-card">
              <h2>Admin Login</h2>
              <p className="auth-subtitle">Sign in to the Admin Dashboard</p>

              <div className="demo-login-hints mb-4 admin-demo-hint">
                <p className="demo-hint-title">Demo admin account</p>
                <button
                  type="button"
                  className="demo-hint-btn"
                  onClick={() => setForm({ email: DEMO_ADMIN.email, password: DEMO_ADMIN.password })}
                >
                  <strong>Admin:</strong> {DEMO_ADMIN.email} / {DEMO_ADMIN.password}
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="adminEmail">Admin Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="adminEmail"
                    name="email"
                    placeholder="admin@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="adminPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="adminPassword"
                    name="password"
                    placeholder="123456"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 admin-login-btn" disabled={loading}>
                  {loading ? 'Logging in...' : 'Admin Login'}
                </button>
              </form>

              <p className="auth-switch mt-3">
                User account? <Link to={ROUTES.LOGIN}>User Login</Link>
                {' · '}
                <Link to={ROUTES.HOME}>Back to Home</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
