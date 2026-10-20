import { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { ROUTES } from '../../../constants/routes'
import { USER_ROLES } from '../../../constants'
import { authenticateDemo, DEMO_USER } from '../../../constants/demoAuth'
import { loginDemo } from '../../../redux/authSlice'

export default function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (location.state?.admin) {
      navigate(ROUTES.ADMIN_LOGIN, { replace: true, state: location.state })
    }
  }, [location.state?.admin, location.state, navigate])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email || !form.password) return

    const account = authenticateDemo(form.email, form.password)
    if (!account) {
      toast.error('Invalid email or password')
      return
    }
    if (account.role === USER_ROLES.ADMIN) {
      toast.error('Use Admin Login for admin accounts')
      return
    }

    setLoading(true)
    dispatch(loginDemo({
      user: { email: account.email, name: account.name, role: account.role },
      token: 'demo-token',
    }))
    toast.success(`Welcome back, ${account.name}!`)
    const next = searchParams.get('next')
    const from = location.state?.from?.pathname
    navigate(from || (next === 'motion' ? ROUTES.STORY_GENERATOR : ROUTES.DASHBOARD))
    setLoading(false)
  }

  const fillDemo = () => {
    setForm({ email: DEMO_USER.email, password: DEMO_USER.password })
  }

  return (
    <section className="auth-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="auth-card">
              <h2>User Login</h2>
              <p className="auth-subtitle">Log in to access your Creator Dashboard</p>

              <div className="demo-login-hints mb-4">
                <p className="demo-hint-title">Demo user account</p>
                <button type="button" className="demo-hint-btn" onClick={fillDemo}>
                  <strong>User:</strong> {DEMO_USER.email} / {DEMO_USER.password}
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="loginEmail">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="loginEmail"
                    name="email"
                    placeholder="U@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="loginPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="loginPassword"
                    name="password"
                    placeholder="123456"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading ? 'Logging in...' : 'Login to Dashboard'}
                </button>
              </form>

              <p className="auth-switch mt-3">
                Admin? <Link to={ROUTES.ADMIN_LOGIN}>Admin Login</Link>
                {' · '}
                <Link to={ROUTES.REGISTER}>Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
