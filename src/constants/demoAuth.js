import { USER_ROLES } from '../constants'
import { ROUTES } from './routes'

export const DEMO_USER = {
  email: 'U@gmail.com',
  password: '123456',
  name: 'User',
  role: USER_ROLES.USER,
  redirect: ROUTES.DASHBOARD,
}

export const DEMO_ADMIN = {
  email: 'admin@gmail.com',
  password: '123456',
  name: 'Admin',
  role: USER_ROLES.ADMIN,
  redirect: ROUTES.ADMIN,
}

const DEMO_ACCOUNTS = [DEMO_USER, DEMO_ADMIN]

export function authenticateDemo(email, password) {
  const normalized = email.trim().toLowerCase()
  const account = DEMO_ACCOUNTS.find(
    (a) => a.email.toLowerCase() === normalized && a.password === password,
  )
  return account || null
}
