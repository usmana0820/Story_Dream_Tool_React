import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { ROUTES } from '../../../constants/routes'
import { USER_ROLES } from '../../../constants'
import { loginDemo } from '../../../redux/authSlice'

function resolveRole(email) {
  return email.toLowerCase().includes('admin') ? USER_ROLES.ADMIN : USER_ROLES.USER
}

export default function RegisterPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState({
    name: '', email: '', password: '', confirm: '', terms: false,
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (form.password !== form.confirm) {
      toast.error('Passwords do not match.')
      return
    }
    if (!form.terms) {
      toast.error('Please agree to the Terms & Conditions.')
      return
    }

    setLoading(true)
    const role = resolveRole(form.email)
    dispatch(loginDemo({
      user: { email: form.email, name: form.name, role },
      token: 'demo-token',
    }))
    toast.success('Account created! Welcome to SuZu DreamToon AI.')
    const next = searchParams.get('next')
    if (role === USER_ROLES.ADMIN) {
      navigate(ROUTES.ADMIN)
    } else {
      navigate(next === 'motion' ? ROUTES.STORY_GENERATOR : ROUTES.DASHBOARD)
    }
    setLoading(false)
  }

  return (
    <section className="auth-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="auth-card">
              <h2>Create Account</h2>
              <p className="auth-subtitle">Join AI Cartoon Story Studio and start creating ✨</p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="registerName">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="registerName"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="registerEmail">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="registerEmail"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="registerPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="registerPassword"
                    name="password"
                    placeholder="Create password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="registerConfirm">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="registerConfirm"
                    name="confirm"
                    placeholder="Confirm password"
                    value={form.confirm}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="terms"
                    id="terms"
                    checked={form.terms}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="terms">
                    I agree to the Terms & Conditions
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading ? 'Creating account...' : 'Sign Up Free'}
                </button>
              </form>

              <p className="auth-switch mt-3">
                Already have an account? <Link to={ROUTES.LOGIN}>Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
